import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Index from './pages';
import Search from './pages/search';
import Pokemon from './pages/pokemon';
import { Provider } from 'react-redux';
import store from './reducers/combinedReducers';
import ErrorPopup from './components/errorPopup';

const Home = () => {
  const state = store.getState();

  return (
    <Provider store={store}>
      <Router>
        <Navbar className="sticky top-0 z-10" />
        <Switch>
          <Route path="/pokemon/:id" component={Pokemon} />
          <Route path="/search" component={Search} />
          <Route path="/" component={Index} />
        </Switch>
        <ul className="absolute w-full mx-auto block bottom-0">
          {state.errors.map(x => <ErrorPopup key={x.id} error={x} />)}
        </ul>
      </Router>
    </Provider>
  );
};

const renderApp = () => ReactDOM.render(<Home />, document.getElementById('root'));
renderApp();

store.subscribe(renderApp);
