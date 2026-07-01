import { Component, input, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { settingSignal } from '@placeos/common';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { TimeFieldComponent } from '@placeos/form-fields';

export interface VipServicesData {
    vip_assistant_name: string;
    vip_assistant_email: string;
    meet_greet: 'none' | 'internal' | 'external_airport';
    walkthrough: boolean;
    welcome_beverage: 'none' | 'standard' | 'custom';
    welcome_beverage_custom: string;
    gift: boolean;
    photographer: boolean;
    restaurant_reservation: {
        name: string;
        address: string;
        time: number;
    } | null;
    driver: 'in_house' | 'third_party';
    welcome_screen: boolean;
    presentation: boolean;
}

@Component({
    selector: 'vip-visitor-flow-services',
    template: `
        <div class="w-full space-y-4 p-4">
            <!-- VIP Assistant -->
            <div class="border-base-300 rounded-lg border p-4">
                <h4 class="mb-3 flex items-center space-x-2 font-medium">
                    <icon>support_agent</icon>
                    <span>{{ 'BOOKINGS.VIP_ASSISTANT' | translate }}</span>
                </h4>
                <div
                    class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                >
                    <div class="flex flex-1 flex-col">
                        <label>{{
                            'BOOKINGS.VIP_ASSISTANT_NAME' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [ngModel]="data().vip_assistant_name"
                                (ngModelChange)="
                                    update('vip_assistant_name', $event)
                                "
                                [placeholder]="
                                    'BOOKINGS.VIP_ASSISTANT_NAME_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <label>{{
                            'BOOKINGS.VIP_ASSISTANT_EMAIL' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                type="email"
                                [ngModel]="data().vip_assistant_email"
                                (ngModelChange)="
                                    update('vip_assistant_email', $event)
                                "
                                [placeholder]="
                                    'BOOKINGS.VIP_ASSISTANT_EMAIL_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                </div>
            </div>

            <!-- Meet and Greet -->
            <div class="border-base-300 rounded-lg border p-4">
                <h4 class="mb-3 flex items-center space-x-2 font-medium">
                    <icon>waving_hand</icon>
                    <span>{{ 'BOOKINGS.VIP_MEET_GREET' | translate }}</span>
                </h4>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-select
                        [ngModel]="data().meet_greet"
                        (ngModelChange)="update('meet_greet', $event)"
                    >
                        <mat-option value="none">{{
                            'BOOKINGS.VIP_MEET_GREET_NONE' | translate
                        }}</mat-option>
                        <mat-option value="internal">{{
                            'BOOKINGS.VIP_MEET_GREET_INTERNAL' | translate
                        }}</mat-option>
                        <mat-option value="external_airport">{{
                            'BOOKINGS.VIP_MEET_GREET_EXTERNAL_AIRPORT'
                                | translate
                        }}</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <!-- Toggle Options Row 1 -->
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <settings-toggle
                    [label]="'BOOKINGS.VIP_WALKTHROUGH' | translate"
                    [ngModel]="data().walkthrough"
                    (ngModelChange)="update('walkthrough', $event)"
                ></settings-toggle>
                <settings-toggle
                    [label]="'BOOKINGS.VIP_GIVEAWAY_GIFT' | translate"
                    [ngModel]="data().gift"
                    (ngModelChange)="update('gift', $event)"
                ></settings-toggle>
                <settings-toggle
                    [label]="'BOOKINGS.VIP_PHOTOGRAPHER' | translate"
                    [ngModel]="data().photographer"
                    (ngModelChange)="update('photographer', $event)"
                ></settings-toggle>
                <settings-toggle
                    [label]="'BOOKINGS.VIP_WELCOME_SCREEN' | translate"
                    [ngModel]="data().welcome_screen"
                    (ngModelChange)="update('welcome_screen', $event)"
                ></settings-toggle>
                <settings-toggle
                    [label]="'BOOKINGS.VIP_PRESENTATION' | translate"
                    [ngModel]="data().presentation"
                    (ngModelChange)="update('presentation', $event)"
                ></settings-toggle>
            </div>

            <!-- Welcome Beverage -->
            <div class="border-base-300 rounded-lg border p-4">
                <h4 class="mb-3 flex items-center space-x-2 font-medium">
                    <icon>local_cafe</icon>
                    <span>{{
                        'BOOKINGS.VIP_WELCOME_BEVERAGE' | translate
                    }}</span>
                </h4>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        [ngModel]="data().welcome_beverage"
                        (ngModelChange)="update('welcome_beverage', $event)"
                    >
                        <mat-option value="none">{{
                            'BOOKINGS.VIP_WELCOME_BEVERAGE_NONE' | translate
                        }}</mat-option>
                        <mat-option value="standard">{{
                            'BOOKINGS.VIP_WELCOME_BEVERAGE_STANDARD' | translate
                        }}</mat-option>
                        <mat-option value="custom">{{
                            'BOOKINGS.VIP_WELCOME_BEVERAGE_CUSTOM' | translate
                        }}</mat-option>
                    </mat-select>
                </mat-form-field>
                @if (data().welcome_beverage === 'custom') {
                    <div class="mt-2">
                        <label>{{
                            'BOOKINGS.VIP_WELCOME_BEVERAGE_CUSTOM_DETAILS'
                                | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [ngModel]="data().welcome_beverage_custom"
                                (ngModelChange)="
                                    update('welcome_beverage_custom', $event)
                                "
                                [placeholder]="
                                    'BOOKINGS.VIP_WELCOME_BEVERAGE_CUSTOM_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                }
            </div>

            <!-- Restaurant Reservation -->
            <div class="border-base-300 rounded-lg border p-4">
                <settings-toggle
                    [label]="
                        'BOOKINGS.VIP_RESTAURANT_RESERVATION' | translate
                    "
                    [ngModel]="!!data().restaurant_reservation"
                    (ngModelChange)="toggleRestaurant($event)"
                ></settings-toggle>
                @if (data().restaurant_reservation) {
                    <div class="mt-4 space-y-2">
                        <div class="flex flex-col">
                            <label>{{
                                'BOOKINGS.VIP_RESTAURANT_NAME' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [ngModel]="
                                        data().restaurant_reservation?.name
                                    "
                                    (ngModelChange)="
                                        updateRestaurant('name', $event)
                                    "
                                    [placeholder]="
                                        'BOOKINGS.VIP_RESTAURANT_NAME_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                        <div class="flex flex-col">
                            <label>{{
                                'BOOKINGS.VIP_RESTAURANT_ADDRESS' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [ngModel]="
                                        data().restaurant_reservation?.address
                                    "
                                    (ngModelChange)="
                                        updateRestaurant('address', $event)
                                    "
                                    [placeholder]="
                                        'BOOKINGS.VIP_RESTAURANT_ADDRESS_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                        <div class="flex flex-col">
                            <label
                                >{{ 'BOOKINGS.VIP_RESTAURANT_TIME' | translate
                                }}<span>*</span></label
                            >
                            <time-field
                                [ngModel]="data().restaurant_reservation?.time"
                                (ngModelChange)="
                                    updateRestaurant('time', $event)
                                "
                                [use_24hr]="use_24hr()"
                                [no_past_times]="false"
                            />
                        </div>
                    </div>
                }
            </div>

            <!-- Driver -->
            <div class="border-base-300 rounded-lg border p-4">
                <h4 class="mb-3 flex items-center space-x-2 font-medium">
                    <icon>directions_car</icon>
                    <span>{{ 'BOOKINGS.VIP_DRIVER' | translate }}</span>
                </h4>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        [ngModel]="data().driver"
                        (ngModelChange)="update('driver', $event)"
                    >
                        <mat-option value="in_house">{{
                            'BOOKINGS.VIP_DRIVER_IN_HOUSE' | translate
                        }}</mat-option>
                        <mat-option value="third_party">{{
                            'BOOKINGS.VIP_DRIVER_THIRD_PARTY' | translate
                        }}</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
        </div>
    `,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        TranslatePipe,
        IconComponent,
        SettingsToggleComponent,
        TimeFieldComponent,
    ],
})
export class VipVisitorFlowServicesComponent {
    public readonly vip_data =
        input.required<WritableSignal<VipServicesData>>();
    public readonly use_24hr = settingSignal('use_24_hour_time', false);

    public get data() {
        return this.vip_data();
    }

    public update(key: keyof VipServicesData, value: any) {
        this.vip_data().update((d) => ({ ...d, [key]: value }));
    }

    public toggleRestaurant(enabled: boolean) {
        this.vip_data().update((d) => ({
            ...d,
            restaurant_reservation: enabled
                ? { name: '', address: '', time: 0 }
                : null,
        }));
    }

    public updateRestaurant(
        key: 'name' | 'address' | 'time',
        value: string | number,
    ) {
        this.vip_data().update((d) => ({
            ...d,
            restaurant_reservation: d.restaurant_reservation
                ? { ...d.restaurant_reservation, [key]: value }
                : null,
        }));
    }
}
