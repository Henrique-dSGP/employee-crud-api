import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog'
import { EmployeesService } from './employees.service';
import { MatButtonModule } from '@angular/material/button';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeGetComponent } from './employee-get/employee-get.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEmpDialogBodyComponent } from './add-emp-dialog-body/add-emp-dialog-body.component';
import { AddJobDialogBodyComponent } from './add-job-dialog-body/add-job-dialog-body.component';
import { JobRoleGetComponent } from './job-role-get/job-role-get.component';
import { EditEmpDialogBodyComponent } from './edit-emp-dialog-body/edit-emp-dialog-body.component';
import { EditJobDialogBodyComponent } from './edit-job-dialog-body/edit-job-dialog-body.component';
import { SupportContactComponent } from './support-contact/support-contact.component';
import { FootComponent } from './foot/foot.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeGetComponent,
    AddEmpDialogBodyComponent,
    AddJobDialogBodyComponent,
    JobRoleGetComponent,
    EditEmpDialogBodyComponent,
    EditJobDialogBodyComponent,
    SupportContactComponent,
    FootComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  providers: [
    EmployeesService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons();
  }
}
