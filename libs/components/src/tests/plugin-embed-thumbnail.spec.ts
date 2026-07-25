import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import { PluginEmbedComponent } from '../lib/plugin-embed.component';

const ORIGIN = 'https://plugins.test';
const API = 'signage-plugin/v1';

describe('PluginEmbedComponent thumbnails', () => {
    let spectator: Spectator<PluginEmbedComponent>;
    let posted: any[];
    let content_window: any;

    const createComponent = createComponentFactory({
        component: PluginEmbedComponent,
        shallow: true,
    });

    /** Deliver a message as though it came from the plugin frame */
    const fromPlugin = (message: Record<string, unknown>) =>
        window.dispatchEvent(
            new MessageEvent('message', {
                data: { api: API, ...message },
                origin: ORIGIN,
                source: content_window,
            } as any),
        );

    const declareCapabilities = (can_thumbnail?: boolean) =>
        fromPlugin({
            type: 'loaded',
            payload: {
                plugin: { name: 'Clock', version: '1.0.0' },
                capabilities: {
                    requires_play_signal: false,
                    can_finish: false,
                    static_media: true,
                    ...(can_thumbnail === undefined ? {} : { can_thumbnail }),
                },
                config_schema: {},
            },
        });

    beforeEach(() => {
        posted = [];
        content_window = { postMessage: (msg: any) => posted.push(msg) };
        spectator = createComponent({
            props: { plugin: { uri: `${ORIGIN}/clock` } as any },
        });
        // Stand in for the sandboxed iframe
        (spectator.component as any)._plugin_el = () => ({
            nativeElement: { contentWindow: content_window },
        });
        spectator.component.ngOnInit();
    });

    it('should report no capability for a plugin that predates thumbnails', () => {
        declareCapabilities(undefined);
        expect(spectator.component.canProvideThumbnail()).toBe(false);
    });

    it('should not message a plugin that cannot provide a thumbnail', async () => {
        declareCapabilities(undefined);

        await expect(
            spectator.component.requestThumbnail(1280, 720),
        ).resolves.toBe('');
        expect(posted).toHaveLength(0);
    });

    it('should return the image a capable plugin sends back', async () => {
        declareCapabilities(true);
        const image = 'data:image/png;base64,aGVsbG8=';

        const pending = spectator.component.requestThumbnail(1280, 720);
        const request = posted.find((msg) => msg.type === 'thumbnail');
        expect(request.payload).toEqual({ width: 1280, height: 720 });
        expect(request.request_id).toBeTruthy();

        fromPlugin({
            type: 'thumbnail',
            request_id: request.request_id,
            payload: { image },
        });

        expect(await pending).toBe(image);
    });

    it('should ignore a reply that does not match the request', async () => {
        declareCapabilities(true);

        const pending = spectator.component.requestThumbnail(1280, 720, 50);
        fromPlugin({
            type: 'thumbnail',
            request_id: 'someone-elses-request',
            payload: { image: 'data:image/png;base64,aGVsbG8=' },
        });

        expect(await pending).toBe('');
    });

    it('should give up when a plugin never answers', async () => {
        declareCapabilities(true);

        expect(await spectator.component.requestThumbnail(1280, 720, 20)).toBe(
            '',
        );
    });

    it('should not let a thumbnail reply change the plugin status', async () => {
        declareCapabilities(true);
        fromPlugin({ type: 'ready' });
        expect(spectator.component.status()).toBe('ready');

        const pending = spectator.component.requestThumbnail(1280, 720, 20);
        const request = posted.find((msg) => msg.type === 'thumbnail');
        fromPlugin({
            type: 'thumbnail',
            request_id: request.request_id,
            payload: { image: 'data:image/png;base64,aGVsbG8=' },
        });
        await pending;

        expect(spectator.component.status()).toBe('ready');
    });

    describe('untrusted replies', () => {
        const rejected = [
            ['a script url', 'javascript:alert(1)'],
            ['a remote url', 'https://evil.test/a.png'],
            ['a non-image data url', 'data:text/html;base64,PHNjcmlwdD4='],
            ['a non-string', 12345],
        ] as const;

        for (const [label, image] of rejected) {
            it(`should discard ${label}`, async () => {
                declareCapabilities(true);
                const pending = spectator.component.requestThumbnail(
                    1280,
                    720,
                    50,
                );
                const request = posted.find((msg) => msg.type === 'thumbnail');
                fromPlugin({
                    type: 'thumbnail',
                    request_id: request.request_id,
                    payload: { image },
                });

                expect(await pending).toBe('');
            });
        }

        it('should discard an oversized image', async () => {
            declareCapabilities(true);
            const pending = spectator.component.requestThumbnail(1280, 720, 50);
            const request = posted.find((msg) => msg.type === 'thumbnail');
            fromPlugin({
                type: 'thumbnail',
                request_id: request.request_id,
                payload: {
                    image: `data:image/png;base64,${'A'.repeat(5 * 1024 * 1024)}`,
                },
            });

            expect(await pending).toBe('');
        });
    });
});
