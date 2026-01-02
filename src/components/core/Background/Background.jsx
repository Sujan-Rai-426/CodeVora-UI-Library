// src/components/core/Background/Background.jsx


import React from 'react';

import { CyberpunkBackground } from './preset/Cyberpunk/CyberpunkBackground';
import { MessyBackground } from './preset/Messy/MessyBackground';
import { GlassmorphismBackground } from './preset/Glassmorphism/GlassmorphismBackground';
import { StarfieldBackground } from './preset/Starfield/StarfieldBackground';
import { MatrixBackground } from './preset/Matrix/MatrixBackground';
import { WavesBackground } from './preset/Waves/WavesBackground'

const Background = ({ preset, children, className="" }) => {
    // Map preset names to their respective components
    const Presets = {
        Cyberpunk: CyberpunkBackground,
        Messy: MessyBackground,
        Glassmorphism: GlassmorphismBackground,
        Starfield: StarfieldBackground,
        Matrix: MatrixBackground,
        Waves: WavesBackground,
    };

    // Fallback to Cyberpunk if preset doesn't exist
    const SelectedPreset = Presets[preset] || Presets.Cyberpunk;

    return (
        <SelectedPreset className={className}>
            {children}
        </SelectedPreset>
    );
};

export { Background };