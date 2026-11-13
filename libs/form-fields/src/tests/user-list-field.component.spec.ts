import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService, User } from '@placeos/common';
import { generateMockUser } from 'libs/users/src/lib/user.utilities';
import { MockComponent, MockProvider } from 'ng-mocks';
import { NEVER, Observable, of } from 'rxjs';

import {
    MatAutocompleteModule,
    MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import {
    defaultInternalDomains,
    isInternalEmail,
    UserListFieldComponent,
} from '../lib/user-list-field.component';
import { UserSearchFieldComponent } from '../lib/user-search-field.component';

// The staff and guest searches run for real; only the ts-client `get` that
// they call is stubbed.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('internal email domains', () => {
    it('should default to the user domain and its root domain', () => {
        expect(defaultInternalDomains('jo@staff.place.tech')).toEqual([
            'staff.place.tech',
            'place.tech',
        ]);
        expect(defaultInternalDomains('jo@place.tech')).toEqual(['place.tech']);
        expect(defaultInternalDomains('jo@staff.acme.com.au')).toEqual([
            'staff.acme.com.au',
            'acme.com.au',
        ]);
        expect(defaultInternalDomains('')).toEqual([]);
    });

    it('should match the domain and subdomains only', () => {
        const domains = ['@place.tech'];
        expect(isInternalEmail('a@place.tech', domains)).toBe(true);
        expect(isInternalEmail('a@staff.place.tech', domains)).toBe(true);
        expect(isInternalEmail('a@evilplace.tech', domains)).toBe(false);
    });
});

