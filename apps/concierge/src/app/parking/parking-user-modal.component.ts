import {
    Component,
    computed,
    EventEmitter,
    inject,
    Injector,
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
import {
    AsyncHandler,
    DialogEvent,
    onFieldChange,
    User,
} from '@placeos/common';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { UserSearchFieldComponent } from '@placeos/form-fields';
import { ParkingUser } from './parking-state.service';

@Component({
    selector: 'parking-user-modal',
    template: `
        <div class="w-md">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 min-h-12 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id()
                            ? 'APP.CONCIERGE.PARKING_USER_EDIT'
                            : 'APP.CONCIERGE.PARKING_USER_NEW'
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
                    <div class="mb-4 flex space-x-2">
                        <a-user-search-field
                            [formField]="form.user"
                            class="flex-1"
                        ></a-user-search-field>
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 min-w-12 rounded-sm"
                            matTooltip="Clear Selected User"
                            (click)="clearUser()"
                        >
                            <icon className="material-symbols-outlined">
                                person_cancel
                            </icon>
                        </button>
                    </div>
                    <label for="name">{{ 'FORM.NAME' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [formField]="form.name"
                            placeholder="Name"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <label for="email">{{ 'FORM.EMAIL' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [formField]="form.email"
                            [placeholder]="'FORM.EMAIL' | translate"
                        />
                        <mat-error>{{
                            'FORM.EMAIL_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="plate-number">{{
                                'BOOKINGS.PARKING_PLATE_NUMBER' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.plate_number"
                                    [placeholder]="
                                        'BOOKINGS.PARKING_PLATE_NUMBER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label for="car-color">{{
                                'APP.CONCIERGE.PARKING_CAR_COLOUR' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.car_colour"
                                    [placeholder]="
                                        'APP.CONCIERGE.PARKING_CAR_COLOUR'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            [formField]="form.notes"
                            [placeholder]="'FORM.NOTES' | translate"
                        ></textarea>
                    </mat-form-field>
                    <div class="mb-4 flex items-center">
                        <settings-toggle
                            class="flex-1"
                            [label]="
                                'APP.CONCIERGE.PARKING_USER_DENY_PLACEHOLER'
                                    | translate
                            "
                            [formField]="form.deny"
                        >
                        </settings-toggle>
                    </div>
                </main>
            } @else {
                <main
                    class="user-y-2 flex flex-col items-center justify-center p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.PARKING_USER_SAVE' | translate }}</p>
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
    imports: [
        IconComponent,
        TranslatePipe,
        MatProgressSpinnerModule,
        MatRippleModule,
        SettingsToggleComponent,
        MatFormFieldModule,
        MatInputModule,
        FormField,
        MatTooltipModule,
        UserSearchFieldComponent,
        MatDialogModule,
    ],
})
export class ParkingUserModalComponent extends AsyncHandler {
    private _data = inject<ParkingUser>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<ParkingUserModalComponent>>(MatDialogRef);

    @Output() public readonly event = new EventEmitter<DialogEvent>();
    public readonly loading = signal(false);

    public readonly id = computed(() => this._data?.id || '');
    private _injector = inject(Injector);

    public readonly model = signal({
        id: '',
        user: null as User | null,
        name: '',
        email: '',
        plate_number: '',
        car_colour: '',
        notes: '',
        deny: false,
    });
    public readonly form = form(this.model, (p) => {
        required(p.name);
        required(p.email);
    });

    constructor() {
        super();
        const data = this._data as any;
        if (data) {
            this.model.update((m) => ({
                ...m,
                id: data.id ?? m.id,
                name: data.name ?? m.name,
                email: data.email ?? m.email,
                plate_number: data.plate_number ?? m.plate_number,
                car_colour: data.car_colour || data.car_color || '',
                notes: data.notes ?? m.notes,
                deny: data.deny ?? m.deny,
            }));
        }
        // Sync name/email from the selected user when it changes.
        onFieldChange(
            this.model,
            (m) => m.user,
            (user) => {
                if (user?.id && user?.email !== this.model().email) {
                    this.model.update((m) => ({
                        ...m,
                        email: user.email,
                        name: user.name,
                    }));
                }
            },
            this._injector,
        );
    }

    public clearUser() {
        this.model.update((m) => ({
            ...m,
            user: null,
            email: '',
            name: '',
        }));
    }

    public postForm() {
        this.form().markAsTouched();
        if (!this.form().valid()) return;
        this.loading.set(true);
        const value: any = { ...this.model() };
        if (value.user) {
            value.email = value.user.email;
            value.name = value.user.name;
        }
        this._dialog_ref.disableClose = true;
        this.event.emit({ reason: 'done', metadata: value });
    }
}
