import { Injector, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import {
    Building,
    Desk,
    OrganisationService,
    SettingsService,
} from '@placeos/common';

import { endOfDay } from 'date-fns';

import { generateBookingForm } from 'libs/bookings/src/lib/booking-form.model';
import { BookingFormService } from 'libs/bookings/src/lib/booking-form.service';

import { ExploreDesksService } from '../lib/explore-desks.service';
import { DEFAULT_COLOURS } from '../lib/explore-spaces.service';
import { ExploreStateService } from '../lib/explore-state.service';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { setNotifyOutlet } from 'libs/common/src/lib/notifications';
import { MockProvider } from 'ng-mocks';

describe('ExploreDesksService', () => {
    let spectator: SpectatorService<ExploreDesksService>;
    const createService = createServiceFactory({
        service: ExploreDesksService,
        providers: [
            // A new state for each test, so late timers of an earlier
            // service do not write to the spies of this test
            {
                provide: ExploreStateService,
                useFactory: () => ({
                    level: signal(null),
                    options: signal({ is_public: false }),
                    setFeatures: vi.fn(),
                    setStyles: vi.fn(),
                    setActions: vi.fn(),
                }),
            },
            MockProvider(OrganisationService, {
                binding: vi.fn(() => 'sys-1'),
                active_building: signal(new Building()),
                initialised: signal(true),
                levels: [],
                buildings: [],
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
            MockProvider(BookingFormService, {}),
            MockProvider(MatDialog, { open: vi.fn() }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.showMetadata).mockImplementation(
            (_, name) =>
                Promise.resolve(
                    `${name}`.includes('restrictions')
                        ? []
                        : {
                              details: [
                                  { id: 'desk-1', name: '1', bookable: true },
                                  { id: 'desk-2', name: '2', bookable: false },
                              ],
                          },
                ) as any,
        );
        spectator = createService();
    });

    describe('desk statuses', () => {
        const DESKS = [
            { id: 'desk-1', bookable: true },
            { id: 'desk-2', bookable: true },
            { id: 'desk-3', bookable: true },
            { id: 'desk-4', bookable: false },
        ];
        const BINDING = [
            { location: 'booking', type: 'desk', map_id: 'desk-1' },
            { location: 'desk', at_location: true, map_id: 'desk-2' },
            { location: 'desk', signs_of_life: true, map_id: 'desk-3' },
            // Devices are not desks, so they do not change desk statuses
            { location: 'wireless', map_id: 'desk-4', x: 1, y: 1 },
        ];

        /** Show the level with the desks, then return the latest desk styles */
        async function deskStyles(options = {}) {
            vi.useFakeTimers();
            vi.mocked(ts_client.showMetadata).mockImplementation(
                (_, name) =>
                    Promise.resolve({
                        details: name === 'desks' ? DESKS : [],
                    }) as any,
            );
            const state = spectator.inject(ExploreStateService);
            spectator.service.setOptions(options);
            (state.level as any).set({ id: 'lvl-1', parent_id: 'bld-1' });
            TestBed.tick();
            // Let the desk list load
            await vi.advanceTimersByTimeAsync(0);
            TestBed.tick();
            spectator.service.processBindingChange({ value: BINDING }, 'sys-1');
            TestBed.tick();
            await vi.advanceTimersByTimeAsync(200);
            vi.useRealTimers();
            return vi
                .mocked(state.setStyles)
                .mock.calls.filter(([group]) => group === 'desks')
                .at(-1)?.[1];
        }

        it('should colour desks from the AreaManagement binding for today', async () => {
            expect(await deskStyles()).toEqual({
                '#desk-1': { fill: DEFAULT_COLOURS.pending },
                '#desk-2': { fill: DEFAULT_COLOURS.busy },
                '#desk-3': { fill: DEFAULT_COLOURS['signs-of-life'] },
                '#desk-4': { fill: DEFAULT_COLOURS['not-bookable'] },
            });
        });

        it('should use API bookings instead of the binding for a future date', async () => {
            vi.mocked(ts_client.get).mockResolvedValue([
                { id: 'booking-1', asset_id: 'desk-3', checked_in: true },
            ] as any);

            const styles = await deskStyles({
                date: endOfDay(Date.now()).valueOf() + 60 * 60 * 1000,
            });

            expect(styles).toEqual({
                '#desk-1': { fill: DEFAULT_COLOURS.free },
                '#desk-2': { fill: DEFAULT_COLOURS.free },
                '#desk-3': { fill: DEFAULT_COLOURS.busy },
                '#desk-4': { fill: DEFAULT_COLOURS['not-bookable'] },
            });
        });
    });

    it('should refuse to book a desk that is not free or not in the user groups', async () => {
        const notify_open = vi.fn((_message: string) => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        const booking_service = spectator.inject(BookingFormService) as any;
        booking_service.newForm = vi.fn();
        const service = spectator.service as any;
        service._statuses['desk-1'] = signal('busy');
        service._statuses['desk-2'] = signal('free');

        try {
            await service._bookDesk(new Desk({ id: 'desk-1' }), {});
            await service._bookDesk(
                new Desk({ id: 'desk-2', groups: ['vip'] }),
                {},
            );

            expect(notify_open.mock.calls.map(([msg]) => msg)).toEqual([
                'EXPLORE.DESK_AVAILABLE_ERROR',
                'EXPLORE.DESK_GROUP_ERROR',
            ]);
            expect(booking_service.newForm).not.toHaveBeenCalled();
        } finally {
            setNotifyOutlet(null, true);
        }
    });

    it('should use the desk map id as the asset id when booking a map-only desk', async () => {
        const booking_service = spectator.inject(BookingFormService) as any;
        const { model, form } = generateBookingForm(
            undefined,
            spectator.inject(Injector),
        );
        booking_service.model = model;
        booking_service.form = form;
        booking_service.model.update((m: any) => ({
            ...m,
            date: Date.now() + 60 * 60 * 1000,
            duration: 60,
        }));
        booking_service.newForm = vi.fn();
        booking_service.setOptions = vi.fn();
        booking_service.confirmPost = vi.fn().mockResolvedValue({});
        (spectator.service as any)._statuses['map-desk-1'] = signal('free');

        await (spectator.service as any)._bookDesk(
            new Desk({
                map_id: 'map-desk-1',
                name: 'Map Desk 1',
                bookable: true,
                zone: { id: 'lvl-1', parent_id: 'bld-1' } as any,
            }),
            {},
        );

        expect(booking_service.model().asset_id).toBe('map-desk-1');
        expect(booking_service.model().resources[0].id).toBe('map-desk-1');
        expect(booking_service.confirmPost).toHaveBeenCalled();
    });

    it('should match API bookings to desk assets with a separate map id', () => {
        const service = spectator.service as any;
        const desks = [
            // a desk asset, bookings reference the asset id
            new Desk({ id: 'asset-1', map_id: 'desk-1', bookable: true }),
            new Desk({ id: 'asset-2', map_id: 'desk-2', bookable: true }),
            // a metadata desk, bookings reference the map id
            new Desk({ id: 'desk-3', bookable: true }),
            new Desk({ id: 'asset-4', map_id: 'desk-4', bookable: true }),
        ];

        service._updateDeskStatuses(
            desks,
            ['asset-1', 'asset-2', 'desk-3'],
            [],
            ['asset-2'],
            [],
            [],
        );

        expect(service._statuses['desk-1']()).toBe('pending');
        expect(service._statuses['desk-2']()).toBe('busy');
        expect(service._statuses['desk-3']()).toBe('pending');
        expect(service._statuses['desk-4']()).toBe('free');
    });

    it('should apply booking rules for the original desk id of desk assets', () => {
        const service = spectator.service as any;
        const desks = [
            new Desk({
                id: 'asset-1',
                map_id: 'map-1',
                place_id: 'desk-old',
                bookable: true,
            } as any),
            new Desk({ id: 'asset-2', map_id: 'map-2', bookable: true }),
        ];
        const rules = [
            {
                zone: '*',
                rules: { hidden: true },
                conditions: { resource_ids: ['desk-old'] },
            },
        ];

        service._updateDeskStatuses(desks, [], [], [], [], rules);

        expect(service._statuses['map-1']()).toBe('not-bookable');
        expect(service._statuses['map-2']()).toBe('free');
    });

    it('should show desks in use as occupied when they are not bookable', () => {
        const service = spectator.service as any;
        const desks = [
            new Desk({ id: 'desk-1', bookable: false }),
            new Desk({ id: 'desk-2', bookable: false }),
            new Desk({ id: 'desk-3', bookable: false }),
        ];

        service._updateDeskStatuses(desks, ['desk-1'], ['desk-2'], [], [], []);

        expect(service._statuses['desk-1']()).toBe('pending');
        expect(service._statuses['desk-2']()).toBe('busy');
        expect(service._statuses['desk-3']()).toBe('not-bookable');
    });

    it('should match AreaManagement map ids to desk assets', () => {
        const service = spectator.service as any;
        const desks = [
            new Desk({ id: 'asset-1', map_id: 'desk-1', bookable: true }),
        ];

        service._updateDeskStatuses(desks, [], ['desk-1'], [], [], []);

        expect(service._statuses['desk-1']()).toBe('busy');
    });

    it('should give device features the AreaManagement system id', () => {
        const device = { location: 'wireless', mac: 'aa:bb', x: 1, y: 1 };
        const variable = vi.fn(() => ({
            bindThenSubscribe: (cb: (d: any) => void) => {
                cb({ value: [device] });
                return () => null;
            },
        }));
        (spectator.inject(OrganisationService) as any).module = vi.fn(() => ({
            id: 'AreaManagement_1',
            system: { id: 'sys-1' },
            variable,
        }));
        const state = spectator.inject(ExploreStateService);

        (spectator.service as any)._bindToLevel('lvl-1');

        expect(state.setFeatures).toHaveBeenCalledWith('devices', [
            expect.objectContaining({
                data: expect.objectContaining({ system: 'sys-1' }),
            }),
        ]);
    });

    it('should preserve the all-day default when booking a desk from the map', async () => {
        const booking_service = spectator.inject(BookingFormService) as any;
        const { model, form } = generateBookingForm(
            undefined,
            spectator.inject(Injector),
        );
        booking_service.model = model;
        booking_service.form = form;
        booking_service.newForm = vi.fn(() =>
            model.update((m) => ({
                ...m,
                date: Date.now() + 60 * 60 * 1000,
                duration: 60,
                all_day: true,
            })),
        );
        booking_service.setOptions = vi.fn();
        booking_service.confirmPost = vi.fn().mockResolvedValue({});
        (spectator.service as any)._statuses['desk-1'] = signal('free');

        await (spectator.service as any)._bookDesk(
            new Desk({
                id: 'desk-1',
                name: 'Desk 1',
                bookable: true,
                zone: { id: 'lvl-1', parent_id: 'bld-1' } as any,
            }),
            {},
        );

        expect(booking_service.model().all_day).toBe(true);
    });

    it('should not reject the map action when the user cancels a desk booking', async () => {
        const state = spectator.inject(ExploreStateService);
        vi.spyOn(spectator.service as any, '_bookDesk').mockRejectedValue(
            'User cancelled',
        );
        (spectator.service as any)._options.set({ enable_booking: true });
        (spectator.service as any).processDesks([
            new Desk({ id: 'desk-1', name: 'Desk 1', bookable: true }),
        ]);
        const [, actions] = vi.mocked(state.setActions).mock.calls.at(-1);
        const mouseup = actions.find((_) => _.action === 'mouseup');

        await expect(
            mouseup.callback(new Event('mouseup')),
        ).resolves.toBeUndefined();
    });

    it('should show a failed booking without rejecting', async () => {
        const notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        const booking_service = spectator.inject(BookingFormService) as any;
        const { model, form } = generateBookingForm(
            undefined,
            spectator.inject(Injector),
        );
        booking_service.model = model;
        booking_service.form = form;
        booking_service.newForm = vi.fn();
        booking_service.setOptions = vi.fn();
        booking_service.confirmPost = vi
            .fn()
            .mockRejectedValue({ status: 409, message: 'Conflicting booking' });
        (spectator.service as any)._statuses['desk-1'] = signal('free');

        try {
            // The map calls this from a pointer event and does not catch it
            await expect(
                (spectator.service as any)._bookDesk(
                    new Desk({
                        id: 'desk-1',
                        name: 'Desk 1',
                        bookable: true,
                        zone: { id: 'lvl-1', parent_id: 'bld-1' } as any,
                    }),
                    {},
                ),
            ).resolves.toBeUndefined();

            expect(notify_open).toHaveBeenCalledTimes(1);
            expect((spectator.service as any)._users['desk-1']).toBeUndefined();
        } finally {
            setNotifyOutlet(null, true);
        }
    });

    it('should not report a booking error when confirmation is cancelled', async () => {
        const notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        const booking_service = spectator.inject(BookingFormService) as any;
        const { model, form } = generateBookingForm(
            undefined,
            spectator.inject(Injector),
        );
        booking_service.model = model;
        booking_service.form = form;
        booking_service.newForm = vi.fn();
        booking_service.setOptions = vi.fn();
        booking_service.confirmPost = vi
            .fn()
            .mockRejectedValue('User cancelled');
        (spectator.service as any)._statuses['desk-1'] = signal('free');

        try {
            await expect(
                (spectator.service as any)._bookDesk(
                    new Desk({
                        id: 'desk-1',
                        name: 'Desk 1',
                        bookable: true,
                        zone: { id: 'lvl-1', parent_id: 'bld-1' } as any,
                    }),
                    {},
                ),
            ).rejects.toBe('User cancelled');

            expect(notify_open).not.toHaveBeenCalled();
        } finally {
            setNotifyOutlet(null, true);
        }
    });
});
