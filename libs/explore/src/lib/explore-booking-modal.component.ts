import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { notifyError, notifySuccess } from '@placeos/common';
import { CalendarEvent, generateEventForm, saveEvent } from '@placeos/events';
import { Space } from '@placeos/spaces';
import { querySpaceAvailability } from '@placeos/calendar';

export interface ExploreBookingModalData {
    space: Space;
}

@Component({
    selector: 'explore-booking-modal',
    template: `
        <header>
            <h2>New Booking</h2>
            <div class="flex-1"></div>
            <button *ngIf="!loading" mat-icon-button mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <ng-container *ngIf="!loading; else load_state">
            <main *ngIf="form" [formGroup]="form" class="p-4">
                <div class="flex flex-col">
                    <label for="title">Title<span>*</span>:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="title"
                            formControlName="title"
                            placeholder="Booking Title"
                        />
                        <mat-error>Booking title is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label>Space:</label>
                    <div name="space" class="sm:mt-4 mb-4">
                        {{
                            form.controls.resources?.value[0]?.display_name ||
                                form.controls.resources?.value[0]?.name
                        }}
                    </div>
                </div>
                <div class="flex sm:space-x-4 flex-wrap">
                    <div class="flex flex-col" *ngIf="form.controls.date">
                        <label>Date:</label>
                        <div class="sm:mt-4 mb-4">
                            {{ form.controls.date?.value | date: 'medium' }}
                        </div>
                    </div>
                    <div class="flex flex-col" *ngIf="form.controls.duration">
                        <label>Duration:</label>
                        <a-duration-field
                            formControlName="duration"
                        ></a-duration-field>
                    </div>
                </div>
            </main>
            <footer class="flex justify-center p-2 border-t border-gray-200">
                <button mat-button (click)="save()">Save</button>
            </footer>
        </ng-container>
        <ng-template #load_state>
            <div load class="h-64 flex flex-col items-center justify-center">
                <mat-spinner class="m-4" [diameter]="48"></mat-spinner>
                <p>{{ loading }}</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            header {
                max-width: calc(100vw + 100%);
            }

            [load] {
                width: 32rem;
                max-width: calc(100vw - 2rem);
            }
        `,
    ],
})
export class ExploreBookingModalComponent implements OnInit {
    public booking: CalendarEvent;
    public form: FormGroup;
    public loading = '';

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: ExploreBookingModalData,
        private _dialog_ref: MatDialogRef<ExploreBookingModalComponent>
    ) {}

    public ngOnInit() {
        this.booking = new CalendarEvent({
            attendees: [{ ...(this._data.space || {}), resource: true } as any],
        });
        this.form = generateEventForm(this.booking);
    }

    public async save() {
        this.form.markAllAsTouched();
        const on_error = (msg) => {
            this.loading = '';
            notifyError(msg);
            this._dialog_ref.disableClose = false;
        };
        if (!this.form.valid) {
            const list = [];
            for (const key in this.form.controls) {
                if (this.form.controls[key].invalid) {
                    list.push(key);
                }
            }
            throw on_error(
                `Some form fields are not valid: [${list.join(', ')}]`
            );
        }
        this._dialog_ref.disableClose = true;
        this.loading = 'Checking space availability...';
        const spaces = await querySpaceAvailability({
            system_ids: this.form.controls.resources.value
                ?.map((s) => s.id)
                .join(','),
            period_start: Math.floor(this.form.value.date / 1000),
            period_end:
                Math.floor(this.form.value.date / 1000) +
                this.form.value.duration * 60,
        })
            .toPromise()
            .catch((e) => {
                on_error(
                    'Space is unavailble for the selected time and duration'
                );
                throw e;
            });
        if (spaces.length <= 0) {
            return on_error(
                'Space is unavailble for the selected time and duration'
            );
        }
        this.loading = 'Creating booking...';
        await saveEvent(new CalendarEvent(this.form.value))
            .toPromise()
            .catch((e) => {
                on_error('Error creating booking.');
                throw e;
            });
        notifySuccess(
            `Successfully created booking in ${
                this._data.space.display_name || this._data.space.name
            }`
        );
        this._dialog_ref.close();
    }
}
