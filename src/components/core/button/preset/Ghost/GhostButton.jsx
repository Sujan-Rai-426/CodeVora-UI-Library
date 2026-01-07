import React, { useState } from 'react';
import styles from './GhostButton.module.css';

export const GhostButton = ({ 
    padding = "12px 24px", 
    color = "#3b82f6", 
    children, 
    processing,
    processingText = "",
    className = "", 
    ...props 
}) => {
    const [isDrawing, setIsDrawing] = useState(false);

    // Triggers the "drawing" effect for a fixed duration on tap
    const handleTrigger = () => {
        if (processing) return;
        setIsDrawing(true);
        setTimeout(() => setIsDrawing(false), 600); // Effect duration
    };

    const customStyle = {
        padding: padding,
        color: color,
        '--ghost-color': color,
        position: 'relative',
    };

    return (
            <button 
                style={customStyle} 
                className={`${styles.ghostBtn} ${(isDrawing || processing) ? styles.forceDraw : ""} ${className}`} 
                onPointerDown={handleTrigger}
                disabled={processing || props.disabled}
                {...props}
            >
                {/* Lines remain same */}
                <span className={`${styles.line} ${styles.top}`} />
                <span className={`${styles.line} ${styles.right}`} />
                <span className={`${styles.line} ${styles.bottom}`} />
                <span className={`${styles.line} ${styles.left}`} />
                
                {/* Original Label hidden during processing */}
                <span className={processing ? styles.hidden : styles.label}>
                    {children}
                </span>

                {/* Processing State with Spinner + Optional Text */}
                {processing && (
                    <div className={styles.spinnerContainer}>
                        <span className={styles.spinner} />
                        {processingText && (
                            <span className={styles.procText}>{processingText}</span>
                        )}
                    </div>
                )}
            </button>
        );
};