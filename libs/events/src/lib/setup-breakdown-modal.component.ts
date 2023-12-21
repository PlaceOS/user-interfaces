import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CalendarEvent } from './event.class';
import { saveEvent, updateEventMetadata } from './events.fn';
import { currentUser, notifyError, notifySuccess } from '@placeos/common';

@Component({
    selector: 'setup-breakdown-modal',
    template: `
        <header class="space-x-4 min-h-16">
            <h2>Set Event's Setup and Breakdown</h2>
            <button btn icon mat-dialog-close matRipple *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="p-4 min-w-[20rem] w-full"
            [formGroup]="form"
            *ngIf="!loading; else load_state"
        >
            <div class="flex flex-col space-y-2">
                <label for="setup">Setup Duration</label>
                <a-duration-field
                    name="setup"
                    formControlName="setup"
                    [min]="0"
                    [custom_options]="[5, 10]"
                ></a-duration-field>
            </div>
            <div class="flex flex-col space-y-2">
                <label for="breakdown">Breakdown Duration</label>
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
            class="flex justify-end px-4 py-2 border-t border-base-200"
        >
            <button btn matRipple (click)="save()">Save Changes</button>
        </footer>
        <ng-template #load_state>
            <div class="flex flex-col items-center justify-center h-64 w-64">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="text-center p-4">
                    Saving setup and breakdown durations...
                </p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class SetupBreakdownModalComponent {
    public loading = false;
    public readonly form = new FormGroup({
        setup: new FormControl(this._event.setup_time || 0),
        breakdown: new FormControl(this._event.breakdown_time || 0),
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) private _event: CalendarEvent,
        private _dialog_ref: MatDialogRef<SetupBreakdownModalComponent>
    ) {}

    public async save() {
        this.loading = true;
        this._dialog_ref.disableClose = true;
        const { host, creator } = this._event;
        const query: any = {
            system_id: this._event?.resources[0]?.id || this._event?.system?.id,
        };
        let event = await saveEvent(
            new CalendarEvent({
                ...this._event,
                setup_time: this.form.value.setup,
                breakdown_time: this.form.value.breakdown,
            }).toJSON(),
            query
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
