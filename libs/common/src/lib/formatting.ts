
import { format } from 'date-fns';

import { RecurrenceDetails } from '@placeos/events';

export function formatRecurrence(details: RecurrenceDetails): string {
    let pattern: string = details.pattern || '';
    pattern = pattern.charAt(0).toUpperCase() + pattern.slice(1);
    return pattern ? `${pattern} until ${format(new Date(details.end), 'do MMM yyyy')}` : '<No Recurrence>';
}
