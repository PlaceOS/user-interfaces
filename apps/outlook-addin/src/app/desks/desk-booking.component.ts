import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { DeskBookingFormComponent } from './desk-form.component';

@Component({
    selector: 'desk-booking',
    template: `
        <div class="bg-base-200 absolute inset-0 overflow-auto">
            <div
                class="border-base-300 bg-base-100 mx-auto min-h-full w-160 max-w-full border-x pt-2"
            >
                <header
                    class="bg-base-200 sticky top-0 z-10 mx-auto mb-2 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
                >
                    <h2 class="text-xl font-medium capitalize">Book Desk</h2>
                </header>
                <desk-booking-form></desk-booking-form>
                <div
                    class="border-base-200 bg-base-100 sticky bottom-0 flex flex-col items-center space-y-2 border-t px-4 py-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                >
                    <button
                        btn
                        matRipple
                        class="w-full sm:flex-1"
                        [disabled]="!can_book()"
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

    public readonly form = this._service.form;
    public readonly form_value = toSignal(this.form.valueChanges, {
        initialValue: this.form.getRawValue(),
    });
    public readonly can_book = computed(() => !!this.form_value().asset_id);
    public readonly clearForm = () => this._service.clearForm();

    public async makeBooking() {
        await this._service.confirmPost();
        this._router.navigate(['/book', 'desks', 'success']);
    }
}
