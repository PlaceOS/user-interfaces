import { createRoutingFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent } from "ng-mocks";
import { AssetFiltersComponent } from "../../lib/asset-select-modal/asset-filters.component";

describe('AssetFiltersComponent', () => {
    let spectator: Spectator<AssetFiltersComponent>;
    const createComponent = createRoutingFactory({
        component: AssetFiltersComponent,
        providers: [],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});