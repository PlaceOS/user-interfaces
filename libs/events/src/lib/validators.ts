import { AbstractControl } from '@angular/forms';
import { addMinutes, isAfter, isBefore } from 'date-fns';

export const endInFuture = (control: AbstractControl) => {
    const date = control.parent?.get('date');
    if (date && isAfter(Date.now(), addMinutes(date.value, control.value))) {
        return { duration: true };
    }
    return null;
};

/** Check that date in unix ms is in the future */
export function isFuture(
    control: AbstractControl
): { [key: string]: boolean } | null {
    return control.value && isBefore(control.value, new Date())
        ? { is_future: true }
        : null;
}
