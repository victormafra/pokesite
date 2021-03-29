import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName'
})
export class PokemonNamePipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): string {
    if (value) {
      const newArr = value.split('-').map(x => {
        return x.charAt(0).toUpperCase() + x.substring(1);
      });
      return newArr.join(' ');
    }
    return '';
  }

}
