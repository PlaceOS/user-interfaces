import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { createRoutingFactory, Spectator } from "@ngneat/spectator/jest";
import { EventFormService } from "@placeos/events";
import { UserListFieldComponent } from "@placeos/form-fields";
import { MeetingFlowFormComponent } from "apps/workplace/src/app/book/meeting-flow/meeting-flow-form.component";
import { MeetingFormDetailsComponent } from "apps/workplace/src/app/book/meeting-flow/meeting-form-details.component";
import { AssetListFieldComponent } from "libs/form-fields/src/lib/asset-list-field.component";
import { CateringListFieldComponent } from "libs/form-fields/src/lib/catering-list-field.component";
import { SpaceListFieldComponent } from "libs/form-fields/src/lib/space-list-field.component";
import { MockComponent } from "ng-mocks";

describe('MeetingFlowFormComponent', () => {
    let spectator: Spectator<MeetingFlowFormComponent>;
    const createComponent = createRoutingFactory({
        component: MeetingFlowFormComponent,
        providers: [{
            provide: EventFormService,
            useValue: {
                form: new FormGroup({}),
                clearForm: jest.fn(),
            }
        }],
        declarations: [
            MockComponent(MeetingFormDetailsComponent),
            MockComponent(UserListFieldComponent),
            MockComponent(SpaceListFieldComponent),
            MockComponent(CateringListFieldComponent),
            MockComponent(AssetListFieldComponent)
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

    it('should show form details', () => expect(spectator.query('meeting-form-details')).toExist());

    it('should show attendee list', () => expect(spectator.query('a-user-list-field')).toExist());

    it('should show room list', () => expect(spectator.query('space-list-field')).toExist());

    it('should show catering', () => expect(spectator.query('catering-list-field')).toExist());

    it('should show asset list', () => expect(spectator.query('asset-list-field')).toExist());

    it('should show notes', () => expect(spectator.query('textarea[name="notes"]')).toExist());

    it('should allow clearing of form', () => {
        expect(spectator.query('button[clear-form]')).toExist();
        spectator.click('button[clear-form]');
        expect(spectator.inject(EventFormService).clearForm).toHaveBeenCalledTimes(1);
    });

    it('should allow navigating to confirm page', () => {
        expect(spectator.query('button[confirm]')).toExist();
        spectator.click('button[confirm]');
        expect(spectator.inject(Router).navigate).toHaveBeenCalledTimes(1);
    })
});