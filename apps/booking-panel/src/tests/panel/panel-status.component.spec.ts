import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CalendarEvent } from '@placeos/common';

import { PanelViewStatusComponent } from '../../app/new-panel/panel-view-status.component';
import { PanelStateService } from '../../app/panel-state.service';

describe('PanelViewStatusComponent', () => {
    let spectator: Spectator<PanelViewStatusComponent>;
    const status = signal('free');
    const current = signal<CalendarEvent | null>(null);
    const panel_settings = signal<Record<string, unknown>>({});
    let features: string[] = [];
    const show_timeline = signal(false);
    const timeline_position = signal('floating-left');
    const setting = vi.fn<(name: string) => any>((name) => {
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
                    status,
                    current,
                    next: signal(null),
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
        panel_settings.set({});
        features = [];
        setting.mockClear();
        spectator = createComponent();
    });

    it('should show pending status', () => {
        status.set('pending');
        spectator.detectChanges();
        expect('div.bg-warning').toExist();
    });

    it('should show free status', () => {
        status.set('free');
        spectator.detectChanges();
        expect('div.bg-success').toExist();
    });

    it('should show busy status', () => {
        status.set('busy');
        spectator.detectChanges();
        expect('div.bg-error').toExist();
    });

    it('should reserve space for the floating timeline', async () => {
        show_timeline.set(true);
        await spectator.fixture.whenStable();

        const action = spectator.query<HTMLElement>(
            'div.absolute.inset-x-0.top-0',
        );
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