describe('UserListFieldComponent', () => {
    let spectator: Spectator<UserListFieldComponent>;
    /** Values returned by the mocked settings signal method, by key */
    const settings_map: Record<string, unknown> = {};
    const createComponent = createComponentFactory({
        component: UserListFieldComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(UserSearchFieldComponent),
            MockComponent(UserAvatarComponent),
        ],
        providers: [
            MockProvider(MatDialog, { open: vi.fn(() => ({})) } as any),
            MockProvider(SettingsService, {
                get: vi.fn(),
                signal: vi.fn((name: string, default_value?: unknown) =>
                    signal(
                        name in settings_map
                            ? settings_map[name]
                            : default_value,
                    ),
                ),
            } as any),
        ],
        imports: [
            MatChipsModule,
            FormsModule,
            MatTooltipModule,
            MatAutocompleteModule,
        ],
    });

    // The search input is a chip input (no `matInput`), so MatAutocompleteTrigger
    // is its sole value accessor. On teardown its `writeValue` schedules a
    // microtask that runs `_updateNativeInputValue` against the already-destroyed
    // view, producing a benign "Cannot set properties of undefined (setting
    // 'value')" rejection. Null-guard the write so it no-ops once the host input
    // is gone.
    const trigger_proto = MatAutocompleteTrigger.prototype;
    const original_write = trigger_proto.writeValue;
    beforeAll(() => {
        trigger_proto.writeValue = function (value: unknown) {
            Promise.resolve(null).then(() => {
                try {
                    this._assignOptionValue(value);
                } catch {
                    /* view already destroyed */
                }
            });
        };
    });
    afterAll(() => {
        trigger_proto.writeValue = original_write;
    });

    beforeEach(() => {
        for (const key of Object.keys(settings_map)) delete settings_map[key];
        spectator = createComponent();
    });

    it('should be able to be disabled', async () => {
        expect('[form-field]').not.toHaveAttribute('disabled');
        spectator.component.setDisabledState(true);
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        expect('[form-field]').toHaveAttribute('disabled');
        expect('input[name="user_email"]').toBeDisabled();
        expect('[name="upload-csv"]').toBeDisabled();
    });

    it('should show selected users', () => {
        const user_list = Array(20)
            .fill(1)
            .map(() => new User(generateMockUser()));

        spectator.component.writeValue(user_list);
        spectator.detectChanges();
        expect('[user]').toHaveLength(user_list.length);
    });

    it('should allow user to indicate that they want to add a new contact', async () => {
        expect('[name="new-contact"]').toExist();
        spectator.click('[name="new-contact"]');
        expect(spectator.inject(MatDialog).open).toHaveBeenCalled();
    });

    it('should preserve the file picker default action when the input is clicked', () => {
        const input = spectator.query<HTMLInputElement>('input[type="file"]');
        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        });

        input.dispatchEvent(event);

        expect(event.defaultPrevented).toBe(false);
    });

    it('should open the file input from the button without cancelling its click', () => {
        const input = spectator.query<HTMLInputElement>('input[type="file"]');
        const click = vi.spyOn(input, 'click');
        let input_event: MouseEvent;
        input.addEventListener('click', (event) => (input_event = event));

        spectator.query<HTMLButtonElement>('[name="upload-csv"]').click();

        expect(click).toHaveBeenCalledTimes(1);
        expect(input_event).toBeDefined();
        expect(input_event.defaultPrevented).toBe(false);
    });

    /** Send CSV text through the file input, with a mocked FileReader */
    const importCsv = async (text: string, type = 'text/csv') => {
        vi.spyOn(window, 'FileReader').mockImplementation(function () {
            return {
                readAsText: () => null,
                addEventListener: (event_type, callback) =>
                    event_type === 'load'
                        ? callback({ srcElement: { result: text } })
                        : undefined,
            };
        });
        spectator.component.addUsersFromFile({
            target: { files: [{ type, size: 1, name: 'File.csv' }] },
        });
        await new Promise((resolve) => setTimeout(resolve));
    };
    const csv_rows = (count: number) =>
        [
            'Organisation Name,First Name,Last Name,Email,Phone',
            ...Array.from(
                { length: count },
                (_, i) =>
                    `Fake Org,John,Smith${i},john${i}@example.com,0123456789${i}`,
            ),
        ].join('\n');

    it('should allow adding users from a CSV file', async () => {
        vi.spyOn(spectator.component, 'addUsers');
        vi.spyOn(spectator.component, 'confirmCsvImport').mockResolvedValue(
            true,
        );
        // Windows with Excel installed reports CSV files with this type
        await importCsv(csv_rows(2), 'application/vnd.ms-excel');
        expect(spectator.component.addUsers).toHaveBeenCalledTimes(1);
        expect(spectator.component.active_list()).toHaveLength(2);
        expect(spectator.component.active_list()[0].phone).toBe('01234567890');
    });

    it('should keep the visit expected value set by the CSV import', async () => {
        vi.mocked(spectator.inject(SettingsService).get).mockImplementation(
            (key: string) =>
                key === 'app.bookings.internal_emails'
                    ? ['place.tech']
                    : undefined,
        );
        vi.spyOn(spectator.component, 'confirmCsvImport').mockResolvedValue(
            true,
        );
        await importCsv(
            'Name,Email\nInternal,jo@place.tech\nExternal,jo@example.com',
        );
        const list = spectator.component.active_list();
        expect(list.map((_) => _.visit_expected)).toEqual([false, true]);
    });

    it('should not add CSV users when the preview is cancelled', async () => {
        vi.spyOn(spectator.component, 'confirmCsvImport').mockResolvedValue(
            false,
        );
        await importCsv(csv_rows(2));
        expect(spectator.component.active_list()).toHaveLength(0);
    });

    it('should skip blank CSV rows and report an empty file', async () => {
        const confirm = vi
            .spyOn(spectator.component, 'confirmCsvImport')
            .mockResolvedValue(false);
        await importCsv(`${csv_rows(2)}\n`);
        expect(confirm.mock.calls[0][0]).toHaveLength(2);
        confirm.mockClear();
        await importCsv('');
        await importCsv('Organisation Name,First Name,Email\n');
        expect(confirm).not.toHaveBeenCalled();
    });

    it('should only read the first 500 CSV rows', async () => {
        const confirm = vi
            .spyOn(spectator.component, 'confirmCsvImport')
            .mockResolvedValue(false);
        await importCsv(csv_rows(510));
        expect(confirm.mock.calls[0][0]).toHaveLength(500);
        expect(confirm.mock.calls[0][2]).toBe(true);
    });

    it('should add the typed email when its option is picked', () => {
        spectator.component.updateSearch('new@b.com');
        spectator.component.onOptionSelected('new@b.com');
        spectator.component.updateSearch(undefined);
        expect(spectator.component.active_list()[0].email).toBe('new@b.com');
    });

    it('should only replace the saved visitor with the same email', () => {
        const settings = spectator.inject(SettingsService);
        vi.mocked(settings.get).mockReturnValue([
            'aa@b.com|aa|Org|0',
            'a@b.com|old|Org|0',
        ]);
        const save = vi.fn();
        (settings as any).saveUserSetting = save;
        spectator.component.addUserFromEmail('a@b.com');
        const saved: string[] = save.mock.calls[0][1];
        expect(saved).toHaveLength(2);
        expect(saved[0]).toBe('aa@b.com|aa|Org|0');
        expect(saved[1].startsWith('a@b.com|a|')).toBe(true);
    });

    it('should replace a user already in the list and emit once', () => {
        const on_change = vi.fn();
        spectator.component.writeValue([
            new User({ id: 'a', email: 'a@place.tech', name: 'Old' }),
        ]);
        spectator.component.registerOnChange(on_change);

        spectator.component.addUsers([
            new User({ id: 'a', email: 'a@place.tech', name: 'New' }),
            { name: 'Guest', email: 'guest@example.com' } as User,
        ]);

        expect(on_change).toHaveBeenCalledTimes(1);
        expect(
            spectator.component.active_list().map((_) => [_.id, _.name]),
        ).toEqual([
            ['a', 'New'],
            ['guest@example.com', 'Guest'],
        ]);
    });

    it('should only remove one entry when list entries share an identity', () => {
        // Visitor lists built from booking data can carry blank or repeated
        // ids/emails; removal must stay positional. (PPT-2634)
        const users = [
            { name: 'Visitor One', email: '' },
            { name: 'Visitor Two', email: '' },
            { name: 'Visitor Three', email: '' },
        ] as User[];
        spectator.component.writeValue(users);
        spectator.detectChanges();
        expect('[user]').toHaveLength(3);

        spectator.click('[user] [remove]');

        expect(spectator.component.active_list()).toEqual([users[1], users[2]]);
    });

    it('should remove the clicked entry rather than the first match', () => {
        const users = [
            { name: 'Visitor One', email: 'one@example.com' },
            { name: 'Visitor Two', email: 'two@example.com' },
            { name: 'Visitor Three', email: 'three@example.com' },
        ] as User[];
        spectator.component.writeValue(users);
        spectator.detectChanges();

        spectator.component.removeUser(1);

        expect(spectator.component.active_list()).toEqual([users[0], users[2]]);
    });

    it('should be able to hide user actions', () => {
        expect('[actions] button').toHaveLength(3);
        spectator.setInput({ hide_actions: true });
        spectator.detectChanges();
        expect('[actions] button').toHaveLength(0);
        spectator.setInput({ hide_actions: false });
        spectator.detectChanges();
        expect('[actions] button').toHaveLength(3);
    });

    describe('user search', () => {
        /** Search for a term and wait for the debounced search to finish */
        const searchFor = async (q: string) => {
            spectator.component.updateSearch(q);
            spectator.detectChanges();
            await new Promise((r) => setTimeout(r, 350)); // debounce window
            spectator.detectChanges();
            await spectator.fixture.whenStable();
            return spectator.component.user_list();
        };

        beforeEach(() => {
            vi.mocked(ts_client.get).mockClear();
            vi.mocked(ts_client.get).mockImplementation(((url: string) =>
                Promise.resolve(
                    url.includes('/guests')
                        ? [
                              {
                                  id: 'g1',
                                  name: 'Amy Smith',
                                  email: 'amy@example.com',
                              },
                              {
                                  id: 'g2',
                                  name: 'Bob Smithers',
                                  email: 'bob@guest.com',
                              },
                          ]
                        : [
                              {
                                  id: 's1',
                                  name: 'Zed Smith',
                                  email: 'zed@place.tech',
                              },
                              {
                                  id: 's2',
                                  name: 'Amy Smith',
                                  email: 'amy@example.com',
                              },
                          ],
                )) as any);
            vi.mocked(spectator.inject(SettingsService).get).mockImplementation(
                (key: string) =>
                    key === 'visitor-invitees'
                        ? [
                              'cat@visitor.com|Cat Smith|Acme|1',
                              'dan@visitor.com|Dan Jones|Acme|0',
                              42,
                          ]
                        : undefined,
            );
        });

        it('should merge staff, guests and saved visitors once the search is long enough', async () => {
            spectator.setInput({ guests: true });
            expect(await searchFor('sm')).toEqual([]);
            expect(ts_client.get).not.toHaveBeenCalled();

            const list = await searchFor('smi');
            // A staff match wins over a guest with the same email
            expect(list.map((_) => [_.id, _.email])).toEqual([
                ['s2', 'amy@example.com'],
                ['g2', 'bob@guest.com'],
                [undefined, 'cat@visitor.com'],
                ['s1', 'zed@place.tech'],
            ]);
            expect(list[2]).toMatchObject({
                name: 'Cat Smith',
                company: 'Acme',
                international: true,
            });
        });

        it('should leave out staff when only guests are wanted', async () => {
            spectator.setInput({ guests: true, guests_only: true });
            const list = await searchFor('smi');
            expect(list.map((_) => _.email)).toEqual([
                'amy@example.com',
                'bob@guest.com',
                'cat@visitor.com',
            ]);
        });
    });

    describe('CSV import preview', () => {
        const users = (count: number) =>
            Array.from(
                { length: count },
                (_, i) =>
                    new User({
                        name: i ? `User ${i}` : '<img src=x onerror=alert(1)>',
                        email: `user${i}@example.com`,
                    }),
            );
        /** Make the confirm modal emit `event`, or close with `closed` */
        const modal = (
            event: Observable<unknown>,
            closed: Observable<unknown>,
        ) => {
            const dialog = spectator.inject(MatDialog);
            vi.mocked(dialog.open).mockReturnValue({
                componentInstance: { event },
                afterClosed: () => closed,
                close: vi.fn(),
            } as any);
            // The modal content sent with the latest `open`
            return () =>
                (
                    vi.mocked(dialog.open).mock.lastCall[1].data as {
                        content: string;
                    }
                ).content;
        };

        it('should list the first users with escaped text and note the rest', async () => {
            const content = modal(of({ reason: 'done' }), NEVER);
            const confirmed = await spectator.component.confirmCsvImport(
                users(7),
                'File.csv',
                true,
            );
            expect(confirmed).toBe(true);
            expect(content().match(/<li>/g)).toHaveLength(5);
            expect(content()).toContain('&lt;img src=x onerror=alert(1)&gt;');
            expect(content()).not.toContain('<img');
            expect(content()).toContain('FORM.USER_CSV_PREVIEW_MORE');
            expect(content()).toContain('FORM.USER_CSV_ROW_LIMIT');
        });

        it('should not confirm when the preview closes without done', async () => {
            const content = modal(NEVER, of(undefined));
            const confirmed = await spectator.component.confirmCsvImport(
                users(2),
                'File.csv',
                false,
            );
            expect(confirmed).toBe(false);
            expect(content()).not.toContain('FORM.USER_CSV_PREVIEW_MORE');
            expect(content()).not.toContain('FORM.USER_CSV_ROW_LIMIT');
        });
    });

    describe('attendee flags', () => {
        beforeEach(() => {
            settings_map['events.allow_international'] = true;
            settings_map['events.allow_attendee_internal_or_external'] = true;
            spectator = createComponent();
            spectator.setInput({ flags: true });
            spectator.component.writeValue([
                new User({ name: 'Visitor', email: 'visitor@example.com' }),
            ]);
            spectator.detectChanges();
        });

        it('should show the international checkbox and type radio when enabled', () => {
            expect('mat-checkbox').toExist();
            expect('mat-radio-group').toExist();
            expect('mat-radio-button').toHaveLength(2);
        });

        it('should hide the flag controls when the flags input is off', () => {
            spectator.setInput({ flags: false });
            spectator.detectChanges();
            expect('mat-checkbox').not.toExist();
            expect('mat-radio-group').not.toExist();
        });

        it('should store the international flag on a copy of the user', () => {
            const original = spectator.component.active_list()[0];
            spectator.click('mat-checkbox input');
            const item = spectator.component.active_list()[0];
            expect(item).not.toBe(original);
            expect(spectator.component.getAttendeeInternational(item)).toBe(
                true,
            );
            // The original can be shared with a cached event.
            expect(original.extension_data.international).toBeUndefined();
        });

        it('should store the internal/external type on the user', () => {
            const original = spectator.component.active_list()[0];
            expect(spectator.component.getAttendeeType(original)).toBe(
                'internal',
            );
            spectator.click(
                'mat-radio-group mat-radio-button[value="external"] input',
            );
            const item = spectator.component.active_list()[0];
            expect(spectator.component.getAttendeeType(item)).toBe('external');
            expect(item.extension_data.visitor_internal_or_external).toBe(
                'external',
            );
        });

        it('should emit the updated list through the form control', () => {
            const onChange = vi.fn();
            spectator.component.registerOnChange(onChange);
            spectator.click('mat-checkbox input');
            expect(onChange).toHaveBeenCalledTimes(1);
            const [list] = onChange.mock.calls[0];
            expect(list).toHaveLength(1);
            expect(list[0].extension_data.international).toBe(true);
        });

        it('should hide the flag controls when the settings are off', () => {
            settings_map['events.allow_international'] = false;
            settings_map['events.allow_attendee_internal_or_external'] = false;
            spectator = createComponent();
            spectator.setInput({ flags: true });
            spectator.component.writeValue([
                new User({ name: 'Visitor', email: 'visitor@example.com' }),
            ]);
            spectator.detectChanges();
            expect('mat-checkbox').not.toExist();
            expect('mat-radio-group').not.toExist();
        });
    });
});
