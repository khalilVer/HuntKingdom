import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBookComponent } from './welcome-book.component';

describe('WelcomeBookComponent', () => {
  let component: WelcomeBookComponent;
  let fixture: ComponentFixture<WelcomeBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
