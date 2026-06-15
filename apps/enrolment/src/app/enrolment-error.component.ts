import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EnrolmentStateService } from './enrolment-state.service';

@Component({
    selector: 'enrolment-error',
    template: `
        <div
            class="border-base-200 bg-warning mx-auto my-4 w-lg max-w-[calc(100vw-2rem)] rounded-sm border p-4 shadow-sm"
        >
            <h3 class="mb-4 text-center text-xl font-medium">
                Unable to continue
            </h3>
            <p class="text-center">
                @switch (error | async) {
                    @case ('guest') {
                        Your details could not be retrieved.
                    }
                    @case ('meeting') {
                        Meeting details have changed, please check your calendar
                        for updates and emails for a new enrolment link. If the
                        meeting has been moved you may not receive a new link
                        immediately.
                    }
                    @case ('link') {
                        Your link has expired, please check your calendar for
                        updates and emails for a new enrolment link.
                    }
                    @case ('checked_in') {
                        You are already checked in to the meeting.
                    }
                    @case ('cancelled') {
                        Meeting was cancelled, please check your calendar for
                        updates.
                    }
                }
            </p>
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [CommonModule],
})
export class EnrolmentErrorComponent {
    private _state = inject(EnrolmentStateService);

    public readonly error = this._state.error;
}
