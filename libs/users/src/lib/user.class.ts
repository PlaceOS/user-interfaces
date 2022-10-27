import { MapLocation } from './location.class';
import { USER_DOMAIN } from './user.utilities';

export interface Attachment {
    id?: string;
    name: string;
    url: string;
    size?: number;
    created_at?: number; 
    progress?: number;
}

export interface UserComplete extends User {
    sys_admin?: boolean;
    support?: boolean;
    department?: string;
}

export type EventResponseStatus =
    | 'needsAction'
    | 'declined'
    | 'tentative'
    | 'accepted'
    | '';

export class User {
    /** ID of the user */
    public readonly id: string;
    /** Display name of the user */
    public readonly name: string;
    /** Email address of the user */
    public readonly email: string;
    /** First name of the user */
    public readonly first_name: string;
    /** Last name of the user */
    public readonly last_name: string;
    /** Username of the user */
    public readonly username: string;
    /** Phone number of the user */
    public readonly phone: string;
    /** Organisation associated with the user */
    public readonly organisation: string;
    /** Details about the user */
    public readonly notes: string;
    /** URL to the user's photo */
    public readonly photo: string;
    /** Whether user attendance is required */
    public readonly required: boolean;
    /** Whether user is the event organiser */
    public readonly organizer: boolean;
    /** Whether the users is expected for an event */
    public readonly response_status: EventResponseStatus;
    /** Whether the users is expected for an event */
    public visit_expected: boolean;
    /** Whether user has been checked in */
    public readonly checked_in: boolean;
    /** Department that the user belongs to in the organisation */
    public readonly groups: string[];
    /** Extra metadata associated with the user */
    public readonly extension_data: Record<string, any>;
    /** Whether user is external from the organisation */
    public readonly is_external: boolean;
    /** Whether user needs assistance when attending an event */
    public readonly assistance_required: boolean;
    /** Whether user is a resource */
    public readonly resource: boolean;

    constructor(data: Partial<UserComplete> = {}) {
        this.id = data.id || '';
        this.name = data.name || '';
        this.email = data.email || '';
        this.first_name = data.first_name || data.name || '';
        this.last_name = data.last_name || '';
        this.phone = data.phone || '';
        this.organisation = data.organisation || '';
        this.notes = data.notes || '';
        this.photo = data.photo || '';
        this.username = data.username || '';
        this.organizer = !!data.organizer;
        this.checked_in = !!data.checked_in;
        this.required = data.required ?? true;
        this.resource = data.resource ?? false;
        this.response_status = data.response_status || '';
        const groups = data.groups || [];
        if (data.sys_admin) groups.push('placeos_admin');
        if (data.support) groups.push('placeos_support');
        if (data.department) groups.push(data.department);
        this.groups = groups;
        this.extension_data = data.extension_data || {};
        this.extension_data.assistance_required =
            data.assistance_required || this.extension_data.assistance_required;
        this.is_external = !this.email?.endsWith(`${USER_DOMAIN}`);
        this.visit_expected = data.visit_expected ?? true;
        this.assistance_required = !!this.extension_data?.assistance_required;
        for (const key in data) {
            if (!(key in this)) this.extension_data[key] = data[key] as any;
        }
    }
}

export class GuestUser extends User {
    /** Preferred beverage of the guest */
    public readonly preferred_beverage: string;
    /** Whether guest has accepted the terms and conditions */
    public readonly accepted_terms_conditions: boolean;
    /** List of links to associated attachments */
    public readonly attachments: Attachment[];
    /** Status of the guest attendance */
    public readonly status: 'pending' | 'approved' | 'declined';

    constructor(data: Partial<GuestUser> = {}) {
        super(data);
        this.preferred_beverage = data.preferred_beverage || '';
        this.accepted_terms_conditions =
            data.accepted_terms_conditions || false;
        this.attachments =
            data.extension_data?.attachments || data.attachments || [];
        this.status = data.extension_data?.status || data.status || 'pending';
    }
}

export class StaffUser extends User {
    /** Number associated with the user's access card */
    public readonly card_number: string;
    /** ID of the user */
    public readonly staff_id: string;
    /** Whether user is logged in */
    public readonly is_logged_in: boolean;
    /** Location of the user */
    public readonly location: Record<string, MapLocation>;

    constructor(data: Partial<StaffUser> = {}) {
        super(data);
        this.card_number = data.card_number || '';
        this.staff_id = data.staff_id || '';
        this.location = data.location || {};
        this.is_logged_in = !!data.is_logged_in;
    }
}
