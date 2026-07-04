import { signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as ts_client_mod from '@placeos/ts-client';
import { SignageMediaComponent } from '../../app/signage/signage-media.component';
import { SignageStateService } from '../../app/signage/signage-state.service';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        listSignagePlaylistMedia: jest.fn(async () => ({ items: ['a'] })),
    };
});

describe('SignageMediaComponent', () => {
    let spectator: Spectator<SignageMediaComponent>;
    let state: any;
    let router: any;

    const createComponent = createComponentFactory({
        component: SignageMediaComponent,
        detectChanges: false,
        providers: [
            MockProvider(SignageStateService, {
                loading: signal(false) as any,
                playlists: signal([
                    { id: 'p1', name: 'News' },
                    { id: 'p2', name: 'Ads' },
                ]) as any,
                editPlaylist: jest.fn(async () => ({ id: 'new' }) as any),
                updatePlaylistMedia: jest.fn(async () => undefined),
                previewFileFromInput: jest.fn(),
                previewMedia: jest.fn(),
            }),
            MockProvider(ActivatedRoute, {
                queryParamMap: of({ get: () => null }) as any,
            }),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        router = { navigate: jest.fn() };
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
        jest.useFakeTimers();
        spectator.component.show_dropzone.set(true);
        const event = { preventDefault: jest.fn(), target: {} };

        spectator.component.hideOverlay(event);
        jest.runOnlyPendingTimers();

        expect(event.preventDefault).toHaveBeenCalled();
        expect(spectator.component.show_dropzone()).toBe(false);
        jest.useRealTimers();
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
