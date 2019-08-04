import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

// import rootReducer from './reducers';
// import rootSaga from './sagas';

// import configureStore from './store/configureStore.dev';

import App from './App';

// const { store, runSaga } = configureStore({}, rootReducer);
// runSaga(rootSaga);

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById('root'),
);
