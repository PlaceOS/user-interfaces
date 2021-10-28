import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';

import { TopbarComponent } from '../../app/components/topbar.component';
import { DashboardAvailabilityComponent } from '../../app/dashboard/dashboard-availability.component';
import { DashboardContactsComponent } from '../../app/dashboard/dashboard-contacts.component';
import { DashboardUpcomingComponent } from '../../app/dashboard/dashboard-upcoming.component';
import { DashboardComponent } from '../../app/dashboard/dashboard.component';

describe('DashboardComponent', () => {
    let spectator: Spectator<DashboardComponent>;
    const createComponent = createComponentFactory({
        component: DashboardComponent,
        declarations: [
            MockComponent(TopbarComponent),
            MockComponent(FooterMenuComponent),
            MockComponent(DashboardAvailabilityComponent),
            MockComponent(DashboardUpcomingComponent),
            MockComponent(DashboardContactsComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });
});
