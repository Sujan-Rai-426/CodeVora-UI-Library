import React, { useState } from 'react';
import styles from './GlitchButton.module.css';

export const GlitchButton = ({ 
    padding = "12px 24px", 
    color = "#3b82f6", 
    children, 
    processing,
    processingText = "",
    className = "", 
    ...props 
}) => {
    const [isGlitching, setIsGlitching] = useState(false);

    // This ensures that even a tiny tap on a phone triggers 
    // a visible 800ms glitch cycle.
    const handleTrigger = () => {
        if (processing) return;
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 800);
    };

    const customStyle = {
        padding: padding,
        '--glitch-color': color,
        borderColor: color,
        position: 'relative',
    };

    return (
        <button 
            style={customStyle} 
            className={`${styles.glitchBtn} ${(isGlitching || processing) ? styles.forceGlitch : ""} ${className}`} 
            onPointerDown={handleTrigger}
            disabled={processing || props.disabled}
            {...props}
        >
            {/* Content Wrapper holds both text and glitch layers */}
            <span className={processing ? styles.hidden : styles.contentWrapper}>
                <span className={styles.label}>{children}</span>
                <span className={styles.glitchLayer} aria-hidden="true">{children}</span>
                <span className={styles.glitchLayer} aria-hidden="true">{children}</span>
            </span>

            {/* Processing UI */}
            {processing && (
                <div className={styles.spinnerContainer}>
                    <div className={styles.glitchSpinner} />
                    {processingText && (
                        <span className={styles.procText}>{processingText}</span>
                    )}
                </div>
            )}
            
            <div className={styles.scanline} />
        </button>
    );
};