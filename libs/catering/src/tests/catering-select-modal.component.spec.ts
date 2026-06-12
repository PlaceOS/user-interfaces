import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import {
    CateringItem,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockProvider } from 'ng-mocks';

import { CateringOrderStateService } from '../lib/catering-order-modal/catering-order-state.service';
import { CateringItemDetailsComponent } from '../lib/catering-select-modal/catering-item-details.component';
import { CateringItemFiltersComponent } from '../lib/catering-select-modal/catering-item-filters.component';
import { CateringItemListComponent } from '../lib/catering-select-modal/catering-item-list.component';
import { CateringSelectModalComponent } from '../lib/catering-select-modal/catering-select-modal.component';

describe('CateringSelectModalComponent', () => {
    let spectator: Spectator<CateringSelectModalComponent>;
    const createComponent = createRoutingFactory({
        component: CateringSelectModalComponent,
        providers: [
            MockProvider(SettingsService as any, createSettingsServiceMock()),
            MockProvider(MAT_DIALOG_DATA, { details: {} }),
            MockProvider(OrganisationService as any, {}),
            MockProvider(CateringOrderStateService, {}),
        ],
        declarations: [
            MockComponent(CateringItemDetailsComponent),
            MockComponent(CateringItemFiltersComponent),
            MockComponent(CateringItemListComponent),
        ],
        imports: [MatDialogModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should treat different option selections as separate items', () => {
        const item = new CateringItem({ id: '1' });
        const variant = new CateringItem({
            id: '1',
            options: [
                {
                    id: 'milk',
                    name: 'Milk',
                    group: 'Extras',
                    multiple: false,
                    active: true,
                    unit_price: 100,
                },
            ],
        });
        spectator.component.setSelected(item, true);
        expect(spectator.component.selected_keys).toContain(
            spectator.component.selectionKey(item),
        );
        expect(spectator.component.selected_keys).not.toContain(
            spectator.component.selectionKey(variant),
        );
        spectator.component.setSelected(variant, true);
        expect(spectator.component.selected).toHaveLength(2);
    });

    it('should stop treating an item as selected when options change', () => {
        const item = new CateringItem({
            id: '1',
            options: [
                {
                    id: 'milk',
                    name: 'Milk',
                    group: 'Extras',
                    multiple: false,
                    active: false,
                    unit_price: 100,
                },
            ],
        });
        spectator.component.setSelected(item, true);
        expect(spectator.component.selected_keys).toContain(
            spectator.component.selectionKey(item),
        );
        item.options[0].active = true;
        expect(spectator.component.selected_keys).not.toContain(
            spectator.component.selectionKey(item),
        );
    });

    it('should reset the menu item and show the ordered item after adding it', () => {
        const item = new CateringItem({
            id: '1',
            quantity: 3,
            options: [
                {
                    id: 'milk',
                    name: 'Milk',
                    group: 'Extras',
                    multiple: false,
                    active: true,
                    unit_price: 100,
                },
            ],
        });
        spectator.component.displayed = item;
        spectator.component.setSelected(item, true);
        expect(spectator.component.displayed).not.toBe(item);
        expect(spectator.component.displayed?.in_order).toBe(true);
        expect(spectator.component.displayed?.quantity).toBe(3);
        expect(item.in_order).toBe(false);
        expect(item.quantity).toBe(1);
        expect(item.options[0].active).toBeUndefined();
    });

    it('should reset draft quantity before adding the same menu item again', () => {
        const item = new CateringItem({ id: '1', quantity: 2 });
        spectator.component.setSelected(item, true);
        spectator.component.setSelected(item, true);
        expect(spectator.component.selected).toHaveLength(1);
        expect(spectator.component.selected[0].quantity).toBe(3);
        expect(item.quantity).toBe(1);
    });

    it('should clear displayed item when removing the selected ordered item', () => {
        const item = new CateringItem({ id: '1', quantity: 1, in_order: true });
        spectator.component.selected = [item];
        spectator.component.displayed = item;
        spectator.component.setSelected(item, false);
        expect(spectator.component.displayed).toBeNull();
        expect(spectator.component.selected).toHaveLength(0);
    });

    it('should bind delivery settings into the filter component', () => {
        spectator.component.exact_time = true;
        spectator.component.offset = 45;
        spectator.component.offset_day = 1;
        spectator.detectChanges();

        const filters = spectator.query(
            CateringItemFiltersComponent as any,
        ) as any;
        expect(filters.at_time).toBe(true);
        expect(filters.offset).toBe(45);
        expect(filters.offset_day).toBe(1);
    });

    it('should keep an ordered item in place when updating its quantity', () => {
        const first = new CateringItem({
            id: '1',
            quantity: 1,
            in_order: true,
        });
        const second = new CateringItem({
            id: '2',
            quantity: 2,
            in_order: true,
        });
        const third = new CateringItem({
            id: '3',
            quantity: 1,
            in_order: true,
        });
        spectator.component.selected = [first, second, third];
        spectator.component.displayed = second;

        spectator.component.setSelected(
            new CateringItem({ ...second, quantity: 5, in_order: true }),
            true,
        );

        expect(spectator.component.selected.map((item) => item.id)).toEqual([
            '1',
            '2',
            '3',
        ]);
        expect(spectator.component.selected[1].quantity).toBe(5);
        expect(spectator.component.displayed?.id).toBe('2');
    });
});
