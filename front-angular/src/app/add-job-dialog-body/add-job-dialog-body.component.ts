import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { JobRoleService } from '../job-role.service';

@Component({
  selector: 'app-add-job-dialog-body',
  templateUrl: './add-job-dialog-body.component.html',
  styleUrls: ['./add-job-dialog-body.component.css']
})
export class AddJobDialogBodyComponent {

  jobForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    min_wage: new FormControl('', Validators.required),
    max_wage: new FormControl('', Validators.required),
    min_w_exp: new FormControl('', Validators.required)

  })
  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private jobService: JobRoleService,
    public dialogRef: MatDialogRef<AddJobDialogBodyComponent>,
  private router: Router) { }

  ngOnInit(): void {
  }

  resetValue() {
    this.jobForm.reset()
  }
  getControl(control: string): AbstractControl{
    return this.jobForm.controls[control]
  }
  validatorInputs(control: string): boolean{
    return this.getControl(control).invalid && (this.getControl(control).dirty || this.getControl(control)
      .touched);
  }
  validatorErrorsRequired(control: string): boolean{
    return this.getControl(control).errors?.required
  }
  getName() {
    return this.jobForm.get('name');
  }
  getMinWage() {
    return this.jobForm.get('min_wage');
  }
  getMaxWage() {
    return this.jobForm.get('max_wage');
  }
  getMinWExp() {
    return this.jobForm.get('min_w_exp');
  }
  createNewJobRole(): void{
    this.jobService.createNewJobRole(this.jobForm.value).subscribe(res => {
      Swal.fire({
        title: 'Job Role Added',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
      }).then((data) => {
        this.dialogRef.close()
        this.router.navigate(['/job_roles'])
        document.location.reload();
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
    })
  }

}
