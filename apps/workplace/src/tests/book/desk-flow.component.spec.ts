import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { MockComponent } from 'ng-mocks';

import { BookDeskFlowComponent } from '../../app/book/desk-flow.component';
import { DeskFlowConfirmComponent } from '../../app/book/desk-flow/confirm.component';
import { DeskFlowFormComponent } from '../../app/book/desk-flow/form.component';
import { DeskFlowMapComponent } from '../../app/book/desk-flow/map.component';
import { FlowSuccessComponent } from '../../app/book/flow-success.component';

describe('BookDeskFlowComponent', () => {
    let spectator: SpectatorRouting<BookDeskFlowComponent>;
    const createComponent = createRoutingFactory({
        component: BookDeskFlowComponent,
        providers: [
            {
                provide: BookingFormService,
                useValue: {
                    loadForm: jest.fn(),
                    newForm: jest.fn(),
                    setView: jest.fn(),
                    view: '',
                    last_success: null,
                },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } }
        ],
        declarations: [
            MockComponent(DeskFlowFormComponent),
            MockComponent(DeskFlowMapComponent),
            MockComponent(DeskFlowConfirmComponent),
            MockComponent(FlowSuccessComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show form page', () => {
        expect('desk-flow-form').toExist();
        const service = spectator.inject(BookingFormService);
        (service as any).view = 'confirm';
        spectator.detectChanges();
        expect('desk-flow-form').not.toExist();
    });

    it('should show desk map page', () => {
        expect('desk-flow-map').not.toExist();
        const service = spectator.inject(BookingFormService);
        (service as any).view = 'map';
        spectator.detectChanges();
        expect('desk-flow-map').toExist();
    });

    it('should show confirm page', () => {
        expect('desk-flow-confirm').not.toExist();
        const service = spectator.inject(BookingFormService);
        (service as any).view = 'confirm';
        spectator.detectChanges();
        expect('desk-flow-confirm').toExist();
    });

    it('should show success page', () => {
        expect('flow-success').not.toExist();
        const service = spectator.inject(BookingFormService);
        (service as any).view = 'success';
        spectator.detectChanges();
        expect('flow-success').toExist();
    });
});
