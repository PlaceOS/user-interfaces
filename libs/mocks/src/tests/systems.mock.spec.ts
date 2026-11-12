import {
    mockSystem,
    registerMockEndpoint,
    registerSystem,
} from '@placeos/ts-client';

import { MOCK_SPACES } from '../lib/api/spaces.data';
import { registerMockSystems } from '../lib/api/systems.mock';
import { endpoint } from './endpoints';

vi.mock('@placeos/ts-client');

type Space = (typeof MOCK_SPACES)[number];
const API = '/api/engine/v2';

describe('registerMockSystems', () => {
    /** Display module with a `volume` binding, as ts-client stores it */
    const display = (volume: number) => ({
        _volume: { value: volume, set: vi.fn() },
        call: vi.fn(),
    });
    /** Modules that every mock system returns in these tests */
    const modules = () => ({
        Bookings: [{ $poll_bookings: vi.fn(), call: vi.fn() }],
        AreaManagement: [{ $update: vi.fn(), call: vi.fn() }],
        Display: [display(40), display(70)],
    });

    beforeEach(() => {
        // `createSystem` polls each system on an interval
        vi.useFakeTimers();
        vi.mocked(mockSystem).mockImplementation(() => modules() as never);
        vi.mocked(registerMockEndpoint).mockClear();
        registerMockSystems();
    });

    afterEach(() => {
        localStorage.clear();
        vi.useRealTimers();
    });

    it('should find systems by email, ignoring case', () => {
        const [first, second] = MOCK_SPACES;
        const found = endpoint<Space[]>(
            'GET',
            `${API}/systems/with_emails`,
        )({
            query_params: {
                in: `${first.email.toUpperCase()},unknown@place.tech,${second.email}`,
            },
        });

        expect(found).toEqual([first, second]);
    });

    it('should fill the signage fields of listed systems', () => {
        const zone_id = MOCK_SPACES[0].zones.at(-1);
        const list = endpoint<Space[]>(
            'GET',
            `${API}/systems`,
        )({
            query_params: { zone_id, signage: 'true' },
        });

        expect(list.length).toBeGreaterThan(0);
        for (const space of list) {
            expect(space.zones).toContain(zone_id);
            expect(space).toMatchObject({ signage: true, playlists: [] });
            expect(space.display_name).toBeTruthy();
        }
    });

    it('should show the state of a module by name and 1-based index', () => {
        const state = (module: string) =>
            endpoint(
                'GET',
                `${API}/systems/:id/:module`,
            )({
                route_params: { id: MOCK_SPACES[0].id, module },
            });

        expect(state('Display_2')).toEqual({ volume: 70 });
        expect(() => state('Display_3')).toThrow(
            expect.objectContaining({ status: 404 }),
        );
    });

    it('should list the modules of a system in order', () => {
        const id = MOCK_SPACES[0].id;
        const list = endpoint<{ id: string }[]>(
            'GET',
            `${API}/modules`,
        )({
            query_params: { control_system_id: id },
        });

        expect(list.map((mod) => mod.id)).toEqual([
            `mod-${id}-Bookings-1`,
            `mod-${id}-AreaManagement-1`,
            `mod-${id}-Display-1`,
            `mod-${id}-Display-2`,
        ]);
        expect(endpoint('GET', `${API}/modules`)()).toEqual([]);
    });

    it('should create a system with mock modules, and keep its ID on update', () => {
        const created = endpoint<Space>(
            'POST',
            `${API}/systems`,
        )({
            body: { name: 'New room' },
        });
        expect(created.zones).toEqual([]);
        expect(registerSystem).toHaveBeenLastCalledWith(
            created.id,
            expect.objectContaining({ Bookings: expect.any(Array) }),
        );

        const { id } = created;
        endpoint(
            'PATCH',
            `${API}/systems/:id`,
        )({
            route_params: { id },
            body: { id: 'other', name: 'Renamed' },
        });
        expect(
            endpoint('GET', `${API}/systems/:id`)({ route_params: { id } }),
        ).toMatchObject({ id, name: 'Renamed' });

        endpoint('DELETE', `${API}/systems/:id`)({ route_params: { id } });
        expect(MOCK_SPACES).not.toContain(created);
    });
});
