import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOfficeSidebarComponent } from './admin-office-sidebar.component';

describe('AdminOfficeSidebarComponent', () => {
  let component: AdminOfficeSidebarComponent;
  let fixture: ComponentFixture<AdminOfficeSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOfficeSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOfficeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
