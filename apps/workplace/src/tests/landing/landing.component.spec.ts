import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    Building,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { signal } from '@angular/core';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent } from '@placeos/components';
import { MockProvider } from 'ng-mocks';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { LandingAvailabilityComponent } from '../../app/landing/landing-availability.component';
import { LandingColleaguesComponent } from '../../app/landing/landing-colleagues.component';
import { LandingUpcomingComponent } from '../../app/landing/landing-upcoming.component';
import { LandingComponent } from '../../app/landing/landing.component';

describe('LandingComponent', () => {
    let spectator: Spectator<LandingComponent>;
    const createComponent = createComponentFactory({
        component: LandingComponent,
        declarations: [
            mockComponent(LandingColleaguesComponent),
            mockComponent(LandingAvailabilityComponent),
            mockComponent(LandingUpcomingComponent),
            mockComponent(TopbarComponent),
            mockComponent(FooterMenuComponent),
            mockComponent(IconComponent),
        ],
        providers: [
            MockProvider(SettingsService),
            MockProvider(OrganisationService, {
                active_building: signal(new Building()),
                building: new Building(),
                initialised: signal(true),
                level_list: signal([]),
            }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        spectator.component.time.set(1);
        spectator.detectChanges();
        expect('[date]').toContainText('1970');
    });
});
