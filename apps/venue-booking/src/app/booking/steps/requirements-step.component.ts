import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { IconComponent } from '@placeos/components';
import { BookingService } from '../booking.service';

@Component({
    selector: 'requirements-step',
    template: `
        <div class="flex flex-col gap-6">
            <h2 class="text-xl font-bold">Event Requirements</h2>

            <!-- Service Cards -->
            <div class="flex flex-col gap-2">
                <label class="text-sm font-medium">Select Required Services:</label>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    @for (service of booking.services; track service.id) {
                        <div
                            class="border-base-300 relative flex flex-col gap-2 rounded-lg border p-4 transition-all"
                            [class.border-secondary]="
                                booking.selected_services().includes(service.id)
                            "
                            [class.border-2]="
                                booking.selected_services().includes(service.id)
                            "
                            [ngClass]="{
                                'bg-secondary/5': booking
                                    .selected_services()
                                    .includes(service.id)
                            }"
                        >
                            <div class="flex items-start justify-between">
                                <div class="flex items-center gap-3">
                                    <mat-checkbox
                                        [checked]="
                                            booking
                                                .selected_services()
                                                .includes(service.id)
                                        "
                                        [disabled]="
                                            service.restricted &&
                                            booking.is_student()
                                        "
                                        (change)="
                                            booking.toggleService(service.id)
                                        "
                                        color="primary"
                                    />
                                    <icon
                                        class="text-2xl"
                                        [class.text-secondary]="
                                            booking
                                                .selected_services()
                                                .includes(service.id)
                                        "
                                        >{{ service.icon }}</icon
                                    >
                                </div>
                                @if (service.restricted) {
                                    <span
                                        class="bg-error/10 text-error rounded px-2 py-0.5 text-xs font-medium"
                                        >RESTRICTED</span
                                    >
                                }
                                @if (
                                    service.has_options &&
                                    booking
                                        .selected_services()
                                        .includes(service.id)
                                ) {
                                    <button
                                        class="text-base-content/50 hover:text-base-content"
                                        (click)="
                                            booking.toggleServiceExpanded(
                                                service.id
                                            )
                                        "
                                    >
                                        <icon>{{
                                            booking
                                                .expanded_services()
                                                .includes(service.id)
                                                ? 'expand_less'
                                                : 'expand_more'
                                        }}</icon>
                                    </button>
                                }
                            </div>
                            <div class="ml-10 flex flex-col">
                                <span class="font-medium">{{ service.name }}</span>
                                <span class="text-base-content/70 text-sm">{{
                                    service.description
                                }}</span>
                            </div>
                            @if (service.restricted && booking.is_student()) {
                                <p class="text-error ml-10 text-xs italic">
                                    Not available for Student accounts
                                </p>
                            }

                            <!-- Expanded Options -->
                            @if (
                                service.has_options &&
                                service.options &&
                                booking.expanded_services().includes(service.id)
                            ) {
                                <div class="border-secondary/30 mt-2 border-t pt-3">
                                    <div
                                        class="text-secondary mb-2 flex items-center gap-2"
                                    >
                                        <icon>{{ service.icon }}</icon>
                                        <span class="font-medium"
                                            >{{ service.name }} Options</span
                                        >
                                    </div>
                                    <div class="flex flex-wrap gap-2">
                                        @for (opt of service.options; track opt.id) {
                                            <label
                                                class="border-base-300 flex cursor-pointer items-center gap-2 rounded border px-3 py-1.5 text-sm"
                                            >
                                                <mat-checkbox
                                                    [checked]="
                                                        booking
                                                            .selected_service_options()
                                                            [service.id]?.includes(
                                                                opt.id
                                                            )
                                                    "
                                                    (change)="
                                                        booking.toggleServiceOption(
                                                            service.id,
                                                            opt.id
                                                        )
                                                    "
                                                    color="primary"
                                                />
                                                {{ opt.label }}
                                            </label>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>

            <!-- Expected Attendance -->
            <div class="flex flex-col gap-1">
                <label class="text-sm font-medium">Expected Attendance</label>
                <mat-form-field appearance="outline" class="no-subscript max-w-xs">
                    <mat-select
                        [ngModel]="booking.expected_attendance()"
                        (ngModelChange)="booking.expected_attendance.set($event)"
                        placeholder="Number of attendees"
                    >
                        @for (opt of booking.attendance_options; track opt) {
                            <mat-option [value]="opt">{{ opt }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>

            <!-- Checkboxes -->
            <div class="flex flex-col gap-3">
                <label class="flex items-center gap-2">
                    <mat-checkbox
                        [ngModel]="booking.is_outdoor_event()"
                        (ngModelChange)="booking.is_outdoor_event.set($event)"
                        color="primary"
                    />
                    <span>Outdoor Event</span>
                </label>
                <label class="flex items-center gap-2">
                    <mat-checkbox
                        [ngModel]="booking.is_major_event()"
                        (ngModelChange)="booking.is_major_event.set($event)"
                        color="primary"
                    />
                    <span>Major Event (500+ attendees or high-profile)</span>
                </label>
            </div>

            <!-- Special Requirements -->
            <div class="flex flex-col gap-1">
                <label class="text-sm font-medium">Special Requirements</label>
                <textarea
                    class="border-neutral min-h-24 w-full rounded-sm border p-4"
                    placeholder="Any additional requirements or notes"
                    [ngModel]="booking.special_requirements()"
                    (ngModelChange)="booking.special_requirements.set($event)"
                ></textarea>
            </div>

            <!-- Approval Preview -->
            <div class="border-secondary bg-secondary/5 rounded-lg border p-4">
                <div class="text-secondary mb-3 flex items-center gap-2">
                    <icon>assignment</icon>
                    <span class="font-medium">Approval Preview</span>
                </div>
                <div class="flex flex-col gap-3">
                    <div>
                        <span class="font-medium">Required Approvals:</span>
                        <ul class="mt-1 list-inside list-disc">
                            @for (
                                approval of booking.approval_info().approvals;
                                track approval
                            ) {
                                <li class="text-secondary">{{ approval }}</li>
                            }
                        </ul>
                    </div>
                    <div>
                        <span class="font-medium">Required Documents:</span>
                        <p class="text-base-content/70 text-sm">
                            {{
                                booking.approval_info().documents.length > 0
                                    ? booking.approval_info().documents.join(', ')
                                    : 'No documents required'
                            }}
                        </p>
                    </div>
                    <div>
                        <span class="font-medium">Estimated Approval Time:</span>
                        <p class="text-base-content/70 text-sm">
                            {{ booking.approval_info().estimated_time }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Estimated Costs -->
            @if (booking.selected_services().length > 0) {
                <div class="border-base-300 rounded-lg border p-4">
                    <div class="text-secondary mb-3 flex items-center gap-2">
                        <icon>receipt_long</icon>
                        <span class="font-medium">Estimated Costs</span>
                    </div>

                    <!-- Cost items -->
                    <div class="bg-base-200/50 mb-4 rounded-lg p-4">
                        @for (
                            service of booking.selected_services_with_costs();
                            track service.id
                        ) {
                            <div class="flex justify-between py-2">
                                <div>
                                    <div class="font-medium">
                                        {{ service.name }}
                                    </div>
                                    <div class="text-base-content/70 text-sm">
                                        {{ service.description }}
                                    </div>
                                </div>
                                <div class="font-medium">
                                    {{ service.cost | currency: 'USD' }}
                                </div>
                            </div>
                        }
                    </div>

                    <!-- Subtotal -->
                    <div class="border-base-300 flex justify-between border-t py-2">
                        <span>Subtotal</span>
                        <span class="font-medium">{{
                            booking.subtotal() | currency: 'USD'
                        }}</span>
                    </div>
                    <div class="text-base-content/70 flex justify-between text-sm">
                        <span>Event Coordination Fee $150.00</span>
                        <span
                            >Processing Fee (3%)
                            {{ booking.processing_fee() | currency: 'USD' }}</span
                        >
                    </div>
                    <div
                        class="border-base-300 mt-2 flex justify-between border-t pt-2 text-lg font-bold"
                    >
                        <span>Estimated Total</span>
                        <span>{{ booking.total_cost() | currency: 'USD' }}</span>
                    </div>

                    <!-- Payment Method -->
                    <div class="mt-6">
                        <h4 class="mb-2 font-medium">Payment Method</h4>
                        <p class="text-base-content/70 mb-4 text-sm">
                            Enter your payment details now. You will be charged
                            upon final event approval.
                        </p>

                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <button
                                matRipple
                                class="border-base-300 flex items-center justify-center gap-2 rounded-lg border p-3 transition-all"
                                [class.border-secondary]="
                                    booking.payment_method() === 'credit_card'
                                "
                                [class.border-2]="
                                    booking.payment_method() === 'credit_card'
                                "
                                [ngClass]="{
                                    'bg-secondary/10':
                                        booking.payment_method() === 'credit_card'
                                }"
                                (click)="booking.payment_method.set('credit_card')"
                            >
                                <icon
                                    [class.text-secondary]="
                                        booking.payment_method() === 'credit_card'
                                    "
                                    >credit_card</icon
                                >
                                <span
                                    [class.text-secondary]="
                                        booking.payment_method() === 'credit_card'
                                    "
                                    [class.font-medium]="
                                        booking.payment_method() === 'credit_card'
                                    "
                                    >Credit Card</span
                                >
                            </button>
                            <button
                                matRipple
                                class="border-base-300 flex items-center justify-center gap-2 rounded-lg border p-3 transition-all"
                                [class.border-secondary]="
                                    booking.payment_method() === 'fau_code'
                                "
                                [class.border-2]="
                                    booking.payment_method() === 'fau_code'
                                "
                                [ngClass]="{
                                    'bg-secondary/10':
                                        booking.payment_method() === 'fau_code'
                                }"
                                (click)="booking.payment_method.set('fau_code')"
                            >
                                <icon
                                    [class.text-secondary]="
                                        booking.payment_method() === 'fau_code'
                                    "
                                    >account_balance</icon
                                >
                                <span
                                    [class.text-secondary]="
                                        booking.payment_method() === 'fau_code'
                                    "
                                    [class.font-medium]="
                                        booking.payment_method() === 'fau_code'
                                    "
                                    >FAU/Charge Code</span
                                >
                            </button>
                        </div>

                        <!-- Credit Card Form -->
                        @if (booking.payment_method() === 'credit_card') {
                            <div class="border-base-300 mt-4 rounded-lg border p-4">
                                <div
                                    class="mb-4 flex items-center gap-2 text-sm text-green-600"
                                >
                                    <icon>lock</icon>
                                    <span>Secured by Stripe</span>
                                </div>

                                <div class="flex flex-col gap-4">
                                    <div class="flex flex-col gap-1">
                                        <label class="text-sm font-medium"
                                            >Card Number</label
                                        >
                                        <input
                                            type="text"
                                            class="border-neutral h-12 w-full rounded-sm border px-4"
                                            placeholder="1234 5678 9012 3456"
                                            [ngModel]="booking.card_number()"
                                            (ngModelChange)="
                                                booking.card_number.set($event)
                                            "
                                        />
                                    </div>

                                    <div class="grid grid-cols-2 gap-4">
                                        <div class="flex flex-col gap-1">
                                            <label class="text-sm font-medium"
                                                >Expiry Date</label
                                            >
                                            <input
                                                type="text"
                                                class="border-neutral h-12 w-full rounded-sm border px-4"
                                                placeholder="MM/YY"
                                                [ngModel]="booking.card_expiry()"
                                                (ngModelChange)="
                                                    booking.card_expiry.set($event)
                                                "
                                            />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <label class="text-sm font-medium"
                                                >CVC</label
                                            >
                                            <input
                                                type="text"
                                                class="border-neutral h-12 w-full rounded-sm border px-4"
                                                placeholder="123"
                                                [ngModel]="booking.card_cvc()"
                                                (ngModelChange)="
                                                    booking.card_cvc.set($event)
                                                "
                                            />
                                        </div>
                                    </div>

                                    <div class="flex flex-col gap-1">
                                        <label class="text-sm font-medium"
                                            >Cardholder Name</label
                                        >
                                        <input
                                            type="text"
                                            class="border-neutral h-12 w-full rounded-sm border px-4"
                                            placeholder="Name on card"
                                            [ngModel]="booking.card_name()"
                                            (ngModelChange)="
                                                booking.card_name.set($event)
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                        }

                        <!-- FAU Code Form -->
                        @if (booking.payment_method() === 'fau_code') {
                            <div class="border-base-300 mt-4 rounded-lg border p-4">
                                <div class="flex flex-col gap-1">
                                    <label class="text-sm font-medium"
                                        >FAU/Charge Code</label
                                    >
                                    <input
                                        type="text"
                                        class="border-neutral h-12 w-full rounded-sm border px-4"
                                        placeholder="Enter FAU or charge code"
                                        [ngModel]="booking.fau_code()"
                                        (ngModelChange)="
                                            booking.fau_code.set($event)
                                        "
                                    />
                                </div>
                            </div>
                        }
                    </div>

                    <!-- Info note -->
                    <div
                        class="bg-info/10 text-info mt-4 flex items-start gap-2 rounded-lg p-3 text-sm"
                    >
                        <icon class="text-lg">info</icon>
                        <span>
                            Final pricing may vary based on actual service
                            requirements. Payment will be processed after event
                            approval.
                        </span>
                    </div>
                </div>
            }
        </div>
    `,
    imports: [
        CommonModule,
        FormsModule,
        IconComponent,
        MatRippleModule,
        MatCheckboxModule,
        MatSelectModule,
    ],
})
export class RequirementsStepComponent {
    public readonly booking = inject(BookingService);
}
