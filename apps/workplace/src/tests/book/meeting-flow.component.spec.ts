import { signal } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { mockComponent } from '@placeos/common/tests';
import { EventFormService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { BookMeetingFlowComponent } from '../../app/book/meeting-flow.component';
import { MeetingFlowConfirmComponent } from '../../app/book/meeting-flow/meeting-flow-confirm.component';
import { MeetingFlowFormComponent } from '../../app/book/meeting-flow/meeting-flow-form.component';
import { MeetingFlowSuccessComponent } from '../../app/book/meeting-flow/meeting-flow-success.component';

describe('BookMeetingFlowComponent', () => {
    let spectator: SpectatorRouting<BookMeetingFlowComponent>;
    const viewSubject = new BehaviorSubject('form');
    const createComponent = createRoutingFactory({
        component: BookMeetingFlowComponent,
        providers: [
            MockProvider(EventFormService, {
                loadForm: jest.fn(),
                newForm: jest.fn(),
                setView: jest.fn(),
                view$: viewSubject,
                listenForStatusChanges: jest.fn(),
                last_success: signal(null),
                available_spaces: new BehaviorSubject([]),
            } as any),
        ],
        declarations: [
            mockComponent(MeetingFlowFormComponent),
            mockComponent(MeetingFlowSuccessComponent),
            mockComponent(MeetingFlowConfirmComponent),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
        const event_service: any = spectator.inject(EventFormService);
        event_service.setView.mockImplementation((_) => {
            viewSubject.next(_);
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
