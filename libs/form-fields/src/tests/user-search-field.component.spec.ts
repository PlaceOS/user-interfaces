import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { EMPTY_USER, User } from '@placeos/common';
import { showUser } from '@placeos/ts-client';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { generateMockUser } from 'libs/users/src/lib/user.utilities';

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
        vi.mocked(showUser).mockResolvedValue(null);
        spectator = createComponent();
    });

    it('should pass autocomplete mode to the native input', () => {
        const spec = createComponent({ props: { autocomplete: 'off' } });

        expect(spec.query('input')?.getAttribute('autocomplete')).toBe('off');
    });

    /** Search for a term and wait for the debounced search to finish */
    const search = async (
        spec: Spectator<UserSearchFieldComponent>,
        term: string,
    ) => {
        spec.component.search_term.set(term);
        spec.detectChanges();
        await new Promise((r) => setTimeout(r, 350)); // debounce window
        spec.detectChanges();
        await spec.fixture.whenStable();
        return spec.component.search_results();
    };

    it('should query terms over two characters and sort the results by name', async () => {
        const query_fn = vi.fn(() =>
            Promise.resolve([
                new User({ name: 'zed', email: 'zed@example.com' }),
                EMPTY_USER as User,
                new User({ name: 'Amy', email: 'amy@example.com' }),
            ]),
        );
        const spec = createComponent({ props: { query_fn } });

        expect(await search(spec, 'ab')).toEqual([]);
        expect(query_fn).not.toHaveBeenCalled();

        const results = await search(spec, 'ABC');
        expect(query_fn).toHaveBeenCalledWith('abc', expect.anything());
        expect(results.map((_) => _.name)).toEqual(['Amy', 'zed']);
    });

    it('should limit results to the matching options without a query', async () => {
        const query_fn = vi.fn(() => Promise.resolve([]));
        const options = [
            new User({
                id: '1',
                name: 'Test User 1',
                email: 'one@example.com',
            }),
            new User({ id: '2', name: 'Other', email: 'test2@example.com' }),
            new User({ id: '3', name: 'Nobody', email: 'three@example.com' }),
        ];
        const spec = createComponent({ props: { options, query_fn } });

        const results = await search(spec, 'TEST');

        expect(results.map((_) => _.id)).toEqual(['1', '2']);
        expect(query_fn).not.toHaveBeenCalled();
    });

    it("should show the selected user's name in the input field", () => {
        const user = new User(generateMockUser());
        spectator.component.writeValue(user);
        spectator.detectChanges();
        expect(spectator.component.search_term()).toEqual(user);
        spectator.component.search_term.set('Test');
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

        spectator.component.search_term.set('Search text');
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

        spec.component.search_term.set('real');
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

    it('should ignore user details for an older selection', async () => {
        let resolve_first: (_: any) => void;
        vi.mocked(showUser).mockReturnValueOnce(
            new Promise((r) => (resolve_first = r)) as any,
        );
        (spectator.component as any).use_basic_search.set(false);
        const first = new User({ id: 'a', name: 'A', email: 'a@example.com' });
        const second = new User({ id: 'b', name: 'B', email: 'b@example.com' });
        spectator.component.setValue(first);
        spectator.component.setValue(second);
        resolve_first({ id: 'a', name: 'A', email: 'a@example.com' });
        await new Promise((r) => setTimeout(r, 10));
        expect(spectator.component.user().email).toBe('b@example.com');
    });

    it('should set an external user when the typed email option is picked', () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.selectOption('jane@external.com');
        expect(on_change).toHaveBeenCalledTimes(1);
        const user = on_change.mock.calls[0][0];
        expect(user).toBeInstanceOf(User);
        expect(user).toMatchObject({
            name: 'jane',
            email: 'jane@external.com',
        });
        // A typed email is not a directory user, so no details are loaded
        expect(showUser).not.toHaveBeenCalled();
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

    it('should blur the input after selecting a user from an email', async () => {
        spectator.detectChanges();
        const input = spectator.query('input') as HTMLInputElement;
        const blur_spy = vi.spyOn(input, 'blur');

        spectator.component.setValueFromEmail('john.doe@external.com');
        await new Promise((r) => setTimeout(r, 10));

        expect(blur_spy).toHaveBeenCalled();
    });

    it('should select all text when the input is focused', async () => {
        spectator.detectChanges();
        const input = spectator.query('input') as HTMLInputElement;
        const select_spy = vi.spyOn(input, 'select');

        spectator.dispatchFakeEvent(input, 'focus');
        await new Promise((r) => setTimeout(r, 10));

        expect(select_spy).toHaveBeenCalled();
    });
});
