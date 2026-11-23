import { GuestUser, StaffUser } from '@placeos/common';
import { startMockPlaceClient } from '@placeos/common/tests';
import {
    clearMockEndpoints,
    type MockHttpRequest,
    registerMockEndpoint,
} from '@placeos/ts-client/compat';

import { addUser, UserPipe } from '../lib/user.pipe';

const STAFF = '/api/staff/v1/people';
const GUESTS = '/api/staff/v1/guests';

/** Answers GET requests to `path` in mock mode. Throw `{ status }` to fail. */
function serve(path: string, callback: (request: MockHttpRequest) => unknown) {
    const handler = vi.fn(callback);
    registerMockEndpoint({ path, method: 'GET', callback: handler });
    return handler;
}

const notFound = () => {
    throw { status: 404 };
};

describe('UserPipe', () => {
    let pipe: UserPipe;
    let staff: ReturnType<typeof serve>;
    let guests: ReturnType<typeof serve>;

    beforeEach(() => {
        startMockPlaceClient();
        pipe = new UserPipe();
        staff = serve(`${STAFF}/:id`, notFound);
        guests = serve(`${GUESTS}/:id`, notFound);
    });

    afterEach(() => clearMockEndpoints());

    it('should return an empty user when no id is passed', async () => {
        const user = await pipe.transform('');
        expect(user).toEqual({});
        expect(staff).not.toHaveBeenCalled();
    });

    it('should return a cached user matched by id', async () => {
        const cached = new StaffUser({
            id: 'user-id-1',
            email: 'a@place.tech',
        });
        addUser(cached);
        const user = await pipe.transform('user-id-1');
        expect(user).toBe(cached);
        expect(staff).not.toHaveBeenCalled();
    });

    it('should return a cached user matched by email', async () => {
        const cached = new StaffUser({
            id: 'user-id-2',
            email: 'b@place.tech',
        });
        addUser(cached);
        const user = await pipe.transform('b@place.tech');
        expect(user).toBe(cached);
    });

    it('should fetch staff details for an unknown id', async () => {
        staff = serve(`${STAFF}/:id`, ({ route_params }) => ({
            id: route_params['id'],
            email: 'd@place.tech',
        }));
        const user = await pipe.transform('user-id-4');
        expect(staff).toHaveBeenCalledWith(
            expect.objectContaining({ route_params: { id: 'user-id-4' } }),
        );
        expect(user).toBeInstanceOf(StaffUser);
        expect(user.id).toBe('user-id-4');
        // Subsequent lookups should now hit the cache
        staff.mockClear();
        const cached = await pipe.transform('user-id-4');
        expect(cached).toBe(user);
        expect(staff).not.toHaveBeenCalled();
    });

    it('should fall back to guest details when staff lookup fails', async () => {
        guests = serve(`${GUESTS}/:id`, ({ route_params }) => ({
            id: route_params['id'],
            email: 'e@place.tech',
        }));
        const user = await pipe.transform('user-id-5');
        expect(staff).toHaveBeenCalledTimes(1);
        expect(guests).toHaveBeenCalledWith(
            expect.objectContaining({ route_params: { id: 'user-id-5' } }),
        );
        expect(user).toBeInstanceOf(GuestUser);
        expect(user.email).toBe('e@place.tech');
        guests.mockClear();
        expect(await pipe.transform('e@place.tech')).toBe(user);
        expect(guests).not.toHaveBeenCalled();
    });

    it('should return an empty user when neither is found, and retry later', async () => {
        expect(await pipe.transform('user-id-6')).toEqual({});
        serve(`${STAFF}/:id`, () => ({ id: 'user-id-6' }));
        const user = await pipe.transform('user-id-6');
        expect(user).toBeInstanceOf(StaffUser);
        expect(user.id).toBe('user-id-6');
    });

    it('should de-duplicate concurrent lookups for the same id', async () => {
        staff = serve(`${STAFF}/:id`, () => ({
            id: 'user-id-7',
            email: 'f@place.tech',
        }));
        const first = pipe.transform('user-id-7');
        const second = pipe.transform('user-id-7');
        const [a, b] = await Promise.all([first, second]);
        expect(a).toBe(b);
        expect(staff).toHaveBeenCalledTimes(1);
    });

    describe('email-prefix lookup', () => {
        it('should return the matched name with the requested email', async () => {
            // A cached exact match must not short-circuit a prefix lookup
            addUser(new StaffUser({ id: 'p1', email: 'pat@other.tech' }));
            const search = serve(STAFF, () => [
                { id: 'staff-pat', name: 'Pat Smith', email: 'pat@place.tech' },
            ]);
            const user = await pipe.transform('pat@other.tech', 'email-prefix');
            expect(search).toHaveBeenCalledWith(
                expect.objectContaining({
                    query_params: { filter: "startsWith(mail,'pat')" },
                }),
            );
            expect(user.name).toBe('Pat Smith');
            expect(user.email).toBe('pat@other.tech');
        });

        it('should return an empty user when no staff match or the search fails', async () => {
            serve(STAFF, () => []);
            expect(
                await pipe.transform('x@place.tech', 'email-prefix'),
            ).toEqual({});
            serve(STAFF, notFound);
            expect(
                await pipe.transform('y@place.tech', 'email-prefix'),
            ).toEqual({});
        });
    });
});
