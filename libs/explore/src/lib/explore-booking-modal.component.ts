import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    currentUser,
    notifyError,
    notifySuccess,
    SettingsService,
} from '@placeos/common';

import { Space } from 'libs/spaces/src/lib/space.class';
import { EventFormService } from 'libs/events/src/lib/event-form.service';
import { Router } from '@angular/router';

export interface ExploreBookingModalData {
    space: Space;
}

@Component({
    selector: 'explore-booking-modal',
    template: `
        <header>
            <h2 i18n>New Booking</h2>
            <div class="flex-1"></div>
            <button *ngIf="!(loading | async)" icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <ng-container *ngIf="!(loading | async); else load_state">
            <main *ngIf="form" [formGroup]="form" class="p-4 max-w-[85vw]">
                <div class="flex flex-col">
                    <label for="title">Title<span>*</span>:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="title"
                            formControlName="title"
                            placeholder="Booking Title"
                            i18n-placeholder
                        />
                        <mat-error i18n>Booking title is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col" *ngIf="can_book_for_others">
                    <label for="host">Host<span>*</span>:</label>
                    <a-user-search-field
                        name="host"
                        formControlName="organiser"
                        class="mb-4"
                    ></a-user-search-field>
                </div>
                <div class="flex flex-col">
                    <label i18n>Space:</label>
                    <div
                        name="space"
                        class="px-4 py-3 border border-base-200 rounded w-full mb-4"
                    >
                        {{
                            form.controls.resources?.value[0]?.display_name ||
                                form.controls.resources?.value[0]?.name
                        }}
                    </div>
                </div>
                <div class="flex sm:space-x-4 flex-wrap">
                    <div
                        class="flex flex-col flex-1 w-full sm:w-auto"
                        *ngIf="form.controls.date"
                    >
                        <label i18n>Date:</label>
                        <div
                            class="px-4 py-3 border border-base-200 rounded w-full mb-4"
                        >
                            {{ form.value.date | date: 'mediumDate' }} at
                            {{ form.value.date | date: time_format }}
                        </div>
                    </div>
                    <div
                        class="flex flex-col w-full sm:w-auto"
                        *ngIf="form.controls.duration"
                    >
                        <label i18n>Duration:</label>
                        <a-duration-field
                            formControlName="duration"
                            [time]="form.value.date"
                            [max]="max_duration"
                            class="w-full"
                            [use_24hr]="use_24hr_time"
                        ></a-duration-field>
                    </div>
                </div>
            </main>
            <footer class="flex justify-center p-2 border-t border-base-200">
                <button btn matRipple class="w-32" (click)="save()" i18n>
                    Save
                </button>
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

    public get can_book_for_others() {
        return this._settings.get('app.events.can_book_for_others');
    }

    public get use_24hr_time() {
        return this._settings.get('app.use_24_hour_time');
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: ExploreBookingModalData,
        private _settings: SettingsService,
        private _event_form: EventFormService,
        private _dialog_ref: MatDialogRef<ExploreBookingModalComponent>,
        private _router: Router
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
        await this._event_form.postForm().catch((_) => {
            notifyError(_);
            throw _;
        });
        if (this._settings.app_name.toLowerCase().includes('workplace')) {
            this._router.navigate(['/book', 'meeting', 'success']);
        } else {
            notifySuccess('Successfully booked room.');
        }
        this._dialog_ref.close();
    }
}
