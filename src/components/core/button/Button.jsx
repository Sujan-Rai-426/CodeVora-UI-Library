import React from 'react';
import { ShineButton } from './preset/Shine/ShineButton';
import { PlasmaButton } from './preset/Plasma/PlasmaButton';
import { GhostButton } from './preset/Ghost/GhostButton';
import { GlassButton } from './preset/Glass/GlassButton';
import { GlitchButton } from './preset/Glitch/GlitchButton';
import { LiquidButton } from './preset/Liquid/LiquidButton';
import { RippleButton } from './preset/Ripple/RippleButton';


const Button = ({ 
    preset, 
    children, 
    padding = '10px 24px', 
    color = '#f63b3bff', 
    className = "", 
    ...props 
}) => {
    
    // Map preset names to their respective components
    const Presets = {
        Shine: ShineButton,
        Plasma: PlasmaButton,
        Ghost: GhostButton,
        Glass: GlassButton,
        Glitch: GlitchButton,
        Liquid: LiquidButton,
        Ripple: RippleButton,
    };

    // Fallback to Shine if preset doesn't exist
    const SelectedPreset = Presets[preset] || Presets.Shine;

    return (
        <SelectedPreset 
            padding={padding}
            color={color} 
            className={className}
            {...props}
        >
            {children}
        </SelectedPreset>
    );
};

export { Button };