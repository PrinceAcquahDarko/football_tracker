import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { GetLastSix, LastSix, Teams } from '../app.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  url = 'https://v3.football.api-sports.io/teams?league=39&season=2022';
  lastsix: LastSix[] = []
  constructor(private http: HttpClient) {}

  getTeams(): Observable<Teams> {
    return this.http.get<Teams>(this.url).pipe(catchError(this.handleError));
  }
  getLastSix(id: number): Observable<GetLastSix> {
    let params = new HttpParams();
    params = params.append('team', id);
    params = params.append('last', 6);
    return this.http
      .get<GetLastSix>(`https://v3.football.api-sports.io/fixtures`, {
        params,
      })
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    let message = '';

    if (err.error instanceof ErrorEvent) {
      message = `an error occured: ${err.error.message}`;
    } else {
      message = err.error;
    }

    return throwError(message);
  }
}
