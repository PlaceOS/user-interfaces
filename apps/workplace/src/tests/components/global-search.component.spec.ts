import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { Booking, CalendarEvent, SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { ExploreSearchService, SearchResult } from '@placeos/explore';
import { MockComponent, MockProvider } from 'ng-mocks';

import { GlobalSearchComponent } from '../../app/components/global-search.component';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

describe('GlobalSearchComponent', () => {
    let spectator: SpectatorRouting<GlobalSearchComponent>;
    const results = signal<SearchResult[]>([]);
    const bookings = signal<(Booking | CalendarEvent)[]>([]);
    const createComponent = createRoutingFactory({
        component: GlobalSearchComponent,
        // A real router gives each result link its URL
        stubsEnabled: false,
        providers: [
            MockProvider(SettingsService, { get: vi.fn() }),
            MockProvider(ExploreSearchService, {
                global_search_results: results,
                loading: signal(false),
                setFilter: vi.fn(),
                setInProgressBookings: vi.fn(),
            }),
            MockProvider(ScheduleStateService, { bookings }),
        ],
        declarations: [MockComponent(IconComponent)],
        imports: [FormsModule],
    });

    beforeEach(() => {
        results.set([]);
        bookings.set([]);
        spectator = createComponent();
    });

    it('should search for the text that the user types', () => {
        spectator.typeInElement('Alex', 'input');
        expect(
            spectator.inject(ExploreSearchService).setFilter,
        ).toHaveBeenCalledWith('Alex');
    });

    it('should show an empty state when nothing matches', () => {
        spectator.typeInElement('Nobody', 'input');
        expect('[empty]').toExist();
        expect('a').not.toExist();
    });

    it('should link each result to its location on the map', () => {
        results.set([
            { id: 'space-1', type: 'space', name: 'Room 1', description: '' },
            { id: 'user-1', type: 'user', name: 'Alex S', description: '' },
            {
                id: 'role-1',
                type: 'contact',
                name: 'First aid',
                description: '',
                is_role: true,
            },
            {
                id: 'feat-1',
                type: 'feature',
                name: 'Printer',
                description: '',
                zone: 'lvl-1',
            },
        ]);
        spectator.typeInElement('a', 'input');

        const links = spectator
            .queryAll('a')
            .map((link) => link.getAttribute('href'));
        expect(links).toEqual([
            '/explore?space=space-1',
            '/explore?user=user-1',
            '/explore?user=role-1',
            '/explore?locate=feat-1&name=Printer&zone=lvl-1',
        ]);
        expect('[empty]').not.toExist();
    });

    it('should pass the bookings in progress to the search', () => {
        const started = new Booking({ id: 'started' });
        vi.spyOn(started, 'state', 'get').mockReturnValue('in_progress');
        bookings.set([started, new Booking({ id: 'future' })]);
        spectator.detectChanges();

        expect(
            spectator.inject(ExploreSearchService).setInProgressBookings,
        ).toHaveBeenLastCalledWith([started]);
    });
});
