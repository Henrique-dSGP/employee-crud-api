import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import Employee from '../Employee';
import { EmployeesService } from '../employees.service';
import { JobRoleService } from '../job-role.service';
import JobRole from '../JobRole';

@Component({
  selector: 'app-edit-emp-dialog-body',
  templateUrl: './edit-emp-dialog-body.component.html',
  styleUrls: ['./edit-emp-dialog-body.component.css']
})
export class EditEmpDialogBodyComponent implements OnInit {
  jobs: JobRole[] = [];
  employee = new Employee;

  empForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    job_role: new FormControl('', [Validators.required]),
    salary: new FormControl('', Validators.required),
    date_of_birth: new FormControl('', Validators.required),
    employee_registration: new FormControl('', Validators.required)
    
  })

  constructor(private fb: FormBuilder,
    private employeeService: EmployeesService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private router: Router,
    private dialogRef: MatDialogRef<EditEmpDialogBodyComponent>,
    private jobRoleService: JobRoleService
  ) { }

  ngOnInit(): void {
    this.jobRoleService.getJobRoles().subscribe((data: JobRole[]) => {
      this.jobs = data;
    })
    this.employee = this.data['employee'];
  }
  resetValue() {
    this.empForm.reset()
  }

  getControl(control: string): AbstractControl {
      return this.empForm.controls[control]
  }
  
  validatorInputs(control: string): boolean{
    return this.getControl(control).invalid && (this.getControl(control).dirty || this.getControl(control).touched)
  }

  validatorErrorsRequired(control: string): boolean{
    return this.getControl(control).errors?.required
  }
  getName() {
    return this.empForm.get('name')
  }
  getSalary() {
    return this.empForm.get('salary')
  }
  getBirthdate() {
    return this.empForm.get('date_of_birth')
  }
  getEmpReg() {
    return this.empForm.get('employee_registration')
  }
  getJobRole() {
    return this.empForm.get('job_role')
  }
  updateEmployee(id: string): void {
    // se voltar como um return não funciona, por isso do void
    this.employeeService.updateEmployee(id, this.empForm.value).subscribe(res => {
      Swal.fire({
        title: 'Employee Update',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false
      }).then((data) => {
        this.dialogRef.close;
        this.router.navigate(['/employee']);
        document.location.reload()
      })
    },errorCalback => {
      Swal.fire({
        title: 'Employee Update Error',
        icon: 'error',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: true
      }).then((data) => {
        this.dialogRef.close()
      })
    })
  }
  submit() {
    
  }

}
