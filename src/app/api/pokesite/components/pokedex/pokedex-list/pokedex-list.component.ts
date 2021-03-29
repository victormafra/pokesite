import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { first } from 'rxjs/operators';
import { PokemonRef } from '../../../interfaces/pokemon-ref.interface';
import { Pokemon } from '../../../interfaces/pokemon.interface';
import { RequisitionWrapper } from '../../../interfaces/requisition-wrapper.interface';
import { PokemonNamePipe } from '../../../pipes/pokemon-name.pipe';
import { PokeapiApiService } from '../../../resources/pokeapi-api.service';
import { PokedexModalComponent } from '../pokedex-modal/pokedex-modal.component';

@Component({
  selector: 'pkm-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent implements OnInit, AfterViewInit {
  bsModalRef: BsModalRef | undefined;

  public pokemons: RequisitionWrapper<PokemonRef> | undefined;
  public itemsPerPage = 12;
  public totalItems = 0;

  constructor(
    protected $pokeapiService: PokeapiApiService,
    protected $modalService: BsModalService,
    protected $pokemonNamePipe: PokemonNamePipe
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.getPokemons(this.itemsPerPage, 0);
  }

  async getPokemons(limit: number, offset: number): Promise<void> {
    this.pokemons = await this.$pokeapiService.getPokemonList(limit, offset).pipe(first()).toPromise();
    this.totalItems = this.pokemons?.count;
  }

  pageChanged(pageInfo: {itemsPerPage: number, page: number}): void {
    this.getPokemons(pageInfo.itemsPerPage, (pageInfo.page - 1) * pageInfo.itemsPerPage);
  }

  showPokemonModal(pokemon: Pokemon): void {
    const initialState = {
      title: `${this.$pokemonNamePipe.transform(pokemon.name)}`,
      pokemon
    };
    this.bsModalRef = this.$modalService.show(PokedexModalComponent, {initialState});
  }

}
