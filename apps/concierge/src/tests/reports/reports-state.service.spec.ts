import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as booking_mod from '@placeos/bookings';
import * as common_mod from '@placeos/common';
import { OrganisationService, SettingsService } from '@placeos/common';
import * as event_mod from '@placeos/events';
import { ReportsStateService } from 'apps/concierge/src/app/reports/reports-state.service';

jest.mock('@placeos/assets');
jest.mock('@placeos/bookings');
jest.mock('@placeos/common');
jest.mock('@placeos/events');
jest.mock('@placeos/ts-client');

describe('ReportsStateService', () => {
    let spectator: SpectatorService<ReportsStateService>;
    let settings_map: Record<string, any>;
    const createService = createServiceFactory({
        service: ReportsStateService,
        providers: [
            MockProvider(SettingsService, {
                get: ((name: string) => settings_map[name]) as any,
            } as any),
            MockProvider(OrganisationService, {
                building: { id: 'bld-1', parent_id: 'region-1' },
                region: { id: 'region-1' },
                levelsForBuilding: jest.fn(() => [
                    { id: 'lvl-1' },
                    { id: 'lvl-2' },
                ]),
                levelsForRegion: jest.fn(() => []),
            } as any),
        ],
    });

    beforeEach(() => {
        settings_map = { 'app.use_region': false };
        (event_mod.requestSpacesForZone as jest.Mock).mockReturnValue(of([]));
        (booking_mod.queryAllBookings as jest.Mock).mockResolvedValue([]);
        (event_mod.queryAllEvents as jest.Mock).mockResolvedValue([]);
        spectator = createService();
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
        (booking_mod.queryAllBookings as jest.Mock).mockResolvedValue([
            booking,
        ]);
        spectator.service.setOptions({
            type: 'desks',
            zones: ['z1'],
            start: new Date('2026-04-06T00:00:00').valueOf(),
            end: new Date('2026-04-06T23:59:59').valueOf(),
        });

        await (spectator.service as any)._loadBookings();

        expect(booking_mod.queryAllBookings).toHaveBeenCalledWith(
            expect.objectContaining({ type: 'desk', zones: 'z1', limit: 1000 }),
        );
        expect(spectator.service.bookings()).toEqual([booking]);
    });

    it('should notify when a load returns no bookings', async () => {
        (booking_mod.queryAllBookings as jest.Mock).mockResolvedValue([]);
        spectator.service.setOptions({
            type: 'desks',
            zones: ['z1'],
            start: 1000,
            end: 2000,
        });

        await (spectator.service as any)._loadBookings();

        expect(common_mod.notifyError).toHaveBeenCalledWith(
            'No bookings for the selected levels and period',
        );
    });

    it('should schedule report generation on a debounce timer', () => {
        const timeout_spy = jest
            .spyOn(spectator.service as any, 'timeout')
            .mockImplementation(() => undefined);

        spectator.service.generateReport();

        expect(timeout_spy).toHaveBeenCalledWith(
            'generate-report',
            expect.any(Function),
            500,
        );
    });

    it('should export the active bookings as a tsv file', () => {
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

        expect(common_mod.jsonToCsv).toHaveBeenCalled();
        const exported = (common_mod.jsonToCsv as jest.Mock).mock.calls[0][0];
        expect(exported[0].keep).toBe('value');
        expect(exported[0].zones).toBeUndefined();
        expect(exported[0].system).toBeUndefined();
        expect(common_mod.downloadFile).toHaveBeenCalledWith(
            expect.stringMatching(/^report\+desks\+2026-04-06/),
            undefined,
        );
    });
});
