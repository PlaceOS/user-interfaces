import { Component, inject } from '@angular/core';
import { nextValueFrom } from '@placeos/common';
import { ExploreStateService } from '@placeos/explore';
import { OrganisationService } from '@placeos/common';
import { first } from 'rxjs/operators';

@Component({
    selector: 'explore-level-select',
    template: `
        <div
            class="m-2 overflow-hidden rounded border border-solid border-base-300 bg-base-100 shadow"
        >
            @for (lvl of levels | async; track lvl) {
                <button
                    class="flex h-16 w-16 flex-col items-center justify-center border-none p-2"
                    [class.active]="lvl.id === (level | async)?.id"
                    (click)="setLevel(lvl)"
                    matRipple
                >
                    <div class="text-2xl">{{ lvl.number }}</div>
                    <p class="m-0 whitespace-nowrap text-sm">
                        {{ lvl.display_name || lvl.name }}
                    </p>
                </button>
            }
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
    standalone: false,
})
export class ExploreLevelSelectComponent {
    private _org = inject(OrganisationService);
    private _state = inject(ExploreStateService);

    public readonly levels = this._org.active_levels;
    public readonly level = this._state.level;

    public readonly setLevel = (lvl) => this._state.setLevel(lvl.id);

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        const levels = await nextValueFrom(this._org.active_levels);
    }
}
