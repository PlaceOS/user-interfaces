import { ApplicationRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService, setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import { AssetsReportService } from 'apps/concierge/src/app/reports/assets/assets-report.service';

vi.mock('@placeos/ts-client', { spy: true });

const day_1 = new Date('2026-04-06T09:00:00').valueOf();

function makeBooking(overrides: any = {}) {
    return {
        date: day_1,
        deleted: false,
        rejected: false,
        status: 'approved',
        asset_id: 'a1',
        asset_ids: [],
        booking_start: 1,
        booking_end: 2,
        linked_event: null,
        linked_bookings: [],
        ...overrides,
    };
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
            .mockImplementation(function (this: any, tag: any, opts?: any) {
                const el = real_create.call(document, tag, opts);
                if (String(tag).toLowerCase() === 'a') last_anchor = el;
                return el;
            });

        // queryAssetGroupsExtended -> queryAssetTypes + queryAssets (ts-client)
        (ts_client.queryAssetTypes as any).mockResolvedValue({
            data: [{ id: 't1', name: 'Laptop' }],
            total: 1,
        });
        (ts_client.queryAssets as any).mockResolvedValue({
            data: [
                { id: 'a1', asset_type_id: 't1' },
                { id: 'a2', asset_type_id: 't1' },
            ],
            total: 2,
        });
        // queryAssetPurchaseOrders (ts-client)
        (ts_client.queryAssetPurchaseOrders as any).mockResolvedValue({
            data: [{ expected_service_end_date: 100 }],
        });
        // queryBookings -> get (ts-client)
        (ts_client.get as any).mockResolvedValue([
            makeBooking({ asset_ids: ['a1'] }),
            makeBooking({ asset_ids: ['a2'], status: 'cancelled' }),
        ]);
        spectator = createService();
    });

    afterEach(() => {
        create_spy?.mockRestore();
        setNotifyOutlet(null as any, true);
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

        const url = (ts_client.get as any).mock.calls[0][0];
        expect(url).toContain('type=asset-request');
        expect(url).toContain('include_checked_out=true');
        expect(url).toContain('zones=building-1');
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
        (ts_client.get as any).mockResolvedValue([]);
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
