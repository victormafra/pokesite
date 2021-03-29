import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Pokemon } from '../../../interfaces/pokemon.interface';

@Component({
  selector: 'pkm-pokedex-modal',
  templateUrl: './pokedex-modal.component.html',
  styleUrls: ['./pokedex-modal.component.scss']
})
export class PokedexModalComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() pokemon: Pokemon | undefined;

  public isPokemonGifWithError = false;
  public isPokemonImageWithError = false;
  public isPokemonImageLoading = true;

  constructor(
    public $bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void { }

  getTitleBackground(colorArray: string[] | undefined): string {
    if (colorArray?.length === 1) {
      return `background-${colorArray[0]}`;
    }
    if (colorArray?.length === 2) {
      return `gradient-${colorArray[0]}-${colorArray[1]}`;
    }
    return '';
  }

  onGifError(): void {
    this.isPokemonGifWithError = true;
  }

  onImageError(): void {
    this.isPokemonImageWithError = true;
  }

  onImageLoad(): void {
    this.isPokemonImageLoading = false;
  }
}
