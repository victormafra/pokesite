import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexListComponent } from './pokedex/pokedex-list/pokedex-list.component';
import { PokedexCardComponent } from './pokedex/pokedex-card/pokedex-card.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PokemonNamePipe } from '../pipes/pokemon-name.pipe';



@NgModule({
  declarations: [
    PokedexListComponent,
    PokedexCardComponent,
    PokemonNamePipe
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
