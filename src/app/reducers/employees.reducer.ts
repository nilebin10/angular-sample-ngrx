import { Action, createReducer, on } from "@ngrx/store";
import * as EmployeeAction from "../actions/employees.actions";

export const employeesFeatureKey = "employees";

export interface State {
  employeeList: any[];
  selectedEmployee: any;
}

export const initialState: State = {
  employeeList: [],
  selectedEmployee: {},
};

export const reducer = createReducer(
  initialState,
  on(EmployeeAction.getEmployeesSuccess, (state, { data }) => ({
    ...state,
    employeeList: [...data],
  }))
);
