import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';

@Component({
    selector: 'desk-booking',
    template: `
        <div class="absolute inset-0 bg-gray-200 dark:bg-neutral-600">
            <div class="mx-auto w-full max-w-[512px] overflow-auto max-h-screen">
                <h3 class="text-2xl p-4 font-medium">Book Desk</h3>
                <desk-booking-form></desk-booking-form>
                <div class="flex flex-col p-4 space-y-2 border-t border-gray-200 dark:border-neutral-500">
                    <button mat-button class="w-full" [disabled]="!form.value.asset_id" (click)="makeBooking()">
                        Book Desk
                    </button>
                    <button mat-button class="w-full inverse" (click)="clearForm()">
                        Clear Form
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class DeskBookingComponent {

    public readonly clearForm = () => this._service.clearForm();

    public get form() {
        return this._service.form;
    }

    constructor(private _service: BookingFormService, private _router: Router) {}

    public async makeBooking() {
        await this._service.confirmPost();
        this._router.navigate(['/book', 'desks', 'success'])

    }
}
