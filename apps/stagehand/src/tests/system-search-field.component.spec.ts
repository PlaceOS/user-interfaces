import { signal } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { PlaceSystem, querySystems } from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import { SystemSearchFieldComponent } from '../app/dashboards/system-search-field.component';
import { GroupScope, groupScope } from '../app/support-groups';
import { SupportGroupsService } from '../app/support-groups.service';

vi.mock('@placeos/ts-client', { spy: true });

function makeSystem(data: Partial<PlaceSystem>): PlaceSystem {
    return new PlaceSystem(data);
}

const zone = (id: string, parent_id = '', tags: string[] = []) =>
    ({ id, parent_id, tags, name: id }) as any;

describe('SystemSearchFieldComponent', () => {
    let spectator: Spectator<SystemSearchFieldComponent>;
    let component: SystemSearchFieldComponent;
    const group_id = signal('');
    const scope = signal<GroupScope | null>(null);

    const create_component = createComponentFactory({
        component: SystemSearchFieldComponent,
        imports: [NoopAnimationsModule],
        detectChanges: false,
        providers: [
            MockProvider(SupportGroupsService, { group_id, scope } as any),
        ],
    });

    /** Type a search and wait out the debounce and the query */
    async function search(text: string) {
        // init clears the search after 300ms, so let it run first
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(300);
        component.search_str.set(text);
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(400);
    }

    beforeEach(() => {
        vi.useFakeTimers();
        vi.clearAllMocks();
        group_id.set('');
        scope.set(null);
        vi.mocked(querySystems).mockResolvedValue({ data: [] } as any);
        spectator = create_component();
        component = spectator.component;
    });

    afterEach(() => {
        vi.clearAllTimers();
        vi.useRealTimers();
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
        const on_change = vi.fn();
        component.registerOnChange(on_change);
        const item = makeSystem({ id: 'sys-1', name: 'Boardroom' });

        component.setValue(item);

        expect(component.active_item()).toBe(item);
        expect(component.search_str()).toBe('Boardroom');
        expect(on_change).toHaveBeenCalledWith(item);
    });

    it('should show the name of the control value written from the form', () => {
        const item = makeSystem({ id: 'sys-9', name: 'Kitchen' });
        component.writeValue(item);
        vi.advanceTimersByTime(50);
        expect(component.active_item()).toBe(item);
        expect(component.search_str()).toBe('Kitchen');
    });

    it('should filter loaded results by the current search string', async () => {
        spectator.setInput(
            'query_fn',
            vi
                .fn()
                .mockResolvedValue([
                    makeSystem({ id: 'sys-1', name: 'Meeting Room' }),
                    makeSystem({ id: 'sys-2', name: 'Lobby' }),
                ]),
        );

        await search('meeting');

        expect(component.item_list().map((_) => _.name)).toEqual([
            'Meeting Room',
        ]);
    });

    it('should drop results for a search the user has since changed', async () => {
        let resolve_old: (_: PlaceSystem[]) => void;
        const query_fn = vi
            .fn()
            .mockReturnValueOnce(new Promise((r) => (resolve_old = r)))
            .mockResolvedValue([]);
        spectator.setInput('query_fn', query_fn);

        await search('meeting');
        component.search_str.set('lobby');
        // matches the new search too, so only the stale check drops it
        resolve_old([makeSystem({ id: 'sys-1', name: 'Meeting Lobby' })]);
        await vi.advanceTimersByTimeAsync(0);

        expect(component.item_list()).toEqual([]);
    });

    it('should show system names as text, not markup', () => {
        component.item_list.set([
            makeSystem({ id: 'sys-1', name: '<img src="https://x.test/a">' }),
        ]);
        (component as any)._updateNameMap();
        spectator.detectChanges();
        spectator.click('input');
        spectator.detectChanges();

        const name = document.querySelector('mat-option [name]');
        expect(name?.textContent).toBe('<img src="https://x.test/a">');
        expect(name?.querySelector('img')).toBeNull();
    });

    describe('support groups', () => {
        const building = zone('bld-1', 'org-1', ['building']);
        const level = zone('lvl-1', 'bld-1', ['level']);
        const denied = zone('lvl-2', 'bld-1', ['level']);

        it("should search only the selected group's systems", async () => {
            group_id.set('group-1');
            // granted the building, denied its second level
            scope.set(groupScope([building, level], [building, denied]));
            vi.mocked(querySystems).mockResolvedValue({
                data: [
                    makeSystem({
                        id: 'in',
                        name: 'Room In',
                        zones: ['org-1', 'bld-1', 'lvl-1'],
                    }),
                    makeSystem({
                        id: 'denied',
                        name: 'Room Denied',
                        zones: ['org-1', 'bld-1', 'lvl-2'],
                    }),
                    makeSystem({
                        id: 'other',
                        name: 'Room Other',
                        zones: ['org-1', 'bld-9'],
                    }),
                ],
            } as any);

            await search('room');

            expect(querySystems).toHaveBeenCalledWith({
                q: 'room',
                group_id: 'group-1',
            });
            expect(component.item_list().map((_) => _.id)).toEqual(['in']);
        });

        it('should search every system for "All groups"', async () => {
            await search('room');
            expect(querySystems).toHaveBeenCalledWith({ q: 'room' });
        });

        it('should find nothing, without a query, for a user in no group', async () => {
            scope.set(groupScope([], []));
            await search('room');
            expect(querySystems).not.toHaveBeenCalled();
            expect(component.item_list()).toEqual([]);
        });
    });
});
