import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { SearchOverlayComponent } from '../../app/signage/search-overlay.component';

describe('SearchOverlayComponent', () => {
    let spectator: Spectator<SearchOverlayComponent>;
    const createComponent = createComponentFactory({
        component: SearchOverlayComponent,
        detectChanges: false,
    });

    beforeEach(() => (spectator = createComponent()));

    it('should return the full list when no search term is set', () => {
        const list = [
            { id: '1', name: 'Alpha' },
            { id: '2', name: 'Beta' },
        ];
        spectator.setInput('item_list', list);

        expect(spectator.component.filtered_items()).toEqual(list);
    });

    it('should filter items by name case-insensitively', () => {
        spectator.setInput('item_list', [
            { id: '1', name: 'Alpha' },
            { id: '2', name: 'Beta' },
            { id: '3', name: 'Gamma' },
        ]);

        spectator.component.search.set('  BET ');

        expect(spectator.component.filtered_items()).toEqual([
            { id: '2', name: 'Beta' },
        ]);
    });

    it('should emit the selected item when a result is chosen', () => {
        const item = { id: '2', name: 'Beta' };
        spectator.setInput('item_list', [item]);
        const selected = jest.fn();
        spectator.component.selected.subscribe(selected);

        spectator.component.selected.emit(item);

        expect(selected).toHaveBeenCalledWith(item);
    });

    it('should tolerate a null item list', () => {
        spectator.setInput('item_list', null as any);
        spectator.component.search.set('abc');

        expect(spectator.component.filtered_items()).toEqual([]);
    });
});
