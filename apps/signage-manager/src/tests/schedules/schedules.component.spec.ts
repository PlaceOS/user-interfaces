import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { addDays, isSameDay, startOfDay } from 'date-fns';
import { SchedulesSectionComponent } from '../../app/schedules/schedules.component';
import { SignageService } from '../../app/signage.service';

describe('SchedulesSectionComponent', () => {
    const playlists = signal<any[]>([]);
    const displays = signal<any[]>([]);
    const zones = signal<any[]>([]);
    const navigate = jest.fn();

    const service_stub = {
        playlists,
        displays,
        zones,
        playlist_approval_status: signal<Record<string, boolean>>({}),
    };

    let fixture: ComponentFixture<SchedulesSectionComponent>;

    async function make() {
        await TestBed.configureTestingModule({
            imports: [SchedulesSectionComponent],
            providers: [
                { provide: SignageService, useValue: service_stub },
                { provide: Router, useValue: { navigate } },
                { provide: ActivatedRoute, useValue: {} },
            ],
        })
            .overrideComponent(SchedulesSectionComponent, {
                set: { template: '' },
            })
            .compileComponents();
        fixture = TestBed.createComponent(SchedulesSectionComponent);
        return fixture.componentInstance;
    }

    beforeEach(() => {
        jest.clearAllMocks();
        playlists.set([]);
        displays.set([
            { id: 'd-1', name: 'Foyer', zones: [], updated_at: 1 },
            { id: 'd-2', name: 'Cafe', zones: [], updated_at: 2 },
        ]);
        zones.set([{ id: 'z-1', name: 'Ground', updated_at: 1 }]);
    });

    afterEach(() => fixture?.destroy());

    it('counts displays and zones from the service', async () => {
        const component = await make();
        expect(component.display_total()).toBe(2);
        expect(component.zone_total()).toBe(1);
    });

    it('builds one timeline row per display in the displays view', async () => {
        const component = await make();
        expect(component.rows().map((r) => r.id)).toEqual(['d-1', 'd-2']);
    });

    it('switches to zone rows when the view tab changes', async () => {
        const component = await make();
        component.setViewTab('zones');
        expect(component.view_tab()).toBe('zones');
        expect(component.rows().map((r) => r.id)).toEqual(['z-1']);
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({ queryParams: { tab: 'zones' } }),
        );
    });

    it('filters rows by the search term', async () => {
        const component = await make();
        component.search_term.set('foyer');
        expect(component.rows().map((r) => r.id)).toEqual(['d-1']);
    });

    it('chooses the placeholder based on the active view', async () => {
        const component = await make();
        expect(component.search_placeholder()).toBe(
            'SIGNAGE_MANAGER.SEARCH_DISPLAYS_ZONES_PLAYLISTS',
        );
        component.setViewTab('zones');
        expect(component.search_placeholder()).toBe(
            'SIGNAGE_MANAGER.SEARCH_ZONES_PLAYLISTS',
        );
    });

    it('reads the search value out of the input event', async () => {
        const component = await make();
        component.setSearch({ target: { value: 'cafe' } } as any);
        expect(component.search_term()).toBe('cafe');
        component.clearSearch();
        expect(component.search_term()).toBe('');
    });

    it('navigates the selected day forwards, backwards and to today', async () => {
        const component = await make();
        const start = component.selected_date();
        component.nextDay();
        expect(isSameDay(component.selected_date(), addDays(start, 1))).toBe(
            true,
        );
        component.previousDay();
        expect(isSameDay(component.selected_date(), start)).toBe(true);

        component.selected_date.set(addDays(start, 5));
        component.goToToday();
        expect(isSameDay(component.selected_date(), startOfDay(new Date()))).toBe(
            true,
        );
    });

    it('derives the current-time marker minutes and same-day visibility', async () => {
        const component = await make();
        component.current_time.set(new Date(2026, 5, 1, 10, 30));
        component.selected_date.set(startOfDay(new Date(2026, 5, 1)));
        expect(component.current_minutes()).toBe(630);
        expect(component.show_current_time()).toBe(true);

        component.selected_date.set(startOfDay(new Date(2026, 5, 2)));
        expect(component.show_current_time()).toBe(false);
    });
});
