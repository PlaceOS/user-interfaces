import { Pipe, PipeTransform } from '@angular/core';

export function padLength(value: number | string, length = 2): string {
    let str = `${value}`;
    while (str.length < length) str = `0${str}`;
    return str;
}

@Pipe({
    name: 'duration',
})
export class DurationPipe implements PipeTransform {
    public transform(length: number): string {
        let str = `${padLength(Math.floor(length / 60) % 60)}:${padLength(length % 60)}`;
        const hours = Math.floor(length / 60 / 60);
        if (hours > 0) {
            str = `${padLength(hours)}:${str}`;
        }
        return str;
    }
}
