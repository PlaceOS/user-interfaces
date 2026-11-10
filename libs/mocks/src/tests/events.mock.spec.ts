import { mockSystem, registerMockEndpoint } from '@placeos/ts-client';

import { MOCK_EVENTS } from '../lib/api/events.data';
import { registerMockEvents } from '../lib/api/events.mock';
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

    const event = {
        id: 'mock-test-event',
        host: ACTIVE_USER.email,
        event_start: 0,
        event_end: 1800,
        system: { id: 'sys-old' },
        resources: [{ id: 'sys-resource' }],
        attendees: [],
    };

    beforeEach(() => {
        vi.mocked(registerMockEndpoint).mockClear();
        registerMockEvents();
        MOCK_EVENTS.push({ ...event });
        vi.mocked(mockSystem).mockClear();
    });

    afterEach(() => {
        // Write requests save the event to the mock session
        localStorage.clear();
        const index = MOCK_EVENTS.findIndex((_) => _.id === event.id);
        if (index >= 0) MOCK_EVENTS.splice(index, 1);
    });

    it('should poll the spaces an event leaves and joins on update', () => {
        handler('PATCH', '/api/staff/v1/events/:id')(
            request({
                route_params: { id: event.id },
                body: { system: { id: 'sys-new' }, resources: [] },
            }),
        );
        expect(polled()).toEqual(
            expect.arrayContaining(['sys-old', 'sys-resource', 'sys-new']),
        );
    });

    it('should poll the spaces of a deleted event', () => {
        handler('DELETE', '/api/staff/v1/events/:id')(
            request({ route_params: { id: event.id } }),
        );
        expect(polled()).toEqual(
            expect.arrayContaining(['sys-old', 'sys-resource']),
        );
    });
});
