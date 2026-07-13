import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CalendarEvent } from '@placeos/common';
import { mockComponent } from 'libs/common/src/tests/test-helpers';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { MockProvider } from 'ng-mocks';
import * as ts_client from '@placeos/ts-client';
import { SetupBreakdownModalComponent } from '../lib/setup-breakdown-modal.component';

// The real saveEvent/updateEventMetadata wrappers run; only the ts-client
// PATCH beneath them is stubbed.
vi.mock('@placeos/ts-client', { spy: true });

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

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should initialise the form with the existing durations', () => {
        expect(spectator.component.model()).toEqual({
            setup: 10,
            breakdown: 15,
        });
    });

    it('should save the event with the updated durations', async () => {
        vi.mocked(ts_client.patch).mockResolvedValue({ id: 'event-1' } as any);
        spectator.component.model.set({ setup: 20, breakdown: 25 });
        await spectator.component.save();
        expect(ts_client.patch).toHaveBeenCalledWith(
            expect.stringContaining('/api/staff/v1/events/event-1'),
            expect.objectContaining({ setup_time: 20, breakdown_time: 25 }),
        );
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalledWith(
            expect.any(CalendarEvent),
        );
    });

    it('should fallback to updating metadata when saving fails', async () => {
        // First PATCH (saveEvent) fails, second PATCH (updateEventMetadata) succeeds.
        vi.mocked(ts_client.patch)
            .mockRejectedValueOnce('error')
            .mockResolvedValue({ id: 'event-1' } as any);
        spectator.component.model.set({ setup: 5, breakdown: 5 });
        await spectator.component.save();
        expect(ts_client.patch).toHaveBeenLastCalledWith(
            '/api/staff/v1/events/event-1/metadata/sys-1',
            expect.objectContaining({
                setup_time: 5,
                breakdown_time: 5,
                setup: 5,
                breakdown: 5,
            }),
        );
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
    });

    it('should stay open and stop loading when both updates fail', async () => {
        vi.mocked(ts_client.patch).mockRejectedValue('error');
        await spectator.component.save();
        expect(spectator.inject(MatDialogRef).close).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });
});
