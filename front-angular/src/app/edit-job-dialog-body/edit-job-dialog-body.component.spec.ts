import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobDialogBodyComponent } from './edit-job-dialog-body.component';

describe('EditJobDialogBodyComponent', () => {
  let component: EditJobDialogBodyComponent;
  let fixture: ComponentFixture<EditJobDialogBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJobDialogBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJobDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
