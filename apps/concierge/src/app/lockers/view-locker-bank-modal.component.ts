import { Component, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { LockerGridComponent } from '@placeos/bookings';
import { IconComponent } from '@placeos/components';

@Component({
    selector: 'view-locker-bank-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 mx-4 mt-4 mb-2 w-[calc(100%-2rem)] rounded-sm border-none px-4 py-2"
        >
            <h2 class="text-xl font-medium">
                View Locker Bank - {{ bank().name }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[65vh] w-[65vw] overflow-auto px-2 pb-2">
            <locker-grid
                [bank]="bank()"
                default_status="not-bookable"
            ></locker-grid>
        </main>
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        MatRippleModule,
        IconComponent,
        LockerGridComponent,
    ],
})
export class ViewLockerBankModalComponent {
    private _data = inject(MAT_DIALOG_DATA);

    public readonly bank = signal(this._data.bank);
}
