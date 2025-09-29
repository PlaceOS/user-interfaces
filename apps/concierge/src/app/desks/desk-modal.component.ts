import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    Desk,
    DialogEvent,
    notifyInfo,
    OrganisationService,
    randomString,
    unique,
    User,
} from '@placeos/common';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { UserSearchFieldComponent } from '@placeos/form-fields';
import { showStaff } from '@placeos/users';
import { ItemListFieldComponent } from 'libs/form-fields/src/lib/item-list-field.component';
import { lastValueFrom } from 'rxjs';
import { SelectMapItemModalComponent } from '../ui/select-map-item-modal.component';

const CHARS = '0123456789ABCDEF';

@Component({
    selector: 'desk-modal',
    template: `
        <div class="w-[32rem]">
            <header
                class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id
                            ? 'APP.CONCIERGE.DESKS_EDIT'
                            : 'APP.CONCIERGE.DESKS_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading) {
                <main
                    class="flex max-h-[65vh] flex-col overflow-auto p-4"
                    [formGroup]="form"
                >
                    <div class="w-full">
                        <label for="id">
                            {{ 'APP.CONCIERGE.DESKS_ID' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="id"
                                formControlName="id"
                                placeholder="desk-10.123"
                            />
                            <mat-error>{{
                                'FORM.ID_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="name">
                                {{ 'APP.CONCIERGE.DESKS_NAME' | translate }}
                                <span>*</span>
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="name"
                                    formControlName="name"
                                    placeholder="e.g. Office Desk"
                                />
                                <mat-error>{{
                                    'FORM.NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label for="map-id">
                                {{ 'EXPLORE.MAP_ID' | translate }}<span>*</span>
                            </label>
                            <div class="flex space-x-2">
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        name="map-id"
                                        formControlName="map_id"
                                        [placeholder]="
                                            'APP.CONCIERGE.DESKS_MAP_ID_PLACEHOLDER'
                                                | translate
                                        "
                                    />
                                    <mat-error>
                                        {{
                                            'EXPLORE.MAP_ID_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                                <button
                                    icon
                                    matRipple
                                    class="h-12 w-12 min-w-12 rounded border border-secondary text-secondary"
                                    [matTooltip]="
                                        'APP.CONCIERGE.POI_MAP_SELECT'
                                            | translate
                                    "
                                    (click)="selectItemfromMap()"
                                >
                                    <icon>place</icon>
                                </button>
                            </div>
                        </div>
                    </div>
                    <label for="user">{{
                        'APP.CONCIERGE.USER_ASSIGNED' | translate
                    }}</label>
                    <div class="mb-4 flex space-x-2">
                        <a-user-search-field
                            name="user"
                            formControlName="assigned_user"
                            class="flex-1"
                        ></a-user-search-field>
                        <button
                            icon
                            matRipple
                            class="h-12 w-12 min-w-12 rounded bg-secondary text-secondary-content"
                            [matTooltip]="
                                'APP.CONCIERGE.USER_CLEAR' | translate
                            "
                            (click)="
                                form.patchValue({
                                    assigned_user: null,
                                    assigned_to: null,
                                    assigned_name: null,
                                })
                            "
                        >
                            <icon className="material-symbols-outlined">
                                person_cancel
                            </icon>
                        </button>
                    </div>
                    <div class="flex space-x-4 pb-4">
                        <settings-toggle
                            formControlName="bookable"
                            class="flex-1"
                            [name]="'COMMON.BOOKABLE' | translate"
                        >
                        </settings-toggle>
                        <div class="flex-1"></div>
                    </div>
                    <label for="notes">{{ 'COMMON.GROUPS' | translate }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'BOOKINGS.GROUPS' | translate"
                        formControlName="groups"
                    ></item-list-field>
                    <label for="notes">{{
                        'COMMON.FEATURES' | translate
                    }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'COMMON.FEATURES' | translate"
                        formControlName="features"
                    ></item-list-field>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            name="notes"
                            [placeholder]="'FORM.NOTES' | translate"
                            formControlName="notes"
                        ></textarea>
                    </mat-form-field>
                    <label for="security">
                        {{ 'APP.CONCIERGE.DESKS_SECURITY' | translate }}
                    </label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="security"
                            [placeholder]="
                                'APP.CONCIERGE.DESKS_SECURITY' | translate
                            "
                            formControlName="security"
                        />
                    </mat-form-field>
                </main>
            } @else {
                <main
                    class="flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.DESKS_SAVING' | translate }}</p>
                </main>
            }
            <footer
                class="flex items-center justify-end space-x-2 border-t border-base-300 px-4 py-2"
            >
                <button btn matRipple class="w-32" (click)="postForm()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        </div>
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        ItemListFieldComponent,
        SettingsToggleComponent,
        UserSearchFieldComponent,
        MatTooltipModule,
    ],
})
export class DeskModalComponent implements OnInit {
    private _data = inject<{
        desk?: Desk;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<DeskModalComponent>>(MatDialogRef);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    @Output() public readonly event = new EventEmitter<DialogEvent>();
    public loading: boolean;

    public get id(): string {
        return this._data?.desk?.id || '';
    }

    public get desk(): Desk {
        return this._data?.desk;
    }

    public readonly form = new FormGroup({
        id: new FormControl(``),
        name: new FormControl('', [Validators.required]),
        map_id: new FormControl('', [Validators.required]),
        groups: new FormControl<string[]>([]),
        features: new FormControl<string[]>([]),
        bookable: new FormControl(false),
        notes: new FormControl(''),
        assigned_user: new FormControl<User>(null),
        assigned_to: new FormControl(''),
        assigned_name: new FormControl(''),
        security: new FormControl(''),
    });

    constructor() {
        const _data = this._data;

        if (_data?.desk) this.form.patchValue(_data.desk);
        if (!this.form.value.id) {
            this.form.patchValue({
                id: `desk-${randomString(3, CHARS)}_${randomString(5, CHARS)}`,
            });
        }
    }

    public async ngOnInit() {
        if (this.desk?.assigned_to) {
            const user = await lastValueFrom(showStaff(this.desk.assigned_to));
            if (user) {
                this.form.patchValue({
                    assigned_user: user,
                    assigned_to: user.email,
                    assigned_name: user.name,
                });
            }
        }
    }

    public postForm() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (!this.form.valid) return;
        this.loading = true;
        const value = { ...this.form.getRawValue() };
        if (value.assigned_user) {
            value.assigned_to = value.assigned_user?.email || value.assigned_to;
            value.assigned_name =
                value.assigned_user?.name || value.assigned_name;
        } else {
            delete value.assigned_to;
            delete value.assigned_name;
        }
        delete value.assigned_user;

        this._dialog_ref.disableClose = true;
        const has_changes = Object.keys(this.desk).some(
            (key) => value[key] !== this.desk[key],
        );
        if (has_changes) {
            this.event.emit({ reason: 'done', metadata: value });
        } else {
            this._dialog_ref.disableClose = false;
            notifyInfo('No changes were made.');
            this._dialog_ref.close();
        }
    }

    public selectItemfromMap() {
        let level = this.desk.zone as any;
        const ref = this._dialog.open(SelectMapItemModalComponent, {
            data: {
                location: this.form.value.map_id,
                level_id: this.form,
            },
        });
        ref.afterClosed().subscribe((d) => {
            if (!d) return;
            level = ref.componentInstance.level || level;
            const zones = unique([
                this._org.organisation.id,
                this._org.building.parent_id,
                this._org.building.id,
                level?.id,
            ]);
            this.form.patchValue({ map_id: d });
        });
    }
}
