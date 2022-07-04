import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';
import { DateOptionsComponent } from '../../app/ui/date-options.component';
import { SearchbarComponent } from '../../app/ui/searchbar.component';
import { VisitorsStateService } from '../../app/visitors/visitors-state.service';
import { VisitorsTopbarComponent } from '../../app/visitors/visitors-topbar.component';

describe('VisitorsTopbarComponent', () => {
    let spectator: SpectatorRouting<VisitorsTopbarComponent>;
    const createComponent = createRoutingFactory({
        component: VisitorsTopbarComponent,
        declarations: [
            MockComponent(SearchbarComponent),
            MockComponent(DateOptionsComponent),
        ],
        providers: [
            {
                provide: VisitorsStateService,
                useValue: {
                    setFilters: jest.fn(),
                    setSearchString: jest.fn(),
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    active_levels: of([]),
                    initialised: of(true),
                    levelWithID: jest.fn(),
                    buildings: [],
                },
            },
        ],
        imports: [
            MatFormFieldModule,
            MatSelectModule,
            FormsModule,
            MatSlideToggleModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should handle query parameters', () => {
        expect(spectator.component.zones).toEqual([]);
        spectator.setRouteQueryParam('zone_ids', 'zone-1234,zone-2345');
        spectator.detectChanges();
        expect(spectator.component.zones).toEqual(['zone-1234', 'zone-2345']);
    });
});
