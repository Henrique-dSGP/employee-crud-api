import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AddEmpDialogBodyComponent } from '../add-emp-dialog-body/add-emp-dialog-body.component';
import { EditEmpDialogBodyComponent } from '../edit-emp-dialog-body/edit-emp-dialog-body.component';
import Employee from '../Employee';
import { EmployeesService } from '../employees.service';
import { JobRoleService } from '../job-role.service';
import JobRole from '../JobRole';

@Component({
  selector: 'app-employee-get',
  templateUrl: './employee-get.component.html',
  styleUrls: ['./employee-get.component.css']
})
export class EmployeeGetComponent implements OnInit {
  employees: Employee[] = [];
  jobs: JobRole[] = [];
  employee = new Employee;

  constructor(private dialog: MatDialog, private employeeService: EmployeesService, private jobRoleService: JobRoleService) {
    //console.log(this.jobss)
    //console.log(this.employeess)
  }
  ngOnInit(): void {
    this.jobRoleService.getJobRoles().subscribe((data: JobRole[]) => {
      this.jobs = data;
    })
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
      var job_name = '';
      //unico jeito que achei de substituir o id do job_role no employees pelo nome referente ao id
      //raras vezes ele retorna o id normal como se não fosse feita a substituição
      for (var i = 0; i < this.employees.length; i++) {
        for (var jo of this.jobs) {
          if (this.employees[i].job_role == jo._id) {
            job_name = this.employees[i].job_role;
            this.employees[i].job_role = jo.name;
          }
        }
      }
    })
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(AddEmpDialogBodyComponent, {
      hasBackdrop: false,
      width: '70%',
      minWidth: '60%',
      maxWidth: '105%',
      maxHeight: '100%',
      backdropClass: 'backdropBackground',
      panelClass: 'dialog-custom'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    })
  }
  openDialogEdit(id: string, employee: Employee) {
    const dialogRef = this.dialog.open(EditEmpDialogBodyComponent, {
      hasBackdrop: false,
      width: '70%',
      minWidth: '60%',
      maxWidth: '105%',
      maxHeight: '100%',
      backdropClass: 'backdropBackground',
      panelClass: 'dialog-custom',
      data: {
        employee: employee,
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    })
  }
  save() {

  }
  /*updateEmployee(id: string): void{
    this.employeeService.getEmployeeById(id).subscribe(data => {
      this.employee = data;
      this.employeeService.updateEmployee(id, this.employee).subscribe(data => {
        console.log(data)
      })
    })
  }*/
  deleteEmployee(id: string): void {
    this.employeeService.deleteEmployee(id).subscribe(res => {
      Swal.fire({
        title: 'Employee deleted',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false
      }).then((data) => {
        document.location.reload(true)
      })
    }, errorCallback => {
      Swal.fire({
        title: 'Error when trying to delete an Employee',
        icon: 'error',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false
      }).then((data) => {
        document.location.reload(true)
      })
    });
  }
}
