import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'view-locker-bank-modal',
    template: `
        <header
            class="sticky top-0 z-10 mx-4 mb-2 mt-4 w-[calc(100%-2rem)] rounded border-none bg-base-200 px-4 py-2"
        >
            <h2 class="text-xl font-medium">
                View Locker Bank - {{ bank.name }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="h-[65vh] w-[65vw] overflow-auto px-2 pb-2">
            <locker-grid [bank]="bank"></locker-grid>
        </main>
    `,
    styles: [``],
    standalone: false,
})
export class ViewLockerBankModalComponent {
    public readonly bank = this._data.bank;

    constructor(@Inject(MAT_DIALOG_DATA) private _data) {}
}
