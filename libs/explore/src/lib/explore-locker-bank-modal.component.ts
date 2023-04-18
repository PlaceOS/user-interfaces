import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    Locker,
    LockerBank,
    LockersService,
} from 'libs/bookings/src/lib/lockers.service';

export interface LockerBankModalData {
    bank: LockerBank;
    lockers: Locker[];
}

@Component({
    selector: 'explore-locker-bank-modal',
    template: `
        <header>
            <h2 class="text-xl font-medium">{{ bank.name }}</h2>
            <button btn icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="h-[65vh] overflow-hidden">
            <locker-grid [bank]="bank" [bank_status]="lockers"></locker-grid>
        </main>
    `,
    styles: [``],
})
export class ExploreLockerBankModalComponent {
    public readonly bank = this._data.bank;
    public readonly lockers = this._data.lockers.reduce((map, l) => {
        map[l.id] = 'busy';
        return map;
    }, {});

    constructor(@Inject(MAT_DIALOG_DATA) private _data: LockerBankModalData) {}
}
