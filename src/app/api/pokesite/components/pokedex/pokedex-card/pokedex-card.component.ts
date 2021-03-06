import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { faStar as hollowStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { first } from 'rxjs/operators';
import { Pokemon } from '../../../interfaces/pokemon.interface';
import { PokeapiApiService } from '../../../resources/pokeapi-api.service';
import { PokemonStorageService } from '../../../services/pokemon-storage.service';

@Component({
  selector: 'pkm-pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.scss'],
  animations : [
    trigger('fadeIn', [
      transition(':enter', [style({opacity: 0}), animate('400ms ease-in', style({opacity: 1}))]
    )])
  ]
})
export class PokedexCardComponent implements OnInit, OnChanges {
  solidStar = solidStar;
  hollowStar = hollowStar;

  @Input() pokemonUrl = '';
  @Output() pokemonClick: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  public pokemon: Pokemon | undefined;
  public isPokemonImageLoading = true;
  public isPokemonImageWithError = false;
  public favoritedMap: Map<string, string> = new Map();

  constructor(
    protected $pokeapiService: PokeapiApiService,
    protected $pokemonStorageService: PokemonStorageService
  ) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.pokemonUrl) {
      this.getPokemonInfo(this.pokemonUrl);
    }
  }

  async getPokemonInfo(pokemonUrl: string): Promise<void> {
    this.pokemon = await this.$pokeapiService.getPokemon(pokemonUrl).pipe(first()).toPromise();
    if (this.pokemon) {
      this.pokemon.favorite = this.$pokemonStorageService.isPokemonFavorite(this.pokemon?.id?.toString());
    }
  }

  onImageLoad(): void {
    this.isPokemonImageLoading = false;
  }

  onImageError(): void {
    this.isPokemonImageWithError = true;
  }

  getTitleBackground(colorArray: string[] | undefined): string {
    if (colorArray?.length === 1) {
      return `background-${colorArray[0]}`;
    }
    if (colorArray?.length === 2) {
      return `gradient-${colorArray[0]}-${colorArray[1]}`;
    }
    return '';
  }

  favoritePokemon(pokemon: Pokemon): void {
    pokemon.favorite = !pokemon.favorite;
    this.$pokemonStorageService.savePokemonFavoriteStatus({name: pokemon.id.toString(), url: this.pokemonUrl});
  }
}
