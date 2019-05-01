import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import PrivateRoute from './organisms/privateRoute/PrivateRoute';
import NoMatch from './NoMatch';
import history from '../history';
import HomePage from './pages/HomePage';
import UserRegisterPage from './pages/UserRegisterPage';
import UserLoginPage from './pages/UserLoginPage';
import Dashboard from './pages/Dashboard';
import FileCreate from './pages/FileCreate';
import SearchResults from './pages/SearchResults';
import FileShow from './pages/FileShow';
import FileEdit from './pages/FileEdit';
import FileDelete from './pages/FileDelete';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search" exact component={SearchResults} />
            <Route path="/register" exact component={UserRegisterPage} />
            <Route path="/login" exact component={UserLoginPage} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/files/new" exact component={FileCreate} />
            <PrivateRoute path="/files/:id" exact component={FileShow} />
            <PrivateRoute path="/files/edit/:id" exact component={FileEdit} />
            <PrivateRoute
              path="/files/delete/:id"
              exact
              component={FileDelete}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
