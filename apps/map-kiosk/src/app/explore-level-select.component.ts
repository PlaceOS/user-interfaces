import { Component } from '@angular/core';
import { ExploreStateService } from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'explore-level-select',
    template: `
        <div
            class="m-2 rounded overflow-hidden bg-white shadow border border-solid border-gray-300"
        >
            <button
                *ngFor="let lvl of levels | async"
                class="flex flex-col items-center justify-center h-16 w-16 p-2 border-none"
                [class.active]="lvl.id === (level | async)?.id"
                (click)="setLevel(lvl)"
                matRipple
            >
                <div class="text-2xl">{{ lvl.number }}</div>
                <p class="text-sm whitespace-nowrap m-0">
                    {{ lvl.display_name || lvl.name }}
                </p>
            </button>
        </div>
    `,
    styles: [
        `
            .active {
                color: var(--primary) !important;
            }

            button:not(:first-child) {
                border-top: 1px solid #ccc !important;
            }
        `,
    ],
})
export class ExploreLevelSelectComponent {
    public readonly levels = this._orgs.active_levels;
    public readonly level = this._state.level;

    public readonly setLevel = (lvl) => this._state.setLevel(lvl.id);

    constructor(
        private _orgs: OrganisationService,
        private _state: ExploreStateService
    ) {}
}
