import {
    EMPTY_USER,
    GuestUser,
    isEmptyUser,
    setInternalUserDomain,
    StaffUser,
    User,
    USER_DOMAIN,
} from '../lib/types/user.class';

describe('User', () => {
    it('should generate an ID when none is given', () => {
        expect(new User({ email: 'a@dev.place.tech' }).id).toBe(
            'a@dev.place.tech',
        );
        expect(new User().id).toMatch(/^USER::/);
    });

    it('should expose basic details with sensible defaults', () => {
        const user = new User({ name: 'Alex', email: 'alex@dev.place.tech' });
        expect(user.name).toBe('Alex');
        expect(user.first_name).toBe('Alex');
        expect(user.required).toBe(true);
        expect(user.visit_expected).toBe(true);
        expect(user.checked_in).toBe(false);
    });

    it('should resolve photo from upload ID', () => {
        const user = new User({ photo_upload_id: 'upload/1' } as any);
        expect(user.photo).toBe(
            '/api/engine/v2/uploads/upload%2F1/url',
        );
        expect(new User({ photo: 'http://a.jpg' }).photo).toBe('http://a.jpg');
    });

    it('should add admin, support and department groups', () => {
        const user = new User({
            groups: ['staff', 'staff'],
            sys_admin: true,
            support: true,
            department: 'Engineering',
        });
        expect(user.groups).toEqual([
            'staff',
            'placeos_admin',
            'placeos_support',
            'Engineering',
        ]);
    });

    it('should flag users outside the internal domain as external', () => {
        expect(new User({ email: `alex${USER_DOMAIN}` }).is_external).toBe(
            false,
        );
        expect(new User({ email: 'alex@other.com' }).is_external).toBe(true);
        setInternalUserDomain('@other.com');
        expect(new User({ email: 'alex@other.com' }).is_external).toBe(false);
        setInternalUserDomain('@dev.place.tech');
    });

    it('should store unknown fields in extension_data', () => {
        const user = new User({ custom_field: 'value' } as any);
        expect(user.extension_data.custom_field).toBe('value');
    });
});

describe('GuestUser', () => {
    it('should derive status from the associated booking', () => {
        expect(new GuestUser().status).toBe('pending');
        expect(
            new GuestUser({ booking: { approved: true } as any }).status,
        ).toBe('approved');
        expect(
            new GuestUser({ booking: { rejected: true } as any }).status,
        ).toBe('declined');
    });

    it('should read attachments from extension data', () => {
        const attachments = [{ name: 'file.pdf', url: 'http://file.pdf' }];
        expect(
            new GuestUser({ extension_data: { attachments } }).attachments,
        ).toEqual(attachments);
    });
});

describe('StaffUser', () => {
    // Wednesday 10th of January 2024, 10:00
    const wednesday_10am = new Date(2024, 0, 10, 10, 0).valueOf();

    const user = new StaffUser({
        email: 'alex@dev.place.tech',
        work_preferences: [
            {
                day_of_week: 3,
                blocks: [{ start_time: 9, end_time: 17, location: 'wfo' }],
            },
        ],
        work_overrides: {
            '2024-01-17': {
                day_of_week: 3,
                blocks: [{ start_time: 9, end_time: 17, location: 'wfh' }],
            },
        },
    });

    it('should find the work preference block for a datetime', () => {
        expect(user.work_preference(wednesday_10am)?.location).toBe('wfo');
        // Outside of block hours
        expect(
            user.work_preference(new Date(2024, 0, 10, 20, 0).valueOf()),
        ).toBeUndefined();
        // Different day of week
        expect(
            user.work_preference(new Date(2024, 0, 11, 10, 0).valueOf()),
        ).toBeUndefined();
    });

    it('should prefer overrides for specific dates', () => {
        const next_wednesday = new Date(2024, 0, 17, 10, 0).valueOf();
        expect(user.location_time(next_wednesday)).toBe('wfh');
    });

    it('should return out of office when no preference matches', () => {
        expect(
            user.location_time(new Date(2024, 0, 11, 10, 0).valueOf()),
        ).toBe('ooo');
    });

    it('should report whether the user is in work hours', () => {
        expect(user.in_hours_time(wednesday_10am)).toBe(true);
        expect(
            user.in_hours_time(new Date(2024, 0, 11, 10, 0).valueOf()),
        ).toBe(false);
    });

    it('should map locations to icons', () => {
        expect(user.location_icon(wednesday_10am)).toBe('business');
        expect(
            user.location_icon(new Date(2024, 0, 11, 10, 0).valueOf()),
        ).toBe('event_busy');
    });
});

describe('isEmptyUser', () => {
    it('should identify the placeholder user', () => {
        expect(isEmptyUser(EMPTY_USER)).toBe(true);
        expect(isEmptyUser(undefined)).toBe(true);
        expect(isEmptyUser({} as any)).toBe(true);
        expect(
            isEmptyUser(new StaffUser({ email: 'alex@dev.place.tech' })),
        ).toBe(false);
    });
});
