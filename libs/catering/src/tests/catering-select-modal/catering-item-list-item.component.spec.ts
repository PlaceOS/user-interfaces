import { MatRippleModule } from '@angular/material/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CateringItem } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockComponent, MockDirective } from 'ng-mocks';

import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { CateringItemListItemComponent } from '../../lib/catering-select-modal/catering-item-list-item.component';

describe('CateringItemListItemComponent', () => {
    let spectator: Spectator<CateringItemListItemComponent>;
    const createComponent = createComponentFactory({
        component: CateringItemListItemComponent,
        declarations: [
            MockComponent(IconComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
        imports: [MatRippleModule],
    });

    beforeEach(
        () =>
            (spectator = createComponent({
                props: {
                    item: new CateringItem({ id: '1', name: 'Coffee' }),
                } as any,
            })),
    );

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should render the item name and category', () => {
        spectator.setInput({
            item: new CateringItem({
                id: '1',
                name: 'Latte',
                category: 'Drinks',
            }),
        });
        spectator.detectChanges();
        expect(spectator.query('button[name="select-catering-item"]')).toContainText(
            'Latte',
        );
        expect(
            spectator.query('button[name="select-catering-item"]'),
        ).toContainText('Drinks');
    });

    it('should emit select when the item is clicked', () => {
        const spy = jest.fn();
        spectator.component.select.subscribe(spy);
        spectator.click('button[name="select-catering-item"]');
        expect(spy).toHaveBeenCalled();
    });

    it('should emit toggleFav when the favourite button is clicked', () => {
        const spy = jest.fn();
        spectator.component.toggleFav.subscribe(spy);
        spectator.click('button[name="toggle-catering-item-favourite"]');
        expect(spy).toHaveBeenCalled();
    });

    it('should only show the quantity badge when counting is enabled', () => {
        spectator.setInput({
            item: new CateringItem({ id: '1', quantity: 4 }),
            show_count: false,
        });
        spectator.detectChanges();
        expect(spectator.query('button[name="select-catering-item"] .rounded-full')).toBeFalsy();
        spectator.setInput({ show_count: true });
        spectator.detectChanges();
        const badge = spectator.query(
            'button[name="select-catering-item"] .rounded-full',
        );
        expect(badge).toBeTruthy();
        expect(badge).toContainText('4');
    });

    it('should join option list names for display', () => {
        spectator.setInput({
            item: new CateringItem({
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
                    {
                        id: 'sugar',
                        name: 'Sugar',
                        group: 'Extras',
                        multiple: false,
                        unit_price: 0,
                        active: true,
                    },
                ],
            }),
        });
        spectator.detectChanges();
        expect(spectator.component.options()).toBe('Milk, Sugar');
    });

    it('should render dietary tag badges', () => {
        spectator.setInput({
            item: new CateringItem({
                id: '1',
                tags: ['Vegan', 'Gluten Free', 'Contains Nuts'],
            }),
        });
        spectator.detectChanges();
        const text = spectator.query(
            'button[name="select-catering-item"]',
        )?.textContent;
        expect(text).toContain('VG');
        expect(text).toContain('GF');
        expect(text).toContain('N');
    });

    it('should highlight the favourite button when marked as favourite', () => {
        spectator.setInput({ favourite: true });
        spectator.detectChanges();
        expect(
            spectator.query('button[name="toggle-catering-item-favourite"]'),
        ).toHaveClass('text-info');
    });
});
