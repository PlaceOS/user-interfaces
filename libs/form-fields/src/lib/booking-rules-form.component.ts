import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
    BookingRuleset,
    SettingsService,
    getInvalidFields,
    notifyError,
    randomString,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { queryZones } from '@placeos/ts-client';
import { endOfDay, set, startOfDay } from 'date-fns';
import { of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';

@Component({
    selector: 'booking-rules-form',
    template: `
        <div class="flex flex-col space-y-2" [formGroup]="form">
            <div class="flex items-center space-x-2">
                <div class="flex flex-col flex-1">
                    <label for="zone">Zone<span>*</span>:</label>
                    <mat-form-field appearance="outline">
                        <mat-select name="zone" formControlName="zone">
                            <mat-option value="*">Any Zone</mat-option>
                            <mat-option
                                *ngFor="let zone of building_zones | async"
                                [value]="zone.id"
                            >
                                {{ zone.display_name || zone.name }}
                            </mat-option>
                        </mat-select>
                        <mat-error>A valid zone is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col flex-1">
                    <label for="name">Name<span>*</span>:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            formControlName="name"
                            placeholder="Ruleset Name"
                        />
                        <mat-error>A valid name is required</mat-error>
                    </mat-form-field>
                </div>
            </div>
            <div class="flex items-center space-x-2" formGroupName="rules">
                <div class="flex flex-col flex-1">
                    <mat-checkbox
                        name="hidden"
                        formControlName="hidden"
                        matTooltip="Prevent user from booking the resource if the conditions match"
                    >
                        Prevent Bookings
                    </mat-checkbox>
                </div>
                <div class="flex flex-col flex-1">
                    <mat-checkbox
                        name="auto_approve"
                        formControlName="auto_approve"
                        *ngIf="!form.value.rules.hidden"
                        matTooltip="Whether resource should be auto-approved when booking if the conditions match"
                    >
                        Auto Approve Bookings
                    </mat-checkbox>
                </div>
            </div>
            <div class="flex flex-col">
                <label for="zone">Rule Conditions:</label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="zone"
                        multiple
                        [(ngModel)]="available_conditions"
                        [ngModelOptions]="{ standalone: true }"
                        placeholder="No Conditions. Match all resources in zone"
                    >
                        <mat-option value="groups">Groups</mat-option>
                        <mat-option value="locations">Locations</mat-option>
                        <mat-option value="min_length">
                            Minimum Length
                        </mat-option>
                        <mat-option value="max_length">
                            Maximum Length
                        </mat-option>
                        <mat-option value="is_before">
                            Is Within Days
                        </mat-option>
                        <mat-option value="is_after">
                            Is After Days
                        </mat-option>
                        <mat-option value="is_between">
                            Is Between Hours
                        </mat-option>
                        <mat-option value="is_period">
                            Between Dates
                        </mat-option>
                        <mat-option value="resource_ids">Resources</mat-option>
                    </mat-select>
                    <mat-error>A valid zone is required</mat-error>
                </mat-form-field>
            </div>
            <div
                class="flex flex-col"
                *ngIf="available_conditions.includes('groups')"
                formGroupName="conditions"
            >
                <label for="groups"
                    >{{ form.value.rules.hidden ? 'Prevent' : 'Allow' }} Booking
                    for Groups:</label
                >
                <item-list-field
                    name="groups"
                    formControlName="groups"
                    placeholder="User groups"
                ></item-list-field>
            </div>
            <div
                class="flex flex-col"
                *ngIf="available_conditions.includes('locations')"
                formGroupName="conditions"
            >
                <label for="locations">Locations:</label>
                <item-list-field
                    name="locations"
                    formControlName="locations"
                    placeholder="Locations"
                ></item-list-field>
            </div>
            <div
                class="flex items-center space-x-2"
                *ngIf="
                    available_conditions.includes('min_length') ||
                    available_conditions.includes('max_length')
                "
                formGroupName="conditions"
            >
                <div
                    class="flex flex-col flex-1"
                    *ngIf="available_conditions.includes('min_length')"
                >
                    <label for="min_length"
                        >{{
                            form.value.rules.hidden ? 'Prevent' : 'Allow'
                        }}
                        booking with a minimum length of:</label
                    >
                    <a-duration-field
                        name="min_length"
                        [min]="15"
                        [max]="1440"
                        [step]="15"
                        formControlName="min_length"
                    ></a-duration-field>
                </div>
                <div
                    class="flex flex-col flex-1"
                    *ngIf="available_conditions.includes('max_length')"
                >
                    <label for="max_length"
                        >{{
                            form.value.rules.hidden ? 'Prevent' : 'Allow'
                        }}
                        booking with a maximum length up to:</label
                    >
                    <a-duration-field
                        name="max_length"
                        [min]="form.value.conditions.min_length || 15"
                        [max]="1440"
                        [step]="15"
                        formControlName="max_length"
                    ></a-duration-field>
                </div>
            </div>
            <div
                class="flex flex-col"
                *ngIf="available_conditions.includes('is_before')"
                formGroupName="conditions"
            >
                <label for="is-before"
                    >{{ form.value.rules.hidden ? 'Prevent' : 'Allow' }} booking
                    before:</label
                >
                <mat-form-field appearance="outline" class="flex-1">
                    <mat-select name="is-before" formControlName="is_before">
                        <mat-option
                            *ngFor="let time of duration_blocks"
                            [value]="time"
                        >
                            {{ time }}
                        </mat-option>
                    </mat-select>
                    <mat-error>A valid time is required</mat-error>
                </mat-form-field>
            </div>
            <div
                class="flex flex-col"
                *ngIf="available_conditions.includes('is_after')"
                formGroupName="conditions"
            >
                <label for="is-after"
                    >{{ form.value.rules.hidden ? 'Prevent' : 'Allow' }} booking
                    after:</label
                >
                <mat-form-field appearance="outline" class="flex-1">
                    <mat-select name="is-after" formControlName="is_after">
                        <mat-option
                            *ngFor="let time of duration_blocks"
                            [value]="time"
                        >
                            {{ time }}
                        </mat-option>
                    </mat-select>
                    <mat-error>A valid time is required</mat-error>
                </mat-form-field>
            </div>
            <div
                class="flex flex-col"
                *ngIf="available_conditions.includes('is_period')"
                formGroupName="conditions"
            >
                <label for="is-after"
                    >{{ form.value.rules.hidden ? 'Prevent' : 'Allow' }} booking
                    between dates:</label
                >
                <div class="flex items-center space-x-2">
                    <a-date-field
                        class="flex-1"
                        [ngModel]="form.value.conditions.is_period[0]"
                        [ngModelOptions]="{ standalone: true }"
                        (ngModelChange)="
                            setIsPeriod(
                                $event,
                                form.value.conditions.is_period[1]
                            )
                        "
                    >
                    </a-date-field>
                    <a-date-field
                        class="flex-1"
                        [from]="form.value.conditions.is_period[0]"
                        [ngModel]="form.value.conditions.is_period[1]"
                        [ngModelOptions]="{ standalone: true }"
                        (ngModelChange)="
                            setIsPeriod(
                                form.value.conditions.is_period[0],
                                $event
                            )
                        "
                    >
                    </a-date-field>
                </div>
            </div>
            <div
                class="flex flex-col"
                *ngIf="available_conditions.includes('is_between')"
                formGroupName="conditions"
            >
                <label for="is_between"
                    >{{ form.value.rules.hidden ? 'Prevent' : 'Allow' }} booking
                    between:</label
                >
                <div class="flex items-center space-x-2 w-full">
                    <mat-form-field appearance="outline" class="flex-1">
                        <mat-select
                            name="start-time"
                            [ngModel]="form.value.conditions.is_between[0] || 6"
                            [ngModelOptions]="{ standalone: true }"
                            (ngModelChange)="
                                setIsBetween(
                                    $event,
                                    form.value.conditions.is_between[1]
                                )
                            "
                        >
                            <mat-option
                                *ngFor="let time of time_blocks"
                                [value]="time.id"
                            >
                                {{ time.value | date: time_format }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>

                    <mat-form-field appearance="outline" class="flex-1">
                        <mat-select
                            name="end-time"
                            [ngModel]="
                                form.value.conditions.is_between[1] || 18
                            "
                            (ngModelChange)="
                                setIsBetween(
                                    form.value.conditions.is_between[0],
                                    $event
                                )
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <ng-container *ngFor="let time of time_blocks">
                                <mat-option
                                    [value]="time.id"
                                    *ngIf="
                                        time.id >
                                        (form.value.conditions.is_between[0] ||
                                            6)
                                    "
                                >
                                    {{ time.value | date: time_format }}
                                </mat-option>
                            </ng-container>
                        </mat-select>
                        <mat-error>A valid end time is required</mat-error>
                    </mat-form-field>
                </div>
            </div>
            <div
                class="flex flex-col"
                *ngIf="available_conditions.includes('resource_ids')"
                formGroupName="conditions"
            >
                <label for="resource_ids">
                    {{ form.value.rules.hidden ? 'Prevent' : 'Allow' }} booking
                    these resources:
                </label>
                <item-list-field
                    name="resource_ids"
                    formControlName="resource_ids"
                    placeholder="Resource IDs"
                ></item-list-field>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                padding: 0.5rem;
            }
        `,
    ],
})
export class BookingRulesFormComponent {
    @Input() public ruleset?: BookingRuleset;
    @Input() public save = false;
    @Output() public rulesetChange = new EventEmitter<BookingRuleset>();

