import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import LeaderboardPage from '../components/LeaderboardPage';
import ProfilePage from '../components/ProfilePage';
import AddWorkoutPage from '../components/AddWorkoutPage';
import EditWorkoutPage from '../components/EditWorkoutPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>

        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/create" component={AddWorkoutPage} />

        {/* :id makes the route dynamic */}
        <PrivateRoute path="/edit/:id" component={EditWorkoutPage} />

        <PrivateRoute path="/leaderboard" component={LeaderboardPage} />
        <PrivateRoute path="/profile/:id" component={ProfilePage} />
        
        {/* Fall back route if the user tries to go to a page that doesn't exist */}
        <Route component={NotFoundPage}/>

      </Switch>
    </div>
  </Router>
);

export default AppRouter;