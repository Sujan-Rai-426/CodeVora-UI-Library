import React from 'react';
import styles from './PlasmaButton.module.css';

export const PlasmaButton = ({ 
    padding, 
    color, 
    children, 
    className = "", 
    ...props 
}) => {
    // We use the color prop to generate the glow variables
    const customStyle = {
        padding: padding,
        borderColor: color,
        color: color,
        '--plasma-color': color, // Passing the color to CSS as a variable
    };

    return (
        <button 
            style={customStyle} 
            className={`${styles.plasmaBtn} ${className}`} 
            {...props}
        >
            <span className={styles.label}>{children}</span>
            <div className={styles.glowOverlay} />
        </button>
    );
};