import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent } from "ng-mocks";
import { AssetFiltersDisplayComponent } from "../../lib/asset-select-modal/asset-filters-display.component";

describe('AssetFiltersDisplayComponent', () => {
    let spectator: Spectator<AssetFiltersDisplayComponent>;
    const createComponent = createComponentFactory({
        component: AssetFiltersDisplayComponent,
        providers: [],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});