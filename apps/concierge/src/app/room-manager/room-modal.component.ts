import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, OnInit, inject, signal } from '@angular/core';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import {
    EncryptionLevel,
    addSystem,
    queryZones,
    showMetadata,
    updateMetadata,
    updateSystem,
} from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AsyncHandler,
    OrganisationService,
    Space,
    TIMEZONES_IANA,
    getInvalidFields,
    getItemWithKeys,
    i18n,
    notifyError,
    notifyWarn,
    unique,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { generateSystemsFormFields } from '@placeos/events';
import {
    CounterComponent,
    DurationFieldComponent,
    ImageListFieldComponent,
} from '@placeos/form-fields';
import { lastValueFrom } from 'rxjs';
import { SelectMapItemModalComponent } from '../ui/select-map-item-modal.component';

const SPACE_TYPE_OPTIONS = [
    { value: 'meeting_room', label: 'Meeting Room' },
    { value: 'lecture_hall', label: 'Lecture Hall' },
    { value: 'auditorium', label: 'Auditorium' },
    { value: 'boardroom', label: 'Boardroom' },
    { value: 'open_space', label: 'Open Space' },
    { value: 'breakout', label: 'Breakout' },
    { value: 'training_room', label: 'Training Room' },
    { value: 'lab', label: 'Lab' },
    { value: 'studio', label: 'Studio' },
    { value: 'other', label: 'Other' },
];

const PRIMARY_USE_OPTIONS = [
    { value: 'corporate', label: 'Corporate' },
    { value: 'academic', label: 'Academic' },
    { value: 'social', label: 'Social' },
    { value: 'mixed', label: 'Mixed' },
];

const ENCLOSURE_LEVEL_OPTIONS = [
    { value: 'fully_enclosed', label: 'Fully Enclosed' },
    { value: 'semi_enclosed', label: 'Semi Enclosed' },
    { value: 'open', label: 'Open' },
];

const RISK_PROFILE_OPTIONS = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'critical', label: 'Critical' },
];

const PRICING_MODEL_OPTIONS = [
    { value: 'free', label: 'Free' },
    { value: 'hourly', label: 'Hourly' },
    { value: 'half_day', label: 'Half Day' },
    { value: 'full_day', label: 'Full Day' },
    { value: 'dynamic', label: 'Dynamic' },
];

const AV_EQUIPMENT_OPTIONS = [
    { value: 'projector', label: 'Projector' },
    { value: 'screen', label: 'Screen' },
    { value: 'whiteboard', label: 'Whiteboard' },
    { value: 'video_conf', label: 'Video Conferencing' },
    { value: 'microphone', label: 'Microphone' },
    { value: 'speakers', label: 'Speakers' },
    { value: 'recording', label: 'Recording' },
    { value: 'streaming', label: 'Streaming' },
    { value: 'digital_signage', label: 'Digital Signage' },
];

const AV_INPUT_OPTIONS = [
    { value: 'hdmi', label: 'HDMI' },
    { value: 'usb_c', label: 'USB-C' },
    { value: 'wireless', label: 'Wireless' },
    { value: 'vga', label: 'VGA' },
    { value: 'bluetooth', label: 'Bluetooth' },
    { value: 'aux', label: 'AUX' },
];

const AV_SUPPORT_MODEL_OPTIONS = [
    { value: 'self_service', label: 'Self Service' },
    { value: 'on_request', label: 'On Request' },
    { value: 'dedicated_tech', label: 'Dedicated Tech' },
    { value: 'remote_support', label: 'Remote Support' },
];

const SEATING_TYPE_OPTIONS = [
    { value: 'fixed', label: 'Fixed' },
    { value: 'movable', label: 'Movable' },
    { value: 'tiered', label: 'Tiered' },
    { value: 'mixed', label: 'Mixed' },
];

const SUPPORTED_LAYOUT_OPTIONS = [
    { value: 'theatre', label: 'Theatre' },
    { value: 'classroom', label: 'Classroom' },
    { value: 'boardroom', label: 'Boardroom' },
    { value: 'u_shape', label: 'U-Shape' },
    { value: 'cabaret', label: 'Cabaret' },
    { value: 'banquet', label: 'Banquet' },
    { value: 'standing', label: 'Standing' },
    { value: 'custom', label: 'Custom' },
];

