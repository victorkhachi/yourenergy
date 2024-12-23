import React from 'react';

interface SliderDotsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export default function SliderDots({ total, current, onSelect }: SliderDotsProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            current === index ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/75'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}