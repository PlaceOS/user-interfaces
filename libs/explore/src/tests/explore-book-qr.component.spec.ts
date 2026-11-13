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

    it('should render a QR code for the explore page of the space email', () => {
        spectator = createComponent();
        spectator.detectChanges();
        expect(spectator.query('main img')).toHaveAttribute(
            'src',
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
