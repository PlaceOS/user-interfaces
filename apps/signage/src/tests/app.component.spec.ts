import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, PlaceOS_Service } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    const placeos_service = { init: vi.fn() };

    const create_component = createComponentFactory({
        component: AppComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            { provide: PlaceOS_Service, useValue: placeos_service },
            MockProvider(OrganisationService),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        placeos_service.init.mockResolvedValue(undefined);
        spectator = create_component();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should register mock handlers and initialise PlaceOS on init', () => {
        // `setMocks(mocksInit)` runs for real here (workspace-module exports
        // cannot be intercepted under the native unit-test builder); the only
        // externally observable effect is the PlaceOS_Service init call.
        spectator.component.ngOnInit();

        expect(placeos_service.init).toHaveBeenCalledTimes(1);
    });

    it('should render the banner, router outlet and loading shells', () => {
        spectator.detectChanges();

        expect(spectator.query('global-banner')).toBeTruthy();
        expect(spectator.query('router-outlet')).toBeTruthy();
        expect(spectator.query('global-loading')).toBeTruthy();
    });
});
