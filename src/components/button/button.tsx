import React from 'react';
import './button.css';

interface ButtonType {
  className: string;
  children: string;
}

const Button = ({ className, children }: ButtonType) => {
  return <button className={className}>{children}</button>;
};

export default Button;
