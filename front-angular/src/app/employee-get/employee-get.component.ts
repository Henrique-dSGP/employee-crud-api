import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AddEmpDialogBodyComponent } from '../add-emp-dialog-body/add-emp-dialog-body.component';
import Employee from '../Employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-get',
  templateUrl: './employee-get.component.html',
  styleUrls: ['./employee-get.component.css']
})
export class EmployeeGetComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private dialog: MatDialog, private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    }) 
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddEmpDialogBodyComponent, {
      hasBackdrop: false,
      width: '70%',
      minWidth:'60%',
      maxWidth: '105%',
      maxHeight:'100%',
      backdropClass: 'backdropBackground',
      panelClass: 'dialog-custom'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    })
  }
  save() {
    
  }
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
