import React from 'react';
import styles from './BaseButton.module.css';

export const BaseButton = ({ 
    children, 
    processing,
    processingText = "",
    className = "", 
    style = {},
    ...props 
}) => {
    return (
        <button 
            style={{ 
                position: 'relative', 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                ...style 
            }} 
            className={`${className} ${processing ? styles.processing : ""}`} 
            disabled={processing || props.disabled}
            {...props}
        >
            {/* The Label */}
            <span style={{ 
                opacity: processing ? 0 : 1, 
                visibility: processing ? 'hidden' : 'visible' 
            }}>
                {children}
            </span>

            {/* The Processing UI */}
            {processing && (
                <div className={styles.baseSpinnerContainer}>
                    <span className={styles.baseSpinner} />
                    {processingText && (
                        <span className={styles.baseProcText}>{processingText}</span>
                    )}
                </div>
            )}
        </button>
    );
};