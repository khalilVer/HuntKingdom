import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductsSidebarComponent } from './shop-products-sidebar.component';

describe('ShopProductsSidebarComponent', () => {
  let component: ShopProductsSidebarComponent;
  let fixture: ComponentFixture<ShopProductsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProductsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
