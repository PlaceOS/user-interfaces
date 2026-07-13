import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { POIListComponent } from '../../app/poi-manager/poi-list.component';
import {
    POIManagementService,
    PointOfInterest,
} from '../../app/poi-manager/poi-management.service';

describe('POIListComponent', () => {
    let spectator: Spectator<POIListComponent>;
    let features: any;

    const createComponent = createComponentFactory({
        component: POIListComponent,
        providers: [
            MockProvider(POIManagementService, {
                editPointOfInterest: vi.fn(),
                removePointOfInterest: vi.fn(),
                previewPointOfInterest: vi.fn(),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn(() => '/kiosk'),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        features = signal<PointOfInterest[]>([]);
        spectator = createComponent({
            detectChanges: false,
            providers: [
                MockProvider(POIManagementService, {
                    filtered_features: features,
                    editPointOfInterest: vi.fn(),
                    removePointOfInterest: vi.fn(),
                    previewPointOfInterest: vi.fn(),
                } as any),
            ],
        });
    });

    it('should build a private kiosk QR link joining coordinate locations', () => {
        const result = spectator.component.loadQrCode({
            id: 'poi-1',
            level_id: 'lvl-1',
            location: [1, 2],
        } as PointOfInterest);
        expect(result.link).toContain('/kiosk/#/explore?level=lvl-1');
        expect(result.link).toContain('locate=1%2C2');
        expect(result.image).toContain('data:image/svg+xml');
    });

    it('should build a public short-link QR from the short link id', () => {
        const result = spectator.component.loadPublicQrCode({
            id: 'poi-1',
            short_link_id: 'link-abcdef',
        } as PointOfInterest);
        expect(result.link).toBe(`${location.origin}/r/abcdef`);
        expect(result.image).toContain('data:image/svg+xml');
    });

    it('should build the kiosk URL from settings and origin', () => {
        expect(spectator.component.kiosk_url).toBe(
            `${window.location.origin}/kiosk`,
        );
    });

    it('should populate the QR code cache for each feature via the effect', () => {
        features.set([
            {
                id: 'poi-1',
                level_id: 'lvl-1',
                location: 'map-1',
                short_link_id: 'link-abcdef',
            } as PointOfInterest,
        ]);
        spectator.detectChanges();

        const codes = spectator.component.qr_codes()['poi-1'];
        expect(codes.private.image).toContain('data:image/svg+xml');
        expect(codes.public.link).toBe(`${location.origin}/r/abcdef`);
    });
});
