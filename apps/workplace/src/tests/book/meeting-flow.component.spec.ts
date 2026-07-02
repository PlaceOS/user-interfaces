import { signal } from '@angular/core';
import { fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { Space } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { EventFormService, SpacePipe } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { BookMeetingFlowComponent } from '../../app/book/meeting-flow.component';
import { MeetingFlowConfirmComponent } from '../../app/book/meeting-flow/meeting-flow-confirm.component';
import { MeetingFlowFormComponent } from '../../app/book/meeting-flow/meeting-flow-form.component';
import { MeetingFlowSuccessComponent } from '../../app/book/meeting-flow/meeting-flow-success.component';

describe('BookMeetingFlowComponent', () => {
    let spectator: SpectatorRouting<BookMeetingFlowComponent>;
    const view = signal('form');
    const model = signal({ resources: [] });
    const transform_space = jest.fn();
    const createComponent = createRoutingFactory({
        component: BookMeetingFlowComponent,
        providers: [
            MockProvider(EventFormService, {
                loadForm: jest.fn(),
                newForm: jest.fn(),
                setView: jest.fn(),
                view,
                listenForStatusChanges: jest.fn(),
                last_success: signal(null),
                available_spaces: signal([]),
                model,
            } as any),
        ],
        componentProviders: [
            MockProvider(SpacePipe, {
                transform: transform_space,
            }),
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
            view.set(_);
            spectator.detectChanges();
        });
        event_service.setView('form');
        model.set({ resources: [] });
        transform_space.mockReset();
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

    it('should set selected room based on query params', fakeAsync(() => {
        const room = new Space({ id: 'space-1', email: 'space-1@placeos.com' });
        transform_space.mockResolvedValue(room);
        spectator.setRouteQueryParam('space_id', 'space-1');
        spectator.detectChanges();
        flushMicrotasks();
        expect(model().resources).toEqual([room]);
    }));
});
