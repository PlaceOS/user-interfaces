import { Component, OnDestroy, OnInit } from '@angular/core';

import { DashboardStateService } from './dashboard-state.service';

@Component({
    selector: 'a-dashboard-availability',
    template: `
        <h3 class="m-0 text-xl font-medium">Available Now</h3>
        <div
            class="my-4 flex flex-col items-center rounded-lg bg-base-100 p-2 shadow"
        >
            <div class="mb-2 flex w-full items-center">
                <div>Building Levels</div>
            </div>
            <div free-levels class="items w-full space-y-2">
                <a
                    btn
                    matRipple
                    class="w-full"
                    *ngFor="let lvl of levels_free | async | slice: 0 : 2"
                    [routerLink]="['/explore']"
                    [queryParams]="{ level: lvl.id }"
                >
                    <div class="max-w-full truncate">
                        {{ lvl.display_name || lvl.name }}
                    </div>
                </a>
                <span
                    *ngIf="!(levels_free | async).length"
                    class="text-black/30/30 mb-2 text-sm"
                    >No free spaces in building</span
                >
            </div>
        </div>
        <div
            free-spaces
            class="my-4 flex flex-col items-center rounded-lg bg-base-100 p-2 shadow"
            *ngIf="(space_list | async)?.length"
        >
            <div class="mb-2 flex w-full items-center">
                <div>Spaces</div>
            </div>
            <div class="items w-full space-y-2">
                <a
                    btn
                    matRipple
                    class="w-full"
                    *ngFor="let space of space_list | async | slice: 0 : 3"
                    [routerLink]="['/explore']"
                    [queryParams]="{ space: space.id }"
                >
                    <div class="max-w-full truncate">
                        {{ space.display_name || space.name }}
                    </div>
                </a>
                <span
                    *ngIf="!(space_list | async).length"
                    class="text-dark-fade mb-2 text-sm"
                    >No free spaces</span
                >
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                padding: 1em;
                min-width: 16rem;
            }
        `,
    ],
    standalone: false,
})
export class DashboardAvailabilityComponent implements OnInit, OnDestroy {
    public readonly space_list = this._state.free_spaces;
    public readonly levels_free = this._state.level_occupancy;

    constructor(private _state: DashboardStateService) {}

    public async ngOnInit() {
        this._state.pollFreeSpaces();
    }

    public ngOnDestroy() {
        this._state.stopPollingFreeSpaces();
    }
}
