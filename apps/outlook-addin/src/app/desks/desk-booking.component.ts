import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';

@Component({
    selector: 'desk-booking',
    template: `
        <div class="absolute inset-0 bg-base-200">
            <div
                class="mx-auto max-h-screen w-full max-w-[32rem] overflow-auto"
            >
                <h3 class="p-4 text-2xl font-medium">Book Desk</h3>
                <desk-booking-form></desk-booking-form>
                <div
                    class="flex flex-col space-y-2 border-t border-base-200 p-4"
                >
                    <button
                        btn
                        matRipple
                        class="w-full"
                        [disabled]="!form.value.asset_id"
                        (click)="makeBooking()"
                    >
                        Book Desk
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse w-full"
                        (click)="clearForm()"
                    >
                        Clear Form
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class DeskBookingComponent {
    public readonly clearForm = () => this._service.clearForm();

    public get form() {
        return this._service.form;
    }

    constructor(
        private _service: BookingFormService,
        private _router: Router,
    ) {}

    public async makeBooking() {
        await this._service.confirmPost();
        this._router.navigate(['/book', 'desks', 'success']);
    }
}
