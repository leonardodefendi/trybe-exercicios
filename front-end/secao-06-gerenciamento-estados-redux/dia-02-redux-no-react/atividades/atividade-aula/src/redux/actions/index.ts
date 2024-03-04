
export const actionCreator = (action:string ,increment = 1) => ({ 
  type: action,
  payload: increment,
});