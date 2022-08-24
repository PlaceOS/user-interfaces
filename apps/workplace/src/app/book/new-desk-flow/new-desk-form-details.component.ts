import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BookingFormService, FAV_DESK_KEY } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { Desk, OrganisationService } from '@placeos/organisation';
import { addDays, endOfDay } from 'date-fns';
import { NewDeskSelectModalComponent } from './new-desk-select-modal.component';

@Component({
    selector: 'new-desk-form-details',
    styles: [],
    template: `
        <div
            class="p-0 sm:py-4 sm:px-16 divide-y divide-gray-300 space-y-2"
            *ngIf="form"
            [formGroup]="form"
        >
            <section class="p-2">
                <h3 class="space-x-2 flex items-center mb-4">
                    <div
                        class="border border-black rounded-full h-6 w-6 flex items-center justify-center"
                    >
                        1
                    </div>
                    <div class="text-xl">Details</div>
                </h3>
                <div class="flex items-center flex-wrap sm:space-x-2">
                    <div class="flex-1 min-w-[256px]">
                        <label for="title">Add Title<span>*</span></label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="title"
                                formControlName="title"
                                placeholder="e.g. Focus Time"
                            />
                            <mat-error>Booking title is required.</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex-1 min-w-[256px]">
                        <label for="date">Date<span>*</span></label>
                        <a-date-field name="date" formControlName="date">
                            Date and time must be in the future
                        </a-date-field>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex-1 w-1/3">
                        <label for="start-time">Start Time<span>*</span></label>
                        <a-time-field
                            name="start-time"
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></a-time-field>
                    </div>
                    <div class="flex-1 w-1/3 relative">
                        <label for="end-time">End Time<span>*</span></label>
                        <a-duration-field
                            name="end-time"
                            formControlName="duration"
                            [time]="form.get('date')?.value"
                            [max]="12 * 60"
                            [min]="60"
                            [step]="60"
                        >
                        </a-duration-field>
                        <mat-checkbox
                            formControlName="all_day"
                            *ngIf="allow_all_day"
                            class="absolute top-0 right-0"
                        >
                            All Day
                        </mat-checkbox>
                    </div>
                </div>
            </section>

            <section class="p-2">
                <h3 class="space-x-2 flex items-center mb-4">
                    <div
                        class="border border-black rounded-full h-6 w-6 flex items-center justify-center"
                    >
                        2
                    </div>
                    <div class="text-xl">Desk</div>
                </h3>
                <div *ngIf="(features | async)?.length" class="flex flex-col">
                    <label for="title">Type</label>
                    <div features class="flex items-center flex-wrap space-x-2">
                        <mat-checkbox
                            *ngFor="let opt of features | async"
                            [ngModel]="
                                ((options | async)?.features || []).includes(
                                    opt
                                )
                            "
                            (ngModelChange)="setFeature(opt, $event)"
                            [ngModelOptions]="{ standalone: true }"
                        >
                            {{ opt }}
                        </mat-checkbox>
                    </div>
                </div>
                <div *ngIf="selectedDesk" selected-desk class="my-2 space-y-2">
                    <div
                        class="relative p-2 rounded-lg w-full flex items-center shadow border border-gray-200"
                    >
                        <div
                            class="w-24 h-24 rounded-xl bg-black/20 mr-4"
                        ></div>
                        <div class="space-y-2 pb-4">
                            <div class="font-medium">
                                {{
                                    selectedDesk.display_name ||
                                        selectedDesk.name ||
                                        selectedDesk.id
                                }}
                            </div>
                            <div class="flex items-center text-sm space-x-2">
                                <app-icon class="text-blue-500">place</app-icon>
                                <p class="text-xs">
                                    {{
                                        selectedDesk.zone?.display_name ||
                                            selectedDesk.zone?.name ||
                                            '&lt;No Level&gt;'
                                    }}
                                </p>
                            </div>
                            <div
                                class="absolute bottom-0 right-0 flex items-center justify-end text-xs"
                            >
                                <button
                                    mat-button
                                    edit-desk
                                    class="clear"
                                    (click)="selectDesk()"
                                >
                                    <div class="flex items-center space-x-2">
                                        <app-icon>edit</app-icon>
                                        Change
                                    </div>
                                </button>
                                <button
                                    mat-button
                                    remove-desk
                                    class="clear"
                                    (click)="clearSelectedDesk()"
                                >
                                    <div class="flex items-center space-x-2">
                                        <app-icon>close</app-icon>
                                        Remove
                                    </div>
                                </button>
                            </div>
                        </div>
                        <button
                            mat-icon-button
                            fav
                            class="absolute top-1 right-1"
                            [class.text-blue-400]="
                                favorites.includes(selectedDesk?.id)
                            "
                            (click)="toggleFavourite(selectedDesk)"
                        >
                            <app-icon>{{
                                favorites.includes(selectedDesk?.id)
                                    ? 'favorite'
                                    : 'favorite_border'
                            }}</app-icon>
                        </button>
                    </div>
                </div>
                <button
                    mat-button
                    add-space
                    class="w-full inverse mt-2"
                    (click)="selectDesk()"
                >
                    <div class="flex items-center justify-center space-x-2">
                        <app-icon>search</app-icon>
                        <span>Find Desk</span>
                    </div>
                </button>
            </section>
            <section class="p-2">
                <h3 class="space-x-2 flex items-center mb-4">
                    <div
                        class="border border-black rounded-full h-6 w-6 flex items-center justify-center"
                    >
                        3
                    </div>
                    <div class="text-xl">Request Asset</div>
                </h3>
                <asset-list-field formControlName="assets"></asset-list-field>
            </section>
        </div>
    `,
})
export class NewDeskFormDetailsComponent {
    @Input() public form: FormGroup;
    @Output() public find = new EventEmitter<void>();
    /** List of available buildings to select */
    public readonly buildings = this._org.building_list;
    /** List of available levels for the selected building */
    public readonly levels = this._org.active_levels;
    /** List of set options for desk booking */
    public readonly options = this._state.options;
    /** List of set options for desk booking */
    public readonly features = this._state.features;

