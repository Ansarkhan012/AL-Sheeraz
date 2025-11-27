import React from 'react';

const Card = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`bg-white    p-6 border border-gray-100 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
