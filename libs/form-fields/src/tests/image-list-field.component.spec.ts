import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import type { Mock } from 'vitest';

import { UploadDetails, UploadsService } from '@placeos/common';
import { mockDirective } from '@placeos/common/tests';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageListFieldComponent } from '../lib/image-list-field.component';

/** Upload state as `UploadsService.uploadFileWithProgress` reports it */
const uploadState = (details: Partial<UploadDetails>) =>
    signal({
        id: 'upload-1',
        name: 'a.png',
        progress: 0,
        link: '',
        formatted_size: '',
        size: 0,
        upload: null,
        ...details,
    } as UploadDetails);

const chipEvent = (value: string): MatChipInputEvent =>
    ({
        value,
        chipInput: { inputElement: { value } },
    }) as unknown as MatChipInputEvent;

describe('ImageListFieldComponent', () => {
    let spectator: Spectator<ImageListFieldComponent>;
    /** The mocked upload method, typed as a plain mock */
    const uploadMock = () =>
        spectator.inject(UploadsService)
            .uploadFileWithProgress as unknown as Mock;
    const createComponent = createComponentFactory({
        component: ImageListFieldComponent,
        declarations: [
            MockComponent(IconComponent),
            mockDirective(AuthenticatedImageDirective),
        ],
        providers: [
            MockProvider(UploadsService, {
                uploadFileWithProgress: vi.fn(() => signal(null)),
            }),
            MockProvider(Clipboard, { copy: vi.fn(() => true) }),
            MockProvider(MatDialog, {
                open: vi.fn(() => ({ afterClosed: () => of(null) })),
            } as any),
        ],
        imports: [MatChipsModule, MatFormFieldModule],
    });

    beforeEach(() => {
        spectator = createComponent();
        uploadMock().mockClear();
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

    it('should count pending uploads in the carousel length', () => {
        spectator.component.writeValue(['existing.png']);
        spectator.component.uploadImages({
            target: { files: [new File([], 'a.png')] },
        });
        expect(spectator.component.uploads()).toHaveLength(1);
        expect(spectator.component.length()).toBe(3);
    });

    it('should add a completed upload to the list', () => {
        uploadMock().mockReturnValueOnce(
            uploadState({ progress: 100, link: 'https://x/a.png' }),
        );
        spectator.component.uploadImages({
            target: { files: [new File([], 'a.png')] },
        });
        TestBed.tick();
        expect(spectator.component.list()).toEqual(['https://x/a.png']);
        expect(spectator.component.uploads()).toHaveLength(0);
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

        it('should upload the remaining files after one fails', () => {
            uploadMock()
                .mockReturnValueOnce(uploadState({ error: 'Status 500' }))
                .mockReturnValueOnce(
                    uploadState({ progress: 100, link: 'https://x/b.png' }),
                );
            spectator.component.uploadImages(
                fileEvent(new File([], 'a.png'), new File([], 'b.png')),
            );
            TestBed.tick();
            expect(uploadMock()).toHaveBeenCalledTimes(2);
            expect(spectator.component.list()).toEqual(['https://x/b.png']);
            expect(spectator.component.uploads()[0].error).toBe('Status 500');
            expect(notify_open).toHaveBeenCalledTimes(1);
        });

        it('should upload a failed file again on retry', () => {
            uploadMock().mockReturnValueOnce(
                uploadState({ error: 'Status 500' }),
            );
            const file = new File([], 'a.png');
            spectator.component.uploadImages(fileEvent(file));
            TestBed.tick();
            spectator.component.retryUpload(spectator.component.uploads()[0]);
            expect(uploadMock()).toHaveBeenLastCalledWith(file);
            expect(spectator.component.uploads()).toHaveLength(1);
            expect(spectator.component.uploads()[0].error).toBeUndefined();
        });
    });
});
