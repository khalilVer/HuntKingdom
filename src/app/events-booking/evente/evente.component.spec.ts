import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventeComponent } from './evente.component';

describe('EventeComponent', () => {
  let component: EventeComponent;
  let fixture: ComponentFixture<EventeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
