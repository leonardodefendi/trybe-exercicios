import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type ReduxState = {
  isFetching: boolean,
  name: string,
  aliases: string[],
  titles: string[],
  error: string,
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;

export type PersonagemType = {
  name: string,
  aliases: string[],
  titles: string[],
};
