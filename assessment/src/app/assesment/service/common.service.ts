import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsURL } from '../../constURL';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  addStudent(studentData) {
    return this.http.post<any>(ConstantsURL.ADD_STUDENT, studentData, {
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
  }
}
