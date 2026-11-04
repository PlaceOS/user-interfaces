import { Pipe } from '@angular/core';
import { formatDuration } from '@placeos/common';

@Pipe({
    name: 'duration',
})
export class DurationPipe {
    /**
     * Format the duration value
     * @param length Duration to format in minutes
     * @param shorten Whether to shorten the period names e.g. `hours` as `h`
     */
    public transform(length: number, shorten = false): string {
        let duration = formatDuration({
            hours: Math.floor(length / 60),
            minutes: length % 60,
        });
        if (shorten) {
            // Only English units are shortened. Translated text stays whole.
            duration = duration
                .replace(/ hours?\b/, 'h')
                .replace(/ minutes?\b/, 'm');
        }
        return duration;
    }
}
