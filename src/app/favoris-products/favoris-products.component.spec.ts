import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisProductsComponent } from './favoris-products.component';

describe('FavorisProductsComponent', () => {
  let component: FavorisProductsComponent;
  let fixture: ComponentFixture<FavorisProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorisProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorisProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
