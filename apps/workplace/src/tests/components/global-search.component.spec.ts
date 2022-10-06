import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { ExploreSearchService } from '@placeos/explore';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { GlobalSearchComponent } from '../../app/components/global-search.component';

describe('GlobalSearchComponent', () => {
    let spectator: SpectatorRouting<GlobalSearchComponent>;
    const createComponent = createRoutingFactory({
        component: GlobalSearchComponent,
        providers: [
            {
                provide: ExploreSearchService,
                useValue: {
                    search_results: new BehaviorSubject([]),
                    loading: new BehaviorSubject(''),
                    setFilter: jest.fn(),
                },
            },
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
        spectator.dispatchFakeEvent('input', 'focusin');
        spectator.dispatchFakeEvent('input', 'input');
        spectator.detectChanges();
        expect(service.setFilter).toHaveBeenCalled();
        expect(document.querySelector('[empty]')).toExist();
        spectator.component.filter_str = "Alex";
        (service.search_results as any).next([
            { id: '1', type: 'user', name: 'Alex S', description: '' },
        ]);
        spectator.detectChanges();
        expect(document.querySelector('[empty]')).not.toExist();
        expect(document.querySelector('a')).toExist();
    });

    it('should navigate to selected item', () => {
        expect(document.querySelector('a')).not.toExist();
        const service = spectator.inject(ExploreSearchService);
        spectator.component.filter_str = "Alex";
        (service.search_results as any).next([
            { id: '1', type: 'user', name: 'Alex S', description: '' },
        ]);
        spectator.detectChanges();
        expect(document.querySelector('a')).toExist();
        expect(document.querySelector('a')).toContainText('Alex S');
        spectator.click(document.querySelector('a'));
    });
});
