import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-green-700 focus:ring-green-500 shadow-lg hover:shadow-green-500/30",
        secondary: "bg-secondary text-white hover:bg-gray-800 focus:ring-gray-500 shadow-lg hover:shadow-gray-500/30",
        outline: "border-2 border-white text-white hover:bg-primary hover:text-white focus:ring-green-500",
        white: "bg-white text-primary hover:bg-gray-100 focus:ring-white shadow-lg"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
