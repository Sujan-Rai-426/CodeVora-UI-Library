import React from 'react';
import styles from './BrutalistButton.module.css';

export const BrutalistButton = ({ 
    padding = "12px 24px", 
    color = "#000000", 
    children, 
    processing,
    processingText = "",
    className = "", 
    ...props 
}) => {
    const customStyle = {
        padding: padding,
        '--brutal-color': color,
        position: 'relative',
    };

    return (
        <button 
            style={customStyle} 
            className={`${styles.brutalBtn} ${className}`} 
            disabled={processing || props.disabled}
            {...props}
        >
            <span className={processing ? styles.hidden : styles.label}>
                {children}
            </span>

            {processing && (
                <div className={styles.spinnerContainer}>
                    <span className={styles.brutalSpinner} />
                    {processingText && (
                        <span className={styles.procText}>{processingText}</span>
                    )}
                </div>
            )}
        </button>
    );
};