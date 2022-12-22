import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { DialogEvent } from '@placeos/common';
import {
    SpaceSelectModalComponent,
    SpaceSelectModalData,
} from '@placeos/spaces';
import { first } from 'rxjs/operators';

@Component({
    selector: 'event-form',
    template: `
        <form *ngIf="form" [formGroup]="form">
            <div class="flex flex-col">
                <label for="title">Title<span>*</span>:</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="title"
                        formControlName="title"
                        placeholder="Meeting Title"
                    />
                    <mat-error>A valid title is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex flex-col">
                <label for="date">Date<span>*</span>:</label>
                <a-date-field name="date" formControlName="date"></a-date-field>
            </div>
            <div class="flex space-x-2">
                <div class="flex flex-col flex-1">
                    <label for="start-time">Start Time<span>*</span>:</label>
                    <a-time-field
                        name="start-time"
                        [ngModel]="form.get('date').value"
                        (ngModelChange)="form.patchValue({ date: $event })"
                        [ngModelOptions]="{ standalone: true }"
                    ></a-time-field>
                </div>
                <div class="flex flex-col flex-1">
                    <label for="duration">Duration<span>*</span>:</label>
                    <a-duration-field
                        name="duration"
                        [time]="form.controls?.date?.value"
                        formControlName="duration"
                    ></a-duration-field>
                </div>
            </div>
            <div class="flex flex-col flex-1">
                <label for="organiser">Host<span>*</span>:</label>
                <a-user-search-field
                    name="organiser"
                    formControlName="organiser"
                ></a-user-search-field>
            </div>
            <div class="flex flex-col flex-1">
                <label for="attendees">Attendees<span>*</span>:</label>
                <a-user-list-field
                    name="attendees"
                    formControlName="attendees"
                ></a-user-list-field>
            </div>
            <div class="flex flex-col flex-1">
                <label for="space">Space<span>*</span>:</label>
                <an-action-field name="space" (onAction)="selectSpace()">{{
                    spaces
                }}</an-action-field>
            </div>
        </form>
    `,
    styles: [``],
})
export class EventFormComponent {
    @Input() public form: FormGroup;

    public get spaces() {
        return (
            this.form.controls?.resources?.value
                ?.map((i) => i.display_name || i.name)
                .join(', ') || 'Select a space'
        );
    }

    constructor(private _dialog: MatDialog) {}

    public async selectSpace() {
        const ref = this._dialog.open<
            SpaceSelectModalComponent,
            SpaceSelectModalData
        >(SpaceSelectModalComponent, {
            data: {
                spaces: this.form.controls?.resources?.value,
                date: this.form.controls?.date?.value,
                duration: this.form.controls?.duration?.value,
            },
        });
        const success = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_: DialogEvent) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (success?.reason === 'done') {
            this.form.patchValue({ resources: success.metadata });
        }
        ref.close();
    }
}