    /** Selected desk for booking */
    public selectedDesk: Desk;

    public readonly recurrence_options = ['daily', 'weekly', 'monthly'];

    public get building() {
        return this._org.building;
    }
    public set building(bld) {
        this._org.building = bld;
    }

    public readonly setOptions = (o) => this._state.setOptions(o);

    public readonly setFeature = (f, e) => this._state.setFeature(f, e);

    public get can_book_for_others() {
        return this._settings.get('app.desks.can_book_for_others');
    }
    public get can_recurr() {
        return this._settings.get('app.desks.recurrence_allowed');
    }

    public get allow_groups() {
        return this._settings.get('app.desks.allow_groups');
    }

    public get needs_reason() {
        return this._settings.get('app.desks.needs_reason') === true;
    }

    public get allow_time_changes() {
        return !!this._settings.get('app.desks.allow_time_changes');
    }

    public get allow_all_day() {
        return (
            this.allow_time_changes &&
            !!this._settings.get('app.desks.allow_all_day')
        );
    }

    public get favorites() {
        return this._settings.get<string[]>(FAV_DESK_KEY) || [];
    }

    constructor(
        private _state: BookingFormService,
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _dialog: MatDialog
    ) {}

    /** Open desk selector */
    public selectDesk() {
        const ref = this._dialog.open(NewDeskSelectModalComponent);
        ref.afterClosed().subscribe((desk?: Desk) => {
            if (!desk) return;
            this.setBookingAsset(desk);
        });
    }

    public clearSelectedDesk(){
        this.selectedDesk = null;
        this._state.form.patchValue({
            asset_id: '',
            asset_name: '',
            map_id: '',
            description: '',
            zones: [],
            booking_asset: null,
        });
    }

    public toggleFavourite(desk: Desk) {
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(desk.id);
        if (new_state) {
            this._settings.saveUserSetting(FAV_DESK_KEY, [
                ...fav_list,
                desk.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                FAV_DESK_KEY,
                fav_list.filter((_) => _ !== desk.id)
            );
        }
    }

    private setBookingAsset(desk: Desk) {
        if (!desk) return;
        this.selectedDesk = desk;
        this._state.form.patchValue({
            asset_id: desk?.id,
            asset_name: desk.name,
            map_id: desk?.map_id || desk?.id,
            description: desk.name,
            booking_type: 'desk',
            zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : [],
            booking_asset: desk,
        });
    }
}
