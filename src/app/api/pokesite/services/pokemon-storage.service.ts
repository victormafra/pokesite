import { Injectable } from '@angular/core';
import { PokemonBase } from '../interfaces/pokemon-base.interface';

const pokeKey = 'pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonStorageService {

  togglePokemonFavoriteStatus(name: string, url: string): void {
    const allFavoritedPokemons = this.getAllFavoritedPokemons();
    if (allFavoritedPokemons) {
      let favoritedPokemonsParsed: Array<PokemonBase> = JSON.parse(allFavoritedPokemons);
      if (this.isPokemonFavorite(name)) {
        favoritedPokemonsParsed = favoritedPokemonsParsed.filter(pokemon => pokemon.name !== name);
      } else {
        favoritedPokemonsParsed.push({name, url});
      }
      window.localStorage.setItem(pokeKey, JSON.stringify(favoritedPokemonsParsed));
    } else {
      const favoritedPokemons: Array<PokemonBase> = [{name, url}];
      window.localStorage.setItem(pokeKey, JSON.stringify(favoritedPokemons));
    }
  }

  isPokemonFavorite(name: string | undefined): boolean {
    return !!this.getFavoritePokemon(name);
  }

  getFavoritePokemon(name: string | undefined): any {
    const favoritedPokemons = this.getAllFavoritedPokemons();
    if (favoritedPokemons) {
      const favoritedPokemonsParsed: Array<PokemonBase> = JSON.parse(favoritedPokemons);
      return favoritedPokemonsParsed.find(poke => poke.name === name);
    }
    return undefined;
  }

  getAllFavoritedPokemons(): string | null {
    return window.localStorage.getItem(pokeKey);
  }

}
