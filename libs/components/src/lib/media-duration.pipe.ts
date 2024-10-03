import { Pipe } from '@angular/core';
import { padLength } from '@placeos/common';

@Pipe({
    name: 'mediaDuration',
})
export class MediaDurationPipe {
    public transform(period_length: number, show_ms: boolean = false): string {
        const hours = Math.floor(period_length / 60 / 60);
        const minutes = Math.floor((period_length / 60) % 60);
        const seconds = Math.floor(period_length % 60);
        const milliseconds = Math.floor((period_length * 1000) % 1000);
        let str = `${padLength(minutes)}:${padLength(seconds)}`;
        if (show_ms) {
            str += `.${padLength(milliseconds, 3)}`;
        }
        if (hours > 0) str = `${padLength(hours)}:${str}`;
        return str;
    }
}
