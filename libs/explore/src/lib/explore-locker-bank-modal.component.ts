import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Locker, LockerBank } from '@placeos/bookings';
import { LockerGridComponent } from 'libs/bookings/src/lib/locker-grid.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';

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
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[65vh] overflow-hidden">
            <locker-grid [bank]="bank" [bank_status]="lockers"></locker-grid>
        </main>
    `,
    styles: [``],
    imports: [MatRippleModule, LockerGridComponent, IconComponent],
})
export class ExploreLockerBankModalComponent {
    private _data = inject<LockerBankModalData>(MAT_DIALOG_DATA);

    public readonly bank = this._data.bank;
    public readonly lockers = this._data.lockers.reduce((map, l) => {
        map[l.id] = 'busy';
        return map;
    }, {});
}
