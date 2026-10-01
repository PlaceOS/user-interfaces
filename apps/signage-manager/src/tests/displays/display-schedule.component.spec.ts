import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { addDays, isSameDay, startOfWeek } from 'date-fns';
import { DisplayScheduleComponent } from '../../app/displays/display-schedule.component';
import { SignageDisplayService } from '../../app/displays/signage-display.service';
import { SignagePlaylistService } from '../../app/playlists/signage-playlist.service';
import { SignageContextService } from '../../app/signage-context.service';
import { HydratedSignageTemplateMapping } from '../../app/signage-template-mapping';
import { SignageTemplateService } from '../../app/templates/signage-template.service';

describe('DisplayScheduleComponent', () => {
    const selected_display = signal<any>(null);
    const selected_display_zones = signal<any[]>([]);
    const playlists = signal<any[]>([]);
    const context_stub = { templates_enabled: signal(false) };
    const display_stub = { selected_display, selected_display_zones };
    const playlist_stub = {
        playlistsById: (ids: readonly string[]) =>
            playlists().filter(({ id }) => ids.includes(id)),
    };
    const template_stub = { listTemplateMappings: vi.fn() };
    const stub_providers = [
        { provide: SignageContextService, useValue: context_stub },
        { provide: SignageDisplayService, useValue: display_stub },
        { provide: SignagePlaylistService, useValue: playlist_stub },
        { provide: SignageTemplateService, useValue: template_stub },
    ];

    function make() {
        TestBed.configureTestingModule({
            providers: [provideRouter([]), ...stub_providers],
        });
        return TestBed.createComponent(DisplayScheduleComponent)
            .componentInstance;
    }

    beforeEach(() => {
        selected_display.set(null);
        selected_display_zones.set([]);
        playlists.set([]);
        context_stub.templates_enabled.set(false);
        template_stub.listTemplateMappings.mockReset().mockResolvedValue([]);
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
        expect(isSameDay(component.week_start(), addDays(monday, 7))).toBe(
            true,
        );

        component.previousWeek();
        component.previousWeek();
        expect(isSameDay(component.week_start(), addDays(monday, -7))).toBe(
            true,
        );

        component.goToToday();
        expect(isSameDay(component.week_start(), monday)).toBe(true);
    });

    it('only lists playlists assigned to the selected display', () => {
        playlists.set([
            { id: 'p1', name: 'One' },
            { id: 'p2', name: 'Two' },
            { id: 'p3', name: 'Three' },
        ]);
        selected_display.set({ id: 'd1', playlists: ['p2'] });
        const component = make();

        expect(
            component.display_assignments().map(({ playlist }) => playlist.id),
        ).toEqual(['p2']);
    });

    it('includes playlists of the zones the display is in', () => {
        playlists.set([
            { id: 'p1', name: 'Direct' },
            { id: 'p2', name: 'Building' },
        ]);
        selected_display.set({
            id: 'd1',
            playlists: ['p1'],
            zones: ['building'],
        });
        selected_display_zones.set([
            { id: 'building', name: 'Building', playlists: ['p2'] },
        ]);
        const component = make();

        expect(
            component
                .display_assignments()
                .map(({ playlist, source_type }) => [playlist.id, source_type]),
        ).toEqual([
            ['p2', 'zone'],
            ['p1', 'display'],
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

        expect(component.display_assignments()).toEqual([]);
        for (const day of component.day_blocks()) {
            expect(day.all_day).toEqual([]);
            expect(day.timed).toEqual([]);
        }
    });

    it('loads display mappings and renders linked playlists inside templates', async () => {
        context_stub.templates_enabled.set(true);
        selected_display.set({ id: 'd1', playlists: ['p1'] });
        playlists.set([
            {
                id: 'p1',
                name: 'Morning playlist',
                enabled: true,
                schedules: [{ play_cron: '0 9 * * *', play_period: 60 }],
            },
        ]);
        template_stub.listTemplateMappings.mockResolvedValue([
            new HydratedSignageTemplateMapping({
                id: 'm1',
                template_id: 't1',
                zone_id: 'z1',
                template_details: { name: 'Welcome template' },
            }),
        ]);
        TestBed.configureTestingModule({
            providers: [provideRouter([]), ...stub_providers],
        });
        const fixture = TestBed.createComponent(DisplayScheduleComponent);
        await fixture.whenStable();
        const element: HTMLElement = fixture.nativeElement;
        const parent = element
            .querySelector('a[href="/templates/t1"]')
            ?.closest('li');
        expect(parent?.textContent).toContain('Welcome template');
        expect(
            parent?.querySelector('ul a[href="/playlists/p1"]')?.textContent,
        ).toContain('Morning playlist');
        expect(template_stub.listTemplateMappings).toHaveBeenCalledWith({
            control_system_id: 'd1',
        });

        selected_display.set({ id: 'd2', playlists: [] });
        template_stub.listTemplateMappings.mockResolvedValue([]);
        await fixture.whenStable();
        expect(template_stub.listTemplateMappings).toHaveBeenLastCalledWith({
            control_system_id: 'd2',
        });
        expect(element.querySelector('a[href="/templates/t1"]')).toBeNull();
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
