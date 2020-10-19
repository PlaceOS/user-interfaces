
import { BaseDataClass, HashMap } from '@user-interfaces/common';
import { USER_DOMAIN } from './user.utilities';

export type EventResponseStatus = 'needsAction' | 'declined' | 'tentative' | 'accepted' | '';

export type UserGroup =
    | 'tax'
    | 'ladies'
    | 'ifs'
    | 'consulting'
    | 'assurance'
    | 'it'
    | 'deals'
    | 'partner'
    | 'manager'
    | 'director'
    | '';

export class User extends BaseDataClass {
    /** First name of the user */
    public readonly first_name: string;
    /** Last name of the user */
    public readonly last_name: string;
    /** Phone number of the user */
    public readonly phone: string;
    /** Organisation associated with the user */
    public readonly organisation: string;
    /** Details about the user */
    public readonly notes: string;
    /** URL to the user's photo */
    public readonly photo: string;
    /** Whether user is the event organiser */
    public readonly organizer: boolean;
    /** Whether the users is expected for an event */
    public readonly response_status: EventResponseStatus;
    /** Whether the users is expected for an event */
    public visit_expected: boolean;
    /** Whether user has been checked in */
    public readonly checked_in: boolean;
    /** Department that the user belongs to in the organisation */
    public readonly groups: UserGroup[];
    /** Extra metadata associated with the user */
    public readonly extension_data: HashMap;
    /** Whether user is external from the organisation */
    public readonly is_external: boolean;
    /** Whether user needs assistance when attending an event */
    public readonly assistance_required: boolean;

    constructor(data: Partial<User> = {}) {
        super(data);
        this.first_name = data.first_name || data.name || '';
        this.last_name = data.last_name || '';
        this.phone = data.phone || '';
        this.organisation = data.organisation || '';
        this.notes = data.notes || '';
        this.photo = data.photo || '';
        this.organizer = !!data.organizer;
        this.visit_expected = data.visit_expected;
        this.checked_in = data.checked_in;
        this.response_status = data.response_status || '';
        this.groups = (data.groups || []).map((i) => (i || '').toLowerCase()) as any;
        this.extension_data = data.extension_data || {};
        this.extension_data.assistance_required =
            data.assistance_required || this.extension_data.assistance_required;
        this.is_external = !this.email.endsWith(USER_DOMAIN);
        this.assistance_required = !!this.extension_data?.assistance_required;
    }
}

export class GuestUser extends User {
    /** Preferred beverage of the guest */
    public readonly preferred_beverage: string;
    /** Whether guest has accepted the terms and conditions */
    public readonly accepted_terms_conditions: boolean;

    constructor(data: Partial<GuestUser> = {}) {
        super(data);
        this.preferred_beverage = data.preferred_beverage || '';
        this.accepted_terms_conditions = data.accepted_terms_conditions || false;
    }
}

export class StaffUser extends User {
    /** Number associated with the user's access card */
    public readonly card_number: number;
    /** ID of the user */
    public readonly staff_id: string;
    /** Whether user is logged in */
    public readonly is_logged_in: boolean;
    /** Location of the user */
    public readonly location: HashMap;

    constructor(data: Partial<StaffUser> = {}) {
        super(data);
        this.card_number = data.card_number || 0;
        this.staff_id = data.staff_id || '';
        this.location = data.location || {};
        this.is_logged_in = !!data.is_logged_in;
    }
}
