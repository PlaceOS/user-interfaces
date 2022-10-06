import { FormGroup } from '@angular/forms';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { NewDeskFlowComponent } from '../../app/book/new-desk-flow.component';
import { NewDeskFlowFormComponent } from '../../app/book/new-desk-flow/new-desk-flow-form.component';
import { NewDeskFlowSuccessComponent } from '../../app/book/new-desk-flow/new-desk-flow-success.component';

describe('NewDeskFlowComponent', () => {
    let spectator: SpectatorRouting<NewDeskFlowComponent>;
    const createComponent = createRoutingFactory({
        component: NewDeskFlowComponent,
        providers: [
            MockProvider(BookingFormService, {
                loadForm: jest.fn(),
                newForm: jest.fn(),
                setView: jest.fn(),
                setOptions: jest.fn(),
                form: new FormGroup({}),
                view: '',
                last_success: null,
            } as any),
            MockProvider(OrganisationService, {
                initialised: new BehaviorSubject(true),
            }),
        ],
        declarations: [
            MockComponent(NewDeskFlowFormComponent),
            MockComponent(NewDeskFlowSuccessComponent),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
        const book_service: any = spectator.inject(BookingFormService);
        book_service.setView.mockImplementation((e) => {
            book_service.view = e;
            spectator.detectChanges();
        });
        book_service.setView('form');
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show form view by default', () => {
        expect('new-desk-flow-form').toExist();
        spectator.inject(BookingFormService).setView('success');
        expect('new-desk-flow-form').not.toExist();
    });

    it('should show success view when set', () => {
        expect('new-desk-flow-success').not.toExist();
        spectator.inject(BookingFormService).setView('success');
        expect('new-desk-flow-success').toExist();
    });

    it('should set view based of route params', () => {
        expect('new-desk-flow-success').not.toExist();
        spectator.setRouteParam('step', 'success');
        expect('new-desk-flow-success').toExist();
    });
});
