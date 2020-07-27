import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharestoryComponent } from './sharestory.component';

describe('SharestoryComponent', () => {
  let component: SharestoryComponent;
  let fixture: ComponentFixture<SharestoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharestoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharestoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
