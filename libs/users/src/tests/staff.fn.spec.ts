import {
    searchStaff as searchDirectory,
    searchStaffByEmailPrefix,
    showStaff,
} from '../lib/staff.fn';

vi.mock('@placeos/ts-client/staff', { spy: true });

import { TestBed } from '@angular/core/testing';
import { SettingsService, StaffUser } from '@placeos/common';
import {
    clearMockEndpoints,
    type MockHttpRequest,
    mockReply,
    registerMockEndpoint,
} from '@placeos/ts-client/compat';
import { PlaceCalendarUser, staff } from '@placeos/ts-client/staff';

import { mockData } from 'libs/common/src/tests/mock-data';
import { startMockPlaceClient } from 'libs/common/src/tests/test-helpers';

const STAFF = '/api/staff/v1/people';

let exclude_guests: boolean | undefined;
const searchStaff = (q: string, signal?: AbortSignal) =>
    searchDirectory(q, { exclude_guests, signal });

/** `Link` header of each page that the directory sends, in order */
let links: string[] = [];
/** Path and query of each directory request, in mock mode */
const mockGet = vi.fn((_path: string) => undefined);
const pathOf = (request: MockHttpRequest) => {
    const url = new URL(request.url, location.origin);
    return `${url.pathname}${url.search}`;
};
/**
 * Answers directory requests in mock mode: `pages`, one for each request,
 * with the next `links` header. `link` makes the header of a request.
 */
function serve(
    pages: unknown[][],
    link = (_: MockHttpRequest, index: number) => links[index] ?? '',
    before = () => undefined,
) {
    let index = 0;
    registerMockEndpoint({
        path: STAFF,
        method: 'GET',
        callback: (request) => {
            mockGet(pathOf(request));
            before();
            return pages[Math.min(index, pages.length - 1)];
        },
        headers: (request) => {
            const value = link(request, index++);
            return value ? { Link: value } : {};
        },
    });
}

