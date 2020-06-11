import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOfficeNavbarComponent } from './admin-office-navbar.component';

describe('AdminOfficeNavbarComponent', () => {
  let component: AdminOfficeNavbarComponent;
  let fixture: ComponentFixture<AdminOfficeNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOfficeNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOfficeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
