import { Component, OnInit } from '@angular/core';
import { currentUser, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { first } from 'rxjs/operators';
import { DeskFlowStateService } from './desk-flow-state.service';

@Component({
    selector: 'desk-flow-form',
    template: `
        <div class="w-full bg-gray-800 text-white p-4">
            <div options class="m-auto">
                <h2 class="text-xl font-medium mb-4 text-center">
                    Request a desk
                </h2>
                <div class="flex flex-col" *ngIf="can_set_host">
                    <label>Host</label>
                    <a-user-search-field
                        [ngModel]="host | async"
                        (ngModelChange)="setHost($event)"
                    ></a-user-search-field>
                </div>
                <mat-button-toggle-group
                    name="booking-type"
                    class="w-full mb-4"
                    *ngIf="can_book_group"
                    [(ngModel)]="booking_type"
                    aria-label="Desk Booking Type"
                >
                    <mat-button-toggle
                        class="flex-1"
                        value="single"
                        (click)="setAttendees([])"
                    >
                        Single
                    </mat-button-toggle>
                    <mat-button-toggle class="flex-1" value="group">
                        Group
                    </mat-button-toggle>
                </mat-button-toggle-group>
                <div class="flex items-center space-x-2">
                    <div class="flex flex-col flex-1 w-40">
                        <label>Building</label>
                        <mat-form-field overlay appearance="outline">
                            <mat-select
                                placeholder="Select Building..."
                                [ngModel]="(options | async).zones[0]"
                                (ngModelChange)="
                                    setOptions({ zones: [$event] })
                                "
                            >
                                <mat-option
                                    *ngFor="let bld of buildings | async"
                                    [value]="bld.id"
                                >
                                    {{ bld.display_name || bld.name }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col flex-1 w-40">
                        <label>Date</label>
                        <a-date-field
                            [ngModel]="(options | async).date"
                            class="text-black"
                            (ngModelChange)="setOptions({ date: $event })"
                        ></a-date-field>
                    </div>
                </div>
                <div class="flex flex-col" *ngIf="!hide_reason">
                    <label>Reason</label>
                    <mat-form-field overlay appearance="outline">
                        <input
                            [(ngModel)]="reason"
                            matInput
                            placeholder="Reason for booking"
                        />
                    </mat-form-field>
                </div>
                <div class="flex flex-col" *ngIf="booking_type === 'group'">
                    <label>Group Members</label>
                    <a-user-list-field
                        [ngModel]="(options | async)?.attendees"
                        (ngModelChange)="setAttendees($event)"
                    ></a-user-list-field>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            [options] {
                width: 480px;
                max-width: calc(100vw - 2rem);
            }
        `,
    ],
})
export class DeskFlowFormComponent implements OnInit {
    /** Whether to book for self or group of people */
    public booking_type: string = 'single';
    /** Reason for making the booking */
    public reason: string = '';
    /** List of available building to book */
    public readonly buildings = this._org.building_list;

    public readonly options = this._state.options;

    public readonly host = this._state.host;

    public readonly setAttendees = (l) =>
        this._state.setOptions({ attendees: l });
    public readonly setOptions = (o) => this._state.setOptions(o);
    public readonly setHost = (h) => this._state.setHost(h);

    /** Whether user is allow to book for a group of people */
    public get can_book_group() {
        return this._settings.get('app.desks.has_group_booking') !== false;
    }

    /** Whether to hide field to set a reason for booking */
    public get hide_reason() {
        return !!this._settings.get('app.desks.hide_reason');
    }

    /** Whether to user is allowed to set the host for the booking */
    public get can_set_host() {
        return !!this._settings.get('app.desks.can_set_host');
    }

    constructor(
        private _org: OrganisationService,
        private _state: DeskFlowStateService,
        private _settings: SettingsService
    ) {}

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.setOptions({ zones: [this._org.building.id] });
        if (!this.can_set_host) {
            this._state.setHost(currentUser());
        }
    }
}
