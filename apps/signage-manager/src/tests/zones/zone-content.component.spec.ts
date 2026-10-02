import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SignageDisplayService } from '../../app/displays/signage-display.service';
import { SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import { SignageContextService } from '../../app/signage-context.service';
import { SignageZoneService } from '../../app/zones/signage-zone.service';
import { ZoneContentComponent } from '../../app/zones/zone-content.component';

const NOW_S = Math.floor(Date.now() / 1000);

describe('ZoneContentComponent', () => {
    const selected_zone = signal<any>(null);
    const playlists = signal<any[]>([]);
    const selected_zone_displays = signal<any[]>([]);
    const playlist_approval_status = signal<Record<string, boolean>>({});
    const playlist_thumbnail_media = signal<Record<string, string[]>>({});
    const can_update = signal(true);
    const add_playlist = vi.fn();
    const remove_playlist = vi.fn();
    const add_display = vi.fn();
    const displays_loading = signal(false);
    const displays_error = signal(false);
    const playlists_loading = signal(false);
    const playlists_error = signal(false);
    const reload_playlists = vi.fn();
    const reload_displays = vi.fn();
    const context_stub = { can_update };
    const display_stub = {
        selected_zone_displays,
        selected_zone_displays_loading: displays_loading,
        selected_zone_displays_error: displays_error,
        reloadSelectedZoneDisplays: reload_displays,
        addDisplayToZone: add_display,
    };
    const playlist_stub = {
        playlistsById: (ids: readonly string[]) =>
            playlists().filter(({ id }) => ids.includes(id)),
        playlist_approval_status,
        playlist_approval_requested_status: signal<Record<string, boolean>>({}),
        playlist_thumbnail_media,
        playlists_loading,
        playlists_error,
        reloadPlaylists: reload_playlists,
    };
    const zone_stub = {
        selected_zone,
        addPlaylistToZone: add_playlist,
        removePlaylistFromZone: remove_playlist,
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [ZoneContentComponent],
            providers: [
                { provide: SignageContextService, useValue: context_stub },
                { provide: SignageDisplayService, useValue: display_stub },
                { provide: SignagePlaylistService, useValue: playlist_stub },
                { provide: SignageZoneService, useValue: zone_stub },
            ],
        })
            .overrideComponent(ZoneContentComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(ZoneContentComponent).componentInstance;
    }

    /** Render a tab of the selected zone */
    async function render(tab: 'playlists' | 'displays') {
        await TestBed.configureTestingModule({
            imports: [ZoneContentComponent],
            providers: [
                provideRouter([]),
                { provide: SignageContextService, useValue: context_stub },
                { provide: SignageDisplayService, useValue: display_stub },
                { provide: SignagePlaylistService, useValue: playlist_stub },
                { provide: SignageZoneService, useValue: zone_stub },
            ],
        }).compileComponents();
        const fixture = TestBed.createComponent(ZoneContentComponent);
        fixture.componentRef.setInput('activeTab', tab);
        fixture.detectChanges();
        return fixture.nativeElement.querySelector(
            `#zone-${tab}-panel`,
        ) as HTMLElement;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        selected_zone.set(null);
        playlists.set([]);
        selected_zone_displays.set([]);
        playlist_approval_status.set({});
        displays_loading.set(false);
        displays_error.set(false);
        playlists_loading.set(false);
        playlists_error.set(false);
    });

    it('lists the playlists and the queried displays of the zone', async () => {
        playlists.set([{ id: 'p1' }, { id: 'p2' }]);
        selected_zone_displays.set([{ id: 'd1', zones: ['z1'] }]);
        selected_zone.set({ id: 'z1', playlists: ['p2'] });
        const component = await make();

        expect(component.zone_playlists().map((p: any) => p.id)).toEqual([
            'p2',
        ]);
        expect(component.zone_displays().map((d: any) => d.id)).toEqual(['d1']);
    });

    it('returns nothing when no zone is selected', async () => {
        const component = await make();
        expect(component.zone_playlists()).toEqual([]);
        expect(component.zone_displays()).toEqual([]);
    });

    it('classifies playlist status by validity window and approval state', async () => {
        playlist_approval_status.set({ p_wait: false });
        const component = await make();

        expect(
            component.getStatus({ id: 'p', valid_until: NOW_S - 10 } as any),
        ).toBe('expired');
        expect(
            component.getStatus({ id: 'p', valid_from: NOW_S + 10 } as any),
        ).toBe('pending');
        expect(component.getStatus({ id: 'p_wait' } as any)).toBe(
            'awaiting_approval',
        );
        expect(component.getStatus({ id: 'p' } as any)).toBeNull();
    });

    it('routes add/remove actions through the service for the selected zone', async () => {
        const zone = { id: 'z1', playlists: ['p1'] };
        selected_zone.set(zone);
        const component = await make();
        const event = {
            preventDefault: vi.fn(),
            stopPropagation: vi.fn(),
        };

        component.addPlaylist();
        component.addDisplay();
        component.removePlaylist(event as any, 'p1');

        expect(add_playlist).toHaveBeenCalledWith(zone);
        expect(add_display).toHaveBeenCalledWith(zone);
        expect(remove_playlist).toHaveBeenCalledWith(zone, 'p1');
        expect(event.preventDefault).toHaveBeenCalled();
    });

    // The empty states use these icons
    it('shows that the displays are loading in place of the empty state', async () => {
        selected_zone.set({ id: 'z1' });
        displays_loading.set(true);
        const panel = await render('displays');

        expect(panel.querySelector('[role="status"]')).not.toBeNull();
        expect(panel.textContent).not.toContain('tv_off');
    });

    it('offers a retry when the displays of the zone fail to load', async () => {
        selected_zone.set({ id: 'z1' });
        displays_error.set(true);
        const panel = await render('displays');

        expect(panel.textContent).not.toContain('tv_off');
        panel.querySelector<HTMLButtonElement>('load-error button')?.click();
        expect(reload_displays).toHaveBeenCalledTimes(1);
    });

    it('shows that the playlists are loading in place of the empty state', async () => {
        selected_zone.set({ id: 'z1', playlists: ['p1'] });
        playlists_loading.set(true);
        const panel = await render('playlists');

        expect(panel.querySelector('[role="status"]')).not.toBeNull();
        expect(panel.textContent).not.toContain('playlist_remove');
    });

    it('offers a retry when the playlists fail to load', async () => {
        selected_zone.set({ id: 'z1', playlists: ['p1'] });
        playlists_error.set(true);
        const panel = await render('playlists');

        expect(panel.textContent).not.toContain('playlist_remove');
        panel.querySelector<HTMLButtonElement>('load-error button')?.click();
        expect(reload_playlists).toHaveBeenCalledTimes(1);
    });

    // The shared playlist list does not feed a tab with no playlist ids
    it.each(['loading', 'error'] as const)(
        'keeps the empty state of a zone with no playlists while the playlist list is in %s',
        async (state) => {
            selected_zone.set({ id: 'z1', playlists: [] });
            playlists_loading.set(state === 'loading');
            playlists_error.set(state === 'error');
            const panel = await render('playlists');

            expect(panel.textContent).toContain('playlist_remove');
            expect(panel.querySelector('load-error')).toBeNull();
            expect(panel.querySelector('[role="status"]')).toBeNull();
        },
    );
});
