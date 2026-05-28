import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { notifyWarn } from '@placeos/common';
import {
    listSignagePlaylistMediaRevisions,
    updateSignagePlaylistMedia,
} from '@placeos/ts-client';
import { of } from 'rxjs';
import { SignageService } from '../signage.service';
import { PlaylistRequestApprovalModalComponent } from './playlist-request-approval-modal.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
    notifySuccess: jest.fn(),
    notifyWarn: jest.fn(),
}));

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    listSignagePlaylistMediaRevisions: jest.fn(),
    updateSignagePlaylistMedia: jest.fn(),
}));

describe('PlaylistRequestApprovalModalComponent', () => {
    const dialog_ref = {
        close: jest.fn(),
        disableClose: false,
    };
    const service = {
        can_update: signal(true),
        changed: jest.fn(),
        previewMedia: jest.fn(),
        setPlaylistApprovalStatus: jest.fn(),
    };

    beforeEach(async () => {
        jest.clearAllMocks();
        dialog_ref.disableClose = false;
        service.can_update.set(true);
        (listSignagePlaylistMediaRevisions as jest.Mock).mockReturnValue(
            of([
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
            ]),
        );
        (updateSignagePlaylistMedia as jest.Mock).mockReturnValue(of({}));
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

        expect(fixture.nativeElement.textContent).not.toContain(
            'Version to approve',
        );

        component.show_preview.set(true);
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();

        expect(fixture.nativeElement.textContent).toContain(
            'Version to approve',
        );
        expect(fixture.nativeElement.textContent).toContain(
            'Previous version',
        );
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

        component.show_preview.set(true);
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
        expect(fixture.nativeElement.textContent).toContain(
            'Version to approve',
        );
    });

    it('shows fallback icons in preview lists', async () => {
        const fixture = TestBed.createComponent(
            PlaylistRequestApprovalModalComponent,
        );
        const component = fixture.componentInstance;
        component.show_preview.set(true);
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
        component.show_preview.set(true);
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
        component.show_preview.set(true);
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
        expect(notifyWarn).toHaveBeenCalledWith(
            'You cannot update playlists in this group.',
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
