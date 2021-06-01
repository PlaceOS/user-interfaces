import { FormGroup } from '@angular/forms';
import { GuestUser, User } from '../lib/user.class';
import {
    generateGuestForm,
    generateMockUser,
    generateUserForm,
} from '../lib/user.utilities';

describe('[User Utilities]', () => {
    describe('generateUserForm', () => {
        it('should generate form', () => {
            const user = new User(generateMockUser());
            const form = generateUserForm(user);
            expect(form).toBeInstanceOf(FormGroup);
            for (const key in form.value) {
                expect(form.value[key]).toEqual(user[key]);
            }
        });

        it('should validate emails', () => {
            const user = new User();
            const form = generateUserForm(user);
            expect(form).toBeInstanceOf(FormGroup);
            expect(form.controls.email.invalid).toBeTruthy();
            form.patchValue({ email: 'test@place.tech' });
            expect(form.controls.email.invalid).toBeFalsy();
            form.patchValue({ email: 'jim' });
            expect(form.controls.email.invalid).toBeTruthy();
        });

        it('should validate organisation', () => {
            const user = new User();
            const form = generateUserForm(user);
            expect(form).toBeInstanceOf(FormGroup);
            expect(form.controls.organisation.invalid).toBeTruthy();
            form.patchValue({ organisation: 'PlaceOS' });
            expect(form.controls.organisation.invalid).toBeFalsy();
        });

        it('should error when user not passed', () => {
            expect(() => generateUserForm(null)).toThrowError();
        });
    });

    describe('generateGuestorm', () => {
        it('should generate form', () => {
            const user = new GuestUser(generateMockUser());
            const form = generateGuestForm(user, 'Testing');
            expect(form).toBeInstanceOf(FormGroup);
            for (const key of ['name', 'email', 'organisation', 'phone']) {
                expect(form.value[key]).toEqual(user[key]);
            }
            expect(form.value.host).toBe('Testing');
        });

        it('should validate emails', () => {
            const user = new GuestUser();
            const form = generateGuestForm(user);
            expect(form).toBeInstanceOf(FormGroup);
            expect(form.controls.email.invalid).toBeTruthy();
            form.patchValue({ email: 'test@place.tech' });
            expect(form.controls.email.invalid).toBeFalsy();
            form.patchValue({ email: 'jim' });
            expect(form.controls.email.invalid).toBeTruthy();
        });

        it('should validate organisation', () => {
            const user = new GuestUser();
            const form = generateGuestForm(user);
            expect(form).toBeInstanceOf(FormGroup);
            expect(form.controls.organisation.invalid).toBeTruthy();
            form.patchValue({ organisation: 'PlaceOS' });
            expect(form.controls.organisation.invalid).toBeFalsy();
        });

        it('should validate host', () => {
            const user = new GuestUser();
            const form = generateGuestForm(user);
            expect(form).toBeInstanceOf(FormGroup);
            expect(form.controls.host.invalid).toBeTruthy();
            form.patchValue({ host: 'Will' });
            expect(form.controls.host.invalid).toBeFalsy();
        });
    });
});
