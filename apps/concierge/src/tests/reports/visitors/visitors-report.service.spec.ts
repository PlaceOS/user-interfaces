import { ApplicationRef, signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as booking_mod from '@placeos/bookings';
import * as common_mod from '@placeos/common';
import { VisitorsReportService } from 'apps/concierge/src/app/reports/visitors/visitors-report.service';

jest.mock('@placeos/bookings');
jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    downloadFile: jest.fn(),
    jsonToCsv: jest.fn(() => 'csv-data'),
    notifyError: jest.fn(),
}));

describe('VisitorsReportService', () => {
    let spectator: SpectatorService<VisitorsReportService>;
    let allow_international: boolean;

    const day_1 = new Date('2026-04-06T09:00:00').valueOf();
    const day_2 = new Date('2026-04-07T09:00:00').valueOf();

    const createService = createServiceFactory({
        service: VisitorsReportService,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn((name: string) => {
                    if (name === 'app.visitors.allow_international') {
                        return allow_international;
                    }
                    if (name === 'app.use_region') return false;
                    return undefined;
                }),
            } as any),
            MockProvider(OrganisationService, {
                building: { id: 'building-1' },
                region: { id: 'region-1' },
            } as any),
        ],
    });

    async function settle() {
        await spectator.inject(ApplicationRef).whenStable();
    }

    beforeEach(() => {
        allow_international = false;
        (booking_mod.queryBookings as jest.Mock).mockResolvedValue([
            {
                asset_id: 'v1',
                user_email: 'host@x.com',
                date: day_1,
                duration: 60,
                extension_data: {},
                toJSON: () => ({
                    booking_start: day_1 / 1000,
                    booking_end: day_1 / 1000 + 3600,
                    asset_id: 'v1',
                }),
            },
            {
                asset_id: 'v2',
                user_email: 'host@x.com',
                date: day_1,
                duration: 120,
                extension_data: {},
                toJSON: () => ({
                    booking_start: day_1 / 1000,
                    booking_end: day_1 / 1000 + 7200,
                    asset_id: 'v2',
                }),
            },
        ]);
        (common_mod.downloadFile as jest.Mock).mockClear();
        (common_mod.notifyError as jest.Mock).mockClear();
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should not load bookings until a report is requested', async () => {
        await settle();
        expect(booking_mod.queryBookings).not.toHaveBeenCalled();
        expect(spectator.service.bookings()).toEqual([]);
    });

    it('should query visitor bookings when a report is generated', async () => {
        spectator.service.setOptions({ start: day_1, end: day_1 });
        spectator.service.generateReport();
        await settle();
        expect(booking_mod.queryBookings).toHaveBeenCalledWith(
            expect.objectContaining({
                type: 'visitor',
                zones: 'building-1',
            }),
        );
        expect(spectator.service.bookings()).toHaveLength(2);
    });

    it('should group loaded bookings into daily buckets', async () => {
        spectator.service.generateReport();
        await settle();
        const stats = spectator.service.daily_stats();
        expect(Object.keys(stats)).toEqual(['2026-04-06']);
        expect(stats['2026-04-06'].bookings).toHaveLength(2);
    });

    it('should notify an error when no visitor bookings are returned', async () => {
        (booking_mod.queryBookings as jest.Mock).mockResolvedValue([]);
        spectator.service.generateReport();
        await settle();
        expect(common_mod.notifyError).toHaveBeenCalled();
    });

    it('should download visitor bookings as a tsv named for the range', async () => {
        spectator.service.setOptions({ start: day_1, end: day_2 });
        spectator.service.generateReport();
        await settle();
        await spectator.service.downloadReport();
        expect(common_mod.jsonToCsv).toHaveBeenCalled();
        expect(common_mod.downloadFile).toHaveBeenCalledWith(
            expect.stringMatching(/^report\+assets\+2026-04-06-2026-04-07\.tsv$/),
            'csv-data',
        );
    });
});
