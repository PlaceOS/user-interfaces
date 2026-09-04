import { Clipboard } from '@angular/cdk/clipboard';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { UploadCancelledError, UploadsService } from '@placeos/common';
import { mockDirective } from '@placeos/common/tests';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageListFieldComponent } from '../lib/image-list-field.component';

const chipEvent = (value: string): MatChipInputEvent =>
    ({
        value,
        chipInput: { inputElement: { value } },
    }) as unknown as MatChipInputEvent;

describe('ImageListFieldComponent', () => {
    let spectator: Spectator<ImageListFieldComponent>;
    const createComponent = createComponentFactory({
        component: ImageListFieldComponent,
        declarations: [
            MockComponent(IconComponent),
            mockDirective(AuthenticatedImageDirective),
        ],
        providers: [
            MockProvider(UploadsService, {
                uploadFileWithPermissions: vi.fn(() =>
                    Promise.resolve('upload-1'),
                ),
                upload_list: (() => []) as any,
            }),
            MockProvider(Clipboard, { copy: vi.fn(() => true) }),
            MockProvider(MatDialog, {
                open: vi.fn(() => ({ afterClosed: () => of(null) })),
            } as any),
        ],
        imports: [MatChipsModule, MatFormFieldModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should write external values into the list', () => {
        spectator.component.writeValue(['a.png', 'b.png']);
        spectator.detectChanges();
        expect(spectator.component.list()).toEqual(['a.png', 'b.png']);
        expect(spectator.queryAll('mat-chip-row')).toHaveLength(2);
    });

    it('should default missing written values to an empty list', () => {
        spectator.component.writeValue(undefined);
        expect(spectator.component.list()).toEqual([]);
    });

    it('should add a url via the chip input', () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.addImage(chipEvent('new.png'));
        expect(spectator.component.list()).toEqual(['new.png']);
        expect(on_change).toHaveBeenCalledWith(['new.png']);
    });

    it('should not add duplicate urls', () => {
        spectator.component.writeValue(['dup.png']);
        spectator.component.addImageUrl('dup.png');
        expect(spectator.component.list()).toEqual(['dup.png']);
    });

    it('should remove an image and emit the change', () => {
        const on_change = vi.fn();
        spectator.component.writeValue(['a.png', 'b.png']);
        spectator.component.registerOnChange(on_change);
        spectator.component.removeImage('a.png');
        expect(spectator.component.list()).toEqual(['b.png']);
        expect(on_change).toHaveBeenCalledWith(['b.png']);
    });

    it('should copy an image url to the clipboard', () => {
        const clipboard = spectator.inject(Clipboard);
        spectator.component.copyLink('copy.png');
        expect(clipboard.copy).toHaveBeenCalledWith('copy.png');
    });

    it('should open the image viewer dialog', () => {
        const dialog = spectator.inject(MatDialog);
        spectator.component.viewImage('view.png');
        expect(dialog.open).toHaveBeenCalledWith(expect.anything(), {
            data: 'view.png',
        });
    });

    describe('upload failures', () => {
        // Fake notification outlet so notifyError() is observable; it runs for
        // real one layer above this spy.
        const notify_open = vi.fn(() => ({
            onAction: () => of(),
            dismiss: vi.fn(),
        }));
        const fileEvent = (...files: File[]) => ({ target: { files } }) as any;

        beforeEach(() => {
            notify_open.mockClear();
            setNotifyOutlet({ open: notify_open } as any, true);
        });

        afterEach(() => setNotifyOutlet(null, true));

        it('should upload the remaining files after one fails', async () => {
            const uploads = spectator.inject(UploadsService);
            vi.mocked(uploads.uploadFileWithPermissions)
                .mockRejectedValueOnce(
                    new Error('Upload failed with status 500'),
                )
                .mockResolvedValueOnce('upload-2');
            await spectator.component.uploadImages(
                fileEvent(new File([], 'a.png'), new File([], 'b.png')),
            );
            expect(uploads.uploadFileWithPermissions).toHaveBeenCalledTimes(2);
            expect(spectator.component.upload_ids()).toEqual(['upload-2']);
            expect(notify_open).toHaveBeenCalledTimes(1);
        });

        it('should stay silent when the user cancels an upload', async () => {
            const uploads = spectator.inject(UploadsService);
            vi.mocked(uploads.uploadFileWithPermissions).mockRejectedValueOnce(
                new UploadCancelledError(),
            );
            await spectator.component.uploadImages(
                fileEvent(new File([], 'a.png')),
            );
            expect(spectator.component.upload_ids()).toEqual([]);
            expect(notify_open).not.toHaveBeenCalled();
        });
    });
});
