import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailthreadComponent } from './detailthread.component';

describe('DetailthreadComponent', () => {
  let component: DetailthreadComponent;
  let fixture: ComponentFixture<DetailthreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailthreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailthreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
