import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import JobRole from './JobRole';

@Injectable({
  providedIn: 'root'
})
export class JobRoleService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }
  createNewJobRole(job_role: JobRole): Observable<any>{
    return this.http.post(`${this.url}/job_roles`, job_role)
  }
  getJobRoles(): Observable<any>{
    return this.http.get(`${this.url}/job_roles`)
  }
  deleteJobRole(_id: string): Observable<any>{
    return this.http.delete(`${this.url}/job_roles/` + _id)
  }
}
