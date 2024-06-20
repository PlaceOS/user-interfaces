import { Component, Inject, SimpleChanges } from '@angular/core';
import { SPACE, ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import {
    EncryptionLevel,
    addSystem,
    queryZones,
    showMetadata,
    updateMetadata,
    updateSystem,
} from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import {
    AsyncHandler,
    TIMEZONES_IANA,
    getInvalidFields,
    getItemWithKeys,
    notifyError,
    notifyInfo,
    notifyWarn,
    unique,
} from '@placeos/common';
import { Space, generateSystemsFormFields } from '@placeos/spaces';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrganisationService } from '@placeos/organisation';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'room-form-modal',
    template: `
        <header>
            <h2>{{ form.value.id ? 'Edit' : 'Add' }} Room</h2>
            <button btn icon mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="max-h-[65vh] overflow-y-auto overflow-x-hidden p-4"
            *ngIf="!loading; else load_state"
        >
            <form
                system
                class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
                *ngIf="form"
                [formGroup]="form"
            >
                <div class="flex flex-col" *ngIf="form.controls.zone">
                    <label
                        for="zone"
                        [class.error]="
                            form.controls.zone.invalid &&
                            form.controls.zone.touched
                        "
                        i18n="@@zoneLabel"
                    >
                        Level<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            formControlName="zone"
                            placeholder="Select Level"
                        >
                            <mat-option
                                *ngFor="let level of levels | async"
                                [value]="level.id"
                            >
                                {{ level.display_name || level.name }}
                            </mat-option>
                        </mat-select>
                        <mat-error>Level is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex space-x-2">
                    <div
                        class="flex flex-col flex-1"
                        *ngIf="form.controls.name"
                    >
                        <label
                            for="system-name"
                            [class.error]="
                                form.controls.name.invalid &&
                                form.controls.name.touched
                            "
                            i18n="@@nameLabel"
                        >
                            Name<span>*</span>:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="system-name"
                                placeholder="Room Name"
                                i18n-placeholder="@@systemNamePlaceholder"
                                formControlName="name"
                                required
                            />
                            <mat-error
                                *ngIf="form.controls.name.invalid"
                                i18n="@@systemNameError"
                                >Room name is required</mat-error
                            >
                        </mat-form-field>
                    </div>
                    <div
                        class="flex flex-col flex-1"
                        *ngIf="form.controls.email"
                    >
                        <label
                            for="system-email"
                            [class.error]="
                                form.controls.email.invalid &&
                                form.controls.email.touched
                            "
                            i18n="@@emailLabel"
                        >
                            Email:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="system-email"
                                placeholder="Room Email"
                                i18n-placeholder="@@systemEmailPlaceholder"
                                formControlName="email"
                            />
                            <mat-error
                                *ngIf="form.controls.email.invalid"
                                i18n="@@emailError"
                                >A valid email is required</mat-error
                            >
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div
                        class="flex flex-col flex-1"
                        *ngIf="form.controls.display_name"
                    >
                        <label for="display-name" i18n="@@displayNameLabel"
                            >Display Name:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="display-name"
                                placeholder="Display Name"
                                i18n-placeholder="@@displayNamePlaceholder"
                                formControlName="display_name"
                            />
                        </mat-form-field>
                    </div>
                    <div
                        class="flex flex-col flex-1"
                        *ngIf="form.controls.display_name"
                    >
                        <label for="code-name" i18n="@@codeNameLabel"
                            >Code:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="code-name"
                                placeholder="Code"
                                i18n-placeholder="@@codeNamePlaceholder"
                                formControlName="code"
                            />
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex space-x-2" [formGroup]="settings_form">
                    <div class="flex-1 flex flex-col space-y-2">
                        <label for="setup" class="flex items-center">
                            Default Setup Duration
                            <app-icon
                                class="ml-2"
                                matTooltip="Time before a meeting needed for setup and preparation for the upcoming meeting"
                            >
                                info_outline
                            </app-icon>
                        </label>
                        <a-duration-field
                            name="setup"
                            formControlName="setup"
                            [min]="0"
                        ></a-duration-field>
                    </div>
                    <div class="flex-1 flex flex-col space-y-2">
                        <label for="breakdown" class="flex items-center">
                            Default Breakdown Duration
                            <app-icon
                                class="ml-2"
                                matTooltip="Time after a meeting needed for cleaning and preparation for next meeting"
                            >
                                info_outline
                            </app-icon>
                        </label>
                        <a-duration-field
                            name="breakdown"
                            [min]="0"
                            formControlName="breakdown"
                        ></a-duration-field>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div
                        class="flex flex-col flex-1"
                        *ngIf="form.controls.capacity"
                    >
                        <label
                            for="capacity"
                            [class.error]="
                                form.controls.capacity.invalid &&
                                form.controls.capacity.touched
                            "
                            i18n="@@capacityLabel"
                        >
                            Capacity:
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="capacity"
                                type="number"
                                placeholder="Capacity"
                                i18n-placeholder="@@capacityPlaceholder"
                                formControlName="capacity"
                            />
                            <mat-error
                                *ngIf="form.controls.capacity.invalid"
                                i18n="@@capacityError"
                            >
                                A valid positive number is required
                            </mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col" *ngIf="form.controls.bookable">
                        <mat-checkbox
                            name="bookable"
                            formControlName="bookable"
                            i18n="@@bookableLabel"
                        >
                            Bookable
                        </mat-checkbox>
                    </div>
                </div>
                <div class="flex flex-col" *ngIf="form.controls.description">
                    <label for="description" i18n="@@descriptionLabel"
                        >Description:</label
                    >
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            name="description"
                            placeholder="Description"
                            i18n="@@descriptionPlaceholder"
                            formControlName="description"
                        ></textarea>
                    </mat-form-field>
                </div>
                <div class="flex flex-col" *ngIf="form.controls.features">
                    <label
                        [class.error]="
                            form.controls.features.invalid &&
                            form.controls.features.touched
                        "
                        i18n="@@featuresLabel"
                    >
                        Features:
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-chip-grid #chipList aria-label="Room features">
                            <mat-chip-row
                                *ngFor="let feature of feature_list"
                                [selectable]="true"
                                [removable]="true"
                                (removed)="removeFeature(feature)"
                            >
                                {{ feature }}
                                <app-icon matChipRemove>close</app-icon>
                            </mat-chip-row>
                            <input
                                placeholder="New feature..."
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addFeature($event)"
                            />
                        </mat-chip-grid>
                    </mat-form-field>
                </div>
                <div class="flex flex-col" *ngIf="form.controls.map_id">
                    <label for="map_id" i18n="@@mapIdLabel">Map ID:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="map_id"
                            i18n-placeholder="@@mapIdPlaceholder"
                            placeholder="Map SVG ID selector e.g. area-01.10-status"
                            formControlName="map_id"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="timezone">Timezone</label>
                    <mat-form-field appearance="outline">
                        <app-icon matPrefix class="text-2xl">search</app-icon>
                        <input
                            matInput
                            formControlName="timezone"
                            placeholder="Room timezone"
                            [matAutocomplete]="auto"
                        />
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        <mat-option
                            *ngFor="let tz of filtered_timezones"
                            [value]="tz"
                            >{{ tz }}</mat-option
                        >
                        <mat-option *ngIf="!timezones.length" [disabled]="true">
                            No matching timezones
                        </mat-option>
                    </mat-autocomplete>
                </div>
                <div class="flex flex-col" *ngIf="form.controls.images">
                    <label for="images" i18n="@@imagesLabel">Images:</label>
                    <image-list-field
                        name="images"
                        formControlName="images"
                    ></image-list-field>
                </div>
            </form>
        </main>
        <footer
            class="p-2 flex justify-end border-t border-base-200"
            *ngIf="!loading"
        >
            <button btn class="w-32" (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <div class="flex flex-col items-center justify-center w-64 h-64">
                <mat-spinner diameter="32"></mat-spinner>
                <p class="mt-4">Saving room...</p>
            </div>
        </ng-template>
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
})
export class RoomModalComponent extends AsyncHandler {
    public loading = false;
    public timezones: string[] = [];
    public filtered_timezones: string[] = [];
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;
    /** Group of form fields used for creating the system */
    public form = generateSystemsFormFields(this._data.room as any);
    public settings_form = new FormGroup({
        setup: new FormControl(0),
        breakdown: new FormControl(0),
    });
    /** Levels of encyption available for the system's settings */
    public encryption_levels: any[] = [
        { id: EncryptionLevel.None, name: 'None' },
        { id: EncryptionLevel.Support, name: 'Support' },
        { id: EncryptionLevel.Admin, name: 'Admin' },
        { id: EncryptionLevel.NeverDisplay, name: 'Never Display' },
    ];
    /** Function for querying zones */
    public readonly query_fn = (_: string) =>
        queryZones({ q: _ }).pipe(map((resp) => resp.data));
    /** List of separator characters for features */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public get feature_list(): string[] {
        return this.form.controls.features.value;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { room: Space },
        private _dialog_ref: MatDialogRef<RoomModalComponent>,
        private _org: OrganisationService
    ) {
        super();
    }

    public async ngOnInit() {
        const { details } = await showMetadata(
            this._org.organisation.id,
            'settings'
        ).toPromise();
        const overflow = getItemWithKeys(['events', 'overflow'], details) || {};
        if (this._data.room.id && overflow[this._data.room.id]) {
            this.settings_form.patchValue(overflow[this._data.room.id]);
        }
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.form) {
            this.updateTimezoneList();
            this.subscription(
                'tz-change',
                this.form.valueChanges.subscribe(
                    ({ timezone }) =>
                        (this.filtered_timezones = this.timezones.filter((_) =>
                            _.toLowerCase().includes(timezone.toLowerCase())
                        ))
                )
            );
        }
    }

    /**
     * Add a feature to the list of features for the item
     * @param event Input event
     */
    public addFeature(event: MatChipInputEvent): void {
        if (!this.form || !this.form.controls.features) return;
        const input = event.input;
        const value = event.value;
        const feature_list = this.feature_list;
        if ((value || '').trim()) {
            feature_list.push(value);
            this.form.controls.features.setValue(feature_list);
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
        if (!this.form || !this.form.controls.features) return;
        const feature_list = this.feature_list;
        const index = feature_list.indexOf(existing_feature);

        if (index >= 0) {
            feature_list.splice(index, 1);
            this.form.controls.features.setValue(feature_list);
        }
    }

    public updateTimezoneList() {
        const timezone = this.form?.value?.timezone || '';
        this.timezones = TIMEZONES_IANA;
        this.filtered_timezones = this.timezones.filter((_) =>
            _.toLowerCase().includes(timezone.toLowerCase())
        );
    }

    public async save() {
        if (!this.form.valid)
            return notifyError(
                `Some form fields are invalid. [${getInvalidFields(
                    this.form
                ).join(', ')}]`
            );
        if (!this.form.value.id) {
            this.form.patchValue({
                display_name:
                    this.form.value.display_name || this.form.value.name,
                zones: unique([
                    this._org.organisation.id,
                    this._org.building.parent_id,
                    this._org.building.id,
                    `${this.form.value.zone?.id || this.form.value.zone || ''}`,
                ]).filter((_) => _),
            });
        }
        this.loading = true;
        this._dialog_ref.disableClose = true;
        const data = this.form.getRawValue();
        const { details } = (await showMetadata(
            this._org.organisation.id,
            'settings'
        ).toPromise()) as any;
        const overflow = getItemWithKeys(['events', 'overflow'], details) || {};
        overflow[data.id] = this.settings_form.value;
        await updateMetadata(this._org.organisation.id, {
            name: 'settings',
            details: {
                ...details,
                events: { ...(details.events || {}), overflow },
            },
            description: '',
        })
            .toPromise()
            .catch((e) =>
                notifyWarn('Unable to save room setup and breakdown times')
            );
        await (data.id
            ? updateSystem(data.id, data)
            : addSystem(data)
        ).toPromise();
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close(true);
        this.loading = false;
    }
}
