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
    const createService = createServiceFactory({
        service: CateringOrderStateService,
        providers: [
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(OrganisationService, {
                building: { id: '' },
                active_building: signal({}),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn(),
                signal: vi.fn(() => signal(undefined)),
            }),
        ],
    });

    beforeEach(() => {
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
});
