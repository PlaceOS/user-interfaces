import { TestBed } from '@angular/core/testing';
import { User } from '@placeos/common';
import { generateMockUser, generateUserForm } from '../lib/user.utilities';

describe('[User Utilities]', () => {
    const makeUserForm = (user: User) =>
        TestBed.runInInjectionContext(() => generateUserForm(user));

    describe('generateUserForm', () => {
        it('should generate form', () => {
            const user = new User(generateMockUser());
            const form = makeUserForm(user);
            const value = form().value();
            for (const key in value) {
                expect(value[key]).toEqual(user[key]);
            }
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
            ['12345', false],
            ['0412abc678', false],
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
