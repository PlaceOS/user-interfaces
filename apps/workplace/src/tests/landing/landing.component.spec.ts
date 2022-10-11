import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
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
            MockComponent(LandingColleaguesComponent),
            MockComponent(LandingAvailabilityComponent),
            MockComponent(LandingUpcomingComponent),
            MockComponent(TopbarComponent),
            MockComponent(FooterMenuComponent),
            MockComponent(IconComponent)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        spectator.component.time = 1;
        spectator.detectChanges();
        expect('[date]').toContainText('1970');
    })
});
