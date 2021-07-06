import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { NavMenuComponent } from '../../app/components/nav-menu.component';
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
            MockComponent(NavMenuComponent),
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
