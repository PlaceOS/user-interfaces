import { Pipe, PipeTransform } from '@angular/core';
import { differenceInMinutes, format } from 'date-fns';

@Pipe({
    name: 'dateFrom',
})
export class DateFromPipe implements PipeTransform {
    public transform(date: number): string {
        const now = Date.now();
        let diff = differenceInMinutes(now, date);
        const direction = diff < 0;
        diff = Math.abs(diff);
        if (diff < 1) {
            // Less than a minute
            return direction ? 'Soon' : 'Now';
        } else if (diff === 1) {
            // 1 minute
            return direction ? 'In 1 min' : '1 min';
        } else if (diff < 60) {
            // Minutes
            return direction ? `In ${diff} min` : `${diff} min`;
        } else if (diff < 24 * 60) {
            // Hours
            const hours = Math.floor(diff / 60);
            return direction
                ? `In ${hours} hour${hours === 1 ? '' : 's'}`
                : format(date, 'H:mm');
        } else if (diff < 7 * 24 * 60) {
            // Days
            const days = Math.floor(diff / (24 * 60));
            return direction
                ? format(date, 'dd MMM yyyy')
                : format(date, 'E H:mm');
        } else if (diff < 365 * 24 * 60) {
            // Days
            const days = Math.floor(diff / (24 * 60));
            return direction
                ? format(date, 'dd MMM yyyy')
                : format(date, 'LLL d H:mm');
        }
        return 'Just now';
    }
}
