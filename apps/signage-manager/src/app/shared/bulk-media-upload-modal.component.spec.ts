import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { notifyError, notifySuccess } from '@placeos/common';
import { SignageMedia } from '@placeos/ts-client';
import {
    BulkMediaUploadModalComponent,
    BulkMediaUploadModalData,
} from './bulk-media-upload-modal.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
    notifySuccess: jest.fn(),
}));

function uploadItem(name: string) {
    return {
        file: new File(['image'], name, { type: 'image/png' }),
        media_type: 'image' as const,
        metadata: { is_landscape: true, duration: 0, width: 192, height: 108 },
    };
}

describe('BulkMediaUploadModalComponent', () => {
    const dialog_ref = {
        close: jest.fn(),
        disableClose: false,
    };
    const onUpload = jest.fn();
    let modal_data: BulkMediaUploadModalData;

    beforeEach(async () => {
        jest.clearAllMocks();
        dialog_ref.disableClose = false;
        onUpload.mockResolvedValue(new SignageMedia({ id: 'media-1' }));
        modal_data = {
            items: [uploadItem('one.png'), uploadItem('two.png')],
            onUpload,
        };
        await TestBed.configureTestingModule({
            imports: [BulkMediaUploadModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: modal_data },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        })
            .overrideComponent(BulkMediaUploadModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
    });

    it('uploads every file with the selected permissions and closes', async () => {
        const fixture = TestBed.createComponent(BulkMediaUploadModalComponent);
        const component = fixture.componentInstance;
        component.permissions.set('support');

        await component.uploadAll();

        expect(onUpload).toHaveBeenCalledTimes(2);
        expect(onUpload).toHaveBeenCalledWith(
            modal_data.items[0],
            'support',
            expect.any(Function),
        );
        expect(component.done_count()).toBe(2);
        expect(notifySuccess).toHaveBeenCalled();
        expect(dialog_ref.close).toHaveBeenCalledWith(2);
        expect(dialog_ref.disableClose).toBe(false);
    });

    it('keeps the dialog open when uploads fail and retries only failures', async () => {
        onUpload
            .mockRejectedValueOnce(new Error('Network error'))
            .mockResolvedValue(new SignageMedia({ id: 'media-1' }));
        const fixture = TestBed.createComponent(BulkMediaUploadModalComponent);
        const component = fixture.componentInstance;

        await component.uploadAll();

        expect(component.error_count()).toBe(1);
        expect(component.done_count()).toBe(1);
        expect(component.rows()[0].error).toBe('Network error');
        expect(notifyError).toHaveBeenCalled();
        expect(dialog_ref.close).not.toHaveBeenCalled();

        await component.uploadAll();

        expect(onUpload).toHaveBeenCalledTimes(3);
        expect(component.error_count()).toBe(0);
        expect(component.done_count()).toBe(2);
        expect(dialog_ref.close).toHaveBeenCalledWith(2);
    });

    it('tracks upload progress for the active row', async () => {
        onUpload.mockImplementation(
            async (_item, _permissions, on_progress) => {
                on_progress(42.5);
                return new SignageMedia({ id: 'media-1' });
            },
        );
        const fixture = TestBed.createComponent(BulkMediaUploadModalComponent);
        const component = fixture.componentInstance;
        const progress_values: number[] = [];
        onUpload.mockImplementationOnce(
            async (_item, _permissions, on_progress) => {
                on_progress(42.5);
                progress_values.push(component.rows()[0].progress);
                return new SignageMedia({ id: 'media-1' });
            },
        );

        await component.uploadAll();

        expect(progress_values).toEqual([42]);
        expect(component.rows()[0].progress).toBe(100);
    });

    it('removes rows and closes the dialog when the list empties', () => {
        const fixture = TestBed.createComponent(BulkMediaUploadModalComponent);
        const component = fixture.componentInstance;

        component.removeRow(component.rows()[0]);

        expect(component.rows().length).toBe(1);
        expect(dialog_ref.close).not.toHaveBeenCalled();

        component.removeRow(component.rows()[0]);

        expect(component.rows().length).toBe(0);
        expect(dialog_ref.close).toHaveBeenCalled();
    });
});
