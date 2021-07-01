import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';

import { SpaceFlowFindItemComponent } from 'apps/workplace/src/app/book/space-flow/find-item.component';
import { SpaceFlowFindComponent } from 'apps/workplace/src/app/book/space-flow/find.component';

describe('SpaceFlowFindComponent', () => {
    let spectator: SpectatorRouting<SpaceFlowFindComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceFlowFindComponent,
        providers: [
            {
                provide: EventFormService,
                useValue: {
                    options: new BehaviorSubject({}),
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    initialised: of(true),
                    building: new BehaviorSubject({}),
                    levelsForBuilding: jest.fn(() => []),
                },
            },
            {
                provide: SpacesService,
                useValue: { initialised: of(true), filter: jest.fn(() => []) },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } },
        ],
        declarations: [
            MockComponent(SpaceFlowFindItemComponent),
            MockComponent(IconComponent),
        ],
        imports: [
            MatProgressSpinnerModule,
            MatMenuModule,
            MatFormFieldModule,
            MatSelectModule,
            FormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it.todo('should handle changing filters');

    it.todo('should list available spaces');

    it.todo('should allow selecting multiple spaces');
});
