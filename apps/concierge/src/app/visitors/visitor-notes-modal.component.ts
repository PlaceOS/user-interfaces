import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { updateBooking } from '@placeos/bookings';
import { Booking, i18n, notifyError, notifySuccess } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';

@Component({
    selector: 'visitor-notes-modal',
    template: `
        <header>
            <h2>
                {{ 'APP.CONCIERGE.VISITORS_NOTES_HEADERS' | translate }}
                <span
                    class="bg-base-200 ml-2 rounded-sm px-2 py-1 text-sm font-medium"
                >
                    {{ item?.asset_name }}
                </span>
            </h2>
            @if (!loading()) {
                <button icon mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main class="max-h-[65vh] w-xl overflow-auto p-4">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <textarea
                        matInput
                        [(ngModel)]="notes"
                        class="h-[60vh] max-h-256 resize-none"
                        [placeholder]="
                            'APP.CONCIERGE.VISITORS_NOTES_HEADERS' | translate
                        "
                    ></textarea>
                </mat-form-field>
            </main>
        } @else {
            <div
                loading
                class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.VISITORS_NOTES_SAVING' | translate }}</p>
            </div>
        }
        @if (!loading()) {
            <footer
                class="border-base-200 flex justify-end space-x-2 border-t p-2"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        MatRippleModule,
        TranslatePipe,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        IconComponent,
        FormsModule,
    ],
})
export class VisitorNotesModalComponent {
    private _data = inject<{
        item: Booking;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<VisitorNotesModalComponent>>(MatDialogRef);

    public item: Booking = this._data.item;
    public readonly notes = signal(this.item.extension_data?.notes || '');
    public readonly loading = signal(false);

    constructor() {
        const _data = this._data;

        this.item = _data.item;
    }

    public async save() {
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        await updateBooking(this.item.id, {
            ...this.item.toJSON(),
            extension_data: {
                ...this.item.extension_data,
                notes: this.notes(),
            },
        }).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.VISITORS_NOTES_ERROR', { error: e }),
            );
            this._dialog_ref.disableClose = false;
            this.loading.set(false);
            throw e;
        });
        this.loading.set(false);
        notifySuccess(i18n('APP.CONCIERGE.VISITORS_NOTES_SUCCESS'));
        this._dialog_ref.close();
    }
}
