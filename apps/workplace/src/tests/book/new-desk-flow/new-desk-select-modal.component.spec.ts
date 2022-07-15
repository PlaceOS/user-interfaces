import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { createRoutingFactory, Spectator } from "@ngneat/spectator/jest";
import { FAV_DESK_KEY } from "@placeos/bookings";
import { SettingsService } from "@placeos/common";
import { IconComponent } from "@placeos/components";
import { Desk } from "@placeos/organisation";
import { NewDeskSelectModalComponent } from "apps/workplace/src/app/book/new-desk-flow/new-desk-select-modal.component";
import { DeskDetailsComponent } from "apps/workplace/src/app/book/new-desk-flow/views/desk-details.component";
import { DeskFiltersDisplayComponent } from "apps/workplace/src/app/book/new-desk-flow/views/desk-filters-display.component";
import { DeskListComponent } from "apps/workplace/src/app/book/new-desk-flow/views/desk-list.component";
import { DeskMapComponent } from "apps/workplace/src/app/book/new-desk-flow/views/desk-map.component";
import { MockComponent, MockModule } from "ng-mocks";

describe('NewDeskSelectModalComponent', () => {
    let spectator: Spectator<NewDeskSelectModalComponent>;
    const createComponent = createRoutingFactory({
        component: NewDeskSelectModalComponent,
        providers:[
            {
                provide: SettingsService,
                useValue:{
                    get: jest.fn(),
                    saveUserSetting: jest.fn()
                }
            },
            { 
                provide: MatDialogRef, 
                useValue: {
                    close: jest.fn()
                } 
            }
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(DeskFiltersDisplayComponent),
            MockComponent(DeskListComponent),
            MockComponent(DeskDetailsComponent),
            MockComponent(DeskMapComponent)
        ],
        imports: [MockModule(MatDialogModule)]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show selected filters', () => 
        expect('desk-filters-display').toExist());

    it('should show available desks', () => 
        expect('desk-list').toExist());

    it('should show desk details when desk selected', () => {
        expect('desk-details').not.toExist();
        spectator.component.displayed = new Desk({id: '1'});
        spectator.detectChanges();
        expect('desk-details').toExist();
        spectator.component.displayed = null;
        spectator.detectChanges();
        expect('desk-details').not.toExist();
    });

    it('should allow closing the modal', () =>
        expect('header [mat-dialog-close]').toExist());

    it('should allow favouriting a space', () => {
        spectator.component.toggleFavourite(new Desk({ id: '1' }));
        expect(
            spectator.inject(SettingsService).saveUserSetting
        ).toBeCalledWith(FAV_DESK_KEY, ['1']);
    });

    it('should allow un-favouriting a space', () => {
        spectator.inject(SettingsService).get.mockImplementation(() => ['1']);
        spectator.component.toggleFavourite(new Desk({ id: '1' }));
        expect(
            spectator.inject(SettingsService).saveUserSetting
        ).toBeCalledWith(FAV_DESK_KEY, []);
    });

    it('should show desk map view', () => {
        expect('desk-map').not.toExist();
        spectator.component.view = 'map';
        spectator.detectChanges();
        expect('desk-map').toExist();
    })
})