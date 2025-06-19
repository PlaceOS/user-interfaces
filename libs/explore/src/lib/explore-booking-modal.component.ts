import { Component, inject, OnInit } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import {
    currentUser,
    i18n,
    notifyError,
    notifySuccess,
    SettingsService,
} from '@placeos/common';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { EventFormService } from 'libs/events/src/lib/new-event-form.service';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';
import { Space } from 'libs/spaces/src/lib/space.class';

export interface ExploreBookingModalData {
    space: Space;
    alert?: [string, string];
}

@Component({
    selector: 'explore-booking-modal',
    template: `
        <header>
            <h2>{{ 'EXPLORE.BOOKING_HEADER' | translate }}</h2>
            <div class="flex-1"></div>
            @if (!(loading | async)) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!(loading | async)) {
            @if (form) {
                <main [formGroup]="form" class="max-w-[85vw] p-4">
                    <div class="flex flex-col">
                        <label for="title">Title<span>*</span>:</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="title"
                                formControlName="title"
                                placeholder="Booking Title"
                            />
                            <mat-error>{{
                                'EXPLORE.BOOKING_TITLE_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    @if (can_book_for_others) {
                        <div class="flex flex-col">
                            <label for="host"
                                >{{ 'FORM.HOST' | translate
                                }}<span>*</span>:</label
                            >
                            <a-user-search-field
                                name="host"
                                formControlName="organiser"
                                class="mb-4"
                            ></a-user-search-field>
                        </div>
                    }
                    <div class="flex flex-col">
                        <label
                            >{{ 'EXPLORE.BOOKING_SPACE' | translate }}:</label
                        >
                        <div
                            name="space"
                            class="mb-4 w-full rounded border border-base-200 px-4 py-3"
                        >
                            {{
                                form.controls.resources?.value[0]
                                    ?.display_name ||
                                    form.controls.resources?.value[0]?.name
                            }}
                        </div>
                        @if (alert) {
                            <div
                                class="-mt-2 mb-4 rounded px-2 py-1 text-xs"
                                [class.bg-info]="alert[0] === 'info'"
                                [class.text-info-content]="alert[0] === 'info'"
                                [class.bg-warning]="alert[0] === 'warn'"
                                [class.text-warning-content]="
                                    alert[0] === 'warn'
                                "
                                [class.bg-error]="alert[0] === 'closed'"
                                [class.text-error-content]="
                                    alert[0] === 'closed'
                                "
                            >
                                {{ alert[1] }}
                            </div>
                        }
                    </div>
                    <div class="flex flex-wrap sm:space-x-4">
                        @if (form.controls.date) {
                            <div class="flex w-full flex-1 flex-col sm:w-auto">
                                <label>{{ 'FORM.DATE' | translate }}:</label>
                                <div
                                    class="mb-4 w-full rounded border border-base-200 px-4 py-3"
                                >
                                    {{ form.value.date | date: 'mediumDate' }}
                                    at
                                    {{ form.value.date | date: time_format }}
                                </div>
                            </div>
                        }
                        @if (form.controls.duration) {
                            <div class="flex w-full flex-col sm:w-auto">
                                <label
                                    >{{ 'FORM.DURATION' | translate }}:</label
                                >
                                <a-duration-field
                                    formControlName="duration"
                                    [time]="form.value.date"
                                    [max]="max_duration"
                                    class="w-full"
                                    [use_24hr]="use_24hr_time"
                                ></a-duration-field>
                            </div>
                        }
                    </div>
                </main>
            }
            <footer class="flex justify-center border-t border-base-200 p-2">
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        } @else {
            <div load class="flex h-64 flex-col items-center justify-center">
                <mat-spinner class="m-4" [diameter]="48"></mat-spinner>
                <p>{{ loading | async }}</p>
            </div>
        }
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
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        MatProgressSpinnerModule,
        DurationFieldComponent,
        UserSearchFieldComponent,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        IconComponent,
        MatDialogModule,
    ],
})
export class ExploreBookingModalComponent implements OnInit {
    private _data = inject<ExploreBookingModalData>(MAT_DIALOG_DATA);
    private _settings = inject(SettingsService);
    private _event_form = inject(EventFormService);
    private _dialog_ref =
        inject<MatDialogRef<ExploreBookingModalComponent>>(MatDialogRef);
    private _router = inject(Router);

    public readonly loading = this._event_form.loading$;
    public readonly alert = this._data.alert;

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
            notifySuccess(i18n('EXPLORE.BOOKING_SUCCESS'));
        }
        this._dialog_ref.close();
    }
}
