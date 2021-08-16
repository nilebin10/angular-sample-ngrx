import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { AppService } from "../app.service";
import * as authActions from "../actions/user.actions";
import { Router } from "@angular/router";

@Injectable()
export class UserEffects {
  logins$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.loginUsers),
        exhaustMap((action) =>
          this.appService.authenticate(action.user).pipe(
            map((user) => {
              this.router.navigate(["/employees"]);
              return authActions.loginUsersSuccess({ data: user });
            }),
            catchError((error) => of(authActions.loginUsersFailure({ error })))
          )
        )
      ),
    { useEffectsErrorHandler: false }
  );

  constructor(
    private actions$: Actions,
    private appService: AppService,
    private router: Router
  ) {}
}
