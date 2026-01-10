import React, { useState } from 'react';
import styles from './BaseFlipCard.module.css';

export const BaseFlipCard = ({ 
    children, 
    preset, 
    width, 
    height, 
    padding = "20px",
    background = { front: "gray", back: "#0f0f0f" }, 
    className = "", 
    ...props 
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleToggle = (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
        setIsFlipped(!isFlipped);
        if (props.onClick) props.onClick(e);
    };

    // Style for the main container
    const containerStyle = {
        width: width,
        height: height,
        ...props.style
    };

    // Style for the front and back faces
    const faceStyle = (side) => ({
        padding: padding,
        backgroundColor: background?.[side] || undefined
    });

    if (preset === "Base") {
        const childrenArray = React.Children.toArray(children);
        const frontSide = childrenArray.find(child => child?.props?.child === "front");
        const backSide = childrenArray.find(child => child?.props?.child === "back");

        return (
            <div 
                {...props}
                style={containerStyle}
                className={`${styles.flipContainer} ${isFlipped ? styles.clicked : ''} ${className}`}
                onClick={handleToggle}
            >
                <div className={styles.flipper}>
                    <div className={styles.front} style={faceStyle('front')}>
                        {frontSide || childrenArray[0]}
                    </div>
                    <div className={styles.back} style={faceStyle('back')}>
                        {backSide || childrenArray[1]}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div {...props} style={containerStyle} className={`${styles.defaultCard} ${className}`}>
            {children}
        </div>
    );
};