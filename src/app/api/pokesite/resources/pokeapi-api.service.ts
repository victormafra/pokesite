import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonRef } from '../interfaces/pokemon-ref.interface';
import { Pokemon } from '../interfaces/pokemon.interface';
import { RequisitionWrapper } from '../interfaces/requisition-wrapper.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeapiApiService {
  protected baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(
    protected $http: HttpClient,
  ) { }

  protected getStat(stats: Array<any>, statName: string): number {
    return stats.find((s: any) => s.stat.name === statName).base_stat;
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.$http.request<Pokemon>('GET', url).pipe(
      map((pokeApiPokemonEntity: any) => {
        return {
          id: pokeApiPokemonEntity.id,
          name: pokeApiPokemonEntity.name,
          hp: this.getStat(pokeApiPokemonEntity.stats, 'hp'),
          attack: this.getStat(pokeApiPokemonEntity.stats, 'attack'),
          defense: this.getStat(pokeApiPokemonEntity.stats, 'defense'),
          image: pokeApiPokemonEntity.sprites.front_default,
          type: pokeApiPokemonEntity.types?.map((pokemon: any) => pokemon.type.name),
          favorite: false
        };
      })
    );
  }

  getPokemonList(limit: number, offset: number): Observable<RequisitionWrapper<PokemonRef>> {
    return this.$http.request<RequisitionWrapper<PokemonRef>>('GET', `${this.baseUrl}pokemon/?limit=${limit}&offset=${offset}`);
  }
}
