import { Pipe } from '@angular/core';
import { padLength } from '@placeos/common';

/**
 * Format a media length in seconds as `mm:ss`, or `hh:mm:ss` from one hour.
 * Use `show_ms` to add the milliseconds, such as `01:05.250`.
 */
@Pipe({
    name: 'mediaDuration',
})
export class MediaDurationPipe {
    public transform(period_length: number, show_ms = false): string {
        // Whole milliseconds, so values such as 1.001 do not lose 1ms to float error
        const total_ms = Math.round(period_length * 1000);
        const hours = Math.floor(total_ms / 3_600_000);
        const minutes = Math.floor(total_ms / 60_000) % 60;
        const seconds = Math.floor(total_ms / 1000) % 60;
        const milliseconds = total_ms % 1000;
        let str = `${padLength(minutes)}:${padLength(seconds)}`;
        if (show_ms) {
            str += `.${padLength(milliseconds, 3)}`;
        }
        if (hours > 0) str = `${padLength(hours)}:${str}`;
        return str;
    }
}
