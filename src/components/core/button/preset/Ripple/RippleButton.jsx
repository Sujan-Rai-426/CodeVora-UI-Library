import React, { useState, useLayoutEffect } from 'react';
import styles from './RippleButton.module.css';

export const RippleButton = ({ 
    padding, 
    color, 
    children,
    processing,
    processingText = "", 
    className = "", 
    ...props 
}) => {
    const [ripples, setRipples] = useState([]);

    const createRipple = (event) => {
        if (processing) return; // Prevent ripples during processing
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        
        // Calculate position relative to button
        const size = Math.max(button.clientWidth, button.clientHeight);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const newRipple = {
            x,
            y,
            size,
            id: Date.now(),
        };

        setRipples((prev) => [...prev, newRipple]);
    };

    // Clean up ripples after animation ends to prevent memory leaks
    useLayoutEffect(() => {
        if (ripples.length > 0) {
            const timer = setTimeout(() => setRipples([]), 600);
            return () => clearTimeout(timer);
        }
    }, [ripples]);

    return (
        <button 
            className={`${styles.rippleBtn} ${className}`}
            style={{ padding, '--ripple-color': color, borderColor: color }}
            onMouseDown={createRipple}
            disabled={processing || props.disabled}
            {...props}
        >
            {/* Hide label when processing */}
            <span className={processing ? styles.hidden : styles.label}>
                {children}
            </span>

            {/* Processing State */}
            {processing && (
                <div className={styles.spinnerContainer}>
                    <span className={styles.rippleSpinner} />
                    {processingText && (
                        <span className={styles.procText}>{processingText}</span>
                    )}
                </div>
            )}

            <span className={styles.rippleContainer}>
                {ripples.map((ripple) => (
                    <span
                        key={ripple.id}
                        className={styles.ripple}
                        style={{
                            top: ripple.y,
                            left: ripple.x,
                            width: ripple.size,
                            height: ripple.size,
                        }}
                    />
                ))}
            </span>
        </button>
    );
};