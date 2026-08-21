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
import { settingSignal } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { SignageService } from '../signage.service';
import { DisplayContentComponent } from './display-content.component';
import { DisplayHeaderComponent } from './display-header.component';
import { DisplayListComponent } from './display-list.component';

const TAB_QUERY_PARAM = 'tab';

function parseDisplayTab(
    value: string | null,
): 'schedule' | 'playlists' | 'zones' {
    if (value === 'playlists' || value === 'zones') {
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
                                    class="sm:hidden"
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
                            <div
                                class="bg-base-100 border-base-300 mx-2 mt-2 flex overflow-hidden rounded-lg border"
                                role="tablist"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.DISPLAY_DETAILS_TABS'
                                        | translate
                                "
                            >
                                <button
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'schedule'
                                    "
                                    [class.border-b-2]="
                                        view_tab() === 'schedule'
                                    "
                                    [class.text-primary]="
                                        view_tab() === 'schedule'
                                    "
                                    [class.opacity-60]="
                                        view_tab() !== 'schedule'
                                    "
                                    (click)="setViewTab('schedule')"
                                    [attr.aria-selected]="
                                        view_tab() === 'schedule'
                                    "
                                    aria-controls="display-schedule-panel"
                                    id="display-schedule-tab"
                                >
                                    {{ 'SIGNAGE_MANAGER.SCHEDULE' | translate }}
                                </button>
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
                                    aria-controls="display-playlists-panel"
                                    id="display-playlists-tab"
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
                                        view_tab() === 'zones'
                                    "
                                    [class.border-b-2]="view_tab() === 'zones'"
                                    [class.text-primary]="
                                        view_tab() === 'zones'
                                    "
                                    [class.opacity-60]="view_tab() !== 'zones'"
                                    (click)="setViewTab('zones')"
                                    [attr.aria-selected]="
                                        view_tab() === 'zones'
                                    "
                                    aria-controls="display-zones-panel"
                                    id="display-zones-tab"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.ZONES_COUNT'
                                            | translate
                                                : { count: zone_count() }
                                                : zone_count()
                                    }}
                                </button>
                            </div>
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
        DisplayHeaderComponent,
        DisplayListComponent,
        DisplayContentComponent,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class DisplaysSectionComponent {
    private readonly _service = inject(SignageService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);

    public readonly id = input('');
    public readonly tab = input<string | null>(null);
    public readonly signage_path = settingSignal('signage_path');
    public readonly view_tab = signal<'schedule' | 'playlists' | 'zones'>(
        'schedule',
    );
    public readonly selected_display = this._service.selected_display;
    public readonly can_update = this._service.can_update;
    public readonly can_delete_displays = this._service.can_delete_displays;

    private readonly _displays = this._service.displays;
    private readonly _playlists = this._service.playlists;
    private readonly _zones = this._service.all_zones;

    public readonly playlist_count = computed(() => {
        const display = this.selected_display();
        if (!display) return 0;
        return this._playlists().filter((p) =>
            display.playlists?.includes(p.id),
        ).length;
    });

    public readonly zone_count = computed(() => {
        const display = this.selected_display();
        if (!display) return 0;
        return this._zones().filter((z) => display.zones?.includes(z.id))
            .length;
    });
    public readonly panel_link = computed(() => {
        const display = this.selected_display();
        if (!display?.id) return '';
        const signage_path = this.signage_path() || '/signage';
        return `${signage_path.replace(/\/$/, '')}/#/signage/${encodeURIComponent(display.id)}?debug=true`;
    });

    private _route_resolved = false;

    constructor() {
        effect(() => {
            const route_tab = parseDisplayTab(this.tab());
            if (route_tab !== this.view_tab()) {
                this.view_tab.set(route_tab);
            }
        });

        effect(() => {
            const id = this.id();
            const list = this._displays();
            if (!list.length) return;
            if (id) {
                const match = list.find((d) => d.id === id);
                if (
                    match &&
                    this._service.selected_display()?.id !== match.id
                ) {
                    this._service.selected_display.set(match);
                }
                this._route_resolved = true;
            } else if (this._route_resolved) {
                this._service.selected_display.set(null);
            }
        });
    }

    public deselectDisplay() {
        this._service.selected_display.set(null);
        this._router.navigate(['/displays'], {});
    }

    public editDisplay() {
        const display = this.selected_display();
        if (display) this._service.editDisplay(display);
    }

    public async removeDisplay() {
        const display = this.selected_display();
        if (!display || !(await this._service.removeDisplay(display))) return;
        await this._router.navigate(['/displays'], {});
    }

    public setViewTab(tab: 'schedule' | 'playlists' | 'zones') {
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
