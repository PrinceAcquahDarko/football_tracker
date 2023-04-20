import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IGetLastSix, ILastSix, ITeams } from '../app.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  url = 'https://v3.football.api-sports.io/teams?league=39&season=2022';
  lastsix: ILastSix[] = []
  constructor(private http: HttpClient) {}

  getTeams(): Observable<ITeams> {
    return this.http.get<ITeams>(this.url).pipe(catchError(this.handleError));
  }
  getLastSix(id: number): Observable<IGetLastSix> {
    let params = new HttpParams();
    params = params.append('team', id);
    params = params.append('last', 6);
    return this.http
      .get<IGetLastSix>(`https://v3.football.api-sports.io/fixtures`, {
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
