/**
 * arquivo: app/employees.service.ts
 * descrição: arquivo responsável por realizar as transições de request entre o Back -> Front
 * data: 03/05/2021
 * author: HDSGP
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
    
  }
  createNewEmployee(employee_name: any, job_role: any, salary: any, birth: any, employe_reg: any): void {
    const emp = {
      employee_name,
      job_role,
      salary,
      birth,
      employe_reg
    }
    this.http.post(`${this.url}/employees`, emp).subscribe(res => console.log('done'))
  }
}
