import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import './authorization.scss';
import Input from '../input/input';
import Button from '../button/button';
import { useHistory } from 'react-router-dom';
import { UserContext } from "../../contexts/user-context";
import { observer } from "mobx-react-lite";

const Authorization = observer(() => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const userStore = useContext(UserContext);
  const history = useHistory();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push('/');
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
});

export default Authorization;
