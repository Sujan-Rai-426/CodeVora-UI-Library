import React from 'react';
import styles from './StarfieldBackground.module.css';

export const StarfieldBackground = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.stars}></div>
            <div className={styles.stars2}></div>
            <div className={styles.stars3}></div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};