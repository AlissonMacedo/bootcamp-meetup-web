import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { zonedTimeToUtc } from 'date-fns-tz';

import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';

import { editMeetupRequest } from '~/store/modules/meetup/actions';

import { Container } from '../styles';

const schema = Yup.object().shape({
  file_id: Yup.number().required(),
  title: Yup.string().required('Insira o título do meetup'),
  description: Yup.string().required('Descreva o seu meetup'),
  date: Yup.date().required('Insira uma data'),
  location: Yup.string().required('Insira o local'),
});

export default function MeetupEdit({ match }) {
  const meetupId = Number(match.params.id);
  const meetups = useSelector(state => state.meetup.meetups);
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

  const meetupFind = meetups.find(Findmeetup => Findmeetup.id === meetupId);

  const currentMeetup = {
    title: meetupFind.title,
    description: meetupFind.description,
    date: zonedTimeToUtc(meetupFind.defaultDate),
    location: meetupFind.location,
    file: {
      url: meetupFind.file.url,
      id: meetupFind.file.id,
      path: meetupFind.file.path,
    },
  };

  function handleSubmit({ file_id, title, description, date, location }) {
    dispatch(
      editMeetupRequest(meetupId, file_id, title, description, date, location)
    );
  }

  return <h1>Editar meetup</h1>;
}
