import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { generateQRCode } from '@placeos/common/qr-code';
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
            MockProvider(SettingsService, { get: vi.fn(() => '') } as any),
        ],
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

    it('should link the QR code to the explore page for the space email', () => {
        spectator = createComponent();
        expect(spectator.component.qr_code()).toBe(
            generateQRCode(
                `${location.origin}workplace/#/explore?space=space-1`,
            ),
        );
    });

    it('should link the QR code to the configured booking path', () => {
        spectator = createComponent({
            providers: [
                MockProvider(MAT_DIALOG_DATA, {
                    space: {
                        id: 'abc',
                        name: 'Custom',
                        email: 'abc@place.tech',
                    },
                }),
                MockProvider(SettingsService, {
                    get: vi.fn(() => 'custom/#/book?space={{id}}'),
                } as any),
            ],
        });
        expect(spectator.component.qr_code()).toBe(
            generateQRCode(
                `${location.origin}custom/#/book?space=abc@place.tech`,
            ),
        );
    });
});
