import React, { useRef } from 'react';
import styles from './WavesBackground.module.css';

export const WavesBackground = ({ children, className = "" }) => {
    const wrapperRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!wrapperRef.current) return;
        
        // Use getBoundingClientRect to ensure accuracy even if zoomed/scrolled
        const rect = wrapperRef.current.getBoundingClientRect();
        
        // Calculate relative X position (0 to 1)
        const x = (e.clientX - rect.left) / rect.width;
        
        // Calculate shift (-30px to 30px)
        const shift = (x - 0.5) * 60; 
        
        // Set the property on the wrapper so all children can access it
        wrapperRef.current.style.setProperty('--wave-shift', `${shift}px`);
    };

    return (
        <div 
            ref={wrapperRef}
            className={`${styles.wrapper} ${className}`}
            onMouseMove={handleMouseMove}
            // Ensure the container catches the mouse even if moving fast
            onMouseLeave={() => {
                if(wrapperRef.current) wrapperRef.current.style.setProperty('--wave-shift', '0px');
            }}
        >
            {/* 1. Waves go behind content or are part of the bottom */}
            <div className={styles.waveContainer}>
                <svg className={styles.waves} viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className={styles.parallax}>
                        <use href="#gentle-wave" x="48" y="0" className={styles.waveLayer1} />
                        <use href="#gentle-wave" x="48" y="3" className={styles.waveLayer2} />
                        <use href="#gentle-wave" x="48" y="5" className={styles.waveLayer3} />
                        <use href="#gentle-wave" x="48" y="7" className={styles.waveLayer4} />
                    </g>
                </svg>
            </div>

            {/* 2. Content must have pointer-events: none so mouse passes through to wrapper */}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};