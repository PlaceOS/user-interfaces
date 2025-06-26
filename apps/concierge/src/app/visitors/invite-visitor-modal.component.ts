import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'invite-visitor-modal',
    template: `
        <main class="relative min-h-[40rem] min-w-[40rem]">
            <invite-visitor-form
                [date]="date"
                (done)="onDone()"
            ></invite-visitor-form>
        </main>
    `,
    styles: [``],
    standalone: false,
})
export class InviteVisitorModalComponent {
    private _data = inject<{
    date: number;
}>(MAT_DIALOG_DATA);
    private _dialog_ref = inject<MatDialogRef<InviteVisitorModalComponent>>(MatDialogRef);

    public readonly date = this._data.date;

    public onDone() {
        this._dialog_ref.close();
    }
}
