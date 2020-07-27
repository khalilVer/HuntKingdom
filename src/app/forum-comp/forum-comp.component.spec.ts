import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumCompComponent } from './forum-comp.component';

describe('ForumCompComponent', () => {
  let component: ForumCompComponent;
  let fixture: ComponentFixture<ForumCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
