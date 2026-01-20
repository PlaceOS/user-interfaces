import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@placeos/components';
import { FooterComponent } from '../shared/footer.component';
import { TopbarComponent } from '../shared/topbar.component';
import { BookingService } from './booking.service';
import { DocumentsStepComponent } from './steps/documents-step.component';
import { EventDetailsStepComponent } from './steps/event-details-step.component';
import { OrganizerInfoStepComponent } from './steps/organizer-info-step.component';
import { RequirementsStepComponent } from './steps/requirements-step.component';

@Component({
    selector: 'booking-request-root',
    template: `
        <app-topbar class="border-base-200 sticky top-0 z-20 border-b" />
        <main
            class="bg-base-200 relative z-0 flex flex-1 flex-col items-center gap-6 overflow-auto p-4"
        >
            <!-- Main Card Container -->
            <section
                class="bg-base-100 border-base-300 mx-auto w-5xl max-w-full rounded-lg border p-8 shadow-sm"
            >
                <!-- Header -->
                <h1 class="text-secondary mb-8 text-3xl font-medium">
                    Request Event
                </h1>

                <!-- Stepper -->
                <div class="mb-8 flex items-center justify-center">
                    @for (
                        step of booking.steps;
                        track step.id;
                        let i = $index
                    ) {
                        <div class="flex items-center">
                            <!-- Step circle -->
                            <div class="flex flex-col items-center">
                                <div
                                    class="flex h-10 w-10 items-center justify-center rounded-full text-lg font-medium transition-colors"
                                    [class]="booking.getStepClass(i)"
                                >
                                    @if (booking.current_step() > i) {
                                        <icon class="text-xl">check</icon>
                                    } @else {
                                        {{ i + 1 }}
                                    }
                                </div>
                                <span
                                    class="mt-2 text-sm font-medium"
                                    [class.text-secondary]="
                                        booking.current_step() >= i
                                    "
                                    [class.opacity-50]="
                                        booking.current_step() < i
                                    "
                                >
                                    {{ step.label }}
                                </span>
                            </div>
                            <!-- Connector line -->
                            @if (i < booking.steps.length - 1) {
                                <div
                                    class="mx-2 h-1 w-24 rounded transition-colors"
                                    [class.bg-success]="
                                        booking.current_step() > i
                                    "
                                    [class.bg-secondary]="
                                        booking.current_step() === i
                                    "
                                    [class.bg-base-300]="
                                        booking.current_step() < i
                                    "
                                ></div>
                            }
                        </div>
                    }
                </div>

                <!-- Step Content -->
                <div class="min-h-96">
                    @switch (booking.current_step()) {
                        @case (0) {
                            <event-details-step />
                        }
                        @case (1) {
                            <organizer-info-step />
                        }
                        @case (2) {
                            <requirements-step />
                        }
                        @case (3) {
                            <documents-step />
                        }
                    }
                </div>

                <!-- Navigation Buttons -->
                <div
                    class="border-base-300 mt-8 flex justify-between border-t pt-6"
                >
                    @if (booking.current_step() === 0) {
                        <a
                            btn
                            matRipple
                            class="inverse w-40"
                            [routerLink]="['/']"
                        >
                            Cancel
                        </a>
                    } @else {
                        <button
                            btn
                            matRipple
                            class="inverse w-40"
                            (click)="booking.previousStep()"
                        >
                            Previous
                        </button>
                    }

                    @if (booking.current_step() < booking.steps.length - 1) {
                        <button
                            btn
                            matRipple
                            class="w-40"
                            (click)="booking.nextStep()"
                        >
                            Next
                        </button>
                    } @else {
                        <button
                            btn
                            matRipple
                            class="w-48"
                            (click)="booking.submitRequest()"
                        >
                            Submit Event Request
                        </button>
                    }
                </div>
            </section>
        </main>
        <app-footer />
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
            }
        `,
    ],
    imports: [
        RouterLink,
        TopbarComponent,
        FooterComponent,
        IconComponent,
        MatRippleModule,
        EventDetailsStepComponent,
        OrganizerInfoStepComponent,
        RequirementsStepComponent,
        DocumentsStepComponent,
    ],
})
export class BookingRequestComponent {
    public readonly booking = inject(BookingService);
}
