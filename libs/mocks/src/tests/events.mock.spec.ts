import { HashMap } from '@placeos/common';
import { mockSystem, registerMockEndpoint } from '@placeos/ts-client';

import { MOCK_EVENTS } from '../lib/api/events.data';
import { registerMockEvents } from '../lib/api/events.mock';
import { MOCK_SPACES } from '../lib/api/spaces.data';
import { ACTIVE_USER } from '../lib/api/users.data';
import { endpoint } from './endpoints';

vi.mock('@placeos/ts-client');

const API = '/api/staff/v1/events';
/** Far after the generated mock events, so only test events match */
const START = Date.UTC(2099, 0, 1) / 1000;

describe('registerMockEvents', () => {
    /** IDs of the systems told to poll their bookings */
    const polled = () => vi.mocked(mockSystem).mock.calls.map(([id]) => id);
    const deleteEvent = (id: string) =>
        endpoint('DELETE', `${API}/:id`)({ route_params: { id } });
    const findEvent = (id: string) => MOCK_EVENTS.find((e) => e.id === id);
    const listIds = (query_params: Record<string, string>) =>
        endpoint<HashMap[]>('GET', API)({ query_params }).map((e) => e.id);

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
        endpoint(
            'PATCH',
            `${API}/:id`,
        )({
            route_params: { id: event.id },
            body: { system: { id: 'sys-new' }, resources: [] },
        });
        expect(polled()).toEqual(
            expect.arrayContaining(['sys-old', 'sys-resource', 'sys-new']),
        );
    });

    it('should add the host and the space as attendees of a new event', () => {
        const created = endpoint<HashMap>(
            'POST',
            API,
        )({
            body: { host: ACTIVE_USER.email, system: { id: 'sys-new' } },
        });
        added.push(created.id);

        expect(created.attendees).toEqual([
            expect.objectContaining({ email: ACTIVE_USER.email }),
            { id: 'sys-new', resource: true },
        ]);
        expect(polled()).toEqual(['sys-new']);
    });

    it('should create an event for a host who is not in the staff list', () => {
        const attendee = { email: 'guest@place.tech' };
        const created = endpoint<HashMap>(
            'POST',
            API,
        )({
            body: { host: 'unknown@place.tech', attendees: [attendee] },
        });
        added.push(created.id);

        expect(created.attendees).toEqual([attendee]);
    });

    it('should mark attendees that are spaces as resources', () => {
        const room = { id: 'sys-room', email: 'room@place.tech', zones: [] };
        const person = { email: 'person@place.tech' };
        const created = endpoint<HashMap>(
            'POST',
            API,
        )({
            body: { host: 'unknown@place.tech', attendees: [room, person] },
        });
        added.push(created.id);

        expect(created.attendees).toEqual([
            { ...room, resource: true },
            { email: 'person@place.tech' },
        ]);
    });

    it('should decline an event for the active user only', () => {
        const other = { email: 'other@place.tech' };
        const item = addEvent({
            id: 'mock-test-decline',
            attendees: [{ email: ACTIVE_USER.email }, other],
        });
        endpoint(
            'POST',
            `${API}/:id/decline`,
        )({
            route_params: { id: item.id },
        });

        expect(findEvent(item.id).attendees).toEqual([
            { email: ACTIVE_USER.email, response_status: 'declined' },
            { email: 'other@place.tech' },
        ]);
    });

    it('should list only the events of the requested level', () => {
        // Level IDs start with the building ID, so a text match on the
        // query would also match every event in the building
        const space = MOCK_SPACES[0];
        const level_id = space.zones.at(-1);
        const events = endpoint<HashMap[]>(
            'GET',
            API,
        )({
            query_params: { zone_ids: level_id },
        });

        expect(events.length).toBeGreaterThan(0);
        expect(
            events.filter((e) => !e.system.zones.includes(level_id)),
        ).toEqual([]);
    });

    it('should list the events the user attends in the period, without a zone', () => {
        const period = (start: number) => ({
            period_start: `${start}`,
            period_end: `${start + 3600}`,
        });
        addEvent({
            id: 'mock-test-attended',
            event_start: START,
            event_end: START + 1800,
            attendees: [{ email: ACTIVE_USER.email }],
        });
        addEvent({
            id: 'mock-test-not-attended',
            event_start: START,
            event_end: START + 1800,
        });

        expect(listIds(period(START))).toEqual(['mock-test-attended']);
        expect(listIds(period(START + 3600))).toEqual([]);
    });

    it('should list the spaces that other events book at the same time', () => {
        const clashes = (body: HashMap, include_clash_time = 'false') =>
            endpoint(
                'POST',
                `${API}/clashing-assets`,
            )({
                body,
                query_params: { include_clash_time },
            });
        addEvent({
            id: 'mock-test-clash',
            event_start: START,
            event_end: START + 1800,
            system: { id: 'sys-clash' },
            resources: [],
        });
        const booking = {
            id: 'mock-test-edited',
            event_start: START + 900,
            event_end: START + 2700,
            system: { id: 'sys-clash' },
            resources: [{ id: 'sys-free' }],
        };

        expect(clashes(booking)).toEqual(['sys-clash']);
        expect(clashes(booking, 'true')).toEqual([
            {
                asset_id: 'sys-clash',
                booking_start: START,
                booking_end: START + 1800,
            },
        ]);
        // An event does not clash with itself when it is edited
        expect(clashes({ ...booking, id: 'mock-test-clash' })).toEqual([]);
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
            endpoint(
                'POST',
                `${API}/:id/guests/:email/checkin`,
            )({
                route_params: {
                    id: event.id,
                    email: encodeURIComponent('guest+1@place.tech'),
                },
                query_params: { state },
            });
        const checked_in = () => findEvent(event.id).extension_data.checked_in;

        expect(checkin('true')).toMatchObject({ checked_in: true });
        checkin('true');
        expect(checked_in()).toEqual(['guest+1@place.tech']);
        expect(checkin('false')).toMatchObject({ checked_in: false });
        expect(checked_in()).toEqual([]);
    });

    it('should replace an attendee with the same email, and remove one', () => {
        const route_params = { id: event.id };
        const add = (body: HashMap) =>
            endpoint('POST', `${API}/:id/attendee`)({ route_params, body });
        const remove = (email: string) =>
            endpoint(
                'DELETE',
                `${API}/:id/attendee/:email`,
            )({
                route_params: { ...route_params, email },
            });

        add({ email: 'a@acme.com', name: 'Old' });
        add({ email: 'a@acme.com', name: 'New' });
        expect(findEvent(event.id).attendees).toEqual([
            { email: 'a@acme.com', name: 'New' },
        ]);

        remove(encodeURIComponent('a@acme.com'));
        expect(findEvent(event.id).attendees).toEqual([]);
        expect(() => remove('a@acme.com')).toThrow(
            expect.objectContaining({ status: 404 }),
        );
    });

    it('should merge changes into the extension data of an event', () => {
        const metadata = (method: 'GET' | 'PATCH', body?: HashMap) =>
            endpoint(
                method,
                `${API}/:id/metadata/:system_id`,
            )({
                route_params: { id: event.id, system_id: 'sys-old' },
                body,
            });

        metadata('PATCH', { notes: 'Hello' });
        metadata('PATCH', { catering: [] });

        expect(metadata('GET')).toEqual({ notes: 'Hello', catering: [] });
    });
});
