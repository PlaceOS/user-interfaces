import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import {
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as common_mod from '@placeos/common';
import { ParkingReportService } from 'apps/concierge/src/app/reports/parking/parking-report.service';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    downloadFile: jest.fn(),
    jsonToCsv: jest.fn(() => 'csv-data'),
}));

describe('ParkingReportService', () => {
    let spectator: SpectatorService<ParkingReportService>;
    let bookings: ReturnType<typeof signal<any[]>>;
    let report_set_options: jest.Mock;
    let report_generate: jest.Mock;

    const day_1 = new Date('2026-04-06T09:00:00').valueOf();
    const day_2 = new Date('2026-04-07T09:00:00').valueOf();

    const createService = createServiceFactory({
        service: ParkingReportService,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(() => false),
            } as any),
            MockProvider(OrganisationService, {
                building: { id: 'building-1' },
                region: { id: 'region-1' },
                levelsForBuilding: jest.fn(() => []),
                levelsForRegion: jest.fn(() => []),
            } as any),
        ],
    });

    beforeEach(() => {
        bookings = signal<any[]>([]);
        report_set_options = jest.fn();
        report_generate = jest.fn();
        spectator = createService({
            providers: [
                {
                    provide: ReportsStateService,
                    useValue: {
                        bookings,
                        loading: signal(''),
                        setOptions: report_set_options,
                        generateReport: report_generate,
                    },
                },
            ],
        });
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should group bookings into daily buckets keyed by date', () => {
        bookings.set([
            { asset_id: 'bay-1', date: day_1 },
            { asset_id: 'bay-2', date: day_1 },
            { asset_id: 'bay-3', date: day_2 },
        ]);
        const stats = spectator.service.daily_stats();
        expect(Object.keys(stats)).toEqual(['2026-04-06', '2026-04-07']);
        expect(stats['2026-04-06'].bookings).toHaveLength(2);
        expect(stats['2026-04-07'].bookings).toHaveLength(1);
    });

    it('should delegate setOptions to the report state with a parking type', () => {
        spectator.service.setOptions({ start: day_1, zones: ['lvl-1'] });
        expect(spectator.service.options()).toEqual(
            expect.objectContaining({ start: day_1, zones: ['lvl-1'] }),
        );
        expect(report_set_options).toHaveBeenCalledWith({
            start: day_1,
            zones: ['lvl-1'],
            type: 'parking',
        });
    });

    it('should trigger report generation via the report state service', () => {
        spectator.service.generateReport();
        expect(report_set_options).toHaveBeenCalledWith({ type: 'parking' });
        expect(report_generate).toHaveBeenCalled();
    });

    it('should not download when there are no bookings', async () => {
        bookings.set([]);
        await spectator.service.downloadReport();
        expect(common_mod.downloadFile).not.toHaveBeenCalled();
    });

    it('should download a parking csv named for the report date range', async () => {
        spectator.service.setOptions({ start: day_1, end: day_1 });
        bookings.set([
            {
                date: day_1,
                toJSON: () => ({
                    booking_start: day_1 / 1000,
                    booking_end: day_1 / 1000 + 3600,
                    asset_id: 'bay-1',
                    zones: ['lvl-1'],
                }),
            },
        ]);
        await spectator.service.downloadReport();
        expect(common_mod.jsonToCsv).toHaveBeenCalled();
        expect(common_mod.downloadFile).toHaveBeenCalledWith(
            expect.stringMatching(/^report\+parking\+2026-04-06\.csv$/),
            'csv-data',
        );
    });
});
