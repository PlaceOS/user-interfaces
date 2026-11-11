import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CalendarEvent } from '@placeos/common';

import { PanelViewStatusComponent } from '../../app/new-panel/panel-view-status.component';
import { PanelStateService } from '../../app/panel-state.service';

describe('PanelViewStatusComponent', () => {
    let spectator: Spectator<PanelViewStatusComponent>;
    const status = signal('free');
    const current = signal<CalendarEvent | null>(null);
    const clock = signal(Date.now());
    const next = signal<CalendarEvent | null>(null);
    const panel_settings = signal<Record<string, unknown>>({});
    let features: string[] = [];
    const show_timeline = signal(false);
    const timeline_position = signal('floating-left');
    const setting = vi.fn<(name: string) => unknown>((name) => {
        if (name === 'show_timeline') return show_timeline();
        if (name === 'timeline_position') return timeline_position();
        return panel_settings()[name] ?? false;
    });
    const createComponent = createComponentFactory({
        component: PanelViewStatusComponent,
        providers: [
            {
                provide: PanelStateService,
                useValue: {
                    clock,
                    time_format: signal('h:mm a'),
                    status,
                    current,
                    next,
                    bookings: signal([]),
                    settings: panel_settings,
                    setting,
                    hasFeature: (name: string) => features.includes(name),
                },
            },
        ],
    });

    beforeEach(() => {
        status.set('free');
        show_timeline.set(false);
        timeline_position.set('floating-left');
        current.set(null);
        next.set(null);
        clock.set(Date.now());
        panel_settings.set({});
        features = [];
        setting.mockClear();
        spectator = createComponent();
    });

    it.each([
        ['pending', 'bg-warning'],
        ['free', 'bg-success'],
        ['busy', 'bg-error'],
    ])('should show the %s status in its color', (state, color) => {
        status.set(state);
        spectator.detectChanges();
        expect(`div.${color}`).toExist();
    });

    it('should reserve space for the floating timeline', async () => {
        show_timeline.set(true);
        await spectator.fixture.whenStable();

        const action = spectator.query<HTMLElement>('[action-prompt]');
        expect(action.style.paddingLeft).toBe('9rem');
    });

    it('should reserve space for the floating bottom timeline', async () => {
        show_timeline.set(true);
        timeline_position.set('floating-bottom');
        await spectator.fixture.whenStable();

        const layout = spectator.query<HTMLElement>('[status-layout]');
        expect(layout.style.paddingBottom).toBe('7rem');
    });

    describe('checkin countdown', () => {
        beforeEach(() => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date('2026-07-04T09:02:00.000Z'));
            status.set('pending');
            current.set(
                new CalendarEvent({
                    date: new Date('2026-07-04T09:00:00.000Z').valueOf(),
                    duration: 30,
                }),
            );
            panel_settings.set({ pending_period: 10 });
        });

        afterEach(() => vi.useRealTimers());

        it('should show the time until release when enabled', () => {
            features = ['checkin_countdown'];
            spectator = createComponent();
            expect(spectator.component.release_in()).toBe(8 * 60 * 1000);
            expect('[checkin-countdown]').toExist();
        });

        it('should hide the countdown when the feature is off', () => {
            spectator = createComponent();
            expect('[checkin-countdown]').not.toExist();
        });

        // The panel does not release these meetings. See `_checkPending`.
        it.each([
            ['a linked system event', { body: 'main_event_id' }, {}],
            ['ending is disabled', {}, { disable_end_meeting: true }],
        ])('should hide the countdown for %s', (_, data, settings) => {
            features = ['checkin_countdown'];
            current.set(new CalendarEvent({ ...current(), ...data }));
            panel_settings.set({ pending_period: 10, ...settings });
            spectator = createComponent();
            expect(spectator.component.release_in()).toBeNull();
            expect('[checkin-countdown]').not.toExist();
        });
    });

    it('should count down to the next booking as the clock ticks', () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date('2026-07-04T09:00:00.000Z'));
        clock.set(Date.now());
        next.set(
            new CalendarEvent({
                date: new Date('2026-07-04T09:30:00.000Z').valueOf(),
                duration: 30,
            }),
        );
        expect(spectator.component.event_state().current).toEqual([
            false,
            0,
            30,
        ]);

        vi.setSystemTime(new Date('2026-07-04T09:10:00.000Z'));
        clock.set(Date.now());
        expect(spectator.component.event_state().current).toEqual([
            false,
            0,
            20,
        ]);
        vi.useRealTimers();
    });

    it('should point to the calendar when the panel cannot book', () => {
        panel_settings.set({ disable_book_now: true, show_qr_code: false });
        spectator.detectChanges();
        expect('[booking-disabled]').toExist();
    });

    it('should point to the calendar when the QR code opens a custom page', () => {
        panel_settings.set({
            disable_book_now: true,
            show_qr_code: true,
            custom_qr_url: 'https://example.com/room',
        });
        spectator.detectChanges();
        expect('[booking-disabled]').toExist();
    });

    it('should not point to the calendar when the QR code can book', () => {
        panel_settings.set({ disable_book_now: true, show_qr_code: true });
        spectator.detectChanges();
        expect('[booking-disabled]').not.toExist();
    });

    it('should show detected people in a free room when enabled', () => {
        features = ['presence_status'];
        panel_settings.set({ presence: true });
        spectator = createComponent();
        expect('[presence]').toExist();
    });

    it('should not show detected people when the feature is off', () => {
        panel_settings.set({ presence: true });
        spectator = createComponent();
        expect('[presence]').not.toExist();
    });
});
