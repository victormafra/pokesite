import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PokemonNamePipe } from '../pipes/pokemon-name.pipe';
import { PokedexBadgeComponent } from './pokedex/pokedex-badge/pokedex-badge.component';
import { PokedexCardComponent } from './pokedex/pokedex-card/pokedex-card.component';
import { PokedexListComponent } from './pokedex/pokedex-list/pokedex-list.component';
import { PokedexModalComponent } from './pokedex/pokedex-modal/pokedex-modal.component';



@NgModule({
  declarations: [
    PokedexListComponent,
    PokedexCardComponent,
    PokemonNamePipe,
    PokedexBadgeComponent,
    PokedexModalComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FontAwesomeModule
  ],
  exports: [
    PokedexListComponent
  ],
  providers: [
    PokemonNamePipe
  ]
})
export class PokedexComponentsModule { }
