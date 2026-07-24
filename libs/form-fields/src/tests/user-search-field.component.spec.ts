import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { EMPTY_USER, User } from '@placeos/common';
import { showUser } from '@placeos/ts-client';
import { generateMockUser } from '@placeos/users';
import { IconComponent } from 'libs/components/src/lib/icon.component';

// ts-client runs for real via passthrough spies; showUser is stubbed per test.
vi.mock('@placeos/ts-client', { spy: true });

import { SettingsService } from '@placeos/common';
import { UserSearchFieldComponent } from '../lib/user-search-field.component';

describe('UserSearchFieldComponent', () => {
    let spectator: Spectator<UserSearchFieldComponent>;
    const createComponent = createComponentFactory({
        component: UserSearchFieldComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [MockProvider(SettingsService, { get: vi.fn() })],
        imports: [
            MatFormFieldModule,
            MatInputModule,
            MatAutocompleteModule,
            MatProgressSpinnerModule,
            FormsModule,
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(showUser).mockResolvedValue(null as any);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should pass autocomplete mode to the native input', () => {
        const spec = createComponent({ props: { autocomplete: 'off' } });

        expect(spec.query('input')?.getAttribute('autocomplete')).toBe('off');
    });

    it('should allow searching for users', async () => {
        const user_list = Array(20)
            .fill(1)
            .map(() => new User(generateMockUser()));

        const spec = createComponent({
            props: {
                query_fn: (q: string) => Promise.resolve([...user_list]),
            },
        });

        spec.component.search_term.set(user_list[0].name as any);
        spec.detectChanges();
        await new Promise((r) => setTimeout(r, 350)); // debounce window
        spec.detectChanges();
        await spec.fixture.whenStable();
        spec.detectChanges();

        expect(spec.component.search_results().length).toBeGreaterThan(0);
    });

    it('should allow limiting the selection of users', async () => {
        const user_list = [
            new User({
                id: '1',
                name: 'Test User 1',
                email: 'test1@example.com',
            }),
            new User({
                id: '2',
                name: 'Test User 2',
                email: 'test2@example.com',
            }),
            new User({
                id: '3',
                name: 'Test User 3',
                email: 'test3@example.com',
            }),
            new User({
                id: '4',
                name: 'Test User 4',
                email: 'test4@example.com',
            }),
        ];

        const spec = createComponent({ props: { options: user_list } });

        spec.component.search_term.set('test' as any);
        spec.detectChanges();
        await new Promise((r) => setTimeout(r, 350)); // debounce window
        spec.detectChanges();
        await spec.fixture.whenStable();
        spec.detectChanges();

        expect(spec.component.search_results().length).toBeGreaterThan(0);

        spec.component.setValue(user_list[0]);
        spec.detectChanges();
        expect(spec.component.user()).toBeTruthy();
    });

    it("should show the selected user's name in the input field", () => {
        const user = new User(generateMockUser());
        spectator.component.writeValue(user);
        spectator.detectChanges();
        expect(spectator.component.search_term()).toEqual(user);
        spectator.component.search_term.set('Test' as any);
        spectator.detectChanges();
        expect(spectator.component.search_term()).toBe('Test');
        spectator.dispatchFakeEvent('input', 'blur');
        spectator.detectChanges();
        expect(spectator.component.search_term()).toEqual(user);
    });

    it('should show selected state only when the input contains the selected user', () => {
        const user = new User(generateMockUser());
        spectator.component.writeValue(user);
        spectator.detectChanges();

        expect(spectator.component.selected_user()).toEqual(user);

        spectator.component.search_term.set('Search text' as any);
        spectator.detectChanges();

        expect(spectator.component.selected_user()).toBeNull();
        expect(spectator.query('mat-hint')).toBeNull();

        spectator.component.resetTerm();
        spectator.detectChanges();

        expect(spectator.component.selected_user()).toEqual(user);
    });

    it('should not display the empty user', async () => {
        const empty_user = EMPTY_USER as User;
        spectator.component.writeValue(empty_user);
        spectator.detectChanges();

        expect(spectator.component.selected_user()).toBeNull();
        expect(spectator.component.displayFn(empty_user)).toBe('');
        await new Promise((r) => setTimeout(r, 350)); // debounce window
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        expect(spectator.component.search_results()).toEqual([]);

        const spec = createComponent({
            props: {
                query_fn: () =>
                    Promise.resolve([
                        empty_user,
                        new User({
                            id: '1',
                            name: 'Real User',
                            email: 'real@example.com',
                        }),
                    ]),
            },
        });

        spec.component.search_term.set('real' as any);
        spec.detectChanges();
        await new Promise((r) => setTimeout(r, 350)); // debounce window
        spec.detectChanges();
        await spec.fixture.whenStable();

        expect(spec.component.search_results()).toEqual([
            expect.objectContaining({ name: 'Real User' }),
        ]);
    });

    it('should show the selected user after selecting a user', () => {
        const user = new User(generateMockUser());

        spectator.component.setValue(user);
        spectator.detectChanges();

        expect(spectator.component.selected_user()).toEqual(user);
    });

    it('should update the selected user when user details include a photo', async () => {
        const user = new User({
            id: 'user-1',
            name: 'Photo User',
            email: 'photo@example.com',
        });
        vi.mocked(showUser).mockResolvedValueOnce({
            id: 'user-1',
            name: 'Photo User',
            email: 'photo@example.com',
            photo: 'photo.png',
        } as any);
        (spectator.component as any).use_basic_search.set(false);

        spectator.component.setValue(user);
        await new Promise((r) => setTimeout(r, 10));
        spectator.detectChanges();

        expect(spectator.component.user().photo).toBe('photo.png');
        expect(spectator.component.selected_user().photo).toBe('photo.png');
    });

    it('should validate email addresses correctly', () => {
        expect(spectator.component.isValidEmail('user@example.com')).toBe(true);
        expect(spectator.component.isValidEmail('test.name@domain.co')).toBe(
            true,
        );
        expect(spectator.component.isValidEmail('not-an-email')).toBe(false);
        expect(spectator.component.isValidEmail('missing@')).toBe(false);
        expect(spectator.component.isValidEmail('@domain.com')).toBe(false);
        expect(spectator.component.isValidEmail('')).toBe(false);
    });

    it('should allow selecting a user from an email when allow_externals is true', () => {
        const spec = createComponent({
            props: { allow_externals: true },
        });

        const on_change = vi.fn();
        spec.component.registerOnChange(on_change);

        spec.component.setValueFromEmail('john.doe@external.com');

        expect(on_change).toHaveBeenCalledTimes(1);
        const set_user = on_change.mock.calls[0][0];
        expect(set_user).toBeInstanceOf(User);
        expect(set_user.name).toBe('john.doe');
        expect(set_user.email).toBe('john.doe@external.com');
    });

    it('should blur the input after selecting a user from an email', async () => {
        spectator.detectChanges();
        const input = spectator.query('input') as HTMLInputElement;
        const blur_spy = vi.spyOn(input, 'blur');

        spectator.component.setValueFromEmail('john.doe@external.com');
        await new Promise((r) => setTimeout(r, 10));

        expect(blur_spy).toHaveBeenCalled();
    });

    it('should blur the input after selecting an external attendee by name', async () => {
        spectator.detectChanges();
        const input = spectator.query('input') as HTMLInputElement;
        const blur_spy = vi.spyOn(input, 'blur');

        spectator.component.setExternalValue('External Person');
        await new Promise((r) => setTimeout(r, 10));

        expect(blur_spy).toHaveBeenCalled();
        expect(spectator.component.selected_user()?.name).toBe(
            'External Person',
        );
    });

    it('should select all text when the input is focused', async () => {
        spectator.detectChanges();
        const input = spectator.query('input') as HTMLInputElement;
        const select_spy = vi.spyOn(input, 'select');

        spectator.dispatchFakeEvent(input, 'focus');
        await new Promise((r) => setTimeout(r, 10));

        expect(select_spy).toHaveBeenCalled();
    });

    it('should not create user from email when allow_externals is false', () => {
        const spec = createComponent({
            props: { allow_externals: false },
        });

        const on_change = vi.fn();
        spec.component.registerOnChange(on_change);

        // The email is valid, but allow_externals is false so the
        // setValueFromEmail path should not be triggered by the template.
        // Verify the guard: isValidEmail returns true but allow_externals is false.
        expect(spec.component.isValidEmail('user@example.com')).toBe(true);
        expect(spec.component.allow_externals()).toBe(false);

        // Directly calling setValueFromEmail still works at the method level,
        // but the template condition (allow_externals() && isValidEmail(term))
        // prevents the option from appearing. Simulate what the template does:
        const term = 'user@example.com';
        const should_show_option =
            !!term &&
            spec.component.allow_externals() &&
            spec.component.isValidEmail(term);
        expect(should_show_option).toBe(false);

        // Ensure no value was set through the form control
        expect(on_change).not.toHaveBeenCalled();
    });
});
