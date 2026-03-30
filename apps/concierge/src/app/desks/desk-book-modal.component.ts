import { Component, inject, OnInit, output, signal } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingFormService } from '@placeos/bookings';
import {
    DialogEvent,
    i18n,
    nextValueFrom,
    notifyError,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    TranslatePipe,
} from '@placeos/components';

import { CommonModule } from '@angular/common';
import { NewDeskFormDetailsComponent } from 'apps/workplace/src/app/book/desk-flow/desk-form-details.component';

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
                loading()
                    ? ('APP.CONCIERGE.DESKS_BOOKING_LOADING' | translate)
                    : ''
            "
            (confirm)="save()"
        >
            <desk-form-details [form]="form" />
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        CommonModule,
        FullscreenModalShellComponent,
        NewDeskFormDetailsComponent,
        TranslatePipe,
    ],
})
export class DeskBookModalComponent implements OnInit {
    private _booking_form = inject(BookingFormService);
    private _dialog_ref =
        inject<MatDialogRef<DeskBookModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);

    public readonly event = output<DialogEvent>();
    public readonly loading = signal(false);

    public get form() {
        return this._booking_form.form;
    }

    public ngOnInit() {
        if (!this.form.value.id) {
            this.form.patchValue({
                duration:
                    this._settings.get('app.desks.default_duration') || 60,
            });
        }
    }

    public async save() {
        this.loading.set(true);
        this.form.patchValue({ booking_type: 'desk' });
        let method = () => this._booking_form.postForm();
        if ((await nextValueFrom(this._booking_form.options))?.group) {
            method = () => this._booking_form.postFormForGroup();
        }
        const event = await method().catch((_) => {
            if (_?.status === 409) {
                notifyError(i18n('APP.CONCIERGE.DESKS_ASSIGN_CONFLICT_ERROR'));
            } else {
                notifyError(_);
            }
            this.loading.set(false);
            throw _;
        });
        this.event.emit({ reason: 'done', metadata: event });
        notifySuccess(i18n('APP.CONCIERGE.DESKS_BOOKING_SUCCESS'));
        this._dialog_ref.close();
        this.loading.set(false);
    }
}
