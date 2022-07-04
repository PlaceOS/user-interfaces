import { createRoutingFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent } from "ng-mocks";
import { CateringItemDetailsComponent } from '../../lib/catering-order-modal/catering-item-details.component';

describe('CateringItemDetailsComponent', () => {
    let spectator: Spectator<CateringItemDetailsComponent>;
    const createComponent = createRoutingFactory({
        component: CateringItemDetailsComponent,
        providers: [],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});