import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { SpacesService } from '@placeos/events';
import { MockComponent, MockDirective, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { SpaceTimetableComponent } from '../app/space-timetable.component';
import { AppTimetableComponent } from '../app/timetable.component';

describe('AppTimetableComponent', () => {
    let spectator: SpectatorRouting<AppTimetableComponent>;
    const createComponent = createRoutingFactory({
        component: AppTimetableComponent,
        providers: [
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(SpacesService, {
                initialised: of(true),
                find: jest.fn(),
            }),
        ],
        declarations: [
            MockComponent(SpaceTimetableComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
