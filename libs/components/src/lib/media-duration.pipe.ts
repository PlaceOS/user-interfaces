import { Pipe } from '@angular/core';

export function padLength(value: number | string, length: number = 2): string {
    let str = `${value}`;
    while (str.length < length) str = `0${str}`;
    return str;
}

@Pipe({
    name: 'mediaDuration',
})
export class MediaDurationPipe {
    public transform(length: number): string {
        let str = `${padLength(Math.floor(length / 60) % 60)}:${padLength(
            length % 60
        )}`;
        const hours = Math.floor(length / 60 / 60);
        if (hours > 0) {
            str = `${padLength(hours)}:${str}`;
        }
        return str;
    }
}
