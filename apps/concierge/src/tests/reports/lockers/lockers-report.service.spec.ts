import { ApplicationRef, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as asset_mod from '@placeos/assets';
import { LockersReportService } from 'apps/concierge/src/app/reports/lockers/lockers-report.service';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

jest.mock('@placeos/assets');
jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    downloadFile: jest.fn(),
    jsonToCsv: jest.fn(() => 'csv'),
}));
import { downloadFile, jsonToCsv } from '@placeos/common';

const day_1 = new Date('2026-04-06T09:00:00').valueOf();
const day_2 = new Date('2026-04-07T09:00:00').valueOf();

describe('LockersReportService', () => {
    let spectator: SpectatorService<LockersReportService>;
    let report_bookings: ReturnType<typeof signal<any>>;
    let report_set_options: jest.Mock;
    let report_generate: jest.Mock;

    const createService = createServiceFactory({
        service: LockersReportService,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(() => false),
            } as any),
            MockProvider(OrganisationService, {
                building: { id: 'building-1' },
                region: { id: 'region-1' },
                levelsForBuilding: jest.fn(() => [
                    { id: 'level-1', tags: ['lockers'] },
                ]),
                levelsForRegion: jest.fn(() => []),
            } as any),
        ],
    });

    async function settle() {
        await TestBed.inject(ApplicationRef).whenStable();
    }

    beforeEach(() => {
        (downloadFile as jest.Mock).mockClear();
        (jsonToCsv as jest.Mock).mockClear();
        report_bookings = signal([]);
        report_set_options = jest.fn();
        report_generate = jest.fn();
        (asset_mod.queryLockerAssetsForZones as jest.Mock).mockResolvedValue([
            { zones: ['level-1'] },
            { zones: ['level-1'] },
            { zones: ['level-2'] },
        ]);
        spectator = createService({
            providers: [
                {
                    provide: ReportsStateService,
                    useValue: {
                        bookings: report_bookings,
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

    it('should merge local options and delegate them to the shared state', () => {
        spectator.service.setOptions({ start: 1 });
        spectator.service.setOptions({ end: 2 });
        expect(spectator.service.options()).toEqual({ start: 1, end: 2 });
        expect(report_set_options).toHaveBeenCalledWith({ start: 1 });
        expect(report_set_options).toHaveBeenCalledWith({ end: 2 });
    });

    it('should set the report type to lockers when generating', () => {
        spectator.service.generateReport();
        expect(report_set_options).toHaveBeenCalledWith({ type: 'lockers' });
        expect(report_generate).toHaveBeenCalled();
    });

    it('should group bookings into daily buckets', () => {
        report_bookings.set([
            { date: day_1 },
            { date: day_1 },
            { date: day_2 },
        ]);
        const days = spectator.service.daily_stats();
        expect(Object.keys(days).sort()).toEqual(['2026-04-06', '2026-04-07']);
        expect(days['2026-04-06'].bookings).toHaveLength(2);
        expect(days['2026-04-07'].bookings).toHaveLength(1);
    });

    it('should not download when there are no bookings', async () => {
        await spectator.service.downloadReport();
        expect(downloadFile).not.toHaveBeenCalled();
    });

    it('should download the bookings as a tsv file', async () => {
        report_bookings.set([
            { toJSON: () => ({ booking_start: 1, booking_end: 2 }) },
        ]);
        spectator.service.setOptions({ start: day_1, end: day_1 });

        await spectator.service.downloadReport();
        expect(jsonToCsv).toHaveBeenCalled();
        expect(downloadFile).toHaveBeenCalledWith(
            expect.stringMatching(/^report\+assets\+2026-04-06\.tsv$/),
            'csv',
        );
    });

    it('should count available lockers per zone', async () => {
        spectator.service.setOptions({ zones: ['level-1'], start: 1, end: 2 });
        await settle();
        expect(spectator.service.counts()).toEqual({ 'level-1': 2 });
    });
});
