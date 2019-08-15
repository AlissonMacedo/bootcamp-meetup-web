import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function Signin() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form >
        <input name="email" type="email" placeholder="Insira seu e-mail" />
        <input name="password" type="password" placeholder="Insira sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
