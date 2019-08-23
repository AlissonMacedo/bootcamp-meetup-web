import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/M-logo.png';

import { MdExitToApp } from 'react-icons/md';


import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

function handleSignOut() {
  dispatch(signOut());
}

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
        <Profile>
          <div>
            <strong>{profile.name}</strong>
            <Link to="/profile">Meu perfil</Link>
          </div>
          <button type="button" onClick={handleSignOut}>
            <MdExitToApp size={24} color="#fff" />
            Sair
          </button>
        </Profile>
        </aside>
      </Content>
    </Container>
  );
}