describe('[Staff API]', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        startMockPlaceClient();
        exclude_guests = undefined;
        links = [];
    });
    afterEach(() => clearMockEndpoints());
    describe('searchStaff', () => {
        it('should GET staff as StaffUser objects without a query', async () => {
            serve([[{ name: 'Jim' }]]);
            const list = await searchStaff('');
            expect(mockGet.mock.calls[0][0]).toBe('/api/staff/v1/people');
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(StaffUser);
        });

        it('should allow filtering staff', async () => {
            serve([[{ name: 'Jim' }]]);
            await searchStaff('Jim');
            expect(mockGet.mock.calls[0][0]).toBe(
                '/api/staff/v1/people?q=Jim&fields=id%2Cname%2Cemail%2Cusername%2Corganisation%2Cdepartment',
            );
        });
    });

    describe('excluding directory guests', () => {
        beforeEach(() => (exclude_guests = true));

        it('finds a member after an entire first page of guests', async () => {
            const guests = Array.from({ length: 100 }, (_, i) => ({
                id: `guest-${i}`,
                name: 'Jack Guest',
                username: `guest${i}#EXT#@example.onmicrosoft.com`,
                unmapped: { userType: 'Guest' },
            }));
            const next =
                '/api/staff/v1/people?q=Jack&additional_fields=userType&next_page=opaque';
            links = [`<${next}>; rel="next"`];
            serve([
                guests,
                [
                    {
                        id: 'member',
                        name: 'Jack Employee',
                        email: 'jack@example.com',
                        unmapped: { userType: 'Member' },
                    },
                ],
            ]);
            const results = await searchStaff('Jack');
            expect(results.map((u) => u.id)).toEqual(['member']);
            expect(mockGet).toHaveBeenCalledTimes(2);
            expect(mockGet.mock.calls[1][0]).toBe(next);
            const url = new URL(mockGet.mock.calls[0][0], location.origin);
            expect(url.searchParams.get('q')).toBe('Jack');
            expect(url.searchParams.get('additional_fields')).toBe('userType');
        });

        it('uses explicit userType and falls back to the external username marker', async () => {
            serve([
                [
                    { id: 'guest', unmapped: { userType: 'Guest' } },
                    {
                        id: 'legacy-guest',
                        username: 'user#ext#@example.onmicrosoft.com',
                    },
                    {
                        id: 'member',
                        username: 'user#EXT#@example.onmicrosoft.com',
                        unmapped: { userType: 'Member' },
                    },
                    { id: 'google', email: 'google@example.com' },
                ],
            ]);
            expect((await searchStaff('User')).map((u) => u.id)).toEqual([
                'member',
                'google',
            ]);
        });

        it.each([false, undefined])(
            'keeps the previous request and results when setting is %s',
            async (value) => {
                exclude_guests = value;
                links = ['</api/staff/v1/people?next_page=more>; rel="next"'];
                serve([[{ id: 'guest', unmapped: { userType: 'Guest' } }]]);
                expect((await searchStaff('Jack')).map((u) => u.id)).toEqual([
                    'guest',
                ]);
                expect(mockGet).toHaveBeenCalledTimes(1);
                expect(mockGet.mock.calls[0][0]).toBe(
                    '/api/staff/v1/people?q=Jack&fields=id%2Cname%2Cemail%2Cusername%2Corganisation%2Cdepartment',
                );
            },
        );

        it('uses the app setting when the caller does not override it', async () => {
            exclude_guests = undefined;
            // `setting()` reads from the SettingsService once it is created
            const get = vi
                .spyOn(TestBed.inject(SettingsService), 'get')
                .mockImplementation(
                    (key: string) => key === 'app.staff_search_exclude_guests',
                );
            onTestFinished(() => get.mockRestore());
            serve([
                [
                    { id: 'guest', unmapped: { userType: 'Guest' } },
                    { id: 'member', unmapped: { userType: 'Member' } },
                ],
            ]);
            expect((await searchStaff('')).map((u) => u.id)).toEqual([
                'member',
            ]);
            const url = new URL(mockGet.mock.calls[0][0], location.origin);
            expect(url.searchParams.get('fields')).toContain('unmapped');
            expect(url.searchParams.get('additional_fields')).toBe('userType');
        });

        it('stops paging once 100 eligible results have been found', async () => {
            links = ['</api/staff/v1/people?next_page=more>; rel="next"'];
            serve([
                Array.from({ length: 100 }, (_, i) => ({ id: `member-${i}` })),
            ]);
            expect(await searchStaff('Member')).toHaveLength(100);
            expect(mockGet).toHaveBeenCalledTimes(1);
        });

        it('stops fetching pages when an autocomplete search is cancelled', async () => {
            const controller = new AbortController();
            serve([[]], undefined, () => controller.abort());
            await expect(
                searchStaff('Jack', controller.signal),
            ).rejects.toThrow();
            expect(mockGet).toHaveBeenCalledTimes(1);
        });

        it.each([
            'https://other.example/api/staff/v1/people?next_page=more',
            '/api/staff/v1/tenants',
        ])('rejects an unexpected pagination target %s', async (next) => {
            links = [`<${next}>; rel="next"`];
            serve([[]]);
            await expect(searchStaff('Jack')).rejects.toThrow(
                'Invalid staff directory pagination link',
            );
            expect(mockGet).toHaveBeenCalledTimes(1);
        });
    });

    it('rejects a pagination link that points back to a visited page', async () => {
        exclude_guests = true;
        serve([[]], (request) => `<${pathOf(request)}>; rel="next"`);
        await expect(searchStaff('Jack')).rejects.toThrow(
            'Invalid staff directory pagination link',
        );
        expect(mockGet).toHaveBeenCalledTimes(1);
    });

    describe('searchStaffByEmailPrefix', () => {
        it('escapes single quotes in the startsWith filter', async () => {
            vi.mocked(staff.query).mockResolvedValue(
                mockReply([
                    mockData(PlaceCalendarUser, {
                        id: 'o',
                        name: "Jim O'Neil",
                    }),
                ]),
            );
            const list = await searchStaffByEmailPrefix("jim.o'neil");
            expect(staff.query).toHaveBeenCalledWith({
                filter: "startsWith(mail,'jim.o''neil')",
            });
            expect(list[0]).toBeInstanceOf(StaffUser);
        });
    });

    describe('showStaff', () => {
        it('should get staff by ID', async () => {
            vi.mocked(staff.show).mockResolvedValue(
                mockReply(mockData(PlaceCalendarUser, { name: 'Jim' })),
            );
            const item = await showStaff('jim@place.tech');
            expect(item).toBeInstanceOf(StaffUser);
            expect(staff.show).toHaveBeenCalledWith({ id: 'jim@place.tech' });
        });
    });
});
