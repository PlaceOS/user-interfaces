import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
    output,
    signal,
} from '@angular/core';
import { form, FormField, submit, validate } from '@angular/forms/signals';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
    AsyncHandler,
    DialogEvent,
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
        disableClose: true,
        backdropClass: ['pointer-events-none', 'bg-black', 'opacity-60'],
    });
    const result = await new Promise<DialogEvent>((resolve) => {
        let resolved = false;
        let event_sub;
        const finish = (event?: DialogEvent) => {
            if (resolved) return;
            resolved = true;
            event_sub?.unsubscribe();
            resolve(event || ({} as DialogEvent));
        };
        const close = ref.close.bind(ref);
        ref.close = ((event?: DialogEvent) => {
            finish(event);
            close(event);
        }) as any;
        event_sub = ref.componentInstance.event.subscribe((event) => {
            finish(event);
        });
    });
    return {
        ...result,
        close: () => ref.close(),
    };
}

@Component({
    selector: 'booking-modal',
    template: `
        <div
            class="bg-base-100 mx-auto h-full w-full overflow-auto rounded-sm sm:h-auto sm:w-lg"
        >
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{ 'APP.BOOKING_PANEL.BOOKING_NEW' | translate }}
                </h2>
                @if (!loading()) {
                    <button icon matRipple (click)="cancel()">
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <div
                    form
                    class="max-h-[calc(100vh-12rem)] w-full overflow-auto px-4"
                >
                    @if (!hide_host()) {
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
                                [formField]="form.organiser"
                                class="mb-2"
                                [error]="'Host is required'"
                            ></a-user-search-field>
                        </div>
                    }
                    <div class="flex space-x-2">
                        @if (future) {
                            <div class="flex-1">
                                <label for="start-time">{{
                                    'FORM.TIME_START' | translate
                                }}</label>
                                <a-time-field
                                    name="start-time"
                                    [formField]="form.date"
                                ></a-time-field>
                            </div>
                        }
                        <div class="flex-1">
                            <label for="duration">{{
                                'FORM.DURATION' | translate
                            }}</label>
                            <a-duration-field
                                [min]="min_duration"
                                [max]="max_duration"
                                [step]="max_duration < 120 ? 5 : 15"
                                name="duration"
                                [formField]="form.duration"
                            ></a-duration-field>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <label for="title">{{
                            'FORM.TITLE' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [placeholder]="'FORM.TITLE' | translate"
                                [formField]="form.title"
                            />
                        </mat-form-field>
                    </div>
                </div>
            } @else {
                <div
                    class="flex h-64 flex-col items-center justify-center space-y-4 p-8"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>
                        {{ 'APP.BOOKING_PANEL.BOOKING_LOADING' | translate }}
                    </p>
                </div>
            }
            @if (!loading()) {
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
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
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
        FormField,
        MatDialogModule,
    ],
})
export class BookingModalComponent extends AsyncHandler implements OnInit {
    private _data: BookingModalData = inject(MAT_DIALOG_DATA);
    private _dialog_ref = inject(MatDialogRef<BookingModalComponent>, {
        optional: true,
    });
    /** Emitter for user action on the modal */
    public event = output<DialogEvent>();
    /** Whether the modal is processing a booking request */
    public loading = signal<boolean>(false);

    public hide_host = signal<boolean>(false);
    public future = this._data.future;
    public min_duration = this._data.min_duration || 15;
    public max_duration = this._data.max_duration || 480;

    public readonly model = signal({
        organiser: this._data.user || (null as User | null),
        room_ids: [this._data.space?.email || ''],
        date: this._data.date || new Date().valueOf(),
        duration: Math.min(this._data.min_duration || 15, 30),
        title: `${this._data.title || ''}`,
    });

    public readonly form = form(this.model, (p) => {
        validate(p, ({ value }) => {
            if (
                this._data.disable_book_now_host ||
                this._data.user ||
                value().organiser
            ) {
                return undefined;
            }
            return {
                kind: 'required',
                message: 'Host is required',
            };
        });
    });

    public ngOnInit() {
        if (this._data.disable_book_now_host || this._data.user) {
            this.hide_host.set(true);
        }
    }

    public searchStaff: any = async (q: string) => {
        const mod = getModule(this._data.space?.id, 'Bookings');
        if (!mod) return [];
        return mod.execute('list_users', [q]).catch(() => []);
    };

    /**
     * Post form data
     */
    public async save() {
        const success = await submit(this.form, async () => {
            if (!this.future) {
                this.model.update((m) => ({
                    ...m,
                    date: new Date().valueOf(),
                }));
            }
            const value = this.model();
            this.loading.set(true);
            this.event.emit({
                reason: 'done',
                metadata: {
                    ...value,
                    user: value.organiser,
                    title: value.title || 'Ad-Hoc Panel Booking',
                },
            });
        });
        if (!success) {
            notifyError(
                i18n(`FORM.INVALID_FIELDS`, {
                    field_list: getInvalidFieldsFromSignalForm(),
                }),
            );
        }
    }

    public cancel() {
        this.event.emit({ reason: 'close' });
        this._dialog_ref?.close();
    }
}

function getInvalidFieldsFromSignalForm() {
    return ['Booked By'];
}
