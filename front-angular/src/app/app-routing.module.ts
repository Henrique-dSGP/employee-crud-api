import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeGetComponent } from './employee-get/employee-get.component';
import { JobRoleGetComponent } from './job-role-get/job-role-get.component';

const routes: Routes = [
  {path: 'employee/create', component:EmployeeAddComponent},
  {path: 'employee/:id', component:EmployeeEditComponent},
  {path: 'employee', component:EmployeeGetComponent},
  {path: 'job_roles', component:JobRoleGetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
