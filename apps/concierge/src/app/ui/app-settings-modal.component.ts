import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SettingsService, notifyError, notifySuccess } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { PlaceZone, showMetadata, updateMetadata } from '@placeos/ts-client';

@Component({
    selector: 'app-settings-modal',
    template: `
        <div class="w-screen h-screen bg-base-100 flex flex-col">
            <header
                class="sticky top-0 py-2 px-0 mx-auto max-w-[640px] w-full border-none z-10"
            >
                <h2 class="text-2xl font-medium">
                    App Configuration - {{ zone.display_name }}
                </h2>
            </header>
            <main
                class="flex-1 h-1/2 p-2 space-y-2 z-0 overflow-auto"
                *ngIf="!loading; else load_state"
                [formGroup]="form"
            >
                <div class=" mx-auto max-w-[640px] w-full">
                    <h3 class="font-medium text-lg">General Features</h3>
                    <div class="flex flex-wrap items-center -mx-2 py-2">
                        <button
                            matRipple
                            class="flex items-center space-x-2 m-2 p-2 border border-base-200 w-[calc(50%-1rem)]"
                            (click)="
                                active_features['use_24_hour_time'] =
                                    !active_features['use_24_hour_time']
                            "
                        >
                            <div class="ml-2 flex-1 text-left">
                                {{ feature_descriptions['use_24_hour_time'] }}
                            </div>
                            <mat-checkbox
                                [ngModel]="active_features['use_24_hour_time']"
                                [ngModelOptions]="{ standalone: true }"
                                class="pointer-events-none"
                            ></mat-checkbox>
                        </button>
                    </div>
                    <h3 class="font-medium text-lg">Features</h3>
                    <div class="flex flex-wrap items-center -mx-2 py-2">
                        <button
                            *ngFor="let feature of available_features"
                            matRipple
                            class="flex items-center space-x-2 m-2 p-2 border border-base-200 w-[calc(50%-1rem)]"
                            (click)="
                                active_features[feature] =
                                    !active_features[feature]
                            "
                        >
                            <div class="ml-2 flex-1 text-left">
                                {{ feature_descriptions[feature] }}
                            </div>
                            <mat-checkbox
                                [ngModel]="active_features[feature]"
                                [ngModelOptions]="{ standalone: true }"
                                class="pointer-events-none"
                            ></mat-checkbox>
                        </button>
                    </div>
                    <h3 class="font-medium text-lg">Landing</h3>
                    <div class="flex flex-wrap items-center -mx-2 py-2">
                        <button
                            *ngFor="let feature of landing_features"
                            matRipple
                            class="flex items-center space-x-2 m-2 p-2 border border-base-200 w-[calc(50%-1rem)]"
                            (click)="
                                active_features[feature] =
                                    !active_features[feature]
                            "
                        >
                            <div class="ml-2 flex-1 text-left">
                                {{ feature_descriptions[feature] }}
                            </div>
                            <mat-checkbox
                                [ngModel]="active_features[feature]"
                                [ngModelOptions]="{ standalone: true }"
                                class="pointer-events-none"
                            ></mat-checkbox>
                        </button>
                    </div>
                    <ng-container
                        *ngIf="active_features['spaces']"
                        formGroupName="events"
                    >
                        <h3 class="font-medium text-lg">Room Bookings</h3>
                        <div class="flex flex-wrap items-center -mx-2 py-2">
                            <button
                                *ngFor="let feature of room_features"
                                matRipple
                                class="flex items-center space-x-2 m-2 p-2 border border-base-200 w-[calc(50%-1rem)]"
                                (click)="
                                    form
                                        .get('events')
                                        .get(feature)
                                        .setValue(
                                            !form.get('events').get(feature)
                                                .value
                                        )
                                "
                            >
                                <div class="ml-2 flex-1 text-left">
                                    {{ feature_descriptions[feature] }}
                                </div>
                                <mat-checkbox
                                    [formControlName]="feature"
                                    class="pointer-events-none"
                                ></mat-checkbox>
                            </button>
                        </div>
                    </ng-container>
                    <div *ngIf="active_features['desks']" formGroupName="desks">
                        <h3 class="font-medium text-lg">Desk Bookings</h3>
                        <div class="flex flex-wrap items-center -mx-2 py-2">
                            <button
                                *ngFor="let feature of desk_features"
                                matRipple
                                class="flex items-center space-x-2 m-2 p-2 border border-base-200 w-[calc(50%-1rem)]"
                                (click)="
                                    form
                                        .get('desks')
                                        .get(feature)
                                        .setValue(
                                            !form.get('desks').get(feature)
                                                .value
                                        )
                                "
                            >
                                <div class="ml-2 flex-1 text-left">
                                    {{ feature_descriptions[feature] }}
                                </div>
                                <mat-checkbox
                                    [formControlName]="feature"
                                    class="pointer-events-none"
                                ></mat-checkbox>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <footer
                class="sticky bottom-0 flex items-center justify-end space-x-2 p-2 mx-auto max-w-[640px] w-full bg-base-100 z-10"
                *ngIf="!loading"
            >
                <button btn matRipple class="inverse w-32" mat-dialog-close>
                    Discard
                </button>
                <button btn matRipple class="w-32" (click)="save()">
                    Save
                </button>
            </footer>
            <button
                icon
                matRipple
                mat-dialog-close
                *ngIf="!loading"
                class="absolute top-2 right-2"
            >
                <app-icon>close</app-icon>
            </button>
        </div>
        <ng-template #load_state>
            <main
                class="flex-1 h-1/2 p-2 space-y-2 z-0 overflow-auto flex flex-col items-center justify-center"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class AppSettingsModalComponent {
    public readonly zone = this._data.zone;
    public readonly workplace_key =
        this._settings.get('app.workplace_metadata_key') || 'workplace_app';
    public readonly available_features = [
        'spaces',
        'desks',
        'explore',
        'parking',
        'help',
        'schedule',
        'wfh',
    ];
    public readonly landing_features = [
        'show_quick_links',
        'hide_availability',
        'hide_colleagues',
        'hide_landing_sidebar',
        'hide_rooms',
        'hide_spaces',
    ];
    public readonly room_features = [
        'allow_all_day',
        'booking_unavailable',
        'can_book_for_others',
        'has_assets',
        'has_catering',
        'allow_externals',
        'hide_notes',
        'allow_recurrence',
    ];
    public readonly desk_features = ['allow_all_day'];
    public loading = '';
    public combined_settings: Record<string, any> = {};
    public active_features: Record<string, boolean> = {};

    public readonly feature_descriptions = {
        use_24_hour_time: 'Use 24 Hour Time',
        spaces: 'Book Rooms',
        desks: 'Book Desks',
        explore: 'Explore Maps',
        parking: 'Book Parking',
        help: 'Help Desk',
        schedule: 'Your Bookings',
        wfh: 'Work from Home',

        //Landing Features
        show_quick_links: 'Show Quick Links',
        hide_availability: 'Hide Availability Section',
        hide_colleagues: 'Hide Colleagues Listing',
        hide_landing_sidebar: 'Hide Sidebar',
        hide_rooms: 'Hide Rooms Section',
        hide_spaces: 'Hide Spaces Section',

        // Room Features
        allow_all_day: 'All Day Bookings',
        booking_unavailable: 'No event calendar',
        can_book_for_others: 'Can book for others',
        has_assets: 'Asset Booking',
        has_catering: 'Event Catering',
        allow_externals: 'Allow external attendees',
        hide_notes: 'Hide notes field',
        allow_recurrence: 'Allow recurring bookings',
    };

    public readonly form = new FormGroup({
        use_24_hour_time: new FormControl(false),
        features: new FormControl([]),
        general: new FormGroup({
            show_quick_links: new FormControl(false),
            hide_availability: new FormControl(false),
            hide_colleagues: new FormControl(false),
            hide_landing_sidebar: new FormControl(false),
            hide_rooms: new FormControl(false),
            hide_spaces: new FormControl(false),
        }),
        events: new FormGroup({
            allow_all_day: new FormControl(false),
            booking_unavailable: new FormControl(false),
            can_book_for_others: new FormControl(false),
            has_assets: new FormControl(false),
            has_catering: new FormControl(false),
            allow_externals: new FormControl(false),
            hide_notes: new FormControl(false),
            allow_recurrence: new FormControl(false),
        }),
        desks: new FormGroup({
            allow_all_day: new FormControl(false),
            has_assets: new FormControl(false),
        }),
        bookings: new FormGroup({
            allow_all_day: new FormControl(false),
        }),
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { zone: PlaceZone },
        private _dialog_ref: MatDialogRef<AppSettingsModalComponent>,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {}

    public async ngOnInit() {
        this.loading = 'Loading settings...';
        this._dialog_ref.disableClose = true;
        const zone_settings: any = (
            await showMetadata(this.zone.id, `${this.workplace_key}`)
                .toPromise()
                .catch(() => ({ details: {} }))
        ).details;
        const parent_settings: any = (
            await showMetadata(this.zone.parent_id, `${this.workplace_key}`)
                .toPromise()
                .catch(() => ({ details: {} }))
        ).details;
        const org_settings: any = (
            await showMetadata(
                this._org.organisation.id,
                `${this.workplace_key}`
            )
                .toPromise()
                .catch(() => ({ details: {} }))
        ).details;
        const combined_settings = {
            ...org_settings,
            ...parent_settings,
            ...zone_settings,
            general: {
                ...org_settings.general,
                ...parent_settings.general,
                ...zone_settings.general,
            },
            events: {
                ...org_settings.events,
                ...parent_settings.events,
                ...zone_settings.events,
            },
            desks: {
                ...org_settings.desks,
                ...parent_settings.desks,
                ...zone_settings.desks,
            },
            bookings: {
                ...org_settings.bookings,
                ...parent_settings.bookings,
                ...zone_settings.bookings,
            },
        };
        this.form.patchValue(combined_settings);
        for (const key in combined_settings) {
            if (typeof combined_settings[key] === 'object') {
                for (const sub_key in combined_settings[key]) {
                    if (typeof combined_settings[key][sub_key] === 'boolean') {
                        this.active_features[sub_key] =
                            combined_settings[key][sub_key];
                    }
                }
            } else if (typeof combined_settings[key] === 'boolean') {
                this.active_features[key] = combined_settings[key];
            }
        }
        for (const feature of combined_settings.features || []) {
            this.active_features[feature] = true;
        }
        this.combined_settings = combined_settings;
        this.loading = '';
        this._dialog_ref.disableClose = false;
    }

    public async save() {
        this.updateFormValues();
        this.loading = 'Saving settings...';
        this._dialog_ref.disableClose = true;
        await updateMetadata(this.zone.id, {
            name: `${this.workplace_key}`,
            details: this.form.value,
            description: 'Workplace Application Settings',
        })
            .toPromise()
            .catch((e) => {
                console.error(e);
                this._dialog_ref.disableClose = false;
                this.loading = '';
                notifyError(
                    `Failed to save settings: ${e.message || e.error || e}`
                );
                throw e;
            });
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close();
        notifySuccess('Successfully saved settings');
    }

    public updateFormValues() {
        const form_values = this.form.value;
        for (const key in form_values) {
            if (typeof form_values[key] === 'object') {
                if (key === 'events' || key === 'desks' || key === 'bookings')
                    continue;
                for (const sub_key in form_values[key]) {
                    if (typeof form_values[key][sub_key] === 'boolean') {
                        form_values[key][sub_key] =
                            this.active_features[sub_key];
                    }
                }
            } else if (typeof form_values[key] === 'boolean') {
                form_values[key] = this.active_features[key];
            }
        }
        form_values.bookings = form_values.desks;
        form_values.features = Object.keys(this.active_features)
            .filter((key) => this.active_features[key])
            .filter((key) => this.available_features.includes(key));
        this.form.patchValue(form_values);
    }
}
