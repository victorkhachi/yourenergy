import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SliderImageProps {
  src: string;
  alt: string;
  isActive: boolean;
}

export default function SliderImage({ src, alt, isActive }: SliderImageProps) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={src}
            alt={alt}
            className="w-half h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}