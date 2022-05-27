import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { userModel } from '../models/user-model';

@Injectable()
export class UsersAPI {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private baseUrl = 'http://localhost:4000/api/usuario';

  public constructor(private readonly http: HttpClient) {}

  public getAllUsers() {
    return this.http
      .get<userModel[]>(this.baseUrl, { headers: this.headers })
      .pipe(retry(2));
  }
}
