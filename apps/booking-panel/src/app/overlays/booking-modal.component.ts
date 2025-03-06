import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import {
    AsyncHandler,
    currentUser,
    DialogEvent,
    getInvalidFields,
    HashMap,
    i18n,
    log,
} from '@placeos/common';
import { Space } from '@placeos/spaces';
import { getModule } from '@placeos/ts-client';
import { User } from '@placeos/users';
import { of } from 'rxjs';
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
    });
    const result = await Promise.race([
        ref.componentInstance.event
            .pipe(first((_) => _.reason === 'done'))
            .toPromise(),
        ref.afterClosed().toPromise(),
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
            class="absolute left-0 top-0 z-50 m-4 h-screen w-screen -translate-x-1/2 -translate-y-1/2"
        >
            <div class="mx-auto w-[32rem] overflow-auto rounded bg-base-100">
                <header
                    class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
                >
                    <h2 class="px-2 text-xl font-medium">
                        {{ 'APP.BOOKING_PANEL.BOOKING_NEW' | translate }}
                    </h2>
                    <button icon matRipple mat-dialog-close *ngIf="!loading">
                        <app-icon>close</app-icon>
                    </button>
                </header>
                <form
                    *ngIf="form && !loading; else load_state"
                    [formGroup]="form"
                    class="w-full px-4"
                >
                    <div
                        class="field"
                        *ngIf="!hide_host && form.controls.organiser"
                    >
                        <label for="host"
                            >{{ 'APP.BOOKING_PANEL.BOOKING_HOST' | translate
                            }}<span>*</span></label
                        >
                        <a-user-search-field
                            name="host"
                            [query_fn]="searchStaff"
                            formControlName="organiser"
                            class="mb-2"
                        ></a-user-search-field>
                    </div>
                    <div class="flex space-x-2">
                        <div
                            class="flex-1"
                            *ngIf="form.controls.date && future"
                        >
                            <label for="start-time">{{
                                'FORM.TIME_START' | translate
                            }}</label>
                            <a-time-field
                                name="start-time"
                                formControlName="date"
                            ></a-time-field>
                        </div>
                        <div class="flex-1" *ngIf="form.controls.duration">
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
                    </div>
                    <div class="flex flex-col" *ngIf="form.controls.title">
                        <label for="title">{{
                            'FORM.TITLE' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="title"
                                [placeholder]="'FORM.TITLE' | translate"
                                formControlName="title"
                            />
                        </mat-form-field>
                    </div>
                </form>
                <footer
                    *ngIf="!loading"
                    class="flex w-full items-center justify-end space-x-2 border-t border-base-200 px-4 py-2"
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
            </div>
        </div>
        <ng-template #load_state>
            <div class="flex flex-col items-center p-8">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>
                    {{ 'APP.BOOKING_PANEL.BOOKING_LOADING' | translate }}
                </p>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class BookingModalComponent extends AsyncHandler {
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
        organiser: new FormControl<User>(this._data.user || null, [
            Validators.required,
        ]),
        room_ids: new FormControl<string[]>([this._data.space?.email || '']),
        date: new FormControl(this._data.date || new Date().valueOf()),
        duration: new FormControl(Math.min(this._data.min_duration || 15, 30)),
        title: new FormControl(`${this._data.title || ''}`),
    });

    constructor(@Inject(MAT_DIALOG_DATA) private _data: BookingModalData) {
        super();
        if (this._data.disable_book_now_host) {
            this.form.controls.organiser.setValidators([]);
            this.hide_host = true;
        } else {
            this.form.patchValue({
                organiser: this._data.user || currentUser(),
            });
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
            return log(
                'PANEL',
                i18n(`FORM.INVALID_FIELDS`, {
                    field_list: getInvalidFields(this.form).join(', '),
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
