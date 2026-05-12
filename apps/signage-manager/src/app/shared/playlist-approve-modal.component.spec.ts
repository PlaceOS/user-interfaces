import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { notifyError } from '@placeos/common';
import { approveSignagePlaylist } from '@placeos/ts-client';
import { of, throwError } from 'rxjs';
import { SignageService } from '../signage.service';
import { PlaylistApproveModalComponent } from './playlist-approve-modal.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
    notifySuccess: jest.fn(),
}));

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    approveSignagePlaylist: jest.fn(),
    listSignagePlaylistMediaRevisions: jest.fn(),
    updateSignagePlaylistMedia: jest.fn(),
}));

describe('PlaylistApproveModalComponent', () => {
    const dialog_ref = {
        close: jest.fn(),
        disableClose: false,
    };
    const service = {
        changed: jest.fn(),
        media: of([]),
        previewMedia: jest.fn(),
        setPlaylistApprovalStatus: jest.fn(),
    };

    beforeEach(async () => {
        jest.clearAllMocks();
        dialog_ref.disableClose = false;
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
        (approveSignagePlaylist as jest.Mock).mockReturnValue(
            throwError(() => new Error('Approval failed')),
        );
        const fixture = TestBed.createComponent(PlaylistApproveModalComponent);
        const component = fixture.componentInstance;

        await component.approve();

        expect(component.loading()).toBe('');
        expect(dialog_ref.disableClose).toBe(false);
        expect(service.setPlaylistApprovalStatus).not.toHaveBeenCalled();
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(notifyError).toHaveBeenCalledWith('Error approving playlist');
    });
});
