import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { MdModeEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import { statement } from '@babel/template';
import history from '~/services/history';

import { cancelMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Meetup } from './styles';

export default function MeetupDetails({ match }) {
  const meetupId = Number(match.params.id);
  const meetups = useSelector(state => state.meetup.meetups);
  const dispatch = useDispatch();

  const meetup = meetups.find(Findmeetup => Findmeetup.id === meetupId);

  async function handleEdit() {
    history.push(`/meetup/edit/${meetupId}`);
  }

  async function handleCancel() {
    try {
      dispatch(cancelMeetupRequest(meetupId));
    } catch (error) {
      toast.error('Ocorreu um erro');
    }
  }

  return (
    <Container>
      <header>
        <h2>{meetup.title}</h2>
        <div>
          <button type="button" className="editar" onClick={handleEdit}>
            Editar
          </button>
          <button type="button" className="cancel" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </header>

      <Meetup>
        <img src={meetup.file.url} alt={meetup.title} />
        <p>{meetup.description}</p>
        <p>
          Caso queira participar como palestrante do meetup envie um e-mail para
          organizacao@meetapp.com.br.
        </p>
        <div>
          <span>
            <MdEvent size={18} />
            {meetup.date}
          </span>
          <span>
            <MdPlace size={18} />
            {meetup.location}
          </span>
        </div>
      </Meetup>
    </Container>
  );
}

MeetupDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};
