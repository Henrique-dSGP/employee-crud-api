import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-emp-dialog-body',
  templateUrl: './add-emp-dialog-body.component.html',
  providers:[]
})
export class AddEmpDialogBodyComponent {
  
  empForm = new FormGroup({
    empname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    jobrole: new FormControl('', [Validators.required, Validators.minLength(4)]),
    salary: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    empreg: new FormControl('', Validators.required)
    
  })
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) private data:any) {
    
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

}
