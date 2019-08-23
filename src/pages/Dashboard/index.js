import React, { Component, useState, useEffect, useMemo } from 'react';

import { Link } from 'react-router-dom';

import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';

import { Container, List } from './styles';


export default function Dashboard() {

return (
        <Container>
          <header>
            <h1>Meus Meetups</h1>
            <Link to="/meetup">
            <button>
              <MdAddCircleOutline size={24} color="#fff" />
                Novo Meetup
            </button>
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
