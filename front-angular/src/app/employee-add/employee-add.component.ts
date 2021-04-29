import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Employee } from './emp';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  empForm = new FormGroup({
    empname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    jobrole: new FormControl('', [Validators.required, Validators.minLength(4)]),
    salary: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    empreg: new FormControl('', Validators.required)
    
  })
  constructor(private fb: FormBuilder) {
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

}
