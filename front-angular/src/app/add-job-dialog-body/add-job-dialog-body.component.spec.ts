import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobDialogBodyComponent } from './add-job-dialog-body.component';

describe('AddJobDialogBodyComponent', () => {
  let component: AddJobDialogBodyComponent;
  let fixture: ComponentFixture<AddJobDialogBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJobDialogBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
