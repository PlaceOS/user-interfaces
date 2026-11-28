import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { createServiceFactory } from '@ngneat/spectator/vitest';
import { setCurrentUser, SettingsService, StaffUser } from '@placeos/common';
import { startMockPlaceClient } from '@placeos/common/tests';
import * as ts_client from '@placeos/ts-client';
import { clearMockEndpoints, fromV1Mock } from '@placeos/ts-client/compat';
import { UserListFieldComponent } from 'libs/form-fields/src/lib/user-list-field.component';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';
import { searchStaff } from 'libs/users/src/lib/staff.fn';
import { MockProvider } from 'ng-mocks';
import { DEFAULT_SETTINGS } from '../environments/settings';
import { mockHttp } from './mock-http';

vi.mock('@placeos/ts-client', { spy: true });

const PEOPLE = '/api/staff/v1/people';
const GUESTS = '/api/staff/v1/guests';
const DIRECTORY = [
    {
        id: 'guest',
        name: 'Jack Guest',
        email: 'guest@example.com',
        unmapped: { userType: 'Guest' },
    },
    {
        id: 'member',
        name: 'Jack Employee',
        email: 'member@example.com',
        unmapped: { userType: 'Member' },
    },
];

describe('Concierge staff directory search settings', () => {
    const createSettings = createServiceFactory({
        service: SettingsService,
        providers: [MockProvider(Title, { setTitle: vi.fn() })],
    });

    // The directory and guest searches read the JSON with placeFetch()
    let people: ReturnType<typeof mockHttp>;

    beforeEach(() => {
        vi.clearAllMocks();
        startMockPlaceClient();
        people = mockHttp('GET', PEOPLE, DIRECTORY);
        setCurrentUser(new StaffUser({ id: 'test-user' }));
        vi.mocked(ts_client.metadata.show).mockImplementation(
            fromV1Mock(
                () =>
                    ({
                        details: {},
                    }) as any,
                ['id', 'name'],
                'data',
                'name',
            ),
        );
    });

    afterEach(() => clearMockEndpoints());

    it('excludes directory guests with the Concierge default', async () => {
        const settings = createSettings().service;
        settings.setOverrides([DEFAULT_SETTINGS.app]);
        expect((await searchStaff('Jack')).map((u) => u.id)).toEqual([
            'member',
        ]);
    });

    it('includes guests when zone concierge_app metadata overrides the default', async () => {
        const settings = createSettings().service;
        settings.setOverrides([
            { staff_search_exclude_guests: false },
            DEFAULT_SETTINGS.app,
        ]);
        expect((await searchStaff('Jack')).map((u) => u.id)).toEqual([
            'guest',
            'member',
        ]);
        expect(people.mock.calls[0][0].url).not.toContain('additional_fields');
    });
    it('excludes directory guests from the host picker with external attendees enabled', async () => {
        const settings = createSettings().service;
        settings.setOverrides([
            { basic_user_search: false, events: { allow_externals: true } },
            DEFAULT_SETTINGS.app,
        ]);
        const fixture = TestBed.createComponent(UserSearchFieldComponent);
        fixture.detectChanges();
        const users = await fixture.componentInstance.query_fn()('Jack');
        expect(users.map((u) => u.id)).toEqual(['member']);
        expect(people.mock.calls[0][0].url).toContain(
            'additional_fields=userType',
        );
    });

    it('retains directory guests, PlaceOS guests and saved suggestions in the attendee picker', async () => {
        const settings = createSettings().service;
        settings.setOverrides([
            { basic_user_search: false },
            DEFAULT_SETTINGS.app,
        ]);
        settings.saveUserSetting('visitor-invitees', [
            'saved@example.com|Jack Saved|Example|0',
        ]);
        const guests = mockHttp('GET', GUESTS, [
            {
                id: 'visitor',
                name: 'Jack Visitor',
                email: 'visitor@example.com',
            },
        ]);
        const fixture = TestBed.createComponent(UserListFieldComponent);
        fixture.componentRef.setInput('guests', true);
        fixture.detectChanges();
        fixture.componentInstance.search.set('Jack');
        // Each mock request answers after a delay, so wait for the list
        await vi.waitFor(
            () => {
                fixture.detectChanges();
                expect(
                    fixture.componentInstance.user_list().map((u) => u.email),
                ).toEqual([
                    'member@example.com',
                    'guest@example.com',
                    'saved@example.com',
                    'visitor@example.com',
                ]);
            },
            { timeout: 5_000 },
        );
        expect(guests).toHaveBeenCalled();
        expect(
            people.mock.calls.every(
                ([request]) => !request.url.includes('additional_fields'),
            ),
        ).toBe(true);
    });
});
