// components/Button.tsx
"use client";  // Add this line to make it a Client Component

import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-9 py-4 bg-orange-500 text-white  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
