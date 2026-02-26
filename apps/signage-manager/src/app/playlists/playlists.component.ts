import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { IconComponent } from '@placeos/components';
import { map } from 'rxjs/operators';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { SignageService } from '../signage.service';
import { PlaylistHeaderComponent } from './playlist-header.component';
import { PlaylistItemDetailsComponent } from './playlist-item-details.component';
import { PlaylistItemsComponent } from './playlist-items.component';
import { PlaylistListComponent } from './playlist-list.component';

@Component({
    selector: 'playlists-section',
    template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row">
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col">
                <playlist-header class="relative z-10" />
                <div class="flex min-h-0 flex-1 flex-row">
                    <playlist-list
                        [class.mobile-hidden]="!!selected_playlist()"
                        class="mobile-full"
                    />
                    <div
                        class="flex min-h-0 w-px flex-1 flex-col"
                        [class.mobile-hidden]="!selected_playlist()"
                    >
                        @if (selected_playlist()) {
                            <div
                                class="bg-base-100 border-base-300 mx-2 hidden items-center gap-2 rounded-b-lg border px-4 py-3 max-lg:flex"
                            >
                                <button
                                    icon
                                    matRipple
                                    class="sm:hidden"
                                    (click)="deselectPlaylist()"
                                >
                                    <icon>arrow_back</icon>
                                </button>
                                <icon class="shrink-0 text-2xl opacity-60"
                                    >playlist_play</icon
                                >
                                <div class="min-w-0 flex-1">
                                    <h4 class="truncate text-lg font-medium">
                                        {{ selected_playlist().name }}
                                    </h4>
                                </div>
                                <button
                                    icon
                                    matRipple
                                    matTooltip="Edit playlist"
                                    (click)="editPlaylist()"
                                >
                                    <icon>edit</icon>
                                </button>
                                <button
                                    icon
                                    matRipple
                                    matTooltip="Delete playlist"
                                    (click)="removePlaylist()"
                                >
                                    <icon class="text-error">delete</icon>
                                </button>
                            </div>
                            <div
                                class="bg-base-100 border-base-300 mx-2 my-2 flex rounded-lg border lg:hidden"
                            >
                                <button
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'items'
                                    "
                                    [class.border-b-2]="view_tab() === 'items'"
                                    [class.text-primary]="
                                        view_tab() === 'items'
                                    "
                                    [class.opacity-60]="view_tab() !== 'items'"
                                    (click)="view_tab.set('items')"
                                >
                                    Items
                                </button>
                                <button
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'details'
                                    "
                                    [class.border-b-2]="
                                        view_tab() === 'details'
                                    "
                                    [class.text-primary]="
                                        view_tab() === 'details'
                                    "
                                    [class.opacity-60]="
                                        view_tab() !== 'details'
                                    "
                                    (click)="view_tab.set('details')"
                                >
                                    Details
                                </button>
                            </div>
                        }
                        <div class="flex min-h-0 flex-1 flex-row">
                            <playlist-items
                                class="flex-1"
                                [class.tablet-hidden]="view_tab() === 'details'"
                            />
                            <playlist-item-details
                                class="bg-base-100"
                                [class.tablet-hidden]="view_tab() === 'items'"
                                [class.tablet-full]="view_tab() === 'details'"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <nav-footer />
        </div>
    `,
    styles: [
        `
            .tablet-hidden {
                @media (max-width: 1023px) {
                    display: none !important;
                }
            }

            .tablet-full {
                @media (max-width: 1023px) {
                    flex: 1;
                    min-width: 0;
                }
            }

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
        PlaylistHeaderComponent,
        PlaylistListComponent,
        PlaylistItemsComponent,
        PlaylistItemDetailsComponent,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
    ],
})
export class PlaylistsSectionComponent {
    private readonly _service = inject(SignageService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);

    public readonly view_tab = signal<'items' | 'details'>('items');
    public readonly selected_playlist = this._service.selected_playlist;

    private readonly _playlists = toSignal(this._service.playlists, {
        initialValue: [],
    });
    private readonly _route_id = toSignal(
        this._route.paramMap.pipe(map((p) => p.get('id') || '')),
        { initialValue: '' },
    );

    private _route_resolved = false;

    constructor() {
        // Sync selected playlist from route param
        effect(() => {
            const id = this._route_id();
            const list = this._playlists();
            if (!list.length) return;
            if (id) {
                const match = list.find((p) => p.id === id);
                if (
                    match &&
                    this._service.selected_playlist()?.id !== match.id
                ) {
                    this._service.selected_playlist.set(match);
                    this._service.selected_playlist_item.set(null);
                }
                this._route_resolved = true;
            } else if (this._route_resolved) {
                this._service.selected_playlist.set(null);
                this._service.selected_playlist_item.set(null);
            }
        });

        // Reset to items tab when playlist changes
        effect(() => {
            this.selected_playlist();
            this.view_tab.set('items');
        });
    }

    public editPlaylist() {
        const playlist = this.selected_playlist();
        if (playlist) this._service.editPlaylist(playlist);
    }

    public removePlaylist() {
        const playlist = this.selected_playlist();
        if (playlist) this._service.removePlaylist(playlist);
    }

    public deselectPlaylist() {
        this._service.selected_playlist.set(null);
        this._service.selected_playlist_item.set(null);
        this._router.navigate(['/playlists'], {});
    }
}
