import { createRoutingFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent } from "ng-mocks";
import { CateringItemFiltersComponent } from "../../lib/catering-order-modal/catering-item-filters.component";

describe('CateringItemFiltersComponent', () => {
    let spectator: Spectator<CateringItemFiltersComponent>;
    const createComponent = createRoutingFactory({
        component: CateringItemFiltersComponent,
        providers: [],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});