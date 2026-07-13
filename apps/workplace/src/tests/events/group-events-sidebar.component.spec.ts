import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { DateCalendarComponent } from '@placeos/form-fields';
import { differenceInDays } from 'date-fns';
import { MockComponent, MockProvider } from 'ng-mocks';
import { GroupEventsSidebarComponent } from '../../app/events/group-events-sidebar.component';
import { GroupEventsStateService } from '../../app/events/group-events-state.service';

describe('GroupEventsSidebarComponent', () => {
    let spectator: Spectator<GroupEventsSidebarComponent>;
    const options = signal<any>({ date: Date.now() });
    const filters = signal<any>({ categories: [], tags: [] });
    const tags = signal<string[]>([]);
    const set_options = vi.fn();
    const set_filters = vi.fn();
    const createComponent = createComponentFactory({
        component: GroupEventsSidebarComponent,
        declarations: [MockComponent(DateCalendarComponent)],
        providers: [
            MockProvider(GroupEventsStateService, {
                options,
                filters,
                tags,
                setOptions: set_options,
                setFilters: set_filters,
            } as any),
            MockProvider(SettingsService, { get: vi.fn(() => 0) } as any),
        ],
        imports: [MatCheckboxModule, FormsModule],
        detectChanges: false,
    });

    beforeEach(() => {
        vi.clearAllMocks();
        options.set({ date: Date.now() });
        filters.set({ categories: [], tags: [] });
        tags.set([]);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should generate weekly periods and select the first on init', () => {
        spectator.component.ngOnInit();

        const periods = spectator.component.period_list();
        expect(periods.length).toBeGreaterThan(0);
        // weekly periods span 7 days
        const first = periods[0];
        expect(
            Math.abs(differenceInDays(first.start, first.end)),
        ).toBeLessThanOrEqual(7);
        expect(spectator.component.selected_range()).toBe(first.id);
        expect(set_options).toHaveBeenCalledWith({
            date: first.start,
            end: first.end,
        });
    });

    it('should regenerate monthly periods when switching period type', () => {
        spectator.component.ngOnInit();
        set_options.mockClear();

        spectator.component.setPeriodType('month');

        expect(spectator.component.period()).toBe('month');
        const periods = spectator.component.period_list();
        // monthly periods span roughly a month
        const first = periods[0];
        expect(
            Math.abs(differenceInDays(first.start, first.end)),
        ).toBeGreaterThan(20);
        expect(set_options).toHaveBeenCalled();
    });

    it('should set the state period range by id', () => {
        spectator.component.ngOnInit();
        const target = spectator.component.period_list()[1];
        set_options.mockClear();

        spectator.component.setPeriod(target.id);

        expect(set_options).toHaveBeenCalledWith({
            date: target.start,
            end: target.end,
        });
    });

    it('should select the period that contains a given date', () => {
        spectator.component.ngOnInit();
        const target = spectator.component.period_list()[2];
        set_options.mockClear();

        spectator.component.setPeriodFromDate(target.start + 1000);

        expect(spectator.component.selected_range()).toBe(target.id);
        expect(set_options).toHaveBeenCalledWith({
            date: target.start,
            end: target.end,
        });
    });

    it('should add a tag through the state service when toggled on', () => {
        filters.set({ categories: [], tags: [] });
        spectator.component.toggleTag('music');
        expect(set_filters).toHaveBeenCalledWith({ tags: ['music'] });
    });

    it('should remove a tag through the state service when toggled off', () => {
        filters.set({ categories: [], tags: ['music', 'art'] });
        spectator.component.toggleTag('music');
        expect(set_filters).toHaveBeenCalledWith({ tags: ['art'] });
    });
});
