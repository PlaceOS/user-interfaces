import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';
import {
    listSignagePlaylistMediaRevisions,
    updateSignagePlaylistMedia,
} from '@placeos/ts-client';
import { PlaylistRequestApprovalModalComponent } from '../../app/shared/playlist-request-approval-modal.component';
import { SignageService } from '../../app/signage.service';

vi.mock('@placeos/ts-client', { spy: true });

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('PlaylistRequestApprovalModalComponent', () => {
    const dialog_ref = {
        close: vi.fn(),
        disableClose: false,
    };
    const service = {
        can_update: signal(true),
        changed: vi.fn(),
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
                        name: 'Plugin',
                        media_type: 'plugin',
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
        (updateSignagePlaylistMedia as any).mockResolvedValue({});
        await TestBed.configureTestingModule({
            imports: [PlaylistRequestApprovalModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        playlist: { id: 'playlist-1', name: 'Lobby Loop' },
                        approvers: [
                            { id: 'person-1', name: 'Person One' },
                            { id: 'person-2', name: 'Person Two' },
                        ],
                    },
                },
                { provide: MatDialogRef, useValue: dialog_ref },
                { provide: SignageService, useValue: service },
            ],
        }).compileComponents();
    });

    it('defaults approval requests to anyone', () => {
        const fixture = TestBed.createComponent(
            PlaylistRequestApprovalModalComponent,
        );
        const component = fixture.componentInstance;

        component.submit();

        expect(dialog_ref.close).toHaveBeenCalledWith({
            approver_id: '',
            message: '',
        });
    });

    it('returns the selected approver id', () => {
        const fixture = TestBed.createComponent(
            PlaylistRequestApprovalModalComponent,
        );
        const component = fixture.componentInstance;
        component.selected_approver_id.set('person-2');
        component.message.set(' Please review ');

        component.submit();

        expect(dialog_ref.close).toHaveBeenCalledWith({
            approver_id: 'person-2',
            message: 'Please review',
        });
    });

    it('shows approval changes when preview is toggled on', async () => {
        const fixture = TestBed.createComponent(
            PlaylistRequestApprovalModalComponent,
        );
        const component = fixture.componentInstance;
        fixture.detectChanges();

        expect(fixture.nativeElement.textContent).not.toContain('New Version');

        component.togglePreview();
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(fixture.nativeElement.textContent).toContain('New Version');
        expect(fixture.nativeElement.textContent).toContain('Old version');
    });

    it('hides the request form when preview is toggled on', async () => {
        const fixture = TestBed.createComponent(
            PlaylistRequestApprovalModalComponent,
        );
        const component = fixture.componentInstance;
        fixture.detectChanges();

        expect(fixture.nativeElement.textContent).toContain('Approver');
        expect(fixture.nativeElement.textContent).toContain('Message');
        expect(fixture.nativeElement.textContent).toContain('Request Approval');
        expect(fixture.nativeElement.querySelector('textarea')).toBeTruthy();

        component.togglePreview();
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(fixture.nativeElement.textContent).not.toContain('Approver');
        expect(fixture.nativeElement.textContent).not.toContain('Message');
        expect(fixture.nativeElement.querySelector('textarea')).toBeFalsy();
        const button_text = Array.from(
            fixture.nativeElement.querySelectorAll('button'),
        ).map((button: HTMLButtonElement) => button.textContent?.trim());
        expect(button_text).not.toContain('Request Approval');
        expect(button_text).not.toContain('Cancel');
        expect(fixture.nativeElement.textContent).toContain('New Version');
    });

    it('shows fallback icons in preview lists', async () => {
        const fixture = TestBed.createComponent(
            PlaylistRequestApprovalModalComponent,
        );
        const component = fixture.componentInstance;
        component.togglePreview();
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(fixture.nativeElement.textContent).toContain('extension');
    });

    it('shows undo changes in preview when user has update permissions', async () => {
        const fixture = TestBed.createComponent(
            PlaylistRequestApprovalModalComponent,
        );
        const component = fixture.componentInstance;
        component.togglePreview();
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(fixture.nativeElement.textContent).toContain('Undo Changes');
    });

    it('hides undo changes in preview when user does not have update permissions', async () => {
        service.can_update.set(false);
        const fixture = TestBed.createComponent(
            PlaylistRequestApprovalModalComponent,
        );
        const component = fixture.componentInstance;
        component.togglePreview();
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(fixture.nativeElement.textContent).not.toContain('Undo Changes');
    });

    it('does not undo changes when user does not have update permissions', async () => {
        service.can_update.set(false);
        const fixture = TestBed.createComponent(
            PlaylistRequestApprovalModalComponent,
        );
        const component = fixture.componentInstance;

        await component.undoChanges();

        expect(updateSignagePlaylistMedia).not.toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            'You cannot update playlists in this group.',
            expect.anything(),
            expect.objectContaining({ panelClass: ['warn'] }),
        );
    });

    it('reverts playlist media to the previous version', async () => {
        const fixture = TestBed.createComponent(
            PlaylistRequestApprovalModalComponent,
        );
        const component = fixture.componentInstance;
        fixture.detectChanges();

        await component.undoChanges();

        expect(updateSignagePlaylistMedia).toHaveBeenCalledWith('playlist-1', [
            'media-2',
        ]);
        expect(service.setPlaylistApprovalStatus).toHaveBeenCalledWith(
            'playlist-1',
            false,
        );
        expect(dialog_ref.close).toHaveBeenCalledWith();
        expect(service.changed).toHaveBeenCalled();
    });
});
