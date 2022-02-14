import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  userInfo = null;
  private baseURL = '/.netlify/functions';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<any> {
    const res = this.http.post(`${this.baseURL}/getUser`, { username });
    return res;
  }

  getUserInfo() {
    return this.userInfo;
  }

  setUserInfo(user: any) {
    this.userInfo = user;
  }
}
