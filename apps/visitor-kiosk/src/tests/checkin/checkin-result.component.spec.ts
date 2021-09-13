import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

import { CheckinResultsComponent } from '../../app/checkin/checkin-result.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

describe('CheckinComponent', () => {
    let spectator: SpectatorRouting<CheckinResultsComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinResultsComponent,
        providers: [
            {
                provide: CheckinStateService,
                useValue: { event: of({}), guest: of({}) },
            },
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
