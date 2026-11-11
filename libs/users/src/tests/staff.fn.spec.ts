import {
    searchStaff as searchDirectory,
    searchStaffByEmailPrefix,
    showStaff,
} from '../lib/staff.fn';

vi.mock('@placeos/ts-client', { spy: true });

import { StaffUser } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

let exclude_guests: boolean | undefined;
const searchStaff = (q: string, signal?: AbortSignal) =>
    searchDirectory(q, { exclude_guests, signal });

const mockGet = vi.mocked(
    ts_client.get as unknown as (url: string) => Promise<unknown>,
);

describe('[Staff API]', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        exclude_guests = undefined;
        vi.mocked(ts_client.responseHeaders).mockReturnValue({});
    });
    describe('searchStaff', () => {
        it('should GET staff as StaffUser objects without a query', async () => {
            mockGet.mockResolvedValue([{ name: 'Jim' }]);
            const list = await searchStaff('');
            expect(ts_client.get).toHaveBeenCalledWith('/api/staff/v1/people');
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(StaffUser);
        });

        it('should allow filtering staff', async () => {
            mockGet.mockResolvedValue([{ name: 'Jim' }]);
            await searchStaff('Jim');
            expect(ts_client.get).toHaveBeenCalledWith(
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
            mockGet.mockResolvedValueOnce(guests).mockResolvedValueOnce([
                {
                    id: 'member',
                    name: 'Jack Employee',
                    email: 'jack@example.com',
                    unmapped: { userType: 'Member' },
                },
            ]);
            const next =
                '/api/staff/v1/people?q=Jack&additional_fields=userType&next_page=opaque';
            vi.mocked(ts_client.responseHeaders)
                .mockReturnValueOnce({ link: `<${next}>; rel="next"` })
                .mockReturnValueOnce({});
            const results = await searchStaff('Jack');
            expect(results.map((u) => u.id)).toEqual(['member']);
            expect(ts_client.get).toHaveBeenCalledTimes(2);
            expect(ts_client.get).toHaveBeenLastCalledWith(next);
            const url = new URL(mockGet.mock.calls[0][0], location.origin);
            expect(url.searchParams.get('q')).toBe('Jack');
            expect(url.searchParams.get('additional_fields')).toBe('userType');
            expect(ts_client.responseHeaders).toHaveBeenCalledWith(url.href);
        });

        it('uses explicit userType and falls back to the external username marker', async () => {
            mockGet.mockResolvedValue([
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
                mockGet.mockResolvedValue([
                    { id: 'guest', unmapped: { userType: 'Guest' } },
                ]);
                vi.mocked(ts_client.responseHeaders).mockReturnValue({
                    link: '</api/staff/v1/people?next_page=more>; rel="next"',
                });
                expect((await searchStaff('Jack')).map((u) => u.id)).toEqual([
                    'guest',
                ]);
                expect(ts_client.get).toHaveBeenCalledTimes(1);
                expect(ts_client.get).toHaveBeenCalledWith(
                    '/api/staff/v1/people?q=Jack&fields=id%2Cname%2Cemail%2Cusername%2Corganisation%2Cdepartment',
                );
            },
        );

        it('stops paging once 100 eligible results have been found', async () => {
            mockGet.mockResolvedValue(
                Array.from({ length: 100 }, (_, i) => ({ id: `member-${i}` })),
            );
            vi.mocked(ts_client.responseHeaders).mockReturnValue({
                link: '</api/staff/v1/people?next_page=more>; rel="next"',
            });
            expect(await searchStaff('Member')).toHaveLength(100);
            expect(ts_client.get).toHaveBeenCalledTimes(1);
        });

        it('stops fetching pages when an autocomplete search is cancelled', async () => {
            const controller = new AbortController();
            mockGet.mockImplementation(async () => {
                controller.abort();
                return [];
            });
            await expect(
                searchStaff('Jack', controller.signal),
            ).rejects.toThrow();
            expect(ts_client.get).toHaveBeenCalledTimes(1);
        });

        it.each([
            'https://other.example/api/staff/v1/people?next_page=more',
            '/api/staff/v1/tenants',
        ])('rejects an unexpected pagination target %s', async (next) => {
            mockGet.mockResolvedValue([]);
            vi.mocked(ts_client.responseHeaders).mockReturnValue({
                link: `<${next}>; rel="next"`,
            });
            await expect(searchStaff('Jack')).rejects.toThrow(
                'Invalid staff directory pagination link',
            );
            expect(ts_client.get).toHaveBeenCalledTimes(1);
        });
    });

    it('rejects a pagination link that points back to a visited page', async () => {
        exclude_guests = true;
        mockGet.mockResolvedValue([]);
        vi.mocked(ts_client.responseHeaders).mockImplementation((href) => ({
            link: `<${href}>; rel="next"`,
        }));
        await expect(searchStaff('Jack')).rejects.toThrow(
            'Invalid staff directory pagination link',
        );
        expect(ts_client.get).toHaveBeenCalledTimes(1);
    });

    describe('searchStaffByEmailPrefix', () => {
        it('escapes single quotes in the startsWith filter', async () => {
            mockGet.mockResolvedValue([{ id: 'o', name: "Jim O'Neil" }]);
            const list = await searchStaffByEmailPrefix("jim.o'neil");
            const url = new URL(mockGet.mock.calls[0][0], location.origin);
            expect(url.pathname).toBe('/api/staff/v1/people');
            expect(url.searchParams.get('filter')).toBe(
                "startsWith(mail,'jim.o''neil')",
            );
            expect(list[0]).toBeInstanceOf(StaffUser);
        });
    });

    describe('showStaff', () => {
        it('should GET staff with an encoded ID', async () => {
            mockGet.mockResolvedValue({ name: 'Jim' });
            const item = await showStaff('jim@place.tech');
            expect(item).toBeInstanceOf(StaffUser);
            expect(ts_client.get).toHaveBeenCalledWith(
                '/api/staff/v1/people/jim%40place.tech',
            );
        });
    });
});
