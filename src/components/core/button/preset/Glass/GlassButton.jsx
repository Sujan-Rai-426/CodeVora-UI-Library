import React from 'react';
import styles from './GlassButton.module.css';

export const GlassButton = ({ 
    padding, 
    color, 
    children, 
    className = "", 
    ...props 
}) => {
    const customStyle = {
        padding: padding,
        // We use the color prop to tint the glass slightly
        '--glass-tint': color,
    };

    return (
        <button 
            style={customStyle} 
            className={`${styles.glassBtn} ${className}`} 
            {...props}
        >
            <div className={styles.reflection} />
            <span className={styles.label}>{children}</span>
        </button>
    );
};