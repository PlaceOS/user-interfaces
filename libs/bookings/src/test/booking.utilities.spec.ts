import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    Booking,
    BookingType,
    BuildingLevel,
    CalendarEvent,
    fromBookingRecurrence,
    getAllDayTimeRange,
    OrganisationService,
    settingSignal,
    Space,
    User,
    WeekOfMonth,
} from '@placeos/common';
import { generateBookingForm } from '../lib/booking-form.model';
import {
    bookingLocationString,
    formatEmailName,
    loadLockersForScope,
    lockerBankFromAsset,
    lockerFromAsset,
    newBookingFromCalendarEvent,
    parkingRequestStatus,
    visitorDisplayNameFor,
} from '../lib/booking.utilities';
import type { LockerBank } from '../lib/locker.class';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { PlaceAsset, PlaceSystem } from '@placeos/ts-client';

describe('Booking Utilities', () => {
    let injector: Injector;

    beforeEach(() => {
        injector = TestBed.inject(Injector);
    });

    describe('bookingLocationString', () => {
        const system_level = new BuildingLevel({ id: 'lvl-2', name: 'L2' });
        const system = new PlaceSystem({ id: 'sys-1', zones: ['lvl-2'] });
        const org = {
            levelWithID: (ids: string[]) =>
                ids.includes('lvl-2') ? system_level : undefined,
        } as OrganisationService;

        it('should use the level name of the space', () => {
            const event = new CalendarEvent({
                location: 'Room 1',
                resources: [
                    new Space({
                        email: 'room-1@example.com',
                        level: new BuildingLevel({ name: 'Level 1' }),
                    }),
                ],
                system,
            });
            expect(bookingLocationString(event, org)).toBe('Room 1 - Level 1');
        });

        it('should fall back to the level of the system zones', () => {
            const event = new CalendarEvent({
                location: 'Room 1',
                system,
            });
            expect(bookingLocationString(event, org)).toBe('Room 1 - L2');
        });

        it('should show only the level of a hidden parking space', () => {
            const booking = (booking_type: BookingType) =>
                new Booking({
                    booking_type,
                    asset_id: 'space-1',
                    asset_name: 'Bay 1',
                    zones: ['lvl-2'],
                });
            expect(bookingLocationString(booking('parking'), org)).toBe(
                'Bay 1 - L2',
            );
            expect(bookingLocationString(booking('parking'), org, true)).toBe(
                'L2',
            );
            expect(bookingLocationString(booking('desk'), org, true)).toBe(
                'Bay 1 - L2',
            );
        });
    });

    describe('visitorDisplayNameFor', () => {
        const visitor = (data: Partial<Booking> = {}) =>
            new Booking({
                booking_type: 'visitor',
                asset_id: 'jane.doe@example.com',
                ...data,
            });

        it('should prefer the group member name, then the attendee name', () => {
            const attendees = [
                new User({ email: 'jane.doe@example.com', name: 'Jane A' }),
            ];
            expect(
                visitorDisplayNameFor(
                    visitor({
                        attendees,
                        extension_data: {
                            group_members: [
                                {
                                    email: 'jane.doe@example.com',
                                    name: 'Jane G',
                                },
                            ],
                        },
                    }),
                ),
            ).toBe('Jane G');
            expect(visitorDisplayNameFor(visitor({ attendees }))).toBe(
                'Jane A',
            );
        });

        it('should not show the visit reason or email as the visitor name', () => {
            expect(
                visitorDisplayNameFor(
                    visitor({
                        description: 'Interview',
                        extension_data: { visitor_name: 'interview' },
                    }),
                ),
            ).toBe('Jane Doe');
            expect(
                visitorDisplayNameFor(
                    visitor({ extension_data: { visitor_name: 'Jane Smith' } }),
                ),
            ).toBe('Jane Smith');
        });
    });

    describe('formatEmailName', () => {
        it('should turn the local part of an email into title case words', () => {
            expect(formatEmailName('mary_ann-lee..jones@example.com')).toBe(
                'Mary Ann Lee Jones',
            );
        });

        it('should return values without a usable local part unchanged', () => {
            expect(formatEmailName('Visitor')).toBe('Visitor');
            expect(formatEmailName('._@example.com')).toBe('._@example.com');
        });
    });

    describe('parkingRequestStatus', () => {
        it('should identify waitlisted parking requests', () => {
            expect(
                parkingRequestStatus({
                    approved: false,
                    process_state: 'wait_list',
                    extension_data: { requires_manual_approval: false },
                }),
            ).toBe('waitlist');
        });

        it('should keep requests without a process state pending', () => {
            expect(
                parkingRequestStatus({
                    approved: false,
                    process_state: '',
                    extension_data: { requires_manual_approval: false },
                }),
            ).toBe('pending');
        });

        it('should identify parking requests that need manual approval', () => {
            expect(
                parkingRequestStatus({
                    approved: false,
                    process_state: '',
                    extension_data: { requires_manual_approval: true },
                }),
            ).toBe('approval_required');
        });

        it('should keep approved parking requests pending', () => {
            expect(
                parkingRequestStatus({
                    approved: true,
                    process_state: 'wait_list',
                    extension_data: { requires_manual_approval: true },
                }),
            ).toBe('pending');
        });
    });

    describe('generateBookingForm', () => {
        it('should expose a form field for every model key', () => {
            const { model, form } = TestBed.runInInjectionContext(() =>
                generateBookingForm(new Booking(), injector),
            );
            expect(typeof model).toBe('function');
            expect(typeof form).toBe('function');
            for (const key of Object.keys(model())) {
                expect(typeof form[key]).toBe('function');
                expect(form[key]()).toBeDefined();
                expect(model()[key]).not.toBeNull();
            }
        });

        it('should use visitor_name extension data instead of description for visitor forms', () => {
            const { model } = TestBed.runInInjectionContext(() =>
                generateBookingForm(
                    new Booking({
                        booking_type: 'visitor',
                        asset_id: 'visitor@example.com',
                        description: 'Vendor Interview',
                        extension_data: { visitor_name: 'Visitor One' },
                    }),
                    injector,
                ),
            );

            expect(model().asset_name).toBe('Visitor One');
        });

        it('should revalidate duration when the start date changes', () => {
            const past_date = Date.now() - 2 * 60 * 60 * 1000;
            const future_date = Date.now() + 2 * 60 * 60 * 1000;
            const { model, form } = TestBed.runInInjectionContext(() =>
                generateBookingForm(
                    new Booking({
                        booking_type: 'visitor',
                        date: past_date,
                        duration: 60,
                    }),
                    injector,
                ),
            );

            expect(form.duration().errors()).toEqual([
                expect.objectContaining({ kind: 'duration' }),
            ]);

            model.update((m) => ({ ...m, date: future_date }));

            expect(form.duration().errors()).toEqual([]);
        });

        it('should coerce undefined writes back to typed defaults so [formField] bindings survive', () => {
            const { model, form } = TestBed.runInInjectionContext(() =>
                generateBookingForm(
                    new Booking({ booking_type: 'visitor' }),
                    injector,
                ),
            );

            // A CVA or handler clearing fields to undefined would otherwise
            // remove them from the FieldTree, breaking `[formField]`.
            model.update((m) => ({
                ...m,
                user: undefined,
                asset_id: undefined,
                assets: undefined,
            }));

            // Sanitised synchronously at the update() boundary — no tick.
            expect(typeof form.user).toBe('function');
            expect(typeof form.asset_id).toBe('function');
            expect(typeof form.assets).toBe('function');
            expect(model().asset_id).toBe('');
            expect(model().assets).toEqual([]);
            expect(model().user).toBeDefined();
        });

        it('should coerce null writes for non-nullable fields so [formField] bindings survive', () => {
            const { model, form } = TestBed.runInInjectionContext(() =>
                generateBookingForm(
                    new Booking({ booking_type: 'visitor' }),
                    injector,
                ),
            );

            // UserSearchField clears via null. For a non-nullable object field
            // that makes signal-forms degrade the field binding.
            model.update((m) => ({
                ...m,
                user: null,
                asset_id: null,
                assets: null,
                booking_asset: null,
                group: null,
                recurrence_instances: null,
            }));

            expect(typeof form.user).toBe('function');
            expect(typeof form.asset_id).toBe('function');
            expect(typeof form.assets).toBe('function');
            expect(typeof form.booking_asset).toBe('function');
            expect(typeof form.group).toBe('function');
            expect(typeof form.recurrence_instances).toBe('function');
            expect(model().asset_id).toBe('');
            expect(model().assets).toEqual([]);
            expect(model().booking_asset).toEqual({});
            expect(model().group).toBe('');
            expect(model().recurrence_instances).toBe(0);
            expect(model().user).toBeDefined();
        });

        it('should preserve a date-based recurrence when the instance count is cleared', () => {
            const end_date = new Date(2026, 7, 3).valueOf();
            const { model } = TestBed.runInInjectionContext(() =>
                generateBookingForm(
                    new Booking({ booking_type: 'desk' }),
                    injector,
                ),
            );

            model.update((m) => ({
                ...m,
                recurrence_type: 'daily',
                recurrence_interval: 1,
                recurrence_end: end_date / 1000,
                recurrence_instances: undefined,
            }));

            const recurrence = fromBookingRecurrence(model() as any);

            expect(recurrence.end_type).toBe('date');
            expect(recurrence.end_date).toBe(end_date);
        });

        it('should lock locker date and time fields when lockers.disabled_date_select is set', () => {
            const lock = settingSignal('lockers.disabled_date_select');
            const { model, form } = TestBed.runInInjectionContext(() =>
                generateBookingForm(
                    new Booking({ booking_type: 'locker' }),
                    injector,
                ),
            );
            expect(form.date().disabled()).toBe(false);
            expect(form.duration().disabled()).toBe(false);

            lock.set(true);
            expect(form.date().disabled()).toBe(true);
            expect(form.duration().disabled()).toBe(true);

            model.update((m) => ({ ...m, booking_type: 'desk' }));
            expect(form.date().disabled()).toBe(false);
            expect(form.duration().disabled()).toBe(false);
            lock.set(false);
        });

        it('should lock the date of a started or past saved booking only', () => {
            const past = Date.now() - 2 * 60 * 60 * 1000;
            const future = Date.now() + 2 * 60 * 60 * 1000;
            const dateDisabled = (data: Partial<Booking>) => {
                const { form } = TestBed.runInInjectionContext(() =>
                    generateBookingForm(
                        new Booking({ booking_type: 'desk', ...data }),
                        injector,
                    ),
                );
                return form.date().disabled();
            };

            expect(dateDisabled({ date: past })).toBe(false);
            expect(dateDisabled({ id: 'bkn-1', date: future })).toBe(false);
            expect(dateDisabled({ id: 'bkn-1', date: past })).toBe(true);
            // `started` is the first 15 minutes after the start time
            expect(
                dateDisabled({
                    date: Date.now() - 5 * 60 * 1000,
                    duration: 60,
                }),
            ).toBe(true);
        });

        it('should copy the first selected resource onto the booking asset fields', () => {
            const { model } = TestBed.runInInjectionContext(() =>
                generateBookingForm(
                    new Booking({ booking_type: 'desk' }),
                    injector,
                ),
            );
            const desk = {
                id: 'desk-1',
                name: 'Desk 1',
                display_name: 'Window Desk',
                map_id: 'map-desk-1',
                zone: { id: 'lvl-1', parent_id: 'bld-1' },
            };

            model.update((m) => ({ ...m, resources: [desk] }));
            TestBed.tick();

            expect(model()).toEqual(
                expect.objectContaining({
                    asset_id: 'desk-1',
                    asset_name: 'Desk 1',
                    name: 'Window Desk',
                    map_id: 'map-desk-1',
                    description: 'Desk 1',
                    zones: ['bld-1', 'lvl-1'],
                    booking_asset: desk,
                }),
            );

            model.update((m) => ({ ...m, resources: [] }));
            TestBed.tick();
            expect(model().asset_id).toBe('');
        });

        it('should keep the visitor email when the resources are reset', () => {
            const { model } = TestBed.runInInjectionContext(() =>
                generateBookingForm(
                    new Booking({
                        booking_type: 'visitor',
                        asset_id: 'visitor@example.com',
                    }),
                    injector,
                ),
            );

            model.update((m) => ({ ...m, resources: [] }));
            TestBed.tick();

            expect(model().asset_id).toBe('visitor@example.com');
        });
    });

    describe('lockerBankFromAsset', () => {
        it('should start each bank with an empty locker list', () => {
            // Pickers read `bank.lockers` before the lockers query returns
            const bank = lockerBankFromAsset({
                id: 'bank-1',
                zone_id: 'level-1',
                other_data: {},
            } as any);

            expect(bank.lockers).toEqual([]);
        });
    });

    describe('lockerFromAsset', () => {
        const bank = {
            id: 'bank-1',
            zone: { id: 'lvl-1' },
        } as LockerBank;

        it('should read locker details from other data and link the bank', () => {
            const locker = lockerFromAsset(
                {
                    id: 'locker-1',
                    parent_id: 'bank-1',
                    other_data: {
                        name: 'Locker A',
                        map_id: 'm-locker-1',
                        accessible: 'true',
                        position: '[2,3]',
                        size: 'not json',
                        features: '["usb"]',
                    },
                } as Partial<PlaceAsset> as PlaceAsset,
                [bank],
            );

            expect(locker).toMatchObject({
                bank_id: 'bank-1',
                name: 'Locker A',
                map_id: 'm-locker-1',
                accessible: true,
                bookable: true,
                position: [2, 3],
                size: [1, 1],
                features: ['usb'],
            });
            expect(locker.bank).toBe(bank);
            expect(locker.zone).toBe(bank.zone);
        });

        it('should keep a locker without a known bank unlinked', () => {
            const locker = lockerFromAsset(
                {
                    id: 'locker-2',
                    parent_id: 'bank-x',
                    bookable: false,
                    other_data: { accessible: 'false' },
                } as Partial<PlaceAsset> as PlaceAsset,
                [bank],
            );

            expect(locker).toMatchObject({
                bank_id: 'bank-x',
                accessible: false,
                bookable: false,
                position: [0, 0],
                features: [],
            });
            expect(locker.bank).toBeUndefined();
        });
    });

    describe('loadLockersForScope', () => {
        it('should list lockers under their bank without a reference cycle', async () => {
            vi.spyOn(ts_client, 'queryAssetCategories').mockResolvedValue({
                total: 1,
                next: null,
                data: [{ id: 'category-1', name: '_LOCKERS_', hidden: true }],
            } as any);
            vi.spyOn(ts_client, 'queryAssetTypes').mockResolvedValue({
                total: 1,
                next: null,
                data: [{ id: 'type-1', name: '_LOCKERS_' }],
            } as any);
            vi.spyOn(ts_client, 'queryAssets').mockResolvedValue({
                total: 1,
                next: null,
                data: [
                    {
                        id: 'locker-1',
                        identifier: 'Locker 1',
                        parent_id: 'bank-1',
                        zone_id: 'level-1',
                        asset_type_id: 'type-1',
                        other_data: {},
                    },
                    // A locker whose bank is not loaded is not listed
                    {
                        id: 'locker-2',
                        identifier: 'Locker 2',
                        parent_id: 'bank-x',
                        zone_id: 'level-1',
                        asset_type_id: 'type-1',
                        other_data: {},
                    },
                ],
            } as any);
            const bank = { id: 'bank-1', name: 'Bank 1', lockers: [] } as any;

            const lockers = await loadLockersForScope(
                { levelWithID: () => null } as any,
                'building-1',
                [bank],
            );

            expect(lockers.map((_) => _.id)).toEqual(['locker-1']);
            expect(lockers[0].bank).toBe(bank);
            expect(bank.lockers.map((_) => _.id)).toEqual(['locker-1']);
            expect(bank.lockers[0].bank.id).toBe('bank-1');
            expect(bank.lockers[0].bank.lockers).toEqual([]);
            expect(() => JSON.stringify(bank)).not.toThrow();
        });

        it('should list no lockers without a scope or when the query fails', async () => {
            const org = {
                levelWithID: () => null,
            } as Partial<OrganisationService> as OrganisationService;
            vi.spyOn(ts_client, 'queryAssetCategories').mockRejectedValue(
                new Error('offline'),
            );
            const query = vi
                .spyOn(ts_client, 'queryAssets')
                .mockRejectedValue(new Error('offline'));
            query.mockClear();

            expect(await loadLockersForScope(org, '', [])).toEqual([]);
            expect(query).not.toHaveBeenCalled();
            expect(await loadLockersForScope(org, 'building-1', [])).toEqual(
                [],
            );
        });
    });

    describe('newBookingFromCalendarEvent', () => {
        it.each([30, 90, 120, 480])(
            'should preserve a %s-minute interval in native booking payloads',
            (duration) => {
                const date = new Date(2028, 5, 15, 13, 25).valueOf();
                const event = new CalendarEvent({ date, duration });

                for (const input of [event, event.toJSON() as CalendarEvent]) {
                    const payload = newBookingFromCalendarEvent(input).toJSON();

                    expect(payload.booking_start).toBe(date / 1000);
                    expect(payload.booking_end).toBe(
                        date / 1000 + duration * 60,
                    );
                }
            },
        );

        it('should reserve the full day for an all-day room booking', () => {
            const period = getAllDayTimeRange(
                new Date(2028, 5, 15, 13).valueOf(),
                '',
            );
            const event = new CalendarEvent({ all_day: true, ...period });

            const payload = newBookingFromCalendarEvent(
                event.toJSON() as CalendarEvent,
            ).toJSON();

            expect(payload.booking_start).toBe(
                new Date(2028, 5, 15).valueOf() / 1000,
            );
            expect(payload.booking_end).toBe(
                new Date(2028, 5, 16).valueOf() / 1000,
            );
            expect(payload.all_day).toBe(true);
            expect(payload.extension_data.custom_all_day).toBeUndefined();
        });

        it.each([false, true])(
            'should preserve the delegated host identity, serialized event: %s',
            (serialized) => {
                const event = new CalendarEvent({
                    host: 'colleague@example.com',
                    creator: 'booker@example.com',
                    attendees: [
                        new User({
                            id: 'staff-colleague',
                            email: 'colleague@example.com',
                            name: 'Selected Colleague',
                        }),
                    ],
                });
                const booking = newBookingFromCalendarEvent(
                    serialized ? (event.toJSON() as CalendarEvent) : event,
                );

                expect(booking.toJSON()).toMatchObject({
                    user_id: 'staff-colleague',
                    user_email: 'colleague@example.com',
                    user_name: 'Selected Colleague',
                    extension_data: { creator: 'booker@example.com' },
                });
            },
        );

        it.each([false, true])(
            'should keep the meeting title, serialized event: %s',
            (serialized) => {
                const event = new CalendarEvent({ title: 'Team Sync' });
                const booking = newBookingFromCalendarEvent(
                    serialized ? (event.toJSON() as CalendarEvent) : event,
                );

                expect(booking.toJSON().title).toBe('Team Sync');
            },
        );

        it('should use the default title for an untitled meeting', () => {
            const booking = newBookingFromCalendarEvent(new CalendarEvent());

            expect(booking.title).toBe('Room Booking');
        });

        it('should use the host email as the identity when staff details are unavailable', () => {
            const booking = newBookingFromCalendarEvent(
                new CalendarEvent({
                    host: 'colleague@example.com',
                    creator: 'booker@example.com',
                }),
            );

            expect(booking.toJSON()).toMatchObject({
                user_id: 'colleague@example.com',
                user_email: 'colleague@example.com',
            });
        });

        it.each([false, true])(
            'should include the selected room zones in the booking payload, serialized event: %s',
            (serialized) => {
                const room = new Space({
                    id: 'room-1',
                    name: 'Meeting Room',
                    email: 'room@example.com',
                    zones: ['zone-building', 'zone-level'],
                });
                const event = new CalendarEvent({ resources: [room] });
                const booking = newBookingFromCalendarEvent(
                    serialized ? (event.toJSON() as CalendarEvent) : event,
                );

                expect(booking.toJSON()).toMatchObject({
                    asset_id: room.id,
                    booking_type: 'room',
                    zones: ['zone-building', 'zone-level'],
                });
            },
        );

        it.each([false, true])(
            'should hold every selected room in the booking payload, serialized event: %s',
            (serialized) => {
                const rooms = [
                    new Space({
                        id: 'room-1',
                        email: 'room-1@example.com',
                        zones: ['zone-building', 'zone-level-1'],
                    }),
                    new Space({
                        id: 'room-2',
                        email: 'room-2@example.com',
                        zones: ['zone-building', 'zone-level-2'],
                    }),
                ];
                const event = new CalendarEvent({ resources: rooms });
                const booking = newBookingFromCalendarEvent(
                    serialized ? (event.toJSON() as CalendarEvent) : event,
                );

                expect(booking.toJSON()).toMatchObject({
                    asset_id: 'room-1',
                    asset_ids: ['room-1', 'room-2'],
                    zones: ['zone-building', 'zone-level-1', 'zone-level-2'],
                });
            },
        );

        it('should allow an event without a room', () => {
            const booking = newBookingFromCalendarEvent(new CalendarEvent());

            expect(booking.toJSON().zones).toEqual([]);
        });

        it('should serialise monthly nth-weekday recurrence for room bookings', () => {
            const booking = newBookingFromCalendarEvent(
                new CalendarEvent({
                    date: new Date(2026, 4, 15, 9).valueOf(),
                    date_end: new Date(2026, 4, 15, 10).valueOf(),
                    recurring: true,
                    recurrence: {
                        start: new Date(2026, 4, 15, 9).valueOf(),
                        end: new Date(2026, 10, 30).valueOf(),
                        interval: 1,
                        pattern: 'month_day',
                        days_of_week: [5],
                        nth_of_month: WeekOfMonth.Third,
                    },
                }),
            );

            expect(booking.recurrence_type).toBe('monthly');
            expect(booking.recurrence_days).toBe(1 << 5);
            expect(booking.recurrence_nth_of_month).toBe(WeekOfMonth.Third);
            expect(booking.recurrence_interval).toBe(1);
        });
    });
});
