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
            expect(form).toBeTruthy();
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

        it('should error when user not passed', () => {
            expect(() => makeUserForm(null)).toThrow();
        });
    });
});
