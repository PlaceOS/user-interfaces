import { signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { setNotifyOutlet, UploadsService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent } from '@placeos/components';
import { MockProvider } from 'ng-mocks';

import { UploadButtonComponent } from '../../../app/ui/app-settings/upload-button.component';

describe('UploadButtonComponent', () => {
    let spectator: Spectator<UploadButtonComponent>;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: UploadButtonComponent,
        declarations: [mockComponent(IconComponent)],
        providers: [
            MockProvider(UploadsService, {
                uploadFileWithProgress: vi.fn(),
            }),
        ],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        spectator = createComponent();
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
        vi.restoreAllMocks();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should have default state', () => {
        expect(spectator.component.uploading()).toBe(false);
        expect(spectator.component.progress()).toBe(0);
        expect(spectator.component.value()).toBe('');
    });

    it('should implement ControlValueAccessor writeValue', () => {
        spectator.component.writeValue('test-url');
        expect(spectator.component.value()).toBe('test-url');
    });

    it('should register onChange handler', () => {
        const spy = vi.fn();
        spectator.component.registerOnChange(spy);
        spectator.component.setValue('new-value');
        expect(spy).toHaveBeenCalledWith('new-value');
    });

    it('should register onTouched handler', () => {
        const spy = vi.fn();
        spectator.component.registerOnTouched(spy);
        expect(spectator.component).toBeTruthy();
    });

    it('should not trigger onChange when value is same', () => {
        const spy = vi.fn();
        spectator.component.registerOnChange(spy);
        spectator.component.writeValue('same-value');
        spectator.component.setValue('same-value');
        expect(spy).not.toHaveBeenCalled();
    });

    it('should handle image upload', () => {
        const upload_state = signal<any>(null);
        const uploads = spectator.inject(UploadsService);
        (uploads.uploadFileWithProgress as any).mockReturnValue(upload_state);

        const file = new File(['test'], 'test.png', { type: 'image/png' });
        const event = {
            target: { files: [file] } as any,
        } as Event;

        spectator.component.uploadImage(event);
        expect(spectator.component.uploading()).toBe(true);
        expect(uploads.uploadFileWithProgress).toHaveBeenCalledWith(file);
    });

    it('should update progress during upload', () => {
        const upload_state = signal<any>(null);
        const uploads = spectator.inject(UploadsService);
        (uploads.uploadFileWithProgress as any).mockReturnValue(upload_state);

        const file = new File(['test'], 'test.png', { type: 'image/png' });
        const event = {
            target: { files: [file] } as any,
        } as Event;

        spectator.component.uploadImage(event);
        upload_state.set({ progress: 50 });
        spectator.detectChanges();
        expect(spectator.component.progress()).toBe(50);
    });

    it('should set value on upload complete', () => {
        const upload_state = signal<any>(null);
        const uploads = spectator.inject(UploadsService);
        (uploads.uploadFileWithProgress as any).mockReturnValue(upload_state);

        const spy = vi.fn();
        spectator.component.registerOnChange(spy);

        const file = new File(['test'], 'test.png', { type: 'image/png' });
        const event = {
            target: { files: [file] } as any,
        } as Event;

        spectator.component.uploadImage(event);
        upload_state.set({ progress: 100, upload_id: 'upload-123' });
        spectator.detectChanges();

        expect(spectator.component.uploading()).toBe(false);
        expect(spectator.component.value()).toBe(
            '/api/engine/v2/uploads/upload-123/url',
        );
    });

    it('should handle upload error', () => {
        const upload_state = signal<any>(null);
        const uploads = spectator.inject(UploadsService);
        (uploads.uploadFileWithProgress as any).mockReturnValue(upload_state);

        const file = new File(['test'], 'test.png', { type: 'image/png' });
        const event = {
            target: { files: [file] } as any,
        } as Event;

        spectator.component.uploadImage(event);
        upload_state.set({ progress: 0, error: 'Upload failed' });
        spectator.detectChanges();

        expect(notify_open).toHaveBeenCalledWith(
            'Failed to upload image. Try again later',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(spectator.component.uploading()).toBe(false);
    });

    it('should reject non-image files by default', () => {
        const file = new File(['test'], 'test.txt', { type: 'text/plain' });
        const event = {
            target: { files: [file] } as any,
        } as Event;

        spectator.component.uploadImage(event);
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should do nothing when no files selected', () => {
        const uploads = spectator.inject(UploadsService);
        (uploads.uploadFileWithProgress as any).mockClear();

        const event = {
            target: { files: [] } as any,
        } as Event;

        spectator.component.uploadImage(event);
        expect(uploads.uploadFileWithProgress).not.toHaveBeenCalled();
    });

    it('should prevent double upload', () => {
        const upload_state = signal<any>(null);
        const uploads = spectator.inject(UploadsService);
        (uploads.uploadFileWithProgress as any).mockReturnValue(upload_state);

        const file = new File(['test'], 'test.png', { type: 'image/png' });
        const event = {
            target: { files: [file] } as any,
        } as Event;

        spectator.component.uploadImage(event);
        spectator.component.uploadImage(event);
        expect(notify_open).toHaveBeenCalledWith(
            'Already uploading a file...',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should show error when upload completes without upload_id', () => {
        const upload_state = signal<any>(null);
        const uploads = spectator.inject(UploadsService);
        (uploads.uploadFileWithProgress as any).mockReturnValue(upload_state);

        const file = new File(['test'], 'test.png', { type: 'image/png' });
        const event = {
            target: { files: [file] } as any,
        } as Event;

        spectator.component.uploadImage(event);
        upload_state.set({ progress: 100 });
        spectator.detectChanges();

        expect(notify_open).toHaveBeenCalledWith(
            'Failed to get uploaded file ID',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(spectator.component.uploading()).toBe(false);
    });
});
