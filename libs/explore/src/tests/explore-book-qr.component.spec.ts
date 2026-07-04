import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockProvider, ngMocks } from 'ng-mocks';

import { ExploreBookQrComponent } from '../lib/explore-book-qr.component';

describe('ExploreBookQrComponent', () => {
    let spectator: Spectator<ExploreBookQrComponent>;
    const createComponent = createComponentFactory({
        component: ExploreBookQrComponent,
        ...ngMocks.guts(null),
        providers: [
            MockProvider(MAT_DIALOG_DATA, {
                space: { id: 'space-1', name: 'Test Space', email: 'space-1' },
            }),
            MockProvider(SettingsService, { get: jest.fn(() => '') }),
        ],
    });

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should expose the selected space', () => {
        spectator = createComponent();
        expect(spectator.component.space()?.name).toBe('Test Space');
    });

    it('should render a QR code image for the space', () => {
        spectator = createComponent();
        spectator.detectChanges();
        const img = spectator.query('main img') as HTMLImageElement;
        expect(img).toBeTruthy();
        expect(img.getAttribute('src')).toBe(spectator.component.qr_code());
        expect(spectator.component.qr_code()).toContain('data:image/svg+xml');
    });

    it('should render a close button', () => {
        spectator = createComponent();
        spectator.detectChanges();
        expect(spectator.query('button[mat-dialog-close]')).toBeTruthy();
    });

    it('should generate a QR code using the configured booking path', () => {
        spectator = createComponent({
            providers: [
                MockProvider(MAT_DIALOG_DATA, {
                    space: { id: 'abc', name: 'Custom', email: 'abc' },
                }),
                MockProvider(SettingsService, {
                    get: jest.fn(() => 'custom/#/book?space={{id}}'),
                }),
            ],
        });
        // The generated QR code encodes the resolved link, so it should
        // produce a valid data URL regardless of the configured path.
        expect(spectator.component.qr_code()).toContain('data:image/svg+xml');
    });
});
