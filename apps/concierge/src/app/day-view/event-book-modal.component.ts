import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    CalendarEvent,
    DialogEvent,
    SettingsService,
    currentUser,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { FindAvailabilityModalComponent } from '@placeos/users';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AssetListFieldComponent } from '@placeos/assets';
import {
    CateringListFieldComponent,
    CateringOrderStateService,
} from '@placeos/catering';
import {
    FullscreenModalShellComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    RichTextInputComponent,
    SpaceListFieldComponent,
    UserListFieldComponent,
} from '@placeos/form-fields';

import { MeetingFormDetailsComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-form-details.component';

@Component({
    selector: 'event-book-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.ROOMS_BOOK_EDIT'
                    : 'APP.CONCIERGE.ROOMS_BOOK_NEW'
                ) | translate
            "
            [loading]="
                (loading | async) ? ('CALENDAR_EVENT.LOADING' | translate) : ''
            "
            (confirm)="save()"
        >
            <form [formGroup]="form">
                <section class="p-2">
                    <h3 class="flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            1
                        </div>
                        <div class="text-xl">
                            {{ 'BOOKINGS.DETAILS' | translate }}
                        </div>
                        <div class="w-px flex-1"></div>
                        <button
                            icon
                            name="toggle-details-meeting"
                            matRipple
                            (click)="hide_block.details = !hide_block.details"
                        >
                            <icon>{{
                                hide_block.details
                                    ? 'expand_more'
                                    : 'expand_less'
                            }}</icon>
                        </button>
                    </h3>
                    <div
                        class="overflow-hidden"
                        [@show]="hide_block.details ? 'hide' : 'show'"
                    >
                        <meeting-form-details
                            class="mt-4"
                            [form]="form"
                        ></meeting-form-details>
                    </div>
                </section>
                @if (!hide_attendees) {
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                2
                            </div>
                            <div class="text-xl">
                                {{ 'CALENDAR_EVENT.ATTENDEES' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                            <button
                                matRipple
                                name="find-attendee-availability"
                                class="text-info bg-none text-xs underline"
                                (click)="findAvailableTime()"
                            >
                                {{ 'COMMON.AVAILABILITY' | translate }}
                            </button>
                            <button
                                icon
                                name="toggle-attendees-meeting"
                                matRipple
                                (click)="
                                    hide_block.attendees = !hide_block.attendees
                                "
                            >
                                <icon>{{
                                    hide_block.attendees
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block.attendees ? 'hide' : 'show'"
                        >
                            <a-user-list-field
                                class="mt-4"
                                formControlName="attendees"
                                [guests]="allow_externals"
                            ></a-user-list-field>
                        </div>
                    </section>
                }
                <section class="p-2">
                    <h3 class="flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            3
                        </div>
                        <div class="text-xl">
                            {{ 'RESOURCE.ROOM' | translate }}
                        </div>
                        <div class="w-px flex-1"></div>
                        <button
                            icon
                            name="toggle-spaces-meeting"
                            matRipple
                            (click)="
                                hide_block.resources = !hide_block.resources
                            "
                        >
                            <icon>{{
                                hide_block.resources
                                    ? 'expand_more'
                                    : 'expand_less'
                            }}</icon>
                        </button>
                    </h3>
                    <div
                        class="flex flex-col items-center overflow-hidden"
                        [@show]="hide_block.resources ? 'hide' : 'show'"
                    >
                        @if (
                            !strict_capacity_check &&
                            total_capacity &&
                            total_capacity <= form.value.attendees?.length
                        ) {
                            <div
                                class="bg-warning text-warning-content mx-auto my-2 inline-flex rounded-sm p-2 text-xs shadow-sm"
                            >
                                {{
                                    'CALENDAR_EVENT.CAPACITY_WARNING'
                                        | translate
                                }}
                            </div>
                        }
                        <space-list-field
                            class="w-full"
                            formControlName="resources"
                            [multiday]="allow_multiday"
                        ></space-list-field>
                    </div>
                </section>
                @if (has_catering | async) {
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                4
                            </div>
                            <div class="text-xl">
                                {{ 'CALENDAR_EVENT.CATERING' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                            <button
                                icon
                                name="toggle-catering-meeting"
                                matRipple
                                (click)="
                                    hide_block.catering = !hide_block.catering
                                "
                            >
                                <icon>{{
                                    hide_block.catering
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block.catering ? 'hide' : 'show'"
                        >
                            <catering-list-field
                                formControlName="catering"
                                [options]="{
                                    date: form.value.date,
                                    duration: form.value.duration,
                                    all_day: form.value.all_day,
                                    zone_id: form.value?.resources?.length
                                        ? form.value?.resources[0]?.level
                                              ?.parent_id
                                        : '',
                                }"
                            ></catering-list-field>
                            @if (
                                form.value.catering?.length && has_codes | async
                            ) {
                                <mat-form-field
                                    appearance="outline"
                                    class="mt-2 w-full"
                                >
                                    <mat-select
                                        formControlName="catering_charge_code"
                                        [placeholder]="
                                            'CALENDAR_EVENT.CATERING_CHARGE_CODE'
                                                | translate
                                        "
                                    >
                                        <input
                                            #input
                                            class="border-base-200 bg-base-100 sticky top-0 z-50 w-full rounded-none border-x-0 border-t-0 border-b px-4 py-3 text-base focus:border-b"
                                            [ngModel]="code_filter.getValue()"
                                            (ngModelChange)="
                                                code_filter.next($event)
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            [placeholder]="
                                                'CALENDAR_EVENT.CATERING_CHARGE_CODE_SEACH'
                                                    | translate
                                            "
                                        />
                                        <mat-option class="hidden"></mat-option>
                                        @for (
                                            code of filtered_codes | async;
                                            track code
                                        ) {
                                            <mat-option [value]="code">
                                                {{ code }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                    <mat-error>
                                        {{
                                            'CALENDAR_EVENT.CATERING_CHARGE_CODE_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            }
                            @if (form.value.catering?.length) {
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                    [class.mt-2]="
                                        !(
                                            form.value.catering?.length &&
                                                has_codes | async
                                        )
                                    "
                                >
                                    <textarea
                                        matInput
                                        formControlName="catering_notes"
                                        [placeholder]="
                                            'CALENDAR_EVENT.CATERING_NOTES'
                                                | translate
                                        "
                                    ></textarea>
                                    <mat-error>
                                        {{
                                            'CALENDAR_EVENT.CATERING_NOTES_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                            }
                        </div>
                    </section>
                }
                @if (has_assets) {
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                {{ !(has_catering | async) ? '4' : '5' }}
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.ASSETS' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                            <button
                                icon
                                name="toggle-assets-meeting"
                                matRipple
                                (click)="hide_block.assets = !hide_block.assets"
                            >
                                <icon>{{
                                    hide_block.assets
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block.assets ? 'hide' : 'show'"
                        >
                            <asset-list-field
                                [options]="{
                                    date: form.getRawValue().date,
                                    duration: form.value.duration,
                                    all_day: form.value.all_day,
                                    zone_id: form.value?.resources?.length
                                        ? form.value?.resources[0]?.level
                                              ?.parent_id
                                        : '',
                                }"
                                formControlName="assets"
                            ></asset-list-field>
                        </div>
                    </section>
                }
                @if (!hide_notes) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                {{
                                    !(has_catering | async) || !has_assets
                                        ? !(has_catering | async) && !has_assets
                                            ? '4'
                                            : '5'
                                        : '6'
                                }}
                            </div>
                            <div class="text-xl">
                                {{ 'CALENDAR_EVENT.NOTES_HEADER' | translate }}
                            </div>
                        </h3>
                        <div class="flex w-full flex-col">
                            <label for="notes">
                                {{ 'CALENDAR_EVENT.NOTES_INFO' | translate }}
                            </label>
                            <rich-text-input
                                name="notes"
                                formControlName="body"
                                [placeholder]="
                                    'CALENDAR_EVENT.NOTES_INFO' | translate
                                "
                            ></rich-text-input>
                        </div>
                    </section>
                }
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
    imports: [
        CommonModule,
        FullscreenModalShellComponent,
        RichTextInputComponent,
        SpaceListFieldComponent,
        AssetListFieldComponent,
        CateringListFieldComponent,
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe,
        IconComponent,
        ReactiveFormsModule,
        MeetingFormDetailsComponent,
        UserListFieldComponent,
        MatAutocompleteModule,
        FormsModule,
        MatSelectModule,
    ],
})
export class EventBookModalComponent implements OnInit {
    private _data = inject<{
        event: CalendarEvent;
    }>(MAT_DIALOG_DATA);
    private _event_form = inject(EventFormService);
    private _settings = inject(SettingsService);
    private _catering = inject(CateringOrderStateService);
    private _dialog_ref =
        inject<MatDialogRef<EventBookModalComponent>>(MatDialogRef);
    private _dialog = inject(MatDialog);

    @Output() public event = new EventEmitter<DialogEvent>();
    public readonly loading = new BehaviorSubject(false);
    public hide_block: Record<string, boolean> = {};
    public code_filter = new BehaviorSubject('');

    public readonly has_catering = this._catering.available_menu.pipe(
        map((l) => l.length > 0),
    );

    public readonly has_codes = this._catering.charge_codes.pipe(
        map((l) => l.length > 0),
        tap((has_codes) => {
            if (!has_codes) {
                this.form.get('catering_charge_code').setValidators([]);
                this.form.updateValueAndValidity();
            }
        }),
    );

    public readonly filtered_codes = combineLatest([
        this.code_filter,
        this._catering.charge_codes,
    ]).pipe(
        map(([s, l]) =>
            l.filter((_) => _.toLowerCase().includes(s.toLowerCase())),
        ),
    );

    public get form() {
        return this._event_form.form;
    }

    public get has_assets() {
        return !!this._settings.get('app.events.has_assets');
    }

    public get hide_notes() {
        return !!this._settings.get('app.events.hide_notes');
    }

    public get hide_attendees() {
        return !!this._settings.get('app.events.hide_attendees');
    }

    public get allow_externals() {
        return this._settings.get('app.events.allow_externals');
    }

    public get strict_capacity_check() {
        return this._settings.get('app.events.strict_capacity_check');
    }

    public get total_capacity() {
        return (
            this.form.value.resources?.reduce((c, i) => c + i.capacity, 0) || 0
        );
    }

    public get allow_multiday() {
        return (
            this._settings.get('app.events.allow_multiday') ||
            this._event_form.is_multiday
        );
    }

    public get attendee_count() {
        const user = currentUser();
        let count = this.form.value.attendees?.length || 0;
        if (
            !this.form.value.attendees.find(
                (_) => _.email.toLowerCase() === user.email.toLowerCase(),
            )
        ) {
            count += 1;
        }
        return count;
    }

    public ngOnInit() {
        this._event_form.newForm(this._data.event);
    }

    public findAvailableTime() {
        const { attendees, organiser, date, duration } = this.form.value;
        const ref = this._dialog.open(FindAvailabilityModalComponent, {
            data: {
                users: attendees,
                host: organiser || currentUser(),
                date,
                duration,
            },
        });
        ref.afterClosed().subscribe((d) => {
            if (!d) return;
            this.form.patchValue({
                date: ref.componentInstance.date(),
                attendees: ref.componentInstance.users(),
                duration: ref.componentInstance.duration(),
            });
        });
    }

    public async save() {
        this.loading.next(true);
        if (!this.form.value.host) {
            this.form.patchValue({
                host: currentUser().email,
            });
        }
        const event = await this._event_form.postForm().catch((_) => {
            notifyError(_);
            this.loading.next(false);
            throw _;
        });
        this.event.emit({ reason: 'done', metadata: event });
        notifySuccess(i18n('CALENDAR_EVENT.SUCCESS'));
        this._dialog_ref.close();
        this.loading.next(false);
    }
}
