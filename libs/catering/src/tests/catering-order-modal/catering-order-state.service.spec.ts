import { signal, WritableSignal } from '@angular/core';
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

describe('CateringOrderStateService', () => {
    let spectator: SpectatorService<CateringOrderStateService>;
    const createService = createServiceFactory({
        service: CateringOrderStateService,
        providers: [
            MockProvider(MatDialog, { open: vi.fn() } as any),
            MockProvider(OrganisationService, {
                building: { id: '' },
                active_building: signal({}),
            } as any),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
    });

    beforeEach(() => {
        spectator = createService();
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: [],
        } as never);
    });

    it('should create component', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should list menu items', () => {});
    it('should list filtered menu items', () => {});
    it('should allow changing menu options', () => {});
    it('should allow changing menu filters', () => {});

    it('should validate an order against its assigned room', async () => {
        const menu_item = new CateringItem({
            id: 'coffee',
            caterer: 'Cafe',
            quantity: 1,
            hide_for_zones: ['room-2'],
        });
        (
            spectator.service as unknown as {
                _available_menu: WritableSignal<CateringItem[]>;
            }
        )._available_menu.set([menu_item]);
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
    });
});
