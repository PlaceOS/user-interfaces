import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import {
    CateringItem,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockComponent, MockProvider } from 'ng-mocks';
import { CateringItemDetailsComponent } from '../../lib/catering-order-modal/catering-item-details.component';
import { CateringItemFiltersComponent } from '../../lib/catering-order-modal/catering-item-filters.component';
import { CateringItemListComponent } from '../../lib/catering-order-modal/catering-item-list.component';
import { CateringOrderStateService } from '../../lib/catering-order-modal/catering-order-state.service';
import { NewCateringOrderModalComponent } from '../../lib/catering-order-modal/new-catering-order-modal.component';

describe('NewCateringOrderModalComponent', () => {
    let spectator: Spectator<NewCateringOrderModalComponent>;
    const createComponent = createRoutingFactory({
        component: NewCateringOrderModalComponent,
        providers: [
            MockProvider(SettingsService, createSettingsServiceMock()),
            MockProvider(MAT_DIALOG_DATA, { details: {} }),
            MockProvider(OrganisationService, {}),
            MockProvider(CateringOrderStateService, {}),
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(CateringItemDetailsComponent),
            MockComponent(CateringItemFiltersComponent),
            MockComponent(CateringItemListComponent),
        ],
        imports: [MatDialogModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show catering item list', () => {
        expect('catering-item-list').toExist();
    });

    it('should show catering item filters', () => {
        expect('catering-item-filters').toExist();
    });

    it('should show catering item details', () => {
        expect('catering-item-details').toExist();
    });

    it('should allow setting selected catering items', () => {
        spectator.component.setSelected(new CateringItem({ id: '1' }), true);
        expect(spectator.component.selected).toHaveLength(1);
        spectator.component.setSelected(spectator.component.selected[0], false);
        expect(spectator.component.selected).toHaveLength(0);
    });

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

    it('should allow toggling favourites', () => {
        const settings = spectator.inject(SettingsService);
        (settings.get as any).mockImplementation(() => []);
        spectator.component.toggleFavourite({ id: '1' } as any);
        expect(settings.saveUserSetting).toHaveBeenCalledWith(
            'favourite_menu_items',
            ['1'],
        );
        (settings.get as any).mockImplementation(() => ['1']);
        spectator.component.toggleFavourite({ id: '1' } as any);
        expect(settings.saveUserSetting).toHaveBeenCalledWith(
            'favourite_menu_items',
            [],
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
