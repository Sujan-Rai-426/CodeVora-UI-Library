import React, { useState } from 'react';
import styles from './GlitchButton.module.css';

export const GlitchButton = ({ 
    padding = "12px 24px", 
    color = "#3b82f6", 
    children, 
    className = "", 
    ...props 
}) => {
    const [isGlitching, setIsGlitching] = useState(false);

    // This ensures that even a tiny tap on a phone triggers 
    // a visible 800ms glitch cycle.
    const handleTrigger = () => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 800);
    };

    const customStyle = {
        padding: padding,
        '--glitch-color': color,
        borderColor: color,
    };

    return (
        <button 
            style={customStyle} 
            className={`${styles.glitchBtn} ${isGlitching ? styles.forceGlitch : ""} ${className}`} 
            onPointerDown={handleTrigger}
            {...props}
        >
            <span className={styles.contentWrapper}>
                <span className={styles.label}>{children}</span>
                
                {/* Glitch layers wrap text exactly */}
                <span className={styles.glitchLayer} aria-hidden="true">{children}</span>
                <span className={styles.glitchLayer} aria-hidden="true">{children}</span>
            </span>
            
            <div className={styles.scanline} />
        </button>
    );
};