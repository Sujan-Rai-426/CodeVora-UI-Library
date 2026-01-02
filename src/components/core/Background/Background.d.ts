// src/components/core/Background/Background.d.ts


import * as React from 'react';

export type BackgroundPreset = 'Cyberpunk' | 'Glassmorphism' | 'Messy' | 'Starfield' | 'Matrix' | 'Waves' ;

export interface BackgroundProps {
    preset?: BackgroundPreset;
    children?: React.ReactNode;
    className?: string;
}

export const Background: React.FC<BackgroundProps>;