import { createAction, props } from '@ngrx/store';

export const loginUsers = createAction(
  '[User] Login Users'
);

export const loginUsersSuccess = createAction(
  '[User] Login Users Success',
  props<{ data: any }>()
);

export const loginUsersFailure = createAction(
  '[User] Login Users Failure',
  props<{ error: any }>()
);
