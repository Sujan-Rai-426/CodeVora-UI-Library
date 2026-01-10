import React, { useState } from 'react';
import styles from './BookFlipCard.module.css';

export const BookFlipCard = ({ 
    children, 
    width = "250px", 
    height = "350px", 
    padding = "20px",
    background = { front: "gray", back: "#0f0f0f" }, 
    borderRadius = "4px 12px 12px 4px", 
    className = "", 
    ...props 
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (e) => {
        if (e.target.closest('button') || e.target.closest('a')) return;
        setIsOpen(!isOpen);
    };

    const childrenArray = React.Children.toArray(children);
    const frontSide = childrenArray.find(c => c?.props?.side === "front") || childrenArray[0];
    const backSide = childrenArray.find(c => c?.props?.side === "back") || childrenArray[1];

    return (
        <div 
            className={`${styles.bookContainer} ${isOpen ? styles.isOpen : ''} ${className}`}
            style={{ width, height, ...props.style }}
            onClick={handleToggle}
        >
            <div className={styles.bookInner}>
                {/* The "Back Page" (Static internal side) */}
                <div 
                    className={styles.innerPage} 
                    style={{ 
                        padding, 
                        background: background.back, 
                        borderRadius 
                    }}
                >
                    {/* Decorative page stacking lines */}
                    <div className={styles.pageEdges}></div>
                    <div className={styles.content}>{backSide}</div>
                </div>

                {/* The "Front Cover" (The swinging side) */}
                <div 
                    className={styles.cover} 
                    style={{ 
                        background: background.front, 
                        borderRadius 
                    }}
                >
                    <div className={styles.spineShadow}></div>
                    <div className={styles.coverContent} style={{ padding }}>
                        {frontSide}
                    </div>
                </div>
            </div>
        </div>
    );
};