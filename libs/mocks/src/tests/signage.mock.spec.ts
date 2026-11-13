import { HashMap } from '@placeos/common';
import { MockHttpRequest, registerMockEndpoint } from '@placeos/ts-client';

import { registerMockSignage } from '../lib/api/signage.mock';
import { MOCK_STAFF } from '../lib/api/users.data';
import { endpoint } from './endpoints';

vi.mock('@placeos/ts-client');

const API = '/api/engine/v2/signage';

describe('registerMockSignage', () => {
    /** Handler for `method` and `path` of the signage mocks */
    const handler = (method: MockHttpRequest['method'], path: string) =>
        endpoint<HashMap>(method, path);

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
    describe('groups', () => {
        const GROUPS = '/api/engine/v2/groups';
        /** Clock time of the last group made, far from the fixture groups */
        let clock = Date.UTC(2099, 0, 1);
        /** Make a group. IDs come from the clock, so give each its own time */
        const createGroup = (body: HashMap) => {
            vi.setSystemTime(++clock);
            return handler('POST', GROUPS)({ body }).id as string;
        };
        const features = (id: string, subsystem?: string) =>
            handler(
                'GET',
                `${GROUPS}/:id/features`,
            )({
                route_params: { id },
                query_params: subsystem ? { subsystem } : {},
            });

        beforeEach(() => vi.useFakeTimers());
        afterEach(() => vi.useRealTimers());

        it('should merge the features of a group over those of its parents', () => {
            const parent = createGroup({
                name: 'Parent',
                features: { signage: { upload: true, approve: true } },
            });
            const child = createGroup({
                name: 'Child',
                parent_id: parent,
                features: { signage: { approve: false }, other: { x: 1 } },
            });

            expect(features(child)).toEqual({
                signage: { upload: true, approve: false },
                other: { x: 1 },
            });
            expect(features(child, 'signage')).toEqual({
                signage: { upload: true, approve: false },
            });
            expect(features(child, 'unknown')).toEqual({ unknown: {} });
            expect(() => features('not-a-group')).toThrow(
                expect.objectContaining({ status: 404 }),
            );
        });

        it('should stop at a loop in the parents of a group', () => {
            const first = createGroup({
                name: 'First',
                features: { signage: { a: 1 } },
            });
            const second = createGroup({
                name: 'Second',
                parent_id: first,
                features: { signage: { a: 2 } },
            });
            handler(
                'PATCH',
                `${GROUPS}/:id`,
            )({
                route_params: { id: first },
                body: { parent_id: second },
            });

            expect(features(second)).toEqual({ signage: { a: 2 } });
        });

        it('should give a new group user the group default permissions', () => {
            const group_id = createGroup({
                name: 'Defaults',
                default_permissions: 0x41,
            });
            const add = (body: HashMap) =>
                handler(
                    'POST',
                    '/api/engine/v2/group_users',
                )({
                    body: { user_id: MOCK_STAFF[2].email, group_id, ...body },
                });

            expect(add({})).toMatchObject({
                permissions: 0x41,
                user: MOCK_STAFF[2],
            });
            // Zero is a real permission value, not a missing one
            expect(add({ permissions: 0 }).permissions).toBe(0);
        });
    });

    describe('templates', () => {
        const TEMPLATES = `${API}/templates`;
        const MAPPINGS = `${API}/template_mappings`;
        const createTemplate = () =>
            handler('POST', TEMPLATES)({ body: { name: 'Template' } })
                .id as string;
        const mapTemplate = (template_id: string, zone_id: string) =>
            handler('POST', MAPPINGS)({ body: { template_id, zone_id } })
                .id as string;
        const ids = (items: HashMap[]) => items.map((item) => item.id);

        it('should list only approved templates when asked', () => {
            const approved = createTemplate();
            const draft = createTemplate();
            handler(
                'POST',
                `${TEMPLATES}/:id/approve`,
            )({
                route_params: { id: approved },
            });
            const list = (query_params: HashMap<string>) =>
                ids(endpoint<HashMap[]>('GET', TEMPLATES)({ query_params }));

            expect(list({ approved: 'true' })).toContain(approved);
            expect(list({ approved: 'true' })).not.toContain(draft);
            expect(list({})).toEqual(expect.arrayContaining([approved, draft]));
        });

        it('should remove the mappings of a deleted template only', () => {
            const removed = createTemplate();
            const kept = createTemplate();
            mapTemplate(removed, 'zone-template');
            const kept_mapping = mapTemplate(kept, 'zone-template');

            handler(
                'DELETE',
                `${TEMPLATES}/:id`,
            )({
                route_params: { id: removed },
            });

            const mappings = endpoint<HashMap[]>(
                'GET',
                MAPPINGS,
            )({
                query_params: { zone_id: 'zone-template' },
            });
            expect(ids(mappings)).toEqual([kept_mapping]);
        });
    });

    describe('image generation', () => {
        const AI = `${API}/ai`;
        const generate = (body: HashMap) =>
            handler('POST', `${AI}/generate`)({ body });
        const show = (id: string) =>
            handler('GET', `${AI}/jobs/:id`)({ route_params: { id } });

        beforeEach(() => vi.useFakeTimers());
        afterEach(() => vi.useRealTimers());

        it('should add the images of a job one at a time, then finish', () => {
            const { id, candidates } = generate({ candidates: 9 });
            // The mock provider makes up to 4 images
            expect(candidates).toBe(4);
            expect(show(id)).toMatchObject({ state: 'running', version: 0 });

            vi.advanceTimersByTime(800);
            expect(show(id)).toMatchObject({
                state: 'running',
                images_produced: 1,
            });

            vi.advanceTimersByTime(3 * 500);
            const job = show(id);
            expect(job).toMatchObject({ state: 'done', images_produced: 4 });
            expect(job.images.every((image) => image?.state === 'done')).toBe(
                true,
            );
            expect(job.finished_at).toBeDefined();
        });

        it('should fail a job that the safety system blocks', () => {
            const { id } = generate({ prompt: 'trigger-moderation' });
            expect(show(id).state).toBe('queued');

            vi.advanceTimersByTime(600);
            expect(show(id)).toMatchObject({
                state: 'failed',
                error_kind: 'moderation',
                images_produced: 0,
            });
        });

        it('should raise a 404 for an unknown job', () => {
            expect(() => show('not-a-job')).toThrow(
                expect.objectContaining({ status: 404 }),
            );
        });
    });
});
