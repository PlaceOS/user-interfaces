import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { addMinutes } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import {
    CateringItem,
    CateringOrder,
    LocaleService,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { CateringListFieldComponent } from '../lib/catering-list-field.component';
import { CateringOrderStateService } from '../lib/catering-order-modal/catering-order-state.service';

describe('CateringListFieldComponent', () => {
    let spectator: Spectator<CateringListFieldComponent>;
    let dialog_result: CateringItem[] | undefined;
    const room = new Space({
        id: 'room-1',
        name: 'Boardroom',
        zones: ['building-1', 'level-1'],
    });
    const second_room = new Space({
        id: 'room-2',
        name: 'Training room',
        zones: ['building-1', 'level-1'],
    });
    const settings_service = createSettingsServiceMock();
    const open_dialog = vi.fn((_component?: unknown, _config?: unknown) => ({
        afterClosed: () => of(dialog_result),
        componentInstance: {
            exact_time: false,
            offset: 0,
            offset_day: 0,
        },
    }));

    const createComponent = createComponentFactory({
        component: CateringListFieldComponent,
        providers: [
            MockProvider(SettingsService, settings_service),
            {
                provide: OrganisationService,
                useValue: {
                    currency_code: 'USD',
                    active_building: signal(null),
                    locationWithID: vi.fn(() => ({
                        label: 'Head Office / Level 1',
                        building: { id: 'building-1' },
                    })),
                    levelWithID: vi.fn(() => ({ parent_id: 'building-1' })),
                } as unknown as OrganisationService,
            },
            MockProvider(CateringOrderStateService, {
                setOptions: vi.fn(),
            }),
            MockProvider(LocaleService, {
                get: vi.fn((value: string) => value),
            }),
        ],
    });

    beforeEach(() => {
        dialog_result = undefined;
        settings_service.get.mockReset();
        settings_service.get.mockImplementation(() => undefined);
        spectator = createComponent();
        spectator.setInput('options', {
            date: Date.now(),
            duration: 60,
            resources: [room],
        });
        open_dialog.mockClear();
        (spectator.component as any)._dialog = { open: open_dialog };
    });

    it('should remove an edited order when the confirmed selection is empty', () => {
        const order = new CateringOrder({
            id: 'order-1',
            caterer: 'Cafe',
            items: [
                new CateringItem({
                    id: 'coffee',
                    caterer: 'Cafe',
                    quantity: 1,
                }),
            ],
        });
        spectator.component.setValue([order]);
        dialog_result = [];

        spectator.component.editOrder(order);

        expect(spectator.component.orders()).toEqual([]);
    });

    it('should keep the existing order when the modal is cancelled', () => {
        const order = new CateringOrder({
            id: 'order-1',
            caterer: 'Cafe',
            items: [
                new CateringItem({
                    id: 'coffee',
                    caterer: 'Cafe',
                    quantity: 1,
                }),
            ],
        });
        spectator.component.setValue([order]);
        dialog_result = undefined;

        spectator.component.editOrder(order);

        expect(spectator.component.orders()).toEqual([order]);
    });

    it('should show a new order after an edited order is removed', () => {
        const existing_order = new CateringOrder({
            id: 'order-1',
            caterer: 'Cafe',
            items: [
                new CateringItem({
                    id: 'coffee',
                    caterer: 'Cafe',
                    quantity: 1,
                }),
            ],
        });
        const new_item = new CateringItem({
            id: 'tea',
            caterer: 'Cafe',
            quantity: 2,
        });
        spectator.component.setValue([existing_order]);

        dialog_result = [];
        spectator.component.editOrder(existing_order);
        expect(spectator.component.orders()).toEqual([]);

        dialog_result = [new_item];
        spectator.component.editOrder();

        expect(spectator.component.orders()).toHaveLength(1);
        expect(spectator.component.orders()[0].items).toEqual([new_item]);
    });

    it('should recalculate delivery time from the current booking details', () => {
        const event_date = new Date('2026-04-01T09:00:00').valueOf();
        const updated_date = new Date('2026-04-01T10:00:00').valueOf();
        const order = new CateringOrder({
            id: 'order-1',
            caterer: 'Cafe',
            items: [
                new CateringItem({
                    id: 'coffee',
                    name: 'Coffee',
                    caterer: 'Cafe',
                    quantity: 1,
                }),
            ],
            event: { date: event_date } as any,
            deliver_offset: 30,
        });

        spectator.setInput('options', {
            date: updated_date,
            duration: 60,
            resources: [room],
        });
        spectator.component.writeValue([order]);

        expect(spectator.component.orders()[0].deliver_at).toBe(
            addMinutes(updated_date, 30).valueOf(),
        );
    });

    it('should assign the selected room to a new order', () => {
        spectator.setInput('options', {
            date: Date.now(),
            duration: 60,
            resources: [room, second_room],
        });
        dialog_result = [
            new CateringItem({
                id: 'coffee',
                caterer: 'Cafe',
                quantity: 1,
            }),
        ];

        spectator.component.addOrder(second_room);

        expect(spectator.component.orders()[0].system_id).toBe('room-2');
        expect(
            spectator.inject(CateringOrderStateService).setOptions,
        ).toHaveBeenCalledWith({
            building: 'building-1',
            zone: 'building-1',
        });
    });

    it('should auto-assign the only room to a new order', () => {
        settings_service.get.mockImplementation(
            (key: string) => key === 'app.events.multiple_spaces',
        );
        dialog_result = [
            new CateringItem({
                id: 'coffee',
                caterer: 'Cafe',
                quantity: 1,
            }),
        ];

        spectator.component.addOrder();

        expect(spectator.component.orders()[0].system_id).toBe('room-1');
        expect(spectator.component.requires_room_selection()).toBe(false);
    });

    it('should auto-assign the selected room when multiple spaces are disabled', () => {
        spectator.setInput('options', {
            date: Date.now(),
            duration: 60,
            resources: [room, second_room],
        });
        dialog_result = [
            new CateringItem({
                id: 'coffee',
                caterer: 'Cafe',
                quantity: 1,
            }),
        ];

        spectator.component.addOrder();

        expect(spectator.component.orders()[0].system_id).toBe('room-1');
        expect(spectator.component.requires_room_selection()).toBe(false);
    });

    it('should require room selection for a multi-room booking', () => {
        settings_service.get.mockImplementation(
            (key: string) => key === 'app.events.multiple_spaces',
        );
        spectator.setInput('options', {
            date: Date.now(),
            duration: 60,
            resources: [room, second_room],
        });

        spectator.component.addOrder();

        expect(spectator.component.orders()).toEqual([]);
        expect(open_dialog).not.toHaveBeenCalled();
        expect(spectator.component.requires_room_selection()).toBe(true);
    });

    it('should keep the assigned room when duplicating an order', () => {
        const order = new CateringOrder({
            id: 'order-1',
            system_id: 'room-2',
            caterer: 'Cafe',
            items: [
                new CateringItem({
                    id: 'coffee',
                    caterer: 'Cafe',
                    quantity: 1,
                }),
            ],
        });
        spectator.component.setValue([order]);

        spectator.component.duplicateOrder(order);

        expect(spectator.component.orders()).toHaveLength(2);
        expect(spectator.component.orders()[1].system_id).toBe('room-2');
    });

    it('should remove an order when its room is removed', () => {
        spectator.setInput('options', {
            date: Date.now(),
            duration: 60,
            resources: [room, second_room],
        });
        spectator.component.writeValue([
            new CateringOrder({
                id: 'order-1',
                system_id: 'room-2',
                caterer: 'Cafe',
                items: [
                    new CateringItem({
                        id: 'coffee',
                        caterer: 'Cafe',
                        quantity: 1,
                    }),
                ],
            }),
        ]);

        spectator.setInput('options', {
            date: Date.now(),
            duration: 60,
            resources: [room],
        });

        expect(spectator.component.orders()).toEqual([]);
    });
});
