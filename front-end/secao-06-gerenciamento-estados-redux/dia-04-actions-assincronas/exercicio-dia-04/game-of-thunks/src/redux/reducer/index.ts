import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from '../actions';
import { ReduxState, PersonagemType } from '../../types';

const INITIAL_STATE: ReduxState = {
  isFetching: false,
  name: '',
  aliases: [],
  titles: [],
  error: '',
};

type ActionType = {
  type: string,
  payload: PersonagemType,
};

export const personagemReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        name: '',
        aliases: [],
        titles: [],
        error: '',
      };
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        name: action.payload.name,
        aliases: action.payload.aliases,
        titles: action.payload.titles,
        error: '',
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        name: '',
        aliases: [],
        titles: [],
        error: 'Teste',
      };
    default:
      return state;
  }
};
