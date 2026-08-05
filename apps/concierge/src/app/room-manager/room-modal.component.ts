import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import {
    Component,
    Injector,
    OnInit,
    computed,
    inject,
    signal,
} from '@angular/core';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import {
    EncryptionLevel,
    addSystem,
    showMetadata,
    updateMetadata,
    updateSystem,
} from '@placeos/ts-client';

import { CommonModule } from '@angular/common';
import { FormField, form } from '@angular/forms/signals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AsyncHandler,
    OrganisationService,
    Space,
    TIMEZONES_IANA,
    getInvalidSignalFields,
    getItemWithKeys,
    i18n,
    notifyError,
    notifyWarn,
    onFieldChange,
    patchSignalModel,
    unique,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { generateSystemsFormFields } from '@placeos/events';
import {
    CounterComponent,
    DurationFieldComponent,
    ImageListFieldComponent,
} from '@placeos/form-fields';
import { SelectMapItemModalComponent } from '../ui/select-map-item-modal.component';

@Component({
    selector: 'room-form-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.ROOMS_EDIT'
                    : 'APP.CONCIERGE.ROOMS_NEW'
                ) | translate
            "
            [loading]="
                loading() ? ('APP.CONCIERGE.ROOMS_SAVING' | translate) : ''
            "
            (confirm)="save()"
        >
            <form system>
                @if (is_new) {
                    <div class="flex flex-col">
                        <label
                            for="zone"
                            [class.error]="
                                form.zone().invalid() && form.zone().touched()
                            "
                        >
                            {{ 'RESOURCE.LEVEL' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [formField]="form.zone"
                                [placeholder]="
                                    'APP.CONCIERGE.ROOMS_SELECT_LEVEL'
                                        | translate
                                "
                            >
                                @for (level of levels(); track level) {
                                    <mat-option [value]="level.id">
                                        {{ level.display_name || level.name }}
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-error>{{
                                'APP.CONCIERGE.ROOMS_LEVEL_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                <div class="flex space-x-2">
                    @if (form.name) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="system-name"
                                [class.error]="
                                    form.name().invalid() &&
                                    form.name().touched()
                                "
                            >
                                {{ 'FORM.NAME' | translate }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="'FORM.NAME' | translate"
                                    [formField]="form.name"
                                />
                                @if (form.name().invalid()) {
                                    <mat-error>
                                        {{ 'FORM.NAME_REQUIRED' | translate }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form.email) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="system-email"
                                [class.error]="
                                    form.email().invalid() &&
                                    form.email().touched()
                                "
                            >
                                {{ 'FORM.EMAIL' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="'FORM.EMAIL' | translate"
                                    [formField]="form.email"
                                />
                                @if (form.email().invalid()) {
                                    <mat-error>
                                        {{ 'FORM.EMAIL_REQUIRED' | translate }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="flex space-x-2">
                    @if (form.display_name) {
                        <div class="flex flex-1 flex-col">
                            <label for="display-name">{{
                                'FORM.DISPLAY_NAME' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'FORM.DISPLAY_NAME' | translate
                                    "
                                    [formField]="form.display_name"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form.display_name) {
                        <div class="flex flex-1 flex-col">
                            <label for="code-name">{{
                                'COMMON.CODE' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="'COMMON.CODE' | translate"
                                    [formField]="form.code"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="flex space-x-2">
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="setup" class="flex items-center">
                            {{
                                'APP.CONCIERGE.ROOMS_DEFAULT_SETUP' | translate
                            }}
                            <icon
                                class="ml-2 text-base"
                                [matTooltip]="
                                    'APP.CONCIERGE.ROOMS_SETUP_INFO' | translate
                                "
                            >
                                info
                            </icon>
                        </label>
                        <a-duration-field
                            [formField]="settings_form.setup"
                            [min]="0"
                        ></a-duration-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="breakdown" class="flex items-center">
                            {{
                                'APP.CONCIERGE.ROOMS_DEFAULT_BREAKDOWN'
                                    | translate
                            }}
                            <icon
                                class="ml-2 text-base"
                                [matTooltip]="
                                    'APP.CONCIERGE.ROOMS_BREAKDOWN_INFO'
                                        | translate
                                "
                            >
                                info
                            </icon>
                        </label>
                        <a-duration-field
                            [min]="0"
                            [formField]="settings_form.breakdown"
                        ></a-duration-field>
                    </div>
                </div>
                <div class="mb-4 flex space-x-2">
                    @if (form.approval) {
                        <div class="flex flex-1 flex-col pt-4">
                            <settings-toggle
                                [label]="'COMMON.REQUIRE_APPROVAL' | translate"
                                [formField]="form.approval"
                            >
                            </settings-toggle>
                        </div>
                    }
                    @if (form.bookable) {
                        <div class="flex flex-1 flex-col pt-4">
                            <settings-toggle
                                [label]="'COMMON.BOOKABLE' | translate"
                                [formField]="form.bookable"
                            >
                            </settings-toggle>
                        </div>
                    }
                </div>
                @if (form.capacity) {
                    <div class="mb-4 flex flex-col">
                        <label
                            for="capacity"
                            [class.error]="
                                form.capacity().invalid() &&
                                form.capacity().touched()
                            "
                        >
                            {{ 'COMMON.CAPACITY' | translate }}
                        </label>
                        <a-counter
                            class="w-full"
                            [formField]="form.capacity"
                            [min]="0"
                            [max]="256"
                        ></a-counter>
                    </div>
                }
                @if (form.description) {
                    <div class="flex flex-col">
                        <label for="description">{{
                            'COMMON.DESCRIPTION' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                [placeholder]="'COMMON.DESCRIPTION' | translate"
                                [formField]="form.description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                @if (form.features) {
                    <div class="flex flex-col">
                        <label
                            [class.error]="
                                form.features().invalid() &&
                                form.features().touched()
                            "
                        >
                            {{ 'COMMON.FEATURES' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-chip-grid
                                #chipList
                                [attr.aria-label]="
                                    'COMMON.FEATURES' | translate
                                "
                            >
                                @for (feature of feature_list; track feature) {
                                    <mat-chip-row
                                        [removable]="true"
                                        (removed)="removeFeature(feature)"
                                    >
                                        {{ feature }}
                                        <icon matChipRemove>close</icon>
                                    </mat-chip-row>
                                }
                                <input
                                    [placeholder]="
                                        'COMMON.FEATURES' | translate
                                    "
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="addFeature($event)"
                                />
                            </mat-chip-grid>
                        </mat-form-field>
                    </div>
                }
                @if (form.map_id) {
                    <div class="flex flex-col">
                        <label for="map_id">{{
                            'EXPLORE.MAP_ID' | translate
                        }}</label>
                        <div class="flex space-x-2">
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'EXPLORE.MAP_ID_PLACEHOLDER' | translate
                                    "
                                    [formField]="form.map_id"
                                />
                            </mat-form-field>
                            <button
                                icon
                                type="button"
                                matRipple
                                class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                                [matTooltip]="
                                    'APP.CONCIERGE.POI_MAP_SELECT' | translate
                                "
                                (click)="selectItemfromMap()"
                            >
                                <icon>place</icon>
                            </button>
                        </div>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="timezone">{{
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
                            <mat-option [value]="tz">
                                {{ tz }}
                            </mat-option>
                        }
                        @if (!timezones().length) {
                            <mat-option [disabled]="true">
                                {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                </div>
                @if (form.images) {
                    <div class="flex flex-col">
                        <label for="images">{{
                            'COMMON.IMAGE' | translate
                        }}</label>
                        <image-list-field
                            [formField]="form.images"
                        ></image-list-field>
                    </div>
                }
                @if (form.timetable_url) {
                    <div class="flex flex-col">
                        <label
                            for="timetable-url"
                            [class.error]="
                                form.timetable_url().invalid() &&
                                form.timetable_url().touched()
                            "
                        >
                            {{ 'COMMON.TIMETABLE_URL' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="
                                    'COMMON.TIMETABLE_URL' | translate
                                "
                                [formField]="form.timetable_url"
                            />
                            <mat-error>
                                {{ 'SYSTEMS.URL_VALID' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (form.room_booking_url) {
                    <div class="flex flex-col">
                        <label
                            for="room-booking-url"
                            [class.error]="
                                form.room_booking_url().invalid() &&
                                form.room_booking_url().touched()
                            "
                        >
                            {{ 'COMMON.ROOM_BOOKING_URL' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [placeholder]="
                                    'COMMON.ROOM_BOOKING_URL' | translate
                                "
                                [formField]="form.room_booking_url"
                            />
                            <mat-error>
                                {{ 'COMMON.URL_VALID' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                }
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [
        `
            mat-checkbox {
                margin-top: 2.5em;
                margin-bottom: 1.5em;
            }

            @media screen and (max-width: 640px) {
                mat-checkbox {
                    margin-top: 0;
                }
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        FullscreenModalShellComponent,
        ImageListFieldComponent,
        FormField,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        CounterComponent,
        SettingsToggleComponent,
        MatSelectModule,
        DurationFieldComponent,
        MatTooltipModule,
    ],
})
export class RoomModalComponent extends AsyncHandler implements OnInit {
    private _data = inject<{
        room: Space;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<RoomModalComponent>>(MatDialogRef);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    private _injector = inject(Injector);

    public readonly loading = signal(false);
    /** Whether the modal is creating a new system (vs editing an existing one) */
    public readonly is_new = !this._data.room?.id;
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;
    /** Group of form fields used for creating the system */
    private readonly _form_ref = generateSystemsFormFields(
        this._data.room as any,
        this._injector,
    );
    public form = this._form_ref.form;
    public model = this._form_ref.model;
    public readonly timezones = signal(TIMEZONES_IANA);
    private readonly _timezone_query = signal(this.model().timezone || '');
    public readonly filtered_timezones = computed(() => {
        const timezone = `${this._timezone_query() || ''}`.toLowerCase();
        return this.timezones().filter((item) =>
            item.toLowerCase().includes(timezone),
        );
    });
    public readonly settings_model = signal({ setup: 0, breakdown: 0 });
    public settings_form = form(this.settings_model, {
        injector: this._injector,
    });
    /** Levels of encyption available for the system's settings */
    public encryption_levels: any[] = [
        { id: EncryptionLevel.None, name: 'None' },
        { id: EncryptionLevel.Support, name: 'Support' },
        { id: EncryptionLevel.Admin, name: 'Admin' },
        { id: EncryptionLevel.NeverDisplay, name: 'Never Display' },
    ];
    /** List of separator characters for features */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public get feature_list(): string[] {
        return this.model().features || [];
    }

    constructor() {
        super();
        onFieldChange(
            this.model,
            (value) => value.timezone,
            (value) => this._timezone_query.set(value || ''),
            this._injector,
        );
    }

    public async ngOnInit() {
        const { details } = await showMetadata(
            this._org.organisation.id,
            'settings',
        );
        const overflow = getItemWithKeys(['events', 'overflow'], details) || {};
        if (this._data.room.id && overflow[this._data.room.id]) {
            patchSignalModel(this.settings_model, overflow[this._data.room.id]);
        }
    }

    /**
     * Add a feature to the list of features for the item
     * @param event Input event
     */
    public addFeature(event: MatChipInputEvent): void {
        const input = event.input;
        const value = (event.value || '').trim();
        if (value) {
            this.model.update((m) => ({
                ...m,
                features: [...(m.features || []), value],
            }));
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    /**
     * Remove feature from the list
     * @param existing_feature Feature to remove
     */
    public removeFeature(existing_feature: string): void {
        this.model.update((m) => ({
            ...m,
            features: (m.features || []).filter(
                (feature) => feature !== existing_feature,
            ),
        }));
    }

    public async save() {
        if (!this.form().valid())
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(
                        this.form,
                        this.model,
                    ).join(', '),
                }),
            );
        if (!this.model().id) {
            patchSignalModel(this.model, {
                display_name: this.model().display_name || this.model().name,
                zones: unique([
                    this._org.organisation.id,
                    this._org.building.parent_id,
                    this._org.building.id,
                    `${this.model().zone?.id || this.model().zone || ''}`,
                ]).filter((_) => _),
            });
        }
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        const data = { ...this.model() };
        const { details } = (await showMetadata(
            this._org.organisation.id,
            'settings',
        )) as any;
        const overflow = getItemWithKeys(['events', 'overflow'], details) || {};
        overflow[data.id] = this.settings_model();
        await updateMetadata(this._org.organisation.id, {
            name: 'settings',
            details: {
                ...details,
                events: { ...(details.events || {}), overflow },
            },
            description: '',
        }).catch((e) =>
            notifyWarn('Unable to save room setup and breakdown times'),
        );
        await (data.id ? updateSystem(data.id, data) : addSystem(data));
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close(true);
        this.loading.set(false);
    }

    public selectItemfromMap() {
        let level = this._org.levelWithID(this.model().zones as any);
        const ref = this._dialog.open(SelectMapItemModalComponent, {
            data: {
                location: this.model().map_id,
                level_id: this.form,
            },
        });
        ref.afterClosed().subscribe((d) => {
            if (!d) return;
            level = ref.componentInstance.level() || level;
            const zones = unique([
                this._org.organisation.id,
                this._org.building.parent_id,
                this._org.building.id,
                level?.id,
            ]);
            patchSignalModel(this.model, { map_id: d, zones });
        });
    }
}
