import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { EventFormService } from '@placeos/events';
import { MockComponent } from 'ng-mocks';
import { NewBookSpaceFlowComponent } from '../../app/book/new-space-flow.component';
import { NewSpaceFlowFormComponent } from '../../app/book/new-space-flow/space-flow-form.component';
import { NewSpaceFlowSuccessComponent } from '../../app/book/new-space-flow/space-flow-success.component';

describe('NewBookSpaceFlowComponent', () => {
    let spectator: SpectatorRouting<NewBookSpaceFlowComponent>;
    const createComponent = createRoutingFactory({
        component: NewBookSpaceFlowComponent,
        providers: [
            {
                provide: EventFormService,
                useValue: {
                    loadForm: jest.fn(),
                    newForm: jest.fn(),
                    setView: jest.fn(),
                    view: '',
                    last_success: null,
                },
            },
        ],
        declarations: [
            MockComponent(NewSpaceFlowFormComponent),
            MockComponent(NewSpaceFlowSuccessComponent),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
        const event_service: any = spectator.inject(EventFormService);
        event_service.setView.mockImplementation(_ => {
            event_service.view = _;
            spectator.detectChanges();
        });
        event_service.setView('form');
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show form view by default', () => {
        expect(spectator.query('new-space-flow-form')).toExist();
        spectator.inject(EventFormService).setView('success');
        expect(spectator.query('new-space-flow-form')).not.toExist();
    });

    it('should show success view when set', () => {
        expect(spectator.query('new-space-flow-success')).not.toExist();
        spectator.inject(EventFormService).setView('success');
        expect(spectator.query('new-space-flow-success')).toExist();
    });

    it('should set view based of route params', () => {
        expect(spectator.query('new-space-flow-success')).not.toExist();
        spectator.setRouteParam('step', 'success');
        expect(spectator.query('new-space-flow-success')).toExist();
    });
});
