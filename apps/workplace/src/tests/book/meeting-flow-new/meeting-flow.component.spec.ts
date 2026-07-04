import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { notifyError } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { EventFormService } from '@placeos/events';
import { MeetingFlowNewComponent } from '../../../app/book/meeting-flow-new/meeting-flow.component';
import { MeetingFlowDetailsComponent } from '../../../app/book/meeting-flow-new/meeting-flow-details.component';
import { MeetingFlowOptionsComponent } from '../../../app/book/meeting-flow-new/meeting-flow-options.component';
import { MeetingFlowSpaceSelectComponent } from '../../../app/book/meeting-flow-new/meeting-flow-space-select.component';
import { MeetingFlowSuccessComponent } from '../../../app/book/meeting-flow/meeting-flow-success.component';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
}));

describe('MeetingFlowNewComponent', () => {
    let spectator: SpectatorRouting<MeetingFlowNewComponent>;
    let flow_view: ReturnType<typeof signal<string>>;
    let model: ReturnType<typeof signal<any>>;

    const createComponent = createRoutingFactory({
        component: MeetingFlowNewComponent,
        declarations: [
            mockComponent(MeetingFlowDetailsComponent),
            mockComponent(MeetingFlowOptionsComponent),
            mockComponent(MeetingFlowSpaceSelectComponent),
            mockComponent(MeetingFlowSuccessComponent),
        ],
        providers: [
            {
                provide: EventFormService,
                useFactory: () => ({
                    view: flow_view,
                    model,
                    loadForm: jest.fn(),
                    setView: jest.fn(),
                }),
            },
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        flow_view = signal('form');
        model = signal({ title: 'Weekly Sync', resources: [] });
        spectator = createComponent();
        jest.spyOn(spectator.inject(Router), 'navigate').mockResolvedValue(
            true,
        );
    });

    it('should render the stepper while the flow is not complete', () => {
        expect(spectator.query('meeting-flow-success')).not.toExist();
        expect(spectator.query('meeting-flow-details')).toExist();
    });

    it('should render the success view once the flow completes', () => {
        flow_view.set('success');
        spectator.detectChanges();
        expect(spectator.query('meeting-flow-success')).toExist();
        expect(spectator.query('meeting-flow-details')).not.toExist();
    });

    it('should swap the active step based on the view signal', () => {
        spectator.component.view.set(1);
        spectator.detectChanges();
        expect(spectator.query('meeting-flow-space-select')).toExist();
        expect(spectator.query('meeting-flow-details')).not.toExist();

        spectator.component.view.set(2);
        spectator.detectChanges();
        expect(spectator.query('meeting-flow-options')).toExist();
        expect(spectator.query('meeting-flow-space-select')).not.toExist();
    });

    it('should load the form on init', () => {
        expect(spectator.inject(EventFormService).loadForm).toHaveBeenCalled();
    });

    it('should block navigating to room selection without a title', () => {
        model.set({ title: '   ', resources: [] });
        spectator.component.navigateToView(1);
        expect(notifyError).toHaveBeenCalled();
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
    });

    it('should allow navigating to room selection when a title is set', () => {
        spectator.component.navigateToView(1);
        expect(notifyError).not.toHaveBeenCalled();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({ queryParams: { view: 1 } }),
        );
    });

    it('should block navigating to confirm without a selected space', () => {
        spectator.component.navigateToView(2);
        expect(notifyError).toHaveBeenCalled();
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
    });

    it('should allow navigating to confirm once a space is selected', () => {
        model.set({ title: 'Sync', resources: [{ id: 'space-1' }] });
        spectator.component.navigateToView(2);
        expect(notifyError).not.toHaveBeenCalled();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({ queryParams: { view: 2 } }),
        );
    });

    it('should step forwards and clamp backwards navigation at zero', () => {
        spectator.component.next();
        expect(spectator.component.view()).toBe(1);
        spectator.component.previous();
        expect(spectator.component.view()).toBe(0);
        spectator.component.previous();
        expect(spectator.component.view()).toBe(0);
    });

    it('should sync the active step from the view query param', () => {
        spectator.setRouteQueryParam('view', '2');
        expect(spectator.component.view()).toBe(2);
    });

    it('should forward the step route param to the form service', () => {
        spectator.setRouteParam('step', 'confirm');
        expect(spectator.inject(EventFormService).setView).toHaveBeenCalledWith(
            'confirm',
        );
    });
});
