import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexCardComponent } from './pokedex-card.component';

describe('PokedexCardComponent', () => {
  let component: PokedexCardComponent;
  let fixture: ComponentFixture<PokedexCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
