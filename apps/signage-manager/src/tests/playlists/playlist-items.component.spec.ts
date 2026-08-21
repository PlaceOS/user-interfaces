import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SignagePlaylistItemSchedule } from '@placeos/ts-client';
import { PlaylistItemsComponent } from '../../app/playlists/playlist-items.component';
import { SignageService } from '../../app/signage.service';

function media(id: string, media_type = 'image') {
    return { id, name: id, media_type } as any;
}

describe('PlaylistItemsComponent', () => {
    const selected_playlist = signal<any>(null);
    const selected_playlist_item = signal<any>(null);
    const selected_playlist_item_index = signal<number | null>(null);
    const playlist_media_items = signal<any[]>([]);
    const playlist_item_schedules = signal(
        new Map<string, SignagePlaylistItemSchedule>(),
    );
    const playlist_item_schedule_list = signal<SignagePlaylistItemSchedule[]>(
        [],
    );
    const can_update = signal(true);
    const reorder = vi.fn();
    const remove_media = vi.fn().mockResolvedValue(undefined);
    const preview_media = vi.fn();

    const service_stub = {
        selected_playlist,
        selected_playlist_item,
        selected_playlist_item_index,
        selected_playlist_requires_approval: signal(false),
        can_approve: signal(false),
        can_update,
        can_delete: signal(true),
        can_share: signal(true),
        playlist_media_loading: signal(false),
        playlist_approval_request_loading: signal(false),
        playlist_media_items,
        playlist_item_schedules,
        playlist_item_schedule_list,
        reorderPlaylistMedia: reorder,
        removeMediaFromPlaylist: remove_media,
        previewMedia: preview_media,
        editPlaylistItemSchedule: vi.fn(),
        editPlaylist: vi.fn(),
        removePlaylist: vi.fn(),
        approvePlaylist: vi.fn(),
        requestPlaylistApproval: vi.fn(),
        sharePlaylist: vi.fn(),
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [PlaylistItemsComponent],
            providers: [{ provide: SignageService, useValue: service_stub }],
        })
            .overrideComponent(PlaylistItemsComponent, {
                set: { template: '' },
            })
            .compileComponents();
        return TestBed.createComponent(PlaylistItemsComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        selected_playlist.set(null);
        selected_playlist_item.set(null);
        selected_playlist_item_index.set(null);
        playlist_media_items.set([]);
        playlist_item_schedules.set(new Map());
        playlist_item_schedule_list.set([]);
        can_update.set(true);
    });

    it('selects an item through the shared service signal', async () => {
        const component = await make();
        const item = media('a');
        component.selectItem(item, 0);
        expect(selected_playlist_item()).toBe(item);
        expect(selected_playlist_item_index()).toBe(0);
    });

    it('selects only one occurrence when the playlist contains duplicates', async () => {
        const item = media('a');
        const component = await make();

        component.selectItem(item, 1);

        expect(component.isItemSelected(item, 0)).toBe(false);
        expect(component.isItemSelected(item, 1)).toBe(true);
    });

    it('flags a distribution playlist', async () => {
        selected_playlist.set({ id: 'pl-1', distribution: true });
        const component = await make();
        expect(component.is_distribution()).toBe(true);
    });

    it('prefers the positional schedule when its media matches the item', async () => {
        const item = media('a');
        const positional = new SignagePlaylistItemSchedule({
            item_id: 'a',
            media: item,
        });
        playlist_item_schedule_list.set([positional]);
        const component = await make();
        expect(component.itemSchedule(item, 0)).toBe(positional);
    });

    it('falls back to the schedule map, then a fresh schedule', async () => {
        const item = media('b');
        const mapped = new SignagePlaylistItemSchedule({ item_id: 'b' });
        playlist_item_schedules.set(new Map([['b', mapped]]));
        const component = await make();
        expect(component.itemSchedule(item, 5)).toBe(mapped);

        playlist_item_schedules.set(new Map());
        const fresh = component.itemSchedule(item, 5);
        expect(fresh).toBeInstanceOf(SignagePlaylistItemSchedule);
        expect(fresh.item_id).toBe('b');
    });

    it('toggles a single item schedule open/closed', async () => {
        const item = media('a');
        playlist_media_items.set([item]);
        const component = await make();
        const event = { preventDefault: vi.fn(), stopPropagation: vi.fn() };
        // Schedules default to open.
        expect(component.schedulesOpen(item, 0)).toBe(true);
        component.toggleSchedules(event as any, item, 0);
        expect(component.schedulesOpen(item, 0)).toBe(false);
    });

    it('collapses and expands all schedules together', async () => {
        const items = [media('a'), media('b')];
        playlist_media_items.set(items);
        const component = await make();
        const event = { preventDefault: vi.fn(), stopPropagation: vi.fn() };

        expect(component.allSchedulesCollapsed()).toBe(false);
        component.toggleAllSchedules(event as any);
        expect(component.allSchedulesCollapsed()).toBe(true);
        component.toggleAllSchedules(event as any);
        expect(component.allSchedulesCollapsed()).toBe(false);
    });

    it('builds a tooltip with the next play blocks for a schedule', async () => {
        const component = await make();
        const valid_until = Math.floor(Date.UTC(2027, 0, 2, 18, 45) / 1000);
        const tooltip = component.scheduleTooltip({
            play_cron: '0 9 * * *',
            play_period: 30,
            valid_until,
        });
        expect(tooltip).toContain('–');
        expect(tooltip).toContain(
            new Date(valid_until * 1000).toLocaleString(),
        );
    });

    it('reorders media on drop when updates are permitted', async () => {
        const items = [media('a'), media('b'), media('c')];
        playlist_media_items.set(items);
        selected_playlist.set({ id: 'pl-1' });
        const component = await make();

        await component.onDrop({ previousIndex: 0, currentIndex: 2 } as any);

        expect(reorder).toHaveBeenCalledWith('pl-1', ['b', 'c', 'a']);
    });

    it('does not reorder distribution playlists or without update rights', async () => {
        playlist_media_items.set([media('a'), media('b')]);
        selected_playlist.set({ id: 'pl-1', distribution: true });
        const component = await make();
        await component.onDrop({ previousIndex: 0, currentIndex: 1 } as any);
        expect(reorder).not.toHaveBeenCalled();

        selected_playlist.set({ id: 'pl-1' });
        can_update.set(false);
        await component.onDrop({ previousIndex: 0, currentIndex: 1 } as any);
        expect(reorder).not.toHaveBeenCalled();
    });

    it('removes an item and clears the selection when it was selected', async () => {
        const item = media('a');
        selected_playlist.set({ id: 'pl-1' });
        selected_playlist_item.set(item);
        selected_playlist_item_index.set(3);
        const component = await make();

        await component.removeItem(item, 3);

        expect(remove_media).toHaveBeenCalledWith('pl-1', 'a', 3);
        expect(selected_playlist_item()).toBeNull();
        expect(selected_playlist_item_index()).toBeNull();
    });

    it('removes a distribution schedule by its playlist item id', async () => {
        const item = media('media-1');
        const schedule = new SignagePlaylistItemSchedule({
            id: 'schedule-1',
            item_id: item.id,
            media: item,
        });
        selected_playlist.set({ id: 'pl-1', distribution: true });
        playlist_item_schedule_list.set([schedule]);
        const component = await make();

        await component.removeItem(item, 0);

        expect(remove_media).toHaveBeenCalledWith('pl-1', 'schedule-1', 0);
    });
});
