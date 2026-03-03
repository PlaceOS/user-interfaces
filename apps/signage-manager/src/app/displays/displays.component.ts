import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { settingSignal } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { map } from 'rxjs/operators';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { SignageService } from '../signage.service';
import { DisplayContentComponent } from './display-content.component';
import { DisplayHeaderComponent } from './display-header.component';
import { DisplayListComponent } from './display-list.component';

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
                                    matRipple
                                    class="sm:hidden"
                                    (click)="deselectDisplay()"
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
                                            class="truncate text-sm opacity-60"
                                        >
                                            {{ selected_display().description }}
                                        </div>
                                    }
                                </div>
                                <a
                                    icon
                                    matRipple
                                    matTooltip="Open signage panel"
                                    [href]="panel_link()"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <icon>open_in_new</icon>
                                </a>
                            </div>
                            <div
                                class="bg-base-100 border-base-300 mx-2 mt-2 flex overflow-hidden rounded-lg border"
                            >
                                <button
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
                                    (click)="view_tab.set('schedule')"
                                >
                                    Schedule
                                </button>
                                <button
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
                                    (click)="view_tab.set('playlists')"
                                >
                                    Playlists ({{ playlist_count() }})
                                </button>
                                <button
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'zones'
                                    "
                                    [class.border-b-2]="view_tab() === 'zones'"
                                    [class.text-primary]="
                                        view_tab() === 'zones'
                                    "
                                    [class.opacity-60]="view_tab() !== 'zones'"
                                    (click)="view_tab.set('zones')"
                                >
                                    Zones ({{ zone_count() }})
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
    ],
})
export class DisplaysSectionComponent {
    private readonly _service = inject(SignageService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);

    public readonly signage_path = settingSignal('signage_path');
    public readonly view_tab = signal<'schedule' | 'playlists' | 'zones'>(
        'schedule',
    );
    public readonly selected_display = this._service.selected_display;

    private readonly _displays = toSignal(this._service.displays, {
        initialValue: [],
    });
    private readonly _playlists = toSignal(this._service.playlists, {
        initialValue: [],
    });
    private readonly _zones = toSignal(this._service.zones, {
        initialValue: [],
    });
    private readonly _route_id = toSignal(
        this._route.paramMap.pipe(map((p) => p.get('id') || '')),
        { initialValue: '' },
    );

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
            this.selected_display();
            this.view_tab.set('schedule');
        });

        effect(() => {
            const id = this._route_id();
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
}