    public available_conditions: string[] = [];

    public readonly building_zones = this._org.active_building.pipe(
        filter((_) => !!_),
        switchMap((bld) =>
            queryZones({ parent_id: bld.id }).pipe(
                catchError(() => of({ data: [] }))
            )
        ),
        map((res) => res.data),
        shareReplay(1)
    );

    public readonly time_blocks = new Array(24 * 4).fill(0).map((_, idx) => {
        const hour = Math.floor(idx / 4);
        const minutes = (idx % 4) * 15;
        return {
            id: hour + minutes / 60,
            value: set(new Date(), { hours: hour, minutes }),
        };
    });

    public duration_blocks = [
        '1 Day',
        '2 Days',
        '3 Days',
        '4 Days',
        '5 Days',
        '1 Week',
        '2 Weeks',
        '3 Weeks',
        '4 Weeks',
        '1 Month',
        '2 Months',
        '3 Months',
        '4 Months',
        '5 Months',
        '6 Months',
    ];

    public readonly form = new FormGroup({
        id: new FormControl(`ruleset-${randomString(8)}`),
        zone: new FormControl('*', Validators.required),
        name: new FormControl('', Validators.required),
        rules: new FormGroup({
            auto_approve: new FormControl(false),
            hidden: new FormControl(false),
        }),
        conditions: new FormGroup({
            groups: new FormControl([]),
            locations: new FormControl([]),
            min_length: new FormControl(0),
            max_length: new FormControl(24 * 60),
            is_before: new FormControl('1 Week'),
            is_after: new FormControl('1 Day'),
            is_between: new FormControl([6, 18]),
            is_period: new FormControl([
                startOfDay(Date.now()).valueOf(),
                endOfDay(Date.now()).valueOf(),
            ]),
            resource_ids: new FormControl([]),
        }),
    });

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {}

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.ruleset && this.ruleset) {
            this.available_conditions = Object.keys(
                this.ruleset.conditions || {}
            );
            this.form.patchValue(this.ruleset);
        }
        if (
            changes.save &&
            this.save !== changes.save.previousValue &&
            !changes.save.firstChange
        ) {
            this.post();
        }
    }

    public setIsBetween(start: number, end: number) {
        if (!start || !end) return;
        if (start > end) end = start + 0.25;
        this.form.patchValue({ conditions: { is_between: [start, end] } });
    }

    public setIsPeriod(start: number, end: number) {
        if (!start || !end) return;
        if (start > end) end = start;
        this.form.patchValue({
            conditions: {
                is_period: [
                    startOfDay(start).valueOf(),
                    endOfDay(end).valueOf(),
                ],
            },
        });
    }

    public post(): void {
        if (!this.form.valid) {
            return notifyError(
                `Some form fields are invalid. [${getInvalidFields(
                    this.form
                ).join(', ')}]`
            );
        }
        const value = this.form.getRawValue();
        const condition_keys = Object.keys(value.conditions);
        for (const key of condition_keys) {
            if (!this.available_conditions.includes(key)) {
                delete value.conditions[key];
            }
        }
        this.rulesetChange.emit(value as any);
    }
}
