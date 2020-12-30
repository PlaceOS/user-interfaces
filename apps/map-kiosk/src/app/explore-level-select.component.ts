import { Component } from '@angular/core';
import { ExploreStateService } from '@user-interfaces/explore';
import { OrganisationService } from '@user-interfaces/organisation';

@Component({
    selector: 'explore-level-select',
    template: `
        <div class="m-2 rounded overflow-hidden bg-white shadow divide-y divide-gray-100">
            <button
                *ngFor="let lvl of levels | async"
                class="flex flex-col items-center justify-center h-20 w-20 p-2"
                [class.active]="lvl.id === (level | async).id"
                (click)="setLevel(lvl)"
                matRipple
            >
                <div class="text-3xl">{{ lvl.number }}</div>
                <p>{{ lvl.display_name || lvl.name }}</p>
            </button>
        </div>
    `,
    styles: [`
        .active {
            color: var(--primary) !important;
        }
    `],
})
export class ExploreLevelSelectComponent {
    public readonly levels = this._orgs.active_levels;
    public readonly level = this._state.level;

    public readonly setLevel = (lvl) => this._state.setLevel(lvl.id);

    constructor(private _orgs: OrganisationService, private _state: ExploreStateService) {}
}
