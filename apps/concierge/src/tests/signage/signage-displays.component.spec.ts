import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as ts_client_mod from '@placeos/ts-client';
import { SignageDisplaysComponent } from '../../app/signage/signage-displays.component';
import { SignageStateService } from '../../app/signage/signage-state.service';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        updateSystem: jest.fn(async () => ({})),
        updateTrigger: jest.fn(async () => ({})),
        listSystemTriggers: jest.fn(async () => ({ data: [] })),
    };
});

describe('SignageDisplaysComponent', () => {
    let spectator: Spectator<SignageDisplaysComponent>;
    let state: any;

    const createComponent = createComponentFactory({
        component: SignageDisplaysComponent,
        detectChanges: false,
        providers: [
            MockProvider(SignageStateService, {
                loading: signal(false) as any,
                has_changed: signal(0) as any,
                displays: signal([
                    { id: 'd1', name: 'Foyer', playlists: ['p1'], version: 2, zones: [] },
                    { id: 'd2', name: 'Cafe', playlists: [], version: 1, zones: [] },
                ]) as any,
                playlists: signal([
                    { id: 'p1', name: 'News' },
                    { id: 'p2', name: 'Ads' },
                ]) as any,
                changed: jest.fn(),
                removeDisplay: jest.fn(),
            }),
            MockProvider(SettingsService, { get: jest.fn(() => '') } as any),
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(ActivatedRoute, {
                queryParamMap: of({ get: () => null }) as any,
            }),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        spectator = createComponent();
        state = spectator.inject(SignageStateService) as any;
    });

    it('should filter displays by search term', () => {
        spectator.component.search.set('cafe');

        expect(spectator.component.displays().map((_) => _.id)).toEqual(['d2']);
    });

    it('should resolve the active display from the selection', () => {
        spectator.component.selected.set('d1');

        expect(spectator.component.active_display()?.id).toBe('d1');
    });

    it('should list only playlists not already on the display', () => {
        spectator.component.selected.set('d1');

        expect(spectator.component.playlists().map((_) => _.id)).toEqual(['p2']);
    });

    it('should add a playlist to the display and refresh state', async () => {
        spectator.component.selected.set('d1');
        spectator.component.adding.set(true);

        await spectator.component.addPlaylist({ id: 'p2' });

        expect(ts_client_mod.updateSystem).toHaveBeenCalledWith(
            'd1',
            { playlists: ['p1', 'p2'], version: 2 },
            'patch',
        );
        expect(state.changed).toHaveBeenCalled();
        expect(spectator.component.adding()).toBe(false);
    });

    it('should remove a playlist from the display', async () => {
        spectator.component.selected.set('d1');

        await spectator.component.removePlaylist({ id: 'p1' } as any);

        expect(ts_client_mod.updateSystem).toHaveBeenCalledWith(
            'd1',
            { playlists: [], version: 2 },
            'patch',
        );
    });

    it('should persist the reordered playlists on drop', async () => {
        spectator.component.selected.set('d1');
        state.displays()[0].playlists = ['a', 'b', 'c'];

        await spectator.component.drop({
            previousIndex: 0,
            currentIndex: 2,
        } as any);

        expect(ts_client_mod.updateSystem).toHaveBeenCalledWith(
            'd1',
            { playlists: ['b', 'c', 'a'], version: 2 },
            'patch',
        );
    });

    it('should update the display orientation', async () => {
        spectator.component.selected.set('d1');

        await spectator.component.setOrientation('portrait');

        expect(ts_client_mod.updateSystem).toHaveBeenCalledWith(
            'd1',
            { orientation: 'portrait', version: 2 },
            'patch',
        );
    });

    it('should default the signage path from settings', () => {
        expect(spectator.component.signage_path).toBe('/signage');
    });
});
