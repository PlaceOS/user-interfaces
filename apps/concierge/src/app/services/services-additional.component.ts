import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@placeos/components';

@Component({
    selector: 'services-additional',
    template: `
        <div class="p-6">
            <div class="mb-6">
                <h2 class="text-2xl font-semibold">Additional Services</h2>
                <p style="color: #424242" class=" mt-1">
                    Catering, bar services, equipment rentals, and delivery
                    information.
                </p>
            </div>

            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <!-- Catering -->
                <div
                    class="border-base-200 overflow-hidden rounded-lg border"
                >
                    <div
                        class="bg-base-200 flex items-center gap-3 px-4 py-3"
                    >
                        <icon class="text-primary text-2xl">restaurant</icon>
                        <h3 class="text-lg font-semibold">Catering</h3>
                    </div>
                    <div class="space-y-3 p-4">
                        <p style="color: #424242" class=" text-sm">
                            Catering companies may use the kitchen area on the
                            3rd and 5th floor.
                        </p>
                        <div class="space-y-2">
                            <div class="flex items-start gap-2">
                                <icon
                                    style="color: #424242" class=" mt-0.5 text-base"
                                >
                                    info
                                </icon>
                                <span class="text-sm">
                                    Provide catering company name, setup time,
                                    and cleanup time when booking.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bar Services -->
                <div
                    class="border-base-200 overflow-hidden rounded-lg border"
                >
                    <div
                        class="bg-base-200 flex items-center gap-3 px-4 py-3"
                    >
                        <icon class="text-primary text-2xl">local_bar</icon>
                        <h3 class="text-lg font-semibold">Bar Services</h3>
                    </div>
                    <div class="space-y-3 p-4">
                        <div
                            class="bg-warning/10 text-warning rounded p-3 text-sm"
                        >
                            One beverage attendant is required for groups of 40
                            or larger.
                        </div>
                        <div class="space-y-2">
                            <div class="flex items-start gap-2">
                                <icon
                                    style="color: #424242" class=" mt-0.5 text-base"
                                >
                                    info
                                </icon>
                                <span class="text-sm">
                                    Provide bartending company, start/end time,
                                    and person responsible for monitoring alcohol
                                    consumption.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Equipment Rentals -->
                <div
                    class="border-base-200 overflow-hidden rounded-lg border"
                >
                    <div
                        class="bg-base-200 flex items-center gap-3 px-4 py-3"
                    >
                        <icon class="text-primary text-2xl">inventory_2</icon>
                        <h3 class="text-lg font-semibold">
                            Equipment Rentals
                        </h3>
                    </div>
                    <div class="space-y-3 p-4">
                        <div
                            class="bg-info/10 text-info rounded p-3 text-sm"
                        >
                            CNSI does not provide table linens.
                        </div>
                        <div class="space-y-2">
                            <div class="flex items-start gap-2">
                                <icon
                                    style="color: #424242" class=" mt-0.5 text-base"
                                >
                                    info
                                </icon>
                                <span class="text-sm">
                                    Provide rental company, drop-off/setup date
                                    and time, pick-up date and time, and contact
                                    person for setup and strike.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Deliveries -->
                <div
                    class="border-base-200 overflow-hidden rounded-lg border"
                >
                    <div
                        class="bg-base-200 flex items-center gap-3 px-4 py-3"
                    >
                        <icon class="text-primary text-2xl">
                            local_shipping
                        </icon>
                        <h3 class="text-lg font-semibold">Deliveries</h3>
                    </div>
                    <div class="space-y-3 p-4">
                        <div class="flex items-center gap-2">
                            <icon class="text-primary text-base">
                                schedule
                            </icon>
                            <span class="text-sm font-medium">
                                Loading dock hours: Monday - Friday, 8AM - 5PM
                            </span>
                        </div>
                        <div class="flex items-start gap-2">
                            <icon
                                style="color: #424242" class=" mt-0.5 text-base"
                            >
                                info
                            </icon>
                            <span class="text-sm">
                                Indicate any deliveries to be made to CNSI with
                                full details when booking.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Payment Information -->
            <div class="mt-8">
                <h3 class="mb-4 text-xl font-semibold">
                    Payment Information
                </h3>
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div
                        class="border-base-200 rounded-lg border p-4"
                    >
                        <h4 class="mb-2 font-semibold">UCLA Departments</h4>
                        <p style="color: #424242" class=" text-sm">
                            Please provide internal UCLA Recharge ID
                            information. CNSI may verify sufficient funds in the
                            FAU. All recharges are processed after the event.
                        </p>
                    </div>
                    <div
                        class="border-base-200 rounded-lg border p-4"
                    >
                        <h4 class="mb-2 font-semibold">External Parties</h4>
                        <p style="color: #424242" class=" text-sm">
                            Pay by check or money order to "UC Regents" sent to
                            CNSI Events, or pay by credit card online.
                        </p>
                        <p style="color: #424242" class=" mt-2 text-xs">
                            California NanoSystems Institute at UCLA<br />
                            570 Westwood Plaza, Building 114, MC 722710<br />
                            Los Angeles, CA 90095-7227
                        </p>
                    </div>
                </div>
            </div>

            <div
                class="bg-info/10 text-info mt-6 rounded-lg p-4 text-sm"
            >
                For questions, please email
                <strong>events&#64;cnsi.ucla.edu</strong>.
            </div>
        </div>
    `,
    imports: [CommonModule, IconComponent],
})
export class ServicesAdditionalComponent {}
