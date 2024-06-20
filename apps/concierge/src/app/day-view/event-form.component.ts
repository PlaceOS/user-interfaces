import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';
import { CateringOrderStateService } from 'libs/catering/src/lib/catering-order-modal/catering-order-state.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'event-form',
    template: `
        <form *ngIf="form" [formGroup]="form">
            <div class="flex flex-col">
                <label for="title">Title<span>*</span>:</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="title"
                        formControlName="title"
                        placeholder="Meeting Title"
                    />
                    <mat-error>A valid title is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex flex-col relative">
                <label for="date">Date<span>*</span>:</label>
                <a-date-field name="date" formControlName="date"></a-date-field>
                <mat-checkbox
                    formControlName="all_day"
                    *ngIf="allow_all_day"
                    class="absolute -top-2 right-0"
                >
                    {{ 'FORM.ALL_DAY' | translate }}
                </mat-checkbox>
            </div>
            <div class="flex space-x-2" *ngIf="!form.value.all_day">
                <div class="flex flex-col flex-1">
                    <label for="start-time">Start Time<span>*</span>:</label>
                    <a-time-field
                        name="start-time"
                        [ngModel]="form.get('date').value"
                        (ngModelChange)="form.patchValue({ date: $event })"
                        [ngModelOptions]="{ standalone: true }"
                        [use_24hr]="use_24hr_time"
                    ></a-time-field>
                </div>
                <div class="flex flex-col flex-1">
                    <label for="duration">Duration<span>*</span>:</label>
                    <a-duration-field
                        name="duration"
                        [time]="form.controls?.date?.value"
                        formControlName="duration"
                        [use_24hr]="use_24hr_time"
                    ></a-duration-field>
                </div>
            </div>
            <div class="flex flex-col flex-1">
                <label for="organiser">Host<span>*</span>:</label>
                <a-user-search-field
                    name="organiser"
                    formControlName="organiser"
                    class="mb-4"
                ></a-user-search-field>
            </div>
            <div class="flex flex-col flex-1">
                <label for="attendees">Attendees<span>*</span>:</label>
                <a-user-list-field
                    name="attendees"
                    formControlName="attendees"
                ></a-user-list-field>
            </div>
            <div class="flex flex-col flex-1">
                <label for="space">Space<span>*</span>:</label>
                <space-list-field
                    class="w-full"
                    formControlName="resources"
                ></space-list-field>
            </div>
            <div
                class="py-2"
                *ngIf="(has_catering | async) && form.contains('catering')"
            >
                <label for="catering">Catering:</label>
                <catering-list-field
                    name="catering"
                    formControlName="catering"
                    [options]="{
                        date: form.value.date,
                        duration: form.value.duration,
                        all_day: form.value.all_day,
                        zone_id: form.value.resources[0]?.level?.parent_id
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
                    <mat-error> Catering charge code is required </mat-error>
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
                    <mat-error> Catering Order notes are required </mat-error>
                </mat-form-field>
            </div>
            <div class="flex flex-col flex-1 mb-4" *ngIf="has_assets">
                <label for="space">Assets:</label>
                <asset-list-field
                    [date]="form.value.date"
                    [duration]="form.value.duration"
                    formControlName="assets"
                ></asset-list-field>
            </div>
            <div class="flex space-x-2">
                <div class="flex flex-col space-y-2 flex-1">
                    <label for="setup">Setup Duration</label>
                    <a-duration-field
                        name="setup"
                        formControlName="setup_time"
                        [min]="0"
                        [custom_options]="[5, 10]"
                    ></a-duration-field>
                </div>
                <div class="flex flex-col space-y-2 flex-1">
                    <label for="breakdown">Breakdown Duration</label>
                    <a-duration-field
                        name="breakdown"
                        [min]="0"
                        formControlName="breakdown_time"
                        [custom_options]="[5, 10]"
                    ></a-duration-field>
                </div>
            </div>
        </form>
    `,
    styles: [``],
})
export class EventFormComponent {
    @Input() public form: FormGroup;

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

    public get allow_all_day() {
        return !!this._settings.get('app.events.allow_all_day');
    }

    public get has_assets() {
        return !!this._settings.get('app.events.has_assets');
    }

    public get use_24hr_time() {
        return this._settings.get('app.use_24_hour_time');
    }

    constructor(
        private _dialog: MatDialog,
        private _settings: SettingsService,
        private _catering: CateringOrderStateService
    ) {}
}
