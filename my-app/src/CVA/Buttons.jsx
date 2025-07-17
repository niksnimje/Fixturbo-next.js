import React from 'react';
import { cva } from 'class-variance-authority';

const buttonStyles = cva(
  'flex items-center bg-[#f4f4f4] gap-2 text-gray-800 font-semibold text-sm tracking-wider uppercase transition-all duration-300 group-hover:gap-4 relative overflow-hidden px-6 py-3 rounded read-more-btn',
  {
    variants: {
      variant: {
        small: 'bg-[var(--primary-color)] hover:bg-orange-400  ',
        medium: 'bg-pink-400',
        large: 'bg-green-400',
      },
      size: {
        sm: 'text-sm px-3 py-1',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'medium',
      size : "sm"
    },
  }
);

const Button = ({ variant, children , size }) => {
  return (
    <button className={buttonStyles({ variant , size })}>
      {children}
    </button>
  );
};

export default Button;