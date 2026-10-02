import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { setNotifyOutlet } from '@placeos/common';
import { PlaylistsSectionComponent } from '../../app/playlists/playlists.component';
import { SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import { SignageContextService } from '../../app/signage-context.service';

describe('PlaylistsSectionComponent', () => {
    const selected_playlist = signal<any>(null);
    const selected_playlist_item = signal<any>(null);
    const selected_playlist_item_index = signal<number | null>(null);
    const playlists = signal<any[]>([]);
    const playlist_media_items = signal<any[]>([]);
    const playlists_loading = signal(false);
    const can_query = signal(true);
    const navigate = vi.fn();
    const load_playlist = vi.fn();
    const notify_open = vi.fn(() => ({
        onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
        dismiss: vi.fn(),
    }));

    const playlist_stub = {
        selected_playlist,
        selected_playlist_item,
        selected_playlist_item_index,
        playlists,
        playlist_media_items,
        playlists_loading,
        loadPlaylist: load_playlist,
    };

    let fixture: ComponentFixture<PlaylistsSectionComponent>;

    async function make() {
        await TestBed.configureTestingModule({
            imports: [PlaylistsSectionComponent],
            providers: [
                { provide: SignagePlaylistService, useValue: playlist_stub },
                {
                    provide: SignageContextService,
                    useValue: { canQueryLists: () => can_query() },
                },
                { provide: Router, useValue: { navigate } },
                { provide: ActivatedRoute, useValue: {} },
            ],
        })
            .overrideComponent(PlaylistsSectionComponent, {
                set: { template: '' },
            })
            .compileComponents();
        fixture = TestBed.createComponent(PlaylistsSectionComponent);
        return fixture.componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        selected_playlist.set(null);
        selected_playlist_item.set(null);
        selected_playlist_item_index.set(null);
        playlists.set([]);
        playlist_media_items.set([]);
        playlists_loading.set(false);
        can_query.set(true);
        setNotifyOutlet({ open: notify_open } as unknown as MatSnackBar, true);
    });

    it('syncs the active view tab from the route', async () => {
        const component = await make();
        fixture.componentRef.setInput('tab', 'details');
        fixture.detectChanges();
        expect(component.view_tab()).toBe('details');
    });

    it('selects the playlist that matches the route id', async () => {
        const match = { id: 'pl-2', name: 'Second' };
        playlists.set([{ id: 'pl-1' }, match]);
        await make();
        fixture.componentRef.setInput('id', 'pl-2');
        fixture.detectChanges();
        expect(selected_playlist()).toBe(match);
        expect(selected_playlist_item()).toBeNull();
    });

    it('fetches and selects a linked playlist that is not in the loaded pages', async () => {
        const linked = { id: 'pl-9', name: 'Linked' };
        playlists.set([{ id: 'pl-1' }]);
        load_playlist.mockImplementationOnce(async () => {
            playlists.update((list) => [...list, linked]);
            return linked;
        });
        await make();
        fixture.componentRef.setInput('id', 'pl-9');
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(load_playlist).toHaveBeenCalledOnce();
        expect(load_playlist).toHaveBeenCalledWith('pl-9');
        expect(selected_playlist()).toBe(linked);
    });

    it('fetches a linked playlist when the loaded pages are empty', async () => {
        const linked = { id: 'pl-9', name: 'Linked' };
        load_playlist.mockImplementationOnce(async () => {
            playlists.set([linked]);
            return linked;
        });
        await make();
        fixture.componentRef.setInput('id', 'pl-9');
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(load_playlist).toHaveBeenCalledWith('pl-9');
        expect(selected_playlist()).toBe(linked);
    });

    it('waits for the first page before fetching a linked playlist', async () => {
        playlists_loading.set(true);
        await make();
        fixture.componentRef.setInput('id', 'pl-9');
        fixture.detectChanges();
        expect(load_playlist).not.toHaveBeenCalled();

        playlists_loading.set(false);
        fixture.detectChanges();
        expect(load_playlist).toHaveBeenCalledWith('pl-9');
    });

    it('warns when a linked playlist cannot be loaded', async () => {
        load_playlist.mockResolvedValueOnce(null);
        await make();
        fixture.componentRef.setInput('id', 'missing');
        fixture.detectChanges();
        await fixture.whenStable();

        expect(notify_open).toHaveBeenCalledWith(
            expect.stringContaining('Could not open the playlist'),
            expect.anything(),
            expect.anything(),
        );
    });

    it('clears the selection when a linked playlist cannot be loaded', async () => {
        const open = { id: 'pl-1' };
        playlists.set([open]);
        await make();
        fixture.componentRef.setInput('id', 'pl-1');
        fixture.detectChanges();
        expect(selected_playlist()).toBe(open);

        load_playlist.mockResolvedValueOnce(null);
        fixture.componentRef.setInput('id', 'deleted');
        fixture.detectChanges();
        await fixture.whenStable();

        expect(selected_playlist()).toBeNull();
    });

    it('clears the selection once the route id is removed', async () => {
        const match = { id: 'pl-1' };
        playlists.set([match]);
        await make();
        fixture.componentRef.setInput('id', 'pl-1');
        fixture.detectChanges();
        expect(selected_playlist()).toBe(match);

        fixture.componentRef.setInput('id', '');
        fixture.detectChanges();
        expect(selected_playlist()).toBeNull();
    });

    it('selects the media item named by the query param', async () => {
        const item = { id: 'm-2' };
        playlist_media_items.set([{ id: 'm-1' }, item]);
        await make();
        fixture.componentRef.setInput('item', 'm-2');
        fixture.detectChanges();
        expect(selected_playlist_item()).toBe(item);
        expect(selected_playlist_item_index()).toBe(1);
    });

    it('navigates when switching the view tab', async () => {
        const component = await make();
        component.setViewTab('details');
        expect(component.view_tab()).toBe('details');
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({
                queryParams: { tab: 'details' },
                replaceUrl: true,
            }),
        );
    });

    it('does not navigate when the tab is unchanged', async () => {
        const component = await make();
        component.setViewTab('items');
        expect(navigate).not.toHaveBeenCalled();
    });

    it('deselects the playlist and returns to the list', async () => {
        selected_playlist.set({ id: 'pl-1' });
        selected_playlist_item.set({ id: 'm-1' });
        const component = await make();
        component.deselectPlaylist();
        expect(selected_playlist()).toBeNull();
        expect(selected_playlist_item()).toBeNull();
        expect(navigate).toHaveBeenCalledWith(['/playlists'], {});
    });
});
