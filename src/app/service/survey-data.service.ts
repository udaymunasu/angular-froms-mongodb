import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root',
})
export class SurveyDataService {
  url = environment.url;
  constructor(private http: HttpClient) {}
  private API_URL = this.url + '/api/userData';
  getdata() {
    return this.http.get(this.API_URL);
  }
  postdata(user: User) {
    console.log(user);
    return this.http.post(this.API_URL, user);
  }
}
