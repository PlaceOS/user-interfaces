import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';
import {
    approveSignagePlaylist,
    listSignagePlaylistMediaRevisions,
    updateSignagePlaylistMedia,
} from '@placeos/ts-client';
import { SignageMediaService } from '../../app/media/signage-media.service';
import { SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import { PlaylistApproveModalComponent } from '../../app/shared/playlist-approve-modal.component';
import { SignageContextService } from '../../app/signage-context.service';

vi.mock('@placeos/ts-client', { spy: true });

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('PlaylistApproveModalComponent', () => {
    const dialog_ref = {
        close: vi.fn(),
        disableClose: false,
    };
    const context = {
        changed: vi.fn(),
        can_update: signal(true),
    };
    const media_service = {
        media: signal([]),
        previewMedia: vi.fn(),
    };
    const playlist_service = {
        refreshPlaylist: vi.fn(),
        setPlaylistApprovalStatus: vi.fn(),
    };

    beforeEach(async () => {
        vi.clearAllMocks();
        setNotifyOutlet({ open: notify_open } as any, true);
        dialog_ref.disableClose = false;
        context.can_update.set(true);
        playlist_service.refreshPlaylist.mockReset();
        (updateSignagePlaylistMedia as any).mockResolvedValue({});
        (listSignagePlaylistMediaRevisions as any).mockResolvedValue([
            {
                id: 'current-version',
                items: ['media-1', 'media-3'],
                media: [
                    {
                        id: 'media-1',
                        name: 'Media 1',
                    },
                    {
                        id: 'media-3',
                        name: 'Webpage',
                        media_type: 'webpage',
                    },
                ],
                updated_at: 1,
            },
            {
                id: 'previous-version',
                items: ['media-2'],
                media: [{ id: 'media-2', name: 'Media 2' }],
                updated_at: 2,
                approved: true,
            },
        ]);
        await TestBed.configureTestingModule({
            imports: [PlaylistApproveModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: { playlist: { id: 'playlist-1' } },
                },
                { provide: MatDialogRef, useValue: dialog_ref },
                { provide: SignageContextService, useValue: context },
                { provide: SignageMediaService, useValue: media_service },
                { provide: SignagePlaylistService, useValue: playlist_service },
            ],
        }).compileComponents();
    });

    async function render() {
        const fixture = TestBed.createComponent(PlaylistApproveModalComponent);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
        return fixture;
    }

    it('resets loading state when approval fails', async () => {
        (approveSignagePlaylist as any).mockRejectedValue(
            new Error('Approval failed'),
        );
        const fixture = await render();
        const component = fixture.componentInstance;

        await component.approve();

        expect(component.loading()).toBe('');
        expect(dialog_ref.disableClose).toBe(false);
        expect(
            playlist_service.setPlaylistApprovalStatus,
        ).not.toHaveBeenCalled();
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            'Error approving playlist',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('shows undo changes when user has update permissions', async () => {
        const fixture = TestBed.createComponent(PlaylistApproveModalComponent);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        const button_text = fixture.nativeElement.textContent;

        expect(button_text).toContain('Undo Changes');
    });

    it('hides undo changes when user does not have update permissions', async () => {
        context.can_update.set(false);
        const fixture = TestBed.createComponent(PlaylistApproveModalComponent);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        const button_text = fixture.nativeElement.textContent;

        expect(button_text).not.toContain('Undo Changes');
    });

    it('does not undo changes when user does not have update permissions', async () => {
        context.can_update.set(false);
        const fixture = TestBed.createComponent(PlaylistApproveModalComponent);
        const component = fixture.componentInstance;

        await component.undoChanges();

        expect(updateSignagePlaylistMedia).not.toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            'You cannot update playlists in this group.',
            expect.anything(),
            expect.objectContaining({ panelClass: ['warn'] }),
        );
    });

    it('refreshes selected playlist data after undoing changes', async () => {
        const fixture = TestBed.createComponent(PlaylistApproveModalComponent);
        const component = fixture.componentInstance;
        (component as any).playlist_versions = () => [
            { id: 'current-version', items: ['media-1'] },
            { id: 'previous-version', items: ['media-2'] },
        ];

        await component.undoChanges();

        expect(updateSignagePlaylistMedia).toHaveBeenCalledWith('playlist-1', [
            'media-2',
        ]);
        expect(playlist_service.refreshPlaylist).toHaveBeenCalledWith(
            'playlist-1',
        );
    });

    it('blocks approval and shows an error when the versions fail to load', async () => {
        (listSignagePlaylistMediaRevisions as any).mockRejectedValue(
            new Error('Forbidden'),
        );
        const fixture = await render();
        const component = fixture.componentInstance;
        const approve_button = Array.from<HTMLButtonElement>(
            fixture.nativeElement.querySelectorAll('button'),
        ).find((button) => button.textContent?.trim() === 'Approve');

        expect(fixture.nativeElement.textContent).toContain(
            'Could not load the playlist versions.',
        );
        expect(approve_button?.disabled).toBe(true);
        expect(notify_open).toHaveBeenCalledWith(
            'Could not load the playlist versions.',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );

        await component.approve();

        expect(approveSignagePlaylist).not.toHaveBeenCalled();
    });

    it('compares with the last approved version, not the one before', async () => {
        (listSignagePlaylistMediaRevisions as any).mockResolvedValue([
            { id: 'latest', items: ['media-3'], media: [] },
            { id: 'draft', items: ['media-2'], media: [] },
            { id: 'approved', items: ['media-1'], media: [], approved: true },
        ]);
        const fixture = await render();
        const component = fixture.componentInstance;

        expect(component.playlist_versions().map(({ id }) => id)).toEqual([
            'latest',
            'approved',
        ]);

        await component.undoChanges();

        expect(updateSignagePlaylistMedia).toHaveBeenCalledWith('playlist-1', [
            'media-1',
        ]);
    });

    it('shows fallback icons in preview lists', async () => {
        const fixture = TestBed.createComponent(PlaylistApproveModalComponent);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(fixture.nativeElement.textContent).toContain('http');
    });
});
