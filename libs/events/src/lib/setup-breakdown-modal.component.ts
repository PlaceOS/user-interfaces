import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { notifyError, notifySuccess } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CalendarEvent } from './event.class';
import { saveEvent, updateEventMetadata } from './events.fn';

@Component({
    selector: 'setup-breakdown-modal',
    template: `
        <header class="min-h-16 space-x-4">
            <h2>{{ 'CALENDAR_EVENT.SETUP_BREAKDOWN_HEADER' | translate }}</h2>
            <button btn icon mat-dialog-close matRipple *ngIf="!loading">
                <icon>close</icon>
            </button>
        </header>
        <main
            class="w-full min-w-[20rem] p-4"
            [formGroup]="form"
            *ngIf="!loading; else load_state"
        >
            <div class="flex flex-col space-y-2">
                <label for="setup">{{
                    'CALENDAR_EVENT.SETUP_DURATION' | translate
                }}</label>
                <a-duration-field
                    name="setup"
                    formControlName="setup"
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
                    name="breakdown"
                    [min]="0"
                    formControlName="breakdown"
                    [custom_options]="[5, 10]"
                ></a-duration-field>
            </div>
        </main>
        <footer
            *ngIf="!loading"
            class="flex justify-end border-t border-base-200 px-4 py-2"
        >
            <button btn matRipple (click)="save()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
        <ng-template #load_state>
            <div class="flex h-64 w-64 flex-col items-center justify-center">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="p-4 text-center">
                    Saving setup and breakdown durations...
                </p>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatRippleModule,
        TranslatePipe,
        IconComponent,
        MatDialogModule,
    ],
})
export class SetupBreakdownModalComponent {
    public loading = false;
    public readonly form = new FormGroup({
        setup: new FormControl(this._event.setup_time || 0),
        breakdown: new FormControl(this._event.breakdown_time || 0),
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) private _event: CalendarEvent,
        private _dialog_ref: MatDialogRef<SetupBreakdownModalComponent>,
    ) {}

    public async save() {
        this.loading = true;
        this._dialog_ref.disableClose = true;
        const { host, creator } = this._event;
        const query: any = {
            system_id: this._event?.resources[0]?.id || this._event?.system?.id,
            ical_uid: this._event?.ical_uid,
        };
        let event = await saveEvent(
            new CalendarEvent({
                ...this._event,
                setup_time: this.form.value.setup,
                breakdown_time: this.form.value.breakdown,
            }).toJSON(),
            query,
        )
            .toPromise()
            .catch((_) => null);
        if (!event) {
            event = await updateEventMetadata(this._event.id, query.system_id, {
                ...this._event.extension_data,
                setup_time: this.form.value.setup,
                breakdown_time: this.form.value.breakdown,
                setup: this.form.value.setup,
                breakdown: this.form.value.breakdown,
            } as any)
                .toPromise()
                .catch((_) => null);
        }
        if (!event) {
            this.loading = false;
            this._dialog_ref.disableClose = false;
            notifyError(`Error updating setup and breakdown.`);
            return;
        }
        notifySuccess('Succesfully updated setup and breakdown period.');
        this._dialog_ref.disableClose = false;
        this.loading = false;
        this._dialog_ref.close(event);
    }
}
