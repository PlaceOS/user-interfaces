import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { RouterModule } from '@angular/router';
import { OrganisationService, PlaceOS_Service } from '@placeos/common';
import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    const createComponent = createComponentFactory({
        component: AppComponent,
        providers: [
            MockProvider(PlaceOS_Service, {
                init: jest.fn(),
                initialised: of(true),
            }),
            MockProvider(OrganisationService, {
                initialised: of(true),
                active_building: of(null),
            }),
        ],
        imports: [RouterModule.forRoot([])],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create the app', () => {
        expect(spectator.component).toBeTruthy();
    });
});
