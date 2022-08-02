import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { VisitorEventComponent } from '../../app/visitors/visitor-event.component';
import { VisitorListingsComponent } from '../../app/visitors/visitor-listings.component';
import { VisitorsStateService } from '../../app/visitors/visitors-state.service';

describe('VisitorListingComponent', () => {
    let spectator: SpectatorRouting<VisitorListingsComponent>;
    const createComponent = createRoutingFactory({
        component: VisitorListingsComponent,
        providers: [
            {
                provide: VisitorsStateService,
                useValue: {
                    filtered_events: new BehaviorSubject([]),
                },
            },
        ],
        declarations: [
            MockComponent(VisitorEventComponent),
            MockComponent(IconComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
