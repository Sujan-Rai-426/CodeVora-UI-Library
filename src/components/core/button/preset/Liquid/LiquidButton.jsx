import React, { useState } from 'react';
import styles from './LiquidButton.module.css';

export const LiquidButton = ({ 
    padding = "12px 24px", 
    color = "#3b82f6", 
    children,
    processing,
    processingText = "", 
    className = "", 
    ...props 
}) => {
    const [isActive, setIsActive] = useState(false);

    const handleTrigger = () => {
        if (processing) return;
        setIsActive(true);
        // The liquid "fills" and stays for a short duration
        setTimeout(() => setIsActive(false), 800);
    };

    const customStyle = {
        padding: padding,
        '--liquid-color': color,
        borderColor: color,
        position: 'relative',
    };

    return (
        <button 
            style={customStyle} 
            /* Added: forceLiquid remains active if processing is true */
            className={`${styles.liquidBtn} ${(isActive || processing) ? styles.forceLiquid : ""} ${className}`} 
            onPointerDown={handleTrigger}
            disabled={processing || props.disabled}
            {...props}
        >
            <span className={processing ? styles.hidden : styles.label}>
                {children}
            </span>

            {processing && (
                <div className={styles.spinnerContainer}>
                    <span className={styles.liquidSpinner} />
                    {processingText && (
                        <span className={styles.procText}>{processingText}</span>
                    )}
                </div>
            )}

            <div className={styles.liquidLayer} />
            <div className={`${styles.liquidLayer} ${styles.liquidLayerSecondary}`} />
        </button>
    );
};