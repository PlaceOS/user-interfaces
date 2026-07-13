import { Clipboard } from '@angular/cdk/clipboard';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { UploadsService } from '@placeos/common';
import { mockDirective } from '@placeos/common/tests';
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
                uploadFileWithPermissions: vi.fn(() =>
                    Promise.resolve('upload-1'),
                ),
                upload_list: (() => []) as any,
            }),
            MockProvider(Clipboard, { copy: vi.fn(() => true) }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show the upload prompt when empty', () => {
        expect(spectator.query('img[auth]')).toBeNull();
    });

    it('should render the image when a url is present', () => {
        spectator.component.writeValue('https://example.com/image.png');
        spectator.detectChanges();
        expect(spectator.component.url()).toBe('https://example.com/image.png');
        expect(spectator.query('img[auth]')).not.toBeNull();
    });

    it('should emit changes when the value is set', async () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        await spectator.component.setValue('https://example.com/new.png');
        expect(on_change).toHaveBeenCalledWith('https://example.com/new.png');
    });

    it('should copy the current url to the clipboard', () => {
        const clipboard = spectator.inject(Clipboard);
        spectator.component.writeValue('https://example.com/copy.png');
        spectator.component.copyLink();
        expect(clipboard.copy).toHaveBeenCalledWith(
            'https://example.com/copy.png',
        );
    });

    it('should reflect the disabled state', () => {
        expect(spectator.component.disabled()).toBe(false);
        spectator.component.setDisabledState(true);
        expect(spectator.component.disabled()).toBe(true);
    });
});
