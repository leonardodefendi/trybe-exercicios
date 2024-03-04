import { AnyAction } from "redux";
export const INITIAL_STATE = {count: 0, clicks: 0};

const counterReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
    return { count: state.count + action.payload};
    case 'DECREMENT_COUNTER':
      return{count: state.count - action.payload};
    default:
      return state;
  }
}




export default counterReducer; 