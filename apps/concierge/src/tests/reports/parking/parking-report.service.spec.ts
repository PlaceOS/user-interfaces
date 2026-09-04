import { signal } from '@angular/core';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ParkingReportService } from 'apps/concierge/src/app/reports/parking/parking-report.service';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';
import { captureDownloads } from '../download-capture.helper';

describe('ParkingReportService', () => {
    let spectator: SpectatorService<ParkingReportService>;
    let bookings: ReturnType<typeof signal<any[]>>;
    let report_set_options: any;
    let report_generate: any;
    let downloads: ReturnType<typeof captureDownloads>;
    let settings_map: Record<string, any>;

    const day_1 = new Date('2026-04-06T09:00:00').valueOf();
    const day_2 = new Date('2026-04-07T09:00:00').valueOf();

    const createService = createServiceFactory({
        service: ParkingReportService,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn((name: string) => settings_map[name]),
            } as any),
            MockProvider(OrganisationService, {
                building: {
                    id: 'building-1',
                    timezone: 'Pacific/Auckland',
                },
                region: { id: 'region-1' },
                levelsForBuilding: vi.fn(() => []),
                levelsForRegion: vi.fn(() => []),
            } as any),
        ],
    });

    afterEach(() => downloads.restore());

    beforeEach(() => {
        settings_map = {};
        downloads = captureDownloads();
        bookings = signal<any[]>([]);
        report_set_options = vi.fn();
        report_generate = vi.fn();
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

    it('should group bookings by their building-local date', () => {
        settings_map['app.bookings.use_building_timezone'] = true;
        const building_morning = new Date('2026-04-05T13:30:00Z').valueOf();
        bookings.set([{ asset_id: 'bay-1', date: building_morning }]);

        expect(Object.keys(spectator.service.daily_stats())).toEqual([
            '2026-04-06',
        ]);
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
        expect(downloads.last).toBeNull();
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
        expect(downloads.filename).toMatch(
            /^report\+parking\+2026-04-06\.csv$/,
        );
    });
});
