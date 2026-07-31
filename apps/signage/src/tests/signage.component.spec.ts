import { signal } from '@angular/core';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { SignagePanelComponent } from '../app/signage.component';
import { SignageService } from '../app/signage.service';

describe('SignagePanelComponent', () => {
    let spectator: SpectatorRouting<SignagePanelComponent>;
    let signage_service: any;

    const create_component = createRoutingFactory({
        component: SignagePanelComponent,
        shallow: true,
        providers: [
            MockProvider(SignageService),
            MockProvider(SettingsService, {
                get: ((key: string) =>
                    key === 'app.default_animation_time' ? 1200 : null) as any,
            }),
        ],
    });

    beforeEach(() => {
        sessionStorage.clear();
        signage_service = {
            playlist: signal([]),
            override_playlist: signal({ ends_at: 0, playlist: [] }),
            debug: signal(false),
            playing_id: signal(''),
            setDisplay: vi.fn(),
            clearPlaylistOverride: vi.fn(),
            storeMetricEvent: vi.fn(),
        };
    });

    afterEach(() => vi.useRealTimers());

    function build_component(route_options = {}) {
        spectator = create_component({
            providers: [
                MockProvider(SignageService, signage_service),
                MockProvider(SettingsService, {
                    get: ((key: string) =>
                        key === 'app.default_animation_time'
                            ? 1200
                            : null) as any,
                }),
            ],
            ...route_options,
        });
        return spectator;
    }

    it('should create the component', () => {
        expect(build_component().component).toBeTruthy();
    });

    it('should expose the configured animation time', () => {
        build_component();

        expect(spectator.component.animation_time).toBe(1200);
    });

    it('should redirect to bootstrap if no display is provided', () => {
        vi.useFakeTimers();
        build_component();
        const router = spectator.inject(Router);

        vi.advanceTimersByTime(3001);

        expect(router.navigate).toHaveBeenCalledWith(['/bootstrap']);
        vi.useRealTimers();
    });

    it('should set the display from the route and cancel the bootstrap redirect', () => {
        vi.useFakeTimers();
        build_component();
        const router = spectator.inject(Router);

        spectator.setRouteParam('system_id', 'display-1');
        spectator.detectChanges();
        vi.advanceTimersByTime(3001);

        expect(signage_service.setDisplay).toHaveBeenCalledWith('display-1');
        expect(router.navigate).not.toHaveBeenCalledWith(['/bootstrap']);
        vi.useRealTimers();
    });

    it('should enable debug mode from the route query string', () => {
        build_component();

        spectator.setRouteQueryParam('debug', 'true');
        spectator.detectChanges();

        expect(spectator.component.debug()).toBe(true);
        expect(sessionStorage.getItem('SIGNAGE.debug')).toBe('true');
    });

    it('should apply the initial debug query before setting the display', () => {
        signage_service.setDisplay.mockImplementation(() => {
            expect(signage_service.debug()).toBe(true);
        });

        build_component({
            params: { system_id: 'display-1' },
            queryParams: { debug: 'true' },
        });

        expect(signage_service.setDisplay).toHaveBeenCalledWith('display-1');
    });

    it('should disable debug mode from the route query string', () => {
        sessionStorage.setItem('SIGNAGE.debug', 'true');
        build_component();

        spectator.setRouteQueryParam('debug', 'false');
        spectator.detectChanges();

        expect(spectator.component.debug()).toBe(false);
        expect(sessionStorage.getItem('SIGNAGE.debug')).toBe('false');
    });

    it('should restore debug mode from session storage', () => {
        sessionStorage.setItem('SIGNAGE.debug', 'true');
        build_component();

        expect(spectator.component.debug()).toBe(true);
    });

    it('should show the build version when debug mode is enabled', () => {
        build_component();

        expect(spectator.element.textContent).not.toContain(
            spectator.component.version_hash,
        );

        spectator.component.debug.set(true);
        spectator.detectChanges();

        expect(spectator.element.textContent).toContain(
            spectator.component.version_hash,
        );
        expect(spectator.element.textContent).toContain(
            new Date(spectator.component.version_date).getFullYear().toString(),
        );
    });

    it('should persist muted state for the browser session', () => {
        build_component();

        spectator.component.setMuted(true);

        expect(spectator.component.muted()).toBe(true);
        expect(sessionStorage.getItem('SIGNAGE.muted')).toBe('true');
    });

    it('should default to muted media', () => {
        build_component();

        expect(spectator.component.muted()).toBe(true);
    });

    it('should restore muted state from session storage', () => {
        sessionStorage.setItem('SIGNAGE.muted', 'true');
        build_component();

        expect(spectator.component.muted()).toBe(true);
    });

    it('should restore unmuted state from session storage', () => {
        sessionStorage.setItem('SIGNAGE.muted', 'false');
        build_component();

        expect(spectator.component.muted()).toBe(false);
    });

    it('should clear expired override playlists on the interval check', () => {
        vi.useFakeTimers();
        build_component();
        signage_service.override_playlist.set({
            ends_at: Date.now() - 1000,
            playlist: [{ id: 'override-1', getURL: async () => '' }],
        });

        vi.advanceTimersByTime(301);

        expect(signage_service.clearPlaylistOverride).toHaveBeenCalled();
        vi.useRealTimers();
    });

    it('should clear one-shot override playlists after a full playthrough', () => {
        build_component();
        signage_service.override_playlist.set({
            ends_at: 0,
            playlist: [{ id: 'override-1' }],
        });

        spectator.component.handlePlayerEvent(
            { type: 'playlist_through', ref_id: 'playlist-1' },
            true,
        );

        expect(signage_service.clearPlaylistOverride).toHaveBeenCalled();
        expect(signage_service.storeMetricEvent).toHaveBeenCalledWith({
            type: 'playlist_through',
            ref_id: 'playlist-1',
        });
    });

    it('should always forward player events to the signage service', () => {
        build_component();
        const event = { type: 'media_count', ref_id: 'media-1' } as const;

        spectator.component.handlePlayerEvent(event);

        expect(signage_service.storeMetricEvent).toHaveBeenCalledWith(event);
    });
});
