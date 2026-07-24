import {
    capitalizeFirstLetter,
    padString,
    predictableRandomInt,
    randomString,
} from '@placeos/common';
import {
    addDays,
    addMinutes,
    getUnixTime,
    setHours,
    startOfDay,
} from 'date-fns';
import { MOCK_ASSETS } from './assets.data';
import { generateCateringOrder } from './catering.data';

import { MOCK_SPACES } from './spaces.data';
import { ACTIVE_USER, MOCK_GUESTS, MOCK_STAFF } from './users.data';
import { MOCK_BUILDINGS, MOCK_LEVELS } from './zone.data';

const TRACKING = ['in_storage', 'in_transit', 'at_location'];

const generateBookingForDay = (
    day: number,
    type: string,
    index: number,
    user: (typeof MOCK_STAFF)[0],
) => {
    const bld = MOCK_BUILDINGS[predictableRandomInt(MOCK_BUILDINGS.length)];
    const lvls = MOCK_LEVELS.filter((_) => _.parent_id === bld?.id);
    const lvl = lvls[predictableRandomInt(lvls.length)];
    const lvl_spaces =
        MOCK_SPACES.filter((_) => _.zones.includes(lvl?.id)) || [];
    const approved = predictableRandomInt(999999) % 4;
    const approver = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
    const guest = MOCK_GUESTS[predictableRandomInt(MOCK_GUESTS.length)];
    const asset_count = predictableRandomInt(3, 1);
    const position = padString(predictableRandomInt(999) + 1, 3);
    const base_time = setHours(
        addDays(startOfDay(Date.now()), day - 15),
        predictableRandomInt(10, 7),
    );
    const booking_start = getUnixTime(base_time);
    const time_length = predictableRandomInt(240, 60);
    const booking_end = getUnixTime(addMinutes(base_time, time_length));
    const qr_base = (Date.now() * predictableRandomInt(999999, 1)) / 100000;

    return {
        id: index,
        qr_code: Math.floor(qr_base).toString(),
        booking_start,
        booking_end,
        timezone: 'Australia/Sydney',
        title: capitalizeFirstLetter(
            `${type.replace('-', ' ')} booking ${index}`,
        ),
        event_start: booking_start,
        event_end: booking_end,
        asset_ids:
            type === 'asset-request'
                ? [...Array(asset_count)].map(
                      (_, i) =>
                          MOCK_ASSETS[
                              predictableRandomInt(MOCK_ASSETS.length, i + 1)
                          ].id,
                  )
                : [
                      type === 'visitor'
                          ? guest.email
                          : `${type}-${bld?.id}-${lvl?.id}-${position}`,
                  ],
        asset_id:
            type === 'visitor'
                ? guest.email
                : `${type}-${bld?.id}-${lvl?.id}-${position}`,
        asset_name:
            type === 'visitor' ? guest.name : `${bld?.name}-${position}`,
        description:
            type === 'visitor'
                ? guest.name
                : `${capitalizeFirstLetter(type.replace('-', ' '))} in ${bld?.name}`,
        booking_type: type,
        type,
        user_id: user.id,
        user_name: user.name,
        user_email: user.email,
        booked_by_id: user.id,
        booked_by_name: user.name,
        booked_by_email: user.email,
        attendees: [],
        checked_in: approved && predictableRandomInt(4) <= 2,
        rejected: predictableRandomInt(12) === 0,
        approved: approved !== 0,
        deleted: false,
        access: approved !== 0,
        permission: type === 'group-event' ? 'OPEN' : 'PRIVATE',
        approver_id: approved ? approver.id : '',
        approver_name: approved ? approver.name : '',
        approver_email: approved ? approver.email : '',
        process_state:
            type === 'asset-request'
                ? TRACKING[predictableRandomInt(TRACKING.length, index)]
                : '',
        last_changed: booking_start,
        created: booking_start - 3600,
        created_by_id: user.id,
        created_by_name: user.name,
        created_by_email: user.email,
        zones: [
            bld?.id,
            type === 'parking'
                ? MOCK_LEVELS.find(
                      (l) => l.parent_id === bld?.id && l.type === 'parking',
                  )?.id
                : lvl?.id,
        ].filter(Boolean),
        extension_data: {
            map_id: `table-${bld?.id}.${position}`,
            note: capitalizeFirstLetter(
                `${type.replace('-', ' ')} booking ${index}`,
            ),
            notes: '',
            plate_number: randomString(
                8,
                'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            ),
            tracking: approved ? 'at_location' : 'in_storage',
            space_id: lvl_spaces.length
                ? lvl_spaces[predictableRandomInt(lvl_spaces.length)].id
                : `space-${index}`,
            building_id: bld?.id,
            building_name: bld?.name,
        },
    };
};

// Generate bookings with new requirements
export const MOCK_BOOKINGS = (() => {
    const bookings = [];
    let bookingIndex = 0;

    // Create bookings for 30 days (15 past, 15 future)
    for (let day = 0; day < 30; day++) {
        const dayBookings: ReturnType<typeof generateBookingForDay>[] = [];

        // For each day, pick 20 random users + the active user
        const staffWithoutActive = MOCK_STAFF.filter(
            (u) => u.id !== ACTIVE_USER.id,
        );
        const targetUserCount = Math.min(20, staffWithoutActive.length);
        // Shuffle staffWithoutActive deterministically within safe bounds
        const shuffled = [...staffWithoutActive];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = predictableRandomInt(i + 1); // 0..i
            const temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;
        }
        const selectedUsers = shuffled.slice(0, targetUserCount);
        {
            const activeFromStaff = MOCK_STAFF.find(
                (u) => u.id === ACTIVE_USER.id,
            );
            selectedUsers.push(
                activeFromStaff || {
                    ...ACTIVE_USER,
                    extension_data: {
                        employee_id: 'EMP0000',
                        start_date: new Date().toISOString(),
                        manager_id: null,
                    },
                },
            );
        }
        // Generate bookings for selected users
        selectedUsers.forEach((user) => {
            const userDayBookings = [];
            if (!user) return;

            // Desk bookings: 1-3 per day, within 7am-6pm and <= 8 hours
            const deskBookingCount = predictableRandomInt(4, 1);
            for (let i = 0; i < deskBookingCount; i++) {
                const booking = generateBookingForDay(
                    day,
                    'desk',
                    bookingIndex++,
                    user,
                );
                const durationHours = predictableRandomInt(9, 2); // 2-8 hours
                const latestStartHour = 18 - durationHours; // ensure end by 6pm
                const minStartHour = Math.min(7 + i * 3, latestStartHour);
                const startHour = predictableRandomInt(
                    latestStartHour + 1,
                    minStartHour,
                );
                const baseTime = setHours(
                    addDays(startOfDay(Date.now()), day - 15),
                    startHour,
                );
                booking.booking_start = getUnixTime(baseTime);
                booking.booking_end = getUnixTime(
                    addMinutes(baseTime, durationHours * 60),
                );
                booking.event_start = booking.booking_start;
                booking.event_end = booking.booking_end;
                userDayBookings.push(booking);
            }

            // Parking booking: exactly 1 per day, 6-8 hours within work hours
            {
                const booking = generateBookingForDay(
                    day,
                    'parking',
                    bookingIndex++,
                    user,
                );
                const durationHours = predictableRandomInt(9, 6); // 6-8 hours
                const latestStartHour = 18 - durationHours; // ensure end by 6pm
                const startHour = predictableRandomInt(latestStartHour + 1, 7);
                const baseTime = setHours(
                    addDays(startOfDay(Date.now()), day - 15),
                    startHour,
                );
                booking.booking_start = getUnixTime(baseTime);
                booking.booking_end = getUnixTime(
                    addMinutes(baseTime, durationHours * 60),
                );
                booking.event_start = booking.booking_start;
                booking.event_end = booking.booking_end;
                userDayBookings.push(booking);
            }

            // Visitor booking: exactly 1 per day, 1-3 hours within work hours
            {
                const booking = generateBookingForDay(
                    day,
                    'visitor',
                    bookingIndex++,
                    user,
                );
                const durationHours = predictableRandomInt(4, 1); // 1-3 hours
                const latestStartHour = 18 - durationHours; // ensure end by 6pm
                const startHour = predictableRandomInt(latestStartHour + 1, 7);
                const baseTime = setHours(
                    addDays(startOfDay(Date.now()), day - 15),
                    startHour,
                );
                booking.booking_start = getUnixTime(baseTime);
                booking.booking_end = getUnixTime(
                    addMinutes(baseTime, durationHours * 60),
                );
                booking.event_start = booking.booking_start;
                booking.event_end = booking.booking_end;
                userDayBookings.push(booking);
            }

            dayBookings.push(...userDayBookings);
        });

        bookings.push(...dayBookings);
    }

    // Add a cancelled parking request for today in every building so the
    // concierge parking list can exercise cancelled styling and actions.
    const active_user = MOCK_STAFF.find((user) => user.id === ACTIVE_USER.id);
    for (const bld of active_user ? MOCK_BUILDINGS : []) {
        const booking = generateBookingForDay(
            15,
            'parking',
            bookingIndex++,
            active_user,
        );
        const parking_level = MOCK_LEVELS.find(
            (level) => level.parent_id === bld.id && level.type === 'parking',
        );
        booking.title = `Cancelled parking request - ${bld.name}`;
        booking.description =
            'Cancelled mock request for testing disabled parking actions';
        booking.asset_id = `unallocated-${bld.id}-cancelled`;
        booking.asset_ids = [booking.asset_id];
        booking.asset_name = 'Unallocated parking request';
        booking.checked_in = false;
        booking.rejected = false;
        booking.approved = false;
        booking.deleted = true;
        booking.access = false;
        booking.zones = [bld.id, parking_level?.id].filter(Boolean);
        booking.extension_data = {
            ...booking.extension_data,
            notes: 'Cancelled mock request',
            plate_number: 'CANCELLED',
        };
        bookings.push(booking);
    }

    return bookings.sort((a, b) => a.booking_start - b.booking_start);
})();

