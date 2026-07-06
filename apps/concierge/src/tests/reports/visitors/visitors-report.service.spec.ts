import { ApplicationRef } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService, setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import { VisitorsReportService } from 'apps/concierge/src/app/reports/visitors/visitors-report.service';
import { captureDownloads } from '../download-capture.helper';

vi.mock('@placeos/ts-client', { spy: true });

describe('VisitorsReportService', () => {
    let spectator: SpectatorService<VisitorsReportService>;
    let allow_international: boolean;
    let notify_open: ReturnType<typeof vi.fn>;
    let downloads: ReturnType<typeof captureDownloads>;

    const day_1 = new Date('2026-04-06T09:00:00').valueOf();
    const day_2 = new Date('2026-04-07T09:00:00').valueOf();

    const createService = createServiceFactory({
        service: VisitorsReportService,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn((name: string) => {
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
        vi.clearAllMocks();
        allow_international = false;
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        downloads = captureDownloads();
        // queryBookings -> get (ts-client)
        (ts_client.get as any).mockResolvedValue([
            {
                asset_id: 'v1',
                user_email: 'host@x.com',
                date: day_1,
                duration: 60,
                extension_data: {},
            },
            {
                asset_id: 'v2',
                user_email: 'host@x.com',
                date: day_1,
                duration: 120,
                extension_data: {},
            },
        ]);
        spectator = createService();
    });

    afterEach(() => {
        downloads.restore();
        setNotifyOutlet(null as any, true);
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should not load bookings until a report is requested', async () => {
        await settle();
        expect(ts_client.get).not.toHaveBeenCalled();
        expect(spectator.service.bookings()).toEqual([]);
    });

    it('should query visitor bookings when a report is generated', async () => {
        spectator.service.setOptions({ start: day_1, end: day_1 });
        spectator.service.generateReport();
        await settle();
        const url = (ts_client.get as any).mock.calls[0][0];
        expect(url).toContain('type=visitor');
        expect(url).toContain('zones=building-1');
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
        (ts_client.get as any).mockResolvedValue([]);
        spectator.service.generateReport();
        await settle();
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should download visitor bookings as a tsv named for the range', async () => {
        spectator.service.setOptions({ start: day_1, end: day_2 });
        spectator.service.generateReport();
        await settle();
        await spectator.service.downloadReport();
        expect(downloads.filename).toMatch(
            /^report\+assets\+2026-04-06-2026-04-07\.tsv$/,
        );
    });
});
