import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent, MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { ExploreSearchComponent } from '../lib/explore-search.component';
import { ExploreSearchService } from '../lib/explore-search.service';

describe('ExploreSearchComponent', () => {
    let spectator: Spectator<ExploreSearchComponent>;
    const createComponent = createComponentFactory({
        component: ExploreSearchComponent,
        providers: [
            {
                provide: ExploreSearchService,
                useValue: {
                    search_results: new BehaviorSubject(null),
                    loading: new BehaviorSubject(''),
                    setFilter: jest.fn(),
                },
            },
            { provide: Router, useValue: { navigate: jest.fn() } },
            { provide: ActivatedRoute, useValue: {} },
        ],
        declarations: [MockComponent(IconComponent)],
        imports: [
            MockModule(MatProgressSpinnerModule),
            MatAutocompleteModule,
            FormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow searching for spaces and users', () => {
        const service = spectator.inject(ExploreSearchService);
        spectator.click('app-icon');
        expect(spectator.component.show).toBeTruthy();
        expect('mat-option').not.toExist();
        spectator.typeInElement('test', 'input');
        expect(service.setFilter).toHaveBeenCalledWith('test');
        (service.search_results as any).next([
            { id: '1', name: 'First' },
            { id: '2', name: 'Second' },
        ]);
        spectator.detectChanges();
        expect('mat-option').toExist();
    });

    it('should allow selecting options', () => {
        spectator.component.show = true;
        spectator.typeInElement('test', 'input');
        spectator.detectChanges();
        const service = spectator.inject(ExploreSearchService);
        (service.search_results as any).next([
            { id: '1', name: 'First' },
            { id: '2', name: 'Second' },
        ]);
        spectator.detectChanges();
        expect('mat-option').toExist();
        const spy = jest.spyOn(spectator.component, 'select');
        spectator.triggerEventHandler('input', 'ngModelChange', {
            id: '1',
            name: 'First',
        });
        spectator.detectChanges();
        expect(spy).toHaveBeenCalledWith({ id: '1', name: 'First' });
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([], {
            relativeTo: spectator.inject(ActivatedRoute),
            queryParams: { user: '1' },
        });
        spectator.click('app-icon');
        expect(spectator.component.show).toBeFalsy();
    });
});
