import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    BaseClass,
    currentUser,
    getInvalidFields,
    notifyError,
    notifyWarn,
    SettingsService,
} from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { Space } from '@placeos/spaces';
import { FindAvailabilityModalComponent } from '@placeos/users';
import { CateringOrderStateService } from 'libs/catering/src/lib/catering-order-modal/catering-order-state.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { MeetingFlowConfirmModalComponent } from './meeting-flow-confirm-modal.component';
import { MeetingFlowConfirmComponent } from './meeting-flow-confirm.component';

@Component({
    selector: 'meeting-flow-form',
    template: `
        <div
            class="h-full w-full bg-gray-100 dark:bg-neutral-900 overflow-auto"
        >
            <div
                class="max-w-full w-[48rem] mx-auto sm:my-4 bg-white dark:bg-[#1F2021] border border-gray-300 dark:border-neutral-700"
            >
                <h2
                    class="w-full p-4 sm:py-4 sm:px-16 text-2xl font-medium border-b border-gray-300 dark:border-neutral-700"
                >
                    {{ !!form.value.id ? 'Edit' : 'Book' }}
                    {{ 'WPA.BOOK_MEETING_HEADING' | translate }}
                </h2>
                <form
                    class="p-0 sm:py-4 sm:px-16 divide-y divide-gray-300 space-y-2"
                    [formGroup]="form"
                >
                    <section class="p-2">
                        <h3 class="space-x-2 flex items-center">
                            <div
                                class="bg-black/20 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                1
                            </div>
                            <div class="text-xl">
                                {{ 'WPA.DETAILS' | translate }}
                            </div>
                            <div class="flex-1 w-px"></div>
                            <button
                                mat-icon-button
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
                                class="bg-black/20 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                2
                            </div>
                            <div class="text-xl">
                                {{ 'FORM.ATTENDEES' | translate }}
                            </div>
                            <div class="flex-1 w-px"></div>
                            <button
                                matRipple
                                class="bg-none underline text-xs text-blue-500"
                                (click)="findAvailableTime()"
                            >
                                {{ 'WPA.AVAILABILITY' | translate }}
                            </button>
                            <button
                                mat-icon-button
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
                                [guests]="allow_externals"
                            ></a-user-list-field>
                        </div>
                    </section>
                    <section class="p-2">
                        <h3 class="space-x-2 flex items-center">
                            <div
                                class="bg-black/20 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                3
                            </div>
                            <div class="text-xl">
                                {{ 'WPA.ROOM' | translate }}
                            </div>
                            <div class="flex-1 w-px"></div>
                            <button
                                mat-icon-button
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
                                class="bg-yellow-500 rounded shadow p-2 text-xs mx-auto my-2 text-black inline-flex"
                            >
                                The selected room has less capacity than the
                                number of meeting attendees.
                            </div>
                            <space-list-field
                                class="w-full"
                                formControlName="resources"
                            ></space-list-field>
                        </div>
                    </section>
                    <section class="p-2" *ngIf="has_catering | async">
                        <h3 class="space-x-2 flex items-center">
                            <div
                                class="bg-black/20 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                4
                            </div>
                            <div class="text-xl">
                                {{ 'WPA.CATERING' | translate }}
                            </div>
                            <div class="flex-1 w-px"></div>
                            <button
                                mat-icon-button
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
                                    date: form.value.date,
                                    duration: form.value.duration,
                                    zone_id:
                                        form.value.resources[0]?.level
                                            ?.parent_id
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
                                        class="sticky top-0 bg-white px-4 py-3 text-base border-x-0 border-t-0 border-b focus:border-b border-gray-200 w-full rounded-none z-50"
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
                                class="bg-black/20 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                {{ !(has_catering | async) ? '4' : '5' }}
                            </div>
                            <div class="text-xl">
                                {{ 'WPA.ASSETS' | translate }}
                            </div>
                            <div class="flex-1 w-px"></div>
                            <button
                                mat-icon-button
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
                                formControlName="assets"
                            ></asset-list-field>
                        </div>
                    </section>
                    <section class="p-2" *ngIf="!hide_notes">
                        <h3 class="space-x-2 flex items-center mb-4">
                            <div
                                class="bg-black/20 rounded-full h-6 w-6 flex items-center justify-center"
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
                            mat-button
                            confirm
                            class="mb-2 sm:mb-0 w-full sm:w-auto"
                            (click)="viewConfirm()"
                        >
                            {{ 'WPA.CONFIRM_MEETING' | translate }}
                        </button>
                        <button
                            mat-button
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
export class MeetingFlowFormComponent extends BaseClass {
    public sheet_ref: MatBottomSheetRef<any>;
    public dialog_ref: MatDialogRef<any>;
    public hide_block: Record<string, boolean> = {};
    public code_filter = new BehaviorSubject('');

    public readonly has_catering = this._catering.available_menu.pipe(
        map((l) => l.length > 0)
    );

    public readonly has_codes = this._catering.charge_codes.pipe(
        map((l) => l.length > 0)
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
        if (this._settings.get('app.events.booking_unavailable'))
            return this._state.openEventLinkModal();
        if (window.innerWidth >= 768) {
            this.dialog_ref = this._dialog.open(
                MeetingFlowConfirmModalComponent
            );
            this.dialog_ref.componentInstance.show_close = true;
            this.dialog_ref.afterClosed().subscribe((value) => {
                if (value) {
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
        private _settings: SettingsService,
        private _router: Router,
        private _dialog: MatDialog,
        private _bottom_sheet: MatBottomSheet
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'space_changes',
            this.form.controls.resources.valueChanges.subscribe((l) =>
                this._checkCateringEligibility(l)
            )
        );
        this._checkCateringEligibility(this.form.value.resources || []);
    }

    public focusInput() {
        console.log('Focus');
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
                attendees: ref.componentInstance.users,
                duration: ref.componentInstance.duration,
            });
        });
    }

    private async _checkCateringEligibility(list: Space[]) {
        if (list?.length) {
            const menu = await this._catering.available_menu
                .pipe(take(1))
                .toPromise();
            const disabled_rooms = await this._catering.availability
                .pipe(take(1))
                .toPromise();
            const can_cater = list.every(
                (s) =>
                    menu.filter(
                        (_) =>
                            !_.hide_for_zones.find((z) => s.zones.includes(z))
                    ).length
            );
            if (
                !can_cater ||
                disabled_rooms.find((_) => list.find((i) => i.id === _))
            ) {
                this.form.patchValue({ catering: [] });
                this.form.controls.catering.disable();
                notifyWarn(
                    `Catering is unavailable for some of the selected spaces.`
                );
            } else {
                this.form.controls.catering.enable();
            }
        } else {
            this.form.controls.catering.disable();
        }
    }
}
