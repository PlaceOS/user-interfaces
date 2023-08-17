import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'invite-visitor-modal',
    template: `
        <main class="relative min-w-[40rem] min-h-[40rem]">
            <invite-visitor-form (done)="onDone()"></invite-visitor-form>
        </main>
    `,
    styles: [``],
})
export class InviteVisitorModalComponent {
    constructor(
        private _dialog_ref: MatDialogRef<InviteVisitorModalComponent>
    ) {}

    public onDone() {
        this._dialog_ref.close();
    }
}
