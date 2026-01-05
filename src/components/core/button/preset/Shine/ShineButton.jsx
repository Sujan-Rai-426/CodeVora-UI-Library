import React, { useState } from 'react';
import styles from './ShineButton.module.css';

export const ShineButton = ({ 
    padding = "12px 24px", 
    color = "#3b82f6", 
    children, 
    className = "", 
    ...props 
}) => {
    const [isShining, setIsShining] = useState(false);

    // Triggers the light sweep for one full cycle on click/tap
    const handleTrigger = () => {
        setIsShining(true);
        // Matches the 800ms animation duration in CSS
        setTimeout(() => setIsShining(false), 800);
    };

    const customStyle = {
        padding: padding,
        backgroundColor: color,
        '--btn-color': color, // Used for shadow tinting
    };

    return (
        <button 
            style={customStyle} 
            className={`${styles.shineBtn} ${isShining ? styles.forceShine : ""} ${className}`} 
            onPointerDown={handleTrigger}
            {...props}
        >
            <div className={styles.shineEffect} />
            <span className={styles.label}>{children}</span>
        </button>
    );
};