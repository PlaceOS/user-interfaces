import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { DesksService } from '@placeos/bookings';
import { ExploreMapViewComponent } from '@placeos/explore';
import { MockComponent } from 'ng-mocks';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { ExploreComponent } from '../../app/explore/explore.component';

describe('ExploreComponent', () => {
    let spectator: Spectator<ExploreComponent>;
    const createComponent = createComponentFactory({
        component: ExploreComponent,
        providers: [{ provide: DesksService, useValue: {} }],
        declarations: [
            MockComponent(TopbarComponent),
            MockComponent(FooterMenuComponent),
            MockComponent(ExploreMapViewComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
