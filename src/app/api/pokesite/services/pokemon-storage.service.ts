import { Injectable } from '@angular/core';
import { PokemonRef } from '../interfaces/pokemon-ref.interface';

const POKEKEY = 'pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonStorageService {
  savePokemonFavoriteStatus(ref: PokemonRef): void {
    let favoritedPokemons = this.getFavoritedPokemons();
    if (this.pokemonFavoriteStatus(favoritedPokemons, ref.name)) {
      favoritedPokemons = this.removeFromFavorites(favoritedPokemons, ref);
    } else {
      favoritedPokemons = this.addToFavorites(favoritedPokemons, ref);
    }
    window.localStorage.setItem(POKEKEY, JSON.stringify(favoritedPokemons));
  }

  isPokemonFavorite(name: string): boolean {
    const favoritedPokemons = this.getFavoritedPokemons();
    return this.pokemonFavoriteStatus(favoritedPokemons, name);
  }

  private addToFavorites(favoritedPokemons: Array<PokemonRef>, ref: PokemonRef): Array<PokemonRef> {
    favoritedPokemons.push(ref);
    return favoritedPokemons;
  }

  private removeFromFavorites(favoritedPokemons: Array<PokemonRef>, ref: PokemonRef): Array<PokemonRef> {
    return favoritedPokemons.filter(poke => poke.name !== ref.name);
  }

  private pokemonFavoriteStatus(favoritedPokemons: Array<PokemonRef>, name: string): boolean {
    return !!favoritedPokemons.find(poke => poke.name === name);
  }

  private getFavoritedPokemons(): Array<PokemonRef> {
    const favoritedPokemonsRaw = window.localStorage.getItem(POKEKEY);
    if (!favoritedPokemonsRaw) {
      window.localStorage.setItem(POKEKEY, '[]');
      return [];
    }
    return JSON.parse(favoritedPokemonsRaw);
  }

}
