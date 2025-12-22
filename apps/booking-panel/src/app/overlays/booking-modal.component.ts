import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
    AsyncHandler,
    DialogEvent,
    getInvalidFields,
    HashMap,
    i18n,
    notifyError,
    Space,
    User,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    DurationFieldComponent,
    TimeFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { getModule } from '@placeos/ts-client';
import { lastValueFrom, of } from 'rxjs';
import { first, shareReplay, switchMap } from 'rxjs/operators';

export interface BookingModalData extends HashMap {
    title?: string;
    space?: Space;
    date?: number;
    disable_book_now_host?: boolean;
    min_duration?: number;
    max_duration?: number;
}

export async function openBookingModal(
    data: BookingModalData,
    dialog: MatDialog,
) {
    const ref = dialog.open(BookingModalComponent, {
        data,
        backdropClass: ['pointer-events-none', 'bg-black', 'opacity-60'],
    });
    const result = await Promise.race([
        lastValueFrom(
            ref.componentInstance.event.pipe(first((_) => _.reason === 'done')),
        ),
        lastValueFrom(ref.afterClosed()),
    ]).catch((_) => ({}));
    return {
        ...result,
        close: () => ref.close(),
    };
}

@Component({
    selector: 'booking-modal',
    template: `
        <div
            class="absolute top-0 left-0 z-50 h-screen w-screen -translate-x-1/2 -translate-y-1/2 sm:m-4"
        >
            <div
                class="bg-base-100 mx-auto h-full w-full overflow-auto rounded-sm sm:h-auto sm:w-lg"
            >
                <header
                    class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
                >
                    <h2 class="px-2 text-xl font-medium">
                        {{ 'APP.BOOKING_PANEL.BOOKING_NEW' | translate }}
                    </h2>
                    @if (!loading) {
                        <button icon matRipple mat-dialog-close>
                            <icon>close</icon>
                        </button>
                    }
                </header>
                @if (form && !loading) {
                    <div
                        form
                        [formGroup]="form"
                        class="max-h-[calc(100vh-12rem)] w-full overflow-auto px-4"
                    >
                        @if (!hide_host && form.controls.organiser) {
                            <div class="field">
                                <label for="host"
                                    >{{
                                        'APP.BOOKING_PANEL.BOOKING_HOST'
                                            | translate
                                    }}<span>*</span></label
                                >
                                <a-user-search-field
                                    name="host"
                                    [query_fn]="searchStaff"
                                    formControlName="organiser"
                                    class="mb-2"
                                    [error]="'Host is required'"
                                ></a-user-search-field>
                            </div>
                        }
                        <div class="flex space-x-2">
                            @if (form.controls.date && future) {
                                <div class="flex-1">
                                    <label for="start-time">{{
                                        'FORM.TIME_START' | translate
                                    }}</label>
                                    <a-time-field
                                        name="start-time"
                                        formControlName="date"
                                    ></a-time-field>
                                </div>
                            }
                            @if (form.controls.duration) {
                                <div class="flex-1">
                                    <label for="duration">{{
                                        'FORM.DURATION' | translate
                                    }}</label>
                                    <a-duration-field
                                        [min]="min_duration"
                                        [max]="max_duration"
                                        [step]="max_duration < 120 ? 5 : 15"
                                        name="duration"
                                        formControlName="duration"
                                    ></a-duration-field>
                                </div>
                            }
                        </div>
                        @if (form.controls.title) {
                            <div class="flex flex-col">
                                <label for="title">{{
                                    'FORM.TITLE' | translate
                                }}</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        name="title"
                                        [placeholder]="'FORM.TITLE' | translate"
                                        formControlName="title"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                } @else {
                    <div
                        class="flex h-64 flex-col items-center justify-center space-y-4 p-8"
                    >
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <p>
                            {{
                                'APP.BOOKING_PANEL.BOOKING_LOADING' | translate
                            }}
                        </p>
                    </div>
                }
                @if (!loading) {
                    <footer
                        class="bg-base-200 sticky bottom-0 z-10 m-2 flex w-[calc(100%-1rem)] justify-end rounded-sm border-none p-2"
                    >
                        <button
                            btn
                            matRipple
                            name="save"
                            class="w-32"
                            (click)="save()"
                        >
                            {{ 'COMMON.SAVE' | translate }}
                        </button>
                    </footer>
                }
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        MatRippleModule,
        TranslatePipe,
        IconComponent,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        DurationFieldComponent,
        TimeFieldComponent,
        UserSearchFieldComponent,
        ReactiveFormsModule,
        MatDialogModule,
    ],
})
export class BookingModalComponent extends AsyncHandler implements OnInit {
    private _data: BookingModalData = inject(MAT_DIALOG_DATA);
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether modal is closing */
    public closing: boolean;
    /** Whether the modal is processing a booking request */
    public loading: boolean;

    public hide_host = false;
    public future = this._data.future;
    public min_duration = this._data.min_duration || 15;
    public max_duration = this._data.max_duration || 480;
    /** Form */
    public form: FormGroup = new FormGroup({
        organiser: new FormControl<User>(this._data.user || null),
        room_ids: new FormControl<string[]>([this._data.space?.email || '']),
        date: new FormControl(this._data.date || new Date().valueOf()),
        duration: new FormControl(Math.min(this._data.min_duration || 15, 30)),
        title: new FormControl(`${this._data.title || ''}`),
    });

    public ngOnInit() {
        if (this._data.disable_book_now_host || this._data.user) {
            this.form.controls.organiser.setValidators([]);
            this.hide_host = true;
        } else {
            this.form.controls.organiser.setValidators([Validators.required]);
            this.form.patchValue({ organiser: this._data.user });
        }
    }

    public searchStaff = (q: string) =>
        of(q).pipe(
            switchMap(() => {
                const mod = getModule(this._data.space?.id, 'Bookings');
                if (!mod) return of([]);
                return mod.execute('list_users', [q]).catch(() => []);
            }),
            shareReplay(1),
        );

    /**
     * Post form data
     */
    public save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                i18n(`FORM.INVALID_FIELDS`, {
                    field_list: getInvalidFields(this.form, {
                        organiser: 'Booked By',
                        date: 'Date',
                        duration: 'Duration',
                        title: 'Title',
                    }).join(', '),
                }),
            );
        }
        if (!this.future) this.form.patchValue({ date: new Date().valueOf() });
        this.loading = true;
        this.event.emit({
            reason: 'done',
            metadata: {
                ...this.form.value,
                user: this.form.value.organiser,
                title: this.form.value.title || 'Ad-Hoc Panel Booking',
            },
        });
    }
}
