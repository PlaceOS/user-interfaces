import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { PlaceMetadata, showMetadata } from '@placeos/ts-client';
import {
    addDays,
    addMinutes,
    differenceInMinutes,
    endOfDay,
    format,
    formatDuration,
    set,
    startOfDay,
} from 'date-fns';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'meeting-form-details',
    template: `
        <div *ngIf="form" [formGroup]="form">
            <div class="flex items-center flex-wrap sm:space-x-2">
                <div class="flex-1 min-w-[256px]">
                    <label for="title">{{ 'FORM.TITLE' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="title"
                            formControlName="title"
                            placeholder="e.g. Team Meeting"
                        />
                        <mat-error>{{
                            'FORM.TITLE_ERROR' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div
                    class="flex-1 min-w-[256px] relative"
                    *ngIf="!allow_multiday"
                >
                    <label for="date">
                        {{ 'FORM.DATE' | translate }}<span>*</span>
                    </label>
                    <a-date-field
                        name="date"
                        formControlName="date"
                        [to]="end_date"
                        [use_24hr]="use_24hr"
                        [timezone]="timezone"
                    >
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                    <mat-checkbox
                        formControlName="all_day"
                        *ngIf="allow_all_day"
                        class="absolute -top-2 right-2"
                    >
                        {{ 'FORM.ALL_DAY' | translate }}
                    </mat-checkbox>
                </div>
            </div>
            <div
                class="flex items-center flex-wrap sm:space-x-2"
                *ngIf="allow_multiday"
            >
                <div class="flex-1 min-w-[256px] relative">
                    <label for="date">
                        {{ 'FORM.DATE' | translate }}<span>*</span>
                    </label>
                    <a-date-field
                        name="date"
                        formControlName="date"
                        [to]="end_date"
                        [use_24hr]="use_24hr"
                        [timezone]="timezone"
                        [range]="1"
                    >
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                    <mat-checkbox
                        formControlName="all_day"
                        *ngIf="allow_all_day"
                        class="absolute -top-2 right-2"
                    >
                        {{ 'FORM.ALL_DAY' | translate }}
                    </mat-checkbox>
                </div>
                <div class="flex-1 min-w-[256px] relative">
                    <label for="date">
                        {{ 'FORM.END_DATE' | translate }}<span>*</span>
                    </label>
                    <a-date-field
                        name="date"
                        formControlName="date_end"
                        [from]="start_date"
                        [to]="end_date"
                        [use_24hr]="use_24hr"
                        [timezone]="timezone"
                        [range]="2"
                    >
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                </div>
            </div>
            <div
                class="flex items-center space-x-2"
                *ngIf="!form.value.all_day"
            >
                <div class="flex-1 w-1/3">
                    <label for="start-time">
                        {{ 'FORM.START_TIME' | translate }}
                        <span>*</span>
                    </label>
                    <a-time-field
                        name="start-time"
                        [ngModel]="form.getRawValue().date"
                        (ngModelChange)="form.patchValue({ date: $event })"
                        [ngModelOptions]="{ standalone: true }"
                        [use_24hr]="use_24hr"
                        [timezone]="timezone"
                    ></a-time-field>
                </div>
                <div class="flex-1 w-1/3" *ngIf="allow_multiday">
                    <label for="end-time">
                        {{ 'FORM.END_TIME' | translate }}<span>*</span>
                    </label>
                    <a-time-field
                        name="end-time"
                        [ngModel]="form.value.date_end"
                        (ngModelChange)="form.patchValue({ date_end: $event })"
                        [ngModelOptions]="{ standalone: true }"
                        [from]="form?.getRawValue()?.date + 30 * 60 * 1000"
                        [use_24hr]="use_24hr"
                        [extra_info_fn]="duration_info"
                        [timezone]="timezone"
                    ></a-time-field>
                </div>
                <div class="flex-1 w-1/3" *ngIf="!allow_multiday">
                    <label for="end-time">
                        {{ 'FORM.END_TIME' | translate }}<span>*</span>
                    </label>
                    <a-duration-field
                        name="end-time"
                        formControlName="duration"
                        [time]="form?.getRawValue()?.date"
                        [max]="max_duration"
                        [use_24hr]="use_24hr"
                        [timezone]="timezone"
                    ></a-duration-field>
                </div>
            </div>
            <div *ngIf="can_book_for_others" class="w-full flex flex-col">
                <label for="host">
                    {{ 'FORM.HOST' | translate }}<span>*</span>
                </label>
                <host-select-field
                    name="host"
                    formControlName="organiser"
                ></host-select-field>
                <div class="flex flex-col flex-1">
                    <label for="host_entity">Host's Entity:</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="host_entity"
                            formControlName="host_entity"
                            placeholder="Organisational Entity of the Host"
                            [matAutocomplete]="auto"
                        />
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete" class="w-full">
                        <mat-option
                            *ngFor="let option of filtered_entities | async"
                            [value]="option"
                        >
                            {{ option }}
                        </mat-option>
                    </mat-autocomplete>
                </div>
            </div>
            <div *ngIf="can_book_for_anyone" class="w-full flex flex-col">
                <label for="host">
                    {{ 'FORM.HOST' | translate }}<span>*</span>
                </label>
                <a-user-search-field
                    name="host"
                    formControlName="organiser"
                    class="mb-4"
                ></a-user-search-field>
                <div class="flex flex-col flex-1">
                    <label for="host_entity">Host's Entity:</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="host_entity"
                            formControlName="host_entity"
                            placeholder="Organisational Entity of the Host"
                            [matAutocomplete]="auto"
                        />
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete" class="w-full">
                        <mat-option
                            *ngFor="let option of filtered_entities | async"
                            [value]="option"
                        >
                            {{ option }}
                        </mat-option>
                    </mat-autocomplete>
                </div>
            </div>
            <div *ngIf="allow_recurrence" class="w-full flex flex-col">
                <label for="recurrence">
                    {{ 'FORM.RECURRENCE' | translate }}<span>*</span>
                </label>
                <recurrence-field
                    name="recurrence"
                    [date]="form.getRawValue().date"
                    formControlName="recurrence"
                ></recurrence-field>
                <mat-checkbox
                    *ngIf="form.value.id"
                    formControlName="update_master"
                >
                    Update all future events
                </mat-checkbox>
            </div>
        </div>
    `,
    styles: [],
})
export class MeetingFormDetailsComponent extends AsyncHandler {
    @Input() public form: FormGroup;

