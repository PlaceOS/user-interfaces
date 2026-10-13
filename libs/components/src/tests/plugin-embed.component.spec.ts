import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';

import {
    PluginConfigPayload,
    PluginEmbedComponent,
} from '../lib/plugin-embed.component';

describe('PluginEmbedComponent', () => {
    let spectator: Spectator<PluginEmbedComponent>;
    const createComponent = createComponentFactory(PluginEmbedComponent);
    const config: PluginConfigPayload = {
        instance_id: 'media-1',
        config: { theme: 'dark' },
    };

    beforeEach(() => {
        spectator = createComponent();
    });

    afterEach(() => vi.useRealTimers());

    function preparePlugin(can_report_playing = false) {
        vi.useFakeTimers();
        spectator.setInput('plugin', {
            id: 'plugin-1',
            uri: '/plugins/test',
        });
        const frame = spectator.query('iframe') as HTMLIFrameElement;
        const post_message = vi.spyOn(frame.contentWindow, 'postMessage');
        const reply = (type: string, request_id?: string) =>
            window.dispatchEvent(
                new MessageEvent('message', {
                    origin: window.location.origin,
                    source: frame.contentWindow,
                    data: { api: 'signage-plugin/v1', type, request_id },
                }),
            );
        spectator.component.details.set({
            plugin: { name: 'Test', version: '1' },
            capabilities: {
                requires_play_signal: true,
                static_media: true,
                can_finish: false,
                can_report_playing,
            },
            config_schema: {},
        });
        const playing = vi.spyOn(spectator.component.playing, 'emit');
        return { post_message, reply, playing };
    }

    it('waits for paint confirmation of the current play request', () => {
        const { post_message, reply, playing } = preparePlugin(true);
        spectator.setInput({ config, play: 10 });
        expect(
            post_message.mock.calls.map(([message]) => message.type),
        ).toEqual(['config', 'play']);
        const request_id = post_message.mock.calls.at(-1)[0].request_id;
        reply('ready');
        reply('playing', 'old-play');
        vi.advanceTimersByTime(2_000);
        expect(playing).not.toHaveBeenCalled();

        reply('playing', request_id);
        reply('playing', request_id);
        vi.advanceTimersByTime(15_000);
        expect(playing).toHaveBeenCalledExactlyOnceWith(10);
    });

    it('settles a legacy plugin after play instead of after config', () => {
        const { playing } = preparePlugin();
        spectator.setInput('config', config);
        vi.advanceTimersByTime(3_000);
        expect(playing).not.toHaveBeenCalled();
        spectator.setInput('play', 10);
        vi.advanceTimersByTime(1_999);
        expect(playing).not.toHaveBeenCalled();
        vi.advanceTimersByTime(1);
        expect(playing).toHaveBeenCalledExactlyOnceWith(10);
    });

    it('sends a batched initial config before play once the iframe exists', () => {
        spectator.setInput({
            plugin: { id: 'test', uri: '/plugins/test' },
            config,
        });
        const frame = spectator.query('iframe') as HTMLIFrameElement;
        const post_message = vi.spyOn(frame.contentWindow, 'postMessage');
        spectator.setInput('play', 10);
        expect(
            post_message.mock.calls.map(([message]) => message.type),
        ).toEqual(['config', 'play']);
        expect(post_message.mock.calls[0][0].payload).toEqual(config);
    });

    it('rejects paint replies from a different origin or iframe', () => {
        const { post_message, playing } = preparePlugin(true);
        spectator.setInput('play', 10);
        const request_id = post_message.mock.calls.at(-1)[0].request_id;
        const frame = spectator.query('iframe') as HTMLIFrameElement;
        for (const [origin, source] of [
            ['https://other.example', frame.contentWindow],
            [window.location.origin, window],
        ] as const) {
            window.dispatchEvent(
                new MessageEvent('message', {
                    origin,
                    source,
                    data: {
                        api: 'signage-plugin/v1',
                        type: 'playing',
                        request_id,
                    },
                }),
            );
        }
        expect(playing).not.toHaveBeenCalled();
    });

    it('releases an opt-in plugin that never confirms paint within fifteen seconds', () => {
        const { playing } = preparePlugin(true);
        spectator.setInput('play', 10);
        vi.advanceTimersByTime(14_999);
        expect(playing).not.toHaveBeenCalled();
        vi.advanceTimersByTime(1);
        expect(playing).toHaveBeenCalledExactlyOnceWith(10);
    });

    it('rejects an old play reply and cancels settling on config or plugin changes', () => {
        const { post_message, reply, playing } = preparePlugin(true);
        spectator.setInput('play', 10);
        const old_request = post_message.mock.calls.at(-1)[0].request_id;
        spectator.setInput('play', 20);
        reply('playing', old_request);
        expect(playing).not.toHaveBeenCalled();
        spectator.setInput('config', config);
        vi.advanceTimersByTime(15_000);
        expect(playing).not.toHaveBeenCalled();
        spectator.setInput('play', 30);
        spectator.setInput('plugin', { id: 'plugin-2', uri: '/plugins/other' });
        vi.advanceTimersByTime(15_000);
        expect(playing).not.toHaveBeenCalled();
    });

    it('cancels a pending settle timer when the embed is destroyed', () => {
        const { playing } = preparePlugin();
        spectator.setInput('play', 10);
        spectator.fixture.destroy();
        vi.advanceTimersByTime(2_000);
        expect(playing).not.toHaveBeenCalled();
    });

    it('should resolve relative plugin URLs against the current origin', () => {
        spectator.setInput('plugin', {
            id: 'plugin-1',
            name: 'Local Plugin',
            uri: '/plugins/weather/index.html',
        });

        expect(spectator.component.plugin_origin()).toBe(
            window.location.origin,
        );
    });

    it('should send config messages to relative plugin URLs', () => {
        spectator.setInput('plugin', {
            id: 'plugin-1',
            name: 'Local Plugin',
            uri: '/plugins/weather/index.html',
        });
        const iframe = spectator.query('iframe') as HTMLIFrameElement;
        const post_message = vi.fn();
        Object.defineProperty(iframe, 'contentWindow', {
            configurable: true,
            value: { postMessage: post_message },
        });

        spectator.setInput('config', config);

        expect(post_message).toHaveBeenCalledWith(
            { api: 'signage-plugin/v1', type: 'config', payload: config },
            window.location.origin,
        );
    });

    it('should send config changes after an auto-play plugin is ready', () => {
        spectator.setInput('plugin', {
            id: 'plugin-1',
            name: 'Local Plugin',
            uri: '/plugins/weather/index.html',
        });
        spectator.setInput('auto_play', true);
        const iframe = spectator.query('iframe') as HTMLIFrameElement;
        const post_message = vi.fn();
        Object.defineProperty(iframe, 'contentWindow', {
            configurable: true,
            value: { postMessage: post_message },
        });

        spectator.setInput('config', config);
        expect(post_message).not.toHaveBeenCalled();

        spectator.component.status.set('ready');
        const updated = { ...config, config: { theme: 'light' } };
        spectator.setInput('config', updated);

        expect(post_message).toHaveBeenCalledWith(
            { api: 'signage-plugin/v1', type: 'config', payload: updated },
            window.location.origin,
        );
    });

    it('should emit loaded when the plugin iframe loads', () => {
        const loaded_spy = vi.spyOn(spectator.component.loaded, 'emit');
        spectator.setInput('plugin', {
            id: 'plugin-1',
            name: 'Local Plugin',
            uri: '/plugins/weather/index.html',
        });

        spectator.triggerEventHandler('iframe', 'load', {});

        expect(loaded_spy).toHaveBeenCalled();
    });

    it('should emit a fatal plugin error when the iframe errors', () => {
        const error_spy = vi.spyOn(spectator.component.plugin_error, 'emit');
        spectator.setInput('plugin', {
            id: 'plugin-1',
            name: 'Local Plugin',
            uri: '/plugins/weather/index.html',
        });

        spectator.triggerEventHandler('iframe', 'error', {});

        expect(error_spy).toHaveBeenCalledWith({
            code: 'iframe_load_error',
            message: 'Plugin iframe failed to load.',
            fatal: true,
        });
    });
});
