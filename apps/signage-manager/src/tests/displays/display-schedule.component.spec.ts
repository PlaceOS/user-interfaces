import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { addDays, isSameDay, startOfWeek } from 'date-fns';
import { DisplayScheduleComponent } from '../../app/displays/display-schedule.component';
import { SignageService } from '../../app/signage.service';

describe('DisplayScheduleComponent', () => {
    const selected_display = signal<any>(null);
    const playlists = signal<any[]>([]);
    const service_stub = { selected_display, playlists };

    function make() {
        TestBed.configureTestingModule({
            providers: [{ provide: SignageService, useValue: service_stub }],
        });
        return TestBed.createComponent(DisplayScheduleComponent)
            .componentInstance;
    }

    beforeEach(() => {
        selected_display.set(null);
        playlists.set([]);
    });

    it('renders a full seven-day week starting on the current Monday', () => {
        const component = make();
        const week_start = startOfWeek(new Date(), { weekStartsOn: 1 });

        expect(component.days().length).toBe(7);
        expect(isSameDay(component.days()[0], week_start)).toBe(true);
        expect(isSameDay(component.days()[6], addDays(week_start, 6))).toBe(
            true,
        );
    });

    it('shifts the visible week forwards and back and resets to today', () => {
        const component = make();
        const monday = startOfWeek(new Date(), { weekStartsOn: 1 });

        component.nextWeek();
        expect(isSameDay(component.week_start(), addDays(monday, 7))).toBe(true);

        component.previousWeek();
        component.previousWeek();
        expect(isSameDay(component.week_start(), addDays(monday, -7))).toBe(
            true,
        );

        component.goToToday();
        expect(isSameDay(component.week_start(), monday)).toBe(true);
    });

    it('only lists playlists assigned to the selected display', () => {
        playlists.set([{ id: 'p1' }, { id: 'p2' }, { id: 'p3' }]);
        selected_display.set({ id: 'd1', playlists: ['p2'] });
        const component = make();

        expect(component.display_playlists().map((p: any) => p.id)).toEqual([
            'p2',
        ]);
    });

    it('separates all-day and timed schedule blocks per day', () => {
        playlists.set([
            // Default cron (midnight) with a full-day period => all-day block.
            {
                id: 'all',
                name: 'All day',
                enabled: true,
                schedules: [{ play_cron: '0 0 * * *', play_period: 1440 }],
            },
            // 09:00 for two hours => a timed block.
            {
                id: 'timed',
                name: 'Morning',
                enabled: true,
                schedules: [{ play_cron: '0 9 * * *', play_period: 120 }],
            },
        ]);
        selected_display.set({ id: 'd1', playlists: ['all', 'timed'] });
        const component = make();

        const blocks = component.day_blocks();
        expect(blocks.length).toBe(7);
        const day = blocks[0];
        expect(day.all_day.map((b) => b.playlist.id)).toContain('all');
        expect(day.timed.map((b) => b.playlist.id)).toContain('timed');
        expect(day.timed[0].start_minutes).toBe(9 * 60);
    });

    it('shows an empty schedule when the display has no playlists', () => {
        selected_display.set({ id: 'd1', playlists: [] });
        const component = make();

        expect(component.display_playlists()).toEqual([]);
        for (const day of component.day_blocks()) {
            expect(day.all_day).toEqual([]);
            expect(day.timed).toEqual([]);
        }
    });

    it('builds a tooltip from the playlist name and block label', () => {
        const component = make();
        expect(
            component.block_tooltip({
                playlist: { name: 'Promo' },
                label: '09:00 – 11:00',
            } as any),
        ).toBe('Promo · 09:00 – 11:00');
    });
});
