import { TestBed } from '@angular/core/testing';
import {
    listPublicEvents,
    publicEventGuestToken,
    registerPublicEvent,
    setStorage,
    setToken,
    token,
} from '@placeos/ts-client';
import { of } from 'rxjs';
import { PublicEventsService } from '../app/public-events.service';

jest.mock('@placeos/ts-client', () => ({
    listPublicEvents: jest.fn(),
    publicEventGuestToken: jest.fn(),
    registerPublicEvent: jest.fn(),
    setStorage: jest.fn(),
    setToken: jest.fn(),
    token: jest.fn(),
}));

describe('PublicEventsService', () => {
    const guest = { name: 'Guest User', email: 'guest@example.com' };

    beforeEach(() => {
        TestBed.resetTestingModule();
        localStorage.clear();
        sessionStorage.clear();
        jest.clearAllMocks();
        jest.mocked(token).mockReturnValue('guest-token');
        jest.mocked(publicEventGuestToken).mockReturnValue(of('new-token'));
        jest.mocked(listPublicEvents).mockReturnValue(of([]));
        jest.mocked(registerPublicEvent).mockReturnValue(of({}));
    });

    it('should refresh guest access before loading events when the token is missing', async () => {
        sessionStorage.setItem('PLACEOS.public.guest', JSON.stringify(guest));
        jest.mocked(token).mockReturnValue('');
        jest.mocked(listPublicEvents).mockReturnValue(
            of([
                { id: 'setup', is_system_event: true },
                { id: 'event-1', title: 'Public Event' },
            ]),
        );

        const service = TestBed.inject(PublicEventsService);

        await service.loadEvents('system-1');

        expect(publicEventGuestToken).toHaveBeenCalledWith('system-1', {
            ...guest,
            captcha: '',
        });
        expect(setStorage).toHaveBeenLastCalledWith('session');
        expect(setToken).toHaveBeenCalledWith(
            'new-token',
            expect.any(Number),
        );
        expect(service.events()).toEqual([
            { id: 'event-1', title: 'Public Event' },
        ]);
        expect(service.loading()).toBe('');
    });

    it('should use an existing guest token when loading events', async () => {
        sessionStorage.setItem('PLACEOS.public.guest', JSON.stringify(guest));
        jest.mocked(token).mockReturnValue('guest-token');

        const service = TestBed.inject(PublicEventsService);

        await service.loadEvents('system-1');

        expect(publicEventGuestToken).not.toHaveBeenCalled();
        expect(listPublicEvents).toHaveBeenCalledWith('system-1', {
            limit: 100,
        });
    });

    it('should refresh guest access before registering when the token is missing', async () => {
        localStorage.setItem('PLACEOS.public.guest', JSON.stringify(guest));
        jest.mocked(token).mockReturnValue('');

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
