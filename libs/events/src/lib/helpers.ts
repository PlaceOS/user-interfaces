import { HashMap } from '@user-interfaces/common';
import { format } from 'date-fns';

export function eventStatus(details: HashMap): 'confirmed' | 'tentative' | 'cancelled' {
    if (details.resources?.length) {
        if (details.resources.every((i) => i.response_status === 'accepted')) {
            return 'confirmed';
        } else if (
            details.resources.some(
                (i) => i.response_status === 'tentative' || i.response_status === 'needsAction'
            )
        ) {
            return 'tentative';
        }
        return 'cancelled';
    }
    return 'confirmed';
}

export function formatRecurrence(recurrence) {
    let details = '';
    if (recurrence) {
        const { interval, pattern, start, end } = recurrence;
        if (interval && interval > 1) {
            details = details.concat(`Every ${interval}`);
        }
        switch (pattern) {
            case 'daily':
                if (interval && interval > 1) {
                    details = details.concat(' days');
                } else {
                    details = details.concat('Daily');
                }
                break;
            case 'weekly':
                if (interval && interval > 1) {
                    details = details.concat(' weeks');
                } else {
                    details = details.concat('Weekly');
                }
                break;
            case 'monthly':
                if (interval && interval > 1) {
                    details = details.concat(' months');
                } else {
                    details = details.concat('Monthly');
                }
                break;
        }
        details = details.concat(`, until ${format(end, 'MMM do, yyyy')}`);
    }
    return '';
}

