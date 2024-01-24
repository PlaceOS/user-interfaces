import { Component, OnDestroy, OnInit } from '@angular/core';

import { DashboardStateService } from './dashboard-state.service';

@Component({
    selector: 'a-dashboard-availability',
    template: `
        <h3 class="m-0 font-medium text-xl">Available Now</h3>
        <div
            class="flex flex-col items-center p-2 bg-base-100 shadow my-4 rounded-lg"
        >
            <div class="flex items-center w-full mb-2">
                <div>Building Levels</div>
            </div>
            <div free-levels class="items space-y-2 w-full">
                <a
                    btn
                    matRipple
                    class="w-full"
                    *ngFor="let lvl of levels_free | async | slice: 0:2"
                    [routerLink]="['/explore']"
                    [queryParams]="{ level: lvl.id }"
                >
                    <div class="max-w-full truncate">
                        {{ lvl.display_name || lvl.name }}
                    </div>
                </a>
                <span
                    *ngIf="!(levels_free | async).length"
                    class="text-black/30/30 text-sm mb-2"
                    >No free spaces in building</span
                >
            </div>
        </div>
        <div
            free-spaces
            class="flex items-center flex-col rounded-lg bg-base-100 shadow my-4 p-2"
            *ngIf="(space_list | async)?.length"
        >
            <div class="flex items-center w-full mb-2">
                <div>Spaces</div>
            </div>
            <div class="items space-y-2 w-full">
                <a
                    btn
                    matRipple
                    class="w-full"
                    *ngFor="let space of space_list | async | slice: 0:3"
                    [routerLink]="['/explore']"
                    [queryParams]="{ space: space.id }"
                >
                    <div class="max-w-full truncate">
                        {{ space.display_name || space.name }}
                    </div>
                </a>
                <span
                    *ngIf="!(space_list | async).length"
                    class="text-dark-fade text-sm mb-2"
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
