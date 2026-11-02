import { Component, computed, inject, input, resource } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { showZone } from '@placeos/ts-client';
import { selectRoutedItem } from '../displays/routed-selection.util';
import { SignageDisplayService } from '../displays/signage-display.service';
import { SignagePlaylistService } from '../playlists/signage-playlist.service';
import { decodeEntityNames } from '../shared/decode-entity-names.util';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { routedTab } from '../shared/routed-tab.util';
import {
    SectionTab,
    SectionTabsComponent,
} from '../shared/section-tabs.component';
import { SignageContextService } from '../signage-context.service';
import { SignageTemplateService } from '../templates/signage-template.service';
import { SignageZoneService } from './signage-zone.service';
import { ZoneContentComponent } from './zone-content.component';
import { ZoneHeaderComponent } from './zone-header.component';
import { ZoneListComponent } from './zone-list.component';

type ZoneTab = 'playlists' | 'displays' | 'templates';

function parseZoneTab(value: string | null): ZoneTab {
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
                        class="flex min-h-0 w-px flex-1 flex-col overflow-hidden"
                        [class.mobile-hidden]="!selected_zone()"
                    >
                        @if (selected_zone()) {
                            <div
                                class="bg-base-100 border-base-300 relative z-10 mx-2 flex shrink-0 items-center gap-2 rounded-b-lg border px-4 py-3"
                            >
                                <button
                                    icon
                                    type="button"
                                    matRipple
                                    class="desktop-hidden"
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
                            <section-tabs
                                class="bg-base-100 border-base-300 relative z-10 mx-2 mt-2 flex shrink-0 overflow-hidden rounded-lg border"
                                id_prefix="zone"
                                [tabs]="tabs()"
                                [active]="view_tab()"
                                (activeChange)="setViewTab($event)"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.ZONE_DETAILS_TABS'
                                        | translate
                                "
                            />
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
    imports: [
        NavSidebarComponent,
        NavFooterComponent,
        ZoneHeaderComponent,
        ZoneListComponent,
        ZoneContentComponent,
        SectionTabsComponent,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class ZonesSectionComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _display_service = inject(SignageDisplayService);
    private readonly _playlist_service = inject(SignagePlaylistService);
    private readonly _template_service = inject(SignageTemplateService);
    private readonly _zone_service = inject(SignageZoneService);
    private readonly _router = inject(Router);

    public readonly id = input('');
    public readonly tab = input<string | null>(null);
    public readonly templates_enabled = this._context.templates_enabled;
    private readonly _view_tab = routedTab(this.tab, (value) => {
        const tab = parseZoneTab(value);
        return tab === 'templates' && !this.templates_enabled()
            ? 'playlists'
            : tab;
    });
    public readonly view_tab = this._view_tab.active;
    public readonly selected_zone = this._zone_service.selected_zone;
    public readonly can_manage_selected_zone = computed(() => {
        const zone = this.selected_zone();
        return (
            this._context.can_manage_zones() &&
            !!zone?.tags?.includes('signage')
        );
    });

    private readonly _template_mappings = resource({
        params: () => {
            const id = this.selected_zone()?.id;
            return this.templates_enabled() && id
                ? {
                      id,
                      revision:
                          this._template_service.template_mappings_revision(),
                  }
                : undefined;
        },
        loader: ({ params }) =>
            this._template_service.listTemplateMappings({ zone_id: params.id }),
    });
    public readonly template_count_loading = this._template_mappings.isLoading;
    public readonly playlist_count_loading =
        this._playlist_service.playlists_loading;
    public readonly display_count_loading =
        this._display_service.selected_zone_displays_loading;
    public readonly template_count = computed(() =>
        this._template_mappings.hasValue()
            ? this._template_mappings.value().length
            : 0,
    );

    public readonly playlist_count = computed(
        () =>
            this._playlist_service.playlistsById(
                this.selected_zone()?.playlists || [],
            ).length,
    );

    public readonly display_count = computed(
        () => this._display_service.selected_zone_displays().length,
    );

    public readonly tabs = computed<SectionTab<ZoneTab>[]>(() => [
        {
            id: 'playlists',
            label: 'SIGNAGE_MANAGER.NAV_PLAYLISTS',
            count: this.playlist_count(),
            count_loading: this.playlist_count_loading(),
        },
        {
            id: 'displays',
            label: 'SIGNAGE_MANAGER.NAV_DISPLAYS',
            count: this.display_count(),
            count_loading: this.display_count_loading(),
        },
        ...(this.templates_enabled()
            ? [
                  {
                      id: 'templates' as const,
                      label: 'SIGNAGE_MANAGER.NAV_TEMPLATES',
                      count: this.template_count(),
                      count_loading: this.template_count_loading(),
                  },
              ]
            : []),
    ]);

    constructor() {
        selectRoutedItem({
            id: this.id,
            list: this._zone_service.all_zones,
            selected: this._zone_service.selected_zone,
            // `all_zones` holds only the first 500 zones of the group
            load: async (id) => decodeEntityNames(await showZone(id)),
        });
    }

    public deselectZone() {
        this._zone_service.selected_zone.set(null);
        this._router.navigate(['/zones'], {});
    }

    public editZone() {
        const zone = this.selected_zone();
        if (zone) this._zone_service.editZone(zone);
    }

    public async removeZone() {
        const zone = this.selected_zone();
        if (!zone || !(await this._zone_service.removeZone(zone))) return;
        await this._router.navigate(['/zones'], {});
    }

    public setViewTab(tab: ZoneTab) {
        this._view_tab.select(tab);
    }
}
