import * as React from 'react';

export type ButtonPreset = 
    'Shine' | 'Plasma' | 'Ghost' | 'Glass' | 'Glitch' | 
    'Liquid' | 'Ripple' | 'Default';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    preset?: ButtonPreset;
    height?: string;
    width?: string;
    color?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Button: React.FC<ButtonProps>;