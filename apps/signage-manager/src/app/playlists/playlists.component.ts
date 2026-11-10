import { Component, effect, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { i18n, notifyWarn } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignageMediaService } from '../media/signage-media.service';
import { FileDropDirective } from '../shared/file-drop.directive';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { routedTab } from '../shared/routed-tab.util';
import {
    SectionTab,
    SectionTabsComponent,
} from '../shared/section-tabs.component';
import { SignageContextService } from '../signage-context.service';
import { PlaylistActionsComponent } from './playlist-actions.component';
import { PlaylistHeaderComponent } from './playlist-header.component';
import { PlaylistItemDetailsComponent } from './playlist-item-details.component';
import { PlaylistItemsComponent } from './playlist-items.component';
import { PlaylistListComponent } from './playlist-list.component';
import { SignagePlaylistService } from './signage-playlist.service';

type PlaylistTab = 'items' | 'details';

function parsePlaylistTab(value: string | null): PlaylistTab {
    return value === 'details' ? 'details' : 'items';
}

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
                                class="bg-base-100 border-base-300 mx-2 hidden items-center gap-2 rounded-b-lg border p-2 max-lg:flex"
                            >
                                <button
                                    icon
                                    default
                                    type="button"
                                    matRipple
                                    class="desktop-hidden"
                                    (click)="deselectPlaylist()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.BACK_TO_PLAYLISTS'
                                            | translate
                                    "
                                >
                                    <icon>arrow_back</icon>
                                </button>
                                <div class="flex w-1/2 flex-1 flex-col px-2">
                                    <h4 class="truncate text-lg font-medium">
                                        {{ selected_playlist().name }}
                                    </h4>
                                    @if (selected_playlist().description) {
                                        <div class="-mt-1 truncate text-xs">
                                            {{
                                                selected_playlist().description
                                            }}
                                        </div>
                                    }
                                </div>
                                <div></div>
                                <playlist-actions />
                            </div>
                            <section-tabs
                                class="bg-base-100 border-base-300 mx-2 my-2 flex overflow-hidden rounded-lg border lg:hidden"
                                id_prefix="playlist"
                                [tabs]="tabs"
                                [active]="view_tab()"
                                (activeChange)="setViewTab($event)"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.PLAYLIST_DETAILS_TABS'
                                        | translate
                                "
                            />
                        }
                        <div class="flex min-h-0 flex-1 flex-row">
                            <playlist-items
                                id="playlist-items-panel"
                                role="tabpanel"
                                aria-labelledby="playlist-items-tab"
                                class="w-px max-w-full flex-1"
                                [class.tablet-hidden]="view_tab() === 'details'"
                                (fileDrop)="uploadFiles($event)"
                                [fileDropDisabled]="
                                    !selected_playlist() || !can_upload()
                                "
                            />
                            <playlist-item-details
                                id="playlist-details-panel"
                                role="tabpanel"
                                aria-labelledby="playlist-details-tab"
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
            playlist-items.file-drop-over {
                outline: 2px dashed var(--color-primary);
                outline-offset: -4px;
                background-color: color-mix(
                    in srgb,
                    var(--color-primary) 10%,
                    transparent
                );
            }
        `,
    ],
    imports: [
        FileDropDirective,
        NavSidebarComponent,
        NavFooterComponent,
        PlaylistHeaderComponent,
        PlaylistListComponent,
        PlaylistItemsComponent,
        PlaylistItemDetailsComponent,
        PlaylistActionsComponent,
        SectionTabsComponent,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class PlaylistsSectionComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _playlist_service = inject(SignagePlaylistService);
    private readonly _media_service = inject(SignageMediaService);
    private readonly _router = inject(Router);

    public readonly id = input('');
    public readonly tab = input<string | null>(null);
    public readonly item = input<string | null>(null);
    private readonly _view_tab = routedTab(this.tab, parsePlaylistTab);
    public readonly view_tab = this._view_tab.active;
    /** Tabs shown below the lg breakpoint. Wider screens show both panels. */
    public readonly tabs: SectionTab<PlaylistTab>[] = [
        { id: 'items', label: 'SIGNAGE_MANAGER.TAB_ITEMS' },
        { id: 'details', label: 'COMMON.DETAILS' },
    ];
    public readonly selected_playlist =
        this._playlist_service.selected_playlist;
    public readonly can_upload = this._context.can_upload_to_playlist;

    private readonly _playlists = this._playlist_service.playlists;
    private readonly _playlist_items =
        this._playlist_service.playlist_media_items;

    private _route_resolved = false;
    // Route id fetched on its own because the loaded pages do not include it
    private _fetched_id = '';

    constructor() {
        // Sync selected playlist from route param
        effect(() => {
            const id = this.id();
            const list = this._playlists();
            if (!id) {
                if (this._route_resolved) {
                    this._playlist_service.selected_playlist.set(null);
                    this._playlist_service.selected_playlist_item.set(null);
                    this._playlist_service.selected_playlist_item_index.set(
                        null,
                    );
                }
                return;
            }
            const match = list.find((p) => p.id === id);
            if (match) {
                if (this._playlist_service.selected_playlist() !== match) {
                    this._playlist_service.selected_playlist.set(match);
                    this._playlist_service.selected_playlist_item.set(null);
                    this._playlist_service.selected_playlist_item_index.set(
                        null,
                    );
                }
                this._route_resolved = true;
                return;
            }
            // Wait for the first page, which usually holds the playlist,
            // before fetching it on its own. The page can also be empty,
            // e.g. for a search with no results.
            if (
                !this._context.canQueryLists() ||
                this._playlist_service.playlists_loading()
            ) {
                return;
            }
            if (this._fetched_id !== id) {
                this._fetched_id = id;
                void this._loadLinkedPlaylist(id);
            }
            this._route_resolved = true;
        });

        // Sync selected media item from query param
        effect(() => {
            const item_id = this.item();
            if (!item_id) return;
            const items = this._playlist_items();
            if (!items.length) return;
            const matched_index = items.findIndex(
                (item) => item.id === item_id,
            );
            const matched_item = items[matched_index];
            this._playlist_service.selected_playlist_item.set(
                matched_item || null,
            );
            this._playlist_service.selected_playlist_item_index.set(
                matched_item ? matched_index : null,
            );
        });
    }

    /**
     * Fetch a linked playlist that the loaded pages lack. When it cannot
     * load, warn and clear the selection, so no other playlist shows under
     * its link. Does nothing when the user has opened another link since.
     */
    private async _loadLinkedPlaylist(id: string) {
        if (await this._playlist_service.loadPlaylist(id)) return;
        if (this.id() !== id) return;
        notifyWarn(i18n('SIGNAGE_MANAGER.PLAYLIST_NOT_FOUND'));
        this._playlist_service.selected_playlist.set(null);
        this._playlist_service.selected_playlist_item.set(null);
        this._playlist_service.selected_playlist_item_index.set(null);
    }

    public deselectPlaylist() {
        this._playlist_service.selected_playlist.set(null);
        this._playlist_service.selected_playlist_item.set(null);
        this._playlist_service.selected_playlist_item_index.set(null);
        this._router.navigate(['/playlists'], {});
    }

    /** Upload files dropped on the selected playlist, then add them to it */
    public async uploadFiles(files: File[]) {
        const playlist = this.selected_playlist();
        if (!playlist) return;
        await this._media_service.uploadFilesToPlaylist(playlist.id, files);
    }

    public setViewTab(tab: PlaylistTab) {
        this._view_tab.select(tab);
    }
}
