import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    AsyncHandler,
    currentUser,
    getInvalidFields,
    notifyError,
    notifyWarn,
    openConfirmModal,
    SettingsService,
    UserIdleTimeService,
} from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { Space } from '@placeos/spaces';
import { FindAvailabilityModalComponent } from '@placeos/users';
import { CateringOrderStateService } from 'libs/catering/src/lib/catering-order-modal/catering-order-state.service';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { debounceTime, first, map, switchMap, tap } from 'rxjs/operators';
import { MeetingFlowConfirmModalComponent } from './meeting-flow-confirm-modal.component';
import { MeetingFlowConfirmComponent } from './meeting-flow-confirm.component';
import { AssetStateService } from 'libs/assets/src/lib/asset-state.service';

@Component({
    selector: 'meeting-flow-form',
    template: `
        <div class="h-full w-full bg-base-200 overflow-auto">
            <div
                class="max-w-full w-[48rem] mx-auto sm:my-4 bg-base-100 border border-base-300"
            >
                <h2
                    class="w-full p-4 sm:py-4 sm:px-16 text-2xl font-medium border-b border-base-300"
                >
                    {{ !!form.value.id ? 'Edit' : 'Book' }}
                    {{ 'WPA.BOOK_MEETING_HEADING' | translate }}
                </h2>
                <form
                    class="p-0 sm:py-4 sm:px-16 divide-y divide-base-200 space-y-2"
                    [formGroup]="form"
                    *ngIf="form"
                >
                    <section class="p-2">
                        <h3 class="space-x-2 flex items-center">
                            <div
                                class="bg-base-200 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                1
                            </div>
                            <div class="text-xl">
                                {{ 'WPA.DETAILS' | translate }}
                            </div>
                            <div class="flex-1 w-px"></div>
                            <button
                                icon
                                name="toggle-details-meeting"
                                matRipple
                                (click)="
                                    hide_block.details = !hide_block.details
                                "
                            >
                                <app-icon>{{
                                    hide_block.details
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</app-icon>
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
                    <section class="p-2" *ngIf="!hide_attendees">
                        <h3 class="space-x-2 flex items-center">
                            <div
                                class="bg-base-200 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                2
                            </div>
                            <div class="text-xl">
                                {{ 'FORM.ATTENDEES' | translate }}
                            </div>
                            <div class="flex-1 w-px"></div>
                            <button
                                matRipple
                                name="find-attendee-availability"
                                class="bg-none underline text-xs text-info"
                                (click)="findAvailableTime()"
                            >
                                {{ 'WPA.AVAILABILITY' | translate }}
                            </button>
                            <button
                                icon
                                name="toggle-attendees-meeting"
                                matRipple
                                (click)="
                                    hide_block.attendees = !hide_block.attendees
                                "
                            >
                                <app-icon>{{
                                    hide_block.attendees
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</app-icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block.attendees ? 'hide' : 'show'"
                        >
                            <a-user-list-field
                                class="mt-4"
                                formControlName="attendees"
                                [time]="form.value.date"
                                [guests]="allow_externals"
                            ></a-user-list-field>
                        </div>
                    </section>
                    <section class="p-2">
                        <h3 class="space-x-2 flex items-center">
                            <div
                                class="bg-base-200 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                3
                            </div>
                            <div class="text-xl">
                                {{ 'WPA.ROOM' | translate }}
                            </div>
                            <div class="flex-1 w-px"></div>
                            <button
                                icon
                                name="toggle-spaces-meeting"
                                matRipple
                                (click)="
                                    hide_block.resources = !hide_block.resources
                                "
                            >
                                <app-icon>{{
                                    hide_block.resources
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</app-icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden flex flex-col items-center"
                            [@show]="hide_block.resources ? 'hide' : 'show'"
                        >
                            <div
                                *ngIf="
                                    !strict_capacity_check &&
                                    total_capacity &&
                                    total_capacity <=
                                        form.value.attendees?.length
                                "
                                class="bg-warning text-warning-content rounded shadow p-2 text-xs mx-auto my-2 inline-flex"
                            >
                                The selected room has less capacity than the
                                number of meeting attendees.
                            </div>
                            <space-list-field
                                class="w-full"
                                formControlName="resources"
                                [multiday]="allow_multiday"
                            ></space-list-field>
                        </div>
                    </section>
                    <section class="p-2" *ngIf="has_catering | async">
                        <h3 class="space-x-2 flex items-center">
                            <div
                                class="bg-base-200 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                4
                            </div>
                            <div class="text-xl">
                                {{ 'WPA.CATERING' | translate }}
                            </div>
                            <div class="flex-1 w-px"></div>
                            <button
                                icon
                                name="toggle-catering-meeting"
                                matRipple
                                (click)="
                                    hide_block.catering = !hide_block.catering
                                "
                            >
                                <app-icon>{{
                                    hide_block.catering
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</app-icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block.catering ? 'hide' : 'show'"
                        >
                            <catering-list-field
                                formControlName="catering"
                                [options]="{
                                    date: form.getRawValue().date,
                                    duration: form.value.duration,
                                    all_day: form.value.all_day,
                                    zone_id: form.value?.resources?.length
                                        ? form.value?.resources[0]?.level
                                              ?.parent_id
                                        : ''
                                }"
                            ></catering-list-field>
                            <mat-form-field
                                appearance="outline"
                                class="w-full mt-2"
                                *ngIf="
                                    form.value.catering?.length && has_codes
                                        | async
                                "
                                (openedChange)="focusInput()"
                            >
                                <mat-select
                                    formControlName="catering_charge_code"
                                    placeholder="Charge Code"
                                >
                                    <input
                                        #input
                                        class="sticky top-0 bg-base-100 px-4 py-3 text-base border-x-0 border-t-0 border-b focus:border-b border-base-200 w-full rounded-none z-50"
                                        [ngModel]="code_filter.getValue()"
                                        (ngModelChange)="
                                            code_filter.next($event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                        placeholder="Search charge codes..."
                                    />
                                    <mat-option class="hidden"></mat-option>
                                    <mat-option
                                        *ngFor="
                                            let code of filtered_codes | async
                                        "
                                        [value]="code"
                                    >
                                        {{ code }}
                                    </mat-option>
                                </mat-select>
                                <mat-error>
                                    Catering charge code is required
                                </mat-error>
                            </mat-form-field>
                            <mat-form-field
                                appearance="outline"
                                class="w-full"
                                [class.mt-2]="
                                    !(
                                        form.value.catering?.length && has_codes
                                        | async
                                    )
                                "
                                *ngIf="form.value.catering?.length"
                            >
                                <textarea
                                    matInput
                                    formControlName="catering_notes"
                                    placeholder="Extra catering details..."
                                ></textarea>
                                <mat-error>
                                    Catering Order notes are required
                                </mat-error>
                            </mat-form-field>
                        </div>
                    </section>
                    <section class="p-2" *ngIf="has_assets">
                        <h3 class="space-x-2 flex items-center">
                            <div
                                class="bg-base-200 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                {{ !(has_catering | async) ? '4' : '5' }}
                            </div>
                            <div class="text-xl">
                                {{ 'WPA.ASSETS' | translate }}
                            </div>
                            <div class="flex-1 w-px"></div>
                            <button
                                icon
                                name="toggle-assets-meeting"
                                matRipple
                                (click)="hide_block.assets = !hide_block.assets"
                            >
                                <app-icon>{{
                                    hide_block.assets
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</app-icon>
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
                                        : ''
                                }"
                                [rejected_ids]="invalid_assets"
                                formControlName="assets"
                            ></asset-list-field>
                        </div>
                    </section>
                    <section class="p-2" *ngIf="!hide_notes">
                        <h3 class="space-x-2 flex items-center mb-4">
                            <div
                                class="bg-base-200 rounded-full h-6 w-6 flex items-center justify-center"
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
                                {{ 'FORM.NOTES' | translate }}
                            </div>
                        </h3>
                        <div class="w-full flex flex-col">
                            <label for="notes">
                                {{ 'WPA.NOTES_INFO' | translate }}
                            </label>
                            <rich-text-input
                                name="notes"
                                formControlName="body"
                                placeholder="Notes..."
                            ></rich-text-input>
                        </div>
                    </section>
                    <section
                        class="flex flex-col sm:flex-row items-center sm:space-x-2 p-2"
                    >
                        <button
                            btn
                            name="open-meeting-confirm"
                            matRipple
                            confirm
                            class="mb-2 sm:mb-0 w-full sm:w-auto"
                            (click)="viewConfirm()"
                        >
                            {{ 'WPA.CONFIRM_MEETING' | translate }}
                        </button>
                        <button
                            btn
                            name="clear-form-meeting"
                            matRipple
                            clear-form
                            class="inverse w-full sm:w-auto"
                            (click)="clearForm()"
                        >
                            { !!form.value.id, select, true { Reset } false {
                            Clear } } {{ 'WPA.CLEAR_FORM' | translate }}
                        </button>
                    </section>
                </form>
            </div>
        </div>
    `,
    styles: [],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
})
export class MeetingFlowFormComponent extends AsyncHandler {
    public sheet_ref: MatBottomSheetRef<any>;
    public dialog_ref: MatDialogRef<any>;
    public hide_block: Record<string, boolean> = {};
    public code_filter = new BehaviorSubject('');
    public invalid_assets: string[] = [];

