import React from 'react';
import styles from './GlassmorphismBackground.module.css';

export const GlassmorphismBackground = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blobContainer}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>
                <div className={`${styles.blob} ${styles.blob3}`}></div>
            </div>
            <div className={styles.glassLayer}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};