import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { EnrolmentStateService } from './enrolment-state.service';

@Component({
    selector: 'enrolment-vip-guest-confirm',
    template: `
        <div
            class="border-base-200 bg-base-100 mx-auto my-4 w-160 max-w-[calc(100vw-2rem)] rounded-sm border p-4 shadow-sm"
            [formGroup]="vip_form"
        >
            <h3 class="mb-4 text-center text-xl font-medium">
                Confirm Your VIP Details
            </h3>

            <!-- VIP Details Section -->
            <div class="border-base-300 mb-4 rounded-lg border p-4">
                <h4 class="mb-3 flex items-center space-x-2 font-medium">
                    <icon>star</icon>
                    <span>VIP Information</span>
                </h4>
                <div class="flex flex-col">
                    <label>VIP Title:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="vip_title"
                            placeholder="Enter title"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label>VIP Full Name:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="vip_full_name"
                            placeholder="Enter full name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label>VIP Contact Number:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="vip_contact_number"
                            placeholder="Enter contact number"
                        />
                    </mat-form-field>
                </div>
            </div>

            <!-- Assistant Section -->
            <div class="border-base-300 mb-4 rounded-lg border p-4">
                <h4 class="mb-3 flex items-center space-x-2 font-medium">
                    <icon>support_agent</icon>
                    <span>Assistant Information</span>
                </h4>
                <div class="flex flex-col">
                    <label>Assistant Name:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="assistant_name"
                            placeholder="Enter assistant name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label>Assistant Contact Number:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="assistant_contact_number"
                            placeholder="Enter assistant contact number"
                        />
                    </mat-form-field>
                </div>
            </div>

            <!-- Protocol Officer Section -->
            <div class="border-base-300 mb-4 rounded-lg border p-4">
                <h4 class="mb-3 flex items-center space-x-2 font-medium">
                    <icon>badge</icon>
                    <span>Protocol Officer Information</span>
                </h4>
                <div class="flex flex-col">
                    <label>Protocol Officer Name:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="protocol_officer_name"
                            placeholder="Enter protocol officer name"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label>Protocol Officer Contact Number:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            formControlName="protocol_officer_contact_number"
                            placeholder="Enter protocol officer contact number"
                        />
                    </mat-form-field>
                </div>
            </div>

            <!-- Vehicle Section -->
            <div class="border-base-300 mb-4 rounded-lg border p-4">
                <h4 class="mb-3 flex items-center space-x-2 font-medium">
                    <icon>directions_car</icon>
                    <span>Vehicle Information</span>
                </h4>
                <div
                    class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                >
                    <div class="flex flex-1 flex-col">
                        <label>Vehicle Plate Number:</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                formControlName="vehicle_plate_number"
                                placeholder="Enter plate number"
                            />
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <label>Vehicle Plate Type:</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                formControlName="vehicle_plate_type"
                                placeholder="Enter plate type"
                            />
                        </mat-form-field>
                    </div>
                </div>
            </div>

            <!-- Beverage Preference Section -->
            <div class="border-base-300 mb-4 rounded-lg border p-4">
                <h4 class="mb-3 flex items-center space-x-2 font-medium">
                    <icon>local_cafe</icon>
                    <span>Beverage Preference</span>
                </h4>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-select formControlName="beverage_preference">
                        <mat-option value="none">None</mat-option>
                        <mat-option value="standard">Standard</mat-option>
                        <mat-option value="custom">Custom</mat-option>
                    </mat-select>
                </mat-form-field>
                @if (vip_form.get('beverage_preference')?.value === 'custom') {
                    <div class="mt-2">
                        <label>Notes:</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <textarea
                                matInput
                                formControlName="beverage_notes"
                                placeholder="Enter your beverage preferences"
                                rows="3"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
            </div>

            <div class="flex items-center justify-center space-x-4">
                <button
                    btn
                    matRipple
                    class="inverse w-32"
                    (click)="updateVipDetails()"
                >
                    {{ 'COMMON.UPDATE' | translate }}
                </button>
                <button btn matRipple class="w-32" (click)="checkin()">
                    {{ 'COMMON.CHECK_IN' | translate }}
                </button>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        ReactiveFormsModule,
        TranslatePipe,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        IconComponent,
    ],
})
export class EnrolmentVipGuestConfirmComponent {
    private _state = inject(EnrolmentStateService);

    public readonly vip_form = this._state.vip_form;
    public readonly updateVipDetails = () => this._state.updateVipDetails();
    public readonly checkin = () => this._state.checkinVip();
}
