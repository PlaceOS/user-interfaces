import { AssetRequest, setCurrentUser, StaffUser } from '@placeos/common';
import { validateAssetRequestsForResource } from '../lib/assets.fn';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

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
        vi.spyOn(ts_client, 'queryAssetTypes').mockResolvedValue({
            total: 1,
            next: null,
            data: [{ id: 'group-1', name: 'Projector' }],
        } as never);
        vi.spyOn(ts_client, 'queryAssets').mockResolvedValue({
            total: 1,
            next: null,
            data: [{ id: 'unit-1', asset_type_id: 'group-1' }],
        } as never);
        vi.spyOn(ts_client, 'get').mockResolvedValue([] as never);
        vi.spyOn(ts_client, 'post').mockResolvedValue({
            id: 'booking-1',
        } as never);
    });

    afterEach(() => vi.useRealTimers());

    it('should link a request to a native booking by parent id', async () => {
        const create = await validateAssetRequestsForResource(
            { id: '1138', ical_uid: '', from_bookings: true },
            period,
            [request],
        );
        await create();

        const [url, body] = (ts_client.post as any).mock.calls[0] as [
            string,
            any,
        ];
        expect(url).not.toMatch(/event_id=\d/);
        expect(body.parent_id).toBe(1138);
        expect(body.asset_ids).toEqual(['unit-1']);
    });

    it('should keep the asset requests of other native bookings', async () => {
        vi.spyOn(ts_client, 'get').mockResolvedValue([
            {
                id: 'other-asset-booking',
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
        ] as never);
        const delete_spy = vi.spyOn(ts_client, 'del');

        const create = await validateAssetRequestsForResource(
            { id: '1138', ical_uid: '', from_bookings: true },
            { ...period, reset_state: true },
            [],
        );
        await create();

        expect(delete_spy).not.toHaveBeenCalled();
    });

    it('should link a request to a calendar event only when saved', async () => {
        const create = await validateAssetRequestsForResource(
            { id: 'event-1', ical_uid: 'event-1@example.com' },
            period,
            [request],
        );
        // Validation must not reserve the asset
        expect(ts_client.post).not.toHaveBeenCalled();
        await create();

        const [url, body] = (ts_client.post as any).mock.calls[0] as [
            string,
            any,
        ];
        expect(url).toContain('event_id=event-1');
        expect(body.parent_id).toBeUndefined();
        expect(body.extension_data.parent_id).toBe('event-1');
        expect(body.asset_ids).toEqual(['unit-1']);
    });

    it('should replace a selected asset that another booking holds', async () => {
        // Group results are cached per zone, so use a zone of its own
        vi.spyOn(ts_client, 'queryAssets').mockResolvedValue({
            total: 2,
            next: null,
            data: [
                { id: 'unit-1', asset_type_id: 'group-1' },
                { id: 'unit-2', asset_type_id: 'group-1' },
            ],
        } as never);
        vi.spyOn(ts_client, 'get').mockResolvedValue([
            { id: 'other', status: 'approved', asset_ids: ['unit-1'] },
        ] as never);
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

        expect((ts_client.post as any).mock.calls[0][1].asset_ids).toEqual([
            'unit-2',
        ]);
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
        /** Saved asset booking of `request` that holds unit-1 */
        const saved_booking = (extra: Record<string, unknown> = {}) => ({
            id: 'held',
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
            vi.spyOn(ts_client, 'del').mockResolvedValue(undefined as never);
            // Group results are cached per zone, so use a zone of its own
            vi.spyOn(ts_client, 'queryAssets').mockResolvedValue(
                two_units as never,
            );
        });

        it('should keep the booking of an unchanged request', async () => {
            vi.spyOn(ts_client, 'get').mockResolvedValue([
                saved_booking(),
            ] as never);

            const create = await validateAssetRequestsForResource(
                event,
                { ...period, zones: ['zone-3'] },
                [event_request()],
            );
            await create();

            expect(ts_client.del).not.toHaveBeenCalled();
            expect(ts_client.post).not.toHaveBeenCalled();
        });

        it('should replace the booking of a changed request', async () => {
            vi.spyOn(ts_client, 'get').mockResolvedValue([
                saved_booking(),
            ] as never);
            const changed = event_request([
                { ...request.items[0], quantity: 2 },
            ]);

            let removed: () => void = () => undefined;
            vi.mocked(ts_client.del).mockReturnValue(
                new Promise<void>((resolve) => (removed = resolve)) as never,
            );

            const create = await validateAssetRequestsForResource(
                event,
                { ...period, zones: ['zone-3'] },
                [changed],
            );
            const saving = create();
            await vi.waitFor(() =>
                expect(ts_client.del).toHaveBeenCalledWith(
                    expect.stringContaining('/held?'),
                    expect.anything(),
                ),
            );
            // The old booking frees its asset before the new one is made
            expect(ts_client.post).not.toHaveBeenCalled();
            removed();
            await saving;

            const body = (ts_client.post as any).mock.calls[0][1];
            expect(body.asset_ids).toEqual(['unit-1', 'unit-2']);
        });

        it('should replace an approved booking when the state is reset', async () => {
            vi.spyOn(ts_client, 'get').mockResolvedValue([
                saved_booking({ approved: true }),
            ] as never);
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

            expect(ts_client.del).toHaveBeenCalledWith(
                expect.stringContaining('/held?'),
                expect.anything(),
            );
            const body = (ts_client.post as any).mock.calls[0][1];
            expect(body.approved).toBe(false);
            expect(body.extension_data.request_id).toBe(request.id);
        });
    });

    it('should flag a conflict when no asset is free', async () => {
        vi.spyOn(ts_client, 'get').mockResolvedValue([
            { id: 'other', status: 'approved', asset_ids: ['unit-1'] },
        ] as never);
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
        expect(ts_client.post).not.toHaveBeenCalled();
    });
});
