import * as React from 'react';

export type FlipCardPreset = 'Base' | 'Book' | 'Flash' | 'Default';

// Use HTMLDivElement because a Card is visually a styled Div
export interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
    preset?: FlipCardPreset;
    children?: React.ReactNode;
    className?: string;
}

export const FlipCard: React.FC<FlipCardProps>;