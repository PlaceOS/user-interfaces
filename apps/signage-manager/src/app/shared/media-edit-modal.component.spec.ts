import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { notifyError, notifySuccess } from '@placeos/common';
import { SignageMedia } from '@placeos/ts-client';
import {
    MediaEditModalComponent,
    MediaEditModalData,
} from './media-edit-modal.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
    notifySuccess: jest.fn(),
}));

describe('MediaEditModalComponent', () => {
    const dialog_ref = {
        close: jest.fn(),
        disableClose: false,
    };
    const onAdd = jest.fn();
    const onEdit = jest.fn();
    let modal_data: MediaEditModalData;

    beforeEach(async () => {
        jest.clearAllMocks();
        dialog_ref.disableClose = false;
        onAdd.mockResolvedValue(new SignageMedia({ id: 'media-1' }));
        onEdit.mockResolvedValue(undefined);
        modal_data = {
            media: new SignageMedia({}),
            file: new File(['image'], 'poster.png', { type: 'image/png' }),
            file_metadata: {
                is_landscape: true,
                duration: 0,
                width: 1920,
                height: 1080,
            },
            onAdd,
            onEdit,
            preview: jest.fn(),
        };
        await TestBed.configureTestingModule({
            imports: [MediaEditModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: modal_data },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        })
            .overrideComponent(MediaEditModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
    });

    it('keeps the dialog open and resets loading when an upload fails', async () => {
        onAdd.mockRejectedValue({ error: 'Upload failed' });
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        const component = fixture.componentInstance;

        await expect(component.saveMedia()).resolves.toBeUndefined();

        expect(component.loading()).toBe(false);
        expect(dialog_ref.disableClose).toBe(false);
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(notifySuccess).not.toHaveBeenCalled();
        expect(notifyError).toHaveBeenCalledWith(
            'Failed to save media item. Error: Upload failed',
        );
    });

    it('shows a readable message when the upload is cancelled', async () => {
        onAdd.mockRejectedValue(undefined);
        const fixture = TestBed.createComponent(MediaEditModalComponent);
        const component = fixture.componentInstance;

        await component.saveMedia();

        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(notifyError).toHaveBeenCalledWith(
            'Failed to save media item. Error: Media upload was cancelled.',
        );
    });
});
