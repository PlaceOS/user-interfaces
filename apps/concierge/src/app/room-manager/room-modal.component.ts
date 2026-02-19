import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, OnInit, inject, signal, computed } from '@angular/core';
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
import { CateringItem } from '@placeos/common';
import { CateringStateService } from '@placeos/catering';
import { SelectMapItemModalComponent } from '../ui/select-map-item-modal.component';
import {
    UNIT_LABELS,
    CATERING_TIER_OPTIONS,
    TIER_CATEGORIES,
    AV_CATEGORIES,
    SETUP_CATEGORIES,
    BUILDING_CATERING_TIER,
    CateringTier,
} from './ucla-catering-menu';
import { ServicesStateService } from '../services/services-state.service';

// ── UCLA Venue Types ──────────────────────────────────────────────
const VENUE_TYPE_OPTIONS = [
    { value: 'Event Space', label: 'Event Space' },
    { value: 'Meeting Room', label: 'Meeting Room' },
    { value: 'Conference Room', label: 'Conference Room' },
    { value: 'Auditorium', label: 'Auditorium' },
    { value: 'Ballroom', label: 'Ballroom' },
    { value: 'Boardroom', label: 'Boardroom' },
    { value: 'Outdoor Space', label: 'Outdoor Space' },
    { value: 'Dining Venue', label: 'Dining Venue' },
    { value: 'Gallery', label: 'Gallery' },
    { value: 'Theater', label: 'Theater' },
    { value: 'Classroom', label: 'Classroom' },
];

// ── UCLA AV & Technology ─────────────────────────────────────────
const AV_SERVICE_OPTIONS = [
    { value: 'av_equipment_support', label: 'Audio-Visual Equipment & Support' },
    { value: 'sound_system', label: 'Sound System & Microphones' },
    { value: 'projection_screens', label: 'Projection & Screens' },
    { value: 'video_conferencing', label: 'Video Conferencing' },
    { value: 'live_streaming', label: 'Live-Streaming & Recording' },
    { value: 'smart_room_tech', label: 'Smart Room Technology' },
    { value: 'digital_signage', label: 'Digital Signage' },
    { value: 'portable_av', label: 'Portable AV Equipment' },
    { value: 'virtual_hybrid', label: 'Virtual & Hybrid Support' },
    { value: 'instructional_tech', label: 'Instructional Technology' },
];

// ── UCLA Event Planning & Coordination ───────────────────────────
const EVENT_SERVICE_OPTIONS = [
    { value: 'event_planning', label: 'Event Planning & Management' },
    { value: 'event_facilitators', label: 'Event Facilitators / Conference Managers' },
    { value: 'event_staffing', label: 'Event Staffing' },
    { value: 'room_setup_strike', label: 'Room Setup & Strike' },
    { value: 'custodial_cleaning', label: 'Custodial & Cleaning' },
    { value: 'security_coordination', label: 'Security Coordination' },
    { value: 'ticketing_services', label: 'Ticketing Services' },
    { value: 'photography_permitting', label: 'Photography & Film Permitting' },
    { value: 'simultaneous_translation', label: 'Simultaneous Translation' },
    { value: 'signage_displays', label: 'Signage & Displays' },
];

