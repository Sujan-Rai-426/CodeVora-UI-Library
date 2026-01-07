import React from 'react';
import styles from './GlassButton.module.css';

export const GlassButton = ({ 
        padding, 
        color, 
        children,
        processing,
        processingText = "", 
        className = "", 
        ...props 
    }) => {
        const customStyle = {
            padding: padding,
            // We use the color prop to tint the glass slightly
            '--glass-tint': color,
            position: 'relative',
        };

    return (
            <button 
                style={customStyle} 
                className={`${styles.glassBtn} ${className}`} 
                disabled={processing || props.disabled}
                {...props}
            >
                {/* Hide reflection while processing to keep the look clean */}
                {!processing && <div className={styles.reflection} />}
                
                <span className={processing ? styles.hidden : styles.label}>
                    {children}
                </span>

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