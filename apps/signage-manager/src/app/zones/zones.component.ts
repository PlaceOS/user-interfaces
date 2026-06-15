import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { map } from 'rxjs/operators';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { SignageService } from '../signage.service';
import { ZoneContentComponent } from './zone-content.component';
import { ZoneHeaderComponent } from './zone-header.component';
import { ZoneListComponent } from './zone-list.component';

const TAB_QUERY_PARAM = 'tab';

function parseZoneTab(value: string | null): 'playlists' | 'displays' {
    return value === 'displays' ? 'displays' : 'playlists';
}

@Component({
    selector: 'zones-section',
    template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col">
                <zone-header class="relative z-10" />
                <div class="flex min-h-0 flex-1 flex-row">
                    <zone-list
                        [class.mobile-hidden]="!!selected_zone()"
                        class="mobile-full"
                    />
                    <div
                        class="flex min-h-0 w-px flex-1 flex-col"
                        [class.mobile-hidden]="!selected_zone()"
                    >
                        @if (selected_zone()) {
                            <div
                                class="bg-base-100 border-base-300 mx-2 flex items-center gap-2 rounded-b-lg border px-4 py-3"
                            >
                                <button
                                    icon
                                    type="button"
                                    matRipple
                                    class="sm:hidden"
                                    (click)="deselectZone()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.BACK_TO_ZONES'
                                            | translate
                                    "
                                >
                                    <icon>arrow_back</icon>
                                </button>
                                <icon class="shrink-0 text-2xl opacity-60"
                                    >layers</icon
                                >
                                <div class="min-w-0 flex-1">
                                    <h4 class="truncate text-lg font-medium">
                                        {{
                                            selected_zone().display_name ||
                                                selected_zone().name
                                        }}
                                    </h4>
                                    @if (selected_zone().description) {
                                        <div
                                            class="text-base-content/80 truncate text-sm"
                                        >
                                            {{ selected_zone().description }}
                                        </div>
                                    }
                                </div>
                            </div>
                            <div
                                class="bg-base-100 border-base-300 mx-2 mt-2 flex overflow-hidden rounded-lg border lg:hidden"
                                role="tablist"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.ZONE_DETAILS_TABS'
                                        | translate
                                "
                            >
                                <button
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'playlists'
                                    "
                                    [class.border-b-2]="
                                        view_tab() === 'playlists'
                                    "
                                    [class.text-primary]="
                                        view_tab() === 'playlists'
                                    "
                                    [class.opacity-60]="
                                        view_tab() !== 'playlists'
                                    "
                                    (click)="setViewTab('playlists')"
                                    [attr.aria-selected]="
                                        view_tab() === 'playlists'
                                    "
                                    aria-controls="zone-playlists-panel"
                                    id="zone-playlists-tab"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.PLAYLISTS_COUNT'
                                            | translate
                                                : { count: playlist_count() }
                                                : playlist_count()
                                    }}
                                </button>
                                <button
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'displays'
                                    "
                                    [class.border-b-2]="
                                        view_tab() === 'displays'
                                    "
                                    [class.text-primary]="
                                        view_tab() === 'displays'
                                    "
                                    [class.opacity-60]="
                                        view_tab() !== 'displays'
                                    "
                                    (click)="setViewTab('displays')"
                                    [attr.aria-selected]="
                                        view_tab() === 'displays'
                                    "
                                    aria-controls="zone-displays-panel"
                                    id="zone-displays-tab"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.DISPLAYS_COUNT'
                                            | translate
                                                : { count: display_count() }
                                                : display_count()
                                    }}
                                </button>
                            </div>
                        }
                        <zone-content
                            class="h-1/2 flex-1"
                            [activeTab]="view_tab()"
                        />
                    </div>
                </div>
            </div>
            <nav-footer />
        </div>
    `,
    styles: [
        `
            .mobile-hidden {
                @media (max-width: 639px) {
                    display: none !important;
                }
            }

            .mobile-full {
                @media (max-width: 639px) {
                    flex: 1;
                }
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        NavSidebarComponent,
        NavFooterComponent,
        ZoneHeaderComponent,
        ZoneListComponent,
        ZoneContentComponent,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class ZonesSectionComponent {
    private readonly _service = inject(SignageService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);

    public readonly view_tab = signal<'playlists' | 'displays'>('playlists');
    public readonly selected_zone = this._service.selected_zone;

    private readonly _zones = toSignal(this._service.all_zones, {
        initialValue: [],
    });
    private readonly _playlists = toSignal(this._service.playlists, {
        initialValue: [],
    });
    private readonly _displays = toSignal(this._service.displays, {
        initialValue: [],
    });
    private readonly _route_id = toSignal(
        this._route.paramMap.pipe(map((p) => p.get('id') || '')),
        { initialValue: '' },
    );
    private readonly _route_tab = toSignal(
        this._route.queryParamMap.pipe(map((p) => p.get(TAB_QUERY_PARAM))),
        { initialValue: null as string | null },
    );

    public readonly playlist_count = computed(() => {
        const zone = this.selected_zone();
        if (!zone) return 0;
        return this._playlists().filter((p) => zone.playlists?.includes(p.id))
            .length;
    });

    public readonly display_count = computed(() => {
        const zone = this.selected_zone();
        if (!zone) return 0;
        return this._displays().filter((d) => d.zones?.includes(zone.id))
            .length;
    });

    private _route_resolved = false;

    constructor() {
        effect(() => {
            const route_tab = parseZoneTab(this._route_tab());
            if (route_tab !== this.view_tab()) {
                this.view_tab.set(route_tab);
            }
        });

        effect(() => {
            const id = this._route_id();
            const list = this._zones();
            if (!list.length) return;
            if (id) {
                const match = list.find((z) => z.id === id);
                if (match && this._service.selected_zone()?.id !== match.id) {
                    this._service.selected_zone.set(match);
                }
                this._route_resolved = true;
            } else if (this._route_resolved) {
                this._service.selected_zone.set(null);
            }
        });
    }

    public deselectZone() {
        this._service.selected_zone.set(null);
        this._router.navigate(['/zones'], {});
    }

    public setViewTab(tab: 'playlists' | 'displays') {
        if (tab === this.view_tab()) return;
        this.view_tab.set(tab);
        void this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { [TAB_QUERY_PARAM]: tab },
            queryParamsHandling: 'merge',
            replaceUrl: true,
        });
    }
}
