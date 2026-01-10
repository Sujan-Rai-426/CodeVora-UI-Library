import React, { useState } from 'react';
import styles from './FlashFlipCard.module.css';

export const FlashFlipCard = ({ 
    children, 
    width = "150px", 
    height = "230px", 
    padding = "20px",
    background = { front: "gray", back: "#0f0f0f" }, 
    borderRadius = "20px",
    className = "", 
    ...props 
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleToggle = (e) => {
        // Prevent flipping if clicking a button or link inside the card
        if (e.target.closest('button') || e.target.closest('a')) return;
        setIsFlipped(!isFlipped);
    };

    const childrenArray = React.Children.toArray(children);
    const frontSide = childrenArray.find(c => c?.props?.side === "front") || childrenArray[0];
    const backSide = childrenArray.find(c => c?.props?.side === "back") || childrenArray[1];

    return (
        <div 
            className={`${styles.flashWrapper} ${isFlipped ? styles.isFlipped : ''} ${className}`}
            style={{ width, height, borderRadius, ...props.style }}
            onClick={handleToggle}
        >
            <div className={styles.cardInner}>
                {/* Front Side */}
                <div 
                    className={styles.sideFront} 
                    style={{ padding, background: background.front, borderRadius }}
                >
                    <div className={styles.content}>{frontSide}</div>
                    <div className={styles.glare}></div>
                </div>

                {/* Back Side */}
                <div 
                    className={styles.sideBack} 
                    style={{ padding, background: background.back, borderRadius }}
                >
                    <div className={styles.content}>{backSide}</div>
                    <div className={styles.glare}></div>
                </div>
            </div>
        </div>
    );
};