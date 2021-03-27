import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Index from './pages';
import Search from './pages/search';

const Home = () => {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
  );
}

ReactDOM.render(<Home />, document.getElementById('root'));
