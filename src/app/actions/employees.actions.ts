import { createAction, props } from "@ngrx/store";

export const getEmployees = createAction("[Employees] Get Employeess");

export const getEmployeesSuccess = createAction(
  "[Employees] Get Employeess Success",
  props<{ data: any }>()
);

export const getEmployeesFailure = createAction(
  "[Employees] Get Employeess Failure",
  props<{ error: any }>()
);
