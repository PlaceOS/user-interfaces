import { Pipe, PipeTransform } from '@angular/core';
import { formatDuration } from '@placeos/common';

@Pipe({
    name: 'duration',
    standalone: false,
})
export class DurationFormatPipe implements PipeTransform {
    public transform(value: number, short = true): string {
        const duration = formatDuration({
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
