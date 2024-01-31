import { MapLocation } from '../lib/location.class';
import { User, StaffUser, GuestUser } from '../lib/user.class';

describe('[User]', () => {
    let user: User;

    beforeEach(() => (user = new User()));

    it('should expose properties', () => {
        expect(user.first_name).toBe('');
        expect(user.last_name).toBe('');
        expect(user.phone).toBe('');
        expect(user.organisation).toBe('');
        expect(user.notes).toBe('');
        expect(user.photo).toBe('');
        expect(user.organizer).toBe(false);
        expect(user.visit_expected).toBe(true);
        expect(user.checked_in).toBe(false);
        expect(user.groups).toEqual([]);
        expect(user.extension_data).toEqual({});
        expect(user.is_external).toBe(true);
        expect(user.assistance_required).toBe(false);
        user = new User({
            first_name: 'Jim',
            last_name: 'Smith',
            phone: '0412345678',
            organisation: 'PlaceOS',
            notes: 'Valuable',
            photo: 'assets/jim.png',
            organizer: true,
            visit_expected: true,
            checked_in: true,
            response_status: 'accepted',
            groups: [],
            sys_admin: true,
            support: true,
            extension_data: { assistance_required: true },
        });
        expect(user.first_name).toBe('Jim');
        expect(user.last_name).toBe('Smith');
        expect(user.phone).toBe('0412345678');
        expect(user.organisation).toBe('PlaceOS');
        expect(user.notes).toBe('Valuable');
        expect(user.photo).toBe('assets/jim.png');
        expect(user.organizer).toBe(true);
        expect(user.visit_expected).toBe(true);
        expect(user.checked_in).toBe(true);
        expect(user.groups).toEqual(['placeos_admin', 'placeos_support']);
        expect(user.extension_data?.assistance_required).toBe(true);
        expect(user.is_external).toBe(true);
        expect(user.assistance_required).toBe(true);
    });

    describe('StaffUser', () => {
        beforeEach(() => (user = new StaffUser()));

        it('should expose properties', () => {
            expect((user as StaffUser).card_number).toBe('');
            expect((user as StaffUser).staff_id).toBe('');
            expect((user as StaffUser).is_logged_in).toBe(false);
            user = new StaffUser({
                card_number: '1234',
                staff_id: 'U4321',
                is_logged_in: true,
            });
            expect((user as StaffUser).card_number).toBe('1234');
            expect((user as StaffUser).staff_id).toBe('U4321');
            expect((user as StaffUser).is_logged_in).toBe(true);
        });
    });

    describe('GuestUser', () => {
        beforeEach(() => (user = new GuestUser()));

        it('should expose properties', () => {
            expect((user as GuestUser).preferred_beverage).toBe('');
            expect((user as GuestUser).accepted_terms_conditions).toBe(false);
            user = new GuestUser({
                preferred_beverage: 'Gin',
                accepted_terms_conditions: true,
            });
            expect((user as GuestUser).preferred_beverage).toBe('Gin');
            expect((user as GuestUser).accepted_terms_conditions).toBe(true);
        });
    });
});
