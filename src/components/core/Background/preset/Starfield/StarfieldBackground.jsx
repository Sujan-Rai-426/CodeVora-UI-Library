import React, { useEffect, useRef } from 'react';
import styles from './StarfieldBackground.module.css';

export const StarfieldBackground = ({ children, starCount = 150, speed = 0.1 }) => {
    const canvasRef = useRef(null);
    const wrapperRef = useRef(null); // 1. Add a ref for the wrapper
    const mouseRef = useRef({ x: -1000, y: -1000 }); // Start off-screen

    useEffect(() => {
        const canvas = canvasRef.current;
        const wrapper = wrapperRef.current; // 2. Reference the wrapper
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const handleResize = () => {
            // Set drawing surface to match visual size
            canvas.width = wrapper.offsetWidth;
            canvas.height = wrapper.offsetHeight;
        };

        const handleMouseMove = (e) => {
            const rect = wrapper.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };
        
        // Reset mouse when leaving so stars return to normal
        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        window.addEventListener('resize', handleResize);
        wrapper.addEventListener('mousemove', handleMouseMove);
        wrapper.addEventListener('mouseleave', handleMouseLeave);
        handleResize();

        const stars = Array.from({ length: starCount }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2,
            opacity: Math.random(),
            speed: Math.random() * speed
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            stars.forEach(star => {
                let xPx = (star.x / 100) * canvas.width;
                let yPx = (star.y / 100) * canvas.height;

                const dx = mouseRef.current.x - xPx;
                const dy = mouseRef.current.y - yPx;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                // Parallax effect
                if (dist < 200) {
                    const force = (200 - dist) / 200;
                    xPx -= dx * force * 0.05; // Slightly stronger reaction
                    yPx -= dy * force * 0.05;
                }

                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(xPx, yPx, star.size, 0, Math.PI * 2);
                ctx.fill();

                star.y -= star.speed;
                if (star.y < 0) star.y = 100;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            wrapper.removeEventListener('mousemove', handleMouseMove);
            wrapper.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [starCount, speed]);

    return (
        <div ref={wrapperRef} className={styles.wrapper}>
            <canvas ref={canvasRef} className={styles.canvas} />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};