// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => (
  <Router>
    <Route path='/' exact component={Join} />
    <Route path='/chat' component={Chat} />
  </Router>
);

export default App;
