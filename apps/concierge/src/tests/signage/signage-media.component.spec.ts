import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as ts_client_mod from '@placeos/ts-client';
import { SignageMediaComponent } from '../../app/signage/signage-media.component';
import { SignageStateService } from '../../app/signage/signage-state.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('SignageMediaComponent', () => {
    let spectator: Spectator<SignageMediaComponent>;
    let state: any;
    let router: any;

    const createComponent = createComponentFactory({
        component: SignageMediaComponent,
        detectChanges: false,
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: false },
            MockProvider(SignageStateService, {
                loading: signal(false) as any,
                playlists: signal([
                    { id: 'p1', name: 'News' },
                    { id: 'p2', name: 'Ads' },
                ]) as any,
                editPlaylist: vi.fn(async () => ({ id: 'new' }) as any),
                updatePlaylistMedia: vi.fn(async () => undefined),
                previewFileFromInput: vi.fn(),
                previewMedia: vi.fn(),
            }),
            MockProvider(ActivatedRoute, {
                queryParamMap: of({ get: () => null }) as any,
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        // `spy: true` keeps real ts-client impls, which hang on live HTTP.
        (ts_client_mod.listSignagePlaylistMedia as any).mockResolvedValue({
            items: ['a'],
        });
        router = { navigate: vi.fn() };
        spectator = createComponent({
            providers: [MockProvider(Router, router)],
        });
        state = spectator.inject(SignageStateService) as any;
    });

    it('should filter playlists by search term', () => {
        spectator.component.search.set('news');

        expect(spectator.component.playlists()).toEqual([
            { id: 'p1', name: 'News' },
        ]);
    });

    it('should show the dropzone when files are dragged in', () => {
        spectator.component.onEnter({
            dataTransfer: { types: ['Files'] },
        });

        expect(spectator.component.show_dropzone()).toBe(true);
    });

    it('should not show the dropzone for non-file drags', () => {
        spectator.component.onEnter({
            dataTransfer: { types: ['text/plain'] },
        });

        expect(spectator.component.show_dropzone()).toBe(false);
    });

    it('should hide the dropzone after leaving', () => {
        vi.useFakeTimers();
        spectator.component.show_dropzone.set(true);
        const event = { preventDefault: vi.fn(), target: {} };

        spectator.component.hideOverlay(event);
        vi.runOnlyPendingTimers();

        expect(event.preventDefault).toHaveBeenCalled();
        expect(spectator.component.show_dropzone()).toBe(false);
        vi.useRealTimers();
    });

    it('should append dropped media into the target playlist', async () => {
        const event: any = {
            previousContainer: { data: [{ id: 'm9' }] },
            previousIndex: 0,
        };

        await spectator.component.drop({ id: 'p1' } as any, event);

        expect(ts_client_mod.listSignagePlaylistMedia).toHaveBeenCalledWith(
            'p1',
        );
        expect(state.updatePlaylistMedia).toHaveBeenCalledWith('p1', [
            'a',
            'm9',
        ]);
    });

    it('should navigate to the new playlist after creation', async () => {
        await spectator.component.addPlaylist();

        expect(router.navigate).toHaveBeenCalledWith([
            '/signage/media',
            { query: { playlist: 'new' } },
        ]);
    });
});
