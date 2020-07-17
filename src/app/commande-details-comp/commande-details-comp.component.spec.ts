import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeDetailsCompComponent } from './commande-details-comp.component';

describe('CommandeDetailsCompComponent', () => {
  let component: CommandeDetailsCompComponent;
  let fixture: ComponentFixture<CommandeDetailsCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeDetailsCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeDetailsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
