import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEmpDialogBodyComponent } from '../add-emp-dialog-body/add-emp-dialog-body.component';

@Component({
  selector: 'app-employee-get',
  templateUrl: './employee-get.component.html',
  styleUrls: ['./employee-get.component.css']
})
export class EmployeeGetComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddEmpDialogBodyComponent, {
      hasBackdrop: false,
      width: '70%',
      minWidth:'60%',
      maxWidth: '100%',
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
}
