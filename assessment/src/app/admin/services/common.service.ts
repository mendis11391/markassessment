import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.post<any>('http://localhost/Mark_GIT/server/categories.php', {action: 'getall'}, {
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
  }

  insertCategory(categoryData) {
    return this.http.post<any>('http://localhost/Mark_GIT/server/categories.php', categoryData, {
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
  }

}
