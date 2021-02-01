import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toFixed',
})
export class FixedPipe implements PipeTransform {

    /**
     * Fixed a number to x decimal places
     * @param value number to convert
     * @param places Number of decimal places to convert
     */
    public transform(value: number, places: number = 2): string {
        return value.toFixed(places);
    }
}
