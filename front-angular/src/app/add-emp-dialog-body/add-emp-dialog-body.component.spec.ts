import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpDialogBodyComponent } from './add-emp-dialog-body.component';

describe('AddEmpDialogBodyComponent', () => {
  let component: AddEmpDialogBodyComponent;
  let fixture: ComponentFixture<AddEmpDialogBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmpDialogBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
