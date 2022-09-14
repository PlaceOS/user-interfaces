import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { currentUser, SettingsService } from '@placeos/common';

import { CalendarEvent } from 'libs/events/src/lib/event.class';
import { Space } from 'libs/spaces/src/lib/space.class';
import { EventFormService } from 'libs/events/src/lib/event-form.service';

export interface ExploreBookingModalData {
    space: Space;
}

@Component({
    selector: 'explore-booking-modal',
    template: `
        <header>
            <h2>New Booking</h2>
            <div class="flex-1"></div>
            <button *ngIf="!(loading | async)" mat-icon-button mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <ng-container *ngIf="!(loading | async); else load_state">
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
                            [time]="form.value.date"
                            [max]="max_duration"
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
                <p>{{ loading | async }}</p>
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
    public readonly loading = this._event_form.loading;

    public get form() {
        return this._event_form.form;
    }

    public get max_duration() {
        return this._settings.get('app.events.max_duration') || 4 * 60;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: ExploreBookingModalData,
        private _settings: SettingsService,
        private _event_form: EventFormService,
        private _dialog_ref: MatDialogRef<ExploreBookingModalComponent>
    ) {}

    public ngOnInit() {
        this._event_form.newForm();
        this.form.patchValue({
            resources: [this._data.space],
            host: currentUser().email,
            organiser: currentUser(),
        });
    }

    public async save() {
        await this._event_form.postForm();
        this._dialog_ref.close();
    }
}
