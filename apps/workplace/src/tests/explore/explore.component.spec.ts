import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { DesksService } from '@placeos/bookings';
import { OrganisationService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { ExploreMapViewComponent, ExploreStateService } from '@placeos/explore';
import { differenceInMinutes } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import {
    ExploreComponent,
    msUntilMinuteChange,
} from '../../app/explore/explore.component';
import { LandingStateService } from '../../app/landing/landing-state.service';

describe('ExploreComponent', () => {
    let spectator: Spectator<ExploreComponent>;
    const upcoming_events = signal<any[]>([]);
    const createComponent = createComponentFactory({
        component: ExploreComponent,
        providers: [
            { provide: DesksService, useValue: {} },
            MockProvider(LandingStateService, {
                upcoming_events,
            }),
            MockProvider(ExploreStateService, {}),
            MockProvider(OrganisationService, { levelWithID: vi.fn() }),
        ],
        declarations: [
            mockComponent(TopbarComponent),
            mockComponent(FooterMenuComponent),
            mockComponent(ExploreMapViewComponent),
        ],
    });

    beforeEach(() => {
        upcoming_events.set([]);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should place the upcoming booking pill below map controls on mobile', () => {
        upcoming_events.set([
            {
                title: 'Desk booking',
                type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                date_end: Date.now() + 2 * 60 * 60 * 1000,
                zones: ['lvl-1'],
            },
        ]);
        spectator.detectChanges();

        const pill = spectator.query('[name="upcoming-booking-map-pill"]');
        expect(pill).toHaveClass('top-20');
        expect(pill).toHaveClass('sm:top-2');
    });

    describe('countdown', () => {
        afterEach(() => vi.useRealTimers());

        it('should find the next time a whole-minute count changes', () => {
            const now = new Date(2026, 9, 15, 9, 0, 20).valueOf();
            const start = new Date(2026, 9, 15, 9, 30, 0).valueOf();
            const end = new Date(2026, 9, 15, 10, 0, 50).valueOf();
            // Start: 29 min 40 s left, so the count drops in 40 s + 1 ms.
            // End: 60 min 30 s left, so the count drops in 30 s + 1 ms.
            const delay = msUntilMinuteChange(now, [start, end]);
            expect(delay).toBe(30_001);
            expect(differenceInMinutes(end, now + delay)).toBe(
                differenceInMinutes(end, now) - 1,
            );
            expect(differenceInMinutes(end, now + delay - 1)).toBe(
                differenceInMinutes(end, now),
            );
            expect(msUntilMinuteChange(now, [now - 1, now])).toBeNull();
        });

        it('should update the countdown once a minute and keep it correct', async () => {
            vi.useFakeTimers();
            vi.setSystemTime(new Date(2026, 9, 15, 9, 0, 0));
            const start = new Date(2026, 9, 15, 9, 10, 0).valueOf();
            upcoming_events.set([
                {
                    title: 'Desk booking',
                    type: 'desk',
                    date: start,
                    date_end: start + 60 * 60 * 1000,
                    zones: ['lvl-1'],
                },
            ]);
            spectator.detectChanges();
            expect(spectator.component.begins_in()).toBe(10);

            const time = (spectator.component as any)._time;
            const set = vi.spyOn(time, 'set');
            for (let i = 0; i < 4; i++) {
                await vi.advanceTimersByTimeAsync(60_000);
                spectator.detectChanges();
            }
            // Four minutes pass: one update for each minute, not one each 300 ms
            expect(set.mock.calls.length).toBeLessThanOrEqual(5);
            expect(spectator.component.begins_in()).toBe(
                differenceInMinutes(start, Date.now()),
            );
            expect(spectator.component.begins_in()).toBe(6);
        });
    });
});
