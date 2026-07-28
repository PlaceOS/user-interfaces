import { formatDate } from '@angular/common';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import {
    OrganisationService,
    SettingsService,
    setNotifyOutlet,
} from '@placeos/common';
import * as ts_client_mod from '@placeos/ts-client';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

import { captureDownloads } from './download-capture.helper';

vi.mock('@placeos/ts-client', { spy: true });

describe('ReportsStateService', () => {
    let spectator: SpectatorService<ReportsStateService>;
    let settings_map: Record<string, any>;
    let booking_data: any[];
    let event_data: any[];
    let notify_open: ReturnType<typeof vi.fn>;
    let downloads: ReturnType<typeof captureDownloads>;

    const createService = createServiceFactory({
        service: ReportsStateService,
        providers: [
            MockProvider(SettingsService, {
                get: ((name: string) => settings_map[name]) as any,
            } as any),
            MockProvider(OrganisationService, {
                building: { id: 'bld-1', parent_id: 'region-1' },
                region: { id: 'region-1' },
                levels: [],
                levelsForBuilding: vi.fn(() => [
                    { id: 'lvl-1' },
                    { id: 'lvl-2' },
                ]),
                levelsForRegion: vi.fn(() => []),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        settings_map = { 'app.use_region': false };
        booking_data = [];
        event_data = [];
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        downloads = captureDownloads();

        // queryAllBookings (query_params.type) / queryAllEvents (no type),
        // both routed through the ts-client `query` seam one layer down.
        vi.mocked(ts_client_mod.query).mockImplementation((req: any) => {
            const params = req?.query_params || {};
            const data = params.type ? booking_data : event_data;
            return Promise.resolve({ data, next: undefined }) as any;
        });
        // Defensive stubs so any resource loaders that fire never hit real HTTP.
        vi.mocked(ts_client_mod.querySystems).mockResolvedValue({
            data: [],
            next: undefined,
        } as any);
        vi.mocked(ts_client_mod.queryAssets).mockResolvedValue({
            data: [],
            next: undefined,
        } as any);
        vi.mocked(ts_client_mod.queryAssetCategories).mockResolvedValue({
            data: [
                { id: 'cat-park', name: '_PARKING_', hidden: true },
                { id: 'cat-lock', name: '_LOCKERS_', hidden: true },
            ],
            next: undefined,
        } as any);
        vi.mocked(ts_client_mod.queryAssetTypes).mockResolvedValue({
            data: [],
            next: undefined,
        } as any);
        vi.mocked(ts_client_mod.showMetadata).mockResolvedValue({
            details: [],
        } as any);
        spectator = createService();
    });

    afterEach(() => {
        downloads.restore();
        setNotifyOutlet(null as any, true);
    });

    it('should expand an "All" zone selection to every building level', () => {
        spectator.service.setOptions({
            zones: ['All'],
            start: 1000,
            end: 2000,
        });
        expect(spectator.service.options().zones).toEqual([
            'All',
            'lvl-1',
            'lvl-2',
        ]);
    });

    it('should clear a previous "All" selection when zones change', () => {
        spectator.service.setOptions({ zones: ['All'], start: 1000, end: 2000 });
        spectator.service.setOptions({
            zones: ['lvl-1'],
            start: 3000,
            end: 4000,
        });
        expect(spectator.service.options().zones).toEqual([]);
    });

    it('should merge new options, clear stale bookings and bump the load token', () => {
        (spectator.service as any)._active_bookings.set([{ id: 'stale' }]);
        const before = (spectator.service as any)._load_token;

        spectator.service.setOptions({
            type: 'desks',
            zones: ['z1'],
            start: 1000,
            end: 2000,
        });

        expect(spectator.service.options().type).toBe('desks');
        expect(spectator.service.options().zones).toEqual(['z1']);
        expect(spectator.service.bookings()).toEqual([]);
        expect((spectator.service as any)._load_token).toBeGreaterThan(before);
    });

    it('should ignore updates that do not change the start or end', () => {
        spectator.service.setOptions({ start: 1000, end: 2000 });
        spectator.service.setOptions({ start: 1000, end: 9999 });
        // start unchanged => whole update rejected, end stays at 2000
        expect(spectator.service.options().end).toBe(2000);
    });

    it('should count business days, excluding configured ignore days', () => {
        const monday = new Date('2026-04-06T12:00:00').valueOf();
        const wednesday = new Date('2026-04-08T12:00:00').valueOf();
        spectator.service.setOptions({
            type: 'desks',
            start: monday,
            end: wednesday,
        });

        expect(spectator.service.duration).toBe(4);
        settings_map['app.reports.ignore_days'] = ['wednesday'];
        expect(spectator.service.duration).toBe(3);
    });

    it('should query desk bookings and store the filtered results', async () => {
        const booking = {
            date: new Date('2026-04-06T12:00:00').valueOf(),
            toJSON: () => ({}),
        };
        booking_data = [booking];
        spectator.service.setOptions({
            type: 'desks',
            zones: ['z1'],
            start: new Date('2026-04-06T00:00:00').valueOf(),
            end: new Date('2026-04-06T23:59:59').valueOf(),
        });

        await (spectator.service as any)._loadBookings();

        expect(ts_client_mod.query).toHaveBeenCalledWith(
            expect.objectContaining({
                query_params: expect.objectContaining({
                    type: 'desk',
                    zones: 'z1',
                    limit: 1000,
                }),
            }),
        );
        expect(spectator.service.bookings()).toEqual([booking]);
    });

    it('should notify when a load returns no bookings', async () => {
        booking_data = [];
        spectator.service.setOptions({
            type: 'desks',
            zones: ['z1'],
            start: 1000,
            end: 2000,
        });

        await (spectator.service as any)._loadBookings();

        expect(notify_open).toHaveBeenCalledWith(
            'No bookings for the selected levels and period',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should schedule report generation on a debounce timer', () => {
        const timeout_spy = vi
            .spyOn(spectator.service as any, 'timeout')
            .mockImplementation(() => undefined);

        spectator.service.generateReport();

        expect(timeout_spy).toHaveBeenCalledWith(
            'generate-report',
            expect.any(Function),
            500,
        );
    });

    it('should export the active bookings as a comma separated csv file', async () => {
        spectator.service.setOptions({
            type: 'desks',
            zones: ['z1'],
            start: new Date('2026-04-06T00:00:00').valueOf(),
            end: new Date('2026-04-06T23:59:59').valueOf(),
        });
        (spectator.service as any)._active_bookings.set([
            {
                toJSON: () => ({
                    event_start: 1000,
                    event_end: 2000,
                    zones: ['z1'],
                    system: { id: 's' },
                    keep: 'value',
                }),
            },
        ]);

        spectator.service.downloadReport();

        expect(downloads.filename).toMatch(/^report\+desks\+2026-04-06.*\.csv$/);
        const text = await downloads.text();
        // `keep` survives the export; `zones`/`system` are stripped out.
        expect(text).toContain('keep');
        expect(text).toContain('value');
        expect(text).not.toContain('zones');
        expect(text).not.toContain('system');
        expect(text).not.toContain('\t');
        expect(text.split('\r\n')[0].split(',').length).toBeGreaterThan(1);
    });

    it('should include a checked_in_time column for every booking', async () => {
        spectator.service.setOptions({
            type: 'desks',
            zones: ['z1'],
            start: new Date('2026-04-06T00:00:00').valueOf(),
            end: new Date('2026-04-06T23:59:59').valueOf(),
        });
        (spectator.service as any)._active_bookings.set([
            // First booking was never checked in, so the column has to come
            // from the mapped row rather than the raw booking data.
            {
                toJSON: () => ({
                    event_start: 1000,
                    event_end: 2000,
                    user_email: 'a@place.tech',
                }),
            },
            {
                toJSON: () => ({
                    event_start: 3000,
                    event_end: 4000,
                    user_email: 'b@place.tech',
                    checked_in_at: 3060,
                }),
            },
        ]);

        spectator.service.downloadReport();

        const text = await downloads.text();
        const [header, first, second] = text.split('\r\n');
        // `checked_in_time` is the last column, and the formatted timestamp
        // gets quoted because it contains commas.
        expect(header.split(',')).toContain('checked_in_time');
        expect(header).not.toContain('checked_in_at');
        expect(first.endsWith(',')).toBe(true);
        expect(second).toContain(
            `"${formatDate(3060 * 1000, 'MMM d, y, h:mm a', 'en')}"`,
        );
    });
});
