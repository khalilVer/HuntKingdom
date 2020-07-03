import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCompComponent } from './shop-comp.component';

describe('ShopCompComponent', () => {
  let component: ShopCompComponent;
  let fixture: ComponentFixture<ShopCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
