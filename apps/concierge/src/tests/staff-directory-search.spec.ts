import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { createServiceFactory } from '@ngneat/spectator/vitest';
import { setCurrentUser, SettingsService, StaffUser } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { UserListFieldComponent } from 'libs/form-fields/src/lib/user-list-field.component';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';
import { searchStaff } from 'libs/users/src/lib/staff.fn';
import { MockProvider } from 'ng-mocks';
import { DEFAULT_SETTINGS } from '../environments/settings';

vi.mock('@placeos/ts-client', { spy: true });

const mockGet = vi.mocked(
    ts_client.get as unknown as (
        url: string,
    ) => Promise<Record<string, unknown>[]>,
);

describe('Concierge staff directory search settings', () => {
    const createSettings = createServiceFactory({
        service: SettingsService,
        providers: [MockProvider(Title, { setTitle: vi.fn() })],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        setCurrentUser(new StaffUser({ id: 'test-user' }));
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {},
        } as any);
        vi.mocked(ts_client.responseHeaders).mockReturnValue({});
        mockGet.mockResolvedValue([
            {
                id: 'guest',
                name: 'Jack Guest',
                unmapped: { userType: 'Guest' },
            },
            {
                id: 'member',
                name: 'Jack Employee',
                unmapped: { userType: 'Member' },
            },
        ]);
    });

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
        expect(mockGet.mock.calls[0][0]).not.toContain('additional_fields');
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
        expect(mockGet.mock.calls[0][0]).toContain(
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
        mockGet.mockImplementation(async (url) =>
            url.startsWith('/api/staff/v1/guests')
                ? [
                      {
                          id: 'visitor',
                          name: 'Jack Visitor',
                          email: 'visitor@example.com',
                      },
                  ]
                : [
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
                  ],
        );
        const fixture = TestBed.createComponent(UserListFieldComponent);
        fixture.componentRef.setInput('guests', true);
        fixture.detectChanges();
        fixture.componentInstance.search.set('Jack');
        await new Promise((resolve) => setTimeout(resolve, 350));
        await fixture.whenStable();
        fixture.detectChanges();
        expect(
            fixture.componentInstance.user_list().map((u) => u.email),
        ).toEqual([
            'member@example.com',
            'guest@example.com',
            'saved@example.com',
            'visitor@example.com',
        ]);
        expect(
            mockGet.mock.calls.some(([url]) =>
                url.startsWith('/api/staff/v1/guests'),
            ),
        ).toBe(true);
        expect(
            mockGet.mock.calls
                .filter(([url]) => url.startsWith('/api/staff/v1/people'))
                .every(([url]) => !url.includes('additional_fields')),
        ).toBe(true);
    });
});
