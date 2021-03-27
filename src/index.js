import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Index from './pages';
import Search from './pages/search';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducers from './reducers/combinedReducers';

const store = createStore(combinedReducers)

const Home = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

const renderApp = () => ReactDOM.render(<Home />, document.getElementById('root'));
renderApp();

store.subscribe(renderApp);
