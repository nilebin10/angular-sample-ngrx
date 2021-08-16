import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  user = "";
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!request.url?.includes("/authenticate")) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.user}`,
        },
      });
      return next.handle(request);
    }
    return next.handle(request);
  }
}
