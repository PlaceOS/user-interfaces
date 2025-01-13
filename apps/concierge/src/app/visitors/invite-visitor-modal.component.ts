import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'invite-visitor-modal',
    template: `
        <main class="relative min-w-[40rem] min-h-[40rem]">
            <invite-visitor-form
                [date]="date"
                (done)="onDone()"
            ></invite-visitor-form>
        </main>
    `,
    styles: [``],
    standalone: false
})
export class InviteVisitorModalComponent {
    public readonly date = this._data.date;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { date: number },
        private _dialog_ref: MatDialogRef<InviteVisitorModalComponent>,
    ) {}

    public onDone() {
        this._dialog_ref.close();
    }
}
