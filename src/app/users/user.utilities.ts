
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HashMap } from '../common/types';
import { unique } from '../common/general';
import { User } from './user.class';

import * as faker from 'faker';

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
        name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    }
    if (external === undefined) {
        external = !((Math.random() * 99999) % 2);
    }
    const organisation = external ? faker.company.companyName() : USER_DOMAIN.split('.')[0];
    let delegates: string[] = [];
    const delegate_count = Math.min(Math.random() * 4 + 1, USER_EMAILS.length);
    for (let i = 0; i < delegate_count; i++) {
        delegates.push(USER_EMAILS[Math.floor(Math.random() * USER_EMAILS.length)]);
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
        phone: faker.phone.phoneNumber(),
        visitor: external,
        organisation: {
            id: organisation.split(' ').join('.').toLowerCase(),
            name: organisation,
        },
        department: faker.commerce.department(),
        staff_code: Math.floor(Math.random() * 99999),
        delegates,
        image: faker.image.avatar(),
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

    // Generate form group for booking item
    const form = new FormGroup(fields);
    return form;
}
