import { EventEmitter, WritableSignal, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    SpectatorService,
    createServiceFactory,
} from '@ngneat/spectator/vitest';
import {
    Booking,
    Desk,
    OrganisationService,
    SettingsService,
    setNotifyOutlet,
    setTimeInTimezone,
} from '@placeos/common';
import { addHours, getUnixTime } from 'date-fns';
import { NEVER, of } from 'rxjs';

import { mockData } from '@placeos/common/tests';
import * as ts_client_mod from '@placeos/ts-client';
import { fromV1Mock, mockPage, mockReply } from '@placeos/ts-client/compat';
import {
    Booking as StaffBooking,
    type BookingInput as StaffBookingInput,
    bookings,
} from '@placeos/ts-client/staff';
import { MockProvider } from 'ng-mocks';
import { DeskModalComponent } from '../../app/desks/desk-modal.component';
import {
    DesksStateService,
    matchesDeskSearch,
} from '../../app/desks/desks-state.service';
import { BookingHistoryModalComponent } from '../../app/ui/booking-history-modal.component';
import { captureDownloads } from '../reports/download-capture.helper';

vi.mock('@placeos/ts-client', { spy: true });
vi.mock('@placeos/ts-client/staff', { spy: true });

type BookingOp = keyof typeof bookings;

/** The calls of the staff booking operations `names`, in call order, as [name, input] */
function bookingCalls(names: readonly BookingOp[]) {
    return names
        .flatMap((name) => {
            const mock: { calls: unknown[][]; invocationCallOrder: number[] } =
                vi.mocked(bookings[name]).mock;
            return mock.calls.map((call, i) => ({
                order: mock.invocationCallOrder[i],
                entry: [name, call[0]] as [
                    BookingOp,
                    Readonly<Record<string, unknown>>,
                ],
            }));
        })
        .sort((a, b) => a.order - b.order)
        .map(({ entry }) => entry);
}

/** A staff API booking reply, for the booking operation doubles */
const bookingReply = (data: StaffBookingInput) =>
    mockReply(mockData(StaffBooking, data));

