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

    it('should link a request to a calendar event by event id', async () => {
        const create = await validateAssetRequestsForResource(
            { id: 'event-1', ical_uid: 'event-1@example.com' },
            period,
            [request],
        );
        await create();

        const [url, body] = (ts_client.post as any).mock.calls[0] as [
            string,
            any,
        ];
        expect(url).toContain('event_id=event-1');
        expect(body.parent_id).toBeUndefined();
    });
});
