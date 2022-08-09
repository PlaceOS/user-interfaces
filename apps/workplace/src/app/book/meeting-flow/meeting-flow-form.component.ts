import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    currentUser,
    getInvalidFields,
    notifyError,
    SettingsService,
} from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { MeetingFlowConfirmComponent } from './meeting-flow-confirm.component';

@Component({
    selector: 'meeting-flow-form',
    template: `
        <div class="h-full w-full bg-gray-100 dark:bg-neutral-600 overflow-auto">
            <div
                class="max-w-full w-[768px] mx-auto sm:my-4 bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500"
            >
                <h2
                    class="w-full p-4 sm:py-4 sm:px-16 text-2xl font-medium border-b border-gray-300 dark:border-neutral-500"
                >
                    {{ form.value.id ? 'Edit' : 'Book'}} Meeting
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
                            <div class="text-xl">Details</div>
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
                            <div class="text-xl">Attendees</div>
                            <div class="flex-1 w-px"></div>
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
                            <div class="text-xl">Room</div>
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
                            <div class="text-xl">Catering</div>
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
                                5
                            </div>
                            <div class="text-xl">Assets</div>
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
                                6
                            </div>
                            <div class="text-xl">Notes</div>
                        </h3>
                        <div class="w-full flex flex-col">
                            <label for="notes"
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
                        >
                            Confirm Meeting
                        </button>
                        <button
                            mat-button
                            clear-form
                            class="inverse w-full sm:w-auto"
                            (click)="clearForm()"
                        >
                            {{ form.value.id ? 'Reset' : 'Clear' }} Form
                        </button>
                    </section>
                </form>
            </div>
        </div>
    `,
    styles: [],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
})
export class MeetingFlowFormComponent {
    public sheet_ref: MatBottomSheetRef<any>;
    public hide_block: Record<string, boolean> = {};

    public get form() {
        return this._state.form;
    }

    public get has_catering() {
        return !!this._settings.get('app.events.has_catering');
    }

    public get hide_notes() {
        return !!this._settings.get('app.events.hide_notes');
    }

    public get hide_attendees() {
        return !!this._settings.get('app.events.hide_attendees');
    }

    public readonly clearForm = () => this._state.resetForm();

    public readonly viewConfirm = () => {
        if (!this.form.value.host) this.form.patchValue({ host: currentUser()?.email });
        if (!this.form.valid)
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form).join(
                    ', '
                )}]`
            );
        this.sheet_ref = this._bottom_sheet.open(MeetingFlowConfirmComponent);
        this.sheet_ref.instance.show_close = true;
        this.sheet_ref.afterDismissed().subscribe((value) => {
            if (value) {
                this._router.navigate(['/book', 'meeting', 'success']);
                this._state.setView('success');
            }
        });
    };

    @ViewChild('confirm_ref') private _confirm_ref: TemplateRef<any>;

    constructor(
        private _state: EventFormService,
        private _settings: SettingsService,
        private _router: Router,
        private _bottom_sheet: MatBottomSheet
    ) {}
}
