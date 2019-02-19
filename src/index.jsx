import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Top from './components/Top.jsx';
import Chat from './components/Chat.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route path="/:code/chat" component={Chat} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
