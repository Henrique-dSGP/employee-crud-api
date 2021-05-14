import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpDialogBodyComponent } from './edit-emp-dialog-body.component';

describe('EditEmpDialogBodyComponent', () => {
  let component: EditEmpDialogBodyComponent;
  let fixture: ComponentFixture<EditEmpDialogBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpDialogBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
