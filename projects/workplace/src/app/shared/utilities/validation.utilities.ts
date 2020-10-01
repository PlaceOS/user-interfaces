import { AbstractControl } from '@angular/forms';

import { User } from 'src/app/users/user.class';

import * as dayjs from 'dayjs';

const HAS_ERROR = true;

/**
 * Check that control value is a date that is the same or after from date
 * @param control Angular form control
 * @param is_from Comparison date(ms from UTC epoch). Defaults to the current time
 */
export function validateDate(control: AbstractControl, is_from: number = dayjs().valueOf()) {
    const from = dayjs(is_from);
    const date = dayjs(control.value || undefined);
    return date.isBefore(from, 'd')
        ? { date: HAS_ERROR, message: 'Booking needs to be made in the future' }
        : null;
}

/**
 * Build start time validation function
 * @param date Date of the time to check
 * @param is_from Comparison date(ms from UTC epoch). Defaults to the current time
 */
export function buildValidateStartTime(date: number, is_from: number = dayjs().valueOf()) {
    return (c) => validateStartTime(c, is_from);
}

/**
 * Check that control value time is after the comparison date time
 * @param control Angular form control
 * @param date Date of the time to check
 * @param is_from Comparison date(ms from UTC epoch). Defaults to the current time
 */
export function validateStartTime(control: AbstractControl, is_from: number = dayjs().valueOf()) {
    const from = dayjs(is_from);
    const date_obj = dayjs(control.value);
    if (control.value !== undefined && date_obj.isBefore(from, 'm')) {
        return { start: HAS_ERROR, message: 'Booking time needs to be made in the future' };
    }
    return null;
}

export function buildValidateDuration(min: number = 30, max: number = 240) {
    return (c) => validateDuration(c, min, max);
}

export function validateDuration(control: AbstractControl, min: number = 30, max: number = 240) {
    if (control.value < (min || 30)) {
        return {
            duration: HAS_ERROR,
            message: `Minimum booking duration is ${min} minute${min === 1 ? 's' : ''}`,
        };
    } else if (control.value > (max || 480)) {
        return {
            length: HAS_ERROR,
            message: `Maximum booking duration is ${max} minute${max === 1 ? 's' : ''}`,
        };
    }
    return null;
}

export function buildValidateAttendees(host: User, min: number = 0) {
    return (c) => validateAttendees(c, host, min);
}

export function validateAttendees(control: AbstractControl, host: User, min: number = 0) {
    if (!control || !(control.value instanceof Array)) {
        return min > 0
            ? {
                  invalid: true,
                  message: `Minimum of ${min} attendee${
                      min === 1 ? ' is' : 's are'
                  } required other than you`,
              }
            : null;
    }
    const list: User[] = control.value;
    if (host) {
        const result = list.find((a) => a.email === host.email);
        if (result) {
            list.splice(list.indexOf(result), 1);
        }
    }
    return list.length >= min
        ? null
        : {
              count: true,
              message: `Minimum of ${min} attendee${
                  min === 1 ? ' is' : 's are'
              } required other than you`,
          };
}
