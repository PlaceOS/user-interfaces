import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistsSectionComponent } from '../../app/playlists/playlists.component';
import { SignageService } from '../../app/signage.service';

describe('PlaylistsSectionComponent', () => {
    const selected_playlist = signal<any>(null);
    const selected_playlist_item = signal<any>(null);
    const playlists = signal<any[]>([]);
    const playlist_media_items = signal<any[]>([]);
    const navigate = vi.fn();

    const service_stub = {
        selected_playlist,
        selected_playlist_item,
        selected_playlist_requires_approval: signal(false),
        can_approve: signal(false),
        can_update: signal(true),
        can_delete: signal(true),
        can_share: signal(true),
        playlist_approval_request_loading: signal(false),
        playlists,
        playlist_media_items,
        editPlaylist: vi.fn(),
        removePlaylist: vi.fn(),
        approvePlaylist: vi.fn(),
        requestPlaylistApproval: vi.fn(),
        sharePlaylist: vi.fn(),
    };

    let fixture: ComponentFixture<PlaylistsSectionComponent>;

    async function make() {
        await TestBed.configureTestingModule({
            imports: [PlaylistsSectionComponent],
            providers: [
                { provide: SignageService, useValue: service_stub },
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
        playlists.set([]);
        playlist_media_items.set([]);
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
