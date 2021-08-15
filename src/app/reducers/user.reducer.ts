import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import * as userAction from "../actions/user.actions";

export const userFeatureKey = "user";

export interface State {
  loggedInUser: string | null;
  isAuthenticated: boolean;
}

export const initialState: State = {
  loggedInUser: null,
  isAuthenticated: false,
};

export const reducer = createReducer(
  initialState,
  on(userAction.loginUsersSuccess, (state, { user }: any) => ({
    ...state,
    loggedInUser: user.name,
    isAuthenticated: true
  }))
);
