import React, { ChangeEvent, FormEvent, useState } from 'react';
import './authorization.scss';
import Input from '../input/input';
import Button from '../button/button';

const Authorization = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="authorization">
      <form noValidate className="authorization__wrapper" onSubmit={submitHandler}>
        <h2 className="authorization__title">Авторизация</h2>
        <Input value={email} onChange={emailHandler} type="email" title="Электронная почта:" />
        <Input value={password} onChange={passwordHandler} type="password" title="Пароль:" />
        <Button>Войти</Button>
      </form>
    </div>
  );
};

export default Authorization;
