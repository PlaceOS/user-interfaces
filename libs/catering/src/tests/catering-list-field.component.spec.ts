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
} from '@placeos/common';
import { CateringListFieldComponent } from '../lib/catering-list-field.component';
import { createSettingsServiceMock } from '@placeos/common/tests';

describe('CateringListFieldComponent', () => {
    let spectator: Spectator<CateringListFieldComponent>;
    let dialog_result: CateringItem[] | undefined;
    const open_dialog = vi.fn(() => ({
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
            MockProvider(SettingsService, createSettingsServiceMock()),
            MockProvider(OrganisationService, {
                currency_code: 'USD',
                active_building: signal(null) as any,
            }),
            MockProvider(LocaleService, {
                get: vi.fn((value: string) => value),
            }),
        ],
    });

    beforeEach(() => {
        dialog_result = undefined;
        spectator = createComponent();
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

        spectator.setInput('options', { date: updated_date, duration: 60 });
        spectator.component.writeValue([order]);

        expect(spectator.component.orders()[0].deliver_at).toBe(
            addMinutes(updated_date, 30).valueOf(),
        );
    });
});
