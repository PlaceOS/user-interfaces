import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';
import { PointsTopbarComponent } from '../../app/points/points-topbar.component';
import { DateOptionsComponent } from '../../app/ui/date-options.component';

describe('PointsTopbarComponent', () => {
    let spectator: Spectator<PointsTopbarComponent>;
    const createComponent = createComponentFactory({
        component: PointsTopbarComponent,
        providers: [
            {
                provide: OrganisationService,
                useValue: {
                    initialised: of(true),
                },
            },
        ],
        declarations: [MockComponent(DateOptionsComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
