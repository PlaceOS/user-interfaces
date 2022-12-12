import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { EventFormService } from '@placeos/events';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BookMeetingFlowComponent } from '../../app/book/meeting-flow.component';
import { MeetingFlowConfirmComponent } from '../../app/book/meeting-flow/meeting-flow-confirm.component';
import { MeetingFlowFormComponent } from '../../app/book/meeting-flow/meeting-flow-form.component';
import { MeetingFlowSuccessComponent } from '../../app/book/meeting-flow/meeting-flow-success.component';

describe('BookMeetingFlowComponent', () => {
    let spectator: SpectatorRouting<BookMeetingFlowComponent>;
    const createComponent = createRoutingFactory({
        component: BookMeetingFlowComponent,
        providers: [
            MockProvider(EventFormService, {
                loadForm: jest.fn(),
                newForm: jest.fn(),
                setView: jest.fn(),
                view: '',
                listenForStatusChanges: jest.fn(),
                last_success: null,
            } as any),
        ],
        declarations: [
            MockComponent(MeetingFlowFormComponent),
            MockComponent(MeetingFlowSuccessComponent),
            MockComponent(MeetingFlowConfirmComponent),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
        const event_service: any = spectator.inject(EventFormService);
        event_service.setView.mockImplementation((_) => {
            event_service.view = _;
            spectator.detectChanges();
        });
        event_service.setView('form');
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show form view by default', () => {
        expect(spectator.query('meeting-flow-form')).toExist();
        spectator.inject(EventFormService).setView('success');
        expect(spectator.query('meeting-flow-form')).not.toExist();
    });

    it('should show success view when set', () => {
        expect(spectator.query('meeting-flow-success')).not.toExist();
        spectator.inject(EventFormService).setView('success');
        expect(spectator.query('meeting-flow-success')).toExist();
    });

    it('should show confirm view when set', () => {
        expect(spectator.query('meeting-flow-confirm')).not.toExist();
        spectator.inject(EventFormService).setView('confirm');
        expect(spectator.query('meeting-flow-confirm')).toExist();
    });

    it('should set view based of route params', () => {
        expect(spectator.query('meeting-flow-success')).not.toExist();
        spectator.setRouteParam('step', 'success');
        expect(spectator.query('meeting-flow-success')).toExist();
    });
});
