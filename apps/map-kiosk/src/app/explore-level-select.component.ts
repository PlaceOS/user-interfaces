import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { OrganisationService } from '@placeos/common';
import { ExploreStateService } from '@placeos/explore';

@Component({
    selector: 'explore-level-select',
    template: `
        <div
            class="border-base-300 bg-base-100 m-2 overflow-hidden rounded-sm border border-solid shadow-sm"
        >
            @for (lvl of levels(); track lvl) {
                <button
                    class="flex h-16 w-16 flex-col items-center justify-center border-none p-2"
                    [class.active]="lvl.id === level()?.id"
                    (click)="setLevel(lvl)"
                    matRipple
                >
                    <div class="text-2xl">{{ lvl.number }}</div>
                    <p class="m-0 text-sm whitespace-nowrap">
                        {{ lvl.display_name || lvl.name }}
                    </p>
                </button>
            }
        </div>
    `,
    styles: [
        `
            .active {
                background: var(--secondary) !important;
                color: #fff !important;
            }

            button:not(:first-child) {
                border-top: 1px solid var(--base-300) !important;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatRippleModule],
})
export class ExploreLevelSelectComponent {
    private _org = inject(OrganisationService);
    private _state = inject(ExploreStateService);

    public readonly levels = this._org.active_levels;
    public readonly level = this._state.level;

    public readonly setLevel = (lvl) => this._state.setLevel(lvl.id);
}
