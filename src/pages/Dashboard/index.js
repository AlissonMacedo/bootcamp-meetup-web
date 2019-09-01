import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';

import { fetchMeetupRequest } from '~/store/modules/meetup/actions';
import { Container, List, Button } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);

  useEffect(() => {
    async function loadMeetup() {
      try {
        dispatch(fetchMeetupRequest());
      } catch (error) {
        toast.error('Occoreu um erro ao carregar os meetups');
      }
    }
    loadMeetup();
  }, [dispatch]);

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
        {meetups.map(meetup => (
          <Link
            key={String(meetup.id)}
            to={meetup.past ? '/' : `/meetup/${meetup.id}/details`}
          >
            <li past={meetup.past}>
              <strong>{meetup.title}</strong>
              <div>
                <strong>
                  {meetup.past ? 'Esse meetup ja aconteçeu' : meetup.date}
                </strong>
                <MdChevronRight size={30} />
              </div>
            </li>
          </Link>
        ))}
      </List>
    </Container>
  );
}
