import * as React from 'react';

// src/components/core/Background/Background.d.ts



type BackgroundPreset = 'Cyberpunk' | 'Glassmorphism' | 'Messy' | 'Starfield' | 'Matrix' | 'Waves' ;

interface BackgroundProps {
    preset?: BackgroundPreset;
    children?: React.ReactNode;
    className?: string;
}

declare const Background: React.FC<BackgroundProps>;

type ButtonPreset = 
    'Shine' | 'Plasma' | 'Ghost' | 'Glass' | 'Glitch' | 
    'Liquid' | 'Ripple' | 'Default';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    preset?: ButtonPreset;
    height?: string;
    width?: string;
    color?: string;
    children?: React.ReactNode;
    className?: string;
}

declare const Button: React.FC<ButtonProps>;

interface MatrixBackgroundProps {
    children?: React.ReactNode;
    className?: string;
}

declare const MatrixBackground: React.FC<MatrixBackgroundProps>;

export { Background, Button, MatrixBackground };
