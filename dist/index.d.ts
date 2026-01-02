import * as React from 'react';

// src/components/core/Background/Background.d.ts



type BackgroundPreset = 'Cyberpunk' | 'Glassmorphism' | 'Messy' | 'Starfield' | 'Matrix' | 'Waves' ;

interface BackgroundProps {
    preset?: BackgroundPreset;
    children?: React.ReactNode;
    className?: string;
}

declare const Background: React.FC<BackgroundProps>;

interface MatrixBackgroundProps {
    children?: React.ReactNode;
    className?: string;
}

declare const MatrixBackground: React.FC<MatrixBackgroundProps>;

export { Background, MatrixBackground };
