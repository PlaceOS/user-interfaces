import { forwardRef, type Provider, type Type } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Provider that registers a component as its own form control value
 * accessor. Pass the class in an arrow function, as the class is not
 * defined yet when its decorator runs:
 * `providers: [provideValueAccessor(() => MyFieldComponent)]`
 */
export function provideValueAccessor(component: () => Type<unknown>): Provider {
    return {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(component),
        multi: true,
    };
}
