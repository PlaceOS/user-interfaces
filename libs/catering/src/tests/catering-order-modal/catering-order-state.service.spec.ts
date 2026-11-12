import { signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import {
    CateringItem,
    CateringOrder,
    ExternalCateringService,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { CateringOrderStateService } from '../../lib/catering-order-modal/catering-order-state.service';
import { CateringSettings } from '../../lib/catering-state.service';

describe('CateringOrderStateService', () => {
    let spectator: SpectatorService<CateringOrderStateService>;
    // New signal per test, so services from earlier tests do not load a menu
    let active_building: WritableSignal<{ id?: string }>;
    const loadMenu = vi.fn<() => Promise<CateringItem[]>>();
    const settings_get = vi.fn();
    const createService = createServiceFactory({
        service: CateringOrderStateService,
        providers: [
            MockProvider(MatDialog, { open: vi.fn() }),
            {
                provide: OrganisationService,
                useFactory: () =>
                    ({ active_building }) as unknown as OrganisationService,
            },
            MockProvider(SettingsService, {
                get: settings_get,
                signal: vi.fn(() => signal(undefined)),
            }),
            MockProvider(ExternalCateringService, { enabled: true, loadMenu }),
        ],
    });

    beforeEach(() => {
        active_building = signal({});
        loadMenu.mockReset();
        settings_get.mockReset();
        spectator = createService();
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: [],
        } as never);
    });

    /** Set private state that the service loads from the server */
    const setPrivate = (
        state: Partial<{
            _available_menu: CateringItem[];
            _settings_data: CateringSettings;
        }>,
    ) => {
        const service = spectator.service as unknown as Record<
            string,
            WritableSignal<unknown>
        >;
        for (const [key, value] of Object.entries(state)) {
            service[key].set(value);
        }
    };

    it('should validate an order against its assigned room', async () => {
        const menu_item = new CateringItem({
            id: 'coffee',
            caterer: 'Cafe',
            quantity: 1,
            hide_for_zones: ['room-2'],
        });
        setPrivate({ _available_menu: [menu_item] });
        const order = new CateringOrder({
            system_id: 'room-1',
            caterer: 'Cafe',
            items: [menu_item],
        });
        const first_room = new Space({
            id: 'room-1',
            zones: ['building-1', 'room-1'],
        });
        const second_room = new Space({
            id: 'room-2',
            zones: ['building-1', 'room-2'],
        });
        const details = {
            date: new Date('2026-09-03T10:00:00').valueOf(),
            duration: 60,
            zone_id: 'building-1',
        };

        await expect(
            spectator.service.orderAvailable(order, first_room, details),
        ).resolves.toBe(true);
        await expect(
            spectator.service.orderAvailable(order, second_room, details),
        ).resolves.toBe(false);
        // Same item ID from another caterer is not on the menu
        const other_caterer = new CateringOrder({
            system_id: 'room-1',
            caterer: 'Deli',
            items: [new CateringItem({ ...menu_item, caterer: 'Deli' })],
        });
        await expect(
            spectator.service.orderAvailable(
                other_caterer,
                first_room,
                details,
            ),
        ).resolves.toBe(false);
        // Rooms that cannot order catering
        setPrivate({ _settings_data: { disabled_rooms: ['room-1'] } });
        await expect(
            spectator.service.orderAvailable(order, first_room, details),
        ).resolves.toBe(false);
    });

    it('should filter the menu by search, tags, category and caterer', async () => {
        setPrivate({
            _available_menu: [
                new CateringItem({
                    id: 'latte',
                    name: 'Latte',
                    category: 'Drinks',
                    tags: ['Hot', 'Vegan'],
                    caterer: 'Cafe',
                }),
                new CateringItem({
                    id: 'tea',
                    name: 'Iced tea',
                    category: 'Drinks',
                    tags: ['Vegan'],
                }),
                new CateringItem({
                    id: 'cake',
                    name: 'Tea cake',
                    category: 'Bakery',
                    caterer: 'Cafe',
                }),
            ],
        });
        const filtered = async (
            filters: Parameters<CateringOrderStateService['setFilters']>[0],
        ) => {
            spectator.service.setFilters({
                search: '',
                tags: [],
                categories: [],
                caterer: '',
                ...filters,
            });
            TestBed.tick();
            await new Promise((resolve) => setTimeout(resolve, 0));
            return spectator.service.filtered_menu().map((i) => i.id);
        };

        expect(await filtered({ search: 'TEA' })).toEqual(['tea', 'cake']);
        expect(await filtered({ tags: ['Hot', 'Vegan'] })).toEqual(['latte']);
        expect(await filtered({ categories: ['Bakery'] })).toEqual(['cake']);
        expect(await filtered({ caterer: 'Cafe' })).toEqual(['latte', 'cake']);
        expect(await filtered({ caterer: '<empty>' })).toEqual(['tea']);
    });

    describe('menu load', () => {
        const flush = () => new Promise((resolve) => setTimeout(resolve, 0));
        const item = (id: string, caterer = '') =>
            new CateringItem({ id, caterer });
        /** Set a building so the service loads the menu, then wait for it */
        const loadFor = async (items: CateringItem[]) => {
            loadMenu.mockResolvedValue(items);
            active_building.set({ id: 'bld-1' });
            TestBed.tick();
            await flush();
        };

        it('should pick the first caterer when the menu has more than one', async () => {
            await loadFor([item('1', 'Cafe'), item('2'), item('3', 'Deli')]);
            expect(spectator.service.filters().caterer).toBe('Cafe');
            expect(spectator.service.available_menu()).toHaveLength(3);
        });

        it('should keep all caterers when the menu has only one', async () => {
            await loadFor([item('1', 'Cafe'), item('2')]);
            expect(spectator.service.filters().caterer).toBe('');
        });

        it('should use the caterer from the app settings', async () => {
            settings_get.mockImplementation((key: string) =>
                key === 'app.catering_provider' ? 'Deli' : undefined,
            );
            await loadFor([item('1', 'Cafe'), item('2', 'Deli')]);
            expect(spectator.service.filters().caterer).toBe('Deli');
        });

        it('should ignore a slow response from an older load', async () => {
            let resolveOld: (items: CateringItem[]) => void = () => undefined;
            loadMenu.mockReturnValueOnce(
                new Promise((resolve) => (resolveOld = resolve)),
            );
            active_building.set({ id: 'bld-1' });
            TestBed.tick();

            loadMenu.mockResolvedValueOnce([item('new')]);
            spectator.service.setOptions({ zone: 'zone-2' });
            TestBed.tick();
            await flush();
            resolveOld([item('old')]);
            await flush();

            expect(spectator.service.available_menu().map((i) => i.id)).toEqual(
                ['new'],
            );
            expect(spectator.service.loading()).toBe('');
        });
    });
});
