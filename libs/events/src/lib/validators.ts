import { AbstractControl, FormGroup } from '@angular/forms';

import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';

export const endInFuture = (form: FormGroup) => (control: AbstractControl) => {
    if (
        form.controls.date &&
        isAfter(
            new Date(),
            form.controls.date.value + control.value * 60 * 1000
        )
    ) {
        return { duration: true };
    }
    return null;
};

/** Check that date in unix ms is in the future */
export function isFuture(
    control: AbstractControl
): { [key: string]: boolean } | null {
    return control.value && isBefore(control.value, new Date())
        ? { isFuture: true }
        : null;
}
