import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function Signup() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form >
        <input name="nome" placeholder="Nome completo" />
        <input name="email" type="email" placeholder="Insira seu e-mail" />
        <input name="password" type="password" placeholder="Insira sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tengo login</Link>
      </form>
    </>
  );
}
