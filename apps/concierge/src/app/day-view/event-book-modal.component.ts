import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    DialogEvent,
    SettingsService,
    currentUser,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { CalendarEvent, EventFormService } from '@placeos/events';
import { CateringOrderStateService } from 'libs/catering/src/lib/catering-order-modal/catering-order-state.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'event-book-modal',
    template: `
        <header>
            <h2>{{ form.value.id ? 'Edit' : 'New' }} Meeting Booking</h2>
            <div class="flex-1 w-0"></div>
            <button icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            *ngIf="!(loading | async); else load_state"
            class="overflow-auto p-4 max-h-[65vh]"
            [formGroup]="form"
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
                        (click)="hide_block.details = !hide_block.details"
                    >
                        <app-icon>{{
                            hide_block.details ? 'expand_more' : 'expand_less'
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
                        (click)="hide_block.attendees = !hide_block.attendees"
                    >
                        <app-icon>{{
                            hide_block.attendees ? 'expand_more' : 'expand_less'
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
                        (click)="hide_block.resources = !hide_block.resources"
                    >
                        <app-icon>{{
                            hide_block.resources ? 'expand_more' : 'expand_less'
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
                            total_capacity <= form.value.attendees?.length
                        "
                        class="bg-warning text-warning-content rounded shadow p-2 text-xs mx-auto my-2 inline-flex"
                    >
                        The selected room has less capacity than the number of
                        meeting attendees.
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
                        (click)="hide_block.catering = !hide_block.catering"
                    >
                        <app-icon>{{
                            hide_block.catering ? 'expand_more' : 'expand_less'
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
                            all_day: form.value.all_day,
                            zone_id: form.value?.resources?.length
                                ? form.value?.resources[0]?.level?.parent_id
                                : ''
                        }"
                    ></catering-list-field>
                    <mat-form-field
                        appearance="outline"
                        class="w-full mt-2"
                        *ngIf="form.value.catering?.length && has_codes | async"
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
                                (ngModelChange)="code_filter.next($event)"
                                [ngModelOptions]="{ standalone: true }"
                                placeholder="Search charge codes..."
                            />
                            <mat-option class="hidden"></mat-option>
                            <mat-option
                                *ngFor="let code of filtered_codes | async"
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
                            !(form.value.catering?.length && has_codes | async)
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
                            hide_block.assets ? 'expand_more' : 'expand_less'
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
                                ? form.value?.resources[0]?.level?.parent_id
                                : ''
                        }"
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
        </main>
        <footer
            *ngIf="!(loading | async)"
            class="flex justify-center items-center p-2 border-t border-base-200"
        >
            <button btn matRipple class="w-32" (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <main
                loading
                class="h-64 flex flex-col items-center justify-center"
            >
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>Making event request...</p>
            </main>
        </ng-template>
    `,
    styles: [``],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
})
export class EventBookModalComponent {
    @Output() public event = new EventEmitter<DialogEvent>();
    public readonly loading = new BehaviorSubject(false);
    public hide_block: Record<string, boolean> = {};
    public code_filter = new BehaviorSubject('');

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
                (_) => _.email.toLowerCase() === user.email.toLowerCase()
            )
        ) {
            count += 1;
        }
        return count;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { event: CalendarEvent },
        private _event_form: EventFormService,
        private _settings: SettingsService,
        private _catering: CateringOrderStateService,
        private _dialog_ref: MatDialogRef<EventBookModalComponent>
    ) {}

    public async ngOnInit() {
        console.log('Form:', this._data);
        await this._event_form.newForm(this._data.event);
        console.log('Form:', this.form.value);
    }

    public async save() {
        this.loading.next(true);
        const event = await this._event_form.postForm().catch((_) => {
            notifyError(_);
            this.loading.next(false);
            throw _;
        });
        this.event.emit({ reason: 'done', metadata: event });
        notifySuccess('Successfully created event');
        this._dialog_ref.close();
        this.loading.next(false);
    }
}
