import React from 'react';

import { Link } from 'react-router-dom';

import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';

import { Container, List, Button } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <Link to="/meetup/new">
          <Button>
            <MdAddCircleOutline size={20} />
            Novo meetup
          </Button>
        </Link>
      </header>

      <List>
        <Link to="/meetupdetails">
          <li>
            <h3>Meetup de React Native</h3>
            <div>
              <strong>24 de Junho, às 20h</strong>
              <MdChevronRight size={24} color="#fff" />
            </div>
          </li>
        </Link>
        <li>
          <h3>Meetup de React Native</h3>
          <div>
            <strong>24 de Junho, às 20h</strong>
            <MdChevronRight size={24} color="#fff" />
          </div>
        </li>
        <li>
          <h3>Meetup de React Native</h3>
          <div>
            <strong>24 de Junho, às 20h</strong>
            <MdChevronRight size={24} color="#fff" />
          </div>
        </li>
      </List>
    </Container>
  );
}
