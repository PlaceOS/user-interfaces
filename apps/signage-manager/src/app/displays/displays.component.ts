import { Component, computed, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { settingSignal } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignagePlaylistService } from '../playlists/signage-playlist.service';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { routedTab } from '../shared/routed-tab.util';
import {
    SectionTab,
    SectionTabsComponent,
} from '../shared/section-tabs.component';
import { SignageContextService } from '../signage-context.service';
import { signagePlayerUrl } from '../signage-url.util';
import { DisplayContentComponent } from './display-content.component';
import { DisplayHeaderComponent } from './display-header.component';
import { DisplayListComponent } from './display-list.component';
import { selectRoutedItem } from './routed-selection.util';
import { showSignageDisplay } from './signage-display';
import { SignageDisplayService } from './signage-display.service';

type DisplayTab = 'schedule' | 'templates' | 'playlists' | 'zones';

function parseDisplayTab(value: string | null): DisplayTab {
    if (value === 'templates' || value === 'playlists' || value === 'zones') {
        return value;
    }
    return 'schedule';
}

@Component({
    selector: 'displays-section',
    template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
                <display-header class="relative z-10" />
                <div class="flex min-h-0 flex-1 flex-row">
                    <display-list
                        [class.mobile-hidden]="!!selected_display()"
                        class="mobile-full"
                    />
                    <div
                        class="flex min-h-0 w-px flex-1 flex-col"
                        [class.mobile-hidden]="!selected_display()"
                    >
                        @if (selected_display()) {
                            <div
                                class="bg-base-100 border-base-300 mx-2 flex items-center gap-2 rounded-b-lg border px-2 py-1"
                            >
                                <button
                                    icon
                                    type="button"
                                    matRipple
                                    class="desktop-hidden"
                                    (click)="deselectDisplay()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.BACK_TO_DISPLAYS'
                                            | translate
                                    "
                                >
                                    <icon>arrow_back</icon>
                                </button>
                                <icon class="shrink-0 text-2xl opacity-60"
                                    >tv</icon
                                >
                                <div class="min-w-0 flex-1 py-2">
                                    <h4 class="truncate text-lg font-medium">
                                        {{
                                            selected_display().display_name ||
                                                selected_display().name
                                        }}
                                    </h4>
                                    @if (selected_display().description) {
                                        <div
                                            class="text-base-content/80 truncate text-sm"
                                        >
                                            {{ selected_display().description }}
                                        </div>
                                    }
                                    <div
                                        class="text-base-content/60 truncate text-xs capitalize"
                                    >
                                        {{ selected_display().orientation }}
                                    </div>
                                </div>
                                @if (can_update()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.EDIT_DISPLAY_TOOLTIP'
                                                | translate
                                        "
                                        (click)="editDisplay()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.EDIT_SELECTED_DISPLAY'
                                                | translate
                                        "
                                    >
                                        <icon>edit</icon>
                                    </button>
                                }
                                @if (can_delete_displays()) {
                                    <button
                                        icon
                                        default
                                        error
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.DELETE_DISPLAY_TOOLTIP'
                                                | translate
                                        "
                                        (click)="removeDisplay()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.DELETE_SELECTED_DISPLAY'
                                                | translate
                                        "
                                    >
                                        <icon>delete</icon>
                                    </button>
                                }
                                <a
                                    icon
                                    default
                                    matRipple
                                    [matTooltip]="
                                        'SIGNAGE_MANAGER.OPEN_PANEL' | translate
                                    "
                                    [href]="panel_link()"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.OPEN_PANEL_NEW_TAB'
                                            | translate
                                    "
                                >
                                    <icon>open_in_new</icon>
                                </a>
                            </div>
                            <section-tabs
                                class="bg-base-100 border-base-300 mx-2 mt-2 flex overflow-hidden rounded-lg border"
                                id_prefix="display"
                                [tabs]="tabs()"
                                [active]="view_tab()"
                                (activeChange)="setViewTab($event)"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.DISPLAY_DETAILS_TABS'
                                        | translate
                                "
                            />
                        }
                        <display-content
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
        DisplayHeaderComponent,
        DisplayListComponent,
        DisplayContentComponent,
        SectionTabsComponent,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class DisplaysSectionComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _display_service = inject(SignageDisplayService);
    private readonly _playlist_service = inject(SignagePlaylistService);
    private readonly _router = inject(Router);

    public readonly id = input('');
    public readonly tab = input<string | null>(null);
    public readonly signage_path = settingSignal('signage_path');
    public readonly templates_enabled = this._context.templates_enabled;
    private readonly _view_tab = routedTab(this.tab, (value) => {
        const tab = parseDisplayTab(value);
        return tab === 'templates' && !this.templates_enabled()
            ? 'schedule'
            : tab;
    });
    public readonly view_tab = this._view_tab.active;
    public readonly selected_display = this._display_service.selected_display;
    public readonly can_update = this._context.can_update;
    public readonly can_delete_displays = this._context.can_delete_displays;

    public readonly template_count_loading =
        this._display_service.selected_display_template_mappings_loading;
    public readonly playlist_count_loading =
        this._playlist_service.playlists_loading;
    public readonly zone_count_loading =
        this._display_service.selected_display_zones_loading;
    public readonly template_count = computed(
        () => this._display_service.selected_display_template_mappings().length,
    );

    public readonly playlist_count = computed(
        () =>
            this._playlist_service.playlistsById(
                this.selected_display()?.playlists || [],
            ).length,
    );

    public readonly zone_count = computed(
        () => this._display_service.selected_display_zones().length,
    );
    public readonly tabs = computed<SectionTab<DisplayTab>[]>(() => [
        { id: 'schedule', label: 'SIGNAGE_MANAGER.SCHEDULE' },
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
        {
            id: 'playlists',
            label: 'SIGNAGE_MANAGER.NAV_PLAYLISTS',
            count: this.playlist_count(),
            count_loading: this.playlist_count_loading(),
        },
        {
            id: 'zones',
            label: 'SIGNAGE_MANAGER.NAV_ZONES',
            count: this.zone_count(),
            count_loading: this.zone_count_loading(),
        },
    ]);
    public readonly panel_link = computed(() => {
        const display = this.selected_display();
        if (!display?.id) return '';
        return signagePlayerUrl(
            this.signage_path(),
            `signage/${encodeURIComponent(display.id)}`,
        );
    });

    constructor() {
        selectRoutedItem({
            id: this.id,
            list: this._display_service.displays,
            selected: this._display_service.selected_display,
            // The list holds only the pages loaded so far
            load: showSignageDisplay,
        });
    }

    public deselectDisplay() {
        this._display_service.selected_display.set(null);
        this._router.navigate(['/displays'], {});
    }

    public editDisplay() {
        const display = this.selected_display();
        if (display) this._display_service.editDisplay(display);
    }

    public async removeDisplay() {
        const display = this.selected_display();
        if (!display || !(await this._display_service.removeDisplay(display)))
            return;
        await this._router.navigate(['/displays'], {});
    }

    public setViewTab(tab: DisplayTab) {
        this._view_tab.select(tab);
    }
}
