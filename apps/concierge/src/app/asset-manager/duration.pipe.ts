import { Pipe } from '@angular/core';
import { formatDuration } from 'date-fns';

@Pipe({
    name: 'duration',
})
export class DurationFormatPipe {
    public transform(value: number, short = true): string {
        let duration = formatDuration({
            days: Math.floor(value / (24 * 60)),
            hours: Math.floor((value / 60) % 24),
            minutes: Math.floor(value % 60),
        });
        if (!short) return duration;
        return duration
            .replace(' day', 'd')
            .replace(' hour', 'hr')
            .replace(' minute', 'min');
    }
}
