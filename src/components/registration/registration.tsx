import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './registration.scss';
import Input from '../input/input';
import Button from '../button/button';
import { registration } from '../../actions/user';

const Registration = () => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registration(email, password);
  };

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
        <Button>Зарегистрироваться</Button>
        <Link className="registration__link" to="/login">
          Уже есть аккаунт
        </Link>
      </form>
    </div>
  );
};

export default Registration;