// Generate catering-order bookings for caterer-ui
const generateCateringOrderBooking = (
    day: number,
    index: number,
    user: (typeof MOCK_STAFF)[0],
) => {
    const bld = MOCK_BUILDINGS[predictableRandomInt(MOCK_BUILDINGS.length)];
    const lvls = MOCK_LEVELS.filter((_) => _.parent_id === bld?.id);
    const lvl = lvls[predictableRandomInt(lvls.length)];
    const space = MOCK_SPACES[predictableRandomInt(MOCK_SPACES.length)];
    const base_time = setHours(
        addDays(startOfDay(Date.now()), day - 15),
        predictableRandomInt(10, 8),
    );
    const booking_start = getUnixTime(base_time);
    const time_length = predictableRandomInt(120, 60);
    const booking_end = getUnixTime(addMinutes(base_time, time_length));

    // Generate a catering order using the existing function
    const cateringOrder = generateCateringOrder({
        id: `catering-event-${index}`,
        event_start: booking_start,
        event_end: booking_end,
        attendees: [user],
        location: space?.name || 'Meeting Room',
    });

    // Pick a random caterer name from menu items
    const caterer = [
        'Gourmet Events Catering',
        'Fresh & Local Kitchen',
        'Premium Dining',
    ][predictableRandomInt(3)];

    // Add caterer to items
    const items_with_caterer = cateringOrder.items.map((item: any) => ({
        ...item,
        caterer,
    }));

    return {
        id: 10000 + index,
        booking_start,
        booking_end,
        timezone: 'Australia/Sydney',
        title: `Catering Order ${index}`,
        event_start: booking_start,
        event_end: booking_end,
        asset_id: cateringOrder.id,
        asset_name: `Catering Order - ${space?.name || 'Meeting Room'}`,
        description: `Catering order for ${space?.name || 'Meeting Room'}`,
        booking_type: 'catering-order',
        type: 'catering-order',
        user_id: user.id,
        user_name: user.name,
        user_email: user.email,
        booked_by_id: user.id,
        booked_by_name: user.name,
        booked_by_email: user.email,
        attendees: [],
        checked_in: false,
        rejected: false,
        approved: true,
        zones: [bld?.id, lvl?.id].filter(Boolean),
        extension_data: {
            details: {
                id: cateringOrder.id,
                deliver_at: cateringOrder.deliver_at,
                items: items_with_caterer,
                charge_code: cateringOrder.charge_code,
                invoice_number: cateringOrder.invoice_number,
                notes: cateringOrder.notes,
                status: cateringOrder.status,
                caterer,
            },
        },
        linked_event: {
            id: `linked-event-${index}`,
            title: `Meeting with Catering`,
            event_start: booking_start,
            event_end: booking_end,
            host: user.email,
            system_id: space?.id,
            location: space?.name || 'Meeting Room',
            organiser: {
                name: user.name,
                email: user.email,
            },
        },
    };
};

export const MOCK_CATERING_BOOKINGS = (() => {
    const bookings: ReturnType<typeof generateCateringOrderBooking>[] = [];
    let bookingIndex = 0;

    // Create catering bookings for 30 days (15 past, 15 future)
    for (let day = 0; day < 30; day++) {
        // Generate 3-5 catering orders per day
        const ordersPerDay = predictableRandomInt(5, 3);

        for (let i = 0; i < ordersPerDay; i++) {
            const user = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
            if (!user) continue;

            const booking = generateCateringOrderBooking(
                day,
                bookingIndex++,
                user,
            );
            bookings.push(booking);
        }
    }

    return bookings.sort((a, b) => a.booking_start - b.booking_start);
})();
