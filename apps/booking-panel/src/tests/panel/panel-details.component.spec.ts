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
    const createComponent = createComponentFactory({
        component: PanelViewDetailsComponent,
        providers: [
            {
                provide: PanelStateService,
                useValue: {
                    space,
                    current,
                    next,
                    clock,
                    settings: signal({}),
                    setting: vi.fn(),
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
        spectator = createComponent();
    });

    it('should display system name', () => {
        space.set({ display_name: 'Test Room' });
        spectator.detectChanges();
        expect('[name]').toContainText('Test Room');
    });

    it('should display QR code when enabled', () => {
        const service = spectator.inject(PanelStateService);
        (service.setting as any).mockReturnValue(true);
        spectator.detectChanges();
        expect(spectator.component.checkin).toBe(true);
    });

    it('should hide QR code when disabled', () => {
        const service = spectator.inject(PanelStateService);
        (service.setting as any).mockReturnValue(false);
        spectator.detectChanges();
        expect(spectator.component.checkin).toBe(false);
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
