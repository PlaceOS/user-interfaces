import { ApplicationRef, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client_mod from '@placeos/ts-client';
import { LockersReportService } from 'apps/concierge/src/app/reports/lockers/lockers-report.service';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

import { captureDownloads } from '../download-capture.helper';

vi.mock('@placeos/ts-client', { spy: true });

const day_1 = new Date('2026-04-06T09:00:00').valueOf();
const day_2 = new Date('2026-04-07T09:00:00').valueOf();

describe('LockersReportService', () => {
    let spectator: SpectatorService<LockersReportService>;
    let report_bookings: ReturnType<typeof signal<any>>;
    let report_set_options: any;
    let report_generate: any;
    let downloads: ReturnType<typeof captureDownloads>;
    let locker_assets: any[];

    const createService = createServiceFactory({
        service: LockersReportService,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(() => false),
            } as any),
            MockProvider(OrganisationService, {
                building: { id: 'building-1' },
                region: { id: 'region-1' },
                levelsForBuilding: vi.fn(() => [
                    { id: 'level-1', tags: ['lockers'] },
                ]),
                levelsForRegion: vi.fn(() => []),
            } as any),
        ],
    });

    async function settle() {
        await TestBed.inject(ApplicationRef).whenStable();
    }

    beforeEach(() => {
        vi.clearAllMocks();
        report_bookings = signal([]);
        report_set_options = vi.fn();
        report_generate = vi.fn();
        downloads = captureDownloads();
        locker_assets = [
            { zones: ['level-1'] },
            { zones: ['level-1'] },
            { zones: ['level-2'] },
        ];
        // queryLockerAssetsForZones -> (bootstrap) + queryAssets one layer down
        vi.mocked(ts_client_mod.queryAssetCategories).mockResolvedValue({
            data: [{ id: 'cat-lock', name: '_LOCKERS_', hidden: true }],
            next: undefined,
        } as any);
        vi.mocked(ts_client_mod.queryAssetTypes).mockResolvedValue({
            data: [
                { id: 'type-lock', name: '_LOCKERS_', category_id: 'cat-lock' },
            ],
            next: undefined,
        } as any);
        vi.mocked(ts_client_mod.queryAssets).mockImplementation(
            () =>
                Promise.resolve({ data: locker_assets, next: undefined }) as any,
        );
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

    afterEach(() => {
        downloads.restore();
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
        expect(downloads.filename).toBeNull();
    });

    it('should download the bookings as a tsv file', async () => {
        report_bookings.set([
            { toJSON: () => ({ booking_start: 1, booking_end: 2 }) },
        ]);
        spectator.service.setOptions({ start: day_1, end: day_1 });

        await spectator.service.downloadReport();
        expect(downloads.filename).toMatch(/^report\+assets\+2026-04-06\.tsv$/);
    });

    it('should count available lockers per zone', async () => {
        spectator.service.setOptions({ zones: ['level-1'], start: 1, end: 2 });
        await settle();
        expect(spectator.service.counts()).toEqual({ 'level-1': 2 });
    });
});
