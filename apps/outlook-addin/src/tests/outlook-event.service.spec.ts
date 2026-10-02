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

    it('reads the latest subject from Outlook on refresh', async () => {
        await spectator.service.refresh();
        adapter.update({ subject: 'Quarterly review meeting' });
        await spectator.service.refresh();
        expect(spectator.service.event()?.subject).toBe(
            'Quarterly review meeting',
        );
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

    it('saves a new event before it returns an item ID', async () => {
        const item_id = await spectator.service.ensureSaved();
        expect(item_id).toMatch(/^memory-/);
        expect(spectator.service.event()?.item_id).toBe(item_id);
    });
});