// ── UCLA Layout Options ──────────────────────────────────────────
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

                <!-- Venue Type -->
                <div class="mb-3" [formGroup]="venue_form">
                    <div class="flex flex-col">
                        <label>Venue Type</label>
                        <mat-form-field appearance="outline">
                            <mat-select formControlName="venue_type" placeholder="Select venue type">
                                @for (opt of venue_type_options; track opt.value) {
                                    <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>

                <!-- Collapsible: Layout & Configuration -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Layout & Configuration
                        <span class="text-xs opacity-50 ml-2">Seating, layouts & square footage</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2" [formGroup]="venue_form">
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div class="flex flex-col min-w-0">
                                <label>Square Footage</label>
                                <mat-form-field appearance="outline">
                                    <input matInput type="number" formControlName="sqft" placeholder="0" [min]="0" />
                                </mat-form-field>
                            </div>
                            <div class="flex items-center justify-center pt-4">
                                <settings-toggle name="Furniture Movable" formControlName="furniture_movable"></settings-toggle>
                            </div>
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
                    </div>
                </details>

                <!-- Pricing -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Pricing
                        <span class="text-xs opacity-50 ml-2">Hourly, half-day & full-day rates</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2" [formGroup]="venue_form">
                        <div class="grid grid-cols-3 gap-2">
                            <div class="flex flex-col min-w-0">
                                <label>Hourly Rate ($)</label>
                                <mat-form-field appearance="outline">
                                    <input matInput type="number" formControlName="hourly_rate" placeholder="0" [min]="0" />
                                </mat-form-field>
                            </div>
                            <div class="flex flex-col min-w-0">
                                <label>Half-Day Rate ($)</label>
                                <mat-form-field appearance="outline">
                                    <input matInput type="number" formControlName="half_day_rate" placeholder="0" [min]="0" />
                                </mat-form-field>
                            </div>
                            <div class="flex flex-col min-w-0">
                                <label>Full-Day Rate ($)</label>
                                <mat-form-field appearance="outline">
                                    <input matInput type="number" formControlName="full_day_rate" placeholder="0" [min]="0" />
                                </mat-form-field>
                            </div>
                        </div>
                    </div>
                </details>
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

                <!-- Collapsible: AV & Technology Services -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        AV & Technology
                        <span class="text-xs opacity-50 ml-2">Equipment, staffing & tech support</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2" [formGroup]="venue_form">
                        <div class="flex flex-col min-w-0 mb-4">
                            <label>AV & Tech Services</label>
                            <mat-form-field appearance="outline">
                                <mat-select formControlName="av_services" multiple placeholder="Select available services">
                                    @for (opt of av_service_options; track opt.value) {
                                        <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <settings-toggle name="On-Site Technical Staff" formControlName="onsite_tech_staff"></settings-toggle>
                            <settings-toggle name="After Hours AV Available" formControlName="after_hours_av"></settings-toggle>
                        </div>
                        <!-- AV Equipment & Staffing Catalog -->
                        <label class="text-xs font-medium opacity-70 mb-1">AV Equipment & Staffing Catalog</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <icon matPrefix class="text-xl">search</icon>
                            <input matInput placeholder="Search AV items..." [value]="av_search()" (input)="av_search.set($any($event.target).value)" />
                        </mat-form-field>
                        <div class="max-h-[300px] overflow-y-auto border border-base-200 rounded-lg">
                            @for (cat of filtered_av_categories(); track cat.id) {
                                <details class="border-b border-base-200 last:border-b-0">
                                    <summary class="cursor-pointer px-3 py-2 font-medium text-xs hover:bg-base-100 select-none flex items-center justify-between sticky top-0 bg-white z-10">
                                        <span>{{ cat.label }}</span>
                                        <span class="text-xs opacity-50">{{ getAvEnabledCount(cat.id) }}/{{ cat.items.length }}</span>
                                    </summary>
                                    <div class="px-3 pb-2">
                                        <div class="flex items-center justify-between py-1 mb-1 border-b border-base-100">
                                            <span class="text-xs font-medium opacity-60">Select All</span>
                                            <button type="button" class="text-xs text-primary hover:underline" (click)="toggleAvCategory(cat.id)">
                                                {{ isAvCategoryFullyEnabled(cat.id) ? 'Deselect All' : 'Select All' }}
                                            </button>
                                        </div>
                                        @for (item of cat.items; track item.id) {
                                            <div class="flex items-center justify-between py-1 gap-2 hover:bg-base-50 rounded px-1"
                                                 [class.opacity-50]="!isAvItemEnabled(item.id)">
                                                <label class="flex items-center gap-2 flex-1 min-w-0 cursor-pointer text-xs">
                                                    <input type="checkbox" class="accent-primary w-3.5 h-3.5"
                                                        [checked]="isAvItemEnabled(item.id)"
                                                        (change)="toggleAvItem(item.id)" />
                                                    <span class="truncate">{{ item.name }}</span>
                                                </label>
                                                <div class="flex items-center gap-1 shrink-0">
                                                    <span class="text-xs opacity-50">$</span>
                                                    <input type="number" class="w-16 text-xs text-right border border-base-200 rounded px-1 py-0.5"
                                                        [value]="getMenuItemPrice(item.id)"
                                                        (change)="setMenuItemPrice(item.id, $any($event.target).value)"
                                                        [min]="0" step="1" />
                                                    <span class="text-xs opacity-40 w-12">{{ getUnitLabel(item.tags?.[0] || '') }}</span>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </details>
                            }
                        </div>
                    </div>
                </details>

                <!-- Collapsible: Catering & Dining — UCLA Menu Catalog -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Catering & Dining
                        <span class="text-xs opacity-50 ml-2">UCLA menu catalog & pricing</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2 flex flex-col space-y-3">
                        <!-- Catering Tier selector -->
                        <div class="flex flex-col" [formGroup]="venue_form">
                            <label class="text-xs opacity-70 mb-1">Service Level</label>
                            <mat-form-field appearance="outline">
                                <mat-select formControlName="catering_tier"
                                    (selectionChange)="active_tier.set($event.value)">
                                    @for (opt of catering_tier_options; track opt.value) {
                                        <mat-option [value]="opt.value">
                                            {{ opt.label }}
                                            <span class="text-xs opacity-50 ml-1">— {{ opt.description }}</span>
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <!-- Provider & Kitchen toggles -->
                        <div class="grid grid-cols-2 gap-4 mb-2" [formGroup]="venue_form">
                            <settings-toggle name="Kitchen Access" formControlName="kitchen_access"></settings-toggle>
                            <settings-toggle name="Piano Available" formControlName="piano_available"></settings-toggle>
                        </div>
                        <div class="grid grid-cols-2 gap-2 mb-2" [formGroup]="venue_form">
                            <div class="flex flex-col">
                                <label class="text-xs opacity-70">Catering Provider</label>
                                <mat-form-field appearance="outline">
                                    <input matInput formControlName="catering_provider" placeholder="e.g. UCLA Conferences & Catering" />
                                </mat-form-field>
                            </div>
                            <div class="flex flex-col">
                                <label class="text-xs opacity-70">Catering Notes</label>
                                <mat-form-field appearance="outline">
                                    <input matInput formControlName="catering_notes" placeholder="Additional notes" />
                                </mat-form-field>
                            </div>
                        </div>

                        <!-- Menu search -->
                        <mat-form-field appearance="outline" class="w-full">
                            <icon matPrefix class="text-xl">search</icon>
                            <input matInput placeholder="Search menu items..." [value]="menu_search()" (input)="menu_search.set($any($event.target).value)" />
                        </mat-form-field>

                        <!-- Menu categories -->
                        <div class="max-h-[400px] overflow-y-auto border border-base-200 rounded-lg">
                            @for (cat of filtered_menu_categories(); track cat.id) {
                                <details class="border-b border-base-200 last:border-b-0">
                                    <summary class="cursor-pointer px-3 py-2 font-medium text-xs hover:bg-base-100 select-none flex items-center justify-between sticky top-0 bg-white z-10">
                                        <span>
                                            {{ cat.label }}
                                            <span class="text-xs opacity-40 ml-1">{{ cat.description }}</span>
                                        </span>
                                        <span class="text-xs opacity-50">{{ getEnabledCount(cat.id) }}/{{ cat.items.length }}</span>
                                    </summary>
                                    <div class="px-3 pb-2">
                                        <!-- Select All toggle -->
                                        <div class="flex items-center justify-between py-1 mb-1 border-b border-base-100">
                                            <span class="text-xs font-medium opacity-60">Select All</span>
                                            <button type="button" class="text-xs text-primary hover:underline" (click)="toggleCategory(cat.id)">
                                                {{ isCategoryFullyEnabled(cat.id) ? 'Deselect All' : 'Select All' }}
                                            </button>
                                        </div>
                                        @for (item of cat.items; track item.id) {
                                            <div class="flex items-center justify-between py-1 gap-2 hover:bg-base-50 rounded px-1"
                                                 [class.opacity-50]="!isMenuItemEnabled(item.id)">
                                                <!-- Checkbox + Name -->
                                                <label class="flex items-center gap-2 flex-1 min-w-0 cursor-pointer text-xs">
                                                    <input type="checkbox"
                                                        class="accent-primary w-3.5 h-3.5"
                                                        [checked]="isMenuItemEnabled(item.id)"
                                                        (change)="toggleMenuItem(item.id)" />
                                                    <span class="truncate">{{ item.name }}</span>
                                                </label>
                                                <!-- Editable price -->
                                                <div class="flex items-center gap-1 shrink-0">
                                                    <span class="text-xs opacity-50">$</span>
                                                    <input type="number" class="w-16 text-xs text-right border border-base-200 rounded px-1 py-0.5"
                                                        [value]="getMenuItemPrice(item.id)"
                                                        (change)="setMenuItemPrice(item.id, $any($event.target).value)"
                                                        [min]="0" step="0.50" />
                                                    <span class="text-xs opacity-40 w-12">{{ getUnitLabel(item.tags?.[0] || '') }}</span>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </details>
                            }
                        </div>
                    </div>
                </details>

                <!-- Collapsible: Setup & Furniture Rental -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Setup & Furniture Rental
                        <span class="text-xs opacity-50 ml-2">Tables, bars & event furniture</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2">
                        <mat-form-field appearance="outline" class="w-full">
                            <icon matPrefix class="text-xl">search</icon>
                            <input matInput placeholder="Search setup items..." [value]="setup_search()" (input)="setup_search.set($any($event.target).value)" />
                        </mat-form-field>
                        <div class="max-h-[300px] overflow-y-auto border border-base-200 rounded-lg">
                            @for (cat of filtered_setup_categories(); track cat.id) {
                                <div class="px-3 pb-2 pt-1">
                                    <div class="flex items-center justify-between py-1 mb-1 border-b border-base-100">
                                        <span class="text-xs font-medium opacity-60">{{ getSetupEnabledCount() }}/{{ cat.items.length }} selected</span>
                                        <button type="button" class="text-xs text-primary hover:underline" (click)="toggleAllSetup()">
                                            {{ isAllSetupEnabled() ? 'Deselect All' : 'Select All' }}
                                        </button>
                                    </div>
                                    @for (item of cat.items; track item.id) {
                                        <div class="flex items-center justify-between py-1 gap-2 hover:bg-base-50 rounded px-1"
                                             [class.opacity-50]="!isSetupItemEnabled(item.id)">
                                            <label class="flex items-center gap-2 flex-1 min-w-0 cursor-pointer text-xs">
                                                <input type="checkbox" class="accent-primary w-3.5 h-3.5"
                                                    [checked]="isSetupItemEnabled(item.id)"
                                                    (change)="toggleSetupItem(item.id)" />
                                                <span class="truncate">{{ item.name }}</span>
                                            </label>
                                            <div class="flex items-center gap-1 shrink-0">
                                                <span class="text-xs opacity-50">$</span>
                                                <input type="number" class="w-16 text-xs text-right border border-base-200 rounded px-1 py-0.5"
                                                    [value]="getMenuItemPrice(item.id)"
                                                    (change)="setMenuItemPrice(item.id, $any($event.target).value)"
                                                    [min]="0" step="1" />
                                                <span class="text-xs opacity-40 w-12">{{ getUnitLabel(item.tags?.[0] || '') }}</span>
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                        <!-- Service Charge toggle -->
                        <div class="mt-3 pt-2 border-t border-base-200" [formGroup]="venue_form">
                            <settings-toggle name="After-Hours Service Charge (+$50)" formControlName="after_hours_service_charge"></settings-toggle>
                        </div>
                    </div>
                </details>

                <!-- Collapsible: Event Planning & Coordination -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Event Services
                        <span class="text-xs opacity-50 ml-2">Planning, staffing & CNSI packages</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2" [formGroup]="venue_form">
                        <div class="flex flex-col min-w-0 mb-4">
                            <label>General Event Services</label>
                            <mat-form-field appearance="outline">
                                <mat-select formControlName="event_services" multiple placeholder="Select available services">
                                    @for (opt of event_service_options; track opt.value) {
                                        <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="flex flex-col min-w-0">
                            <label class="mb-1">CNSI Service Packages</label>
                            <p class="text-xs opacity-50 mb-2">
                                Select packages and add-ons from Service Management available at this venue.
                            </p>
                            @for (group of managed_service_groups(); track group.label) {
                                <div class="mb-3">
                                    <div class="text-xs font-semibold opacity-60 mb-1">{{ group.label }}</div>
                                    <div class="rounded border border-base-200 divide-y divide-base-200">
                                        @for (svc of group.items; track svc.id) {
                                            <label class="flex cursor-pointer items-center gap-3 px-3 py-2 hover:bg-base-200/50">
                                                <input
                                                    type="checkbox"
                                                    class="checkbox checkbox-sm"
                                                    [checked]="isManagedServiceSelected(svc.id)"
                                                    (change)="toggleManagedService(svc.id)"
                                                />
                                                <icon class="text-base-content/40 text-lg">{{ svc.icon || 'misc_services' }}</icon>
                                                <div class="flex-1 min-w-0">
                                                    <div class="text-sm font-medium">{{ svc.name }}</div>
                                                    <div class="text-xs opacity-50">{{ svc.internal_price }} (internal) · {{ svc.external_price }} (external)</div>
                                                </div>
                                            </label>
                                        }
                                    </div>
                                </div>
                            }
                            @if (managed_service_groups().length === 0) {
                                <div class="text-xs text-base-content/50 rounded border border-base-200 px-3 py-4 text-center">
                                    No services configured. Add services via Service Management.
                                </div>
                            }
                        </div>
                    </div>
                </details>

                <!-- Collapsible: Parking & WiFi -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Parking & WiFi
                        <span class="text-xs opacity-50 ml-2">Connectivity & transportation</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2" [formGroup]="venue_form">
                        <div class="grid grid-cols-2 gap-4">
                            <settings-toggle name="Complimentary WiFi" formControlName="wifi_available"></settings-toggle>
                            <settings-toggle name="High-Speed WiFi" formControlName="high_speed_wifi"></settings-toggle>
                            <settings-toggle name="On-Site Parking" formControlName="onsite_parking"></settings-toggle>
                            <settings-toggle name="Visitor Transportation" formControlName="visitor_transportation"></settings-toggle>
                        </div>
                    </div>
                </details>

                <!-- Collapsible: Accessibility -->
                <details class="border border-base-300 rounded-lg mb-3 w-full overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 font-medium text-sm hover:bg-base-200 select-none">
                        Accessibility
                        <span class="text-xs opacity-50 ml-2">ADA compliance & accommodations</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2 flex flex-col space-y-4" [formGroup]="venue_form">
                        <div class="grid grid-cols-2 gap-4">
                            <settings-toggle name="ADA Accessible" formControlName="ada_accessible"></settings-toggle>
                            <settings-toggle name="Hearing Loop" formControlName="hearing_loop"></settings-toggle>
                            <settings-toggle name="Accessible Restroom Nearby" formControlName="accessible_restroom"></settings-toggle>
                            <settings-toggle name="Adjustable Lighting" formControlName="adjustable_lighting"></settings-toggle>
                        </div>
                        <div class="flex flex-col w-1/2">
                            <label>Wheelchair Capacity</label>
                            <a-counter class="w-full" formControlName="wheelchair_capacity" [min]="0" [max]="999"></a-counter>
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
    private _catering = inject(CateringStateService);
    private _services_state = inject(ServicesStateService);

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
        // Venue Type
        venue_type: new FormControl(''),
        // Layout & Configuration
        sqft: new FormControl(0),
        supported_layouts: new FormControl<string[]>([]),
        furniture_movable: new FormControl(false),
        // Pricing
        hourly_rate: new FormControl(0),
        half_day_rate: new FormControl(0),
        full_day_rate: new FormControl(0),
        // AV & Technology
        av_services: new FormControl<string[]>([]),
        onsite_tech_staff: new FormControl(false),
        after_hours_av: new FormControl(false),
        av_enabled_items: new FormControl<string[]>([]),
        // Setup & Furniture Rental
        setup_enabled_items: new FormControl<string[]>([]),
        // Service Charges
        after_hours_service_charge: new FormControl(false),
        // Catering & Dining — UCLA Menu (food only)
        catering_tier: new FormControl<CateringTier>('full_service'),
        menu_enabled_items: new FormControl<string[]>([]),
        menu_price_overrides: new FormControl<Record<string, number>>({}),
        kitchen_access: new FormControl(false),
        piano_available: new FormControl(false),
        catering_provider: new FormControl(''),
        catering_notes: new FormControl(''),
        // Event Services
        event_services: new FormControl<string[]>([]),
        managed_services: new FormControl<string[]>([]),
        // Parking & WiFi
        wifi_available: new FormControl(false),
        high_speed_wifi: new FormControl(false),
        onsite_parking: new FormControl(false),
        visitor_transportation: new FormControl(false),
        // Accessibility
        ada_accessible: new FormControl(false),
        hearing_loop: new FormControl(false),
        accessible_restroom: new FormControl(false),
        adjustable_lighting: new FormControl(false),
        wheelchair_capacity: new FormControl(0),
    });

    /** Select options */
    public readonly venue_type_options = VENUE_TYPE_OPTIONS;
    public readonly av_service_options = AV_SERVICE_OPTIONS;
    public readonly event_service_options = EVENT_SERVICE_OPTIONS;
    public readonly supported_layout_options = SUPPORTED_LAYOUT_OPTIONS;

    private readonly _svc_category_labels: Record<string, string> = {
        package: 'Event Packages',
        alacarte: 'A La Carte',
        addon: 'AV Add-ons',
        space: 'Space / Venue',
    };

    public readonly managed_service_groups = computed(() => {
        const services = this._services_state.services();
        const categories = ['package', 'alacarte', 'addon', 'space'];
        return categories
            .map((cat) => ({
                label: this._svc_category_labels[cat] || cat,
                items: services.filter((s) => s.category === cat),
            }))
            .filter((g) => g.items.length > 0);
    });

    public isManagedServiceSelected(id: string): boolean {
        return (this.venue_form.value.managed_services || []).includes(id);
    }

    public toggleManagedService(id: string): void {
        const current = this.venue_form.value.managed_services || [];
        const updated = current.includes(id)
            ? current.filter((s) => s !== id)
            : [...current, id];
        this.venue_form.patchValue({ managed_services: updated });
    }

    /** Menu — loaded from CateringStateService (same source as Catering Menu page) */
    public readonly catering_tier_options = CATERING_TIER_OPTIONS;
    public menu_search = signal('');
    public av_search = signal('');
    public setup_search = signal('');
    public active_tier = signal<CateringTier>('full_service');
    /** Live menu items from the catering service, grouped by category */
    public catering_menu_items = signal<CateringItem[]>([]);
    public catering_menu_categories = computed(() => {
        const items = this.catering_menu_items();
        const category_map = new Map<string, { id: string; label: string; description: string; items: CateringItem[] }>();
        for (const item of items) {
            if (!category_map.has(item.category)) {
                category_map.set(item.category, {
                    id: item.category,
                    label: item.category.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
                    description: '',
                    items: [],
                });
            }
            category_map.get(item.category)!.items.push(item);
        }
        return Array.from(category_map.values());
    });
    public filtered_menu_categories = computed(() => {
        const tier = this.active_tier();
        const allowed = TIER_CATEGORIES[tier] || [];
        const search = this.menu_search().toLowerCase().trim();
        let categories = this.catering_menu_categories().filter((cat) =>
            allowed.includes(cat.id),
        );
        if (search) {
            categories = categories
                .map((cat) => ({
                    ...cat,
                    items: cat.items.filter(
                        (item) =>
                            item.name.toLowerCase().includes(search) ||
                            item.category.toLowerCase().includes(search) ||
                            (item.tags || []).some((t: string) => t.toLowerCase().includes(search)),
                    ),
                }))
                .filter((cat) => cat.items.length > 0);
        }
        return categories;
    });

    /** AV Equipment & Staffing items from the catering service */
    public filtered_av_categories = computed(() => {
        const search = this.av_search().toLowerCase().trim();
        let categories = this.catering_menu_categories().filter((cat) =>
            AV_CATEGORIES.includes(cat.id),
        );
        if (search) {
            categories = categories
                .map((cat) => ({
                    ...cat,
                    items: cat.items.filter((item) =>
                        item.name.toLowerCase().includes(search) ||
                        (item.tags || []).some((t: string) => t.toLowerCase().includes(search)),
                    ),
                }))
                .filter((cat) => cat.items.length > 0);
        }
        return categories;
    });

    /** Setup & Furniture Rental items from the catering service */
    public filtered_setup_categories = computed(() => {
        const search = this.setup_search().toLowerCase().trim();
        let categories = this.catering_menu_categories().filter((cat) =>
            SETUP_CATEGORIES.includes(cat.id),
        );
        if (search) {
            categories = categories
                .map((cat) => ({
                    ...cat,
                    items: cat.items.filter((item) =>
                        item.name.toLowerCase().includes(search) ||
                        (item.tags || []).some((t: string) => t.toLowerCase().includes(search)),
                    ),
                }))
                .filter((cat) => cat.items.length > 0);
        }
        return categories;
    });

    public isAvItemEnabled(item_id: string): boolean {
        const enabled = this.venue_form.controls.av_enabled_items.value || [];
        return enabled.includes(item_id);
    }

    public toggleAvItem(item_id: string): void {
        const enabled = [...(this.venue_form.controls.av_enabled_items.value || [])];
        const idx = enabled.indexOf(item_id);
        if (idx >= 0) { enabled.splice(idx, 1); } else { enabled.push(item_id); }
        this.venue_form.controls.av_enabled_items.setValue(enabled);
    }

    public getAvEnabledCount(category_id: string): number {
        const cat = this.catering_menu_categories().find((c) => c.id === category_id);
        if (!cat) return 0;
        const enabled = this.venue_form.controls.av_enabled_items.value || [];
        return cat.items.filter((i) => enabled.includes(i.id)).length;
    }

    public toggleAvCategory(category_id: string): void {
        const cat = this.catering_menu_categories().find((c) => c.id === category_id);
        if (!cat) return;
        const enabled = [...(this.venue_form.controls.av_enabled_items.value || [])];
        const all_in_cat = cat.items.map((i) => i.id);
        const all_enabled = all_in_cat.every((id) => enabled.includes(id));
        if (all_enabled) {
            this.venue_form.controls.av_enabled_items.setValue(enabled.filter((id) => !all_in_cat.includes(id)));
        } else {
            this.venue_form.controls.av_enabled_items.setValue([...new Set([...enabled, ...all_in_cat])]);
        }
    }

    public isAvCategoryFullyEnabled(category_id: string): boolean {
        const cat = this.catering_menu_categories().find((c) => c.id === category_id);
        if (!cat) return false;
        const enabled = this.venue_form.controls.av_enabled_items.value || [];
        return cat.items.every((i) => enabled.includes(i.id));
    }

    public isSetupItemEnabled(item_id: string): boolean {
        const enabled = this.venue_form.controls.setup_enabled_items.value || [];
        return enabled.includes(item_id);
    }

    public toggleSetupItem(item_id: string): void {
        const enabled = [...(this.venue_form.controls.setup_enabled_items.value || [])];
        const idx = enabled.indexOf(item_id);
        if (idx >= 0) { enabled.splice(idx, 1); } else { enabled.push(item_id); }
        this.venue_form.controls.setup_enabled_items.setValue(enabled);
    }

    public getSetupEnabledCount(): number {
        const cat = this.catering_menu_categories().find((c) => c.id === 'setup');
        if (!cat) return 0;
        const enabled = this.venue_form.controls.setup_enabled_items.value || [];
        return cat.items.filter((i) => enabled.includes(i.id)).length;
    }

    public toggleAllSetup(): void {
        const cat = this.catering_menu_categories().find((c) => c.id === 'setup');
        if (!cat) return;
        const enabled = [...(this.venue_form.controls.setup_enabled_items.value || [])];
        const all_in_cat = cat.items.map((i) => i.id);
        const all_enabled = all_in_cat.every((id) => enabled.includes(id));
        if (all_enabled) {
            this.venue_form.controls.setup_enabled_items.setValue(enabled.filter((id) => !all_in_cat.includes(id)));
        } else {
            this.venue_form.controls.setup_enabled_items.setValue([...new Set([...enabled, ...all_in_cat])]);
        }
    }

    public isAllSetupEnabled(): boolean {
        const cat = this.catering_menu_categories().find((c) => c.id === 'setup');
        if (!cat) return false;
        const enabled = this.venue_form.controls.setup_enabled_items.value || [];
        return cat.items.every((i) => enabled.includes(i.id));
    }

    public isMenuItemEnabled(item_id: string): boolean {
        const enabled = this.venue_form.controls.menu_enabled_items.value || [];
        return enabled.includes(item_id);
    }

    public toggleMenuItem(item_id: string): void {
        const enabled = [...(this.venue_form.controls.menu_enabled_items.value || [])];
        const idx = enabled.indexOf(item_id);
        if (idx >= 0) {
            enabled.splice(idx, 1);
        } else {
            enabled.push(item_id);
        }
        this.venue_form.controls.menu_enabled_items.setValue(enabled);
    }

    public toggleCategory(category_id: string): void {
        const cat = this.catering_menu_categories().find((c) => c.id === category_id);
        if (!cat) return;
        const enabled = [...(this.venue_form.controls.menu_enabled_items.value || [])];
        const all_in_cat = cat.items.map((i) => i.id);
        const all_enabled = all_in_cat.every((id) => enabled.includes(id));
        if (all_enabled) {
            // Deselect all in category
            this.venue_form.controls.menu_enabled_items.setValue(
                enabled.filter((id) => !all_in_cat.includes(id)),
            );
        } else {
            // Select all in category
            const new_enabled = [...new Set([...enabled, ...all_in_cat])];
            this.venue_form.controls.menu_enabled_items.setValue(new_enabled);
        }
    }

    public isCategoryFullyEnabled(category_id: string): boolean {
        const cat = this.catering_menu_categories().find((c) => c.id === category_id);
        if (!cat) return false;
        const enabled = this.venue_form.controls.menu_enabled_items.value || [];
        return cat.items.every((i) => enabled.includes(i.id));
    }

    public getEnabledCount(category_id: string): number {
        const cat = this.catering_menu_categories().find((c) => c.id === category_id);
        if (!cat) return 0;
        const enabled = this.venue_form.controls.menu_enabled_items.value || [];
        return cat.items.filter((i) => enabled.includes(i.id)).length;
    }

    public getMenuItemPrice(item_id: string): number {
        const overrides = this.venue_form.controls.menu_price_overrides.value || {};
        if (overrides[item_id] !== undefined) return overrides[item_id];
        const item = this.catering_menu_items().find((i) => i.id === item_id);
        // unit_price is in cents, convert to dollars for display
        return item ? item.unit_price / 100 : 0;
    }

    public setMenuItemPrice(item_id: string, value: string): void {
        const price = parseFloat(value) || 0;
        const overrides = { ...(this.venue_form.controls.menu_price_overrides.value || {}) };
        overrides[item_id] = price;
        this.venue_form.controls.menu_price_overrides.setValue(overrides);
    }

    public getUnitLabel(unit: string): string {
        return UNIT_LABELS[unit] || unit;
    }

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
        // Subscribe to live catering menu from CateringStateService
        this.subscription(
            'catering-menu',
            this._catering.menu.subscribe((items) => {
                this.catering_menu_items.set(items);
            }),
        );
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
        // Auto-detect catering tier from building if not already set
        const saved_tier = this.venue_form.controls.catering_tier.value;
        if (!saved_tier || saved_tier === 'full_service') {
            const building_id = this._org.building?.id || '';
            const room_zones = (this._data.room as any)?.zones || [];
            const detected_bld = room_zones.find((z: string) => z.startsWith('bld-')) || building_id;
            const tier = BUILDING_CATERING_TIER[detected_bld] || 'coordination';
            this.venue_form.controls.catering_tier.setValue(tier);
            this.active_tier.set(tier);
        } else {
            this.active_tier.set(saved_tier);
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
