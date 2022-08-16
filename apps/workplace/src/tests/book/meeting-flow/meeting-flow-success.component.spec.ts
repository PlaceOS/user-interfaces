import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { MeetingFlowSuccessComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-flow-success.component';
import { MockComponent } from 'ng-mocks';

describe('MeetingFlowSuccessComponent', () => {
    let spectator: Spectator<MeetingFlowSuccessComponent>;
    const createComponent = createRoutingFactory({
        component: MeetingFlowSuccessComponent,
        providers: [
            { provide: SettingsService, useValue: { get: jest.fn() } },
            { provide: EventFormService, useValue: { last_success: {} } },
        ],
        declarations: [],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());
});
