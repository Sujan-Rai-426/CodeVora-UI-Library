import React from 'react';
import { BaseFlipCard } from './preset/Base/BaseFlipCard';
import { FlashFlipCard } from './preset/Flash/FlashFlipCard';
import { BookFlipCard } from './preset/Book/BookFlipCard';


const FlipCard = ({ 
        preset, 
        children, 
        className = "", 
        ...props 
    }) => {
        const Presets = {
            Base: BaseFlipCard,
            Book: BookFlipCard,
            Flash: FlashFlipCard,
        };

    // Fallback to Shine if preset doesn't exist
    const SelectedPreset = Presets[preset] || Presets.Base;

    return (
        <SelectedPreset
            preset={preset} 
            className={className}
            {...props}
        >
            {children}
        </SelectedPreset>
    );
};

export { FlipCard };