import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id"/>

        <Input name="title" placeholder="Titulo do Meetup" />

        <Input name="description" type="multext" placeholder="Descrição completa" />

        <Input
          name="date"
          type="date"
          placeholder="Data do meetup"
        />
        <Input
          name="location"
          type="text"
          placeholder="Localização"
        />
        <div>
          <button type="submit">Salvar meetup</button>
        </div>

      </Form>
    </Container>
  );
}
