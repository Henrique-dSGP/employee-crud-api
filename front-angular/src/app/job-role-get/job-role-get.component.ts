import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AddJobDialogBodyComponent } from '../add-job-dialog-body/add-job-dialog-body.component';
import { EditJobDialogBodyComponent } from '../edit-job-dialog-body/edit-job-dialog-body.component';
import { JobRoleService } from '../job-role.service';
import JobRole from '../JobRole';

@Component({
  selector: 'app-job-role-get',
  templateUrl: './job-role-get.component.html',
  styleUrls: ['./job-role-get.component.css']
})
export class JobRoleGetComponent implements OnInit {
  jobRoles: JobRole[] = [];

  constructor(private dialog: MatDialog, private jobRoleService: JobRoleService) { }

  ngOnInit(): void {
    this.jobRoleService.getJobRoles().subscribe((data: JobRole[]) => {
      this.jobRoles = data;
    })
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddJobDialogBodyComponent, {
      hasBackdrop: true,
      width: '70%',
      minWidth: '60%',
      maxWidth: '105%',
      maxHeight: '100%',
      panelClass: 'dialog-custom'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    })
  }
  openDialogEdit(id: string, job_role: JobRole) {
    const dialogRef = this.dialog.open(EditJobDialogBodyComponent, {
      hasBackdrop: false,
      width: '70%',
      minWidth: '60%',
      maxWidth: '105%',
      maxHeight: '100%',
      backdropClass: 'backdropBackground',
      panelClass: 'dialog-custom',
      data: {
        job_role: job_role,
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}')
    })
  }
  deleteJobRole(_id: string): void {
    this.jobRoleService.deleteJobRole(_id).subscribe(res => {
      Swal.fire({
        title: 'Job Role Deleted',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false
      }).then((data) => {
        document.location.reload(true)
      })
    }, errorCalback => {
      Swal.fire({
        title: 'Error when trying to delete an Job Role',
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
