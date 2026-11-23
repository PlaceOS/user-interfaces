import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CalendarEvent } from '@placeos/common';
import { mockData } from '@placeos/common/tests';
import { mockReply } from '@placeos/ts-client/compat';
import { events, PlaceCalendarEvent } from '@placeos/ts-client/staff';
import { mockComponent } from 'libs/common/src/tests/test-helpers';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { MockProvider } from 'ng-mocks';
import { SetupBreakdownModalComponent } from '../lib/setup-breakdown-modal.component';
import { httpFailure } from './staff-test-data';

// The real saveEvent/updateEventMetadata wrappers run; only the staff
// operations beneath them are stubbed.
vi.mock('@placeos/ts-client/staff', { spy: true });

const saved_event = mockReply(
    mockData(PlaceCalendarEvent, { id: 'event-1', event_start: 1 }),
);

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
            MockProvider(MatDialogRef, { close: vi.fn() }),
        ],
        declarations: [
            mockComponent(IconComponent),
            mockComponent(DurationFieldComponent),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent();
    });

    it('should initialise the form with the existing durations', () => {
        expect(spectator.component.model()).toEqual({
            setup: 10,
            breakdown: 15,
        });
    });

    it('should save the event with the updated durations', async () => {
        vi.mocked(events.update).mockResolvedValue(saved_event);
        spectator.component.model.set({ setup: 20, breakdown: 25 });
        await spectator.component.save();
        expect(events.update).toHaveBeenCalledWith(
            expect.objectContaining({
                id: 'event-1',
                system_id: 'sys-1',
                body: expect.objectContaining({
                    setup_time: 20,
                    breakdown_time: 25,
                }),
            }),
        );
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalledWith(
            expect.any(CalendarEvent),
        );
    });

    it('should fallback to updating metadata when saving fails', async () => {
        vi.mocked(events.update).mockResolvedValue(httpFailure(500));
        vi.mocked(events.patchMetadata).mockResolvedValue(
            mockReply({ setup_time: 5 }),
        );
        spectator.component.model.set({ setup: 5, breakdown: 5 });
        await spectator.component.save();
        expect(events.patchMetadata).toHaveBeenLastCalledWith({
            id: 'event-1',
            system_id: 'sys-1',
            ical_uid: undefined,
            body: expect.objectContaining({
                setup_time: 5,
                breakdown_time: 5,
                setup: 5,
                breakdown: 5,
            }),
        });
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
    });

    it('should stay open and stop loading when both updates fail', async () => {
        vi.mocked(events.update).mockResolvedValue(httpFailure(500));
        vi.mocked(events.patchMetadata).mockResolvedValue(httpFailure(500));
        await spectator.component.save();
        expect(spectator.inject(MatDialogRef).close).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });
});
