import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'view-locker-bank-modal',
    template: `
        <header
            class="sticky top-0 px-4 py-2 mx-4 mt-4 mb-2 w-[calc(100%-2rem)] border-none z-10 bg-base-200 rounded"
        >
            <h2 class="text-xl font-medium">
                View Locker Bank - {{ bank.name }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="max-w-[80vw] max-h-[65vh] h-[50vh] px-2 pb-2">
            <locker-grid [show_name]="false" [bank]="bank"></locker-grid>
        </main>
    `,
    styles: [``],
})
export class ViewLockerBankModalComponent {
    public readonly bank = this._data.bank;

    constructor(@Inject(MAT_DIALOG_DATA) private _data) {}
}
