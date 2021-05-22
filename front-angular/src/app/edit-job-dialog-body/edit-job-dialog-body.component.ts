import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { JobRoleService } from '../job-role.service';
import JobRole from '../JobRole';

@Component({
  selector: 'app-edit-job-dialog-body',
  templateUrl: './edit-job-dialog-body.component.html',
  styleUrls: ['./edit-job-dialog-body.component.css']
})
export class EditJobDialogBodyComponent implements OnInit {

  job_role = new JobRole;
  jobForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    min_wage: new FormControl('', Validators.required),
    max_wage: new FormControl('', Validators.required),
    min_w_exp: new FormControl('', Validators.required)
  })

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private jobService: JobRoleService,
    public dialogRef: MatDialogRef<EditJobDialogBodyComponent>,
  private router: Router) { }

  ngOnInit(): void {
    this.job_role = this.data['job_role'];
  }

  resetValue() {
    this.jobForm.reset()
  }
  getControl(control: string): AbstractControl{
    return this.jobForm.controls[control]
  }
  validatorInputs(control: string): boolean{
    return this.getControl(control).invalid && (this.getControl(control).dirty || this.getControl(control).touched);
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

  editJobRole(id: string): void{
    this.jobService.editJobRole(id, this.jobForm.value).subscribe(res => {
      Swal.fire({
        title: 'Job Role Edited',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false
      }).then((data) => {
        this.dialogRef.close();
        document.location.reload();
      })
    }, errorCalback => {
      Swal.fire({
        title: 'Edit Error',
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
