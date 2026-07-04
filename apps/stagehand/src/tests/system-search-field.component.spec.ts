import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { PlaceSystem } from '@placeos/ts-client';

import { SystemSearchFieldComponent } from '../app/dashboards/system-search-field.component';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        querySystems: jest.fn(async () => ({ data: [] })),
    };
});

function makeSystem(data: Partial<PlaceSystem>): PlaceSystem {
    return new PlaceSystem(data as any);
}

describe('SystemSearchFieldComponent', () => {
    let spectator: Spectator<SystemSearchFieldComponent>;
    let component: SystemSearchFieldComponent;

    const create_component = createComponentFactory({
        component: SystemSearchFieldComponent,
        imports: [NoopAnimationsModule],
        detectChanges: false,
    });

    beforeEach(() => {
        spectator = create_component();
        component = spectator.component;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should prefer the provided options over the loaded item list', () => {
        const options = [makeSystem({ id: 'sys-1', name: 'Provided' })];
        spectator.setInput('options', options);
        component.item_list.set([makeSystem({ id: 'sys-2', name: 'Loaded' })]);
        expect(component.items).toBe(options);
    });

    it('should fall back to the loaded item list when no options given', () => {
        const loaded = [makeSystem({ id: 'sys-2', name: 'Loaded' })];
        component.item_list.set(loaded);
        expect(component.items).toBe(loaded);
    });

    it('should exclude items that do not match by name, email or description', () => {
        const exclude = component.exclude();
        const match = makeSystem({ id: 's', name: 'Meeting Room', email: '' });
        const miss = makeSystem({ id: 's', name: 'Lobby', email: '' });
        // exclude returns true when the item should be filtered out
        expect(exclude(match, 'meeting')).toBe(false);
        expect(exclude(miss, 'meeting')).toBe(true);
    });

    it('should update the value and notify the change handler on selection', () => {
        const on_change = jest.fn();
        component.registerOnChange(on_change);
        const item = makeSystem({ id: 'sys-1', name: 'Boardroom' });

        component.setValue(item);

        expect(component.active_item()).toBe(item);
        expect(component.search_str()).toBe('Boardroom');
        expect(on_change).toHaveBeenCalledWith(item);
    });

    it('should adopt the control value written from the form', () => {
        const item = makeSystem({ id: 'sys-9', name: 'Kitchen' });
        component.writeValue(item);
        expect(component.active_item()).toBe(item);
    });

    it('should filter loaded results by the current search string', async () => {
        const query_fn = jest
            .fn()
            .mockResolvedValue([
                makeSystem({ id: 'sys-1', name: 'Meeting Room' }),
                makeSystem({ id: 'sys-2', name: 'Lobby' }),
            ]);
        spectator.setInput('query_fn', query_fn as any);
        component.search_str.set('meeting');

        await (component as any)._loadSearchResults('meeting');

        const names = component.item_list().map((_) => _.name);
        expect(names).toEqual(['Meeting Room']);
    });

    it('should skip the server query when below the minimum length', async () => {
        const query_fn = jest.fn().mockResolvedValue([]);
        spectator.setInput('query_fn', query_fn as any);
        spectator.setInput('minLength', 3);
        component.search_str.set('me');

        await (component as any)._loadSearchResults('me');

        expect(query_fn).not.toHaveBeenCalled();
        expect(component.item_list()).toEqual([]);
    });
});
