import { Component } from '@angular/core';
import { ExploreStateService } from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';
import { first, take } from 'rxjs/operators';

@Component({
    selector: 'explore-level-select',
    template: `
        <div
            class="m-2 rounded overflow-hidden bg-base-100 shadow border border-solid border-base-300"
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
                background: var(--s) !important;
                color: #fff !important;
            }

            button:not(:first-child) {
                border-top: 1px solid var(--b3) !important;
            }
        `,
    ],
})
export class ExploreLevelSelectComponent {
    public readonly levels = this._org.active_levels;
    public readonly level = this._state.level;

    public readonly setLevel = (lvl) => this._state.setLevel(lvl.id);

    constructor(
        private _org: OrganisationService,
        private _state: ExploreStateService
    ) {}

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        const levels = await this._org.active_levels.pipe(take(1)).toPromise();
    }
}
