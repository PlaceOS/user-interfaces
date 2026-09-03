import {
    Component,
    computed,
    effect,
    inject,
    input,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { SignageService } from '../signage.service';
import { ZoneContentComponent } from './zone-content.component';
import { ZoneHeaderComponent } from './zone-header.component';
import { ZoneListComponent } from './zone-list.component';

const TAB_QUERY_PARAM = 'tab';

function parseZoneTab(
    value: string | null,
): 'playlists' | 'displays' | 'templates' {
    if (value === 'displays' || value === 'templates') return value;
    return 'playlists';
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
                                @if (can_manage_selected_zone()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.EDIT_ZONE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="editZone()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.EDIT_SELECTED_ZONE'
                                                | translate
                                        "
                                    >
                                        <icon>edit</icon>
                                    </button>
                                    <button
                                        icon
                                        default
                                        error
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.DELETE_ZONE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="removeZone()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.DELETE_SELECTED_ZONE'
                                                | translate
                                        "
                                    >
                                        <icon>delete</icon>
                                    </button>
                                }
                            </div>
                            <div
                                class="bg-base-100 border-base-300 mx-2 mt-2 flex overflow-hidden rounded-lg border"
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
                                @if (templates_enabled()) {
                                    <button
                                        type="button"
                                        role="tab"
                                        class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                        [class.border-primary]="
                                            view_tab() === 'templates'
                                        "
                                        [class.border-b-2]="
                                            view_tab() === 'templates'
                                        "
                                        [class.text-primary]="
                                            view_tab() === 'templates'
                                        "
                                        [class.opacity-60]="
                                            view_tab() !== 'templates'
                                        "
                                        (click)="setViewTab('templates')"
                                        [attr.aria-selected]="
                                            view_tab() === 'templates'
                                        "
                                        aria-controls="zone-templates-panel"
                                        id="zone-templates-tab"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.NAV_TEMPLATES'
                                                | translate
                                        }}
                                    </button>
                                }
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
    imports: [
        NavSidebarComponent,
        NavFooterComponent,
        ZoneHeaderComponent,
        ZoneListComponent,
        ZoneContentComponent,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class ZonesSectionComponent {
    private readonly _service = inject(SignageService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);

    public readonly id = input('');
    public readonly tab = input<string | null>(null);
    public readonly templates_enabled = this._service.templates_enabled;
    public readonly view_tab = signal<'playlists' | 'displays' | 'templates'>(
        'playlists',
    );
    public readonly selected_zone = this._service.selected_zone;
    public readonly can_manage_selected_zone = computed(() => {
        const zone = this.selected_zone();
        return (
            this._service.can_manage_zones() &&
            !!zone?.tags?.includes('signage')
        );
    });

    private readonly _zones = this._service.all_zones;
    private readonly _playlists = this._service.playlists;
    private readonly _displays = this._service.displays;

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
            const route_tab = parseZoneTab(this.tab());
            const available_tab =
                route_tab === 'templates' && !this.templates_enabled()
                    ? 'playlists'
                    : route_tab;
            if (available_tab !== this.view_tab()) {
                this.view_tab.set(available_tab);
            }
        });

        effect(() => {
            const id = this.id();
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

    public editZone() {
        const zone = this.selected_zone();
        if (zone) this._service.editZone(zone);
    }

    public async removeZone() {
        const zone = this.selected_zone();
        if (!zone || !(await this._service.removeZone(zone))) return;
        await this._router.navigate(['/zones'], {});
    }

    public setViewTab(tab: 'playlists' | 'displays' | 'templates') {
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
