import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CalendarEvent } from '@placeos/common';
import { mockComponent } from 'libs/common/src/tests/test-helpers';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { MockProvider } from 'ng-mocks';
import { SetupBreakdownModalComponent } from '../lib/setup-breakdown-modal.component';

jest.mock('../lib/events.fn');

import * as events_fn from '../lib/events.fn';

describe('SetupBreakdownModalComponent', () => {
    let spectator: Spectator<SetupBreakdownModalComponent>;
    const event = new CalendarEvent({
        id: 'event-1',
        ical_uid: 'uid-1',
        setup_time: 10,
        breakdown_time: 15,
        resources: [{ id: 'sys-1' }] as any,
    });
    const createComponent = createComponentFactory({
        component: SetupBreakdownModalComponent,
        providers: [
            MockProvider(MAT_DIALOG_DATA, event),
            MockProvider(MatDialogRef, { close: jest.fn() }),
        ],
        declarations: [
            mockComponent(IconComponent),
            mockComponent(DurationFieldComponent),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should initialise the form with the existing durations', () => {
        expect(spectator.component.model()).toEqual({
            setup: 10,
            breakdown: 15,
        });
    });

    it('should save the event with the updated durations', async () => {
        (events_fn.saveEvent as jest.Mock).mockResolvedValue(event);
        spectator.component.model.set({ setup: 20, breakdown: 25 });
        await spectator.component.save();
        expect(events_fn.saveEvent).toHaveBeenCalledWith(
            expect.objectContaining({ setup_time: 20, breakdown_time: 25 }),
            { system_id: 'sys-1', ical_uid: 'uid-1' },
        );
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalledWith(
            event,
        );
    });

    it('should fallback to updating metadata when saving fails', async () => {
        (events_fn.saveEvent as jest.Mock).mockRejectedValue('error');
        (events_fn.updateEventMetadata as jest.Mock).mockResolvedValue(event);
        spectator.component.model.set({ setup: 5, breakdown: 5 });
        await spectator.component.save();
        expect(events_fn.updateEventMetadata).toHaveBeenCalledWith(
            'event-1',
            'sys-1',
            expect.objectContaining({
                setup_time: 5,
                breakdown_time: 5,
                setup: 5,
                breakdown: 5,
            }),
        );
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalledWith(
            event,
        );
    });

    it('should stay open and stop loading when both updates fail', async () => {
        (events_fn.saveEvent as jest.Mock).mockRejectedValue('error');
        (events_fn.updateEventMetadata as jest.Mock).mockRejectedValue(
            'error',
        );
        await spectator.component.save();
        expect(spectator.inject(MatDialogRef).close).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });
});
