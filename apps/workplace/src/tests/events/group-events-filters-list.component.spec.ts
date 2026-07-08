import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent } from '@placeos/components';
import { addDays, startOfDay } from 'date-fns';
import { MockComponent, MockProvider } from 'ng-mocks';
import { GroupEventsFiltersListComponent } from '../../app/events/group-events-filters-list.component';
import { GroupEventsStateService } from '../../app/events/group-events-state.service';

describe('GroupEventsFiltersListComponent', () => {
    let spectator: Spectator<GroupEventsFiltersListComponent>;
    const options = signal<any>({ date: Date.now(), end: undefined });
    const filters = signal<any>({ categories: [], tags: [] });
    const set_filters = vi.fn();
    const createComponent = createComponentFactory({
        component: GroupEventsFiltersListComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            MockProvider(GroupEventsStateService, {
                options,
                filters,
                setFilters: set_filters,
            } as any),
        ],
        detectChanges: false,
    });

    beforeEach(() => {
        vi.clearAllMocks();
        options.set({ date: Date.now(), end: undefined });
        filters.set({ categories: [], tags: [] });
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should report the current period as active when now falls inside the range', () => {
        options.set({
            date: startOfDay(Date.now()).valueOf(),
            end: addDays(Date.now(), 3).valueOf(),
        });
        expect(spectator.component.this_period()).toBe(true);
    });

    it('should report the period as not current when it is entirely in the future', () => {
        options.set({
            date: addDays(Date.now(), 10).valueOf(),
            end: addDays(Date.now(), 13).valueOf(),
        });
        expect(spectator.component.this_period()).toBe(false);
    });

    it('should classify a short range as a week', () => {
        options.set({
            date: Date.now(),
            end: addDays(Date.now(), 6).valueOf(),
        });
        expect(spectator.component.period()).toBe('week');
    });

    it('should classify a long range as a month', () => {
        options.set({
            date: Date.now(),
            end: addDays(Date.now(), 20).valueOf(),
        });
        expect(spectator.component.period()).toBe('month');
    });

    it('should remove a tag via the state service', () => {
        filters.set({ categories: [], tags: ['music', 'art'] });
        spectator.component.removeTag('music');
        expect(set_filters).toHaveBeenCalledWith({ tags: ['art'] });
    });
});
