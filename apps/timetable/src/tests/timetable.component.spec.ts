import { signal } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { SpacesService } from '@placeos/events';
import { MockComponent, MockDirective, MockProvider } from 'ng-mocks';

import { AuthenticatedImageDirective } from '@placeos/components';
import { SpaceTimetableComponent } from '../app/space-timetable.component';
import { AppTimetableComponent } from '../app/timetable.component';

describe('AppTimetableComponent', () => {
    let spectator: SpectatorRouting<AppTimetableComponent>;
    const createComponent = createRoutingFactory({
        component: AppTimetableComponent,
        providers: [
            MockProvider(SettingsService, { get: vi.fn() }),
            MockProvider(SpacesService, {
                initialised: signal(true),
                find: vi.fn(),
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
