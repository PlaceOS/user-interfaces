import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import { IconComponent } from '@placeos/components';

import {
    ApprovalCategory,
    CATEGORY_DISPLAY_NAMES,
    CATEGORY_ICONS,
    MOCK_APPROVAL_EVENTS,
    MockApprovalEvent,
} from './event-approvals-mock.data';
import { EventApprovalStateService } from './event-approval-state.service';

interface VenueOption {
    id: string;
    name: string;
    icon: string;
    description: string;
}

const VENUE_OPTIONS: VenueOption[] = [
    {
        id: 'indoor',
        name: 'Indoor Venue',
        icon: 'meeting_room',
        description: 'Conference rooms, auditoriums, and indoor spaces',
    },
    {
        id: 'outdoor',
        name: 'Outdoor Venue',
        icon: 'park',
        description: 'Campus grounds, courtyards, and outdoor areas',
    },
];

const SERVICE_OPTIONS: { key: ApprovalCategory; label: string; icon: string }[] = [
    { key: 'venue', label: CATEGORY_DISPLAY_NAMES['venue'], icon: CATEGORY_ICONS['venue'] },
    { key: 'dining', label: CATEGORY_DISPLAY_NAMES['dining'], icon: CATEGORY_ICONS['dining'] },
    { key: 'av_tech', label: CATEGORY_DISPLAY_NAMES['av_tech'], icon: CATEGORY_ICONS['av_tech'] },
    { key: 'safety', label: CATEGORY_DISPLAY_NAMES['safety'], icon: CATEGORY_ICONS['safety'] },
    { key: 'events', label: CATEGORY_DISPLAY_NAMES['events'], icon: CATEGORY_ICONS['events'] },
];

