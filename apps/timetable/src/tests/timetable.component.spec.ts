import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { SpacesService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';

import { AppTimetableComponent } from '../app/timetable.component';

describe('AppTimetableComponent', () => {
    let spectator: SpectatorRouting<AppTimetableComponent>;
    const createComponent = createRoutingFactory({
        component: AppTimetableComponent,
        detectChanges: false,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(),
            }),
            MockProvider(OrganisationService, {
                active_building: signal(null),
            }),
            MockProvider(SpacesService, {
                initialised: signal(false),
            }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should position the current-time marker within the configured period', () => {
        spectator.component.date.set(new Date(2026, 0, 1, 10).valueOf());
        spectator.component.offset.set(9);
        spectator.component.length.set(8);

        expect(spectator.component.current_offset()).toBe(12.5);
    });
});
