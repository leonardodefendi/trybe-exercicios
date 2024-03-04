import { Dispach } from "../../styles";

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requesStarted() {
  return{type: REQUEST_STARTED}
}

function requestSuccesful(imageURL: string) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: imageURL,
  }
}

function requestedFailed(error:string) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  }
}


export function fetchDogImage() {
  return async(dispatch: Dispach)  => {
    try {
      dispatch(requesStarted());
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      console.log(data)
      dispatch(requestSuccesful(data.message));
    } catch (error: any) {
      dispatch(requestedFailed(error.message));
    }
  }
}