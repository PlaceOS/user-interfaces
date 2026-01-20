import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from '@placeos/components';
import { BookingService } from '../booking.service';

@Component({
    selector: 'documents-step',
    template: `
        <div class="flex flex-col gap-6">
            <h2 class="text-xl font-bold">Upload Documents</h2>
            <p class="text-base-content/70">
                Upload required documents now or you can upload them later from
                your event details page.
            </p>

            @if (booking.required_documents().length > 0) {
                <div class="flex flex-col gap-4">
                    @for (doc of booking.required_documents(); track doc) {
                        <div
                            class="border-base-300 flex items-center justify-between rounded-lg border p-4"
                        >
                            <div class="flex items-center gap-3">
                                <icon class="text-secondary">description</icon>
                                <span>{{ doc }}</span>
                            </div>
                            <button btn matRipple class="inverse">
                                <icon class="mr-2">upload_file</icon>
                                Upload
                            </button>
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="text-base-content/70 flex flex-col items-center justify-center py-12"
                >
                    <icon class="mb-4 text-6xl opacity-30">folder_off</icon>
                    <p class="text-lg">
                        No documents required for this event based on your
                        selections.
                    </p>
                </div>
            }
        </div>
    `,
    imports: [IconComponent, MatRippleModule],
})
export class DocumentsStepComponent {
    public readonly booking = inject(BookingService);
}
