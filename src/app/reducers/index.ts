import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import * as employee from "./employees.reducer";
import * as user from "./user.reducer";

export interface State {
  user: user.State;
  employees: employee.State;
}

export const reducers: ActionReducerMap<State> = {
  user: user.reducer,
  employees: employee.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
