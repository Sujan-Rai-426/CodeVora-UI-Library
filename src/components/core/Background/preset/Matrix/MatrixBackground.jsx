import React, { useState, useRef, useEffect } from "react";
import styles from "./MatrixBackground.module.css";

export const MatrixBackground = ({ children }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            // Use parent element size to ensure it fills correctly
            canvas.width = containerRef.current.offsetWidth;
            canvas.height = containerRef.current.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const charStr = "01ｱ1ｳｴ0ｶｷｹｺｻ11ｽｾ0ﾀﾁﾂ1ﾄﾅﾆ01ﾈﾉﾊﾋﾌﾍ1ﾏﾐ00ﾒﾓﾔﾕ10ﾗﾘﾙ1ﾛﾜﾝ";
        const characters = charStr.split("");
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(2, 5, 2, 0.15)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                const opacity = Math.random();

                if (opacity > 0.9) {
                    ctx.fillStyle = "#fff";
                } else if (opacity > 0.5) {
                    ctx.fillStyle = "#00ff41";
                } else {
                    ctx.fillStyle = "#003b11";
                }

                ctx.font = `${fontSize}px monospace`;
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);
        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <div className={styles.wrapper} ref={containerRef} onMouseMove={handleMouseMove}>
            <canvas ref={canvasRef} className={styles.canvas} />
            <div className={styles.vignette} />
            
            <div 
                className={styles.gridOverlay} 
                style={{ "--mouse-x": `${mousePos.x}px`, "--mouse-y": `${mousePos.y}px` }}
            >
                <div className={styles.gridGlow} />
            </div>

            <div className={styles.content}>
                {children}
            </div>

            <div className={styles.scanline} />
        </div>
    );
};