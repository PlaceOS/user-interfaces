import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { TranslatePipe } from '@placeos/components';
import * as ts_client from '@placeos/ts-client';
import { getUnixTime } from 'date-fns';
import { MockPipe, MockProvider } from 'ng-mocks';
import { ControlStateService } from '../../app/control-state.service';
import { NextMeetingComponent } from '../../app/ui/next-meeting.component';

// `queryEvents` can't be mocked under the bundling builder, so stub the
// ts-client `get` that it calls.
vi.mock('@placeos/ts-client', { spy: true });

const MINUTE = 60 * 1000;

/** Raw API event that starts the given number of minutes from now */
const eventAt = (start_min: number, url = '') => ({
    title: 'Standup',
    event_start: getUnixTime(Date.now() + start_min * MINUTE),
    event_end: getUnixTime(Date.now() + (start_min + 30) * MINUTE),
    meeting_url: url,
});

describe('NextMeetingComponent', () => {
    let spectator: Spectator<NextMeetingComponent>;
    const createComponent = createComponentFactory({
        component: NextMeetingComponent,
        declarations: [MockPipe(TranslatePipe, (v) => v)],
        providers: [
            MockProvider(ControlStateService, {
                system_id: signal('sys-1'),
                system: signal({ meeting_url: 'https://meet.example' }),
                powerOn: vi.fn(),
                setEvent: vi.fn(),
            } as any),
        ],
        detectChanges: false,
    });

    const setup = async (events: ReturnType<typeof eventAt>[]) => {
        vi.mocked(ts_client.get).mockResolvedValue(events as any);
        spectator = createComponent();
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        spectator.detectChanges();
    };

    it('should show nothing when the room has no more meetings', async () => {
        await setup([eventAt(-60)]);
        expect(spectator.component.meeting()).toBeNull();
        expect(spectator.element.children.length).toBe(0);
    });

    it('should show a meeting in progress', async () => {
        await setup([eventAt(-10)]);
        expect(spectator.component.status()).toBe('now');
        expect(spectator.element).toHaveText('Standup');
    });

    it('should count down to a meeting that starts soon', async () => {
        await setup([eventAt(120), eventAt(15)]);
        expect(spectator.component.status()).toBe('soon');
        expect(spectator.component.minutes_until()).toBe(14);
    });

    it('should start the room and join a supported meeting', async () => {
        const event = eventAt(5, 'https://meet.example/abc');
        await setup([event]);
        const service = spectator.inject(ControlStateService);
        spectator.click('button');
        expect(service.powerOn).toHaveBeenCalled();
        expect(service.setEvent).toHaveBeenCalledWith(
            expect.objectContaining({ meeting_url: event.meeting_url }),
        );
    });

    it('should not offer to join meetings the room does not support', async () => {
        await setup([eventAt(5, 'https://other.example/abc')]);
        expect('button').not.toExist();
    });
});
