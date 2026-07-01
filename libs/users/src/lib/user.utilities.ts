import { Injector, signal } from '@angular/core';
import { email, form, required, validate } from '@angular/forms/signals';

import { GuestUser, predictableRandomInt, unique, User } from '@placeos/common';

const PHONE_PATTERN = /^\+?(\d[\d\s\-\(\)]{5,13}\d)$/;

let USER_COUNT = 0;

type HashMap<T = any> = Record<string, T>;

export let USER_DOMAIN = '@place.tech';

export function setInternalUserDomain(domain: string) {
    USER_DOMAIN = domain;
}

const USER_EMAILS: string[] = [];
/* istanbul ignore next */
/**
 * Generate raw mock data for a user
 * @param id Forced ID for the mock
 * @param name Forced name for the user
 * @param external Whether user is external of the organisation
 */
export function generateMockUser(
    id?: string,
    name?: string,
    external?: boolean,
): HashMap {
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
    const delegate_count = Math.min(
        predictableRandomInt(4) + 1,
        USER_EMAILS.length,
    );
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

export interface UserFormValue {
    name: string;
    email: string;
    organisation: string;
    phone: string;
    assistance_required: boolean;
    visit_expected: boolean;
}

/** Signal-forms field tree for a user form */
export type UserForm = ReturnType<typeof generateUserForm>;

/**
 * Generate signal form fields for the given user
 * @param user User to generate form for
 * @param injector Optional injector for use outside of an injection context
 */
export function generateUserForm(user?: User, injector?: Injector) {
    if (!user) {
        throw Error('No user passed');
    }

    const model = signal<UserFormValue>({
        name: user.name || '',
        email: user.email || '',
        organisation: user.organisation || '',
        phone: user.phone || '',
        assistance_required: user.assistance_required || false,
        visit_expected: user.visit_expected ?? true,
    });

    return form(
        model,
        (p) => {
            required(p.name);
            required(p.email);
            email(p.email);
            required(p.organisation);
            validate(p.phone, ({ value }) =>
                value() && !PHONE_PATTERN.test(value())
                    ? { kind: 'pattern' }
                    : undefined,
            );
        },
        injector ? { injector } : undefined,
    );
}

export interface GuestFormValue {
    name: string;
    email: string;
    organisation: string;
    phone: string;
    pass_number: string;
    host: string;
}

/** Signal-forms field tree for a guest form */
export type GuestForm = ReturnType<typeof generateGuestForm>;

export function generateGuestForm(
    user: GuestUser = new GuestUser(),
    host: string = '',
    injector?: Injector,
) {
    const model = signal<GuestFormValue>({
        name: user.name || '',
        email: user.email || '',
        organisation: user.organisation || '',
        phone: user.phone || '',
        pass_number: user.extension_data.pass_number || '',
        host: host || '',
    });

    return form(
        model,
        (p) => {
            required(p.email);
            email(p.email);
            required(p.organisation);
            required(p.host);
        },
        injector ? { injector } : undefined,
    );
}
