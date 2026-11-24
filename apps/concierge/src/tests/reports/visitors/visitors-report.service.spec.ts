import { ApplicationRef } from '@angular/core';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import {
    Booking,
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import { VisitorsReportService } from 'apps/concierge/src/app/reports/visitors/visitors-report.service';
import { captureDownloads } from '../download-capture.helper';

vi.mock('@placeos/ts-client', { spy: true });

describe('VisitorsReportService', () => {
    let spectator: SpectatorService<VisitorsReportService>;
    let allow_international: boolean;
    let allow_international_events: boolean;
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
                    if (name === 'app.events.allow_international') {
                        return allow_international_events;
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
        allow_international_events = false;
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        downloads = captureDownloads();
        // queryAllBookings -> query (ts-client)
        vi.mocked(ts_client.query).mockResolvedValue({
            data: [
                {
                    id: 'v1',
                    asset_id: 'v1',
                    user_email: 'host@x.com',
                    date: day_1,
                    duration: 60,
                    extension_data: {},
                },
                {
                    id: 'v2',
                    asset_id: 'v2',
                    user_email: 'host@x.com',
                    date: day_1,
                    duration: 120,
                    extension_data: {},
                },
            ].map((details) => new Booking(details)),
        } as any);
        spectator = createService();
    });

    afterEach(() => {
        downloads.restore();
        setNotifyOutlet(null, true);
    });

    it('should not load bookings until a report is requested', async () => {
        await settle();
        expect(ts_client.query).not.toHaveBeenCalled();
        expect(spectator.service.bookings()).toEqual([]);
    });

    it('should query visitor bookings when a report is generated', async () => {
        spectator.service.setOptions({ start: day_1, end: day_1 });
        spectator.service.generateReport();
        await settle();
        expect(ts_client.query).toHaveBeenCalledWith(
            expect.objectContaining({
                query_params: expect.objectContaining({
                    type: 'visitor',
                    zones: 'building-1',
                    include_deleted: true,
                }),
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
        vi.mocked(ts_client.query).mockResolvedValue({ data: [] } as any);
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
            /^report\+visitors\+2026-04-06-2026-04-07\.tsv$/,
        );
    });

    it('should retain cancelled visitors in the full export and omit them from the filtered export', async () => {
        vi.mocked(ts_client.query).mockResolvedValue({
            data: [
                { id: 'current', asset_id: 'current-visitor', date: day_1 },
                {
                    id: 'cancelled',
                    asset_id: 'cancelled-visitor',
                    date: day_1,
                    deleted: true,
                },
            ].map((details) => new Booking(details)),
        } as any);
        spectator.service.generateReport();
        await settle();

        expect(spectator.service.bookings()).toHaveLength(1);
        await spectator.service.downloadReport();
        expect(await downloads.text()).toContain('booking_status');
        expect(await downloads.text()).toContain('cancelled-visitor');

        await spectator.service.downloadReport(true);
        expect(downloads.filename).toMatch(/without-cancelled\.tsv$/);
        expect(await downloads.text()).toContain('current-visitor');
        expect(await downloads.text()).not.toContain('cancelled-visitor');
    });

    it('should include the international column when only the events setting is enabled', async () => {
        allow_international_events = true;
        spectator.service.setOptions({ start: day_1, end: day_1 });
        spectator.service.generateReport();
        await settle();
        await spectator.service.downloadReport();
        const text = await downloads.text();
        expect(text).toContain('international');
    });

    it('should leave the international column out when no setting is enabled', async () => {
        spectator.service.setOptions({ start: day_1, end: day_1 });
        spectator.service.generateReport();
        await settle();
        await spectator.service.downloadReport();
        const text = await downloads.text();
        expect(text).not.toContain('international');
    });
});
