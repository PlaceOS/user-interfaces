import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    OnInit,
    Output,
    signal,
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogEvent, User } from '@placeos/common';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    ItemListFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { showStaff } from '@placeos/users';
import { ParkingSpace } from './parking-state.service';

@Component({
    selector: 'parking-space-modal',
    template: `
        <div class="w-md">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 min-h-12 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id
                            ? 'APP.CONCIERGE.PARKING_SPACE_EDIT'
                            : 'APP.CONCIERGE.PARKING_SPACE_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main
                    class="flex max-h-[65vh] flex-col overflow-auto p-4"
                    [formGroup]="form"
                >
                    <label for="identifier">{{
                        'APP.CONCIERGE.PARKING_SPACE_NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="identifier"
                            [placeholder]="
                                'APP.CONCIERGE.PARKING_SPACE_NAME' | translate
                            "
                            formControlName="identifier"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <label for="map-id">{{
                        'EXPLORE.MAP_ID' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="map-id"
                            [placeholder]="
                                'EXPLORE.MAP_ID_PLACEHOLDER' | translate
                            "
                            formControlName="map_id"
                        />
                        <mat-error>
                            {{ 'EXPLORE.MAP_ID_REQUIRED' | translate }}
                        </mat-error>
                    </mat-form-field>
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
                            class="bg-secondary text-secondary-content h-12 w-12 min-w-12 rounded-sm"
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
                            class="w-full"
                            [name]="'COMMON.BOOKABLE' | translate"
                        >
                        </settings-toggle>
                    </div>
                    <label>{{ 'COMMON.GROUPS' | translate }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'BOOKINGS.GROUPS' | translate"
                        formControlName="place_groups"
                    ></item-list-field>
                    <label>{{ 'COMMON.FEATURES' | translate }}</label>
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
                </main>
            } @else {
                <main
                    class="flex min-h-48 flex-col items-center justify-center space-y-2 p-12"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.PARKING_SPACE_SAVE' | translate }}</p>
                </main>
            }
            @if (!loading()) {
                <footer
                    class="border-base-300 flex items-center justify-end space-x-2 border-t px-4 py-2"
                >
                    <button btn matRipple class="w-32" (click)="postForm()">
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </footer>
            }
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        MatDialogModule,
        TranslatePipe,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        ItemListFieldComponent,
        SettingsToggleComponent,
        UserSearchFieldComponent,
        ReactiveFormsModule,
        MatTooltipModule,
    ],
})
export class ParkingSpaceModalComponent implements OnInit {
    private _data = inject<ParkingSpace>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<ParkingSpaceModalComponent>>(MatDialogRef);

    @Output() public readonly event = new EventEmitter<DialogEvent>();
    public readonly loading = signal(false);

    public get id() {
        return this._data?.id || '';
    }

    public readonly form = new FormGroup({
        id: new FormControl(''),
        identifier: new FormControl('', [Validators.required]),
        map_id: new FormControl('', [Validators.required]),
        assigned_user: new FormControl<User>(null),
        assigned_to: new FormControl(''),
        assigned_name: new FormControl(''),
        bookable: new FormControl(false),
        place_groups: new FormControl<string[]>([]),
        features: new FormControl<string[]>([]),
        notes: new FormControl(''),
        map_rotation: new FormControl(0),
    });

    constructor() {
        const _data = this._data;
        if (_data) {
            this.form.patchValue({
                ..._data,
                features: [...(_data.features || [])],
                place_groups: [...(_data.place_groups || [])],
                map_id: _data.map_id || _data.other_data?.map_id,
            });
        }
    }

    public async ngOnInit() {
        if (this._data.assigned_to) {
            const user = await showStaff(this._data.assigned_to).toPromise();
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
        if (!this.form.valid) return;
        this.loading.set(true);
        const value = { ...this.form.getRawValue() };
        if (value.assigned_user) {
            value.assigned_to = value.assigned_user.email;
            value.assigned_name = value.assigned_user.name;
        }
        delete (value as any).assigned_user;
        this._dialog_ref.disableClose = true;
        this.event.emit({ reason: 'done', metadata: value });
    }
}
