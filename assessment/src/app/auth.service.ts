import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Authenticate {
  success: boolean;
  usertype: string;
  token: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  tokenSet = '';
  loginType = '';

  constructor(private http: HttpClient) { }

  setLoginStatus(value: boolean, logintype: string, token: string) {
    this.loggedInStatus = value;
    this.tokenSet = token;
    this.loginType = logintype;

    localStorage.setItem('loggedIn', JSON.stringify(value));
    localStorage.setItem('usertype', this.loginType);
    localStorage.setItem('token', this.tokenSet);
  }

  getUserData(credientials) {
    return this.http.post<Authenticate>('http://localhost/Mark_Assesment/server/login.php', credientials, {
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });

  }
}
