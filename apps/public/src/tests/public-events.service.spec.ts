import { TestBed } from '@angular/core/testing';
import {
    listPublicEvents,
    publicEventGuestToken,
    registerPublicEvent,
    setStorage,
    setToken,
    token,
} from '@placeos/ts-client';
import { PublicEventsService } from '../app/public-events.service';

vi.mock('@placeos/ts-client', () => ({
    listPublicEvents: vi.fn(),
    publicEventGuestToken: vi.fn(),
    registerPublicEvent: vi.fn(),
    setStorage: vi.fn(),
    setToken: vi.fn(),
    token: vi.fn(),
}));

describe('PublicEventsService', () => {
    const guest = { name: 'Guest User', email: 'guest@example.com' };

    beforeEach(() => {
        TestBed.resetTestingModule();
        localStorage.clear();
        sessionStorage.clear();
        vi.clearAllMocks();
        vi.mocked(token).mockReturnValue('guest-token');
        vi.mocked(publicEventGuestToken).mockResolvedValue('new-token');
        vi.mocked(listPublicEvents).mockResolvedValue([]);
        vi.mocked(registerPublicEvent).mockResolvedValue({});
    });

    it('should refresh guest access before loading events when the token is missing', async () => {
        sessionStorage.setItem('PLACEOS.public.guest', JSON.stringify(guest));
        vi.mocked(token).mockReturnValue('');
        vi.mocked(listPublicEvents).mockResolvedValue([
            { id: 'setup', is_system_event: true },
            { id: 'event-1', title: 'Public Event' },
        ]);

        const service = TestBed.inject(PublicEventsService);

        await service.loadEvents('system-1');

        expect(publicEventGuestToken).toHaveBeenCalledWith('system-1', {
            ...guest,
            captcha: '',
        });
        expect(setStorage).toHaveBeenLastCalledWith('session');
        expect(setToken).toHaveBeenCalledWith('new-token', expect.any(Number));
        expect(service.events()).toEqual([
            { id: 'event-1', title: 'Public Event' },
        ]);
        expect(service.loading()).toBe('');
    });

    it('should use an existing guest token when loading events', async () => {
        sessionStorage.setItem('PLACEOS.public.guest', JSON.stringify(guest));
        vi.mocked(token).mockReturnValue('guest-token');

        const service = TestBed.inject(PublicEventsService);

        await service.loadEvents('system-1');

        expect(publicEventGuestToken).not.toHaveBeenCalled();
        expect(listPublicEvents).toHaveBeenCalledWith('system-1', {
            limit: 100,
        });
    });

    it('should refresh guest access before registering when the token is missing', async () => {
        localStorage.setItem('PLACEOS.public.guest', JSON.stringify(guest));
        vi.mocked(token).mockReturnValue('');

        const service = TestBed.inject(PublicEventsService);

        await service.register('system-1', 'event-1');

        expect(publicEventGuestToken).toHaveBeenCalledWith('system-1', {
            ...guest,
            captcha: '',
        });
        expect(setStorage).toHaveBeenLastCalledWith('local');
        expect(registerPublicEvent).toHaveBeenCalledWith('system-1', {
            event_id: 'event-1',
            ...guest,
        });
        expect(service.loading()).toBe('');
    });
});
