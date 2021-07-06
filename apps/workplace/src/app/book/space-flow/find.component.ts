import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HashMap, SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { Space, SpacesService } from '@placeos/spaces';
import { combineLatest } from 'rxjs';
import { filter, first, map, take } from 'rxjs/operators';

@Component({
    selector: 'space-flow-find',
    template: `
        <div topbar class="">
            <a
                button
                class="clear h-[2.75rem] text-white"
                mat-button
                [routerLink]="['/book', 'spaces', 'form']"
            >
                <div class="flex items-center justify-center h-full">
                    <app-icon class="text-xl">arrow_back</app-icon>
                    <span class="ml-2 mx-4">Back</span>
                </div>
            </a>
        </div>
        <div filters>
            <div class="w-[640px] max-w-[calc(100%-2rem)] mx-auto py-4">
                <h2 class="text-xl uppercase font-medium text-white">
                    Available Spaces
                </h2>
                <div
                    class="flex flex-col items-center sm:flex-row space-x-0 sm:space-x-2"
                >
                    <mat-form-field
                        overlay
                        buildings
                        class="w-full sm:w-auto sm:flex-1 h-[3.25rem]"
                        *ngIf="(buildings | async)?.length > 1"
                        appearance="outline"
                    >
                        <mat-select
                            placeholder="Select Building..."
                            [ngModel]="building | async"
                            (ngModelChange)="setBuilding($event)"
                        >
                            <mat-option
                                *ngFor="let bld of buildings | async"
                                [value]="bld"
                            >
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field
                        class="w-full sm:w-auto sm:flex-1 h-[3.25rem]"
                        overlay
                        *ngIf="(levels | async)?.length > 0"
                        appearance="outline"
                    >
                        <mat-select
                            placeholder="Level"
                            [ngModel]="
                                (options | async)?.zone_ids?.length
                                    ? (options | async)?.zone_ids[0]
                                    : ''
                            "
                            (ngModelChange)="setOptions({ zone_ids: [$event] })"
                        >
                            <mat-option
                                *ngFor="let item of levels | async"
                                [value]="item.id"
                            >
                                {{ item.display_name || item.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field
                        class="w-full sm:w-auto sm:flex-1 h-[3.25rem] hidden sm:block"
                        overlay
                        appearance="outline"
                    >
                        <mat-select
                            placeholder="Any Capacity"
                            [ngModel]="(options | async)?.capacity"
                            (ngModelChange)="setOptions({ capacity: $event })"
                        >
                            <mat-option
                                *ngFor="let item of quick_capacities"
                                [value]="item.value"
                            >
                                {{ item.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
        </div>
        <div class="flex-1 w-full bg-gray-100 overflow-auto">
            <ng-container *ngIf="!(loading | async); else load_state">
                <ng-container
                    *ngIf="(spaces | async)?.length > 0; else empty_state"
                >
                    <space-flow-find-item
                        *ngFor="let space of spaces | async"
                        class="w-[640px] max-w-[calc(100%-2rem)] mx-auto "
                        [space]="space"
                        [multiple]="multiple"
                        [(book)]="book_space[space.id]"
                        (bookChange)="handleBookEvent(space, $event)"
                    ></space-flow-find-item>
                    <p class="p-4 text-center opacity-60">
                        End of available spaces list
                    </p>
                </ng-container>
            </ng-container>
        </div>
        <div *ngIf="multiple" class="bg-white border-t border-gray-200">
            <div
                class="flex items-center w-[640px] max-w-[calc(100%-2rem)] mx-auto p-2"
            >
                <div class="flex-1 underline" [matMenuTriggerFor]="menu">
                    {{ space_list.length }} space(s) selected
                </div>
                <button
                    class="w-32"
                    [disabled]="!space_list.length"
                    mat-button
                    (click)="confirmBooking()"
                >
                    Book
                </button>
            </div>
            <mat-menu #menu="matMenu" yPosition="above">
                <div
                    class="flex items-center pointer-events-none leading-tight"
                    mat-menu-item
                    *ngFor="let space of space_list"
                >
                    <div class="flex flex-col mr-4">
                        <div>{{ space.display_name || space.name }}</div>
                        <div class="text-xs opacity-70">
                            {{ space.level?.display_name || space.level?.name }}
                            ~ {{ space.capacity || '2+' }} People
                        </div>
                    </div>
                    <button
                        mat-icon-button
                        class="pointer-events-auto"
                        (click)="
                            this.handleBookEvent(space, false);
                            $event.stopPropagation()
                        "
                    >
                        <app-icon>close</app-icon>
                    </button>
                </div>
                <div
                    mat-menu-item
                    class=" opacity-60"
                    *ngIf="!space_list?.length"
                >
                    No selected spaces
                </div>
            </mat-menu>
        </div>
        <ng-template #load_state>
            <div
                class="h-full w-full flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Retrieving available spaces...</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div
                class="h-full w-full flex flex-col items-center justify-center space-y-2 p-8 text-center"
            >
                <p>
                    No available spaces for selected time, capacity or level(s)
                </p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
            }

            [topbar] {
                background-color: #00539f;
            }

            [filters] {
                background-color: #007ac8;
            }
        `,
    ],
})
export class SpaceFlowFindComponent implements OnInit {
    public book_space: HashMap<boolean> = {};
    public quick_capacities = [
        { name: 'Any Capacity', value: 0 },
        { name: 'Small (1 - 4)', value: 1 },
        { name: 'Medium (5 - 12)', value: 5 },
        { name: 'Large (13 - 32)', value: 13 },
        { name: 'Huge (32+)', value: 33 },
    ];

