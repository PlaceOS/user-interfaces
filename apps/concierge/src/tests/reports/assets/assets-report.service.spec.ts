import { ApplicationRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as asset_mod from '@placeos/assets';
import * as booking_mod from '@placeos/bookings';
import { AssetsReportService } from 'apps/concierge/src/app/reports/assets/assets-report.service';

jest.mock('@placeos/assets');
jest.mock('@placeos/bookings');
jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    downloadFile: jest.fn(),
    jsonToCsv: jest.fn(() => 'csv'),
    notifyError: jest.fn(),
}));
import { downloadFile, jsonToCsv, notifyError } from '@placeos/common';

const day_1 = new Date('2026-04-06T09:00:00').valueOf();

function makeBooking(overrides: any = {}) {
    return {
        date: day_1,
        deleted: false,
        rejected: false,
        status: 'approved',
        asset_id: 'a1',
        asset_ids: [],
        linked_event: null,
        linked_bookings: [],
        toJSON: () => ({ booking_start: 1, booking_end: 2 }),
        ...overrides,
    };
}

describe('AssetsReportService', () => {
    let spectator: SpectatorService<AssetsReportService>;
    const createService = createServiceFactory({
        service: AssetsReportService,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(() => false),
            } as any),
            MockProvider(OrganisationService, {
                building: { id: 'building-1' },
                region: { id: 'region-1' },
            } as any),
        ],
    });

    async function settle() {
        await TestBed.inject(ApplicationRef).whenStable();
    }

    beforeEach(() => {
        (downloadFile as jest.Mock).mockClear();
        (jsonToCsv as jest.Mock).mockClear();
        (notifyError as jest.Mock).mockClear();
        (asset_mod.queryAssetGroupsExtended as jest.Mock).mockResolvedValue([
            { name: 'Laptop', assets: [{ id: 'a1' }, { id: 'a2' }] },
        ]);
        (asset_mod.queryAssetPurchaseOrders as jest.Mock).mockResolvedValue({
            data: [{ expected_service_end_date: 100 }],
        });
        (booking_mod.queryBookings as jest.Mock).mockResolvedValue([
            makeBooking({ asset_ids: ['a1'] }),
            makeBooking({ asset_ids: ['a2'], status: 'cancelled' }),
        ]);
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should merge partial options without dropping existing values', () => {
        spectator.service.setOptions({ start: 1 });
        spectator.service.setOptions({ end: 2 });
        expect(spectator.service.options()).toEqual({ start: 1, end: 2 });
    });

    it('should load bookings and products against the building zone', async () => {
        spectator.service.setOptions({ start: day_1, end: day_1 });
        spectator.service.generateReport();
        await settle();

        expect(booking_mod.queryBookings).toHaveBeenCalledWith(
            expect.objectContaining({
                type: 'asset-request',
                include_checked_out: true,
                zones: 'building-1',
            }),
        );
        expect(spectator.service.bookings()).toHaveLength(2);
        expect(spectator.service.products()).toHaveLength(1);
    });

    it('should aggregate booking status stats', async () => {
        spectator.service.setOptions({ start: day_1, end: day_1 });
        spectator.service.generateReport();
        await settle();

        const stats = spectator.service.stats();
        expect(stats.booking_count).toBe(1);
        expect(stats.total_booked_items).toBe(1);
        expect(stats.cancelled_count).toBe(1);
    });

    it('should notify when no bookings are returned', async () => {
        (booking_mod.queryBookings as jest.Mock).mockResolvedValue([]);
        spectator.service.generateReport();
        await settle();

        expect(notifyError).toHaveBeenCalled();
    });

    it('should not download when there are no bookings', async () => {
        await spectator.service.downloadReport();
        expect(downloadFile).not.toHaveBeenCalled();
    });

    it('should download the loaded bookings as a tsv file', async () => {
        spectator.service.setOptions({ start: day_1, end: day_1 });
        spectator.service.generateReport();
        await settle();

        await spectator.service.downloadReport();
        expect(jsonToCsv).toHaveBeenCalled();
        expect(downloadFile).toHaveBeenCalledWith(
            expect.stringMatching(/^report\+assets\+2026-04-06\.tsv$/),
            'csv',
        );
    });
});
