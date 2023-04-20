import { Injectable, NgModule } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { GetTeams, IGetResults } from './interface';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const headers = new HttpHeaders().append(
      'x-rapidapi-key',
      '1828b9db08a99c9075e1fe2aed7d5bc1'
    );
    // .append('X-RapidAPI-Host', 'api-football-beta.p.rapidapi.com');
    const cloneReq = req.clone({ headers });

    return next.handle(cloneReq);
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
})
export class HttpInterceptorModule {}
