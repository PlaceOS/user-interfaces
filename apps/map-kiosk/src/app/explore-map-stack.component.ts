import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    HostListener,
    inject,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { OrganisationService } from '@placeos/common';
import { InteractiveMapComponent } from '@placeos/components';
import {
    ExploreDesksService,
    ExploreSpacesService,
    ExploreStateService,
    ExploreZonesService,
} from '@placeos/explore';

@Component({
    selector: 'explore-map-stack',
    template: `
        <div
            class="bg-base-200 absolute inset-0 overflow-hidden"
            [class.hide-levels]="$any(options())?.show_levels"
            [class.isometric]="isometric()"
        >
            @for (lvl of levels(); track lvl; let i = $index) {
                <interactive-map
                    class="absolute inset-0"
                    [src]="lvl?.map_id"
                    [class.active]="i === active_index()"
                    [style.top]="-50 * (i - active_index()) + '%'"
                    [style.bottom]="50 * (i - active_index()) + '%'"
                    [zoom]="positions().zoom"
                    [center]="positions().center"
                    [styles]="i === active_index() ? styles() : {}"
                    [features]="i === active_index() ? features() : []"
                    [actions]="i === active_index() ? actions() : []"
                    [labels]="i === active_index() ? labels() : []"
                >
                </interactive-map>
            }
        </div>
    `,
    styles: [
        `
            div:not(.hide-levels):not(.isometric) interactive-map {
                transform: perspective(500px) rotateX(50deg) scale(0.9);
            }

            div.isometric:not(.hide-levels) interactive-map {
                transform: perspective(800px) rotateX(45deg) rotateZ(-45deg)
                    scale(0.7);
            }

            .hide-levels > div:not(.active) {
                display: none;
            }

            interactive-map {
                transition:
                    transform 200ms,
                    opacity 200ms;
                opacity: 0.1;
                pointer-events: none;
                height: 100vw;
                width: 100vw;
            }

            .active {
                opacity: 1 !important;
                pointer-events: auto;
            }
        `,
    ],
    imports: [InteractiveMapComponent, CommonModule],
})
export class ExploreMapStackComponent {
    private _orgs = inject(OrganisationService);
    private _state = inject(ExploreStateService);
    private _s = inject(ExploreSpacesService);
    private _desks = inject(ExploreDesksService);
    private _zones = inject(ExploreZonesService);

    public readonly isometric = signal(
        localStorage.getItem('KIOSK.isometric') === 'true',
    );

    @HostListener('window:isometric-change', ['$event'])
    public onIsometricChange(event: Event) {
        this.isometric.set((event as CustomEvent).detail);
    }

    public readonly levels = toSignal(this._orgs.active_levels, {
        initialValue: [],
    });
    public readonly level = toSignal(this._state.level, {
        initialValue: undefined,
    });
    /** Active map styles */
    public readonly styles = toSignal(this._state.map_styles, {
        initialValue: { text: { display: 'none' } },
    });
    /** Active map position */
    public readonly positions = toSignal(this._state.map_positions, {
        initialValue: { zoom: 1, center: { x: 0.5, y: 0.5 } },
    });
    /** Active map features */
    public readonly features = toSignal(this._state.map_features, {
        initialValue: [],
    });
    /** Active map actions */
    public readonly actions = toSignal(this._state.map_actions, {
        initialValue: [],
    });
    /** Active map labels */
    public readonly labels = toSignal(this._state.map_labels, {
        initialValue: [],
    });
    /** Active map options */
    public readonly options = toSignal(this._state.options, {
        initialValue: undefined,
    });

    public readonly active_index = computed(() => {
        const index = this.levels().findIndex(
            (lvl) => this.level()?.map_id === lvl.map_id,
        );
        return Math.max(0, index);
    });
}
