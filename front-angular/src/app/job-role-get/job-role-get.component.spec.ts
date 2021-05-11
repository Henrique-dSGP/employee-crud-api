import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRoleGetComponent } from './job-role-get.component';

describe('JobRoleGetComponent', () => {
  let component: JobRoleGetComponent;
  let fixture: ComponentFixture<JobRoleGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobRoleGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRoleGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
