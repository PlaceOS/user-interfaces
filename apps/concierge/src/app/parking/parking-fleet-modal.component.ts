import {
    Component,
    computed,
    EventEmitter,
    inject,
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
import { AsyncHandler, DialogEvent } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { ParkingFleetVehicle } from './parking-state.service';

@Component({
    selector: 'parking-fleet-modal',
    template: `
        <div class="w-md">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 min-h-12 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id()
                            ? 'APP.CONCIERGE.PARKING_FLEET_EDIT'
                            : 'APP.CONCIERGE.PARKING_FLEET_NEW'
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
                    <label for="name">{{
                        'APP.CONCIERGE.PARKING_FLEET' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [formField]="form.name"
                            [placeholder]="
                                'APP.CONCIERGE.PARKING_FLEET' | translate
                            "
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
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
                                <mat-error>{{
                                    'APP.CONCIERGE.PARKING_PLATE_REQUIRED'
                                        | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label for="car-model">{{
                                'APP.CONCIERGE.PARKING_FLEET_MODEL' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.car_model"
                                    [placeholder]="
                                        'APP.CONCIERGE.PARKING_FLEET_MODEL'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <label for="car-colour">{{
                        'APP.CONCIERGE.PARKING_CAR_COLOUR' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [formField]="form.car_colour"
                            [placeholder]="
                                'APP.CONCIERGE.PARKING_CAR_COLOUR' | translate
                            "
                        />
                    </mat-form-field>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            [formField]="form.notes"
                            [placeholder]="'FORM.NOTES' | translate"
                        ></textarea>
                    </mat-form-field>
                </main>
            } @else {
                <main
                    class="user-y-2 flex flex-col items-center justify-center p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.PARKING_FLEET_SAVE' | translate }}</p>
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
        MatFormFieldModule,
        MatInputModule,
        FormField,
        MatDialogModule,
    ],
})
export class ParkingFleetModalComponent extends AsyncHandler {
    private _data = inject<ParkingFleetVehicle>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<ParkingFleetModalComponent>>(MatDialogRef);

    @Output() public readonly event = new EventEmitter<DialogEvent>();
    public readonly loading = signal(false);

    public readonly id = computed(() => this._data?.id || '');

    public readonly model = signal({
        id: '',
        name: '',
        plate_number: '',
        car_model: '',
        car_colour: '',
        notes: '',
    });
    public readonly form = form(this.model, (p) => {
        required(p.name);
        required(p.plate_number);
    });

    constructor() {
        super();
        const data = this._data as any;
        if (data) {
            this.model.update((m) => ({
                ...m,
                id: data.id ?? m.id,
                name: data.name ?? m.name,
                plate_number: data.plate_number ?? m.plate_number,
                car_model: data.car_model ?? m.car_model,
                car_colour: data.car_colour ?? m.car_colour,
                notes: data.notes ?? m.notes,
            }));
        }
    }

    public postForm() {
        this.form().markAsTouched();
        if (!this.form().valid()) return;
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        this.event.emit({ reason: 'done', metadata: this.model() });
    }
}
