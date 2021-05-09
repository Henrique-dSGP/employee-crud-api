/**
 * arquivo: app/employees.service.ts
 * descrição: arquivo responsável por realizar as transições de request entre o Back -> Front
 * data: 03/05/2021
 * author: HDSGP
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Employee from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
    
  }
  createNewEmployee(employee: Employee): Observable<any> {
    return this.http.post(`${this.url}/employees`, employee)
    //this.http.post(`${this.url}/employees`, emp).subscribe(res => console.log(res))
  }
  getEmployees(): Observable<any>{
    ///aplicar conversão JSON to TsArray aqui
    return this.http.get(`${this.url}/employees`)
  }
  deleteEmployee(employee_id: string): Observable<any>{
    return this.http.delete(`${this.url}/employees/` + employee_id);
  }
}
