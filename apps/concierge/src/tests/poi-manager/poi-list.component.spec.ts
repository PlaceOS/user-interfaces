import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as common_mod from '@placeos/common';
import { POIListComponent } from '../../app/poi-manager/poi-list.component';
import {
    POIManagementService,
    PointOfInterest,
} from '../../app/poi-manager/poi-management.service';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        generateQRCode: jest.fn(() => 'qr-image-data'),
    };
});

describe('POIListComponent', () => {
    let spectator: Spectator<POIListComponent>;
    let features: any;

    const createComponent = createComponentFactory({
        component: POIListComponent,
        providers: [
            MockProvider(POIManagementService, {
                editPointOfInterest: jest.fn(),
                removePointOfInterest: jest.fn(),
                previewPointOfInterest: jest.fn(),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(() => '/kiosk'),
            } as any),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        features = signal<PointOfInterest[]>([]);
        spectator = createComponent({
            detectChanges: false,
            providers: [
                MockProvider(POIManagementService, {
                    filtered_features: features,
                    editPointOfInterest: jest.fn(),
                    removePointOfInterest: jest.fn(),
                    previewPointOfInterest: jest.fn(),
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
        expect(result.image).toBe('qr-image-data');
        expect(common_mod.generateQRCode).toHaveBeenCalledWith(result.link);
    });

    it('should build a public short-link QR from the short link id', () => {
        const result = spectator.component.loadPublicQrCode({
            id: 'poi-1',
            short_link_id: 'link-abcdef',
        } as PointOfInterest);
        expect(result.link).toBe(`${location.origin}/r/abcdef`);
        expect(result.image).toBe('qr-image-data');
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
        expect(codes.private.image).toBe('qr-image-data');
        expect(codes.public.link).toBe(`${location.origin}/r/abcdef`);
    });
});
