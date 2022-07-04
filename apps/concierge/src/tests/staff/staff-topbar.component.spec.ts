import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';
import { StaffStateService } from '../../app/staff/staff-state.service';
import { StaffTopbarComponent } from '../../app/staff/staff-topbar.component';
import { SearchbarComponent } from '../../app/ui/searchbar.component';

describe('StaffTopbarComponent', () => {
    let spectator: SpectatorRouting<StaffTopbarComponent>;
    const createComponent = createRoutingFactory({
        component: StaffTopbarComponent,
        declarations: [MockComponent(SearchbarComponent)],
        providers: [
            {
                provide: StaffStateService,
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

    it.todo('should handle zone_ids query param');
    it.todo('should handle search query changes');
});
