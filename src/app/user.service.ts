import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: Http
  ) { }

  public getUsers() {
    return this.http.get(this.apiUrl).toPromise();
  }
}
