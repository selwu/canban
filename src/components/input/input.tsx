import React from 'react';
import './input.scss';

export interface InputType {
  type: string;
  title: string;
  placeholder?: string;
  onChange: any;
  value: any;
  pattern?: string;
}

const Input = ({ type, title, placeholder, onChange, value, pattern }: InputType) => {
  return (
    <div className="form">
      <label className="form__label" htmlFor="contact">
        {title}
      </label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form__input"
        id="contact"
        type={type}
        pattern={pattern}
      />
    </div>
  );
};

export default Input;
