import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import {
    BookableHoursRange,
    currentUser,
    i18n,
    notifyError,
    notifySuccess,
    settingSignal,
    SettingsService,
    Space,
} from '@placeos/common';

import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { EventFormService } from 'libs/events/src/lib/event-form.service';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';

export interface ExploreBookingModalData {
    space: Space;
    alert?: [string, string];
}

@Component({
    selector: 'explore-booking-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'EXPLORE.BOOKING_HEADER' | translate }}
            </h2>
            <div class="flex-1"></div>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            @if (form) {
                <main [formGroup]="form" class="max-w-[85vw] px-4">
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
                    @if (can_book_for_others()) {
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
                            class="border-base-200 mb-4 w-full rounded-sm border px-4 py-3"
                        >
                            {{
                                form.controls.resources?.value[0]
                                    ?.display_name ||
                                    form.controls.resources?.value[0]?.name
                            }}
                        </div>
                        @if (alert()?.[0]) {
                            <div
                                class="-mt-2 mb-4 rounded-sm px-2 py-1 text-xs"
                                [class.bg-info]="alert()[0] === 'info'"
                                [class.text-info-content]="
                                    alert()[0] === 'info'
                                "
                                [class.bg-warning]="alert()[0] === 'warn'"
                                [class.text-warning-content]="
                                    alert()[0] === 'warn'
                                "
                                [class.bg-error]="alert()[0] === 'closed'"
                                [class.text-error-content]="
                                    alert()[0] === 'closed'
                                "
                            >
                                {{ alert()[1] }}
                            </div>
                        }
                    </div>
                    <div class="flex flex-wrap sm:space-x-4">
                        @if (form.controls.date) {
                            <div
                                class="flex w-full min-w-48 flex-1 flex-col sm:w-auto"
                            >
                                <label>{{ 'FORM.DATE' | translate }}:</label>
                                <div
                                    class="border-base-200 mb-4 w-full rounded-sm border px-4 py-3"
                                >
                                    {{ form.value.date | date: 'mediumDate' }}
                                    @if (!form.value.all_day) {
                                        at
                                        {{
                                            form.value.date
                                                | date: time_format()
                                        }}
                                    }
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
                                    [max]="max_duration()"
                                    [end_time]="bookable_hours()?.end"
                                    class="w-full"
                                    [use_24hr]="use_24hr_time()"
                                ></a-duration-field>
                            </div>
                        }
                    </div>
                    @if (allow_all_day()) {
                        <div class="-mt-2 mb-2 flex justify-end">
                            <mat-checkbox formControlName="all_day">
                                {{ 'COMMON.ALL_DAY' | translate }}
                            </mat-checkbox>
                        </div>
                    }
                </main>
            }
            <footer class="border-base-300 flex justify-end border-t p-2">
                <button btn matRipple class="mx-2 w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        } @else {
            <div load class="flex h-64 flex-col items-center justify-center">
                <mat-spinner class="m-4" [diameter]="48"></mat-spinner>
                <p>{{ 'CALENDAR_EVENT.CHECKING_AVAILABILITY' | translate }}</p>
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        DatePipe,
        TranslatePipe,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
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

    public readonly loading = toSignal(this._event_form.loading$);
    public readonly alert = signal(this._data.alert);

    public get form() {
        return this._event_form.form;
    }

    public readonly max_duration = settingSignal('events.max_duration', 4 * 60);

    public readonly bookable_hours = settingSignal<BookableHoursRange | null>(
        'events.bookable_hours',
        null,
    );

    public readonly can_book_for_others = settingSignal(
        'events.can_book_for_others',
        false,
    );

    public readonly use_24hr_time = settingSignal('use_24_hour_time', false);

    public readonly time_format = computed(() =>
        this.use_24hr_time() ? 'HH:mm' : 'h:mm a',
    );

    public readonly allow_all_day = settingSignal(
        'events.allow_all_day',
        false,
    );

    public ngOnInit() {
        this._event_form.newForm();
        this.form.patchValue({
            resources: [this._data.space],
            host: currentUser().email,
            organiser: currentUser(),
        });
        this.form.valueChanges.subscribe((v) => {
            this._checkAllDay(v.all_day);
        });
        this._checkAllDay(this.form.value.all_day);
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

    private _checkAllDay(value: boolean) {
        if (value) {
            this.form.controls.duration.disable({ emitEvent: false });
        } else {
            this.form.controls.duration.enable({ emitEvent: false });
        }
    }
}
