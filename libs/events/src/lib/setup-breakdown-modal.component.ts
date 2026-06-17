import { Component, inject, signal } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { CalendarEvent, notifyError, notifySuccess } from '@placeos/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { saveEvent, updateEventMetadata } from './events.fn';

@Component({
    selector: 'setup-breakdown-modal',
    template: `
        <header class="min-h-16 space-x-4">
            <h2>{{ 'CALENDAR_EVENT.SETUP_BREAKDOWN_HEADER' | translate }}</h2>
            @if (!loading()) {
                <button btn icon mat-dialog-close matRipple>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main class="w-full min-w-[20rem] p-4">
                <div class="flex flex-col space-y-2">
                    <label for="setup">{{
                        'CALENDAR_EVENT.SETUP_DURATION' | translate
                    }}</label>
                    <a-duration-field
                        [formField]="form.setup"
                        [min]="0"
                        [custom_options]="[5, 10]"
                    ></a-duration-field>
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="breakdown">
                        {{
                            'CALENDAR_EVENT.BREAKDOWN_DURATION' | translate
                        }}Breakdown Duration</label
                    >
                    <a-duration-field
                        [min]="0"
                        [formField]="form.breakdown"
                        [custom_options]="[5, 10]"
                    ></a-duration-field>
                </div>
            </main>
        } @else {
            <div class="flex h-64 w-64 flex-col items-center justify-center">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="p-4 text-center">
                    Saving setup and breakdown durations...
                </p>
            </div>
        }
        @if (!loading()) {
            <footer class="border-base-200 flex justify-end border-t px-4 py-2">
                <button btn matRipple (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `,
    styles: [``],
    imports: [
        MatRippleModule,
        TranslatePipe,
        IconComponent,
        MatDialogModule,
        DurationFieldComponent,
        MatProgressSpinnerModule,
        FormField,
    ],
})
export class SetupBreakdownModalComponent {
    private _event = inject<CalendarEvent>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<SetupBreakdownModalComponent>>(MatDialogRef);

    public loading = signal(false);
    public readonly model = signal({
        setup: this._event.setup_time || 0,
        breakdown: this._event.breakdown_time || 0,
    });
    public readonly form = form(this.model);

    public async save() {
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        const { host, creator } = this._event;
        const query: any = {
            system_id: this._event?.resources[0]?.id || this._event?.system?.id,
            ical_uid: this._event?.ical_uid,
        };
        let event = await saveEvent(
            new CalendarEvent({
                ...this._event,
                setup_time: this.model().setup,
                breakdown_time: this.model().breakdown,
            }).toJSON(),
            query,
        ).catch((_) => null);
        if (!event) {
            event = await updateEventMetadata(this._event.id, query.system_id, {
                ...this._event.extension_data,
                setup_time: this.model().setup,
                breakdown_time: this.model().breakdown,
                setup: this.model().setup,
                breakdown: this.model().breakdown,
            } as any).catch((_) => null);
        }
        if (!event) {
            this.loading.set(false);
            this._dialog_ref.disableClose = false;
            notifyError(`Error updating setup and breakdown.`);
            return;
        }
        notifySuccess('Succesfully updated setup and breakdown period.');
        this._dialog_ref.disableClose = false;
        this.loading.set(false);
        this._dialog_ref.close(event);
    }
}
