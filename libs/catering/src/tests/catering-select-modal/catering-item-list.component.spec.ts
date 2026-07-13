import { signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CateringItem } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import { CateringOrderStateService } from '../../lib/catering-order-modal/catering-order-state.service';
import { CateringItemListItemComponent } from '../../lib/catering-select-modal/catering-item-list-item.component';
import { CateringItemListComponent } from '../../lib/catering-select-modal/catering-item-list.component';

describe('CateringItemListComponent', () => {
    let spectator: Spectator<CateringItemListComponent>;
    const loading = signal('');
    const filtered_menu = signal<CateringItem[]>([]);
    const createComponent = createComponentFactory({
        component: CateringItemListComponent,
        declarations: [MockComponent(CateringItemListItemComponent)],
        providers: [
            MockProvider(CateringOrderStateService, {
                loading,
                filtered_menu,
                currency_code: 'AUD',
            } as any),
        ],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => {
        loading.set('');
        filtered_menu.set([]);
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should expose the currency code from state', () => {
        expect(spectator.component.code()).toBe('AUD');
    });

    it('should determine favourite state from the favorites input', () => {
        spectator.setInput({ favorites: ['a', 'b'] });
        expect(spectator.component.isFavourite('a')).toBe(true);
        expect(spectator.component.isFavourite('c')).toBe(false);
    });

    it('should mark an item active when its custom id matches', () => {
        const item = new CateringItem({ id: '1' });
        spectator.setInput({ active: item.custom_id });
        expect(spectator.component.isActive(item)).toBe(true);
        expect(
            spectator.component.isActive(new CateringItem({ id: '2' })),
        ).toBe(false);
    });

    it('should emit selected item and clear option active state', () => {
        const spy = vi.fn();
        spectator.component.onSelect.subscribe(spy);
        const item = new CateringItem({
            id: '1',
            options: [
                {
                    id: 'milk',
                    name: 'Milk',
                    group: 'Extras',
                    multiple: false,
                    unit_price: 0,
                    active: true,
                },
            ],
        });
        spectator.component.selectItem(item, true);
        expect(spy).toHaveBeenCalledWith(item);
        expect(item.options[0].active).toBeUndefined();
    });

    it('should keep option state when clear flag is not set', () => {
        const item = new CateringItem({
            id: '1',
            options: [
                {
                    id: 'milk',
                    name: 'Milk',
                    group: 'Extras',
                    multiple: false,
                    unit_price: 0,
                    active: true,
                },
            ],
        });
        spectator.component.selectItem(item, false);
        expect(item.options[0].active).toBe(true);
    });

    it('should show the selected header and menu items', () => {
        filtered_menu.set([new CateringItem({ id: '1', name: 'Cake' })]);
        spectator.setInput({
            selected_items: [new CateringItem({ id: '2', name: 'Tea' })],
        });
        spectator.detectChanges();
        expect(spectator.queryAll('catering-item-list-item').length).toBe(2);
        expect(spectator.query('[count]')).toBeTruthy();
    });

    it('should show a loading spinner while menu is loading', () => {
        loading.set('[MENU]');
        spectator.detectChanges();
        expect(spectator.query('[loading] mat-spinner')).toBeTruthy();
    });

    it('should show an empty state when no items and not loading', () => {
        loading.set('');
        filtered_menu.set([]);
        spectator.detectChanges();
        expect(spectator.query('[empty]')).toBeTruthy();
    });
});
