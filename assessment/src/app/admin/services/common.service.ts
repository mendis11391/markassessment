import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsURL } from '../../constURL';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.post<any>(ConstantsURL.CATEGORIES, {action: 'getall'}, {
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
  }

  insertCategory(categoryData) {
    return this.http.post<any>(ConstantsURL.CATEGORIES, categoryData, {
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
  }

  addQuestions(data) {
    return this.http.post<any>(ConstantsURL.ADD_QUSTIONAIR, data, {
      headers : {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
  }

  getAllQuestions(data) {
    return this.http.post<any>(ConstantsURL.GET_ALL_QUETIONS, data, {
      headers : {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
  }

}
