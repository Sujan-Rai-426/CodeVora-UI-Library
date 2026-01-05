import React, { useRef } from 'react';
import styles from './GlassmorphismBackground.module.css';

export const GlassmorphismBackground = ({ children }) => {
    const wrapperRef = useRef(null);

    // Track mouse position relative to the container
    const handleMouseMove = (e) => {
        if (!wrapperRef.current) return;
        const rect = wrapperRef.current.getBoundingClientRect();
        
        // Convert to percentage of the container
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        // Update CSS Variables for the blobs to use
        wrapperRef.current.style.setProperty('--mouse-x', `${x}%`);
        wrapperRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    return (
        <div 
            className={styles.wrapper} 
            ref={wrapperRef} 
            onMouseMove={handleMouseMove}
        >
            <div className={styles.blobContainer}>
                {/* Blobs move with animation + subtle mouse influence */}
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>
                <div className={`${styles.blob} ${styles.blob3}`}></div>
                {/* Special "Pointer Glow" blob */}
                <div className={styles.pointerBlob}></div>
            </div>
            
            <div className={styles.glassLayer}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};