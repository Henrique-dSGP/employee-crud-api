import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-add-emp-dialog-body',
  templateUrl: './add-emp-dialog-body.component.html',
  providers:[]
})
export class AddEmpDialogBodyComponent {
  
  empForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    job_role: new FormControl('', [Validators.required, Validators.minLength(4)]),
    salary: new FormControl('', Validators.required),
    date_of_birth: new FormControl('', Validators.required),
    employee_registration: new FormControl('', Validators.required)
    
  })//name, job_role, salary, date_of_birth, employee_registration
  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private empService: EmployeesService,
    private router: Router,
    public dialogRef: MatDialogRef<AddEmpDialogBodyComponent>) {
    
  }

  ngOnInit(): void {
    
  }
  submit() {
    if (this.empForm.status === 'VALID') {
      console.log(this.empForm.value);
    }
  }
  resetValue() {
    this.empForm.reset()
  }
  
  getControl(control: string): AbstractControl{
    return this.empForm.controls[control]
  }

  validatorInputs(control: string): boolean{
    return this.getControl(control).invalid && (this.getControl(control).dirty || this.getControl(control).touched);
  }
  validatorErrorsRequired(control: string): boolean{
    return this.getControl(control).errors?.required
  }

  getName() {
    return this.empForm.get('name')
  }
  getJobRole() {
    return this.empForm.get('jobrole')
  }
  getSalary() {
    return this.empForm.get('salary')
  }
  getBirthdate() {
    return this.empForm.get('birthdate')
  }
  getEmpReg() {
    return this.empForm.get('empreg')
  }
  createNewEmployee(): void {
    console.log(this.empForm.value)
    this.empService.createNewEmployee(this.empForm.value).subscribe(res => {
      
      Swal.fire({
        title: 'Employee added',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false
      }).then((data) => {
        this.dialogRef.close()
        this.router.navigate(['/employee'])
      })
        
    }, errorCalback => {
      Swal.fire({
        title: 'Register Error',
        icon: 'error',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false
      }).then((data) => {
        this.dialogRef.close()
      })
    });
  }

}
