import { Component, inject, OnInit, output, signal } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
    BookingFormService,
    NewDeskFormDetailsComponent,
} from '@placeos/bookings';
import { DialogEvent, i18n, notifyError, notifySuccess } from '@placeos/common';
import {
    FullscreenModalShellComponent,
    TranslatePipe,
} from '@placeos/components';

@Component({
    selector: 'desk-book-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.DESKS_BOOK_EDIT'
                    : 'APP.CONCIERGE.DESKS_BOOK_NEW'
                ) | translate
            "
            [loading]="
                loading()
                    ? ('APP.CONCIERGE.DESKS_BOOKING_LOADING' | translate)
                    : ''
            "
            (confirm)="save()"
        >
            <desk-form-details [form]="form" [model_input]="model" />
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        NewDeskFormDetailsComponent,
        TranslatePipe,
    ],
})
export class DeskBookModalComponent implements OnInit {
    private _booking_form = inject(BookingFormService);
    private _dialog_ref =
        inject<MatDialogRef<DeskBookModalComponent>>(MatDialogRef);

    public readonly event = output<DialogEvent>();
    public readonly loading = signal(false);

    public get form() {
        return this._booking_form.form;
    }

    public get model() {
        return this._booking_form.model;
    }

    public ngOnInit() {
        this._booking_form.newForm('desk');
    }

    /**
     * Post the desk booking from the modal's confirm button. A failure (for
     * example invalid form fields) shows an error notification and keeps the
     * modal open. It does not reject, because the template event handler
     * cannot catch a rejection.
     */
    public async save() {
        this.loading.set(true);
        this.model.update((m) => ({ ...m, booking_type: 'desk' }));
        const is_group = !!this._booking_form.options()?.group;
        let method = () => this._booking_form.postForm();
        if (is_group) {
            method = () => this._booking_form.postFormForGroup();
        }
        let event: Awaited<ReturnType<typeof method>>;
        try {
            event = await method();
        } catch (e) {
            // Errors are strings (validation) or HTTP error responses.
            const is_conflict = (e as { status?: number })?.status === 409;
            notifyError(
                is_conflict
                    ? i18n('APP.CONCIERGE.DESKS_ASSIGN_CONFLICT_ERROR')
                    : (e as string),
            );
            this.loading.set(false);
            return;
        }
        this.event.emit({ reason: 'done', metadata: event });
        notifySuccess(i18n('APP.CONCIERGE.DESKS_BOOKING_SUCCESS'));
        this._dialog_ref.close();
        this.loading.set(false);
    }
}
