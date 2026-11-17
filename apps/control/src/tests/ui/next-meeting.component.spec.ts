import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { TranslatePipe } from '@placeos/components';
import * as ts_client from '@placeos/ts-client';
import { getUnixTime } from 'date-fns';
import { MockPipe, MockProvider } from 'ng-mocks';
import { ControlStateService } from '../../app/control-state.service';
import { NextMeetingComponent } from '../../app/ui/next-meeting.component';

vi.mock('@placeos/ts-client', { spy: true });

const MINUTE = 60 * 1000;

/** Raw driver booking that starts the given number of minutes from now */
const eventAt = (start_min: number, url = '') => ({
    title: 'Standup',
    event_start: getUnixTime(Date.now() + start_min * MINUTE),
    event_end: getUnixTime(Date.now() + (start_min + 30) * MINUTE),
    online_meeting_url: url,
});

type Booking = ReturnType<typeof eventAt>;

describe('NextMeetingComponent', () => {
    let spectator: Spectator<NextMeetingComponent>;
    /** Bookings module status values, by variable name */
    let status: Record<string, Booking | null>;
    const createComponent = createComponentFactory({
        component: NextMeetingComponent,
        declarations: [MockPipe(TranslatePipe, (v) => v)],
        providers: [
            MockProvider(ControlStateService, {
                system_id: signal('sys-1'),
                system: signal({ meeting_url: 'https://meet.example' }),
                powerOn: vi.fn(),
                setEvent: vi.fn(),
            }),
        ],
        detectChanges: false,
    });

    beforeEach(() => {
        // Midday, so meetings in the next few hours are still today
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(new Date(2026, 0, 1, 12));
        status = {};
        vi.mocked(ts_client.getModule).mockImplementation(
            (_id: string, mod: string) =>
                ({
                    variable: (name: string) => ({
                        bind: () => () => undefined,
                        listen: () =>
                            Object.assign(() => status[`${mod}.${name}`], {
                                subscribe: () => () => undefined,
                            }),
                    }),
                }) as unknown as ReturnType<typeof ts_client.getModule>,
        );
    });

    afterEach(() => vi.useRealTimers());

    const setup = (current: Booking | null, next: Booking | null) => {
        status['Bookings.current_booking'] = current;
        status['Bookings.next_booking'] = next;
        spectator = createComponent();
        spectator.detectChanges();
    };

    it('should show nothing when the room has no more meetings', () => {
        setup(eventAt(-60), null);
        expect(spectator.component.meeting()).toBeNull();
        expect(spectator.element.children.length).toBe(0);
    });

    it('should show a meeting in progress', () => {
        setup(eventAt(-10), eventAt(60));
        expect(spectator.component.status()).toBe('now');
        expect(spectator.element).toHaveText('Standup');
    });

    it('should count down to a meeting that starts soon', () => {
        setup(null, eventAt(15));
        expect(spectator.component.status()).toBe('soon');
        expect(spectator.component.minutes_until()).toBe(15);
    });

    it('should not show a next meeting on a later day', () => {
        setup(null, eventAt(24 * 60));
        expect(spectator.component.meeting()).toBeNull();
    });

    it('should start the room and join a supported meeting', () => {
        const event = eventAt(5, 'https://meet.example/abc');
        setup(null, event);
        const service = spectator.inject(ControlStateService);
        spectator.click('button');
        expect(service.powerOn).toHaveBeenCalled();
        expect(service.setEvent).toHaveBeenCalledWith(
            expect.objectContaining({ meeting_url: event.online_meeting_url }),
        );
    });

    it('should not offer to join meetings the room does not support', () => {
        setup(null, eventAt(5, 'https://other.example/abc'));
        expect('button').not.toExist();
    });
});
