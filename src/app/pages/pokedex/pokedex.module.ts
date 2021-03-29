import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokedexComponentsModule } from '../../api/pokesite/components/pokedex-components.module';
import { PokedexPageComponent } from './pokedex-page/pokedex-page.component';
import { PokedexRoutingModule } from './pokedex-routing.module';



@NgModule({
  declarations: [PokedexPageComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    PokedexComponentsModule
  ]
})
export class PokedexModule { }
