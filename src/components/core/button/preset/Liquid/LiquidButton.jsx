import React, { useState } from 'react';
import styles from './LiquidButton.module.css';

export const LiquidButton = ({ 
    padding = "12px 24px", 
    color = "#3b82f6", 
    children, 
    className = "", 
    ...props 
}) => {
    const [isActive, setIsActive] = useState(false);

    const handleTrigger = () => {
        setIsActive(true);
        // The liquid "fills" and stays for a short duration
        setTimeout(() => setIsActive(false), 800);
    };

    const customStyle = {
        padding: padding,
        '--liquid-color': color,
        borderColor: color,
    };

    return (
        <button 
            style={customStyle} 
            className={`${styles.liquidBtn} ${isActive ? styles.forceLiquid : ""} ${className}`} 
            onPointerDown={handleTrigger}
            {...props}
        >
            <span className={styles.label}>{children}</span>
            <div className={styles.liquidLayer} />
            <div className={`${styles.liquidLayer} ${styles.liquidLayerSecondary}`} />
        </button>
    );
};