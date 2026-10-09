import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DisplayContentComponent } from '../../app/displays/display-content.component';
import { SignageDisplayService } from '../../app/displays/signage-display.service';
import { SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import { SignageContextService } from '../../app/signage-context.service';

const NOW_S = Math.floor(Date.now() / 1000);

describe('DisplayContentComponent', () => {
    const selected_display = signal<any>(null);
    const playlists = signal<any[]>([]);
    const selected_display_zones = signal<any[]>([]);
    const playlist_approval_status = signal<Record<string, boolean>>({});
    const playlist_thumbnail_media = signal<Record<string, string[]>>({});
    const can_update = signal(true);
    const add_playlist = vi.fn();
    const remove_playlist = vi.fn();
    const zones_loading = signal(false);
    const zones_error = signal(false);
    const playlists_loading = signal(false);
    const playlists_error = signal(false);
    const reload_playlists = vi.fn();
    const reload_zones = vi.fn();
    const context_stub = { can_update };
    const display_stub = {
        selected_display,
        selected_display_zones,
        selected_display_zones_loading: zones_loading,
        selected_display_zones_error: zones_error,
        reloadSelectedDisplayZones: reload_zones,
        addPlaylistToDisplay: add_playlist,
        removePlaylistFromDisplay: remove_playlist,
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

    async function make() {
        await TestBed.configureTestingModule({
            imports: [DisplayContentComponent],
            providers: [
                provideRouter([]),
                { provide: SignageContextService, useValue: context_stub },
                { provide: SignageDisplayService, useValue: display_stub },
                { provide: SignagePlaylistService, useValue: playlist_stub },
            ],
        })
            .overrideComponent(DisplayContentComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(DisplayContentComponent)
            .componentInstance;
    }

    /** Render a tab of the selected display */
    async function render(tab: 'playlists' | 'zones') {
        await TestBed.configureTestingModule({
            imports: [DisplayContentComponent],
            providers: [
                provideRouter([]),
                { provide: SignageContextService, useValue: context_stub },
                { provide: SignageDisplayService, useValue: display_stub },
                { provide: SignagePlaylistService, useValue: playlist_stub },
            ],
        }).compileComponents();
        const fixture = TestBed.createComponent(DisplayContentComponent);
        fixture.componentRef.setInput('activeTab', tab);
        fixture.detectChanges();
        return fixture.nativeElement as HTMLElement;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        selected_display.set(null);
        playlists.set([]);
        selected_display_zones.set([]);
        playlist_approval_status.set({});
        zones_loading.set(false);
        zones_error.set(false);
        playlists_loading.set(false);
        playlists_error.set(false);
    });

    it('lists the playlists and the queried zones of the display', async () => {
        playlists.set([{ id: 'p1' }, { id: 'p2' }, { id: 'p3' }]);
        selected_display_zones.set([{ id: 'z2' }]);
        selected_display.set({
            id: 'd1',
            playlists: ['p1', 'p3'],
            zones: ['z2'],
        });
        const component = await make();

        expect(component.display_playlists().map((p: any) => p.id)).toEqual([
            'p1',
            'p3',
        ]);
        expect(component.display_zones().map((z: any) => z.id)).toEqual(['z2']);
    });

    it('returns nothing when no display is selected', async () => {
        const component = await make();
        expect(component.display_playlists()).toEqual([]);
        expect(component.display_zones()).toEqual([]);
    });

    it('marks playlists past their valid_until window as expired', async () => {
        const component = await make();
        expect(
            component.getStatus({
                id: 'p1',
                valid_until: NOW_S - 3600,
            } as any),
        ).toBe('expired');
    });

    it('marks playlists before their valid_from window as pending', async () => {
        const component = await make();
        expect(
            component.getStatus({
                id: 'p1',
                valid_from: NOW_S + 3600,
            } as any),
        ).toBe('pending');
    });

    it('marks unapproved playlists as awaiting approval', async () => {
        playlist_approval_status.set({ p1: false });
        const component = await make();
        expect(component.getStatus({ id: 'p1' } as any)).toBe(
            'awaiting_approval',
        );
    });

    it('returns no status for an approved, in-window playlist', async () => {
        playlist_approval_status.set({ p1: true });
        const component = await make();
        expect(component.getStatus({ id: 'p1' } as any)).toBeNull();
    });

    it('adds a playlist to the selected display via the service', async () => {
        const display = { id: 'd1', playlists: [] };
        selected_display.set(display);
        const component = await make();

        component.addPlaylist();

        expect(add_playlist).toHaveBeenCalledWith(display);
    });

    it('removes a playlist from the display and stops the click event', async () => {
        const display = { id: 'd1', playlists: ['p1'] };
        selected_display.set(display);
        const component = await make();
        const event = {
            preventDefault: vi.fn(),
            stopPropagation: vi.fn(),
        };

        component.removePlaylist(event as any, 'p1');

        expect(event.preventDefault).toHaveBeenCalled();
        expect(event.stopPropagation).toHaveBeenCalled();
        expect(remove_playlist).toHaveBeenCalledWith(display, 'p1');
    });

    // The empty states use these icons
    it('shows that the zones are loading in place of the empty state', async () => {
        selected_display.set({ id: 'd1', zones: ['z1'] });
        zones_loading.set(true);
        const element = await render('zones');

        expect(element.querySelector('[role="status"]')).not.toBeNull();
        expect(element.textContent).not.toContain('layers_clear');
    });

    it('offers a retry when the zones of the display fail to load', async () => {
        selected_display.set({ id: 'd1', zones: ['z1'] });
        zones_error.set(true);
        const element = await render('zones');

        expect(element.textContent).not.toContain('layers_clear');
        element.querySelector<HTMLButtonElement>('load-error button')?.click();
        expect(reload_zones).toHaveBeenCalledTimes(1);
    });

    it('shows that the playlists are loading in place of the empty state', async () => {
        selected_display.set({ id: 'd1', playlists: ['p1'] });
        playlists_loading.set(true);
        const element = await render('playlists');

        expect(element.querySelector('[role="status"]')).not.toBeNull();
        expect(element.textContent).not.toContain('playlist_remove');
    });

    it('offers a retry when the playlists fail to load', async () => {
        selected_display.set({ id: 'd1', playlists: ['p1'] });
        playlists_error.set(true);
        const element = await render('playlists');

        expect(element.textContent).not.toContain('playlist_remove');
        element.querySelector<HTMLButtonElement>('load-error button')?.click();
        expect(reload_playlists).toHaveBeenCalledTimes(1);
    });

    // The shared playlist list does not feed a tab with no playlist ids
    it.each(['loading', 'error'] as const)(
        'keeps the empty state of a display with no playlists while the playlist list is in %s',
        async (state) => {
            selected_display.set({ id: 'd1', playlists: [] });
            playlists_loading.set(state === 'loading');
            playlists_error.set(state === 'error');
            const element = await render('playlists');

            expect(element.textContent).toContain('playlist_remove');
            expect(element.querySelector('load-error')).toBeNull();
            expect(element.querySelector('[role="status"]')).toBeNull();
        },
    );
});
