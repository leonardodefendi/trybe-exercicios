import { Dispatch, PersonagemType } from '../../types';

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const requestStarted = () => ({ type: REQUEST_STARTED });

const requestSuccesful = (data: PersonagemType) => {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: data,
  };
};

const requestFailed = (error: string) => {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
};

export const fetchPeronagem = (personagem: string) => {
  return async (dispach: Dispatch) => {
    try {
      dispach(requestStarted());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${personagem}`);
      const { name, aliases, titles } = (await response.json())[0];
      dispach(requestSuccesful({ name, aliases, titles }));
    } catch (error: any) {
      dispach(requestFailed(error.message));
    }
  };
};
