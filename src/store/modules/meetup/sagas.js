
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import pt from 'date-fns/locale/pt';
import { format, parseISO, isBefore } from 'date-fns';
import api from '~/services/api';
import history from '~/services/history';
import {
  fetchMeetupSuccess,
  fetchMeetupFailure,
  newMeetupSuccess,
  cancelMeetupSuccess,
} from './actions';

export function* fetchMeetup() {
  try {
    const response = yield call(api.get, 'meetups');

    const meetups = response.data.map(meetup => ({
      ...meetup,
      past: isBefore(parseISO(meetup.date), new Date()),
      defaultDate: meetup.date,
      date: format(parseISO(meetup.date), "dd 'de' MMMM',' 'às' HH'h'",{
        locale: pt,
      }),
    }));

    yield put(fetchMeetupSuccess(meetups));
  } catch (error) {
    toast.error('Não foi possivel carregar os meetups');
    yield put(fetchMeetupFailure());
  }
}


export default all([
  takeLatest('@meetup/FETCH_MEETUPS_REQUEST', fetchMeetup),
]);
