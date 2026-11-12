import { registerMockEndpoint } from '@placeos/ts-client';

import { registerMockCalendars } from '../lib/api/calendars.mock';
import { MOCK_EVENTS } from '../lib/api/events.data';
import { MOCK_SPACES } from '../lib/api/spaces.data';
import { ACTIVE_USER, MOCK_STAFF } from '../lib/api/users.data';
import { endpoint } from './endpoints';

vi.mock('@placeos/ts-client');

/** Far after the generated mock events, so only test events match */
const START = Date.UTC(2099, 0, 1) / 1000;
const HOUR = 60 * 60;

describe('registerMockCalendars', () => {
    beforeAll(() => {
        vi.mocked(registerMockEndpoint).mockClear();
        registerMockCalendars();
    });

    it('should give the active user and staff edit access to calendars', () => {
        const permission = (email: string) =>
            endpoint(
                'GET',
                '/api/staff/v1/calendars/:email/permission',
            )({
                route_params: { email: encodeURIComponent(email) },
            });

        expect(permission(ACTIVE_USER.email)).toMatchObject({ role: 'owner' });
        const staff = MOCK_STAFF.find((u) => u.email !== ACTIVE_USER.email);
        expect(permission(staff.email)).toMatchObject({
            role: 'writer',
            can_edit: true,
        });
        expect(permission('someone@other.com')).toEqual({
            can_edit: false,
            has_access: false,
            role: 'none',
        });
    });

    describe('availability', () => {
        const [busy, free] = MOCK_SPACES;
        const available = (query_params: Record<string, string>) =>
            endpoint<{ resource: { id: string } }[]>(
                'GET',
                '/api/staff/v1/calendars/availability',
            )({
                query_params: {
                    period_start: `${START}`,
                    period_end: `${START + HOUR}`,
                    ...query_params,
                },
            }).map(({ resource }) => resource.id);

        beforeAll(() => {
            MOCK_EVENTS.push({
                id: 'mock-test-busy',
                event_start: START + HOUR / 2,
                event_end: START + 2 * HOUR,
                attendees: [{ id: busy.id, resource: true }],
            });
        });
        afterAll(() => {
            MOCK_EVENTS.splice(
                MOCK_EVENTS.findIndex((e) => e.id === 'mock-test-busy'),
                1,
            );
        });

        it('should leave out spaces with an event in the period', () => {
            expect(available({ system_ids: `${busy.id},${free.id}` })).toEqual([
                free.id,
            ]);
            // The event ends before a later period
            expect(
                available({
                    system_ids: busy.id,
                    period_start: `${START + 2 * HOUR}`,
                    period_end: `${START + 3 * HOUR}`,
                }),
            ).toEqual([busy.id]);
        });

        it('should list only spaces in every zone asked for', () => {
            const [building, level] = free.zones.slice(-2);
            const ids = available({ zone_ids: `${building},${level}` });

            expect(ids).toContain(free.id);
            for (const id of ids) {
                const space = MOCK_SPACES.find((s) => s.id === id);
                expect(space.zones).toEqual(
                    expect.arrayContaining([building, level]),
                );
            }
        });
    });
});
