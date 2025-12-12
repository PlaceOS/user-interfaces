import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { DeskBookingFormComponent } from './desk-form.component';

@Component({
    selector: 'desk-booking',
    template: `
        <div class="absolute inset-0 overflow-auto bg-base-200">
            <div
                class="mx-auto min-h-full w-160 max-w-full border-x border-base-300 bg-base-100 pt-2"
            >
                <header
                    class="sticky top-0 z-10 mx-auto mb-2 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none bg-base-200 px-4 py-2"
                >
                    <h2 class="text-xl font-medium capitalize">Book Desk</h2>
                </header>
                <desk-booking-form></desk-booking-form>
                <div
                    class="sticky bottom-0 flex flex-col items-center space-y-2 border-t border-base-200 bg-base-100 px-4 py-2 sm:flex-row sm:space-x-2 sm:space-y-0"
                >
                    <button
                        btn
                        matRipple
                        class="w-full sm:flex-1"
                        [disabled]="!form.value.asset_id"
                        (click)="makeBooking()"
                    >
                        Book Desk
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse w-full sm:flex-1"
                        (click)="clearForm()"
                    >
                        Clear Form
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [``],
    imports: [DeskBookingFormComponent, MatRippleModule],
})
export class DeskBookingComponent {
    private _service = inject(BookingFormService);
    private _router = inject(Router);

    public readonly clearForm = () => this._service.clearForm();

    public get form() {
        return this._service.form;
    }

    public async makeBooking() {
        await this._service.confirmPost();
        this._router.navigate(['/book', 'desks', 'success']);
    }
}
