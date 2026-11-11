import { mockSystem, registerMockEndpoint } from '@placeos/ts-client';

import { MOCK_EVENTS } from '../lib/api/events.data';
import { registerMockEvents } from '../lib/api/events.mock';
import { MOCK_SPACES } from '../lib/api/spaces.data';
import { ACTIVE_USER } from '../lib/api/users.data';

vi.mock('@placeos/ts-client');

/** Build the request object a mocked endpoint is handed by ts-client */
function request(overrides: Record<string, unknown> = {}): unknown {
    return {
        url: '',
        path: '',
        method: 'GET',
        metadata: {},
        route_params: {},
        query_params: {},
        body: null,
        ...overrides,
    };
}

describe('registerMockEvents', () => {
    /** Callback registered for the given method + path */
    function handler(method: string, path: string) {
        const match = vi
            .mocked(registerMockEndpoint)
            .mock.calls.map(([options]) => options)
            .find((o) => o.method === method && o.path === path);
        if (!match) throw new Error(`No handler for ${method} ${path}`);
        return (req: unknown) => match.callback(req as never);
    }

    /** IDs of the systems told to poll their bookings */
    const polled = () => vi.mocked(mockSystem).mock.calls.map(([id]) => id);
    const deleteEvent = (id: string) =>
        handler(
            'DELETE',
            '/api/staff/v1/events/:id',
        )(request({ route_params: { id } }));
    const findEvent = (id: string) => MOCK_EVENTS.find((e) => e.id === id);

    const event = {
        id: 'mock-test-event',
        host: ACTIVE_USER.email,
        event_start: 0,
        event_end: 1800,
        system: { id: 'sys-old' },
        resources: [{ id: 'sys-resource' }],
        attendees: [],
    };
    /** Events that a test adds, removed again after each test */
    let added: string[];
    const addEvent = (fields: Record<string, unknown>) => {
        const item = { ...event, attendees: [], ...fields };
        MOCK_EVENTS.push(item);
        added.push(item.id as string);
        return item;
    };

    beforeEach(() => {
        added = [];
        vi.mocked(registerMockEndpoint).mockClear();
        registerMockEvents();
        addEvent({});
        vi.mocked(mockSystem).mockClear();
    });

    afterEach(() => {
        // Write requests save the event to the mock session
        localStorage.clear();
        for (const id of added) {
            const index = MOCK_EVENTS.findIndex((_) => _.id === id);
            if (index >= 0) MOCK_EVENTS.splice(index, 1);
        }
    });

    it('should poll the spaces an event leaves and joins on update', () => {
        handler(
            'PATCH',
            '/api/staff/v1/events/:id',
        )(
            request({
                route_params: { id: event.id },
                body: { system: { id: 'sys-new' }, resources: [] },
            }),
        );
        expect(polled()).toEqual(
            expect.arrayContaining(['sys-old', 'sys-resource', 'sys-new']),
        );
    });

    it('should list only the events of the requested level', () => {
        // Level IDs start with the building ID, so a text match on the
        // query would also match every event in the building
        const space = MOCK_SPACES[0];
        const level_id = space.zones.at(-1);
        const events = handler(
            'GET',
            '/api/staff/v1/events',
        )(request({ query_params: { zone_ids: level_id } })) as any[];

        expect(events.length).toBeGreaterThan(0);
        expect(
            events.filter((e) => !e.system.zones.includes(level_id)),
        ).toEqual([]);
    });

    describe('delete', () => {
        it('should remove an event of the host and poll its spaces', () => {
            deleteEvent(event.id);

            expect(findEvent(event.id)).toBeUndefined();
            expect(polled()).toEqual(
                expect.arrayContaining(['sys-old', 'sys-resource']),
            );
        });

        it('should decline, not remove, the event of another host', () => {
            const other = addEvent({
                id: 'mock-test-guest',
                host: 'someone@place.tech',
                attendees: [{ email: ACTIVE_USER.email }],
            });
            deleteEvent(other.id);

            expect(findEvent(other.id)?.attendees).toEqual([
                { email: ACTIVE_USER.email, response_status: 'declined' },
            ]);
        });

        it('should remove the event of another host that the user does not attend', () => {
            // Concierge staff delete room events of other users
            const other = addEvent({
                id: 'mock-test-other',
                host: 'someone@place.tech',
            });
            deleteEvent(other.id);

            expect(findEvent(other.id)).toBeUndefined();
        });
    });

    it('should check a guest in and out without duplicates', () => {
        const checkin = (state: string) =>
            handler(
                'POST',
                '/api/staff/v1/events/:id/guests/:email/checkin',
            )(
                request({
                    route_params: {
                        id: event.id,
                        email: encodeURIComponent('guest+1@place.tech'),
                    },
                    query_params: { state },
                }),
            );
        const checked_in = () => findEvent(event.id).extension_data.checked_in;

        expect(checkin('true')).toMatchObject({ checked_in: true });
        checkin('true');
        expect(checked_in()).toEqual(['guest+1@place.tech']);
        expect(checkin('false')).toMatchObject({ checked_in: false });
        expect(checked_in()).toEqual([]);
    });
});
