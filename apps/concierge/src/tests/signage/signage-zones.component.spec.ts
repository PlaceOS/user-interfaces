import { signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as ts_client_mod from '@placeos/ts-client';
import { SignageZonesComponent } from '../../app/signage/signage-zones.component';
import { SignageStateService } from '../../app/signage/signage-state.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('SignageZonesComponent', () => {
    let spectator: Spectator<SignageZonesComponent>;
    let state: any;

    const createComponent = createComponentFactory({
        component: SignageZonesComponent,
        detectChanges: false,
        providers: [
            MockProvider(SignageStateService, {
                loading: signal(false) as any,
                has_changed: signal(0) as any,
                zones: signal([
                    { id: 'z1', name: 'Lobby', playlists: ['p1'], version: 3 },
                    { id: 'z2', name: 'Kitchen', playlists: [], version: 1 },
                ]) as any,
                playlists: signal([
                    { id: 'p1', name: 'News' },
                    { id: 'p2', name: 'Ads' },
                ]) as any,
                changed: vi.fn(),
            }),
            MockProvider(ActivatedRoute, {
                queryParamMap: of({ get: () => null }) as any,
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        // `spy: true` keeps real ts-client impls, which hang on live HTTP.
        (ts_client_mod.updateZone as any).mockResolvedValue({});
        spectator = createComponent();
        state = spectator.inject(SignageStateService) as any;
    });

    it('should filter zones by search term', () => {
        spectator.component.search.set('kitchen');

        expect(spectator.component.zones().map((_) => _.id)).toEqual(['z2']);
    });

    it('should list only playlists not already on the zone', () => {
        spectator.component.selected.set('z1');

        expect(spectator.component.playlists().map((_) => _.id)).toEqual(['p2']);
    });

    it('should add a playlist to the zone', async () => {
        spectator.component.selected.set('z1');
        spectator.component.adding.set(true);

        await spectator.component.addPlaylist({ id: 'p2' });

        expect(ts_client_mod.updateZone).toHaveBeenCalledWith(
            'z1',
            { playlists: ['p1', 'p2'], version: 3 },
            'patch',
        );
        expect(state.changed).toHaveBeenCalled();
        expect(spectator.component.adding()).toBe(false);
    });

    it('should remove a playlist from the zone', async () => {
        spectator.component.selected.set('z1');

        await spectator.component.removePlaylist({ id: 'p1' } as any);

        expect(ts_client_mod.updateZone).toHaveBeenCalledWith(
            'z1',
            { playlists: [], version: 3 },
            'patch',
        );
    });

    it('should persist the reordered playlists on drop', async () => {
        spectator.component.selected.set('z1');
        state.zones()[0].playlists = ['a', 'b', 'c'];

        await spectator.component.drop({
            previousIndex: 2,
            currentIndex: 0,
        } as any);

        expect(ts_client_mod.updateZone).toHaveBeenCalledWith(
            'z1',
            { playlists: ['c', 'a', 'b'], version: 3 },
            'patch',
        );
    });
});
