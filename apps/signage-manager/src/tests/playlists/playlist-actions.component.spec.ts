import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SignagePlaylist } from '@placeos/ts-client';
import { PlaylistActionsComponent } from '../../app/playlists/playlist-actions.component';
import { SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import { SignageContextService } from '../../app/signage-context.service';

describe('PlaylistActionsComponent', () => {
    const playlist = new SignagePlaylist({ id: 'playlist-1' });
    const playlist_service = {
        selected_playlist: signal<SignagePlaylist | null>(playlist),
        selected_playlist_requires_approval: signal(true),
        playlist_approval_request_loading: signal(false),
        playlist_duplicating: signal(false),
        approvePlaylist: vi.fn(),
        requestPlaylistApproval: vi.fn(),
        duplicatePlaylist: vi.fn(),
    };
    const can_approve = signal(false);
    const navigate = vi.fn();

    function make() {
        TestBed.configureTestingModule({
            imports: [PlaylistActionsComponent],
            providers: [
                { provide: SignagePlaylistService, useValue: playlist_service },
                {
                    provide: SignageContextService,
                    useValue: {
                        can_approve,
                        can_update: signal(false),
                        can_create: signal(true),
                        can_delete: signal(false),
                        can_share: signal(false),
                    },
                },
                { provide: Router, useValue: { navigate } },
            ],
        });
        const fixture = TestBed.createComponent(PlaylistActionsComponent);
        fixture.detectChanges();
        return fixture;
    }

    function button(element: HTMLElement, label: string) {
        return element.querySelector<HTMLButtonElement>(
            `button[aria-label="${label}"]`,
        );
    }

    beforeEach(() => {
        vi.clearAllMocks();
        playlist_service.selected_playlist.set(playlist);
        playlist_service.selected_playlist_requires_approval.set(true);
        can_approve.set(false);
    });

    it('offers approvers the approval and others a request', () => {
        can_approve.set(true);
        const fixture = make();
        const element: HTMLElement = fixture.nativeElement;

        button(element, 'Approve selected playlist')?.click();
        expect(playlist_service.approvePlaylist).toHaveBeenCalledWith(playlist);
        expect(
            button(element, 'Request approval for selected playlist'),
        ).toBeNull();

        can_approve.set(false);
        fixture.detectChanges();
        button(element, 'Request approval for selected playlist')?.click();
        expect(playlist_service.requestPlaylistApproval).toHaveBeenCalledWith(
            playlist,
        );
        expect(button(element, 'Approve selected playlist')).toBeNull();
    });

    it('offers no approval action for a playlist that needs none', () => {
        playlist_service.selected_playlist_requires_approval.set(false);
        const element: HTMLElement = make().nativeElement;

        expect(button(element, 'Approve selected playlist')).toBeNull();
        expect(
            button(element, 'Request approval for selected playlist'),
        ).toBeNull();
    });

    it('opens the copy after duplicating, and stays when the copy fails', async () => {
        const component = make().componentInstance;
        playlist_service.duplicatePlaylist.mockResolvedValueOnce(
            new SignagePlaylist({ id: 'copy-1' }),
        );

        await component.duplicatePlaylist();

        expect(navigate).toHaveBeenCalledExactlyOnceWith(
            ['/playlists', 'copy-1'],
            { queryParamsHandling: 'merge' },
        );

        playlist_service.duplicatePlaylist.mockResolvedValueOnce(null);
        await component.duplicatePlaylist();

        expect(navigate).toHaveBeenCalledOnce();
    });
});
