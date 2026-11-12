import { TestBed } from '@angular/core/testing';
import { User } from '@placeos/common';
import { generateUserForm } from '../lib/user.utilities';

describe('[User Utilities]', () => {
    const makeUserForm = (user: User) =>
        TestBed.runInInjectionContext(() => generateUserForm(user));

    describe('generateUserForm', () => {
        it('should copy the user details into the form', () => {
            const user = new User({
                name: 'Jim',
                email: 'jim@place.tech',
                organisation: 'PlaceOS',
                phone: '0412 345 678',
                assistance_required: true,
            });
            const form = makeUserForm(user);
            expect(form().value()).toEqual({
                name: 'Jim',
                email: 'jim@place.tech',
                organisation: 'PlaceOS',
                phone: '0412 345 678',
                assistance_required: true,
                visit_expected: true,
            });
            expect(form().valid()).toBe(true);
            form.name().value.set('');
            expect(form.name().invalid()).toBe(true);
        });

        it('should validate emails', () => {
            const user = new User();
            const form = makeUserForm(user);
            expect(form.email().invalid()).toBeTruthy();
            form.email().value.set('test@place.tech');
            expect(form.email().invalid()).toBeFalsy();
            form.email().value.set('jim');
            expect(form.email().invalid()).toBeTruthy();
        });

        it('should validate organisation', () => {
            const user = new User();
            const form = makeUserForm(user);
            expect(form.organisation().invalid()).toBeTruthy();
            form.organisation().value.set('PlaceOS');
            expect(form.organisation().invalid()).toBeFalsy();
        });

        it('should expect a visit unless the user says otherwise', () => {
            expect(makeUserForm(new User()).visit_expected().value()).toBe(
                true,
            );
            const user = new User({ visit_expected: false });
            expect(makeUserForm(user).visit_expected().value()).toBe(false);
        });

        it.each([
            ['', true],
            ['0412 345 678', true],
            ['+61 2 4567-8901', true],
            ['(02) 4567 8901', true],
            ['+1 (555) 123-4567', true],
            ['555.123.4567', true],
            ['+44 20 7946 0958 ext. 123', true],
            ['+61 (0) 412 345 678 x12', true],
            ['12345', false],
            ['0412abc678', false],
            ['+1 2345 6789 0123 4567', false],
        ])('should treat phone %j as valid: %s', (phone, valid) => {
            const form = makeUserForm(new User());
            form.phone().value.set(phone);
            expect(form.phone().valid()).toBe(valid);
        });

        it('should error when user not passed', () => {
            expect(() => makeUserForm(null)).toThrow();
        });
    });
});
