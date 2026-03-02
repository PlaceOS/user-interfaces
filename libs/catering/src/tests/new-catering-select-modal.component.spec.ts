import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import {
    CateringItem,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import { CateringOrderStateService } from '../lib/catering-order-modal/catering-order-state.service';
import { NewCateringItemDetailsComponent } from '../lib/new-catering-order-modal/new-catering-item-details.component';
import { NewCateringItemFiltersComponent } from '../lib/new-catering-order-modal/new-catering-item-filters.component';
import { NewCateringItemListComponent } from '../lib/new-catering-order-modal/new-catering-item-list.component';
import { NewCateringSelectModalComponent } from '../lib/new-catering-order-modal/new-catering-select-modal.component';

describe('NewCateringSelectModalComponent', () => {
    let spectator: Spectator<NewCateringSelectModalComponent>;
    const createComponent = createRoutingFactory({
        component: NewCateringSelectModalComponent,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(),
                saveUserSetting: jest.fn(),
            }),
            MockProvider(MAT_DIALOG_DATA, { details: {} }),
            MockProvider(OrganisationService, {}),
            MockProvider(CateringOrderStateService, {}),
        ],
        declarations: [
            MockComponent(NewCateringItemDetailsComponent),
            MockComponent(NewCateringItemFiltersComponent),
            MockComponent(NewCateringItemListComponent),
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
        expect(spectator.component.isSelected(item)).toBe(true);
        expect(spectator.component.isSelected(variant)).toBe(false);
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
        expect(spectator.component.isSelected(item)).toBe(true);
        item.options[0].active = true;
        expect(spectator.component.isSelected(item)).toBe(false);
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
});
