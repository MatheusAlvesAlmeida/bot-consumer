import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { suggestionModel } from '../models/suggestion-model';

@Injectable()
export class SuggestionAPI {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private baseUrl = 'http://localhost:4000/api/sugestoes/';

  public constructor(private readonly http: HttpClient) {}

  public getSuggestionByPhone(phone: string) {
    return this.http
      .get<suggestionModel[]>(this.baseUrl + phone, { headers: this.headers })
      .pipe(retry(2));
  }

  public deleteSuggestion(id: number): Observable<suggestionModel[]> {
    return this.http
      .delete<any>(this.baseUrl + id, {
        headers: this.headers,
      })
      .pipe(
        retry(2),
        map((res) => {
          return res.result;
        })
      );
  }
}
