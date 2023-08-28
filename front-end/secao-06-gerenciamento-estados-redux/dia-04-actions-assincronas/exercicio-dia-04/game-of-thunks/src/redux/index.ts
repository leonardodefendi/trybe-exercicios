import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { personagemReducer } from './reducer';

export const store = createStore(
  personagemReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
