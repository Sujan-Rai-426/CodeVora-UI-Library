import React, { useState } from 'react';
import styles from './ShineButton.module.css';

export const ShineButton = ({ 
    padding = "12px 24px", 
    color = "#3b82f6", 
    children, 
    processing,
    processingText = "",
    className = "", 
    ...props 
}) => {
    const [isShining, setIsShining] = useState(false);

    // Triggers the light sweep for one full cycle on click/tap
    const handleTrigger = () => {
        if (processing) return; // Prevent shine trigger while loading
        setIsShining(true);
        // Matches the 800ms animation duration in CSS
        setTimeout(() => setIsShining(false), 800);
    };

    const customStyle = {
        padding: padding,
        backgroundColor: color,
        '--btn-color': color, // Used for shadow tinting
        position: 'relative',
    };

    return (
        <button 
            style={customStyle} 
            className={`${styles.shineBtn} ${isShining ? styles.forceShine : ""} ${className}`} 
            onPointerDown={handleTrigger}
            disabled={processing || props.disabled}
            {...props}
        >
            {/* Show shine only when NOT processing */}
            {!processing && <div className={styles.shineEffect} />}
            
            <span className={processing ? styles.hidden : styles.label}>
                {children}
            </span>

            {processing && (
                <div className={styles.spinnerContainer}>
                    <span className={styles.shineSpinner} />
                    {processingText && (
                        <span className={styles.procText}>{processingText}</span>
                    )}
                </div>
            )}
        </button>
    );
};