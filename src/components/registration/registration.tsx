import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './registration.scss';
import Input from '../input/input';
import Button from '../button/button';

const Registration = () => {
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const firstnameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };
  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const phoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="registration">
      <form noValidate className="registration__wrapper" onSubmit={submitHandler}>
        <h2 className="registration__title">Регистрация</h2>
        <Input value={email} onChange={emailHandler} type="email" title="Электронная почта:" />
        <Input value={password} onChange={passwordHandler} type="password" title="Пароль:" />
        <Button></Button>
      </form>
    </div>
  );
};

export default Registration;
