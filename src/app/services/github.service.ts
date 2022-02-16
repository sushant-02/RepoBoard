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

  getUserInfo() {
    return this.userInfo;
  }

  setUserInfo(user: any) {
    this.userInfo = user;
  }

  getUser(username: string): Observable<any> {
    const res = this.http.post(`${this.baseURL}/getUser`, { username });
    return res;
  }

  getAllRepos(
    username: string,
    direction: string,
    per_page: number,
    page: number
  ): Observable<any> {
    const res = this.http.post(`${this.baseURL}/getRepos`, {
      username,
      direction,
      per_page,
      page,
    });
    return res;
  }

  getLanguages(url: string): Observable<any> {
    const res = this.http.post(`${this.baseURL}/getLanguages`, { url });
    return res;
  }
}
