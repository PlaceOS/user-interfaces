import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CateringItem, OrderCateringItem } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { CounterComponent } from 'libs/form-fields/src/lib/counter.component';
import { MockComponent } from 'ng-mocks';

import { CateringItemDetailsComponent } from '../../lib/catering-select-modal/catering-item-details.component';

const makeItem = (data: Partial<CateringItem> = {}): OrderCateringItem =>
    new CateringItem(data) as OrderCateringItem;

describe('CateringItemDetailsComponent', () => {
    let spectator: Spectator<CateringItemDetailsComponent>;
    const createComponent = createComponentFactory({
        component: CateringItemDetailsComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(CounterComponent),
            MockComponent(ImageCarouselComponent),
        ],
        imports: [MatRippleModule, MatCheckboxModule, MatRadioModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show an empty state when no item is provided', () => {
        expect(spectator.query('[empty]')).toBeTruthy();
        expect(spectator.query('[image]')).toBeFalsy();
    });

    it('should build option groups from the item on change', () => {
        spectator.setInput({
            item: makeItem({
                id: '1',
                options: [
                    {
                        id: 'milk',
                        name: 'Milk',
                        group: 'Dairy',
                        multiple: false,
                        unit_price: 0,
                    },
                    {
                        id: 'oat',
                        name: 'Oat',
                        group: 'Dairy',
                        multiple: false,
                        unit_price: 0,
                    },
                    {
                        id: 'sprinkles',
                        name: 'Sprinkles',
                        group: 'Toppings',
                        multiple: true,
                        unit_price: 50,
                    },
                ],
            }),
        });
        spectator.detectChanges();
        const groups = spectator.component.groups();
        expect(groups.map((g) => g.name)).toEqual(['Dairy', 'Toppings']);
        expect(groups.find((g) => g.name === 'Dairy')?.multiple).toBe(false);
        expect(groups.find((g) => g.name === 'Toppings')?.multiple).toBe(true);
        expect(groups.find((g) => g.name === 'Dairy')?.options).toHaveLength(2);
    });

    it('should group ungrouped options under Other', () => {
        spectator.setInput({
            item: makeItem({
                id: '1',
                options: [
                    {
                        id: 'x',
                        name: 'X',
                        group: '',
                        multiple: false,
                        unit_price: 0,
                    },
                ],
            }),
        });
        spectator.detectChanges();
        expect(spectator.component.groups()[0].name).toBe('Other');
    });

    it('should default quantity to 1 when unset', () => {
        const item = makeItem({ id: '1', quantity: 0 });
        spectator.setInput({ item });
        spectator.detectChanges();
        expect(item.quantity).toBe(1);
    });

    it('should pre-select active options from the item option list', () => {
        spectator.setInput({
            item: makeItem({
                id: '1',
                options: [
                    {
                        id: 'milk',
                        name: 'Milk',
                        group: 'Dairy',
                        multiple: false,
                        unit_price: 0,
                        active: true,
                    },
                ],
            }),
        });
        spectator.detectChanges();
        expect(spectator.component.option_state()['milk']).toBe(true);
        expect(spectator.component.group_state()['Dairy']).toBe('milk');
    });

    it('should update a single-select group and mark the chosen option active', () => {
        const item = makeItem({
            id: '1',
            options: [
                {
                    id: 'milk',
                    name: 'Milk',
                    group: 'Dairy',
                    multiple: false,
                    unit_price: 0,
                },
                {
                    id: 'oat',
                    name: 'Oat',
                    group: 'Dairy',
                    multiple: false,
                    unit_price: 0,
                },
            ],
        });
        spectator.setInput({ item });
        spectator.detectChanges();
        const group = spectator.component.groups()[0];
        spectator.component.updateGroupOption(group, 'oat');
        expect(spectator.component.group_state()['Dairy']).toBe('oat');
        expect(item.options.find((o) => o.id === 'oat')?.active).toBe(true);
        expect(item.options.find((o) => o.id === 'milk')?.active).toBe(false);
    });

    it('should ignore group updates without a group', () => {
        expect(() =>
            spectator.component.updateGroupOption(undefined as any, 'x'),
        ).not.toThrow();
        expect(spectator.component.group_state()).toEqual({});
    });

    it('should toggle checked state for multi-select options', () => {
        const item = makeItem({
            id: '1',
            options: [
                {
                    id: 'sprinkles',
                    name: 'Sprinkles',
                    group: 'Toppings',
                    multiple: true,
                    unit_price: 50,
                },
            ],
        });
        spectator.setInput({ item });
        spectator.detectChanges();
        spectator.component.updateCheckedState('sprinkles', true);
        expect(spectator.component.option_state()['sprinkles']).toBe(true);
        expect(item.options[0].active).toBe(true);
        spectator.component.updateCheckedState('sprinkles', false);
        expect(spectator.component.option_state()['sprinkles']).toBe(false);
        expect(item.options[0].active).toBe(false);
    });

    it('should emit toggleFav and close outputs', () => {
        const fav = vi.fn();
        const close = vi.fn();
        spectator.component.toggleFav.subscribe(fav);
        spectator.component.close.subscribe(close);
        spectator.setInput({ item: makeItem({ id: '1' }) });
        spectator.detectChanges();
        spectator.click('button[name="close-catering-item-details"]');
        spectator.click(
            'button[name="toggle-catering-item-favourite-details"]',
        );
        expect(close).toHaveBeenCalled();
        expect(fav).toHaveBeenCalled();
    });
});
