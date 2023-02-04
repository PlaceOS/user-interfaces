import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { addMinutes, getUnixTime } from 'date-fns';

import {
    BaseClass,
    currentUser,
    DialogEvent,
    HashMap,
    Identity,
    SettingsService,
} from '@placeos/common';
import { Building, OrganisationService } from '@placeos/organisation';

import { filterSpacesFromRules } from 'libs/events/src/lib/helpers';
import { querySpaceCalendarAvailability } from 'libs/calendar/src/lib/calendar.fn';
import { Space } from './space.class';

export interface SpaceSelectModalData {
    /** List of currently selected spaces */
    readonly spaces: Space[];
    /** Selected date to check space availability */
    readonly date: number;
    /** Duration of the availability that is desired */
    readonly duration: number;
    all_day?: boolean;
    visitor_type?: string;
}

@Component({
    selector: 'a-space-select-modal',
    template: `
        <header>
            <app-icon class="text-3xl">place</app-icon>
            <div class="text-xl font-semibold flex-1">
                Select space{{ multiple ? 's' : '' }}
            </div>
            <button icon mat-dialog-close>
                <app-icon class="text-3xl">close</app-icon>
            </button>
        </header>
        <main>
            <mat-form-field
                appearance="outline"
                *ngIf="buildings && buildings.length > 1"
            >
                <mat-select
                    name="booking-type"
                    [ngModel]="building.getValue()"
                    (ngModelChange)="building.next($event)"
                    placeholder="Select building"
                >
                    <mat-option *ngFor="let bld of buildings" [value]="bld">
                        {{ bld.display_name || bld.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-form-field
                appearance="outline"
                *ngIf="space_types && space_types.length > 1"
            >
                <mat-select
                    name="booking-type"
                    [(ngModel)]="type"
                    placeholder="Any space type"
                >
                    <mat-option
                        *ngFor="let type of space_types"
                        [value]="type.id"
                    >
                        {{ type.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <div class="body" style="width: 32rem">
                <ng-container *ngIf="!loading; else load_state">
                    <ng-container
                        *ngIf="
                            (filtered_spaces | async)?.length;
                            else empty_state
                        "
                    >
                        <ng-container
                            *ngFor="let space of filtered_spaces | async"
                        >
                            <a-space-select-item
                                *ngIf="!space_map[space.id]"
                                [space]="space"
                                [multiple]="multiple"
                                type="available"
                                (click)="spaceSelected(space)"
                            ></a-space-select-item>
                        </ng-container>
                    </ng-container>
                </ng-container>
                <div
                    class="space-list"
                    *ngIf="multiple"
                    [class.show]="show_selected"
                >
                    <ng-container
                        *ngIf="spaces && spaces.length; else empty_state"
                    >
                        <a-space-select-item
                            *ngFor="let space of spaces"
                            [space]="space"
                            [multiple]="multiple"
                            type="selected"
                        ></a-space-select-item>
                    </ng-container>
                </div>
            </div>
            <footer *ngIf="multiple">
                <button btn matRipple (click)="save()">
                    Save selected spaces({{ spaces.length || '0' }})
                </button>
            </footer>
            <ng-template #empty_state>
                <div empty class="p-16 flex flex-col items-center space-y-2">
                    <app-icon class="text-3xl">close</app-icon>
                    <p>No spaces</p>
                </div>
            </ng-template>
            <ng-template #load_state>
                <div load class="p-16 flex flex-col items-center space-y-2">
                    <mat-spinner diameter="48"></mat-spinner>
                    <p>Finding available spaces...</p>
                </div>
            </ng-template>
        </main>
    `,
    styles: [
        `
            mat-form-field {
                height: 3.5em;
                width: 100%;
                padding: 0 0.25em;
            }

            .body {
                min-width: 20rem;
                max-width: calc(100vw - 2rem);
                max-height: 65vh;
                overflow: auto;
            }
        `,
    ],
})
export class SpaceSelectModalComponent extends BaseClass {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** List of selected spaces */
    public spaces: Space[] = [...(this._data.spaces || [])];
    /** Building to filter available spaces */
    public building = new BehaviorSubject<Building>(null);
    /** Whether to show selected spaces */
    public show_selected: boolean;
    /** List of available space types */
    public space_types: Identity[] = [];
    /** ID of the space type to filter available spaces on */
    public type: string;
    /** Whether the available spaces are being loaded */
    public loading: boolean;

    public readonly available_spaces = combineLatest([this.building]).pipe(
        switchMap(([bld]) => {
            this.loading = true;
            return querySpaceCalendarAvailability({
                zone_ids: bld?.id,
                period_start: getUnixTime(this._data.date),
                period_end: getUnixTime(
                    addMinutes(this._data.date, this._data.duration)
                ),
            });
        }),
        shareReplay(1)
    );

    public readonly filtered_spaces = this.available_spaces.pipe(
        map((list) =>
            filterSpacesFromRules(
                list,
                { ...this._data, host: currentUser() } as any,
                this._org.building.booking_rules
            )
        ),
        tap(() => (this.loading = false))
    );

    public get buildings(): Building[] {
        return this._org.buildings;
    }

    /** Whether multiple spaces can be selected */
    public get multiple(): boolean {
        return !!this._settings.get('app.events.multiple_spaces');
    }

    /** Mapping of spaces to whether they are selected */
    public get space_map(): HashMap<boolean> {
        const spaces = {};
        this.spaces.forEach((space) => (spaces[space.id] = true));
        return spaces;
    }

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService,
        @Inject(MAT_DIALOG_DATA) private _data: SpaceSelectModalData
    ) {
        super();
    }

    public ngOnInit() {
        this.building.next(this._org.building || this.buildings[0]);
        this.subscription(
            'spaces',
            this.filtered_spaces.subscribe((_) => _)
        );
    }

    public spaceSelected(space: Space) {
        if (this.multiple) {
            if (!this.space_map[space.id]) {
                this.spaces.push(space);
            }
        } else {
            this.spaces = [space];
            this.save();
        }
    }

    public save() {
        this.event.emit({ reason: 'done', metadata: this.spaces });
    }
}
