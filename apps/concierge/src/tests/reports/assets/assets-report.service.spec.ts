import { ApplicationRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { mockData } from '@placeos/common/tests';
import * as ts_client from '@placeos/ts-client';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import {
    bookings,
    Booking as StaffBooking,
    type BookingInput,
} from '@placeos/ts-client/staff';
import { AssetsReportService } from 'apps/concierge/src/app/reports/assets/assets-report.service';

vi.mock('@placeos/ts-client', { spy: true });
vi.mock('@placeos/ts-client/staff', { spy: true });

const day_1 = new Date('2026-04-06T09:00:00').valueOf();

let booking_id = 0;
function makeBooking(overrides: BookingInput = {}) {
    return mockData(StaffBooking, {
        id: ++booking_id,
        deleted: false,
        rejected: false,
        approved: true,
        asset_id: 'a1',
        asset_ids: [],
        booking_start: day_1 / 1000,
        booking_end: day_1 / 1000 + 3600,
        ...overrides,
    });
}

describe('AssetsReportService', () => {
    let spectator: SpectatorService<AssetsReportService>;
    let notify_open: ReturnType<typeof vi.fn>;
    let last_anchor: HTMLAnchorElement | null;
    let create_spy: any;

    const createService = createServiceFactory({
        service: AssetsReportService,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(() => false),
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
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);

        last_anchor = null;
        const real_create = Document.prototype.createElement;
        create_spy = vi
            .spyOn(document, 'createElement')
            .mockImplementation(function (this, tag: unknown, opts?: unknown) {
                const el = real_create.call(document, tag, opts);
                if (String(tag).toLowerCase() === 'a') last_anchor = el;
                return el;
            });

        // queryAssetGroupsExtended -> queryAssetTypes + queryAssets (ts-client)
        (ts_client.asset_types.query as any).mockResolvedValue(
            mockPage({
                data: [{ id: 't1', name: 'Laptop' }],
                total: 1,
            }),
        );
        (ts_client.assets.query as any).mockResolvedValue(
            mockPage({
                data: [
                    { id: 'a1', asset_type_id: 't1' },
                    { id: 'a2', asset_type_id: 't1' },
                ],
                total: 2,
            }),
        );
        // queryAssetPurchaseOrders (ts-client)
        (ts_client.asset_purchase_orders.query as any).mockResolvedValue(
            mockPage({
                data: [{ expected_service_end_date: 100 }],
            }),
        );
        // queryBookings -> bookings.query (staff API)
        vi.mocked(bookings.query).mockResolvedValue(
            mockReply([
                makeBooking({ asset_ids: ['a1'] }),
                makeBooking({
                    asset_ids: ['a2'],
                    approved: false,
                    rejected: true,
                }),
            ]),
        );
        spectator = createService();
    });

    afterEach(() => {
        create_spy?.mockRestore();
        setNotifyOutlet(null, true);
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

        expect(bookings.query).toHaveBeenCalledWith(
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

    it('should count every asset of a multi-asset booking', async () => {
        vi.mocked(bookings.query).mockResolvedValue(
            mockReply([makeBooking({ asset_ids: ['a1', 'a2'] })]),
        );
        spectator.service.setOptions({ start: day_1, end: day_1 });
        spectator.service.generateReport();
        await settle();

        expect(spectator.service.stats().products_booked).toEqual([
            { name: 'Laptop', count: 2 },
        ]);
    });

    it('should list purchase orders whose service ended before the start', async () => {
        (ts_client.asset_purchase_orders.query as any).mockResolvedValue(
            mockPage({
                data: [
                    { id: 'expired', expected_service_end_date: 100 },
                    { id: 'current', expected_service_end_date: 9_999_999_999 },
                ],
            }),
        );
        spectator.service.setOptions({ start: day_1, end: day_1 });
        spectator.service.generateReport();
        await settle();

        expect(spectator.service.expired_items().map((_) => _.id)).toEqual([
            'expired',
        ]);
    });

    it('should notify when no bookings are returned', async () => {
        vi.mocked(bookings.query).mockResolvedValue(mockReply([]));
        spectator.service.generateReport();
        await settle();

        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should not download when there are no bookings', async () => {
        await spectator.service.downloadReport();
        expect(last_anchor).toBeNull();
    });

    it('should download the loaded bookings as a tsv file', async () => {
        spectator.service.setOptions({ start: day_1, end: day_1 });
        spectator.service.generateReport();
        await settle();

        await spectator.service.downloadReport();
        expect(last_anchor).not.toBeNull();
        expect(last_anchor?.getAttribute('download')).toMatch(
            /^report\+assets\+2026-04-06\.tsv$/,
        );
    });
});
