import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    BookingFormService,
    VisitorInviteFormComponent,
    VisitorInviteSuccessComponent,
} from '@placeos/bookings';
import {
    FullscreenModalShellComponent,
    TranslatePipe,
} from '@placeos/components';

@Component({
    selector: 'invite-visitor-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="'BOOKINGS.VISITOR_INVITE_TITLE' | translate"
            [loading]="loading()"
            [confirm_text]="'BOOKINGS.VISITOR_SEND' | translate"
            [hide_confirm]="!!done()"
            (confirm)="post()"
        >
            @if (!done()) {
                <visitor-invite-form
                    [date]="date"
                    [confirm]="post_time()"
                    (done)="done.set($event)"
                ></visitor-invite-form>
            } @else {
                <visitor-invite-success
                    [last_count]="done()"
                    (done)="close()"
                    (another)="reset()"
                ></visitor-invite-success>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        VisitorInviteFormComponent,
        VisitorInviteSuccessComponent,
        FullscreenModalShellComponent,
    ],
})
export class InviteVisitorModalComponent {
    private _data = inject<{
        date: number;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<InviteVisitorModalComponent>>(MatDialogRef);
    private _form = inject(BookingFormService);

    public readonly loading = toSignal(this._form.loading, {
        initialValue: '',
    });

    public readonly date = this._data.date;
    public readonly done = signal(0);
    public readonly post_time = signal(0);
    public readonly post = () => this.post_time.set(Date.now());
    public readonly close = () => this._dialog_ref.close();
    public readonly reset = () => {
        this.post_time.set(0);
        this.done.set(0);
    };
}
