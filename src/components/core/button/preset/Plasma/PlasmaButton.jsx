import React from 'react';
import styles from './PlasmaButton.module.css';

export const PlasmaButton = ({ 
        padding, 
        color, 
        children, 
        processing, 
        processingText = "",
        className = "", 
        ...props 
    }) => {
        // We use the color prop to generate the glow variables
        const customStyle = {
            padding: padding,
            borderColor: color,
            color: color,
            '--plasma-color': color, // Passing the color to CSS as a variable
            position: 'relative',
        };

    return (
        <button 
            style={customStyle} 
            /* Added: forcePlasma class will keep the button bright while processing */
            className={`${styles.plasmaBtn} ${processing ? styles.forcePlasma : ""} ${className}`} 
            disabled={processing || props.disabled}
            {...props}
        >
            <span className={processing ? styles.hidden : styles.label}>
                {children}
            </span>

            {processing && (
                <div className={styles.spinnerContainer}>
                    <span className={styles.plasmaSpinner} />
                    {processingText && (
                        <span className={styles.procText}>{processingText}</span>
                    )}
                </div>
            )}

            <div className={styles.glowOverlay} />
        </button>
    );
};