import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import Meetup from '../pages/Meetup';
import MeetupDetails from '../pages/MeetupDetails';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/meetup" component={Meetup} isPrivate />
      <Route path="/meetupdetails" component={MeetupDetails} isPrivate />

    </Switch>
  );
}
