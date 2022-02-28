import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumerate'
})
export class PipeArrayPipe implements PipeTransform {
  transform(n: number): number[] {
    return [...Array(n)].map((_,i) => i);
  }
}


