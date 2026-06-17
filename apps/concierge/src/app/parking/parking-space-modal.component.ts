import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    OnInit,
    Output,
    signal,
} from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
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
                <main class="flex max-h-[65vh] flex-col overflow-auto p-4">
                    <label for="identifier">{{
                        'APP.CONCIERGE.PARKING_SPACE_NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.PARKING_SPACE_NAME' | translate
                            "
                            [formField]="form.identifier"
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
                            [placeholder]="
                                'EXPLORE.MAP_ID_PLACEHOLDER' | translate
                            "
                            [formField]="form.map_id"
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
                            [formField]="form.assigned_user"
                            class="flex-1"
                        ></a-user-search-field>
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 min-w-12 rounded-sm"
                            [matTooltip]="
                                'APP.CONCIERGE.USER_CLEAR' | translate
                            "
                            (click)="clearUser()"
                        >
                            <icon className="material-symbols-outlined">
                                person_cancel
                            </icon>
                        </button>
                    </div>
                    <div class="flex space-x-4 pb-4">
                        <settings-toggle
                            [formField]="form.bookable"
                            class="w-full"
                            [label]="'COMMON.BOOKABLE' | translate"
                        >
                        </settings-toggle>
                    </div>
                    <label>{{ 'COMMON.GROUPS' | translate }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'BOOKINGS.GROUPS' | translate"
                        [formField]="form.place_groups"
                    ></item-list-field>
                    <label>{{ 'COMMON.FEATURES' | translate }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'COMMON.FEATURES' | translate"
                        [formField]="form.features"
                    ></item-list-field>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            [placeholder]="'FORM.NOTES' | translate"
                            [formField]="form.notes"
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
        FormField,
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

    public readonly model = signal({
        id: '',
        identifier: '',
        map_id: '',
        assigned_user: null as User | null,
        assigned_to: '',
        assigned_name: '',
        bookable: false,
        place_groups: [] as string[],
        features: [] as string[],
        notes: '',
        map_rotation: 0,
    });
    public readonly form = form(this.model, (p) => {
        required(p.identifier);
        required(p.map_id);
    });

    constructor() {
        const data = this._data as any;
        if (data) {
            this.model.update((m) => ({
                ...m,
                id: data.id ?? m.id,
                identifier: data.identifier ?? m.identifier,
                map_id: data.map_id || data.other_data?.map_id || m.map_id,
                assigned_to: data.assigned_to ?? m.assigned_to,
                assigned_name: data.assigned_name ?? m.assigned_name,
                bookable: data.bookable ?? m.bookable,
                place_groups: [...(data.place_groups || m.place_groups)],
                features: [...(data.features || m.features)],
                notes: data.notes ?? m.notes,
                map_rotation: data.map_rotation ?? m.map_rotation,
            }));
        }
    }

    public async ngOnInit() {
        if (this._data.assigned_to) {
            const user = await showStaff(this._data.assigned_to);
            if (user) {
                this.model.update((m) => ({
                    ...m,
                    assigned_user: user,
                    assigned_to: user.email,
                    assigned_name: user.name,
                }));
            }
        }
    }

    public clearUser() {
        this.model.update((m) => ({
            ...m,
            assigned_user: null,
            assigned_to: '',
            assigned_name: '',
        }));
    }

    public postForm() {
        this.form().markAsTouched();
        if (!this.form().valid()) return;
        this.loading.set(true);
        const value: any = { ...this.model() };
        if (value.assigned_user) {
            value.assigned_to = value.assigned_user.email;
            value.assigned_name = value.assigned_user.name;
        }
        delete (value as any).assigned_user;
        this._dialog_ref.disableClose = true;
        this.event.emit({ reason: 'done', metadata: value });
    }
}