describe('DesksStateService', () => {
    let spectator: SpectatorService<DesksStateService>;
    let active_building: WritableSignal<unknown>;
    let active_region: WritableSignal<unknown>;
    let current_building: unknown;
    let settings_map: Record<string, any>;
    let notify_open: ReturnType<typeof vi.fn>;
    const organisation_service: any = {
        active_levels: signal([]),
        initialised: signal(true),
        levelWithID: vi.fn(),
        organisation: { id: 'org-1' },
        region: { id: 'region-1' },
        buildings: [],
        levelsForBuilding: vi.fn((building) => [
            { id: `${building?.id || 'bld-1'}-lvl-1` },
        ]),
        levelsForRegion: vi.fn(() => []),
        get building() {
            return current_building;
        },
        set building(value) {
            current_building = value;
        },
    };
    const createService = createServiceFactory({
        service: DesksStateService,
        providers: [
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(SettingsService, {
                get: (name: string) => settings_map[name],
            }),
            MockProvider(OrganisationService, organisation_service),
        ],
    });

    // The workspace booking helpers (saveBooking, removeBooking, ...) are not
    // mockable under the bundling builder, so both stubbing and assertions
    // happen at the staff `bookings` operations they call:
    //   queryBookings -> bookings.query, saveBooking -> create/update,
    //   rejectBooking(Instance) -> reject(Instance),
    //   removeBooking(Instance) -> destroy(Instance)
    /** The booking writes that 6.x sent as POST requests */
    const posted_bookings = () =>
        bookingCalls([
            'create',
            'approve',
            'approveInstance',
            'reject',
            'rejectInstance',
            'checkIn',
            'checkInInstance',
        ]);
    const removed_bookings = () => bookingCalls(['destroy', 'destroyInstance']);

    // The real `openConfirmModal` runs against a fake MatDialog ref: its
    // `event` emitter resolves the confirmation ({ reason: 'done' } emitted on
    // the next macrotask, after openConfirmModal has subscribed), while
    // `afterClosed` must stay pending or it wins the internal Promise.race
    // with an empty result.
    const mockConfirm = () => {
        const confirm_event = new EventEmitter<any>();
        const confirm_ref = {
            afterClosed: () => NEVER,
            componentInstance: {
                event: confirm_event,
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(confirm_ref);
        setTimeout(() => confirm_event.emit({ reason: 'done' }));
        return confirm_ref;
    };

    beforeEach(() => {
        vi.clearAllMocks();
        current_building = { id: 'bld-1' };
        settings_map = { 'app.use_region': false };
        active_building = signal(current_building);
        active_region = signal({ id: 'region-1' });
        organisation_service.active_building = active_building;
        organisation_service.active_region = active_region;
        organisation_service.region = { id: 'region-1' };
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        const reply = bookingReply({ id: 1 });
        vi.mocked(bookings.query).mockResolvedValue(mockPage({ data: [] }));
        for (const name of [
            'create',
            'update',
            'approve',
            'approveInstance',
            'reject',
            'rejectInstance',
            'checkIn',
            'checkInInstance',
        ] as const) {
            vi.mocked(bookings[name]).mockResolvedValue(reply);
        }
        vi.mocked(bookings.destroy).mockResolvedValue(mockReply(''));
        vi.mocked(bookings.destroyInstance).mockResolvedValue(mockReply(''));
        vi.mocked(ts_client_mod.metadata.update).mockResolvedValue(
            mockReply({} as never),
        );
        vi.mocked(ts_client_mod.assets.query).mockResolvedValue(
            mockPage({
                data: [],
            } as any),
        );
        vi.mocked(ts_client_mod.metadata.show).mockImplementation(
            fromV1Mock(
                () =>
                    ({
                        details: [],
                    }) as never,
                ['id', 'name'],
                'data',
                'name',
            ),
        );
        spectator = createService();
    });

    afterEach(() => {
        setNotifyOutlet(null, true);
        vi.restoreAllMocks();
    });

    it.each([
        { rejected: true },
        { status: 'declined' as const },
        { checked_out_at: getUnixTime(Date.now()) },
        { deleted: true },
        { booking_start: getUnixTime(addHours(Date.now(), -2)), duration: 60 },
    ])(
        'should not send status changes for a completed booking: %j',
        async (state) => {
            const booking = new Booking({
                id: '1',
                booking_start: getUnixTime(Date.now()),
                duration: 60,
                ...state,
            });
            await spectator.service.approveDesk(booking);
            await spectator.service.rejectDesk(booking);
            await spectator.service.checkinDesk(booking, true);
            await spectator.service.checkinDesk(booking, false);
            expect(posted_bookings()).toEqual([]);
        },
    );

    it('should prevent repeated status changes after rejecting an active booking', async () => {
        const booking = new Booking({
            id: '1',
            booking_start: getUnixTime(Date.now()),
            duration: 60,
        });
        await spectator.service.rejectDesk(booking);
        await spectator.service.approveDesk(booking);
        await spectator.service.rejectDesk(booking);
        await spectator.service.checkinDesk(booking);
        expect(posted_bookings()).toHaveLength(1);
        expect(booking.status).toBe('declined');
    });

    it.each([false, true])(
        'should block cancellation after rejection, series: %s',
        async (series) => {
            const booking = new Booking({
                id: '1',
                booking_start: getUnixTime(Date.now()),
                duration: 60,
                rejected: true,
            });
            await spectator.service.cancelBooking(booking, series);
            expect(spectator.inject(MatDialog).open).not.toHaveBeenCalled();
            expect(removed_bookings()).toEqual([]);
            expect(booking.status).toBe('declined');
        },
    );

    it.each([false, true])(
        'should retain check-out completion and block another check-in, recurring: %s',
        async (recurring) => {
            const booking = new Booking({
                id: '1',
                booking_start: getUnixTime(Date.now()),
                duration: 60,
                recurrence_type: recurring ? 'daily' : 'none',
            });
            const checked_in_at = getUnixTime(Date.now());
            const check_in = recurring ? 'checkInInstance' : 'checkIn';
            vi.mocked(bookings[check_in]).mockResolvedValueOnce(
                bookingReply({
                    id: 1,
                    booking_start: booking.booking_start,
                    booking_end: booking.booking_end,
                    checked_in: true,
                    checked_in_at,
                }),
            );
            await spectator.service.checkinDesk(booking);
            expect(booking.checked_in).toBe(true);
            const checked_out_at = checked_in_at + 1;
            vi.mocked(bookings[check_in]).mockResolvedValueOnce(
                bookingReply({
                    id: 1,
                    booking_start: booking.booking_start,
                    booking_end: booking.booking_end,
                    checked_in: false,
                    checked_in_at,
                    checked_out_at,
                }),
            );
            await spectator.service.checkinDesk(booking, false);
            expect(booking.checked_in).toBe(false);
            expect(booking.checked_out_at).toBe(checked_out_at);
            expect(booking.has_ended).toBe(true);
            expect(booking.status).toBe('ended');
            await spectator.service.checkinDesk(booking);
            expect(posted_bookings()).toHaveLength(2);
            expect(posted_bookings()[1]).toEqual(
                recurring
                    ? [
                          'checkInInstance',
                          expect.objectContaining({
                              id: 1,
                              instance: booking.booking_start,
                              state: false,
                          }),
                      ]
                    : [
                          'checkIn',
                          expect.objectContaining({ id: 1, state: false }),
                      ],
            );
        },
    );

    it('should manage desk resources through assets when enabled', async () => {
        settings_map['app.desks.use_assets'] = true;
        vi.mocked(ts_client_mod.asset_categories.query).mockResolvedValue(
            mockPage({
                data: [{ id: 'desk-category', name: '_DESKS_' }],
            } as any),
        );
        vi.mocked(ts_client_mod.asset_types.query).mockResolvedValue(
            mockPage({
                data: [{ id: 'desk-type', name: '_DESKS_' }],
            } as any),
        );
        vi.mocked(ts_client_mod.assets.create).mockResolvedValue(
            mockReply({
                id: 'asset-desk-1',
            } as any),
        );
        vi.mocked(ts_client_mod.assets.destroy).mockResolvedValue(
            mockReply(undefined),
        );
        spectator.service.setFilters({ zones: ['level-1'] });
        const desk = new Desk({
            id: 'desk-map-1',
            map_id: 'desk-map-1',
            name: 'Desk One',
            zone: { id: 'level-1' } as any,
        });

        await spectator.service.addDesks([desk]);
        await spectator.service.removeDesk(
            new Desk({ ...desk, id: 'asset-desk-1' }),
            'level-1',
        );

        expect(ts_client_mod.assets.create).toHaveBeenCalledWith({
            body: expect.objectContaining({
                asset_type_id: 'desk-type',
                zone_id: 'level-1',
                identifier: 'Desk One',
                map_id: 'desk-map-1',
            }),
        });
        expect(ts_client_mod.assets.destroy).toHaveBeenCalledWith({
            id: 'asset-desk-1',
        });
        expect(ts_client_mod.metadata.update).not.toHaveBeenCalled();
    });

    it('should update existing desk assets when importing desks', async () => {
        settings_map['app.desks.use_assets'] = true;
        vi.mocked(ts_client_mod.asset_categories.query).mockResolvedValue(
            mockPage({
                data: [{ id: 'desk-category', name: '_DESKS_' }],
            } as any),
        );
        vi.mocked(ts_client_mod.asset_types.query).mockResolvedValue(
            mockPage({
                data: [{ id: 'desk-type', name: '_DESKS_' }],
            } as any),
        );
        vi.mocked(ts_client_mod.assets.query).mockImplementation(
            fromV1Mock(
                async (query: any) =>
                    ({
                        data:
                            query.zone_id === 'level-2'
                                ? [
                                      {
                                          id: 'asset-9',
                                          asset_type_id: 'desk-type',
                                          zone_id: 'level-2',
                                          identifier: 'Old Name',
                                          map_id: 'desk-6.06.1',
                                          bookable: true,
                                          images: ['desk.png'],
                                          client_ids: { floorsense_id: 'fs-1' },
                                          other_data: { tags: ['quiet'] },
                                      },
                                  ]
                                : [],
                    }) as any,
                ['...'],
                'page',
            ),
        );
        vi.mocked(ts_client_mod.assets.update).mockResolvedValue(
            mockReply({} as any),
        );
        vi.mocked(ts_client_mod.assets.create).mockResolvedValue(
            mockReply({} as any),
        );
        spectator.service.setFilters({ zones: ['level-1'] });

        // a metadata era CSV row, identified by the original desk id, and a
        // new row without an id
        await spectator.service.importDesksCsv(
            'id,name,zone_id\ndesk-6.06.1,New Name,level-2\n,Brand New,',
        );

        expect(ts_client_mod.assets.update).toHaveBeenCalledTimes(1);
        expect(ts_client_mod.assets.update).toHaveBeenCalledWith({
            id: 'asset-9',
            body: expect.objectContaining({
                zone_id: 'level-2',
                identifier: 'New Name',
                map_id: 'desk-6.06.1',
                // columns missing from the row keep the asset's values
                bookable: true,
                images: ['desk.png'],
                client_ids: { floorsense_id: 'fs-1' },
                other_data: { tags: ['quiet'] },
            }),
        });
        // rows without a level of their own use the selected level
        expect(ts_client_mod.assets.create).toHaveBeenCalledWith({
            body: expect.objectContaining({
                zone_id: 'level-1',
                identifier: 'Brand New',
                map_id: expect.stringMatching(/^desk-\d+$/),
            }),
        });
    });

    it('should update desk assets matching the original desk id in place_id when importing', async () => {
        settings_map['app.desks.use_assets'] = true;
        vi.mocked(ts_client_mod.asset_categories.query).mockResolvedValue(
            mockPage({
                data: [{ id: 'desk-category', name: '_DESKS_' }],
            } as any),
        );
        vi.mocked(ts_client_mod.asset_types.query).mockResolvedValue(
            mockPage({
                data: [{ id: 'desk-type', name: '_DESKS_' }],
            } as any),
        );
        vi.mocked(ts_client_mod.assets.query).mockResolvedValue(
            mockPage({
                data: [
                    {
                        id: 'asset-9',
                        asset_type_id: 'desk-type',
                        zone_id: 'level-1',
                        identifier: 'Old Name',
                        map_id: 'map-9',
                        client_ids: { place_id: 'desk-6.06.1' },
                    },
                ],
            } as any),
        );
        vi.mocked(ts_client_mod.assets.update).mockResolvedValue(
            mockReply({} as any),
        );
        vi.mocked(ts_client_mod.assets.create).mockResolvedValue(
            mockReply({} as any),
        );
        spectator.service.setFilters({ zones: ['level-1'] });

        await spectator.service.addDesks([
            { id: 'desk-6.06.1', name: 'New Name' } as any,
        ]);

        expect(ts_client_mod.assets.create).not.toHaveBeenCalled();
        expect(ts_client_mod.assets.update).toHaveBeenCalledWith({
            id: 'asset-9',
            body: expect.objectContaining({
                identifier: 'New Name',
                map_id: 'map-9',
                client_ids: { place_id: 'desk-6.06.1' },
            }),
        });
    });

    it('should open the booking history modal for a desk booking', () => {
        const booking = new Booking({ id: '1' });

        spectator.service.viewBookingHistory(booking);

        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            BookingHistoryModalComponent,
            {
                data: { booking },
                width: '32rem',
                maxWidth: '100vw',
            },
        );
    });

    it('should default a new desk to the selected level and save the chosen level', async () => {
        const dialog_ref = {
            afterClosed: () =>
                of({
                    reason: 'done',
                    metadata: {
                        id: 'desk-new',
                        name: 'New Desk',
                        map_id: 'desk-new',
                        zone_id: 'level-chosen',
                    },
                }),
            componentInstance: {
                event: NEVER,
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.service.setFilters({ zones: ['level-selected'] });

        await spectator.service.editDesk();

        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            DeskModalComponent,
            {
                data: {
                    desk: expect.any(Desk),
                    levels: [{ id: 'bld-1-lvl-1' }],
                    zone_id: 'level-selected',
                },
            },
        );
        expect(ts_client_mod.metadata.update).toHaveBeenCalledWith({
            id: 'level-chosen',
            body: expect.objectContaining({
                details: [
                    expect.objectContaining({
                        id: 'desk-new',
                        name: 'New Desk',
                    }),
                ],
            }),
        });
    });

    const newDeskDialogRef = () => ({
        afterClosed: () =>
            of({
                reason: 'done',
                metadata: {
                    id: 'desk-new',
                    name: 'New Desk',
                    map_id: 'desk-new',
                    zone_id: 'level-other',
                },
            }),
        componentInstance: { event: NEVER, loading: { set: vi.fn() } },
        close: vi.fn(),
    });

    it('should keep stored desks on a level that is not loaded when saving', async () => {
        (spectator.inject(MatDialog).open as any).mockReturnValue(
            newDeskDialogRef(),
        );
        vi.mocked(ts_client_mod.metadata.show).mockImplementation(
            fromV1Mock(
                async (zone: string) =>
                    ({
                        details:
                            zone === 'level-other'
                                ? [{ id: 'desk-stored', name: 'Stored Desk' }]
                                : [],
                    }) as never,
                ['id', 'name'],
                'data',
                'name',
            ),
        );
        spectator.service.setFilters({ zones: ['level-selected'] });

        await spectator.service.editDesk();

        expect(ts_client_mod.metadata.update).toHaveBeenCalledWith({
            id: 'level-other',
            body: expect.objectContaining({
                details: [
                    expect.objectContaining({ id: 'desk-stored' }),
                    expect.objectContaining({ id: 'desk-new' }),
                ],
            }),
        });
    });

    it('should not write desks when the stored list cannot be read', async () => {
        (spectator.inject(MatDialog).open as any).mockReturnValue(
            newDeskDialogRef(),
        );
        vi.mocked(ts_client_mod.metadata.show).mockRejectedValue('offline');
        spectator.service.setFilters({ zones: ['level-selected'] });

        await expect(spectator.service.editDesk()).rejects.toBe('offline');

        expect(ts_client_mod.metadata.update).not.toHaveBeenCalled();
    });

    it('should not add a desk with an ID already used on the level', async () => {
        // Saves read the level's stored desk list.
        vi.mocked(ts_client_mod.metadata.show).mockImplementation(
            fromV1Mock(
                () =>
                    ({
                        details: [{ id: 'desk-dup', name: 'Old' }],
                    }) as never,
                ['id', 'name'],
                'data',
                'name',
            ),
        );
        (spectator.inject(MatDialog).open as any).mockReturnValue({
            afterClosed: () =>
                of({
                    reason: 'done',
                    metadata: { id: 'desk-dup', name: 'New', zone_id: 'lvl-1' },
                }),
            componentInstance: { event: NEVER, loading: { set: vi.fn() } },
            close: vi.fn(),
        });

        await spectator.service.editDesk();

        expect(ts_client_mod.metadata.update).not.toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            'A desk with the ID "desk-dup" already exists.',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should not add a desk asset with a map ID already used on the level', async () => {
        settings_map['app.desks.use_assets'] = true;
        vi.spyOn(spectator.service as any, '_levelDeskList').mockResolvedValue([
            new Desk({
                id: 'asset-1',
                map_id: 'desk-dup',
                asset_type_id: 'desk-type',
            } as any),
        ]);
        (spectator.inject(MatDialog).open as any).mockReturnValue({
            afterClosed: () =>
                of({
                    reason: 'done',
                    metadata: { id: 'desk-dup', name: 'New', zone_id: 'lvl-1' },
                }),
            componentInstance: { event: NEVER, loading: { set: vi.fn() } },
            close: vi.fn(),
        });

        await spectator.service.editDesk();

        expect(ts_client_mod.assets.create).not.toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            'A desk with the ID "desk-dup" already exists.',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should default a new desk to the first level when none is selected', async () => {
        const dialog_ref = {
            afterClosed: () => of(undefined),
            componentInstance: {
                event: NEVER,
                loading: { set: vi.fn() },
            },
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.service.setFilters({ zones: [] });

        await spectator.service.editDesk();

        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            DeskModalComponent,
            expect.objectContaining({
                data: expect.objectContaining({ zone_id: 'bld-1-lvl-1' }),
            }),
        );
    });

    it('should download the current desk list', async () => {
        Object.defineProperty(spectator.service, 'desks', {
            value: () => [
                new Desk({
                    id: 'desk-1',
                    name: 'Desk One',
                    bookable: true,
                }),
                new Desk({ id: 'desk-2', name: 'Desk Two' }),
            ],
        });
        const downloads = captureDownloads();
        try {
            spectator.service.downloadDesksCSV();
            const csv = await downloads.text();

            expect(downloads.filename).toBe('desks.csv');
            expect(csv).toContain('desk-1');
            expect(csv).toContain('Desk One');
            expect(csv).toContain('desk-2');
            expect(csv).not.toContain('Test Desk');
        } finally {
            downloads.restore();
        }
    });

    it('should reload desk bookings when the active building changes', () => {
        expect((spectator.service as any)._currentLevelList()).toEqual([
            { id: 'bld-1-lvl-1' },
        ]);
        current_building = { id: 'bld-2' };
        active_building.set(current_building);
        expect((spectator.service as any)._currentLevelList()).toEqual([
            { id: 'bld-2-lvl-1' },
        ]);
    });

    it('should apply building timezone to desk booking listing requests', () => {
        current_building = { id: 'bld-1', timezone: 'Australia/Sydney' };
        active_building.set(current_building);
        (spectator.inject(SettingsService).get as any) = vi.fn(
            (name: string) => {
                if (name === 'app.use_region') return false;
                if (name === 'app.bookings.use_building_timezone') return true;
                return undefined;
            },
        );
        expect(spectator.service.timezone).toBe('Australia/Sydney');
    });

    it('should include and show rejected desk bookings as declined', async () => {
        const first_page = vi.fn(() =>
            Promise.resolve({
                data: [
                    {
                        id: '1',
                        rejected: true,
                        status: 'approved',
                    },
                ],
                total: 1,
                next: null,
            }),
        );
        (spectator.service as any)._first_page = first_page;
        (spectator.service as any)._next_page_fn = first_page;

        await (spectator.service as any)._loadPage(true);

        expect(spectator.service.bookings()[0]).toEqual(
            expect.objectContaining({
                rejected: true,
                status: 'declined',
            }),
        );
    });

    it('should use current desk names for desk bookings', () => {
        const desks = signal<Desk[]>([]);
        Object.defineProperty(spectator.service, 'desks', {
            value: desks,
        });
        (spectator.service as any)._bookings_state.set({
            list: [
                new Booking({
                    asset_id: 'desk-1',
                    extension_data: { name: 'Stale Desk Name' },
                }),
                new Booking({
                    asset_id: 'desk-2',
                    extension_data: { name: 'Another Stale Name' },
                }),
            ],
            total: 2,
            has_next: false,
        });

        expect(spectator.service.bookings().map((_) => _.asset_name)).toEqual([
            'desk-1',
            'desk-2',
        ]);

        desks.set([new Desk({ id: 'desk-1', name: 'Desk One' })]);

        expect(spectator.service.bookings().map((_) => _.asset_name)).toEqual([
            'Desk One',
            'desk-2',
        ]);

        // desk assets keep the original desk id as their map id
        desks.set([
            new Desk({ id: 'asset-1', map_id: 'desk-1', name: 'Desk One' }),
            new Desk({ id: 'asset-2', map_id: 'desk-2', name: 'Desk Two' }),
        ]);

        expect(spectator.service.bookings().map((_) => _.asset_name)).toEqual([
            'Desk One',
            'Desk Two',
        ]);

        // or as their place_id when it differs from the map id
        desks.set([
            new Desk({
                id: 'asset-1',
                map_id: 'map-1',
                place_id: 'desk-1',
                name: 'Desk One',
            } as any),
            new Desk({ id: 'asset-2', map_id: 'desk-1', name: 'Other' }),
        ]);

        expect(spectator.service.bookings().map((_) => _.asset_name)).toEqual([
            'Desk One',
            'desk-2',
        ]);
    });

    it('should keep rejected status when a fast reload returns the old approved state', async () => {
        const booking = {
            id: '1',
            approved: true,
            rejected: false,
            status: 'approved',
        } as any;
        const first_page = vi.fn(() =>
            Promise.resolve({
                data: [{ ...booking, approved: true, status: 'approved' }],
                total: 1,
                next: null,
            }),
        );

        await spectator.service.rejectDesk(booking);
        (spectator.service as any)._first_page = first_page;
        (spectator.service as any)._next_page_fn = first_page;
        await (spectator.service as any)._loadPage(true);

        expect(spectator.service.bookings()[0]).toEqual(
            expect.objectContaining({
                approved: false,
                rejected: true,
                status: 'declined',
            }),
        );
    });

    it('should cancel only one recurring booking instance', async () => {
        mockConfirm();
        const booking = new Booking({
            id: '1',
            parent_id: '100',
            instance: 1_740_000_000,
        });
        const other_instance = new Booking({
            id: '1',
            parent_id: '100',
            instance: 1_740_086_400,
        });
        (spectator.service as any)._bookings_state.set({
            list: [booking, other_instance],
            total: 2,
            has_next: false,
        });

        await spectator.service.cancelBooking(booking);

        expect(removed_bookings()).toEqual([
            [
                'destroyInstance',
                expect.objectContaining({ id: 1, instance: 1_740_000_000 }),
            ],
        ]);
        expect(spectator.service.bookings()).toEqual([
            expect.objectContaining({
                instance: 1_740_000_000,
                deleted: true,
                status: 'cancelled',
            }),
            expect.objectContaining({
                instance: 1_740_086_400,
                deleted: false,
            }),
        ]);
    });

    it('should delete recurring booking series and update every instance', async () => {
        mockConfirm();
        const booking = new Booking({
            id: '1',
            parent_id: '100',
            instance: 1_740_000_000,
        });
        const other_instance = new Booking({
            id: '2',
            parent_id: '100',
            instance: 1_740_086_400,
        });
        const unrelated_booking = new Booking({ id: '3' });
        (spectator.service as any)._bookings_state.set({
            list: [booking, other_instance, unrelated_booking],
            total: 3,
            has_next: false,
        });

        await spectator.service.cancelBooking(booking, true);

        expect(removed_bookings()).toEqual([
            ['destroy', expect.objectContaining({ id: 100 })],
        ]);
        expect(spectator.service.bookings()).toEqual([
            expect.objectContaining({ deleted: true, status: 'cancelled' }),
            expect.objectContaining({ deleted: true, status: 'cancelled' }),
            expect.objectContaining({ id: '3', deleted: false }),
        ]);
    });

    it('should create assigned booking for non-bookable desks', async () => {
        const mock_now = new Date('2026-06-15T12:00:00Z').valueOf();
        current_building = { id: 'bld-1', timezone: 'Australia/Sydney' };
        active_building.set(current_building);
        settings_map['app.bookings.use_building_timezone'] = true;
        vi.spyOn(Date, 'now').mockReturnValue(mock_now);
        // The real `setTimeInTimezone` runs (workspace fns can't be spied);
        // derive the expected window with the same inputs the service uses.
        const assigned_start = setTimeInTimezone(
            mock_now,
            1,
            0,
            'Australia/Sydney',
        );
        const dialog_ref = {
            afterClosed: () =>
                of({
                    reason: 'done',
                    metadata: {
                        id: 'desk-1',
                        name: 'Desk 1',
                        bookable: false,
                        assigned_to: 'staff@example.com',
                        assigned_name: 'Staff Name',
                    },
                }),
            componentInstance: {
                event: new EventEmitter<any>(),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.service.setFilters({ zones: ['level-1'] });

        await spectator.service.editDesk({ id: 'desk-1' } as any);

        expect(posted_bookings()).toHaveLength(1);
        expect(posted_bookings()[0][1].body).toEqual(
            expect.objectContaining({
                booking_start: getUnixTime(assigned_start),
                booking_end: getUnixTime(addHours(assigned_start, 22)),
            }),
        );
    });

    it('should persist homebase when editing desks', async () => {
        vi.spyOn(ts_client_mod.metadata, 'update').mockImplementation(
            fromV1Mock(() => of({}) as any, ['id', 'body']),
        );
        const dialog_ref = {
            afterClosed: () =>
                of({
                    reason: 'done',
                    metadata: {
                        id: 'desk-1',
                        name: 'Desk 1',
                        map_id: 'desk-1',
                        homebase: 'Sydney HQ',
                    },
                }),
            componentInstance: {
                event: new EventEmitter<any>(),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.service.setFilters({ zones: ['level-1'] });

        await spectator.service.editDesk({ id: 'desk-1' } as any);

        expect(ts_client_mod.metadata.update).toHaveBeenCalledWith({
            id: 'level-1',
            body: expect.objectContaining({
                details: expect.arrayContaining([
                    expect.objectContaining({ homebase: 'Sydney HQ' }),
                ]),
            }),
        });
    });

    it('should cancel overlapping bookings after assigning a desk', async () => {
        const mock_now = new Date('2026-08-18T10:55:00').valueOf();
        vi.spyOn(Date, 'now').mockReturnValue(mock_now);
        vi.mocked(bookings.create).mockResolvedValue(
            bookingReply({
                id: 300,
                booking_start: new Date('2026-08-18T03:00:00').valueOf() / 1000,
                booking_end: new Date('2026-08-18T23:00:00').valueOf() / 1000,
                booking_type: 'desk',
                recurrence_type: 'daily',
                user_email: 'staff@example.com',
                asset_id: 'G-033',
                zones: ['ground-floor'],
            }),
        );
        vi.mocked(bookings.query).mockResolvedValue(
            mockPage({
                data: [
                    mockData(StaffBooking, {
                        id: 200,
                        booking_start:
                            new Date('2026-08-18T16:45:00').valueOf() / 1000,
                        booking_end:
                            new Date('2026-08-18T17:15:00').valueOf() / 1000,
                        booking_type: 'desk',
                        approved: true,
                        asset_id: 'F-010',
                        zones: ['first-floor'],
                    }),
                ],
            }),
        );
        const dialog_ref = {
            afterClosed: () =>
                of({
                    reason: 'done',
                    metadata: {
                        id: 'G-033',
                        name: 'G-033',
                        assigned_to: 'staff@example.com',
                        assigned_name: 'Staff Name',
                    },
                }),
            componentInstance: {
                event: new EventEmitter<any>(),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.service.setFilters({ zones: ['ground-floor'] });

        await spectator.service.editDesk({ id: 'G-033' } as Desk);

        expect(removed_bookings()).toEqual([
            ['destroy', expect.objectContaining({ id: 200 })],
        ]);
        expect(bookings.reject).not.toHaveBeenCalledWith(
            expect.objectContaining({ id: 200 }),
        );
    });

    it('should block assignments when the desk limit is reached', async () => {
        settings_map['app.desks.max_assigned_count'] = 1;
        vi.mocked(ts_client_mod.metadata.show).mockImplementation(
            fromV1Mock(
                () =>
                    ({
                        details: [
                            {
                                id: 'desk-existing',
                                assigned_to: 'staff@example.com',
                                assigned_name: 'Staff Name',
                            },
                        ],
                    }) as never,
                ['id', 'name'],
                'data',
                'name',
            ),
        );
        const dialog_ref = {
            afterClosed: () =>
                of({
                    reason: 'done',
                    metadata: {
                        id: 'desk-new',
                        name: 'Desk New',
                        assigned_to: 'staff@example.com',
                        assigned_name: 'Staff Name',
                    },
                }),
            componentInstance: {
                event: new EventEmitter<any>(),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.service.setFilters({ zones: ['level-1'] });

        await spectator.service
            .editDesk({ id: 'desk-new-2' } as any)
            .catch(() => undefined);

        expect(notify_open).toHaveBeenCalledWith(
            'Users can only have 1 assigned desk at a time.',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(ts_client_mod.metadata.update).not.toHaveBeenCalled();
        expect(posted_bookings()).toHaveLength(0);
        expect(dialog_ref.componentInstance.loading.set).toHaveBeenCalledWith(
            false,
        );
    });

    it('should restore the previous assigned desk booking when reassignment fails', async () => {
        const original_desk = {
            id: 'desk-1',
            name: 'Desk 1',
            assigned_to: 'old.staff@example.com',
            assigned_name: 'Old Staff',
            zone: { id: 'level-1' },
            zones: ['level-1'],
        } as any;
        const dialog_ref = {
            afterClosed: () =>
                of({
                    reason: 'done',
                    metadata: {
                        ...original_desk,
                        assigned_to: 'new.staff@example.com',
                        assigned_name: 'New Staff',
                    },
                }),
            componentInstance: {
                event: new EventEmitter<any>(),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        };
        (spectator.inject(MatDialog).open as any).mockReturnValue(dialog_ref);
        spectator.service.setFilters({ zones: ['level-1'] });
        // `_clearAssignedBooking` looks the old booking up with a paged query
        vi.mocked(bookings.query).mockResolvedValue(
            mockPage({
                data: [
                    mockData(StaffBooking, {
                        id: 1,
                        asset_id: 'desk-1',
                        booking_start: Math.floor(Date.now() / 1000),
                    }),
                ],
            }),
        );
        // First save (new assignment) conflicts; the restore save succeeds.
        vi.mocked(bookings.create)
            .mockRejectedValueOnce({ status: 409 })
            .mockResolvedValueOnce(bookingReply({ id: 2 }));

        await spectator.service.editDesk(original_desk).catch(() => undefined);

        expect(ts_client_mod.metadata.update).toHaveBeenCalledTimes(2);
        expect(removed_bookings()).toEqual([
            ['destroy', expect.objectContaining({ id: 1 })],
        ]);
        expect(posted_bookings()).toHaveLength(2);
        expect(posted_bookings()[0][1].body).toEqual(
            expect.objectContaining({
                user_email: 'new.staff@example.com',
                user_name: 'New Staff',
                asset_id: 'desk-1',
            }),
        );
        expect(posted_bookings()[1][1].body).toEqual(
            expect.objectContaining({
                user_email: 'old.staff@example.com',
                user_name: 'Old Staff',
                asset_id: 'desk-1',
                // The staff API has no `asset_name`: it is in `extension_data`
                zones: ['org-1', 'region-1', 'bld-1', 'level-1'],
                extension_data: expect.objectContaining({
                    asset_name: 'Desk 1',
                    is_assigned: true,
                }),
            }),
        );
    });

    it('should mark a rejected desk booking as declined', async () => {
        const booking = {
            id: '1',
            approved: true,
            rejected: false,
            status: 'approved',
        } as any;

        await spectator.service.rejectDesk(booking);

        expect(posted_bookings()).toEqual([['reject', { id: 1 }]]);
        expect(booking.approved).toBe(false);
        expect(booking.rejected).toBe(true);
        expect(booking.status).toBe('declined');
        expect(notify_open).toHaveBeenCalledWith(
            'APP.CONCIERGE.DESKS_REJECT_SUCCESS',
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should rethrow a failed check-in and keep the booking state', async () => {
        const booking = new Booking({
            id: '1',
            booking_start: getUnixTime(Date.now()),
            duration: 60,
        });
        // The helper reads the error from the body of the HTTP error
        vi.mocked(bookings.checkIn).mockResolvedValueOnce({
            ok: false,
            error: {
                kind: 'http',
                status: 423,
                message: 'Desk is locked',
                body: { error: 'Desk is locked' },
                text: null,
            },
        });

        await expect(spectator.service.checkinDesk(booking)).rejects.toBe(
            'Desk is locked',
        );

        expect(booking.checked_in).toBe(false);
        expect(notify_open).toHaveBeenCalledWith(
            'APP.CONCIERGE.DESKS_CHECKIN_ERROR',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should expand the All zone to every building level and clear it on a level pick', () => {
        spectator.service.setFilters({ zones: ['All'] });
        expect(spectator.service.filters().zones).toEqual([
            'All',
            'bld-1-lvl-1',
        ]);

        spectator.service.setFilters({ zones: ['All', 'level-2'] });
        expect(spectator.service.filters().zones).toEqual([
            'All',
            'bld-1-lvl-1',
        ]);

        // Unticking All while it was active clears the level selection
        spectator.service.setFilters({ zones: ['bld-1-lvl-1'] });
        expect(spectator.service.filters().zones).toEqual([]);
    });

    it('should discard a page that resolves after a newer load starts', async () => {
        let resolveStale: (value: unknown) => void;
        (spectator.service as any)._first_page = () =>
            new Promise((resolve) => (resolveStale = resolve));
        // Call the loader directly so the test can wait for the stale load
        const stale_load = (spectator.service as any)._loadPage(true);
        (spectator.service as any)._first_page = () =>
            Promise.resolve({
                data: [new Booking({ id: 'fresh' })],
                total: 1,
                next: null,
            });
        spectator.service.refresh();
        await vi.waitFor(() =>
            expect(spectator.service.paged_bookings().list).toHaveLength(1),
        );

        resolveStale({
            data: [new Booking({ id: 'stale' })],
            total: 1,
            next: null,
        });
        await stale_load;

        expect(
            spectator.service.paged_bookings().list.map((_) => _.id),
        ).toEqual(['fresh']);
        expect(spectator.service.loading()).toBe(false);
    });

    it('should reset desk bookings with the first page query on refresh', () => {
        const first_page = vi.fn(() =>
            Promise.resolve({ data: [], total: 0, next: null }),
        );
        (spectator.service as any)._first_page = first_page;

        spectator.service.refresh();

        expect((spectator.service as any)._next_page_fn).toBe(first_page);
        expect(first_page).toHaveBeenCalled();
    });

    it('should load more desk bookings when the first page has a next link but no total', async () => {
        // staff-api sends no total for pages that expand recurring bookings
        const next_page = vi.fn();
        const first_page = vi.fn().mockResolvedValue({
            data: [new Booking({ id: '1' })],
            total: 0,
            next: next_page,
        });
        (spectator.service as any)._first_page = first_page;

        await (spectator.service as any)._loadPage(true);

        expect(spectator.service.has_more_pages()).toBe(true);
        expect((spectator.service as any)._next_page_fn).toBe(next_page);
    });

    it('should stop desk booking pagination when a page is empty', async () => {
        const next_page = vi.fn();
        const empty_page = vi.fn().mockResolvedValue({
            data: [],
            total: 2,
            next: next_page,
        });
        const booking = new Booking({ id: '1' });
        (spectator.service as any)._bookings_state.set({
            list: [booking],
            total: 2,
            has_next: true,
        });
        (spectator.service as any)._next_page_fn = empty_page;

        await (spectator.service as any)._loadPage(false);

        expect(spectator.service.bookings()).toEqual([booking]);
        expect(spectator.service.has_more_pages()).toBe(false);
        expect((spectator.service as any)._next_page_fn).toBeNull();
        expect(next_page).not.toHaveBeenCalled();
    });

    it('should reject active desk bookings with the instance endpoint where needed', async () => {
        const confirm_ref = mockConfirm();
        const list = [
            { id: '1', status: 'approved' },
            {
                id: '2',
                instance: 1_740_000_000,
                status: 'tentative',
            },
            { id: '3', status: 'declined' },
            { id: '4', status: 'cancelled' },
            { id: '5', status: 'ended' },
        ];
        Object.defineProperty(spectator.service, 'paged_bookings', {
            value: () => ({
                list,
                total: list.length,
                has_next: false,
            }),
        });
        const refresh_spy = vi.spyOn(spectator.service, 'refresh');

        await spectator.service.rejectAllDesks();

        expect(bookings.reject).toHaveBeenCalledWith({ id: 1 });
        expect(bookings.rejectInstance).toHaveBeenCalledWith({
            id: 2,
            instance: 1_740_000_000,
        });
        expect(posted_bookings()).toHaveLength(2);
        expect(confirm_ref.componentInstance.loading.set).toHaveBeenCalledWith(
            'APP.CONCIERGE.DESKS_REJECT_ALL_LOADING',
        );
        expect(confirm_ref.close).toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            'APP.CONCIERGE.DESKS_REJECT_ALL_SUCCESS',
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
        expect(list.map((desk) => desk.status)).toEqual([
            'declined',
            'declined',
            'declined',
            'cancelled',
            'ended',
        ]);
        expect(refresh_spy).toHaveBeenCalled();
    });

    it('should only reject the desk bookings that match the search', async () => {
        mockConfirm();
        const list = [
            { id: '1', status: 'approved', user_name: 'Alice Ng' },
            { id: '2', status: 'approved', user_name: 'Bob Lee' },
        ];
        Object.defineProperty(spectator.service, 'paged_bookings', {
            value: () => ({ list, total: list.length, has_next: false }),
        });
        spectator.service.setFilters({ search: 'alice' });

        await spectator.service.rejectAllDesks();

        expect(bookings.reject).toHaveBeenCalledWith({ id: 1 });
        expect(bookings.reject).not.toHaveBeenCalledWith({ id: 2 });
    });

    it('should reject the other desk bookings when one rejection fails', async () => {
        const confirm_ref = mockConfirm();
        const list = [
            // The staff API takes integer booking IDs
            { id: '1', instance: 1_740_000_000, status: 'tentative' },
            { id: '2', status: 'approved' },
        ];
        Object.defineProperty(spectator.service, 'paged_bookings', {
            value: () => ({ list, total: list.length, has_next: false }),
        });
        vi.mocked(bookings.rejectInstance).mockRejectedValue(
            '405 Method Not Allowed',
        );
        const refresh_spy = vi.spyOn(spectator.service, 'refresh');

        await spectator.service.rejectAllDesks();

        expect(confirm_ref.close).toHaveBeenCalled();
        expect(notify_open).toHaveBeenCalledWith(
            'COMMON.BULK_PARTIAL',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(list.map((desk) => desk.status)).toEqual([
            'tentative',
            'declined',
        ]);
        expect(refresh_spy).toHaveBeenCalled();
    });

    it('should approve only the selected desk bookings that can still change', async () => {
        const booking = (id: string, state: Partial<Booking> = {}) =>
            new Booking({
                id,
                booking_start: getUnixTime(Date.now()),
                duration: 60,
                status: 'tentative',
                ...state,
            });
        const refresh_spy = vi.spyOn(spectator.service, 'refresh');

        const done = await spectator.service.setBookingsApproval(
            [
                booking('1'),
                booking('2', { status: 'declined' }),
                booking('3', { deleted: true }),
            ],
            true,
        );

        expect(done).toBe(true);
        expect(posted_bookings()).toEqual([['approve', { id: 1 }]]);
        expect(spectator.inject(MatDialog).open).not.toHaveBeenCalled();
        expect(refresh_spy).toHaveBeenCalled();
    });
});

describe('matchesDeskSearch', () => {
    it('should match field values like the bookings table, not JSON text', () => {
        const booking = { user_name: 'Alice Ng', status: 'approved' } as any;
        expect(matchesDeskSearch(booking, 'alice')).toBe(true);
        // Missing fields and quotes are not part of the searched text
        expect(matchesDeskSearch(booking, 'undefined')).toBe(false);
        expect(matchesDeskSearch(booking, '"alice')).toBe(false);
    });
});
