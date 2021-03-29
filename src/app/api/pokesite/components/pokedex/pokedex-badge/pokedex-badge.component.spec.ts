import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexBadgeComponent } from './pokedex-badge.component';

describe('PokedexBadgeComponent', () => {
  let component: PokedexBadgeComponent;
  let fixture: ComponentFixture<PokedexBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
