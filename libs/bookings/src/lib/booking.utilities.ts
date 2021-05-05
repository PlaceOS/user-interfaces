import { FormGroup } from '@angular/forms';

import { CateringItem } from '../../../catering/src/lib/catering-item.class';
import { HashMap, predictableRandomInt } from '@placeos/common';
import { generateMockUser } from '../../../users/src/lib/user.utilities';

import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

let BOOKING_COUNT = 0;
let BOOKING_DATE = dayjs().hour(6).minute(0).subtract(1, 'd').startOf('m');

/**
 * Set the initial time used for generating mock bookings
 * @param time New initial time as ms from UTC epoch
 */
export function setMockBookingStartDatetime(time: number) {
    BOOKING_DATE = dayjs(time).startOf('m');
}

const randomQuarterHours = () => predictableRandomInt(5, 2) * 15;

/**
 * Create mock raw API data for a booking
 * @param override Overrides the properties of the generated booking with it's own
 */
export function generateMockBooking(override: HashMap = {}, resetDate = false) {
    const id = `booking-${BOOKING_COUNT++}`;
    if (resetDate) {
        BOOKING_DATE = dayjs().hour(6).minute(0).startOf('m');
    }
    BOOKING_DATE = BOOKING_DATE.add(randomQuarterHours(), 'm');
    const start = BOOKING_DATE.valueOf();
    const duration = randomQuarterHours();
    const cateringItem = new CateringItem({
        id: 'Cappucino',
        quantity: 5,
    });
    return {
        id,
        icaluid: predictableRandomInt(99_999_999),
        title: `A Meeting ${predictableRandomInt(99)}`,
        attendees: Array(predictableRandomInt(5) + 2)
            .fill(0)
            .map((i) => generateMockUser()),
        organiser: generateMockUser(),
        start_epoch: dayjs(start).unix(),
        end_epoch: dayjs(start).add(duration, 'm').unix(),
        date: start,
        duration,
        description: `A Description`,
        notes: [{ type: 'other', message: `Some notes` }],
        location: `Your City`,
        catering: predictableRandomInt(34567) % 3 === 0,
        extension_data: {
            catering_order: [cateringItem],
            catering_notes:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci. Metus dictum at tempor commodo ullamcorper a lacus.',
        },
        link:
            predictableRandomInt(10) > 5
                ? 'https://browser.zoom.fake/j/12'
                : '',
        room_ids: [],
        ...override,
    };
}

const STORED_BOOKING_KEY = 'STAFF.booking_form';
export function storeBookingFormData(form: FormGroup) {
    if (localStorage) {
        const data = form ? form.value : {};
        if (form && form.controls && form.controls.extension_data) {
            data.extension_data = form.controls.extension_data.value;
        }
        localStorage.setItem(STORED_BOOKING_KEY, JSON.stringify(data));
    }
}

export function retrieveBookingFormData(): any {
    let formData = {};
    if (localStorage) {
        const form_string = localStorage.getItem(STORED_BOOKING_KEY);
        if (form_string) {
            try {
                formData = JSON.parse(form_string);
            } catch (e) {}
        }
    }
    return formData;
}

export function clearBookingFormData() {
    if (localStorage && !!retrieveBookingFormData()) {
        localStorage.removeItem(STORED_BOOKING_KEY);
    }
}

const STORED_DESK_BOOKING_KEY = 'STAFF.desk_form';
export function storeDeskBookingFormData(form: FormGroup) {
    if (localStorage) {
        const data = form ? form.value : {};
        if (form && form.controls && form.controls.extension_data) {
            data.extension_data = form.controls.extension_data.value;
        }
        localStorage.setItem(STORED_DESK_BOOKING_KEY, JSON.stringify(data));
    }
}

export function retrieveDeskBookingFormData(): any {
    let formData = {};
    if (localStorage) {
        const form_string = localStorage.getItem(STORED_DESK_BOOKING_KEY);
        if (form_string) {
            try {
                formData = JSON.parse(form_string);
            } catch (e) {}
        }
    }
    return formData;
}

export function clearDeskBookingFormData() {
    if (localStorage && !!retrieveDeskBookingFormData()) {
        localStorage.removeItem(STORED_DESK_BOOKING_KEY);
    }
}
