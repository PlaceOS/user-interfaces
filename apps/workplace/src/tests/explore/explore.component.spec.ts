import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { DesksService } from '@placeos/bookings';
import { OrganisationService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { ExploreMapViewComponent, ExploreStateService } from '@placeos/explore';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { ExploreComponent } from '../../app/explore/explore.component';
import { LandingStateService } from '../../app/landing/landing-state.service';

describe('ExploreComponent', () => {
    let spectator: Spectator<ExploreComponent>;
    const createComponent = createComponentFactory({
        component: ExploreComponent,
        providers: [
            { provide: DesksService, useValue: {} },
            MockProvider(LandingStateService, {
                upcoming_events: of([]),
            }),
            MockProvider(ExploreStateService, {}),
            MockProvider(OrganisationService, {}),
        ],
        declarations: [
            mockComponent(TopbarComponent),
            mockComponent(FooterMenuComponent),
            mockComponent(ExploreMapViewComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
