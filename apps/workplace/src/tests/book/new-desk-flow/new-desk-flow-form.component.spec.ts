import { FormGroup } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { Building, OrganisationService } from '@placeos/organisation';
import { NewDeskFlowFormComponent } from 'apps/workplace/src/app/book/new-desk-flow/new-desk-flow-form.component';
import { NewDeskFormDetailsComponent } from 'apps/workplace/src/app/book/new-desk-flow/new-desk-form-details.component';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';

describe('NewDeskFlowFormComponent', () => {
    let spectator: SpectatorRouting<NewDeskFlowFormComponent>;
    const createComponent = createRoutingFactory({
        component: NewDeskFlowFormComponent,
        providers: [
            MockProvider(BookingFormService, {
                form: new FormGroup({}),
                setView: jest.fn(),
            } as any),
            MockProvider(MatBottomSheet, {
                open: jest.fn(() => ({
                    instance: {},
                    afterDismissed: () => of('1'),
                })) as any,
            }),
            MockProvider(OrganisationService, {
                initialised: of(true),
                active_levels: new BehaviorSubject([]),
                building: new Building({ id: '1' }),
                levelsForBuilding: jest.fn(() => []),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        declarations: [MockComponent(NewDeskFormDetailsComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show form details', () =>
        expect('new-desk-form-details').toExist());

    it('should allow navigation to confirm page', () => {
        expect('button[confirm]').toExist();
        spectator.click('button[confirm]');
        expect(spectator.inject(Router).navigate).toHaveBeenCalledTimes(1);
    });
});
