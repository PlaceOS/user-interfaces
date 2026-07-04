import { signal } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { Subject } from 'rxjs';
import { TeamScheduleFiltersComponent } from '../../app/team-schedule/team-schedule-filters.component';
import { TeamScheduleService } from '../../app/team-schedule/team-schedule.service';

describe('TeamScheduleFiltersComponent', () => {
    let spectator: Spectator<TeamScheduleFiltersComponent>;
    const query_params = new Subject<any>();
    const set_filters = jest.fn();
    const previous_week = jest.fn();
    const next_week = jest.fn();

    const createComponent = createComponentFactory({
        component: TeamScheduleFiltersComponent,
        providers: [
            MockProvider(ActivatedRoute, {
                queryParamMap: query_params.asObservable(),
            } as any),
            MockProvider(TeamScheduleService, {
                filters: signal({
                    date: Date.now(),
                    day_index: -1,
                    view: 'all',
                    search: '',
                    department: null,
                    office: null,
                    status: null,
                }),
                departments: signal(['Sales']),
                offices: signal(['Alpha']),
                statuses: signal(['office']),
                setFilters: set_filters,
                previousWeek: previous_week,
                nextWeek: next_week,
            } as any),
        ],
        detectChanges: false,
    });

    beforeEach(() => {
        jest.clearAllMocks();
        spectator = createComponent();
    });

    it('should expose the service filter option signals', () => {
        expect(spectator.component.departments()).toEqual(['Sales']);
        expect(spectator.component.offices()).toEqual(['Alpha']);
        expect(spectator.component.statuses()).toEqual(['office']);
    });

    it('should delegate filter updates to the service', () => {
        spectator.component.setFilters({ search: 'abc' });
        expect(set_filters).toHaveBeenCalledWith({ search: 'abc' });
    });

    it('should delegate week navigation to the service', () => {
        spectator.component.previousWeek();
        spectator.component.nextWeek();
        expect(previous_week).toHaveBeenCalled();
        expect(next_week).toHaveBeenCalled();
    });

    it('should reset to today with an auto day index', () => {
        spectator.component.resetToToday();
        expect(set_filters).toHaveBeenCalledWith(
            expect.objectContaining({ day_index: -1 }),
        );
    });

    it('should apply the view query param on init', () => {
        spectator.component.ngOnInit();
        query_params.next(convertToParamMap({ view: 'favorites' }));
        expect(set_filters).toHaveBeenCalledWith({ view: 'favorites' });
    });

    it('should ignore query param changes without a view', () => {
        spectator.component.ngOnInit();
        query_params.next(convertToParamMap({ other: 'x' }));
        expect(set_filters).not.toHaveBeenCalled();
    });
});
