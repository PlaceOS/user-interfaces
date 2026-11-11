import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CalendarEvent } from '@placeos/common';

import { PanelViewDetailsComponent } from '../../app/new-panel/panel-view-details.component';
import { PanelStateService } from '../../app/panel-state.service';

describe('PanelViewDetailsComponent', () => {
    let spectator: Spectator<PanelViewDetailsComponent>;
    const space = signal(null);
    const current = signal<CalendarEvent | null>(null);
    const next = signal<CalendarEvent | null>(null);
    const clock = signal(Date.now());
    let features: string[] = [];
    let panel_settings: Record<string, unknown> = {};
    const createComponent = createComponentFactory({
        component: PanelViewDetailsComponent,
        providers: [
            {
                provide: PanelStateService,
                useValue: {
                    time_format: signal('h:mm a'),
                    space,
                    current,
                    next,
                    clock,
                    settings: signal({}),
                    setting: (name: string) => panel_settings[name],
                    hasFeature: (name: string) => features.includes(name),
                    system: 'test-system',
                },
            },
        ],
    });

    beforeEach(() => {
        space.set(null);
        current.set(null);
        next.set(null);
        features = [];
        panel_settings = {};
        spectator = createComponent();
    });

    it('should display system name', () => {
        space.set({ display_name: 'Test Room' });
        spectator.detectChanges();
        expect('[name]').toContainText('Test Room');
    });

    it('should show the QR code unless show_qr_code is false', () => {
        expect('[qr-checkin]').toExist();
        panel_settings = { show_qr_code: false };
        spectator.detectChanges();
        expect('[qr-checkin]').not.toExist();
    });

    describe('current meeting', () => {
        beforeEach(() =>
            current.set(
                new CalendarEvent({
                    title: 'Board meeting',
                    host: 'jane@example.com',
                    date: Date.now(),
                }),
            ),
        );

        it('should show the title and host', () => {
            spectator.detectChanges();
            expect(spectator.element).toContainText('Board meeting');
            expect(spectator.element).toContainText('jane@example.com');
        });

        it('should hide only the title with hide_meeting_title', () => {
            panel_settings = { hide_meeting_title: true };
            spectator.detectChanges();
            expect(spectator.element).not.toContainText('Board meeting');
            expect(spectator.element).toContainText('jane@example.com');
        });

        it('should hide the title and host with hide_meeting_details', () => {
            panel_settings = { hide_meeting_details: true };
            spectator.detectChanges();
            expect(spectator.element).not.toContainText('Board meeting');
            expect(spectator.element).not.toContainText('jane@example.com');
        });
    });

    describe('ending warning', () => {
        const now = new Date('2026-07-04T09:57:00.000Z').valueOf();
        const next_start = new Date('2026-07-04T10:00:00.000Z').valueOf();

        beforeEach(() => {
            clock.set(now);
            current.set(
                new CalendarEvent({
                    date: new Date('2026-07-04T09:00:00.000Z').valueOf(),
                    duration: 60,
                }),
            );
            next.set(new CalendarEvent({ date: next_start, duration: 30 }));
        });

        it('should warn about the next meeting when enabled', () => {
            features = ['ending_warning'];
            spectator.detectChanges();
            expect(spectator.component.ending_next()?.date).toBe(next_start);
            expect('[ending-warning]').toExist();
        });

        it('should not warn when the feature is off', () => {
            spectator.detectChanges();
            expect('[ending-warning]').not.toExist();
        });
    });
});
