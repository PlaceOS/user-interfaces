import { AssetRequest } from '../lib/types/asset-request.class';

describe('AssetRequest', () => {
    it('should map asset IDs to items when no items given', () => {
        const request = new AssetRequest({
            event: { date: Date.now() },
            asset_ids: ['asset-1', 'asset-2'],
        });
        expect(request.items).toEqual([
            { id: 'asset-1', quantity: 1 },
            { id: 'asset-2', quantity: 1 },
        ]);
        expect(request.item_count).toBe(2);
    });

    it('should count the total quantity of items', () => {
        const request = new AssetRequest({
            event: { date: Date.now() },
            items: [
                { id: 'asset-1', quantity: 2 },
                { id: 'asset-2', quantity: 3 },
            ],
        });
        expect(request.item_count).toBe(5);
    });

    it('should default status to in_storage', () => {
        expect(new AssetRequest().status).toBe('in_storage');
    });

    it('should read status from extension data', () => {
        const request = new AssetRequest({
            event_id: 'event-1',
            extension_data: { 'event-1_status': 'delivered' },
        });
        expect(request.status).toBe('delivered');
    });

    it('should deliver at the event time with offsets applied', () => {
        const event_date = new Date(2024, 0, 10, 10, 0).valueOf();
        expect(
            new AssetRequest({ event: { date: event_date } }).deliver_at,
        ).toBe(event_date);
        expect(
            new AssetRequest({
                event: { date: event_date },
                deliver_offset: 30,
            }).deliver_at,
        ).toBe(new Date(2024, 0, 10, 10, 30).valueOf());
    });

    it('should deliver on a following day with deliver_day_offset', () => {
        const event_date = new Date(2024, 0, 10, 10, 0).valueOf();
        const request = new AssetRequest({
            event: { date: event_date },
            deliver_day_offset: 1,
        });
        expect(request.deliver_at).toBe(new Date(2024, 0, 11).valueOf());
    });

    it('should generate a ref_id from delivery time and items', () => {
        const event_date = new Date(2024, 0, 10, 10, 0).valueOf();
        const request = new AssetRequest({
            event: { date: event_date },
            items: [{ id: 'asset-1', quantity: 2 }],
        });
        expect(request.ref_id).toBe(`${event_date}|asset-1:2`);
    });

    it('should strip internal state when serialised', () => {
        const request = new AssetRequest({
            id: 'request-1',
            event: { date: Date.now() },
            items: [{ id: 'asset-1', quantity: 1, name: 'Chair' }],
        });
        const json = request.toJSON();
        expect(json.event).toBeUndefined();
        expect(json._status).toBeUndefined();
        expect(json._time).toBeUndefined();
        expect(json.deliver_at_time).toBeUndefined();
        expect(json.items).toEqual([
            {
                id: 'asset-1',
                quantity: 1,
                name: 'Chair',
                category_id: undefined,
                item_ids: undefined,
            },
        ]);
    });
});
