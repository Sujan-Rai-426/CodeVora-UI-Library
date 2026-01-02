// src/components/core/Background/presets/Messy/MessyBackground.jsx

import React from 'react';
import styles from './MessyBackground.module.css';

export const MessyBackground = ({ children, className = "" }) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            {/* SVG Filter remains in DOM but takes up no space */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix 
                            in="blur" 
                            mode="matrix" 
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" 
                            result="goo" 
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>

            <div className={styles.gradientsContainer}>
                <div className={styles.g1}></div>
                <div className={styles.g2}></div>
                <div className={styles.g3}></div>
                <div className={styles.g4}></div>
                <div className={styles.g5}></div>
            </div>

            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};