import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { IconComponent } from '@placeos/components';
import { ExploreSearchService } from '@placeos/explore';
import { MockComponent, MockProvider } from 'ng-mocks';

import { SettingsService } from '@placeos/common';
import { GlobalSearchComponent } from '../../app/components/global-search.component';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

describe('GlobalSearchComponent', () => {
    let spectator: SpectatorRouting<GlobalSearchComponent>;
    const createComponent = createRoutingFactory({
        component: GlobalSearchComponent,
        providers: [
            MockProvider(SettingsService, { get: vi.fn() }),
            MockProvider(ExploreSearchService, {
                search_results: signal([]) as any,
                global_search_results: signal([]) as any,
                loading: signal(false) as any,
                setFilter: vi.fn(),
                setInProgressBookings: vi.fn(),
            } as any),
            MockProvider(ScheduleStateService, {
                bookings: signal([]),
            } as any),
        ],
        declarations: [MockComponent(IconComponent)],
        imports: [MatAutocompleteModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should display search results', () => {
        const service = spectator.inject(ExploreSearchService);
        spectator.triggerEventHandler('input', 'ngModelChange', 'Alex');
        const input_el = spectator.query('input') as HTMLElement;
        input_el.dispatchEvent(new Event('focusin', { bubbles: true }));
        input_el.dispatchEvent(new Event('focus'));
        input_el.dispatchEvent(new Event('input', { bubbles: true }));
        spectator.detectChanges();
        expect(service.setFilter).toHaveBeenCalled();
        // expect(document.querySelector('[empty]')).toExist();
        spectator.component.filter_str.set('Alex');
        (service.global_search_results as any).set([
            { id: '1', type: 'user', name: 'Alex S', description: '' },
        ]);
        spectator.detectChanges();
        expect(document.querySelector('[empty]')).not.toExist();
        expect(document.querySelector('a')).toExist();
    });

    it('should navigate to selected item', () => {
        expect(document.querySelector('a')).not.toExist();
        const service = spectator.inject(ExploreSearchService);
        spectator.component.filter_str.set('Alex');
        (service.global_search_results as any).set([
            { id: '1', type: 'user', name: 'Alex S', description: '' },
        ]);
        spectator.detectChanges();
        expect(document.querySelector('a')).toExist();
        expect(document.querySelector('a')).toContainText('Alex S');
        spectator.click(document.querySelector('a'));
    });
});
