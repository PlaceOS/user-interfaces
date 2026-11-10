import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';
import { SignageMedia } from '@placeos/ts-client';
import {
    BulkMediaUploadModalComponent,
    BulkMediaUploadModalData,
} from '../../app/shared/bulk-media-upload-modal.component';

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
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
        close: vi.fn(),
        disableClose: false,
    };
    const onUpload = vi.fn();
    let modal_data: BulkMediaUploadModalData;

    beforeEach(async () => {
        vi.clearAllMocks();
        setNotifyOutlet({ open: notify_open } as any, true);
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

    it('uploads every file and closes', async () => {
        const fixture = TestBed.createComponent(BulkMediaUploadModalComponent);
        const component = fixture.componentInstance;

        await component.uploadAll();

        expect(onUpload).toHaveBeenCalledTimes(2);
        expect(onUpload).toHaveBeenCalledWith(
            modal_data.items[0],
            expect.any(Function),
        );
        expect(component.done_count()).toBe(2);
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
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
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(dialog_ref.close).not.toHaveBeenCalled();

        await component.uploadAll();

        expect(onUpload).toHaveBeenCalledTimes(3);
        expect(component.error_count()).toBe(0);
        expect(component.done_count()).toBe(2);
        expect(dialog_ref.close).toHaveBeenCalledWith(2);
    });

    it('stops after the current file when cancelled', async () => {
        const fixture = TestBed.createComponent(BulkMediaUploadModalComponent);
        const component = fixture.componentInstance;
        onUpload.mockImplementationOnce(async () => {
            component.stop();
            return new SignageMedia({ id: 'media-1' });
        });

        await component.uploadAll();

        expect(onUpload).toHaveBeenCalledOnce();
        expect(component.done_count()).toBe(1);
        expect(component.remaining_count()).toBe(1);
        expect(component.stopping()).toBe(false);
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });

    it('tracks upload progress for the active row', async () => {
        onUpload.mockImplementation(async (_item, on_progress) => {
            on_progress(42.5);
            return new SignageMedia({ id: 'media-1' });
        });
        const fixture = TestBed.createComponent(BulkMediaUploadModalComponent);
        const component = fixture.componentInstance;
        const progress_values: number[] = [];
        onUpload.mockImplementationOnce(async (_item, on_progress) => {
            on_progress(42.5);
            progress_values.push(component.rows()[0].progress);
            return new SignageMedia({ id: 'media-1' });
        });

        await component.uploadAll();

        expect(progress_values).toEqual([42]);
        expect(component.rows()[0].progress).toBe(100);
    });

    it('lists an item made at upload time by its name and image size', async () => {
        modal_data.items = [
            {
                media_type: 'image',
                name: 'deck - page 1',
                metadata: {
                    is_landscape: true,
                    duration: 0,
                    width: 3840,
                    height: 2160,
                },
                loadFile: vi.fn(),
            },
        ];
        const fixture = TestBed.createComponent(BulkMediaUploadModalComponent);

        expect(fixture.componentInstance.rows()[0]).toMatchObject({
            name: 'deck - page 1',
            formatted_size: '3840 × 2160',
        });
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

    it('starts uploading as it opens when asked to', async () => {
        modal_data.auto_start = true;
        TestBed.resetTestingModule();
        await TestBed.configureTestingModule({
            imports: [BulkMediaUploadModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: modal_data },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        }).compileComponents();
        const fixture = TestBed.createComponent(BulkMediaUploadModalComponent);
        fixture.detectChanges();

        expect(onUpload).toHaveBeenCalledWith(
            modal_data.items[0],
            expect.any(Function),
        );
        await vi.waitFor(() =>
            expect(dialog_ref.close).toHaveBeenCalledWith(2),
        );
        expect(onUpload).toHaveBeenCalledTimes(2);
    });
});
