import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { SpacesService } from '@placeos/spaces';
import { of } from 'rxjs';
import { MockComponent } from 'ng-mocks';

import { AppTimetableComponent } from '../app/timetable.component';
import { SpaceTimetableComponent } from '../app/space-timetable.component';

describe('AppTimetableComponent', () => {
    let spectator: SpectatorRouting<AppTimetableComponent>;
    const createComponent = createRoutingFactory({
        component: AppTimetableComponent,
        providers: [
            { provide: SettingsService, useValue: { get: jest.fn() } },
            {
                provide: SpacesService,
                useValue: { initialised: of(true), find: jest.fn() },
            },
        ],
        declarations: [MockComponent(SpaceTimetableComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
