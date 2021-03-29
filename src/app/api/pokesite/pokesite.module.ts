import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokemonNamePipe } from './pipes/pokemon-name.pipe';
import { PokeapiApiService } from './resources/pokeapi-api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PokeapiApiService,
    PokemonNamePipe
  ]
})
export class PokesiteModule { }