    public space_list: Space[] = [];

    /** List of available buildings */
    public readonly buildings = this._org.building_list;
    /** Currently active building */
    public readonly building = this._org.active_building;

    public readonly levels = combineLatest([
        this.building,
        this._state.options,
    ]).pipe(
        filter(([_]) => !!_),
        map(([bld]) => [
            {
                id: this._org.building.id,
                name: 'All Levels',
            },
            ...this._org.levelsForBuilding(bld),
        ])
    );

    public readonly loading = this._state.loading;
    public readonly options = this._state.options;

    public readonly spaces = this._state.available_spaces;
    public async setBuilding(bld) {
        const opts = await this.options.pipe(take(1)).toPromise();
        if (bld) this._org.building = bld;
        const levels = this._org.levelsForBuilding(this._org.building);
        const lvl = levels.find((_) => opts.zone_ids?.includes(_.id));
        if (!lvl && levels.length) {
            this.setOptions({ zone_ids: [levels[0].id] });
        }
    }

    public readonly setOptions = (o) => this._state.setOptions(o);

    public get multiple() {
        return this._settings.get('app.booking.multiple_spaces') ?? false;
    }

    constructor(
        private _org: OrganisationService,
        private _spaces: SpacesService,
        private _state: EventFormService,
        private _settings: SettingsService,
        private _router: Router
    ) {}

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => !!_)).toPromise();
        await this._spaces.initialised.pipe(first((_) => !!_)).toPromise();
        this.setBuilding(this._org.building);
        this.book_space = {};
        const resources = this._state.form?.get('resources')?.value || [];
        resources.forEach((_) => (this.book_space[_.id] = true));
        this.space_list = this._spaces.filter((s) => this.book_space[s.id]);
    }

    public handleBookEvent(space: Space, book: boolean = true) {
        if (this.multiple) {
            this.book_space[space.id] = book;
        } else {
            this.book_space = {};
            this.book_space[space.id] = book;
            this.confirmBooking();
        }
        this.space_list = this._spaces.filter((s) => this.book_space[s.id]);
    }

    public confirmBooking() {
        const spaces = this._spaces.filter((s) => this.book_space[s.id]);
        this._state.form.patchValue({ resources: spaces, system: spaces[0] });
        this._router.navigate(['/book', 'spaces', 'confirm']);
    }
}
