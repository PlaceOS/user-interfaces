import { registerMockEndpoint as registerEndpoint } from '@placeos/ts-client';

import {
    markChanged,
    persist,
    persistById,
    registerMockEndpoint,
    saveMockSession,
    startMockSession,
    whenSaved,
} from '../lib/session';

vi.mock('@placeos/ts-client');

/** Callback that the session wrapper handed to ts-client for `path` */
const lastCallback = () =>
    vi.mocked(registerEndpoint).mock.calls.at(-1)[0].callback;

describe('mock session', () => {
    beforeEach(() => localStorage.clear());

    it('should restore saved data into the same array', () => {
        localStorage.setItem('PLACEOS.mock.items', '[{"id":"saved"}]');
        const items = [{ id: 'initial' }];

        expect(persist('items', items)).toBe(items);
        expect(items).toEqual([{ id: 'saved' }]);
    });

    it('should save data after a write request, but not after a read', () => {
        const items: { id: string }[] = [];
        persist('writes', items);

        registerMockEndpoint({
            path: '/items',
            method: 'GET',
            callback: () => items.push({ id: 'read' }),
        });
        lastCallback()({} as never);
        expect(localStorage.getItem('PLACEOS.mock.writes')).toBeNull();

        registerMockEndpoint({
            path: '/items',
            method: 'POST',
            callback: () => items.push({ id: 'written' }),
        });
        lastCallback()({} as never);
        expect(JSON.parse(localStorage.getItem('PLACEOS.mock.writes'))).toEqual(
            [{ id: 'read' }, { id: 'written' }],
        );
    });

    it('should keep only changed items of a large list', () => {
        const generate = () => [
            { id: 1, name: 'One' },
            { id: 2, name: 'Two' },
            { id: 3, name: 'Three' },
        ];
        const list = persistById('large', generate());
        registerMockEndpoint({
            path: '/items/:id',
            method: 'PATCH',
            callback: ({ route_params }) => {
                const item = list.find((i) => `${i.id}` === route_params.id);
                item.name = 'Changed';
                return item;
            },
        });
        lastCallback()({ route_params: { id: '2' } } as never);
        list.splice(0, 1);
        list.push({ id: 4, name: 'Four' });
        saveMockSession();

        expect(JSON.parse(localStorage.getItem('PLACEOS.mock.large'))).toEqual({
            changed: [
                { id: 2, name: 'Changed' },
                { id: 4, name: 'Four' },
            ],
            removed: ['1'],
        });
        // A reload generates the list again, then applies the changes
        expect(persistById('large', generate())).toEqual([
            { id: 2, name: 'Changed' },
            { id: 3, name: 'Three' },
            { id: 4, name: 'Four' },
        ]);
    });

    it('should apply a change that another tab saves', () => {
        startMockSession();
        const items = persist('shared', [{ id: 'mine' }]);
        const onLoad = vi.fn();
        const user = persist('shared-user', { name: 'Old' }, { onLoad });

        window.dispatchEvent(
            new StorageEvent('storage', {
                key: 'PLACEOS.mock.shared',
                newValue: '[{"id":"theirs"}]',
            }),
        );
        window.dispatchEvent(
            new StorageEvent('storage', {
                key: 'PLACEOS.mock.shared-user',
                newValue: '{"name":"New"}',
            }),
        );

        expect(items).toEqual([{ id: 'theirs' }]);
        expect(user).toEqual({ name: 'New' });
        expect(onLoad).toHaveBeenCalledOnce();
    });

    it('should keep this tab and other tab changes of a large list', () => {
        startMockSession();
        const list = persistById('merged', [
            { id: 1, name: 'One' },
            { id: 2, name: 'Two' },
            { id: 3, name: 'Three' },
        ]);
        window.dispatchEvent(
            new StorageEvent('storage', {
                key: 'PLACEOS.mock.merged',
                newValue:
                    '{"changed":[{"id":2,"name":"Theirs"}],"removed":["1"]}',
            }),
        );
        // A mock module changes an item in place, then saves
        list[1].name = 'Mine';
        markChanged([3]);
        saveMockSession();

        // The last tab to save must not drop the other tab's changes
        expect(JSON.parse(localStorage.getItem('PLACEOS.mock.merged'))).toEqual(
            {
                changed: [
                    { id: 2, name: 'Theirs' },
                    { id: 3, name: 'Mine' },
                ],
                removed: ['1'],
            },
        );
    });

    it('should start a store when another tab saves it first', () => {
        startMockSession();
        const items: { id: string }[] = [];
        whenSaved('lazy', () => persist('lazy', items));

        // Browsers fire the event after the other tab writes the value
        localStorage.setItem('PLACEOS.mock.lazy', '[{"id":"theirs"}]');
        window.dispatchEvent(
            new StorageEvent('storage', {
                key: 'PLACEOS.mock.lazy',
                newValue: '[{"id":"theirs"}]',
            }),
        );

        expect(items).toEqual([{ id: 'theirs' }]);
    });

    it('should keep the initial data when the saved data is not valid', () => {
        localStorage.setItem('PLACEOS.mock.broken', '{not json');
        expect(persist('broken', [{ id: 'initial' }])).toEqual([
            { id: 'initial' },
        ]);
    });

    it('should not save a store that is too large, but save the others', () => {
        persist('huge', { data: 'x'.repeat(1_000_001) });
        persist('small', ['kept']);
        saveMockSession();

        // One large store must not use all the storage of the origin
        expect(localStorage.getItem('PLACEOS.mock.huge')).toBeNull();
        expect(localStorage.getItem('PLACEOS.mock.small')).toBe('["kept"]');
    });

    it('should remove mock data from an earlier browser session', () => {
        document.cookie = 'placeos_mock_session=1;max-age=0;path=/';
        localStorage.setItem('PLACEOS.mock.old', '[]');
        localStorage.setItem('other-app-key', 'kept');

        startMockSession();

        expect(localStorage.getItem('PLACEOS.mock.old')).toBeNull();
        expect(localStorage.getItem('other-app-key')).toBe('kept');
        // Later tabs in the same browser session keep the data
        localStorage.setItem('PLACEOS.mock.new', '[]');
        startMockSession();
        expect(localStorage.getItem('PLACEOS.mock.new')).toBe('[]');
    });
});
