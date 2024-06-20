import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BookingFormService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { addDays, endOfDay, format } from 'date-fns';

@Component({
    selector: 'detailed-book-desks-form',
    template: `
        <form *ngIf="form" [formGroup]="form">
            <div
                class="w-[640px] max-w-[calc(100%-2rem)] mx-auto mb-4"
                *ngIf="allow_groups"
            >
                <mat-button-toggle-group
                    class="w-full"
                    [ngModel]="(options | async)?.group ? 'group' : 'single'"
                    (ngModelChange)="
                        setOptions({
                            group: $event === 'group'
                        })
                    "
                    [ngModelOptions]="{ standalone: true }"
                >
                    <mat-button-toggle class="w-1/2" value="single">
                        Single
                    </mat-button-toggle>
                    <mat-button-toggle class="w-1/2" value="group">
                        Group
                    </mat-button-toggle>
                </mat-button-toggle-group>
            </div>
            <div
                class="flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
            >
                <div class="flex flex-col flex-1 w-full sm:w-1/4">
                    <label>Date</label>
                    <a-date-field [to]="book_until" formControlName="date">
                        Date and time must be in the future
                    </a-date-field>
                </div>
                <div
                    class="flex flex-col flex-1 w-full sm:w-1/4"
                    *ngIf="(buildings | async)?.length > 1"
                >
                    <label>Building</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            placeholder="Select building"
                            [(ngModel)]="building"
                            (ngModelChange)="
                                setOptions({
                                    zone_id: $event?.id
                                })
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <mat-option
                                *ngFor="let bld of buildings | async"
                                [value]="bld"
                            >
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div
                    class="flex flex-col flex-1 w-full sm:w-1/4"
                    *ngIf="(levels | async)?.length > 1"
                >
                    <label>Level</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            placeholder="Any Level"
                            ngModel
                            [disabled]="!building"
                            (ngModelChange)="
                                setOptions({
                                    zone_id: $event || building.id
                                })
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <mat-option
                                *ngFor="let lvl of levels | async"
                                [value]="lvl.id"
                            >
                                {{ lvl.display_name || lvl.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <div
                class="flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
                *ngIf="allow_time_changes"
            >
                <div class="flex flex-col flex-1 w-full sm:w-1/3">
                    <label>Start Time</label>
                    <a-time-field
                        [ngModel]="form.value.date"
                        (ngModelChange)="form.patchValue({ date: $event })"
                        [ngModelOptions]="{ standalone: true }"
                    ></a-time-field>
                </div>
                <div class="flex flex-col flex-1 w-full sm:w-1/3 relative">
                    <label>End Time</label>
                    <a-duration-field
                        formControlName="duration"
                        [time]="form.get('date')?.value"
                        [max]="10 * 60"
                        [min]="60"
                        [step]="60"
                        [disabled]="form.value.all_day"
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
            <div
                class="flex flex-col w-[640px] max-w-[calc(100%-2rem)] mx-auto"
                *ngIf="can_book_for_others"
            >
                <label>Host</label>
                <a-user-search-field
                    formControlName="user"
                    class="mb-4"
                ></a-user-search-field>
            </div>
            <div
                class="flex flex-col flex-1 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
                *ngIf="needs_reason"
            >
                <label>Details</label>
                <mat-form-field class="w-full" appearance="outline">
                    <input
                        matInput
                        formControlName="description"
                        placeholder="Reason for booking..."
                    />
                </mat-form-field>
            </div>
            <div
                class="flex flex-col flex-1 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
                *ngIf="(options | async)?.group"
            >
                <label>Group Members</label>
                <a-user-list-field
                    [simple]="true"
                    [ngModel]="(options | async)?.members || []"
                    (ngModelChange)="setOptions({ members: $event })"
                    [ngModelOptions]="{ standalone: true }"
                ></a-user-list-field>
            </div>
            <div
                class="flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
                *ngIf="can_recurr"
            >
                <div class="flex flex-col flex-1 w-full sm:w-1/3">
                    <label>Recurrence Period</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [ngModel]="(options | async)?.recurrence_pattern"
                            (ngModelChange)="setOptions({ pattern: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            placeholder="None"
                        >
                            <mat-option value="none">None</mat-option>
                            <mat-option
                                *ngFor="let opt of recurrence_options"
                                [value]="opt"
                            >
                                <span class="capitalize">{{ opt }}</span>
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex flex-col flex-1 w-full sm:w-1/3">
                    <label>Recurrence End</label>
                    <a-date-field
                        [disabled]="
                            !(options | async)?.pattern ||
                            (options | async)?.pattern === 'none'
                        "
                        [ngModel]="
                            (options | async)?.recurr_end || form?.value?.date
                        "
                        (ngModelChange)="
                            setOptions({
                                recurr_end: $event
                            })
                        "
                        [ngModelOptions]="{ standalone: true }"
                        [to]="book_until"
                    >
                        Date and time must be in the future
                    </a-date-field>
                </div>
            </div>
            <div
                class="flex flex-col flex-1 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
                *ngIf="(features | async)?.length"
            >
                <label>Desk Features</label>
                <mat-form-field class="w-full" appearance="outline">
                    <mat-select
                        multiple
                        [ngModel]="(options | async)?.features || []"
                        (ngModelChange)="
                            setOptions({
                                features: $event || []
                            })
                        "
                        [ngModelOptions]="{ standalone: true }"
                        placeholder="Any Feature"
                    >
                        <mat-option
                            *ngFor="let opt of features | async"
                            class="capitalize"
                            [value]="opt"
                        >
                            {{ opt }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div
                class="flex flex-col flex-1 w-[640px] max-w-[calc(100%-2rem)] mx-auto mb-4"
                *ngIf="can_book_lockers"
            >
                <mat-checkbox
                    [ngModel]="!!form.value.secondary_resource"
                    (ngModelChange)="
                        form.patchValue({
                            secondary_resource: $event ? 'locker' : ''
                        })
                    "
                    [ngModelOptions]="{ standalone: true }"
                >
                    Require locker
                </mat-checkbox>
            </div>
        </form>
    `,
    styles: [``],
})
export class DeskFlowDetailedFormComponent {
    @Input() public form: FormGroup;
    /** List of available buildings to select */
    public readonly buildings = this._org.building_list;
    /** List of available levels for the selected building */
    public readonly levels = this._org.active_levels;
    /** List of set options for desk booking */
    public readonly options = this._state.options;
    /** List of set options for desk booking */
    public readonly features = this._state.features;

    public readonly recurrence_options = ['daily', 'weekly', 'monthly'];

    public get building() {
        return this._org.building;
    }
    public set building(bld) {
        this._org.building = bld;
    }

    public readonly setOptions = (o) => this._state.setOptions(o);

    public get can_book_lockers() {
        return this._settings.get('app.desks.can_book_lockers');
    }

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

    public get book_until() {
        return endOfDay(
            addDays(
                Date.now(),
                this._settings.get('app.desks.available_period') || 90
            )
        );
    }

    constructor(
        private _state: BookingFormService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {}
}
