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

    it('should resolve relative plugin URLs against the current origin', () => {
        spectator.setInput('plugin', {
            id: 'plugin-1',
            name: 'Local Plugin',
            uri: '/plugins/weather/index.html',
        });

        expect(spectator.component.plugin_origin()).toBe(window.location.origin);
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
