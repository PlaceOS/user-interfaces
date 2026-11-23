import {
    AssetRequest,
    Booking,
    setCurrentUser,
    StaffUser,
} from '@placeos/common';
import { validateAssetRequestsForResource } from '../lib/assets.fn';

// The booking helpers of bookings.fn run for real on top of the stubbed
// staff booking operations
vi.mock('@placeos/ts-client', { spy: true });
vi.mock('@placeos/ts-client/staff', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import {
    bookings,
    type Booking as StaffBooking,
} from '@placeos/ts-client/staff';

/** Booking as the staff API sends it. Test data has only some fields */
const staffBooking = (data: object) => data as unknown as StaffBooking;

/** Bookings that the staff `bookings.query` operation sends */
const bookingList = (list: object[]) => mockReply(list.map(staffBooking));

/** Ids of the bookings sent to the staff `bookings.destroy` operation */
const removedIds = () =>
    vi.mocked(bookings.destroy).mock.calls.map(([input]) => input.id);

describe('validateAssetRequestsForResource', () => {
    const date = 1_800_000_000_000;
    const period = {
        date,
        duration: 60,
        all_day: false,
        host: 'current.user@example.com',
        zones: ['zone-1'],
    };
    const request = new AssetRequest({
        id: 'request-1',
        items: [
            { id: 'group-1', name: 'Projector', quantity: 1, item_ids: [] },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers();
        setCurrentUser(
            new StaffUser({
                id: 'current-user',
                email: period.host,
                name: 'Current User',
            }),
        );
        vi.spyOn(ts_client.asset_types, 'query').mockResolvedValue(
            mockPage({
                total: 1,
                next: null,
                data: [
                    { id: 'group-1', name: 'Projector', category_id: 'cat-1' },
                ],
            } as never),
        );
        vi.spyOn(ts_client.asset_categories, 'query').mockResolvedValue(
            mockPage({
                total: 1,
                next: null,
                data: [{ id: 'cat-1', name: 'AV' }],
            } as never),
        );
        vi.spyOn(ts_client.assets, 'query').mockResolvedValue(
            mockPage({
                total: 1,
                next: null,
                data: [{ id: 'unit-1', asset_type_id: 'group-1' }],
            } as never),
        );
        vi.mocked(bookings.query).mockResolvedValue(bookingList([]));
        vi.mocked(bookings.create).mockResolvedValue(
            mockReply(staffBooking({ id: 1 })),
        );
        vi.mocked(bookings.destroy).mockResolvedValue(mockReply(''));
    });

    /** Body and input of the first created booking */
    const created = () => {
        const [input] = vi.mocked(bookings.create).mock.calls[0];
        return [input.body as unknown as Booking, input] as const;
    };

    afterEach(() => vi.useRealTimers());

    it('should link a request to a native booking by parent id', async () => {
        const create = await validateAssetRequestsForResource(
            { id: '1138', ical_uid: '', from_bookings: true },
            period,
            [request],
        );
        await create();

        const [body, query] = created();
        expect(query?.event_id).toBeUndefined();
        expect(body.parent_id).toBe(1138);
        expect(body.asset_ids).toEqual(['unit-1']);
    });

    it('should keep the asset requests of other native bookings', async () => {
        vi.mocked(bookings.query).mockResolvedValue(
            bookingList([
                {
                    id: 2,
                    booking_type: 'asset-request',
                    user_email: period.host,
                    approved: true,
                    asset_ids: ['unit-1'],
                    extension_data: {
                        parent_id: '9999',
                        request_id: 'other-request',
                        request: { id: 'other-request', items: [] },
                    },
                },
            ]),
        );

        const create = await validateAssetRequestsForResource(
            { id: '1138', ical_uid: '', from_bookings: true },
            { ...period, reset_state: true },
            [],
        );
        await create();

        expect(bookings.destroy).not.toHaveBeenCalled();
    });

    it('should link a request to a calendar event only when saved', async () => {
        const create = await validateAssetRequestsForResource(
            { id: 'event-1', ical_uid: 'event-1@example.com' },
            period,
            [request],
        );
        // Validation must not reserve the asset
        expect(bookings.create).not.toHaveBeenCalled();
        await create();

        const [body, query] = created();
        expect(query.event_id).toBe('event-1');
        expect(body.parent_id).toBeFalsy();
        expect(body.extension_data.parent_id).toBe('event-1');
        expect(body.asset_ids).toEqual(['unit-1']);
    });

    it('should replace a selected asset that another booking holds', async () => {
        // Group results are cached per zone, so use a zone of its own
        vi.spyOn(ts_client.assets, 'query').mockResolvedValue(
            mockPage({
                total: 2,
                next: null,
                data: [
                    { id: 'unit-1', asset_type_id: 'group-1' },
                    { id: 'unit-2', asset_type_id: 'group-1' },
                ],
            } as never),
        );
        vi.mocked(bookings.query).mockResolvedValue(
            bookingList([{ id: 3, status: 'approved', asset_ids: ['unit-1'] }]),
        );
        const selected = new AssetRequest({
            id: 'request-2',
            items: [
                {
                    id: 'group-1',
                    name: 'Projector',
                    quantity: 1,
                    item_ids: ['unit-1'],
                },
            ],
        });

        const create = await validateAssetRequestsForResource(
            {},
            { ...period, zones: ['zone-2'] },
            [selected],
        );
        await create();

        expect(created()[0].asset_ids).toEqual(['unit-2']);
        expect(selected.conflict).toBe(false);
    });

    describe('with saved asset bookings for the event', () => {
        const event = { id: 'event-1', ical_uid: 'event-1@example.com' };
        const two_units = {
            total: 2,
            next: null,
            data: [
                { id: 'unit-1', asset_type_id: 'group-1' },
                { id: 'unit-2', asset_type_id: 'group-1' },
            ],
        };
        /** `request` as the booking form holds it, bound to the event time */
        const event_request = (items = request.items) =>
            new AssetRequest({ id: request.id, items, event: { date } });
        /** Id of the saved asset booking */
        const held = 4;
        /** Saved asset booking of `request` that holds unit-1 */
        const saved_booking = (extra: Partial<Booking> = {}) =>
            staffBooking({
                id: held,
                booking_type: 'asset-request',
                date,
                duration: period.duration,
                asset_ids: ['unit-1'],
                extension_data: {
                    parent_id: event.id,
                    request_id: request.id,
                    request: { id: request.id, items: request.items },
                },
                ...extra,
            });

        beforeEach(() => {
            // Group results are cached per zone, so use a zone of its own
            vi.spyOn(ts_client.assets, 'query').mockResolvedValue(
                mockPage(two_units as never),
            );
        });

        it('should keep the booking of an unchanged request', async () => {
            vi.mocked(bookings.query).mockResolvedValue(
                mockReply([saved_booking()]),
            );

            const create = await validateAssetRequestsForResource(
                event,
                { ...period, zones: ['zone-3'] },
                [event_request()],
            );
            await create();

            expect(bookings.destroy).not.toHaveBeenCalled();
            expect(bookings.create).not.toHaveBeenCalled();
        });

        it('should replace the booking of a changed request', async () => {
            vi.mocked(bookings.query).mockResolvedValue(
                mockReply([saved_booking()]),
            );
            const changed = event_request([
                { ...request.items[0], quantity: 2 },
            ]);

            let removed: () => void = () => undefined;
            vi.mocked(bookings.destroy).mockReturnValue(
                new Promise((resolve) => {
                    removed = () => resolve(mockReply(''));
                }),
            );

            const create = await validateAssetRequestsForResource(
                event,
                { ...period, zones: ['zone-3'] },
                [changed],
            );
            const saving = create();
            await vi.waitFor(() => expect(removedIds()).toEqual([held]));
            // The old booking frees its asset before the new one is made
            expect(bookings.create).not.toHaveBeenCalled();
            removed();
            await saving;

            const [body] = created();
            expect(body.asset_ids).toEqual(['unit-1', 'unit-2']);
        });

        it('should replace an approved booking when the state is reset', async () => {
            vi.mocked(bookings.query).mockResolvedValue(
                mockReply([saved_booking({ approved: true })]),
            );
            // A request that holds the saved unit and is linked to its
            // booking, so the approval would carry over without the reset
            const unchanged = event_request([
                { ...request.items[0], item_ids: ['unit-1'] },
            ]);
            unchanged._changed = false;

            const create = await validateAssetRequestsForResource(
                event,
                { ...period, zones: ['zone-3'], reset_state: true },
                [unchanged],
            );
            await create();

            expect(removedIds()).toEqual([held]);
            const [body] = created();
            expect(body.approved).toBe(false);
            expect(body.extension_data.request_id).toBe(request.id);
        });
    });

    it('should flag a conflict when no asset is free', async () => {
        vi.mocked(bookings.query).mockResolvedValue(
            bookingList([{ id: 3, status: 'approved', asset_ids: ['unit-1'] }]),
        );
        const blocked = new AssetRequest({
            id: 'request-3',
            items: [
                { id: 'group-1', name: 'Projector', quantity: 1, item_ids: [] },
            ],
        });

        await expect(
            validateAssetRequestsForResource({}, period, [blocked]),
        ).rejects.toBe('Unable to find available asset for request');
        expect(blocked.conflict).toBe(true);
        expect(bookings.create).not.toHaveBeenCalled();
    });
});
