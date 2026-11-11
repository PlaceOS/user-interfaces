import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { UploadsService } from '@placeos/common';
import { mockDirective } from '@placeos/common/tests';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageFieldComponent } from '../lib/image-field.component';

describe('ImageFieldComponent', () => {
    let spectator: Spectator<ImageFieldComponent>;
    const createComponent = createComponentFactory({
        component: ImageFieldComponent,
        declarations: [
            MockComponent(IconComponent),
            mockDirective(AuthenticatedImageDirective),
        ],
        providers: [
            MockProvider(UploadsService, {
                uploadFileWithProgress: vi.fn(() => signal(null)),
            }),
            MockProvider(Clipboard, { copy: vi.fn(() => true) }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should show the upload prompt when empty', () => {
        expect(spectator.query('img[auth]')).toBeNull();
    });

    it('should render the image when a url is present', () => {
        spectator.component.writeValue('https://example.com/image.png');
        spectator.detectChanges();
        expect(spectator.component.url()).toBe('https://example.com/image.png');
        expect(spectator.query('img[auth]')).not.toBeNull();
    });

    it('should clear the current image from the clear button', () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.writeValue('https://example.com/image.png');
        spectator.detectChanges();

        spectator.click('button[clear-image]');

        expect(spectator.component.url()).toBe('');
        expect(on_change).toHaveBeenCalledWith('');
    });

    it('should copy the current url to the clipboard', () => {
        const clipboard = spectator.inject(Clipboard);
        spectator.component.writeValue('https://example.com/copy.png');
        spectator.component.copyLink();
        expect(clipboard.copy).toHaveBeenCalledWith(
            'https://example.com/copy.png',
        );
    });

    it('should not upload a file that is not an image', () => {
        const uploads = spectator.inject(UploadsService);
        vi.mocked(uploads.uploadFileWithProgress).mockClear();
        const element = {
            value: 'C:\\fakepath\\a.pdf',
            files: [new File([], 'a.pdf', { type: 'application/pdf' })],
        };
        spectator.component.uploadImage({ target: element } as any);
        expect(uploads.uploadFileWithProgress).not.toHaveBeenCalled();
        expect(spectator.component.uploading()).toBe(false);
        expect(element.value).toBe('');
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

        it('should report an upload that fails before it starts', () => {
            const uploads = spectator.inject(UploadsService);
            vi.mocked(uploads.uploadFileWithProgress).mockReturnValueOnce(
                signal(new Error('Commit failed with status 401')) as any,
            );
            spectator.component.uploadImage(
                fileEvent(new File([], 'a.png', { type: 'image/png' })),
            );
            TestBed.tick();
            expect(notify_open).toHaveBeenCalled();
            expect(spectator.component.progress()).toBe(0);
            expect(spectator.component.uploading()).toBe(false);
        });

        it('should report an upload that fails after it starts', () => {
            const uploads = spectator.inject(UploadsService);
            vi.mocked(uploads.uploadFileWithProgress).mockReturnValueOnce(
                signal({
                    id: 'upload-1',
                    progress: 20,
                    error: 'Denied',
                }) as any,
            );
            spectator.component.uploadImage(
                fileEvent(new File([], 'a.png', { type: 'image/png' })),
            );
            TestBed.tick();
            expect(notify_open).toHaveBeenCalledTimes(1);
            expect(spectator.component.uploading()).toBe(false);
        });

        it('should set the upload url when the upload completes', () => {
            const uploads = spectator.inject(UploadsService);
            vi.mocked(uploads.uploadFileWithProgress).mockReturnValueOnce(
                signal({ id: 'x', upload_id: 'up 1', progress: 100 }) as any,
            );
            spectator.component.uploadImage(
                fileEvent(new File([], 'a.png', { type: 'image/png' })),
            );
            TestBed.tick();
            expect(spectator.component.url()).toBe(
                '/api/engine/v2/uploads/up%201/url',
            );
            expect(spectator.component.uploading()).toBe(false);
        });
    });
});
