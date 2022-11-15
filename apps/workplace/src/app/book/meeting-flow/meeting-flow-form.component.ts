import { Component, TemplateRef, ViewChild } from '@angular/core';
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
import { MeetingFlowConfirmModalComponent } from './meeting-flow-confirm-modal.component';
import { MeetingFlowConfirmComponent } from './meeting-flow-confirm.component';

@Component({
    selector: 'meeting-flow-form',
    template: `
        <div
            class="h-full w-full bg-gray-100 dark:bg-neutral-900 overflow-auto"
        >
            <div
                class="max-w-full w-[768px] mx-auto sm:my-4 bg-white dark:bg-[#1F2021] border border-gray-300 dark:border-neutral-700"
            >
                <h2
                    class="w-full p-4 sm:py-4 sm:px-16 text-2xl font-medium border-b border-gray-300 dark:border-neutral-700"
                    i18n
                >
                    { !!form.value.id, select, true { Edit } false { Book } }
                    Meeting
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
                            <div class="text-xl" i18n>Details</div>
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
                            <div class="text-xl" i18n>Attendees</div>
                            <div class="flex-1 w-px"></div>
                            <button
                                matRipple
                                class="bg-none underline text-xs text-blue-500"
                                (click)="findAvailableTime()"
                                i18n
                            >
                                Availability
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
                            <div class="text-xl" i18n>Room</div>
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
                            class="overflow-hidden"
                            [@show]="hide_block.resources ? 'hide' : 'show'"
                        >
                            <space-list-field
                                class="mt-4"
                                formControlName="resources"
                            ></space-list-field>
                        </div>
                    </section>
                    <section class="p-2" *ngIf="has_catering">
                        <h3 class="space-x-2 flex items-center">
                            <div
                                class="bg-black/20 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                4
                            </div>
                            <div class="text-xl" i18n>Catering</div>
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
                            ></catering-list-field>
                        </div>
                    </section>
                    <section class="p-2">
                        <h3 class="space-x-2 flex items-center">
                            <div
                                class="bg-black/20 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                {{ !has_catering ? '4' : '5' }}
                            </div>
                            <div class="text-xl" i18n>Assets</div>
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
                                {{ !has_catering ? '5' : '6' }}
                            </div>
                            <div class="text-xl" i18n>Notes</div>
                        </h3>
                        <div class="w-full flex flex-col">
                            <label for="notes" i18n
                                >General information for attendees</label
                            >
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
                            i18n
                        >
                            Confirm Meeting
                        </button>
                        <button
                            mat-button
                            clear-form
                            class="inverse w-full sm:w-auto"
                            (click)="clearForm()"
                            i18n
                        >
                            { !!form.value.id, select, true { Reset } false {
                            Clear } } Form
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

    public get form() {
        return this._state.form;
    }

    public get has_catering() {
        return (
            !!this._settings.get('app.events.catering_enabled') ||
            !!this._settings.get('app.events.has_catering')
        );
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

    public readonly clearForm = () => this._state.resetForm();

    public readonly viewConfirm = () => {
        if (!this.form.value.host)
            this.form.patchValue({ host: currentUser()?.email });
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

    constructor(
        private _state: EventFormService,
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

    private _checkCateringEligibility(list: Space[]) {
        const zone = this._settings.get('app.events.catering_enabled');
        if (zone && list?.length) {
            const can_cater = list.every((s) => s.zones.includes(zone));
            if (!can_cater) {
                this.form.patchValue({ catering: [] });
                this.form.controls.catering.disable();
                notifyWarn(
                    `Catering is unavailable for some of the selected spaces.`
                );
            } else {
                this.form.controls.catering.enable();
            }
        }
    }
}
