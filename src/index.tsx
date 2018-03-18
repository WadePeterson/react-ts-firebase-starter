import { FirebaseProvider } from 'duckbase';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import * as FirebaseUtils from './firebase';

const store = createStore(rootReducer, applyMiddleware(thunk));
const rootEl = document.getElementById('root');

const render = () => {
  const App = require('./containers/AppContainer').default;
  ReactDOM.render(
    <Provider store={store}>
      <FirebaseProvider store={store} firebaseApp={FirebaseUtils.app()} waitForAuth={true} >
        <Router>
        <Route path='/' component={App} />
        </Router>
      </FirebaseProvider>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./containers/AppContainer', () => {
    setTimeout(render);
  });
}

render();