    public readonly host_entity_list: Observable<string[]> =
        this._org.initialised.pipe(
            filter((_) => !!_),
            switchMap((_) =>
                showMetadata(this._org.organisation.id, 'entities').pipe(
                    catchError(() => of({ details: [] } as any)),
                ),
            ),
            map((_: PlaceMetadata) =>
                _.details instanceof Array ? _.details : [],
            ),
            shareReplay(1),
        );

    private _host_entity = new BehaviorSubject<string>('');

    public filtered_entities = combineLatest([
        this.host_entity_list,
        this._host_entity,
    ]).pipe(
        map(([list, entity]) =>
            entity
                ? list.filter((_) =>
                      _.toLowerCase().includes(entity.toLowerCase()),
                  )
                : list,
        ),
    );

    public readonly force_time = set(Date.now(), {
        hours: 6,
        minutes: 0,
    }).valueOf();

    public get max_duration() {
        return this._settings.get('app.events.max_duration') || 480;
    }

    public get can_book_for_others() {
        return this._settings.get('app.events.can_book_for_others');
    }

    public get can_book_for_anyone() {
        return this._settings.get('app.events.can_book_for_anyone');
    }

    public get allow_all_day() {
        return this._settings.get('app.events.allow_all_day');
    }

    public get allow_recurrence() {
        return (
            this._settings.get('app.events.allow_recurrence') &&
            this.form.value.duration <= 24 * 60
        );
    }

    public get allow_multiday() {
        return (
            this._settings.get('app.events.allow_multiday') ||
            this._event_form.is_multiday
        );
    }

    public get timezone() {
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public get start_date() {
        const date = this.form.getRawValue().date;
        const date_end = this.form.getRawValue().date_end;
        const is_next_day =
            format(date, 'yyyy-MM-dd') !== format(date_end, 'yyyy-MM-dd');
        return is_next_day
            ? startOfDay(date).valueOf()
            : addMinutes(date, 30).valueOf();
    }

    public get end_date() {
        return endOfDay(
            addDays(
                Date.now(),
                this._settings.get('app.events.allowed_future_days') || 180,
            ),
        ).valueOf();
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public readonly duration_info = (time: number) => {
        const date = this.form.getRawValue().date;
        if (format(date, 'yyyy-MM-dd') !== format(time, 'yyyy-MM-dd'))
            return '';
        const diff = differenceInMinutes(time, date);
        return ` (${formatDuration({
            hours: Math.floor(diff / 60),
            minutes: diff % 60,
        })})`;
    };

    constructor(
        private _settings: SettingsService,
        private _event_form: EventFormService,
        private _org: OrganisationService,
    ) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.form && this.form) {
            this.subscription(
                'host_entity_change',
                this.form.valueChanges.subscribe(() =>
                    this._host_entity.next(this.form.getRawValue().host_entity),
                ),
            );
            this._host_entity.next(this.form.getRawValue().host_entity);
        }
    }
}
