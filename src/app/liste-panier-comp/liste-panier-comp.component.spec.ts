import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePanierCompComponent } from './liste-panier-comp.component';

describe('ListePanierCompComponent', () => {
  let component: ListePanierCompComponent;
  let fixture: ComponentFixture<ListePanierCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePanierCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePanierCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
