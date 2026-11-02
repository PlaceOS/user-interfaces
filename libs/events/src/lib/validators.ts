import { AbstractControl } from '@angular/forms';
import { addMinutes, isAfter } from 'date-fns';

export const endInFuture = (control: AbstractControl) => {
    const date = control.parent?.get('date');
    if (date && isAfter(Date.now(), addMinutes(date.value, control.value))) {
        return { duration: true };
    }
    return null;
};
