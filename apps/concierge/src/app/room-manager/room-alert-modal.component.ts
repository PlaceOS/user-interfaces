import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { PlaceSystem, showMetadata, updateMetadata } from '@placeos/ts-client';

@Component({
    selector: 'room-alert-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 mx-auto my-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium capitalize">
                {{
                    'APP.CONCIERGE.ROOMS_ALERT_HEADER'
                        | translate: { name: room.display_name || room.name }
                }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main
                class="flex max-h-[65vh] min-w-md flex-col overflow-x-hidden overflow-y-auto p-4"
            >
                <label for="status">{{ 'COMMON.STATUS' | translate }}</label>
                <mat-form-field appearance="outline">
                    <mat-select [formField]="form.status">
                        <mat-option value="">{{
                            'APP.CONCIERGE.ROOMS_ALERT_TYPE_NONE' | translate
                        }}</mat-option>
                        <mat-option value="info">{{
                            'APP.CONCIERGE.ROOMS_ALERT_TYPE_INFO' | translate
                        }}</mat-option>
                        <mat-option value="warn">{{
                            'APP.CONCIERGE.ROOMS_ALERT_TYPE_WARNING' | translate
                        }}</mat-option>
                        <mat-option value="closed">{{
                            'APP.CONCIERGE.ROOMS_ALERT_TYPE_CLOSED' | translate
                        }}</mat-option>
                    </mat-select>
                </mat-form-field>
                <label for="message">{{
                    'APP.CONCIERGE.ROOMS_ALERT_MSG' | translate
                }}</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        [formField]="form.message"
                    ></textarea>
                </mat-form-field>
            </main>
        } @else {
            <div class="flex h-64 w-64 flex-col items-center justify-center">
                <mat-spinner diameter="32"></mat-spinner>
                <p class="mt-4">
                    {{ 'APP.CONCIERGE.ROOMS_SAVING' | translate }}
                </p>
            </div>
        }
        @if (!loading()) {
            <footer class="border-base-200 flex justify-end border-t p-2">
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        MatDialogModule,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormField,
        TranslatePipe,
        IconComponent,
    ],
})
export class RoomAlertModalComponent {
    private _data = inject<{
        room: PlaceSystem;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<RoomAlertModalComponent>>(MatDialogRef);
    private _org = inject(OrganisationService);

    public readonly loading = signal(false);
    public readonly room: PlaceSystem = this._data.room;
    public readonly model = signal({
        status: '',
        message: '',
    });
    public readonly form = form(this.model);

    constructor() {
        const alert = (this.room as any).alert || {};
        this.model.update((m) => ({
            ...m,
            status: alert.status ?? m.status,
            message: alert.message ?? m.message,
        }));
    }

    public async save() {
        this.loading.set(true);
        const metadata = await showMetadata(
            this._org.organisation.id,
            'room_alerts',
        ).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.ROOMS_ALERT_LOAD_ERROR', {
                    error: e.message || e,
                }),
            );
            this.loading.set(false);
            throw e;
        });
        const alert = this.model();
        if (alert.status === '') {
            delete metadata.details[this.room.id];
        } else {
            metadata.details[this.room.id] = [alert.status, alert.message];
        }
        await updateMetadata(this._org.organisation.id, {
            name: 'room_alerts',
            details: metadata.details,
            editors: metadata.editors || [],
            description: 'Details for room alerts',
        }).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.ROOMS_ALERT_SAVE_ERROR', {
                    error: e.message || e,
                }),
            );
            this.loading.set(false);
            throw e;
        });
        notifySuccess(i18n('APP.CONCIERGE.ROOMS_ALERT_SAVE_SUCCESS'));
        this._dialog_ref.close(true);
    }
}
