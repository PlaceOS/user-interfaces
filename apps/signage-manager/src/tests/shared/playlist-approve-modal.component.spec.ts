import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';
import {
    approveSignagePlaylist,
    listSignagePlaylistMediaRevisions,
    updateSignagePlaylistMedia,
} from '@placeos/ts-client';
import { PlaylistApproveModalComponent } from '../../app/shared/playlist-approve-modal.component';
import { SignageService } from '../../app/signage.service';

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
    const service = {
        changed: vi.fn(),
        can_update: signal(true),
        media: signal([]),
        previewMedia: vi.fn(),
        setPlaylistApprovalStatus: vi.fn(),
    };

    beforeEach(async () => {
        vi.clearAllMocks();
        setNotifyOutlet({ open: notify_open } as any, true);
        dialog_ref.disableClose = false;
        service.can_update.set(true);
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
                { provide: SignageService, useValue: service },
            ],
        }).compileComponents();
    });

    it('resets loading state when approval fails', async () => {
        (approveSignagePlaylist as any).mockRejectedValue(
            new Error('Approval failed'),
        );
        const fixture = TestBed.createComponent(PlaylistApproveModalComponent);
        const component = fixture.componentInstance;

        await component.approve();

        expect(component.loading()).toBe('');
        expect(dialog_ref.disableClose).toBe(false);
        expect(service.setPlaylistApprovalStatus).not.toHaveBeenCalled();
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
        service.can_update.set(false);
        const fixture = TestBed.createComponent(PlaylistApproveModalComponent);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        const button_text = fixture.nativeElement.textContent;

        expect(button_text).not.toContain('Undo Changes');
    });

    it('does not undo changes when user does not have update permissions', async () => {
        service.can_update.set(false);
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

    it('shows fallback icons in preview lists', async () => {
        const fixture = TestBed.createComponent(PlaylistApproveModalComponent);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(fixture.nativeElement.textContent).toContain('http');
    });
});
