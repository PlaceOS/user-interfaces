import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { GroupEventCardComponent } from '@placeos/events';
import { MockComponent, MockProvider } from 'ng-mocks';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { GroupEventsFiltersListComponent } from '../../app/events/group-events-filters-list.component';
import { GroupEventsSidebarComponent } from '../../app/events/group-events-sidebar.component';
import { GroupEventsComponent } from '../../app/events/group-events.component';
import { GroupEventsStateService } from '../../app/events/group-events-state.service';

describe('GroupEventsComponent', () => {
    let spectator: Spectator<GroupEventsComponent>;
    const filtered_events = signal<any[]>([]);
    const createComponent = createComponentFactory({
        component: GroupEventsComponent,
        declarations: [
            MockComponent(TopbarComponent),
            MockComponent(FooterMenuComponent),
            MockComponent(GroupEventCardComponent),
            MockComponent(GroupEventsFiltersListComponent),
            MockComponent(GroupEventsSidebarComponent),
        ],
        providers: [
            MockProvider(GroupEventsStateService, {
                filtered_events,
            } as any),
        ],
        detectChanges: false,
    });

    beforeEach(() => {
        filtered_events.set([]);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should expose the state filtered events list', () => {
        const events = [{ id: 'a', extension_data: {} }];
        filtered_events.set(events);
        expect(spectator.component.event_list()).toBe(events);
    });

    it('should find the featured event via extension_data.featured', () => {
        filtered_events.set([
            { id: 'a', extension_data: {} },
            { id: 'b', extension_data: { featured: true } },
        ]);
        expect(spectator.component.featured()?.id).toBe('b');
    });

    it('should find the featured event via a top-level featured flag', () => {
        filtered_events.set([
            { id: 'a', extension_data: {} },
            { id: 'b', extension_data: {}, featured: true },
        ]);
        expect(spectator.component.featured()?.id).toBe('b');
    });

    it('should exclude the featured event from the remaining events', () => {
        filtered_events.set([
            { id: 'a', extension_data: {} },
            { id: 'b', extension_data: { featured: true } },
            { id: 'c', extension_data: {} },
        ]);
        expect(
            spectator.component.events_without_featured().map((_) => _.id),
        ).toEqual(['a', 'c']);
    });

    it('should return all events when none is featured', () => {
        filtered_events.set([
            { id: 'a', extension_data: {} },
            { id: 'b', extension_data: {} },
        ]);
        expect(spectator.component.featured()).toBeUndefined();
        expect(
            spectator.component.events_without_featured().map((_) => _.id),
        ).toEqual(['a', 'b']);
    });
});
