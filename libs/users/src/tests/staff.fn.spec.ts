import { searchStaff as searchDirectory, showStaff } from '../lib/staff.fn';

vi.mock('@placeos/ts-client', { spy: true });

import { StaffUser } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

let exclude_guests: boolean | undefined;
const searchStaff = (q: string, signal?: AbortSignal) =>
    searchDirectory(q, { exclude_guests, signal });

const mockGet = vi.mocked(
    ts_client.get as unknown as (
        url: string,
    ) => Promise<Record<string, unknown>[]>,
);

describe('[Staff API]', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        exclude_guests = undefined;
        vi.mocked(ts_client.responseHeaders).mockReturnValue({});
    });
    describe('searchStaff', () => {
        it('should perform GET on staff endpoint', async () => {
            const spy = vi.spyOn(ts_client, 'get');
            spy.mockResolvedValue([{ name: 'Jim' }] as any);
            const list = await searchStaff('');
            expect(list).toBeInstanceOf(Array);
            expect(spy).toHaveBeenCalledWith('/api/staff/v1/people');
        });

        it('should return StaffUser objects', async () => {
            const spy = vi.spyOn(ts_client, 'get');
            spy.mockResolvedValue([{ name: 'Jim' }] as any);
            const list = await searchStaff('');
            expect(list).toBeInstanceOf(Array);
            expect(list[0]).toBeInstanceOf(StaffUser);
        });

        it('should allow filtering staff', async () => {
            const spy = vi.spyOn(ts_client, 'get');
            spy.mockResolvedValue([{ name: 'Jim' }] as any);
            await searchStaff('Jim');
            expect(spy).toHaveBeenCalledWith(
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

    describe('showStaff', () => {
        it('should GET staff', async () => {
            const spy = vi.spyOn(ts_client, 'get');
            spy.mockResolvedValue({ name: 'Jim' } as any);
            const item = await showStaff('jim');
            expect(item).toBeInstanceOf(StaffUser);
            expect(spy).toHaveBeenCalledWith('/api/staff/v1/people/jim');
        });
    });
});
