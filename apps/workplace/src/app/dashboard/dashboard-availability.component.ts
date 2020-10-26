import { Component, OnDestroy, OnInit } from '@angular/core';
import { getModule } from '@placeos/ts-client';
import { BaseClass } from '@user-interfaces/common';
import { OrganisationService } from '@user-interfaces/organisation';
import { first } from 'rxjs/operators';

import { DashboardStateService } from './dashboard-state.service';

@Component({
    selector: 'dashboard-availability',
    template: `
        <h3 class="m-0 font-medium text-xl">Available Now</h3>
        <div class="flex flex-col items-center p-2 bg-white my-4 rounded-lg">
            <div class="flex items-center w-full mb-2">
                <app-icon
                    class="bg-darken rounded-lg mr-2 text-2xl"
                    [icon]="{ class: 'material-icons', content: 'crop_free' }"
                ></app-icon>
                <div>Most free space:</div>
            </div>
            <div class="items space-y-2 w-full">
                <a
                    button
                    mat-button
                    class="w-full"
                    *ngFor="let lvl of levels_free | async | slice:0:2"
                    [routerLink]="['/explore']"
                    [queryParams]="{ level: lvl.id }"
                >
                    {{ lvl.display_name || lvl.name }}
                </a>
            </div>
        </div>
        <div class="flex items-center flex-col rounded-lg bg-white my-4 p-2">
            <div class="flex items-center w-full mb-2">
                <app-icon
                    class="bg-darken rounded-lg mr-2 text-2xl"
                    [icon]="{ class: 'material-icons', content: 'av_timer' }"
                ></app-icon>
                <div>Free rooms now:</div>
            </div>
            <div class="items space-y-2">
                <a
                    button
                    mat-button
                    class="w-full"
                    *ngFor="let space of space_list | async | slice: 0:3"
                    [routerLink]="['/explore']"
                    [queryParams]="{ space: space.id }"
                    >{{ space.display_name || space.name }}
                </a>
                <span *ngIf="!(space_list | async).length" class="text-dark-fade text-sm mb-2">No free spaces</span>
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

    constructor(private _state: DashboardStateService) { }

    public async ngOnInit() {
        this._state.pollFreeSpaces();

    }

    public ngOnDestroy() {
        this._state.stopPollingFreeSpaces();
    }
}
