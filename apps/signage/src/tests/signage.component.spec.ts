import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

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
            playlist: of([]),
            override_playlist: signal({ ends_at: 0, playlist: [] }),
            setDisplay: jest.fn(),
            clearPlaylistOverride: jest.fn(),
            storeMetricEvent: jest.fn(),
        };
    });

    afterEach(() => jest.useRealTimers());

    function build_component() {
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
        jest.useFakeTimers();
        build_component();
        const router = spectator.inject(Router);

        jest.advanceTimersByTime(3001);

        expect(router.navigate).toHaveBeenCalledWith(['/bootstrap']);
        jest.useRealTimers();
    });

    it('should set the display from the route and cancel the bootstrap redirect', () => {
        jest.useFakeTimers();
        build_component();
        const router = spectator.inject(Router);

        spectator.setRouteParam('system_id', 'display-1');
        spectator.detectChanges();
        jest.advanceTimersByTime(3001);

        expect(signage_service.setDisplay).toHaveBeenCalledWith('display-1');
        expect(router.navigate).not.toHaveBeenCalledWith(['/bootstrap']);
        jest.useRealTimers();
    });

    it('should enable debug mode from the route query string', () => {
        build_component();

        spectator.setRouteQueryParam('debug', 'true');
        spectator.detectChanges();

        expect(spectator.component.debug()).toBe(true);
        expect(sessionStorage.getItem('SIGNAGE.debug')).toBe('true');
    });

    it('should restore debug mode from session storage', () => {
        sessionStorage.setItem('SIGNAGE.debug', 'true');
        build_component();

        expect(spectator.component.debug()).toBe(true);
    });

    it('should clear expired override playlists on the interval check', () => {
        jest.useFakeTimers();
        build_component();
        signage_service.override_playlist.set({
            ends_at: Date.now() - 1000,
            playlist: [{ id: 'override-1' }],
        });

        jest.advanceTimersByTime(301);

        expect(signage_service.clearPlaylistOverride).toHaveBeenCalled();
        jest.useRealTimers();
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
