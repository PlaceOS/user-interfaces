import { Component, inject, output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingFormService } from '@placeos/bookings';
import {
    DialogEvent,
    i18n,
    notifyError,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'desk-book-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.DESKS_BOOK_EDIT'
                    : 'APP.CONCIERGE.DESKS_BOOK_NEW'
                ) | translate
            "
            [loading]="
                (loading | async)
                    ? ('APP.CONCIERGE.DESKS_BOOKING_LOADING' | translate)
                    : ''
            "
            (confirm)="save()"
        >
            <desk-form-details [form]="form" />
        </fullscreen-modal-shell>
    `,
    styles: [``],
    standalone: false,
})
export class DeskBookModalComponent {
    private _booking_form = inject(BookingFormService);
    private _dialog_ref =
        inject<MatDialogRef<DeskBookModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);

    public readonly event = output<DialogEvent>();
    public readonly loading = new BehaviorSubject(false);

    public get form() {
        return this._booking_form.form;
    }

    constructor() {
        if (!this.form.value.id) {
            this.form.patchValue({
                duration:
                    this._settings.get('app.desks.default_duration') || 60,
            });
        }
    }

    public async save() {
        this.loading.next(true);
        this.form.patchValue({ booking_type: 'desk' });
        const event = await this._booking_form.postForm().catch((_) => {
            notifyError(_);
            this.loading.next(false);
            throw _;
        });
        this.event.emit({ reason: 'done', metadata: event });
        notifySuccess(i18n('APP.CONCIERGE.DESKS_BOOKING_SUCCESS'));
        this._dialog_ref.close();
        this.loading.next(false);
    }
}
