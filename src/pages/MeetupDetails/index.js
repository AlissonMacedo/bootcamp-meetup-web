import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';
import selecione from '~/assets/selecione.png';

export default function MeetupDetails() {
  return (
    <Container>
      <header>
        <h1>Meus Meetups</h1>
        <div>
          <Link to="/meetup">
            <button className="editar">Editar</button>
          </Link>
          <Link to="/meetup">
            <button>Cancelar</button>
          </Link>
        </div>
      </header>

      <div>
        <img src={selecione} alt="" />
        <p>Esse meetup é muito legal</p>

        <div>
          <strong>21 de julho, as 20h</strong>
          <strong>Rua Guilherme Gembala, 260</strong>
        </div>
      </div>
    </Container>
  );
}
