import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConstantURL {
  baseURL = `http://localhost/Mark_Assesment/server/`;
  login = `${this.baseURL}login.php`;
}
