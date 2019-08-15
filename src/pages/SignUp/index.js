import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

export default function Signup() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

const schema = Yup.object().shape({
  nome: Yup.string()
  .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().min(6, 'No minimo 6 caractéres').required('A senha é obrigatória'),
});


  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="nome" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Insira seu e-mail" />
        <Input name="password" type="password" placeholder="Insira sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tengo login</Link>
      </Form>
    </>
  );
}
