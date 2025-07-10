import { CommonModule } from '@angular/common';
import {
    Component,
    OnChanges,
    SimpleChanges,
    inject,
    input,
    output,
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    BookingRuleset,
    SettingsService,
    getInvalidFields,
    i18n,
    notifyError,
    randomString,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { queryZones } from '@placeos/ts-client';
import { endOfDay, set, startOfDay } from 'date-fns';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { DateFieldComponent } from './date-field.component';
import { DurationFieldComponent } from './duration-field.component';
import { ItemListFieldComponent } from './item-list-field.component';

@Component({
    selector: 'booking-rules-form',
    template: `
        <div class="flex flex-col space-y-2" [formGroup]="form">
            <div class="flex items-center space-x-4">
                <div class="flex flex-1 flex-col">
                    <label for="zone"
                        >{{ 'COMMON.ZONE' | translate }}<span>*</span>:</label
                    >
                    <mat-form-field appearance="outline">
                        <mat-select name="zone" formControlName="zone">
                            <mat-option value="*">{{
                                'COMMON.ZONE_ANY' | translate
                            }}</mat-option>
                            @for (zone of building_zones | async; track zone) {
                                <mat-option [value]="zone.id">
                                    {{ zone.display_name || zone.name }}
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>{{
                            'COMMON.ZONE_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-1 flex-col">
                    <label for="name"
                        >{{ 'FORM.NAME' | translate }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            formControlName="name"
                            placeholder="Ruleset Name"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
            </div>
            <div class="flex items-center space-x-4 pb-4" formGroupName="rules">
                <div class="flex flex-1 flex-col">
                    <settings-toggle
                        formControlName="hidden"
                        [name]="'BOOKINGS.PREVENT' | translate"
                        [info]="'BOOKINGS.PREVENT_INFO' | translate"
                    >
                    </settings-toggle>
                </div>
                <div class="flex flex-1 flex-col">
                    @if (!form.value.rules.hidden) {
                        <settings-toggle
                            formControlName="auto_approve"
                            [name]="'BOOKINGS.AUTO_APPROVE' | translate"
                            [info]="'BOOKINGS.AUTO_APPROVE_INFO' | translate"
                        >
                        </settings-toggle>
                    }
                </div>
            </div>
            <div class="flex flex-col">
                <label for="zone">{{
                    'BOOKINGS.CONDITIONS' | translate
                }}</label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="zone"
                        multiple
                        [(ngModel)]="available_conditions"
                        [ngModelOptions]="{ standalone: true }"
                        [placeholder]="
                            'BOOKINGS.CONDITIONS_PLACEHOLDER' | translate
                        "
                    >
                        <mat-option value="groups">
                            {{ 'BOOKINGS.CONDITION_GROUPS' | translate }}
                        </mat-option>
                        <mat-option value="locations">
                            {{ 'BOOKINGS.CONDITION_LOCATION' | translate }}
                        </mat-option>
                        <mat-option value="tags">
                            {{ 'BOOKINGS.CONDITION_TAGS' | translate }}
                        </mat-option>
                        <mat-option value="min_length">
                            {{ 'BOOKINGS.CONDITION_MIN_LENGTH' | translate }}
                        </mat-option>
                        <mat-option value="max_length">
                            {{ 'BOOKINGS.CONDITION_MAX_LENGTH' | translate }}
                        </mat-option>
                        <mat-option value="is_before">
                            {{ 'BOOKINGS.CONDITION_WITHIN' | translate }}
                        </mat-option>
                        <mat-option value="is_after">
                            {{ 'BOOKINGS.CONDITION_AFTER' | translate }}
                        </mat-option>
                        <mat-option value="is_between">
                            {{ 'BOOKINGS.CONDITION_BETWEEN_HOURS' | translate }}
                        </mat-option>
                        <mat-option value="is_period">
                            {{ 'BOOKINGS.CONDITION_BETWEEN_DATES' | translate }}
                        </mat-option>
                        <mat-option value="resource_ids">
                            {{ 'BOOKINGS.CONDITION_RESOURCES' | translate }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            @if (available_conditions.includes('groups')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="groups">
                        {{
                            (form.value.rules.hidden
                                ? 'BOOKINGS.GROUPS_DENY'
                                : 'BOOKINGS.GROUPS_ALLOW'
                            ) | translate
                        }}
                    </label>
                    <item-list-field
                        name="groups"
                        formControlName="groups"
                        [placeholder]="'BOOKINGS.GROUPS' | translate"
                    ></item-list-field>
                </div>
            }
            @if (available_conditions.includes('locations')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="locations">
                        {{ 'BOOKINGS.CONDITION_LOCATION' | translate }}
                    </label>
                    <item-list-field
                        name="locations"
                        formControlName="locations"
                        [placeholder]="
                            'BOOKINGS.CONDITION_LOCATION' | translate
                        "
                    ></item-list-field>
                </div>
            }
            @if (available_conditions.includes('tags')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="tags">
                        {{ 'BOOKINGS.CONDITION_TAGS' | translate }}
                    </label>
                    <item-list-field
                        name="tags"
                        formControlName="tags"
                        [placeholder]="'BOOKINGS.CONDITION_TAGS' | translate"
                    ></item-list-field>
                </div>
            }
            @if (
                available_conditions.includes('min_length') ||
                available_conditions.includes('max_length')
            ) {
                <div
                    class="flex items-center space-x-2"
                    formGroupName="conditions"
                >
                    @if (available_conditions.includes('min_length')) {
                        <div class="flex flex-1 flex-col">
                            <label for="min_length">
                                {{
                                    (form.value.rules.hidden
                                        ? 'BOOKINGS.MIN_LENGTH_DENY'
                                        : 'BOOKINGS.MIN_LENGTH_ALLOW'
                                    ) | translate
                                }}
                            </label>
                            <a-duration-field
                                name="min_length"
                                [min]="15"
                                [max]="1440"
                                [step]="15"
                                formControlName="min_length"
                            ></a-duration-field>
                        </div>
                    }
                    @if (available_conditions.includes('max_length')) {
                        <div class="flex flex-1 flex-col">
                            <label for="max_length">
                                {{
                                    (form.value.rules.hidden
                                        ? 'BOOKINGS.MAX_LENGTH_DENY'
                                        : 'BOOKINGS.MAX_LENGTH_ALLOW'
                                    ) | translate
                                }}
                            </label>
                            <a-duration-field
                                name="max_length"
                                [min]="form.value.conditions.min_length || 15"
                                [max]="1440"
                                [step]="15"
                                formControlName="max_length"
                            ></a-duration-field>
                        </div>
                    }
                </div>
            }
            @if (available_conditions.includes('is_before')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="is-before">
                        {{
                            (form.value.rules.hidden
                                ? 'BOOKINGS.BEFORE_DENY'
                                : 'BOOKINGS.BEFORE_ALLOW'
                            ) | translate
                        }}
                    </label>
                    <mat-form-field appearance="outline" class="flex-1">
                        <mat-select
                            name="is-before"
                            formControlName="is_before"
                        >
                            @for (time of duration_blocks; track time) {
                                <mat-option [value]="time">
                                    {{ time }}
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>{{
                            'BOOKINGS.BEFORE_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
            }
            @if (available_conditions.includes('is_after')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="is-after">
                        {{
                            (form.value.rules.hidden
                                ? 'BOOKINGS.AFTER_DENY'
                                : 'BOOKINGS.AFTER_ALLOW'
                            ) | translate
                        }}
                    </label>
                    <mat-form-field appearance="outline" class="flex-1">
                        <mat-select name="is-after" formControlName="is_after">
                            @for (time of duration_blocks; track time) {
                                <mat-option [value]="time">
                                    {{ time }}
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>
                            {{ 'BOOKINGS.AFTER_REQUIRED' | translate }}
                        </mat-error>
                    </mat-form-field>
                </div>
            }
            @if (available_conditions.includes('is_period')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="is-after">
                        {{
                            (form.value.rules.hidden
                                ? 'BOOKINGS.BETWEEN_DATES_ALLOW'
                                : 'BOOKINGS.BETWEEN_DATES_DENY'
                            ) | translate
                        }}
                    </label>
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
            }
            @if (available_conditions.includes('is_between')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="is_between">
                        {{
                            (form.value.rules.hidden
                                ? 'BOOKINGS.BETWEEN_HOURS_ALLOW'
                                : 'BOOKINGS.BETWEEN_HOURS_DENY'
                            ) | translate
                        }}
                    </label>
                    <div class="flex w-full items-center space-x-2">
                        <mat-form-field appearance="outline" class="flex-1">
                            <mat-select
                                name="start-time"
                                [ngModel]="
                                    form.value.conditions.is_between[0] || 6
                                "
                                [ngModelOptions]="{ standalone: true }"
                                (ngModelChange)="
                                    setIsBetween(
                                        $event,
                                        form.value.conditions.is_between[1]
                                    )
                                "
                            >
                                @for (time of time_blocks; track time) {
                                    <mat-option [value]="time.id">
                                        {{ time.value | date: time_format }}
                                    </mat-option>
                                }
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
                                @for (time of time_blocks; track time) {
                                    @if (
                                        time.id >
                                        (form.value.conditions.is_between[0] ||
                                            6)
                                    ) {
                                        <mat-option [value]="time.id">
                                            {{ time.value | date: time_format }}
                                        </mat-option>
                                    }
                                }
                            </mat-select>
                            <mat-error>{{
                                'BOOKINGS.BETWEEN_HOURS_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                </div>
            }
            @if (available_conditions.includes('resource_ids')) {
                <div class="flex flex-col" formGroupName="conditions">
                    <label for="resource_ids">
                        {{
                            (form.value.rules.hidden
                                ? 'BOOKINGS.RESOURCES_ALLOW'
                                : 'BOOKINGS.RESOURCES_DENY'
                            ) | translate
                        }}
                    </label>
                    <item-list-field
                        name="resource_ids"
                        formControlName="resource_ids"
                        [placeholder]="
                            'BOOKINGS.RESOURCES_PLACEHOLDER' | translate
                        "
                    ></item-list-field>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        ItemListFieldComponent,
        DateFieldComponent,
        DurationFieldComponent,
        SettingsToggleComponent,
        TranslatePipe,
    ],
})
export class BookingRulesFormComponent implements OnChanges {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly ruleset = input<BookingRuleset>(undefined);
    public readonly save = input(false);
    public readonly rulesetChange = output<BookingRuleset>();

    public available_conditions: string[] = [];

    public readonly building_zones = this._org.active_building.pipe(
        filter((_) => !!_),
        switchMap((bld) =>
            queryZones({ parent_id: bld.id }).pipe(
                catchError(() => of({ data: [] })),
            ),
        ),
        map((res) => res.data),
        shareReplay(1),
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
        '6 Days',
        '1 Week',
        '2 Weeks',
        '3 Weeks',
        '4 Weeks',
        '5 Weeks',
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
            tags: new FormControl([]),
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

    public ngOnChanges(changes: SimpleChanges): void {
        const ruleset = this.ruleset();
        if (changes.ruleset && ruleset) {
            this.available_conditions = Object.keys(ruleset.conditions || {});
            this.form.patchValue(ruleset);
        }
        if (
            changes.save &&
            this.save() !== changes.save.previousValue &&
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
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
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
