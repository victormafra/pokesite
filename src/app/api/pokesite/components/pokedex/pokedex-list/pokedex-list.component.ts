import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PaginationComponent } from 'ngx-bootstrap/pagination';
import { first } from 'rxjs/operators';
import { PokemonBase } from '../../../interfaces/pokemon-base.interface';
import { RequisitionWrapper } from '../../../interfaces/requisition-wrapper.interface';
import { PokeapiApiService } from '../../../resources/pokeapi-api.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent implements OnInit, AfterViewInit {
  @ViewChild(PaginationComponent)
  protected pagination: PaginationComponent | undefined;
  public pokemons: RequisitionWrapper<PokemonBase> | undefined;
  public itemsPerPage = 12;
  public totalItems = 0;

  constructor(
    protected $pokeapiService: PokeapiApiService
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

}
