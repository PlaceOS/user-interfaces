import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    input,
    linkedSignal,
    output,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    Building,
    OrganisationService,
    TIMEZONES_IANA,
    getInvalidFields,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { addZone, authority, updateZone } from '@placeos/ts-client';
import { startWith } from 'rxjs/operators';

@Component({
    selector: 'building-form',
    template: `
        @if (form) {
            <form building [formGroup]="form">
                @if (region_list().length) {
                    <div class="flex flex-col">
                        <label for="region">
                            {{ 'RESOURCE.REGION' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="region"
                                formControlName="parent_id"
                                [placeholder]="
                                    'COMMON.REGION_SELECT' | translate
                                "
                            >
                                <mat-option [value]="default_parent">
                                    {{ 'COMMON.NONE' | translate }}
                                </mat-option>
                                @for (
                                    region of region_list();
                                    track region.id
                                ) {
                                    <mat-option [value]="region.id">
                                        {{ region.display_name || region.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="display-name"
                        >{{ 'FORM.DISPLAY_NAME' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="display-name"
                            [placeholder]="'FORM.DISPLAY_NAME' | translate"
                            formControlName="display_name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="display-name">{{
                        'COMMON.TIMEZONE' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <icon matPrefix class="text-2xl">search</icon>
                        <input
                            matInput
                            formControlName="timezone"
                            [placeholder]="'COMMON.TIMEZONE' | translate"
                            [matAutocomplete]="auto"
                        />
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (tz of filtered_timezones(); track tz) {
                            <mat-option [value]="tz">{{ tz }}</mat-option>
                        }
                        @if (!timezones.length) {
                            <mat-option [disabled]="true">
                                {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                </div>
                <div class="flex flex-col">
                    <label for="address">
                        {{ 'COMMON.LOCATION' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="address"
                            [placeholder]="'COMMON.LOCATION' | translate"
                            formControlName="location"
                        />
                    </mat-form-field>
                </div>
            </form>
        }
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        TranslatePipe,
        IconComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatInputModule,
    ],
})
export class BuildingFormComponent extends AsyncHandler {
    private _org = inject(OrganisationService);

    public readonly building = input<Building | null>(null);
    public readonly save = input(0);
    public readonly loadingInput = input(false, { alias: 'loading' });
    public readonly loading = linkedSignal(this.loadingInput);
    public readonly loadingChange = output<boolean>();
    public readonly done = output<any>();

    public readonly timezones = TIMEZONES_IANA;
    public readonly region_list = toSignal(this._org.region_list, {
        initialValue: [],
    });

    public readonly form = new FormGroup({
        id: new FormControl(''),
        parent_id: new FormControl(this._org.organisation.id, [
            Validators.required,
        ]),
        display_name: new FormControl('', [Validators.required]),
        timezone: new FormControl(
            Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || '',
        ),
        location: new FormControl(''),
    });
    private readonly _timezone = toSignal(
        this.form.controls.timezone.valueChanges.pipe(
            startWith(this.form.controls.timezone.value || ''),
        ),
        { initialValue: this.form.controls.timezone.value || '' },
    );
    public readonly filtered_timezones = computed(() => {
        const timezone = (this._timezone() || '').toLowerCase();
        return this.timezones.filter((_) => _.toLowerCase().includes(timezone));
    });

    public get default_parent() {
        return this._org.organisation.id;
    }

    constructor() {
        super();
        effect(() => {
            const building = this.building();
            if (building) this.form.patchValue(building);
        });
        effect(() => {
            if (this.save()) this.saveChanges();
        });
    }

    public async saveChanges() {
        this.form.patchValue({
            parent_id: this.form.value.parent_id || this._org.organisation.id,
        });
        if (!this.form.valid) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        const data = this.form.getRawValue();
        this.loading.set(true);
        this.loadingChange.emit(true);
        const body = {
            ...data,
            tags: ['building'],
            name: `BLD ${authority().description} ${data.display_name}`,
        };
        const building = await (
            data.id ? updateZone(data.id, body) : addZone(body)
        ).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.BUILDINGS_SAVE_ERROR', {
                    error: e.message || e.error || e,
                }),
            );
            this.loading.set(false);
            this.loadingChange.emit(false);
            throw e;
        });
        notifySuccess(i18n('APP.CONCIERGE.BUILDINGS_SAVE_SUCCESS'));
        this.loading.set(false);
        this.loadingChange.emit(false);
        this.done.emit(building);
    }
}
