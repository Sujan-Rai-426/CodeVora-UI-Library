// src/components/core/Background/presets/Cyberpunk/CyberpunkBackground.jsx

import React from 'react';
import styles from './CyberpunkBackground.module.css';

export const CyberpunkBackground = ({ children }) => {
    return (
        <div className={styles.container}>
            {/* Decorative Grid Layer */}
            <div className={styles.grid}></div>
            
            {/* Animated Scanline Effect */}
            <div className={styles.scanlines}></div>

            {/* Aesthetic Glitch Shapes */}
            <div className={`${styles.shape} ${styles.shape1}`}></div>
            <div className={`${styles.shape} ${styles.shape2}`}></div>

            {/* Main Content Layer */}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};
