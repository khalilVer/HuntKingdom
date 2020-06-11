import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOfficeComponent } from './admin-office.component';

describe('AdminOfficeComponent', () => {
  let component: AdminOfficeComponent;
  let fixture: ComponentFixture<AdminOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