    public readonly has_catering = this._catering.available_menu.pipe(
        map((l) => l.length > 0)
    );

    public readonly has_codes = this._catering.charge_codes.pipe(
        map((l) => l.length > 0),
        tap((has_codes) => {
            if (!has_codes) {
                this.form.get('catering_charge_code').setValidators([]);
                this.form.updateValueAndValidity();
            }
        })
    );

    public readonly filtered_codes = combineLatest([
        this.code_filter,
        this._catering.charge_codes,
    ]).pipe(
        map(([s, l]) =>
            l.filter((_) => _.toLowerCase().includes(s.toLowerCase()))
        )
    );

    public get form() {
        return this._state.form;
    }

    public get event() {
        return this._state.event;
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
            this._state.is_multiday
        );
    }

    public get attendee_count() {
        const user = currentUser();
        let count = this.form.value.attendees?.length || 0;
        if (
            !this.form.value.attendees.find(
                (_) => _.email.toLowerCase() === user.email.toLowerCase()
            )
        ) {
            count += 1;
        }
        return count;
    }

    private _space_list = new BehaviorSubject<Space[]>([]);

    private _assets_available = this._space_list.pipe(
        debounceTime(300),
        switchMap((space_list) => {
            if (!space_list?.length) return of(false);
            const value = this.form.getRawValue();
            this._assets.setOptions({
                date: value.date,
                duration: value.duration,
                resources: space_list,
                zone_id: this._org.levelWithID(space_list[0].zones)?.parent_id,
                tags: [],
                categories: [],
            } as any);
            return combineLatest([
                this._assets.filtered_assets,
                this._assets.disabled_rooms,
            ]).pipe(
                map(([items, disabled_rooms]) => {
                    const assets_available = space_list.every(
                        (s) =>
                            items.filter(
                                (_) =>
                                    !(_ as any).hide_for_zones?.find((z) =>
                                        s.zones.includes(z)
                                    )
                            ).length > 0
                    );
                    if (
                        assets_available &&
                        !disabled_rooms.find((_) =>
                            space_list.find((i) => i.id === _)
                        )
                    )
                        return true;
                    const event = this._state.event;
                    const { id, assets, date, date_end } =
                        this.form.getRawValue();
                    const time_changed =
                        !id ||
                        (assets?.length &&
                            (date !== event.date ||
                                date_end !== event.date_end));
                    if (time_changed) {
                        this.form.patchValue({ assets: [] });
                        notifyWarn(
                            `Assets are unavailable for some of the selected spaces.`
                        );
                    }
                    return false;
                })
            );
        })
    );

    private _catering_available = this._space_list.pipe(
        debounceTime(300),
        switchMap((space_list) => {
            if (!space_list?.length) return of(false);
            const value = this.form.getRawValue();
            this._catering.setFilters({
                search: '',
                date: value.date,
                duration: value.duration,
                resources: space_list,
                zone_id: this._org.levelWithID(space_list[0].zones)?.parent_id,
                tags: [],
                categories: [],
            });
            return combineLatest([
                this._catering.filtered_menu,
                this._catering.availability,
            ]).pipe(
                map(([menu, disabled_rooms]) => {
                    const can_cater = space_list.every(
                        (s) =>
                            menu.filter(
                                (_) =>
                                    !_.hide_for_zones.find((z) =>
                                        s.zones.includes(z)
                                    )
                            ).length > 0
                    );
                    if (
                        can_cater &&
                        !disabled_rooms.find((_) =>
                            space_list.find((i) => i.id === _)
                        )
                    )
                        return true;
                    const event = this._state.event;
                    const { id, catering, date, date_end } =
                        this.form.getRawValue();
                    const time_changed =
                        !id ||
                        (catering?.length &&
                            (date !== event.date ||
                                date_end !== event.date_end));
                    if (time_changed) {
                        this.form.patchValue({ catering: [] });
                        notifyWarn(
                            `Catering is unavailable for some of the selected spaces.`
                        );
                    }
                    return false;
                })
            );
        })
    );

    public readonly clearForm = () => this._state.resetForm();

    public readonly viewConfirm = () => {
        if (!this.form.value.host)
            this.form.patchValue({ host: currentUser()?.email });
        if (
            this.strict_capacity_check &&
            this.attendee_count > this.total_capacity
        ) {
            return notifyError(
                'Attendee count is greater than the capacity of the selected rooms'
            );
        }
        this.form.markAllAsTouched();
        if (!this.form.valid)
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form).join(
                    ', '
                )}]`
            );
        if (
            this._settings.get('app.events.no_standalone') &&
            !this.form.value.resources.length
        )
            return notifyError('You need to select a room to make a booking');
        if (this._settings.get('app.events.booking_unavailable'))
            return this._state.openEventLinkModal();
        if (window.innerWidth >= 768) {
            this.dialog_ref = this._dialog.open(
                MeetingFlowConfirmModalComponent
            );
            this.dialog_ref.componentInstance.show_close = true;
            this.dialog_ref.afterClosed().subscribe((value) => {
                if (value) {
                    this.unsubWith('idle');
                    this._router.navigate(['/book', 'meeting', 'success']);
                    this._state.setView('success');
                }
            });
        } else {
            this.sheet_ref = this._bottom_sheet.open(
                MeetingFlowConfirmComponent
            );
            this.sheet_ref.instance.show_close = true;
            this.sheet_ref.afterDismissed().subscribe((value) => {
                if (value) {
                    this.unsubWith('idle');
                    this._router.navigate(['/book', 'meeting', 'success']);
                    this._state.setView('success');
                }
            });
        }
    };

    @ViewChild('confirm_ref') private _confirm_ref: TemplateRef<any>;
    @ViewChild('input') private _input_el: ElementRef<HTMLInputElement>;

    constructor(
        private _state: EventFormService,
        private _catering: CateringOrderStateService,
        private _assets: AssetStateService,
        private _settings: SettingsService,
        private _router: Router,
        private _dialog: MatDialog,
        private _bottom_sheet: MatBottomSheet,
        private _org: OrganisationService,
        private _idle: UserIdleTimeService
    ) {
        super();
    }

    private _updateValidAssets() {
        this.invalid_assets = [];
        if (!this.event?.id) return;
        const requested_assets = this.form.value.assets || [];
        const linked_bookings = this.event?.linked_bookings || [];
        this.invalid_assets = requested_assets
            .filter(
                (_) =>
                    !_._changed &&
                    !linked_bookings.find(
                        (bkn) => bkn.extension_data?.request_id === _.id
                    )
            )
            .map((_) => _.id);
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'asset_changes',
            this.form.controls.assets.valueChanges.subscribe(() =>
                this._updateValidAssets()
            )
        );
        for (const key of ['resources', 'date', 'duration', 'date_end']) {
            this.subscription(
                `${key}_changes`,
                this.form.controls[key].valueChanges.subscribe(() =>
                    this.timeout('check_resources', () =>
                        this._space_list.next(this.form.value.resources || [])
                    )
                )
            );
        }
        this._catering.setOptions({ zone: '' });
        this._space_list.next(this.form.value.resources || []);
        this.subscription(
            'assets_available',
            this._assets_available.subscribe((a) => {
                if (!a) this.form.controls.assets.disable();
                else this.form.controls.assets.enable();
            })
        );
        this.subscription(
            'catering_available',
            this._catering_available.subscribe((a) => {
                if (!a) this.form.controls.catering.disable();
                else this.form.controls.catering.enable();
            })
        );
        this.subscription(
            'idle-listen',
            this._idle
                .idleFor(
                    (this._settings.get('app.idle_timeout') || 5) * 60 * 1000
                )
                .subscribe(async () => {
                    this.unsub('idle');
                    await openConfirmModal(
                        {
                            title: 'Idle Timeout',
                            content: 'Your form data is out of date',
                            icon: { content: 'update' },
                            confirm_text: 'Refresh',
                        },
                        this._dialog
                    );
                    this._state.newForm();
                    location.reload();
                })
        );
        this.timeout(
            'init_valid_assets',
            () => this._updateValidAssets(),
            1000
        );
    }

    public focusInput() {
        this.timeout(
            'input-focus',
            () => {
                this._input_el.nativeElement.value = '';
                this._input_el?.nativeElement?.focus();
            },
            300
        );
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
                date: ref.componentInstance.date,
                attendees: ref.componentInstance.users.getValue(),
                duration: ref.componentInstance.duration,
            });
        });
    }
}
