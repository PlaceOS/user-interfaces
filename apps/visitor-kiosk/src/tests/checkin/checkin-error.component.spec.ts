import { SpectatorRouting } from '@ngneat/spectator';
import { createRoutingFactory } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { CheckinErrorComponent } from '../../app/checkin/checkin-error.component';

describe('CheckinErrorComponent', () => {
    let spectator: SpectatorRouting<CheckinErrorComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinErrorComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
