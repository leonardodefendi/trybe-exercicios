import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "redux"

export type ReduxState = {
  isFetching: boolean,
  imageURL: string,
  errorMessage: string,
}

export type Dispach = ThunkDispatch<ReduxState, null, AnyAction>