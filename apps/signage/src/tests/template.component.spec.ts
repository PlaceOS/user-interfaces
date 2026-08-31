import { signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { SignageTemplateMapping } from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import { MediaCacheService } from '../app/media-cache.service';
import { SignageService } from '../app/signage.service';
import { SignageTemplateComponent } from '../app/template.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('SignageTemplateComponent', () => {
    let spectator: SpectatorRouting<SignageTemplateComponent>;
    const debug = signal(false);
    const active_template = signal<SignageTemplateMapping | null>(null);

    const create_component = createRoutingFactory({
        component: SignageTemplateComponent,
        shallow: true,
        providers: [
            MockProvider(SignageService, {
                playlist: signal([]),
                override_playlist: signal({ ends_at: 0, playlist: [] }),
                debug,
                active_template,
                playing_id: signal(''),
                setDisplay: vi.fn(),
                clearPlaylistOverride: vi.fn(),
                storeMetricEvent: vi.fn(),
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
            MockProvider(MediaCacheService, {
                requestFilesToCache: vi.fn().mockResolvedValue(false),
                getFile: vi.fn().mockResolvedValue(null),
                isLoadingFile: vi.fn(() => false),
                isCachedFile: vi.fn(() => false),
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        debug.set(false);
        active_template.set(null);
        (ts_client.showSignageTemplate as any).mockResolvedValue({
            id: 'template-1',
            background_item_id: 'background-1',
            layouts: [
                {
                    position: 'top',
                    y_pos: 0.2,
                    plugin_id: 'plugin-1',
                    plugin_params: { title: 'Welcome' },
                },
                {
                    position: 'left',
                    x_pos: 0.25,
                    plugin_id: 'missing-plugin',
                    plugin_params: {},
                },
            ],
        });
        (ts_client.querySignagePlugins as any).mockResolvedValue({
            data: [
                {
                    id: 'plugin-1',
                    name: 'Header',
                    uri: 'https://plugins.test/header',
                    defaults: { colour: 'blue', title: 'Default' },
                },
            ],
        });
        (ts_client.showSignageMedia as any).mockResolvedValue({
            id: 'background-1',
            name: 'Background',
            animation: ts_client.MediaAnimation.Cut,
            media_type: 'image',
            media_url: '/api/background',
            start_time: 0,
            play_time: 30_000,
            video_length: 0,
            valid_from: 0,
            valid_until: 0,
            plugin_id: '',
            plugin_params: {},
        });
    });

    afterEach(() => vi.restoreAllMocks());

    it('loads the template, background, and layout plugins', async () => {
        spectator = create_component({
            params: { template_id: 'template-1', system_id: 'display-1' },
        });

        await vi.waitFor(() => {
            expect(spectator.component.template()?.id).toBe('template-1');
        });

        expect(ts_client.showSignageTemplate).toHaveBeenCalledWith(
            'template-1',
            { approved: true },
        );
        expect(ts_client.showSignageMedia).toHaveBeenCalledWith('background-1');
        expect(spectator.component.background_playlist()[0]).toMatchObject({
            id: 'background-1',
            type: 'image',
        });
        expect(spectator.element.classList).not.toContain('bg-black');
        expect(spectator.component.layout_items()).toHaveLength(1);
        expect(spectator.query('plugin-embed')?.classList).not.toContain(
            'pointer-events-none',
        );
        expect(spectator.component.layout_items()[0].config).toEqual({
            instance_id: 'template-1-layout-0',
            config: { colour: 'blue', title: 'Welcome' },
        });
        expect(spectator.component.player_rect()).toEqual({
            left: 25,
            top: 20,
            width: 75,
            height: 80,
        });
    });

    it('renders the media player full screen when no template is active', async () => {
        spectator = create_component({
            params: { system_id: 'display-1' },
        });

        await spectator.fixture.whenStable();

        expect(ts_client.showSignageTemplate).not.toHaveBeenCalled();
        expect(spectator.query('signage-panel')).toBeTruthy();
        expect(spectator.component.player_rect()).toEqual({
            left: 0,
            top: 0,
            width: 100,
            height: 100,
        });
    });

    it('loads a template selected by the display schedule', async () => {
        spectator = create_component({
            params: { system_id: 'display-1' },
        });

        active_template.set(
            new SignageTemplateMapping({ template_id: 'template-1' }),
        );
        await vi.waitFor(() => {
            expect(spectator.component.template()?.id).toBe('template-1');
        });

        expect(ts_client.showSignageTemplate).toHaveBeenCalledWith(
            'template-1',
            { approved: true },
        );
        expect(spectator.query('signage-panel')).toBeTruthy();

        active_template.set(null);
        await vi.waitFor(() => {
            expect(spectator.component.template()).toBeNull();
        });

        expect(spectator.component.background_playlist()).toEqual([]);
        expect(spectator.component.player_rect()).toEqual({
            left: 0,
            top: 0,
            width: 100,
            height: 100,
        });
    });

    it('uses a black background when the template has no background item', async () => {
        (ts_client.showSignageTemplate as any).mockResolvedValue({
            id: 'template-1',
            background_item_id: '',
            layouts: [],
        });
        spectator = create_component({
            params: { template_id: 'template-1', system_id: 'display-1' },
        });

        await vi.waitFor(() => {
            expect(spectator.component.template()?.id).toBe('template-1');
        });

        expect(spectator.component.background_playlist()).toEqual([]);
        expect(spectator.element.classList).toContain('bg-black');
        expect(ts_client.showSignageMedia).not.toHaveBeenCalled();
    });

    it('should not let a template overlay capture debug controls', async () => {
        spectator = create_component({
            params: { template_id: 'template-1', system_id: 'display-1' },
        });
        await vi.waitFor(() => {
            expect(spectator.component.layout_items()).toHaveLength(1);
        });

        debug.set(true);
        await spectator.fixture.whenStable();

        expect(spectator.query('plugin-embed')?.classList).toContain(
            'pointer-events-none',
        );
    });

    it('uses the stored display when opening a template without one', () => {
        localStorage.setItem('PlaceOS.SIGNAGE.display', 'display-2');
        spectator = create_component({ params: { template_id: 'template-1' } });
        const router = spectator.inject(Router);

        expect(router.navigate).toHaveBeenCalledWith(
            ['/template', 'template-1', 'display-2'],
            { replaceUrl: true },
        );
    });

    it('opens bootstrap when the template has no selected display', () => {
        spectator = create_component({ params: { template_id: 'template-1' } });
        const router = spectator.inject(Router);

        expect(router.navigate).toHaveBeenCalledWith(['/bootstrap'], {
            queryParams: { template: 'template-1' },
            replaceUrl: true,
        });
    });
});
