import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { HashMap, setCurrentUser, StaffUser } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

import { OutlookEventService } from '../app/calendar/outlook-event.service';
import { MemoryItemAdapter } from '../app/calendar/outlook-item.adapter';

// Mock the HTTP boundary used by `showEvent`.
vi.mock('@placeos/ts-client', { spy: true });

const MIDNIGHT = new Date(2026, 9, 1).valueOf();
const DAY = 24 * 60 * 60 * 1000;

describe('OutlookEventService', () => {
    let spectator: SpectatorService<OutlookEventService>;
    let adapter: MemoryItemAdapter;

    const createService = createServiceFactory(OutlookEventService);

    beforeEach(() => {
        vi.clearAllMocks();
        setCurrentUser(new StaffUser({ email: 'jon@place.tech' }));
        vi.mocked(ts_client.get).mockRejectedValue('Not found');
        adapter = new MemoryItemAdapter({
            subject: 'Working from London office',
            start: MIDNIGHT,
            end: MIDNIGHT + DAY,
            all_day: null,
            is_recurring: false,
            room_emails: [],
        });
        spectator = createService();
        spectator.service.useAdapter(adapter);
    });

    afterEach(() => vi.useRealTimers());

    it('reads the latest subject from Outlook on refresh', async () => {
        await spectator.service.refresh();
        adapter.update({ subject: 'Quarterly review meeting' });
        await spectator.service.refresh();
        expect(spectator.service.event()?.subject).toBe(
            'Quarterly review meeting',
        );
    });

    it('returns no event when Outlook cannot read the item', async () => {
        await spectator.service.refresh();
        vi.spyOn(adapter, 'read').mockRejectedValue('Item not available');
        expect(await spectator.service.refresh()).toBeNull();
        expect(spectator.service.error()).toBe('Item not available');
    });

    it('keeps All day unknown for an unsaved event', async () => {
        await spectator.service.refresh();
        expect(spectator.service.event()?.all_day).toBeNull();
        expect(ts_client.get).not.toHaveBeenCalled();
    });

    it('uses the saved All day flag only when the saved times match', async () => {
        adapter.item_id = 'item-1';
        const saved: HashMap = {
            event_start: MIDNIGHT / 1000,
            event_end: (MIDNIGHT + DAY) / 1000,
            all_day: true,
        };
        vi.mocked(ts_client.get).mockImplementation(((_url: string) =>
            Promise.resolve(saved)) as typeof ts_client.get);
        await spectator.service.refresh();
        expect(ts_client.get).toHaveBeenCalledWith(
            '/api/staff/v1/events/item-1?calendar=jon%40place.tech',
        );
        expect(spectator.service.event()?.all_day).toBe(true);

        adapter.update({ start: MIDNIGHT + DAY, end: MIDNIGHT + 2 * DAY });
        await spectator.service.refresh();
        expect(spectator.service.event()?.all_day).toBeNull();
    });

    it('uses the All day flag from Outlook over the saved flag', async () => {
        adapter.item_id = 'item-1';
        adapter.update({ all_day: false });
        const saved: HashMap = {
            event_start: MIDNIGHT / 1000,
            event_end: (MIDNIGHT + DAY) / 1000,
            all_day: true,
        };
        vi.mocked(ts_client.get).mockImplementation(((_url: string) =>
            Promise.resolve(saved)) as typeof ts_client.get);
        await spectator.service.refresh();
        expect(spectator.service.event()?.all_day).toBe(false);
    });

    it('groups saved room responses by lower-case email', async () => {
        adapter.item_id = 'item-1';
        const saved: HashMap = {
            resources: [
                { email: 'Room.A@place.tech', response_status: 'accepted' },
                { email: 'room.b@place.tech', response_status: 'declined' },
            ],
        };
        vi.mocked(ts_client.get).mockImplementation(((_url: string) =>
            Promise.resolve(saved)) as typeof ts_client.get);
        await spectator.service.refresh();
        expect(spectator.service.room_responses()).toEqual({
            'room.a@place.tech': 'accepted',
            'room.b@place.tech': 'declined',
        });
    });

    it('keeps the newest read when an older refresh finishes last', async () => {
        const old_details = await adapter.read();
        let finishOldRead = () => {};
        vi.spyOn(adapter, 'read').mockImplementationOnce(
            () =>
                new Promise(
                    (resolve) => (finishOldRead = () => resolve(old_details)),
                ),
        );
        const old_refresh = spectator.service.refresh();
        adapter.update({ subject: 'Quarterly review meeting' });
        await spectator.service.refresh();

        finishOldRead();

        expect((await old_refresh)?.subject).toBe(old_details.subject);
        expect(spectator.service.event()?.subject).toBe(
            'Quarterly review meeting',
        );
        expect(spectator.service.loading()).toBe(false);
    });

    it('ignores an error from an older refresh that finishes last', async () => {
        let failOldRead = () => {};
        vi.spyOn(adapter, 'read').mockImplementationOnce(
            () =>
                new Promise(
                    (_, reject) => (failOldRead = () => reject('Gone')),
                ),
        );
        const old_refresh = spectator.service.refresh();
        await spectator.service.refresh();

        failOldRead();

        expect(await old_refresh).toBeNull();
        expect(spectator.service.error()).toBe('');
        expect(spectator.service.event()).not.toBeNull();
    });

    it('reads the event again 200 ms after Outlook reports a change', async () => {
        vi.useFakeTimers();
        await spectator.service.init();
        adapter.update({ subject: 'Quarterly review meeting' });

        await vi.advanceTimersByTimeAsync(199);
        expect(spectator.service.event()?.subject).toBe(
            'Working from London office',
        );

        await vi.advanceTimersByTimeAsync(1);

        expect(spectator.service.event()?.subject).toBe(
            'Quarterly review meeting',
        );
    });

    it('saves a new event before it returns an item ID', async () => {
        const item_id = await spectator.service.ensureSaved();
        expect(item_id).toMatch(/^memory-/);
        expect(spectator.service.event()?.item_id).toBe(item_id);
    });
});
