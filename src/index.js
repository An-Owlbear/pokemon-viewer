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
import TeamBuilder from './pages/teamBuilder';
import Move from './pages/move';

const Home = () => {
  const state = store.getState();

  return (
    <Provider store={store}>
      <Router>
        <Navbar className="sticky top-0 z-10" />
        <div className="flex flex-row">
          <div className="flex-grow overflow-x-hidden">
            <Switch>
              <Route path="/move/:id" component={Move} />
              <Route path="/pokemon/:id" component={Pokemon} />
              <Route path="/team-builder">
                <TeamBuilder className="mt-4" />
              </Route>
              <Route path="/search" component={Search} />
              <Route path="/" component={Index} />
            </Switch>
          </div>
          <TeamBuilder className="hidden m-4 ml-0 flex-shrink-0 md:block" />
        </div>
        <ul className="absolute w-max left-0 right-0 mx-auto block bottom-0">
          {state.errors.map(x => <ErrorPopup key={x.id} error={x} />)}
        </ul>
      </Router>
    </Provider>
  );
};

const renderApp = () => ReactDOM.render(<Home />, document.getElementById('root'));
renderApp();

store.subscribe(renderApp);
