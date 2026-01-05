import React, { useState } from 'react';
import styles from './GhostButton.module.css';

export const GhostButton = ({ 
    padding = "12px 24px", 
    color = "#3b82f6", 
    children, 
    className = "", 
    ...props 
}) => {
    const [isDrawing, setIsDrawing] = useState(false);

    // Triggers the "drawing" effect for a fixed duration on tap
    const handleTrigger = () => {
        setIsDrawing(true);
        setTimeout(() => setIsDrawing(false), 600); // Effect duration
    };

    const customStyle = {
        padding: padding,
        color: color,
        '--ghost-color': color,
    };

    return (
        <button 
            style={customStyle} 
            className={`${styles.ghostBtn} ${isDrawing ? styles.forceDraw : ""} ${className}`} 
            onPointerDown={handleTrigger}
            {...props}
        >
            {/* The 4 animated border lines */}
            <span className={`${styles.line} ${styles.top}`} />
            <span className={`${styles.line} ${styles.right}`} />
            <span className={`${styles.line} ${styles.bottom}`} />
            <span className={`${styles.line} ${styles.left}`} />
            
            <span className={styles.label}>{children}</span>
        </button>
    );
};