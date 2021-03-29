import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexModalComponent } from './pokedex-modal.component';

describe('PokedexModalComponent', () => {
  let component: PokedexModalComponent;
  let fixture: ComponentFixture<PokedexModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
