import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pkm-pokedex-badge',
  templateUrl: './pokedex-badge.component.html',
  styleUrls: ['./pokedex-badge.component.scss']
})
export class PokedexBadgeComponent implements OnInit {
  @Input() type: string | undefined;

  constructor() { }

  ngOnInit(): void { }

}
