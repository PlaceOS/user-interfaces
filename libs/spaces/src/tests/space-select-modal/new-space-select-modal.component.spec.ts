import { createRoutingFactory, Spectator } from "@ngneat/spectator/jest";
import { SettingsService } from "@placeos/common";
import { MockComponent } from "ng-mocks";
import { NewSpaceSelectModalComponent } from "../../lib/space-select-modal/new-space-select-modal.component";
import { SpaceDetailsComponent } from "../../lib/space-select-modal/space-details.component";
import { SpaceFiltersDisplayComponent } from "../../lib/space-select-modal/space-filters-display.component";
import { SpaceFiltersComponent } from "../../lib/space-select-modal/space-filters.component";
import { SpaceListComponent } from "../../lib/space-select-modal/space-list.component";
import { Space } from "../../lib/spaces";

describe('NewSpaceSelectModalComponent', () => {
    let spectator: Spectator<NewSpaceSelectModalComponent>;
    const createComponent = createRoutingFactory({
        component: NewSpaceSelectModalComponent,
        providers: [{
            provide: SettingsService,
            useValue: {
                get: jest.fn(),
                saveUserSetting: jest.fn()
            }
        }],
        declarations: [
            MockComponent(SpaceDetailsComponent),
            MockComponent(SpaceListComponent),
            MockComponent(SpaceFiltersComponent),
            MockComponent(SpaceFiltersDisplayComponent),
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

    it('should show available filters', () => expect('space-filters').toExist());

    it('should show selected filters', () => expect('space-filters-display').toExist());

    it('should show available spaces', () => expect('space-list').toExist());

    it('should show selected space\'s details', () => expect('space-details').toExist());

    it('should allow closing the modal', () => expect('header [mat-dialog-close]').toExist());

    it('should allow saving the list items', () => expect('button[save]').toExist())

    it('should allow favouriting a space', () => {
        spectator.component.toggleFavourite(new Space({ id: '1' }))
        expect(
            spectator.inject(SettingsService).saveUserSetting
        ).toBeCalledWith('favourite_spaces', ['1']);

    });

    it('should allow un-favouriting a space', () => {
        spectator.inject(SettingsService).get.mockImplementation(() => ['1']);
        spectator.component.toggleFavourite(new Space({ id: '1' }))
        expect(
            spectator.inject(SettingsService).saveUserSetting
        ).toBeCalledWith('favourite_spaces', []);
    });
});