import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierProductsComponent } from './panier-products.component';

describe('PanierProductsComponent', () => {
  let component: PanierProductsComponent;
  let fixture: ComponentFixture<PanierProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
