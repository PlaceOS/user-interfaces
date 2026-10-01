import { ApplicationRef, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MediaAnimation } from '@placeos/ts-client';
import { SignageDisplayService } from '../../app/displays/signage-display.service';
import { PlaylistItemDetailsComponent } from '../../app/playlists/playlist-item-details.component';
import { SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import { SignageContextService } from '../../app/signage-context.service';
import { SignageInventoryService } from '../../app/signage-inventory.service';
import { SignageZoneService } from '../../app/zones/signage-zone.service';

describe('PlaylistItemDetailsComponent', () => {
    const selected_playlist = signal<any>(null);
    const playlist_media_items = signal<any[]>([]);
    const displays = signal<any[]>([]);
    const zones = signal<any[]>([]);
    const can_update = signal(true);
    const selected_group = signal<any>(null);
    const add_display = vi.fn();
    const add_zone = vi.fn();
    const remove_display = vi.fn();
    const remove_zone = vi.fn();
    // Pending unless a test resolves it, so the loaded pages are used
    const load_inventory = vi.fn(() => new Promise(() => {}));

    const context_stub = {
        can_update,
        selected_group,
        data_change: signal(0),
    };
    const display_stub = {
        displays,
        addDisplayToPlaylist: add_display,
        removeDisplayFromPlaylist: remove_display,
    };
    const inventory_stub = { loadSignageInventory: load_inventory };
    const playlist_stub = { selected_playlist, playlist_media_items };
    const zone_stub = {
        zones,
        addZoneToPlaylist: add_zone,
        removeZoneFromPlaylist: remove_zone,
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [PlaylistItemDetailsComponent],
            providers: [
                { provide: SignageContextService, useValue: context_stub },
                { provide: SignageDisplayService, useValue: display_stub },
                { provide: SignageInventoryService, useValue: inventory_stub },
                { provide: SignagePlaylistService, useValue: playlist_stub },
                { provide: SignageZoneService, useValue: zone_stub },
            ],
        })
            .overrideComponent(PlaylistItemDetailsComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(PlaylistItemDetailsComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        selected_playlist.set(null);
        playlist_media_items.set([]);
        displays.set([]);
        zones.set([]);
        can_update.set(true);
        selected_group.set(null);
    });

    it('lists displays and zones outside the loaded pages', async () => {
        selected_playlist.set({ id: 'pl-1', name: 'Lobby' });
        displays.set([{ id: 'd-1', playlists: ['pl-1'] }]);
        load_inventory.mockResolvedValueOnce({
            displays: [
                { id: 'd-1', playlists: ['pl-1'] },
                { id: 'd-500', playlists: ['pl-1'] },
            ],
            zones: [{ id: 'z-300', playlists: ['pl-1'] }],
            playlists: [],
        });
        const component = await make();
        TestBed.tick();
        await TestBed.inject(ApplicationRef).whenStable();

        expect(component.playlist_displays().map(({ id }) => id)).toEqual([
            'd-1',
            'd-500',
        ]);
        expect(component.playlist_zones().map(({ id }) => id)).toEqual([
            'z-300',
        ]);
    });

    it('counts the loaded playlist media items', async () => {
        playlist_media_items.set([{ id: 'a' }, { id: 'b' }]);
        const component = await make();
        expect(component.item_count()).toBe(2);
    });

    it('lists only displays and zones that reference the selected playlist', async () => {
        selected_playlist.set({ id: 'pl-1', name: 'Lobby' });
        displays.set([
            { id: 'd-1', playlists: ['pl-1'] },
            { id: 'd-2', playlists: ['pl-9'] },
            { id: 'd-3' },
        ]);
        zones.set([
            { id: 'z-1', playlists: ['pl-1', 'pl-2'] },
            { id: 'z-2', playlists: [] },
        ]);
        const component = await make();
        expect(component.playlist_displays().map((d: any) => d.id)).toEqual([
            'd-1',
        ]);
        expect(component.playlist_zones().map((z: any) => z.id)).toEqual([
            'z-1',
        ]);
    });

    it('returns no displays or zones when nothing is selected', async () => {
        displays.set([{ id: 'd-1', playlists: ['pl-1'] }]);
        zones.set([{ id: 'z-1', playlists: ['pl-1'] }]);
        const component = await make();
        expect(component.playlist_displays()).toEqual([]);
        expect(component.playlist_zones()).toEqual([]);
    });

    it('uses the selected signage group for shared playlist details', async () => {
        selected_group.set({ group: { id: 'grp-1' } });
        const component = await make();

        expect(component.selected_group_id()).toBe('grp-1');
    });

    it('maps the animation enum to a translation key', async () => {
        selected_playlist.set({
            id: 'pl-1',
            default_animation: MediaAnimation.CrossFade,
        });
        const component = await make();
        expect(component.animation_label()).toBe(
            'SIGNAGE_MANAGER.ANIM_CROSS_FADE',
        );

        selected_playlist.set({ id: 'pl-1', default_animation: 'nonsense' });
        expect(component.animation_label()).toBe('COMMON.DEFAULT');
    });

    it('converts validity timestamps from seconds to milliseconds', async () => {
        selected_playlist.set({
            id: 'pl-1',
            valid_from: 1000,
            valid_until: 2000,
        });
        const component = await make();
        expect(component.valid_from()).toBe(1_000_000);
        expect(component.valid_until()).toBe(2_000_000);

        selected_playlist.set({ id: 'pl-1' });
        expect(component.valid_from()).toBe('');
        expect(component.valid_until()).toBe('');
    });

    it('builds a human readable schedule label for a daily cron', async () => {
        const valid_until = Math.floor(Date.UTC(2027, 0, 2, 18, 45) / 1000);
        selected_playlist.set({
            id: 'pl-1',
            schedules: [
                {
                    play_cron: '0 9 * * *',
                    play_period: 180,
                    play_takeover: false,
                    valid_until,
                },
            ],
        });
        const component = await make();
        const labels = component.schedule_labels();
        expect(labels.length).toBe(1);
        expect(labels[0]).toContain('Every day at');
        expect(labels[0]).toContain('for 3 hours');
        expect(labels[0]).toContain(' · until ');
        expect(component.schedule_expiry_tooltips()).toEqual([
            new Date(valid_until * 1000).toLocaleString(),
        ]);
    });

    it('hides playlist-level schedule labels for distribution playlists', async () => {
        selected_playlist.set({
            id: 'pl-1',
            distribution: true,
            schedules: [
                {
                    play_cron: '0 9 * * *',
                    play_period: 180,
                },
            ],
        });
        const component = await make();

        expect(component.schedule_labels()).toEqual([]);
        expect(component.next_play_sessions()).toEqual([]);
    });

    it('lists the next upcoming play sessions for a recurring schedule', async () => {
        selected_playlist.set({
            id: 'pl-1',
            schedules: [
                {
                    play_cron: '0 9 * * *',
                    play_period: 60,
                    play_takeover: false,
                },
            ],
        });
        const component = await make();
        const sessions = component.next_play_sessions();
        expect(sessions.length).toBe(5);
        expect(sessions[0]).toContain('–');
    });

    it('applies the schedule mask to the label and upcoming sessions', async () => {
        const valid_from = Math.floor(Date.now() / 1000) - 86_400;
        selected_playlist.set({
            id: 'pl-1',
            schedules: [{ play_cron: '0 9 * * *', valid_from, mask: '10' }],
        });
        const component = await make();
        expect(component.schedule_labels()[0]).toContain('mask 10');

        // A mask that skips every occurrence never plays
        selected_playlist.set({
            id: 'pl-1',
            schedules: [{ play_cron: '0 9 * * *', valid_from, mask: '00' }],
        });
        expect(component.next_play_sessions()).toEqual([]);
    });

    it.each([0, 1])(
        'applies the validity start to upcoming sessions with offset %s',
        async (offset) => {
            const start = new Date();
            start.setDate(start.getDate() + 2);
            start.setHours(9, 0, 0, 0);
            const timestamp = Math.floor(start.getTime() / 1000);
            const component = await make();
            for (const timing of [
                { play_cron: '0 9 * * *' },
                { play_at: timestamp },
            ]) {
                selected_playlist.set({
                    id: 'pl-1',
                    schedules: [
                        {
                            ...timing,
                            play_period: 30,
                            valid_from: timestamp + offset,
                            valid_until: timestamp,
                        },
                    ],
                });
                expect(component.next_play_sessions()).toHaveLength(
                    offset ? 0 : 1,
                );
            }
        },
    );

    it('resets to the first tab when the selected playlist changes', async () => {
        selected_playlist.set({ id: 'pl-1' });
        const component = await make();
        component.active_tab.set(2);
        selected_playlist.set({ id: 'pl-2' });
        TestBed.flushEffects();
        expect(component.active_tab()).toBe(0);
    });

    it('keeps the active tab when the selected playlist refreshes', async () => {
        selected_playlist.set({ id: 'pl-1', name: 'Lobby' });
        const component = await make();
        component.active_tab.set(2);

        selected_playlist.set({ id: 'pl-1', name: 'Updated Lobby' });
        TestBed.flushEffects();

        expect(component.active_tab()).toBe(2);
    });

    it('routes add/remove display actions through the service', async () => {
        const playlist = { id: 'pl-1' };
        selected_playlist.set(playlist);
        const component = await make();
        const display = { id: 'd-1' };
        const event = { preventDefault: vi.fn(), stopPropagation: vi.fn() };

        component.addDisplay();
        component.removeDisplay(event as any, display);

        expect(add_display).toHaveBeenCalledWith(playlist);
        expect(remove_display).toHaveBeenCalledWith(playlist, display);
        expect(event.preventDefault).toHaveBeenCalled();
        expect(event.stopPropagation).toHaveBeenCalled();
    });

    it('routes add/remove zone actions through the service', async () => {
        const playlist = { id: 'pl-1' };
        selected_playlist.set(playlist);
        const component = await make();
        const zone = { id: 'z-1' };
        const event = { preventDefault: vi.fn(), stopPropagation: vi.fn() };

        component.addZone();
        component.removeZone(event as any, zone);

        expect(add_zone).toHaveBeenCalledWith(playlist);
        expect(remove_zone).toHaveBeenCalledWith(playlist, zone);
    });
});
