import React from 'react';
import './button.scss';

export interface ButtonType {
  children: React.ReactNode;
}

const Button: React.FC = ({ children }) => {
  return <button className="button">{children}</button>;
};

export default Button;
