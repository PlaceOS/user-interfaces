import { registerMockEndpoint } from '@placeos/ts-client';

import { registerMockSignage } from '../lib/api/signage.mock';

vi.mock('@placeos/ts-client');

const API = '/api/engine/v2/signage';

describe('registerMockSignage', () => {
    /** Callback registered for the given method + path */
    function handler(method: string, path: string) {
        const match = vi
            .mocked(registerMockEndpoint)
            .mock.calls.map(([options]) => options)
            .find((o) => o.method === method && o.path === path);
        if (!match) throw new Error(`No handler for ${method} ${path}`);
        return (req: Record<string, unknown>) =>
            match.callback({
                route_params: {},
                query_params: {},
                ...req,
            } as never) as any;
    }

    const createMedia = (name: string): string =>
        handler('POST', `${API}/media`)({ body: { name } }).id;
    /** Make a playlist that shows the media, in order */
    const createPlaylist = (media: string[]) => {
        const id: string = handler(
            'POST',
            `${API}/playlists`,
        )({
            body: { name: 'Test playlist' },
        }).id;
        setMedia(id, media);
        return id;
    };
    const setMedia = (id: string, media: string[]) =>
        handler(
            'POST',
            `${API}/playlists/:id/media`,
        )({
            route_params: { id },
            body: media,
        });
    const playlistMedia = (id: string) =>
        handler('GET', `${API}/playlists/:id/media`)({ route_params: { id } });

    beforeAll(() => {
        vi.mocked(registerMockEndpoint).mockClear();
        registerMockSignage();
    });

    // Write requests save the signage data to the mock session
    afterEach(() => localStorage.clear());

    it('should keep the schedules of media that stay in a playlist', () => {
        const [first, second] = [createMedia('First'), createMedia('Second')];
        const playlist = createPlaylist([first, second]);
        const item_id = playlistMedia(playlist).schedules[0].id;
        const schedules = [{ start: 1, end: 2 }];
        handler(
            'PATCH',
            `${API}/playlists/:id/media/schedule/:item_id`,
        )({
            route_params: { id: playlist, item_id },
            body: { schedules },
        });

        const result = setMedia(playlist, [second, first]);

        expect(result.items).toEqual([second, first]);
        expect(result.schedules).toEqual([
            expect.objectContaining({ item_id: second, schedules: [] }),
            { id: item_id, item_id: first, schedules },
        ]);
    });

    it('should remove deleted media from every playlist', () => {
        const [kept, removed] = [createMedia('Kept'), createMedia('Removed')];
        const playlists = [
            createPlaylist([kept, removed]),
            createPlaylist([removed]),
        ];

        handler(
            'DELETE',
            `${API}/media/:id`,
        )({ route_params: { id: removed } });

        expect(playlists.map((id) => playlistMedia(id).items)).toEqual([
            [kept],
            [],
        ]);
    });

    it('should rename a tag without duplicate tags', () => {
        const id = handler(
            'POST',
            `${API}/media`,
        )({
            body: { name: 'Tagged', tags: ['old', 'new', 'other'] },
        }).id;

        handler(
            'PATCH',
            `${API}/media/tags`,
        )({
            query_params: { current_tag: 'old', new_tag: 'new' },
        });

        expect(
            handler('GET', `${API}/media/:id`)({ route_params: { id } }).tags,
        ).toEqual(['new', 'other']);
    });
});