@Component({
    selector: 'app-event-request-wizard',
    template: `
        <div class="bg-base-100 absolute inset-0 overflow-auto">
            <!-- Header -->
            <header
                class="bg-base-200 sticky top-0 z-10 mx-auto my-2 flex w-full max-w-[720px] items-center justify-between rounded-sm px-4 py-2"
            >
                <h2 class="text-xl font-medium">Request Event</h2>
                <a
                    icon
                    matRipple
                    [routerLink]="['/entertainment', 'events']"
                >
                    <icon>close</icon>
                </a>
            </header>

            <!-- Step Indicator -->
            <div
                class="mx-auto my-4 flex w-full max-w-[720px] items-center justify-center px-4"
            >
                @for (step of steps; track step.number; let i = $index) {
                    @if (i > 0) {
                        <div
                            class="mx-1 h-0.5 w-12"
                            [class.bg-primary]="
                                completed_steps().includes(i)
                            "
                            [class.bg-base-300]="
                                !completed_steps().includes(i)
                            "
                        ></div>
                    }
                    <button
                        matRipple
                        class="flex flex-col items-center"
                        (click)="goToStep(step.number)"
                        [disabled]="
                            step.number > current_step() &&
                            !completed_steps().includes(step.number - 1)
                        "
                    >
                        <div
                            class="flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors"
                            [class.bg-primary]="
                                current_step() === step.number
                            "
                            [class.text-primary-content]="
                                current_step() === step.number
                            "
                            [class.bg-success]="
                                completed_steps().includes(step.number) &&
                                current_step() !== step.number
                            "
                            [class.text-white]="
                                completed_steps().includes(step.number) &&
                                current_step() !== step.number
                            "
                            [class.bg-base-300]="
                                !completed_steps().includes(step.number) &&
                                current_step() !== step.number
                            "
                        >
                            @if (
                                completed_steps().includes(step.number) &&
                                current_step() !== step.number
                            ) {
                                <icon class="text-lg">done</icon>
                            } @else {
                                {{ step.number }}
                            }
                        </div>
                        <span
                            class="mt-1 text-xs"
                            [class.font-medium]="
                                current_step() === step.number
                            "
                            [class.opacity-60]="
                                current_step() !== step.number
                            "
                        >
                            {{ step.label }}
                        </span>
                    </button>
                }
            </div>

            <!-- Step Content -->
            <div
                class="mx-auto flex w-full max-w-[720px] flex-col px-4 pb-24"
            >
                <!-- Step 1: Event Details -->
                @if (current_step() === 1) {
                    <section class="flex flex-col space-y-4">
                        <h3 class="text-lg font-medium">Event Details</h3>

                        <label class="text-sm font-medium"
                            >Event Title <span class="text-error">*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formControl]="form.controls.title"
                                placeholder="e.g. Annual Awards Night"
                            />
                            @if (form.controls.title.touched && form.controls.title.hasError('required')) {
                                <mat-error>Title is required</mat-error>
                            }
                        </mat-form-field>

                        <div class="flex flex-wrap gap-4">
                            <div class="min-w-[200px] flex-1">
                                <label class="text-sm font-medium"
                                    >Date <span class="text-error">*</span></label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        type="date"
                                        [formControl]="form.controls.date"
                                    />
                                </mat-form-field>
                            </div>
                            <div class="min-w-[140px] flex-1">
                                <label class="text-sm font-medium"
                                    >Start Time
                                    <span class="text-error">*</span></label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        type="time"
                                        [formControl]="form.controls.start_time"
                                    />
                                </mat-form-field>
                            </div>
                            <div class="min-w-[140px] flex-1">
                                <label class="text-sm font-medium"
                                    >Duration (minutes)
                                    <span class="text-error">*</span></label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        [formControl]="
                                            form.controls.duration_minutes
                                        "
                                    >
                                        @for (
                                            d of duration_options;
                                            track d.value
                                        ) {
                                            <mat-option [value]="d.value">
                                                {{ d.label }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        </div>

                        <label class="text-sm font-medium">Venue Type</label>
                        <div class="flex gap-4">
                            @for (venue of venue_options; track venue.id) {
                                <button
                                    matRipple
                                    class="flex flex-1 flex-col items-center rounded-lg border-2 p-4 transition-colors"
                                    [class.border-primary]="
                                        form.controls.venue_type.value ===
                                        venue.id
                                    "
                                    [class.bg-base-200]="
                                        form.controls.venue_type.value ===
                                        venue.id
                                    "
                                    [class.border-base-300]="
                                        form.controls.venue_type.value !==
                                        venue.id
                                    "
                                    (click)="
                                        form.controls.venue_type.setValue(
                                            venue.id
                                        )
                                    "
                                >
                                    <icon class="mb-2 text-3xl">{{
                                        venue.icon
                                    }}</icon>
                                    <div class="text-sm font-medium">
                                        {{ venue.name }}
                                    </div>
                                    <div
                                        class="mt-1 text-center text-xs opacity-60"
                                    >
                                        {{ venue.description }}
                                    </div>
                                </button>
                            }
                        </div>

                        <label class="text-sm font-medium"
                            >Location
                            <span class="text-error">*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formControl]="form.controls.location"
                                placeholder="e.g. Main Auditorium"
                            />
                            @if (form.controls.location.touched && form.controls.location.hasError('required')) {
                                <mat-error>Location is required</mat-error>
                            }
                        </mat-form-field>

                        <label class="text-sm font-medium">Description</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <textarea
                                matInput
                                [formControl]="form.controls.description"
                                rows="3"
                                placeholder="Describe your event..."
                            ></textarea>
                        </mat-form-field>
                    </section>
                }

                <!-- Step 2: Organizer Info -->
                @if (current_step() === 2) {
                    <section class="flex flex-col space-y-4">
                        <h3 class="text-lg font-medium">
                            Organizer Information
                        </h3>

                        <label class="text-sm font-medium"
                            >Full Name
                            <span class="text-error">*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formControl]="
                                    form.controls.organiser_name
                                "
                                placeholder="e.g. Sarah Chen"
                            />
                            @if (form.controls.organiser_name.touched && form.controls.organiser_name.hasError('required')) {
                                <mat-error>Name is required</mat-error>
                            }
                        </mat-form-field>

                        <label class="text-sm font-medium"
                            >Email
                            <span class="text-error">*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                type="email"
                                [formControl]="
                                    form.controls.organiser_email
                                "
                                placeholder="e.g. sarah.chen@ucla.edu"
                            />
                            @if (form.controls.organiser_email.touched && form.controls.organiser_email.hasError('required')) {
                                <mat-error>Email is required</mat-error>
                            }
                            @if (form.controls.organiser_email.touched && form.controls.organiser_email.hasError('email')) {
                                <mat-error>Invalid email address</mat-error>
                            }
                        </mat-form-field>

                        <label class="text-sm font-medium"
                            >Phone
                            <span class="text-error">*</span></label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                type="tel"
                                [formControl]="
                                    form.controls.organiser_phone
                                "
                                placeholder="e.g. +61 400 000 000"
                            />
                            @if (form.controls.organiser_phone.touched && form.controls.organiser_phone.hasError('required')) {
                                <mat-error>Phone is required</mat-error>
                            }
                        </mat-form-field>
                    </section>
                }

                <!-- Step 3: Requirements -->
                @if (current_step() === 3) {
                    <section class="flex flex-col space-y-4">
                        <h3 class="text-lg font-medium">Requirements</h3>

                        <label class="text-sm font-medium"
                            >Services Required</label
                        >
                        <div
                            class="flex flex-col space-y-2 rounded-lg border border-base-300 p-4"
                        >
                            @for (
                                svc of service_options;
                                track svc.key
                            ) {
                                <mat-checkbox
                                    [checked]="
                                        isServiceSelected(svc.key)
                                    "
                                    (change)="
                                        toggleService(
                                            svc.key,
                                            $event.checked
                                        )
                                    "
                                >
                                    <div
                                        class="flex items-center space-x-2"
                                    >
                                        <icon class="text-lg">{{
                                            svc.icon
                                        }}</icon>
                                        <span>{{ svc.label }}</span>
                                    </div>
                                </mat-checkbox>
                            }
                        </div>

                        <label class="text-sm font-medium"
                            >Expected Attendance</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                type="number"
                                [formControl]="
                                    form.controls.expected_attendance
                                "
                                placeholder="e.g. 150"
                            />
                        </mat-form-field>

                        <div class="flex gap-4">
                            <mat-checkbox
                                [formControl]="
                                    form.controls.is_outdoor
                                "
                            >
                                Outdoor Event
                            </mat-checkbox>
                            <mat-checkbox
                                [formControl]="
                                    form.controls.is_major_event
                                "
                            >
                                Major Event
                            </mat-checkbox>
                        </div>

                        <label class="text-sm font-medium"
                            >Special Requirements</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <textarea
                                matInput
                                [formControl]="
                                    form.controls.special_requirements
                                "
                                rows="3"
                                placeholder="Any special requirements or notes..."
                            ></textarea>
                        </mat-form-field>

                        <!-- Approval Preview -->
                        @if (selectedServices().length > 0) {
                            <div
                                class="rounded-lg border border-base-300 bg-base-200 p-4"
                            >
                                <div
                                    class="mb-2 text-sm font-medium opacity-70"
                                >
                                    Approval Preview
                                </div>
                                <div class="space-y-1">
                                    @for (
                                        svc of selectedServices();
                                        track svc
                                    ) {
                                        <div
                                            class="flex items-center space-x-2 text-sm"
                                        >
                                            <icon
                                                class="text-warning text-base"
                                                >schedule</icon
                                            >
                                            <span>{{
                                                getCategoryName(svc)
                                            }}</span>
                                            <span
                                                class="text-xs opacity-50"
                                                >&mdash; Pending
                                                approval</span
                                            >
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                    </section>
                }

                <!-- Step 4: Documents -->
                @if (current_step() === 4) {
                    <section class="flex flex-col space-y-4">
                        <h3 class="text-lg font-medium">Documents</h3>

                        <div
                            class="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-base-300 p-8 transition-colors hover:border-primary"
                        >
                            <icon class="mb-2 text-4xl opacity-40"
                                >cloud_upload</icon
                            >
                            <div class="text-sm font-medium">
                                Drag & drop files here
                            </div>
                            <div class="mt-1 text-xs opacity-50">
                                or click to browse (PDF, DOCX, images)
                            </div>
                            <button
                                btn
                                matRipple
                                class="inverse mt-4 text-sm"
                            >
                                Browse Files
                            </button>
                        </div>

                        <div class="text-xs italic opacity-40">
                            File upload is for display purposes only in
                            this demo.
                        </div>

                        <!-- Summary -->
                        <div
                            class="mt-4 rounded-lg border border-base-300 bg-base-200 p-4"
                        >
                            <div class="mb-3 text-sm font-medium">
                                Request Summary
                            </div>
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between">
                                    <span class="opacity-60">Title</span>
                                    <span class="font-medium">{{
                                        form.controls.title.value
                                    }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="opacity-60">Date</span>
                                    <span>{{
                                        form.controls.date.value
                                    }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="opacity-60"
                                        >Duration</span
                                    >
                                    <span
                                        >{{
                                            form.controls
                                                .duration_minutes.value
                                        }}
                                        min</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="opacity-60"
                                        >Location</span
                                    >
                                    <span>{{
                                        form.controls.location.value
                                    }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="opacity-60"
                                        >Organizer</span
                                    >
                                    <span>{{
                                        form.controls.organiser_name
                                            .value
                                    }}</span>
                                </div>
                                @if (selectedServices().length) {
                                    <div class="flex justify-between">
                                        <span class="opacity-60"
                                            >Services</span
                                        >
                                        <span>{{
                                            selectedServiceNames()
                                        }}</span>
                                    </div>
                                }
                            </div>
                        </div>
                    </section>
                }
            </div>

            <!-- Sticky Footer -->
            <footer
                class="bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[720px] -translate-x-1/2 items-center justify-between rounded-sm px-4 py-2"
            >
                <div>
                    @if (current_step() > 1) {
                        <button
                            btn
                            matRipple
                            class="inverse"
                            (click)="previousStep()"
                        >
                            <icon class="text-xl">chevron_left</icon>
                            <span class="ml-1">Previous</span>
                        </button>
                    }
                </div>
                <div>
                    @if (current_step() < 4) {
                        <button
                            btn
                            matRipple
                            [disabled]="!isCurrentStepValid()"
                            (click)="nextStep()"
                        >
                            <span class="mr-1">Next</span>
                            <icon class="text-xl">chevron_right</icon>
                        </button>
                    } @else {
                        <button
                            btn
                            matRipple
                            [disabled]="submitting()"
                            (click)="submitRequest()"
                        >
                            @if (submitting()) {
                                <span>Submitting...</span>
                            } @else {
                                <icon class="mr-1 text-xl">send</icon>
                                <span>Submit Event Request</span>
                            }
                        </button>
                    }
                </div>
            </footer>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatRippleModule,
        RouterModule,
        IconComponent,
    ],
})
export class EventRequestWizardComponent {
    private _router = inject(Router);
    private _approval_state = inject(EventApprovalStateService);

    readonly current_step = signal(1);
    readonly completed_steps = signal<number[]>([]);
    readonly submitting = signal(false);

    readonly steps = [
        { number: 1, label: 'Details' },
        { number: 2, label: 'Organizer' },
        { number: 3, label: 'Requirements' },
        { number: 4, label: 'Documents' },
    ];

    readonly venue_options = VENUE_OPTIONS;
    readonly service_options = SERVICE_OPTIONS;

    readonly duration_options = [
        { value: 30, label: '30 min' },
        { value: 60, label: '1 hour' },
        { value: 90, label: '1.5 hours' },
        { value: 120, label: '2 hours' },
        { value: 180, label: '3 hours' },
        { value: 240, label: '4 hours' },
        { value: 360, label: '6 hours' },
        { value: 480, label: '8 hours' },
        { value: 720, label: '12 hours' },
    ];

    readonly form = new FormGroup({
        // Step 1
        title: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required),
        start_time: new FormControl('09:00', Validators.required),
        duration_minutes: new FormControl(120, Validators.required),
        venue_type: new FormControl('indoor'),
        location: new FormControl('', Validators.required),
        description: new FormControl(''),
        // Step 2
        organiser_name: new FormControl('', Validators.required),
        organiser_email: new FormControl('', [
            Validators.required,
            Validators.email,
        ]),
        organiser_phone: new FormControl('', Validators.required),
        // Step 3
        services: new FormControl<ApprovalCategory[]>(['venue']),
        expected_attendance: new FormControl<number | null>(null),
        is_outdoor: new FormControl(false),
        is_major_event: new FormControl(false),
        special_requirements: new FormControl(''),
    });


    isServiceSelected(key: ApprovalCategory): boolean {
        return (this.form.controls.services.value || []).includes(key);
    }

    toggleService(key: ApprovalCategory, checked: boolean): void {
        const current = this.form.controls.services.value || [];
        if (checked) {
            this.form.controls.services.setValue([...current, key]);
        } else {
            this.form.controls.services.setValue(
                current.filter((s) => s !== key),
            );
        }
    }

    selectedServices(): ApprovalCategory[] {
        return this.form.controls.services.value || [];
    }

    selectedServiceNames(): string {
        return this.selectedServices()
            .map((s) => CATEGORY_DISPLAY_NAMES[s])
            .join(', ');
    }

    getCategoryName(cat: ApprovalCategory): string {
        return CATEGORY_DISPLAY_NAMES[cat];
    }

    isCurrentStepValid(): boolean {
        switch (this.current_step()) {
            case 1:
                return (
                    this.form.controls.title.valid &&
                    this.form.controls.date.valid &&
                    this.form.controls.start_time.valid &&
                    this.form.controls.duration_minutes.valid &&
                    this.form.controls.location.valid
                );
            case 2:
                return (
                    this.form.controls.organiser_name.valid &&
                    this.form.controls.organiser_email.valid &&
                    this.form.controls.organiser_phone.valid
                );
            case 3:
                return true;
            case 4:
                return true;
            default:
                return false;
        }
    }

    goToStep(step: number): void {
        if (
            step <= this.current_step() ||
            this.completed_steps().includes(step - 1)
        ) {
            this.current_step.set(step);
        }
    }

    nextStep(): void {
        if (!this.isCurrentStepValid()) return;
        this._markCurrentStepFields();
        const current = this.current_step();
        this.completed_steps.update((steps) =>
            steps.includes(current) ? steps : [...steps, current],
        );
        this.current_step.set(current + 1);
    }

    previousStep(): void {
        if (this.current_step() > 1) {
            this.current_step.update((s) => s - 1);
        }
    }

    submitRequest(): void {
        if (this.submitting()) return;
        this.submitting.set(true);

        const val = this.form.getRawValue();

        // Parse date and time
        const [year, month, day] = val.date.split('-').map(Number);
        const [hours, minutes] = val.start_time.split(':').map(Number);
        const event_date = new Date(year, month - 1, day, hours, minutes).valueOf();

        // Generate unique ID prefix
        const id_base = `appr-${Date.now().toString(36)}`;

        // Always create parent venue event
        const parent_event: MockApprovalEvent = {
            id: `${id_base}-venue`,
            title: val.title,
            category: 'venue',
            date: event_date,
            duration_minutes: val.duration_minutes,
            location: val.location,
            organiser: val.organiser_name,
        };
        MOCK_APPROVAL_EVENTS.push(parent_event);

        // Create child events for each selected non-venue service
        const services = val.services || [];
        for (const svc of services) {
            if (svc === 'venue') continue;
            const child_event: MockApprovalEvent = {
                id: `${id_base}-${svc}`,
                title: `${val.title} — ${CATEGORY_DISPLAY_NAMES[svc]}`,
                category: svc,
                date: event_date,
                duration_minutes: val.duration_minutes,
                location: val.location,
                organiser: val.organiser_name,
                parent_event: parent_event.id,
            };
            MOCK_APPROVAL_EVENTS.push(child_event);
        }

        // Refresh approval state so the new events appear in the list
        this._approval_state.refresh();

        // Navigate back to events list
        setTimeout(() => {
            this.submitting.set(false);
            this._router.navigate(['/entertainment', 'events']);
        }, 600);
    }

    private _markCurrentStepFields(): void {
        switch (this.current_step()) {
            case 1:
                this.form.controls.title.markAsTouched();
                this.form.controls.date.markAsTouched();
                this.form.controls.start_time.markAsTouched();
                this.form.controls.duration_minutes.markAsTouched();
                this.form.controls.location.markAsTouched();
                break;
            case 2:
                this.form.controls.organiser_name.markAsTouched();
                this.form.controls.organiser_email.markAsTouched();
                this.form.controls.organiser_phone.markAsTouched();
                break;
        }
    }
}
