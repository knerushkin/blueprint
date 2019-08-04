import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(initialState: any, reducer: any) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));

  const runSaga = sagaMiddleware.run;
  return { store, runSaga };
}
