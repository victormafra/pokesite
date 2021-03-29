import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../interfaces/pokemon.interface';
import { RequisitionWrapper } from '../interfaces/requisition-wrapper.interface';
import { PokemonBase } from '../interfaces/pokemon-base.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeapiApiService {
  protected baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(
    protected $http: HttpClient,
  ) { }

  getPokemon(url: string): Observable<Pokemon> {
    return this.$http.request<Pokemon>('GET', url).pipe(
      map((pokeApiPokemonEntity: any) => {
        return {
          id: pokeApiPokemonEntity.id,
          name: pokeApiPokemonEntity.name,
          hp: pokeApiPokemonEntity.stats.find((x: any) => x.stat.name === 'hp').base_stat,
          attack: pokeApiPokemonEntity.stats.find((x: any) => x.stat.name === 'attack').base_stat,
          defense: pokeApiPokemonEntity.stats.find((x: any) => x.stat.name === 'defense').base_stat,
          image: pokeApiPokemonEntity.sprites.front_default,
          type: pokeApiPokemonEntity.types?.map((pokemon: any) => pokemon.type.name),
          favorite: false
        };
      })
    );
  }

  getPokemonList(limit: number, offset: number): Observable<RequisitionWrapper<PokemonBase>> {
    return this.$http.request<RequisitionWrapper<PokemonBase>>('GET', `${this.baseUrl}pokemon/?limit=${limit}&offset=${offset}`);
  }
}
