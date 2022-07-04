import { createRoutingFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent } from "ng-mocks";
import { CateringItemListComponent } from '../../lib/catering-order-modal/catering-item-list.component';

describe('CateringItemListComponent', () => {
    let spectator: Spectator<CateringItemListComponent>;
    const createComponent = createRoutingFactory({
        component: CateringItemListComponent,
        providers: [],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});