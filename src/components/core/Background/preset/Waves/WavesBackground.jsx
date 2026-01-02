// src/components/core/Background/preset/Waves/WavesBackground.jsx

import React from 'react';
import styles from './WavesBackground.module.css';

export const WavesBackground = ({ children, className = "" }) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <div className={styles.content}>
                {children}
            </div>

            <div className={styles.waveContainer}>
                <svg className={styles.waves} viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className={styles.parallax}>
                        {/* Layered waves with different blues/purples */}
                        <use href="#gentle-wave" x="48" y="0" fill="rgba(79, 70, 229, 0.7)" />
                        <use href="#gentle-wave" x="48" y="3" fill="rgba(79, 70, 229, 0.5)" />
                        <use href="#gentle-wave" x="48" y="5" fill="rgba(79, 70, 229, 0.3)" />
                        <use href="#gentle-wave" x="48" y="7" fill="#4f46e5" />
                    </g>
                </svg>
            </div>
        </div>
    );
};