@Component({
    selector: 'room-form-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.ROOMS_EDIT'
                    : 'APP.CONCIERGE.ROOMS_NEW'
                ) | translate
            "
            [loading]="
                loading ? ('APP.CONCIERGE.ROOMS_SAVING' | translate) : ''
            "
            (confirm)="save()"
        >
            <!-- Page navigation tabs -->
            <div class="flex border-b border-base-300 mb-4">
                <button
                    type="button"
                    class="px-4 py-2 text-sm font-medium transition-colors"
                    [class.border-b-2]="current_page() === 1"
                    [class.border-primary]="current_page() === 1"
                    [class.text-primary]="current_page() === 1"
                    [class.opacity-60]="current_page() !== 1"
                    (click)="current_page.set(1)"
                >
                    Essential Details
                </button>
                <button
                    type="button"
                    class="px-4 py-2 text-sm font-medium transition-colors"
                    [class.border-b-2]="current_page() === 2"
                    [class.border-primary]="current_page() === 2"
                    [class.text-primary]="current_page() === 2"
                    [class.opacity-60]="current_page() !== 2"
                    (click)="current_page.set(2)"
                >
                    Additional Settings
                </button>
            </div>

            @if (current_page() === 1) {
                <form system [formGroup]="form">
                    <!-- Level -->
                    @if (form.controls.zone) {
                        <div class="flex flex-col">
                            <label
                                for="zone"
                                [class.error]="
                                    form.controls.zone.invalid &&
                                    form.controls.zone.touched
                                "
                            >
                                {{ 'RESOURCE.LEVEL' | translate }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    formControlName="zone"
                                    [placeholder]="
                                        'APP.CONCIERGE.ROOMS_SELECT_LEVEL'
                                            | translate
                                    "
                                >
                                    @for (level of levels | async; track level) {
                                        <mat-option [value]="level.id">
                                            {{ level.display_name || level.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                                <mat-error>{{
                                    'APP.CONCIERGE.ROOMS_LEVEL_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <!-- Name / Email -->
                    <div class="flex space-x-2">
                        @if (form.controls.name) {
                            <div class="flex flex-1 flex-col">
                                <label
                                    for="system-name"
                                    [class.error]="
                                        form.controls.name.invalid &&
                                        form.controls.name.touched
                                    "
                                >
                                    {{ 'FORM.NAME' | translate }}<span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="system-name"
                                        [placeholder]="'FORM.NAME' | translate"
                                        formControlName="name"
                                        required
                                    />
                                    @if (form.controls.name.invalid) {
                                        <mat-error>
                                            {{ 'FORM.NAME_REQUIRED' | translate }}
                                        </mat-error>
                                    }
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.email) {
                            <div class="flex flex-1 flex-col">
                                <label
                                    for="system-email"
                                    [class.error]="
                                        form.controls.email.invalid &&
                                        form.controls.email.touched
                                    "
                                >
                                    {{ 'FORM.EMAIL' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="system-email"
                                        [placeholder]="'FORM.EMAIL' | translate"
                                        formControlName="email"
                                    />
                                    @if (form.controls.email.invalid) {
                                        <mat-error>
                                            {{ 'FORM.EMAIL_REQUIRED' | translate }}
                                        </mat-error>
                                    }
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    <!-- Display Name / Code -->
                    <div class="flex space-x-2">
                        @if (form.controls.display_name) {
                            <div class="flex flex-1 flex-col">
                                <label for="display-name">{{
                                    'FORM.DISPLAY_NAME' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="display-name"
                                        [placeholder]="
                                            'FORM.DISPLAY_NAME' | translate
                                        "
                                        formControlName="display_name"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.display_name) {
                            <div class="flex flex-1 flex-col">
                                <label for="code-name">{{
                                    'APP.CONCIERGE.ROOMS_CODE' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="code-name"
                                        [placeholder]="
                                            'APP.CONCIERGE.ROOMS_CODE' | translate
                                        "
                                        formControlName="code"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    <!-- Bookable / Approval toggles -->
                    <div class="mb-4 flex space-x-2">
                        @if (form.controls.approval) {
                            <div class="flex flex-1 flex-col pt-4">
                                <settings-toggle
                                    [name]="'COMMON.REQUIRE_APPROVAL' | translate"
                                    formControlName="approval"
                                >
                                </settings-toggle>
                            </div>
                        }
                        @if (form.controls.bookable) {
                            <div class="flex flex-1 flex-col pt-4">
                                <settings-toggle
                                    [name]="'COMMON.BOOKABLE' | translate"
                                    formControlName="bookable"
                                >
                                </settings-toggle>
                            </div>
                        }
                    </div>
                </form>

                <!-- Default Capacity -->
                <form [formGroup]="form">
                    @if (form.controls.capacity) {
                        <div class="mb-4 flex flex-col">
                            <label
                                for="capacity"
                                [class.error]="
                                    form.controls.capacity.invalid &&
                                    form.controls.capacity.touched
                                "
                            >
                                {{ 'COMMON.CAPACITY' | translate }}
                            </label>
                            <a-counter
                                name="capacity"
                                class="w-full"
                                formControlName="capacity"
                                [min]="0"
                                [max]="256"
                            ></a-counter>
                        </div>
                    }
                </form>

                <!-- Collapsible: Space Classification -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Space Classification
                        <span class="text-xs opacity-50 ml-2">Type, use & enclosure</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2" [formGroup]="venue_form">
                        <div class="grid grid-cols-3 gap-2">
                            <div class="flex flex-col min-w-0">
                                <label>Space Type</label>
                                <mat-form-field appearance="outline">
                                    <mat-select formControlName="space_type" placeholder="Select space type">
                                        @for (opt of space_type_options; track opt.value) {
                                            <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="flex flex-col min-w-0">
                                <label>Primary Use</label>
                                <mat-form-field appearance="outline">
                                    <mat-select formControlName="primary_use" placeholder="Select primary use">
                                        @for (opt of primary_use_options; track opt.value) {
                                            <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="flex flex-col min-w-0">
                                <label>Enclosure Level</label>
                                <mat-form-field appearance="outline">
                                    <mat-select formControlName="enclosure_level" placeholder="Select enclosure level">
                                        @for (opt of enclosure_level_options; track opt.value) {
                                            <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        </div>
                    </div>
                </details>

                <!-- Collapsible: Capacity Model -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Capacity Model
                        <span class="text-xs opacity-50 ml-2">Seated, standing, teaching & fire code limits</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2" [formGroup]="venue_form">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="flex flex-col min-w-0">
                                <label>Seated Capacity</label>
                                <a-counter class="w-full" formControlName="capacity_seated" [min]="0" [max]="9999"></a-counter>
                            </div>
                            <div class="flex flex-col min-w-0">
                                <label>Standing Capacity</label>
                                <a-counter class="w-full" formControlName="capacity_standing" [min]="0" [max]="9999"></a-counter>
                            </div>
                            <div class="flex flex-col min-w-0">
                                <label>Teaching Capacity</label>
                                <a-counter class="w-full" formControlName="capacity_teaching" [min]="0" [max]="9999"></a-counter>
                            </div>
                            <div class="flex flex-col min-w-0">
                                <label>Fire Code Max</label>
                                <a-counter class="w-full" formControlName="capacity_fire_code" [min]="0" [max]="9999"></a-counter>
                            </div>
                        </div>
                    </div>
                </details>

                <!-- Collapsible: Safety & Risk -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Safety & Risk
                        <span class="text-xs opacity-50 ml-2">Risk profile, exits & security</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2 flex flex-col space-y-4" [formGroup]="venue_form">
                        <div class="grid grid-cols-2 gap-2">
                            <div class="flex flex-col min-w-0">
                                <label>Risk Profile</label>
                                <mat-form-field appearance="outline">
                                    <mat-select formControlName="risk_profile" placeholder="Select risk profile">
                                        @for (opt of risk_profile_options; track opt.value) {
                                            <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="flex flex-col justify-center pt-4">
                                <settings-toggle name="Safety Approval Required" formControlName="safety_approval_required"></settings-toggle>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <div class="flex flex-col min-w-0">
                                <label>Emergency Exits</label>
                                <a-counter class="w-full" formControlName="emergency_exits_count" [min]="0" [max]="20"></a-counter>
                            </div>
                            <div class="flex flex-col min-w-0">
                                <label>Security Threshold (attendees)</label>
                                <a-counter class="w-full" formControlName="security_required_threshold" [min]="0" [max]="9999"></a-counter>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <label>Special Hazards</label>
                            <mat-form-field appearance="outline">
                                <textarea matInput formControlName="special_hazards" placeholder="Describe any special hazards"></textarea>
                            </mat-form-field>
                        </div>
                    </div>
                </details>

                <!-- Pricing -->
                <div class="mt-2 w-full overflow-hidden" [formGroup]="venue_form">
                    <label class="font-medium text-sm mb-2 block">Pricing</label>
                    <div class="grid grid-cols-3 gap-2">
                        <div class="flex flex-col min-w-0">
                            <label>Pricing Model</label>
                            <mat-form-field appearance="outline">
                                <mat-select formControlName="pricing_model" placeholder="Select pricing model">
                                    @for (opt of pricing_model_options; track opt.value) {
                                        <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="flex flex-col min-w-0">
                            <label>Hourly Rate ($)</label>
                            <mat-form-field appearance="outline">
                                <input matInput type="number" formControlName="hourly_rate" placeholder="0" [min]="0" [max]="99999" />
                            </mat-form-field>
                        </div>
                        <div class="flex flex-col min-w-0">
                            <label>Base Price ($)</label>
                            <mat-form-field appearance="outline">
                                <input matInput type="number" formControlName="base_price" placeholder="0" [min]="0" [max]="99999" />
                            </mat-form-field>
                        </div>
                    </div>
                </div>
            }

            @if (current_page() === 2) {
                <!-- Setup / Breakdown -->
                <div class="flex space-x-2" [formGroup]="settings_form">
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="setup" class="flex items-center">
                            {{
                                'APP.CONCIERGE.ROOMS_DEFAULT_SETUP' | translate
                            }}
                            <icon
                                class="ml-2 text-base"
                                [matTooltip]="
                                    'APP.CONCIERGE.ROOMS_SETUP_INFO' | translate
                                "
                            >
                                info
                            </icon>
                        </label>
                        <a-duration-field
                            name="setup"
                            formControlName="setup"
                            [min]="0"
                        ></a-duration-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="breakdown" class="flex items-center">
                            {{
                                'APP.CONCIERGE.ROOMS_DEFAULT_BREAKDOWN'
                                    | translate
                            }}
                            <icon
                                class="ml-2 text-base"
                                [matTooltip]="
                                    'APP.CONCIERGE.ROOMS_BREAKDOWN_INFO'
                                        | translate
                                "
                            >
                                info
                            </icon>
                        </label>
                        <a-duration-field
                            name="breakdown"
                            [min]="0"
                            formControlName="breakdown"
                        ></a-duration-field>
                    </div>
                </div>

                <!-- Collapsible: AV & Technology -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        AV & Technology
                        <span class="text-xs opacity-50 ml-2">Equipment, inputs & support</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2" [formGroup]="venue_form">
                        <div class="grid grid-cols-2 gap-2 mb-4">
                            <div class="flex flex-col min-w-0">
                                <label>AV Equipment</label>
                                <mat-form-field appearance="outline">
                                    <mat-select formControlName="av_equipment" multiple placeholder="Select equipment">
                                        @for (opt of av_equipment_options; track opt.value) {
                                            <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="flex flex-col min-w-0">
                                <label>AV Inputs</label>
                                <mat-form-field appearance="outline">
                                    <mat-select formControlName="av_inputs" multiple placeholder="Select inputs">
                                        @for (opt of av_input_options; track opt.value) {
                                            <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-2">
                            <div class="flex flex-col min-w-0">
                                <label>AV Support Model</label>
                                <mat-form-field appearance="outline">
                                    <mat-select formControlName="av_support_model" placeholder="Select support model">
                                        @for (opt of av_support_model_options; track opt.value) {
                                            <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="flex items-center justify-center pt-4">
                                <settings-toggle name="AV Support Required" formControlName="av_support_required"></settings-toggle>
                            </div>
                            <div class="flex items-center justify-center pt-4">
                                <settings-toggle name="After Hours AV" formControlName="after_hours_av_supported"></settings-toggle>
                            </div>
                        </div>
                    </div>
                </details>

                <!-- Collapsible: Layout & Furniture -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Layout & Furniture
                        <span class="text-xs opacity-50 ml-2">Seating, layouts & furniture</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2" [formGroup]="venue_form">
                        <div class="grid grid-cols-3 gap-2">
                            <div class="flex flex-col min-w-0">
                                <label>Seating Type</label>
                                <mat-form-field appearance="outline">
                                    <mat-select formControlName="seating_type" placeholder="Select seating type">
                                        @for (opt of seating_type_options; track opt.value) {
                                            <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="flex flex-col min-w-0">
                                <label>Supported Layouts</label>
                                <mat-form-field appearance="outline">
                                    <mat-select formControlName="supported_layouts" multiple placeholder="Select layouts">
                                        @for (opt of supported_layout_options; track opt.value) {
                                            <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="flex items-center justify-center pt-4">
                                <settings-toggle name="Furniture Movable" formControlName="furniture_movable"></settings-toggle>
                            </div>
                        </div>
                    </div>
                </details>

                <!-- Collapsible: Accessibility -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Accessibility
                        <span class="text-xs opacity-50 ml-2">Access, hearing & mobility</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2 flex flex-col space-y-4" [formGroup]="venue_form">
                        <div class="grid grid-cols-2 gap-4">
                            <settings-toggle name="Step-Free Access" formControlName="step_free_access"></settings-toggle>
                            <settings-toggle name="Hearing Loop" formControlName="hearing_loop_available"></settings-toggle>
                            <settings-toggle name="Accessible Restroom Nearby" formControlName="accessible_restroom_nearby"></settings-toggle>
                            <settings-toggle name="Adjustable Lighting" formControlName="adjustable_lighting"></settings-toggle>
                        </div>
                        <div class="flex flex-col w-1/2">
                            <label>Wheelchair Capacity</label>
                            <a-counter class="w-full" formControlName="wheelchair_capacity" [min]="0" [max]="999"></a-counter>
                        </div>
                    </div>
                </details>

                <!-- Collapsible: Catering -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Catering
                        <span class="text-xs opacity-50 ml-2">Kitchen, providers & notes</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2 flex flex-col space-y-4" [formGroup]="venue_form">
                        <div class="grid grid-cols-2 gap-4">
                            <settings-toggle name="Catering Available" formControlName="catering_available"></settings-toggle>
                            <settings-toggle name="Kitchen Access" formControlName="kitchen_access"></settings-toggle>
                        </div>
                        <div class="flex flex-col">
                            <label>Catering Providers</label>
                            <mat-form-field appearance="outline">
                                <input matInput formControlName="catering_providers" placeholder="Enter catering providers" />
                            </mat-form-field>
                        </div>
                        <div class="flex flex-col">
                            <label>Catering Notes</label>
                            <mat-form-field appearance="outline">
                                <textarea matInput formControlName="catering_notes" placeholder="Additional catering notes"></textarea>
                            </mat-form-field>
                        </div>
                    </div>
                </details>

                <!-- Existing fields: Description, Features, Map ID, Timezone, Images, URLs -->
                <form [formGroup]="form">
                    @if (form.controls.description) {
                        <div class="flex flex-col">
                            <label for="description">{{
                                'COMMON.DESCRIPTION' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <textarea
                                    matInput
                                    name="description"
                                    [placeholder]="'COMMON.DESCRIPTION' | translate"
                                    formControlName="description"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.features) {
                        <div class="flex flex-col">
                            <label
                                [class.error]="
                                    form.controls.features.invalid &&
                                    form.controls.features.touched
                                "
                            >
                                {{ 'COMMON.FEATURES' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-chip-grid
                                    #chipList
                                    [attr.aria-label]="
                                        'COMMON.FEATURES' | translate
                                    "
                                >
                                    @for (feature of feature_list; track feature) {
                                        <mat-chip-row
                                            [removable]="true"
                                            (removed)="removeFeature(feature)"
                                        >
                                            {{ feature }}
                                            <icon matChipRemove>close</icon>
                                        </mat-chip-row>
                                    }
                                    <input
                                        [placeholder]="
                                            'COMMON.FEATURES' | translate
                                        "
                                        [matChipInputFor]="chipList"
                                        [matChipInputSeparatorKeyCodes]="separators"
                                        [matChipInputAddOnBlur]="true"
                                        (matChipInputTokenEnd)="addFeature($event)"
                                    />
                                </mat-chip-grid>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.map_id) {
                        <div class="flex flex-col">
                            <label for="map_id">{{
                                'EXPLORE.MAP_ID' | translate
                            }}</label>
                            <div class="flex space-x-2">
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="map_id"
                                        [placeholder]="
                                            'EXPLORE.MAP_ID_PLACEHOLDER' | translate
                                        "
                                        formControlName="map_id"
                                    />
                                </mat-form-field>
                                <button
                                    icon
                                    matRipple
                                    class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                                    [matTooltip]="
                                        'APP.CONCIERGE.POI_MAP_SELECT' | translate
                                    "
                                    (click)="selectItemfromMap()"
                                >
                                    <icon>place</icon>
                                </button>
                            </div>
                        </div>
                    }
                    <div class="flex flex-col">
                        <label for="timezone">{{
                            'COMMON.TIMEZONE' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <icon matPrefix class="text-2xl">search</icon>
                            <input
                                matInput
                                formControlName="timezone"
                                [placeholder]="'COMMON.TIMEZONE' | translate"
                                [matAutocomplete]="auto"
                            />
                        </mat-form-field>
                        <mat-autocomplete #auto="matAutocomplete">
                            @for (tz of filtered_timezones(); track tz) {
                                <mat-option [value]="tz">
                                    {{ tz }}
                                </mat-option>
                            }
                            @if (!timezones().length) {
                                <mat-option [disabled]="true">
                                    {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                                </mat-option>
                            }
                        </mat-autocomplete>
                    </div>
                    @if (form.controls.images) {
                        <div class="flex flex-col">
                            <label for="images">{{
                                'COMMON.IMAGE' | translate
                            }}</label>
                            <image-list-field
                                name="images"
                                formControlName="images"
                            ></image-list-field>
                        </div>
                    }
                    @if (form.controls.timetable_url) {
                        <div class="flex flex-col">
                            <label
                                for="timetable-url"
                                [class.error]="
                                    form.controls.timetable_url.invalid &&
                                    form.controls.timetable_url.touched
                                "
                            >
                                {{ 'COMMON.TIMETABLE_URL' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="timetable-url"
                                    [placeholder]="
                                        'COMMON.TIMETABLE_URL' | translate
                                    "
                                    formControlName="timetable_url"
                                />
                                <mat-error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.room_booking_url) {
                        <div class="flex flex-col">
                            <label
                                for="room-booking-url"
                                [class.error]="
                                    form.controls.room_booking_url.invalid &&
                                    form.controls.room_booking_url.touched
                                "
                            >
                                {{ 'COMMON.ROOM_BOOKING_URL' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="room-booking-url"
                                    [placeholder]="
                                        'COMMON.ROOM_BOOKING_URL' | translate
                                    "
                                    formControlName="room_booking_url"
                                />
                                <mat-error>
                                    {{ 'COMMON.URL_VALID' | translate }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    }
                </form>

            }
        </fullscreen-modal-shell>
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
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        FullscreenModalShellComponent,
        ImageListFieldComponent,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        CounterComponent,
        SettingsToggleComponent,
        MatSelectModule,
        DurationFieldComponent,
        MatTooltipModule,
    ],
})
export class RoomModalComponent extends AsyncHandler implements OnInit {
    private _data = inject<{
        room: Space;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<RoomModalComponent>>(MatDialogRef);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    public loading = false;
    public current_page = signal<1 | 2>(1);
    public timezones = signal(TIMEZONES_IANA);
    public filtered_timezones = signal<string[]>([]);
    /** List of levels for the active building */
    public readonly levels = this._org.active_levels;
    /** Group of form fields used for creating the system */
    public form = generateSystemsFormFields(this._data.room as any);
    public settings_form = new FormGroup({
        setup: new FormControl(0),
        breakdown: new FormControl(0),
    });

    /** Custom venue fields stored in org metadata */
    public venue_form = new FormGroup({
        // Space Classification
        space_type: new FormControl(''),
        primary_use: new FormControl(''),
        enclosure_level: new FormControl(''),
        // Capacity Model
        capacity_seated: new FormControl(0),
        capacity_standing: new FormControl(0),
        capacity_teaching: new FormControl(0),
        capacity_fire_code: new FormControl(0),
        // AV & Technology
        av_equipment: new FormControl<string[]>([]),
        av_inputs: new FormControl<string[]>([]),
        av_support_model: new FormControl(''),
        av_support_required: new FormControl(false),
        after_hours_av_supported: new FormControl(false),
        // Layout & Furniture
        seating_type: new FormControl(''),
        supported_layouts: new FormControl<string[]>([]),
        furniture_movable: new FormControl(false),
        // Safety & Risk
        risk_profile: new FormControl(''),
        safety_approval_required: new FormControl(false),
        emergency_exits_count: new FormControl(0),
        security_required_threshold: new FormControl(0),
        special_hazards: new FormControl(''),
        // Accessibility
        step_free_access: new FormControl(false),
        wheelchair_capacity: new FormControl(0),
        hearing_loop_available: new FormControl(false),
        accessible_restroom_nearby: new FormControl(false),
        adjustable_lighting: new FormControl(false),
        // Catering
        catering_available: new FormControl(false),
        kitchen_access: new FormControl(false),
        catering_providers: new FormControl(''),
        catering_notes: new FormControl(''),
        // Pricing
        pricing_model: new FormControl(''),
        hourly_rate: new FormControl(0),
        base_price: new FormControl(0),
    });

    /** Select options */
    public readonly space_type_options = SPACE_TYPE_OPTIONS;
    public readonly primary_use_options = PRIMARY_USE_OPTIONS;
    public readonly enclosure_level_options = ENCLOSURE_LEVEL_OPTIONS;
    public readonly risk_profile_options = RISK_PROFILE_OPTIONS;
    public readonly pricing_model_options = PRICING_MODEL_OPTIONS;
    public readonly av_equipment_options = AV_EQUIPMENT_OPTIONS;
    public readonly av_input_options = AV_INPUT_OPTIONS;
    public readonly av_support_model_options = AV_SUPPORT_MODEL_OPTIONS;
    public readonly seating_type_options = SEATING_TYPE_OPTIONS;
    public readonly supported_layout_options = SUPPORTED_LAYOUT_OPTIONS;

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

    public async ngOnInit() {
        const { details } = await showMetadata(
            this._org.organisation.id,
            'settings',
        ).toPromise();
        const overflow = getItemWithKeys(['events', 'overflow'], details) || {};
        if (this._data.room.id && overflow[this._data.room.id]) {
            this.settings_form.patchValue(overflow[this._data.room.id]);
        }
        // Load venue settings from org metadata
        const venue_settings = getItemWithKeys(['venue_settings'], details) || {};
        if (this._data.room.id && venue_settings[this._data.room.id]) {
            this.venue_form.patchValue(venue_settings[this._data.room.id]);
        }
        this._updateTimezoneList();
        this.subscription(
            'tz-change',
            this.form.valueChanges.subscribe(() => this._updateTimezoneList()),
        );
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

    public async save() {
        if (!this.form.valid)
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
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
            'settings',
        ).toPromise()) as any;
        // Save setup/breakdown overflow
        const overflow = getItemWithKeys(['events', 'overflow'], details) || {};
        overflow[data.id] = this.settings_form.value;
        // Save venue settings
        const venue_settings = getItemWithKeys(['venue_settings'], details) || {};
        venue_settings[data.id] = this.venue_form.value;
        await lastValueFrom(
            updateMetadata(this._org.organisation.id, {
                name: 'settings',
                details: {
                    ...details,
                    events: { ...(details.events || {}), overflow },
                    venue_settings,
                },
                description: '',
            }),
        ).catch((e) =>
            notifyWarn('Unable to save room setup and breakdown times'),
        );
        await lastValueFrom(
            data.id ? updateSystem(data.id, data) : addSystem(data),
        );
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close(true);
        this.loading = false;
    }

    private _updateTimezoneList() {
        const timezone = this.form?.value?.timezone || '';
        this.timezones.set(TIMEZONES_IANA);
        this.filtered_timezones.set(
            this.timezones().filter((_) =>
                _.toLowerCase().includes(timezone.toLowerCase()),
            ),
        );
    }

    public selectItemfromMap() {
        let level = this._org.levelWithID(this.form.value.zones as any);
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
            this.form.patchValue({ map_id: d, zones });
        });
    }
}
