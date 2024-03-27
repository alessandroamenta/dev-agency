import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', children, className, ...props }) => {
  // Reduce padding to make the button narrower
  const baseStyles = "px-4 py-2 text-sm font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-75 inline-flex items-center justify-center";
  
  let variantStyles = "transform transition-transform duration-200";

  if (variant === 'default') {
    variantStyles += " bg-black text-white hover:scale-105 focus:ring-black";
  } else if (variant === 'outline') {
    variantStyles += " text-black bg-gray hover:bg-gray-200 focus:ring-gray-300  border-gray-200";
  }

  const combinedClassName = `${baseStyles} ${variantStyles} ${className || ''}`;

  return (
    <button {...props} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;
