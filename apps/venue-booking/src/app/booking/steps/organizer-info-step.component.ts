import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../booking.service';

@Component({
    selector: 'organizer-info-step',
    template: `
        <div class="flex flex-col gap-6">
            <h2 class="text-xl font-bold">Organizer Information</h2>

            <!-- Organizer Name -->
            <div class="flex flex-col gap-1">
                <label class="text-sm font-medium">
                    Organizer Name
                    <span class="text-error">*</span>
                </label>
                <input
                    type="text"
                    class="border-neutral h-12 w-full rounded-sm border px-4"
                    placeholder="Enter organizer name"
                    [ngModel]="booking.organizer_name()"
                    (ngModelChange)="booking.organizer_name.set($event)"
                />
            </div>

            <!-- Organizer Email -->
            <div class="flex flex-col gap-1">
                <label class="text-sm font-medium">
                    Organizer Email
                    <span class="text-error">*</span>
                </label>
                <input
                    type="email"
                    class="border-neutral h-12 w-full rounded-sm border px-4"
                    placeholder="Enter organizer email"
                    [ngModel]="booking.organizer_email()"
                    (ngModelChange)="booking.organizer_email.set($event)"
                />
            </div>

            <!-- Organizer Phone -->
            <div class="flex flex-col gap-1">
                <label class="text-sm font-medium">Organizer Phone</label>
                <input
                    type="tel"
                    class="border-neutral h-12 w-full rounded-sm border px-4"
                    placeholder="(310) XXX-XXXX"
                    [ngModel]="booking.organizer_phone()"
                    (ngModelChange)="booking.organizer_phone.set($event)"
                />
            </div>
        </div>
    `,
    imports: [FormsModule],
})
export class OrganizerInfoStepComponent {
    public readonly booking = inject(BookingService);
}
