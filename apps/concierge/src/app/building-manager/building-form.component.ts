import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    input,
    linkedSignal,
    output,
    signal,
} from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    Building,
    OrganisationService,
    TIMEZONES_IANA,
    getInvalidSignalFields,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { addZone, authority, updateZone } from '@placeos/ts-client';

@Component({
    selector: 'building-form',
    template: `
        <form building>
            @if (region_list().length) {
                <div class="flex flex-col">
                    <label for="region">
                        {{ 'RESOURCE.REGION' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.parent_id"
                            [placeholder]="'COMMON.REGION_SELECT' | translate"
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
                            [placeholder]="'FORM.DISPLAY_NAME' | translate"
                            [formField]="form.display_name"
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
                            [formField]="form.timezone"
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
                            [placeholder]="'COMMON.LOCATION' | translate"
                            [formField]="form.location"
                        />
                    </mat-form-field>
                </div>
            </form>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        TranslatePipe,
        IconComponent,
        FormField,
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
    public readonly region_list = this._org.region_list;

    public readonly model = signal({
        id: '',
        parent_id: this._org.organisation.id,
        display_name: '',
        timezone: Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || '',
        location: '',
    });

    public readonly form = form(this.model, (p) => {
        required(p.parent_id);
        required(p.display_name);
    });

    public readonly filtered_timezones = computed(() => {
        const timezone = (this.model().timezone || '').toLowerCase();
        return this.timezones.filter((_) => _.toLowerCase().includes(timezone));
    });

    public get default_parent() {
        return this._org.organisation.id;
    }

    constructor() {
        super();
        effect(() => {
            const building = this.building() as any;
            if (!building) return;
            this.model.update((m) => ({
                ...m,
                id: building.id ?? m.id,
                parent_id: building.parent_id ?? m.parent_id,
                display_name: building.display_name ?? m.display_name,
                timezone: building.timezone ?? m.timezone,
                location: building.location ?? m.location,
            }));
        });
        effect(() => {
            if (this.save()) this.saveChanges();
        });
    }

    public async saveChanges() {
        this.model.update((m) => ({
            ...m,
            parent_id: m.parent_id || this._org.organisation.id,
        }));
        this.form().markAsTouched();
        if (!this.form().valid()) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(
                        this.form,
                        this.model,
                    ).join(', '),
                }),
            );
        }
        const data = this.model();
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
