
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HashMap, predictableRandomInt, unique } from '@user-interfaces/common';

import { GuestUser, User } from './user.class';

let USER_COUNT = 0;

export let USER_DOMAIN = 'acaprojects.com';

const USER_EMAILS: string[] = [];

/**
 * Generate raw mock data for a user
 * @param id Forced ID for the mock
 * @param name Forced name for the user
 * @param external Whether user is external of the organisation
 */
export function generateMockUser(id?: string, name?: string, external?: boolean): HashMap {
    if (!id) {
        id = `user-${USER_COUNT++}`;
    }
    if (!name) {
        name = `User ${USER_COUNT}`;
    }
    if (external === undefined) {
        external = !(predictableRandomInt(99999) % 2);
    }
    const organisation = external ? `Fake Co.` : USER_DOMAIN.split('.')[0];
    let delegates: string[] = [];
    const delegate_count = Math.min(predictableRandomInt(4) + 1, USER_EMAILS.length);
    for (let i = 0; i < delegate_count; i++) {
        delegates.push(USER_EMAILS[predictableRandomInt(USER_EMAILS.length)]);
    }
    delegates = unique(delegates);
    const email = `${name.split(' ').join('.').toLowerCase()}@${
        external ? 'not-' : ''
    }${USER_DOMAIN}`;
    USER_EMAILS.push(email);
    return {
        id,
        name,
        first_name: name.split(' ')[0],
        last_name: name.split(' ')[1],
        email,
        phone: `(02) 4567 8901`,
        visitor: external,
        organisation: {
            id: organisation.split(' ').join('.').toLowerCase(),
            name: organisation,
        },
        department: `Department ${predictableRandomInt(10)}`,
        staff_code: predictableRandomInt(999_999),
        delegates,
        image: `${id}.png`,
    };
}

/**
 * Generate form fields for the given user
 * @param user User to generate form for
 */
export function generateUserForm(user: User): FormGroup {
    if (!user) {
        throw Error('No user passed');
    }

    const fields: HashMap<FormControl> = {
        name: new FormControl(user.name || ''),
        email: new FormControl(user.email || '', [Validators.email, Validators.required]),
        organisation: new FormControl(user.organisation || '', Validators.required),
        phone: new FormControl(user.phone || ''),
        assistance_required: new FormControl(user.assistance_required || false),
    };

    // Generate form group for the user
    const form = new FormGroup(fields);
    return form;
}

export function generateGuestForm(user: GuestUser, host: string = ''): FormGroup {
    const fields: HashMap<FormControl> = {
        name: new FormControl(user.name || ''),
        email: new FormControl(user.email || '', [Validators.email, Validators.required]),
        organisation: new FormControl(user.organisation || '', Validators.required),
        phone: new FormControl(user.phone || ''),
        host: new FormControl(host || '', [Validators.required]),
    };
    // Generate form group for the guest
    const form = new FormGroup(fields);
    return form;
}
