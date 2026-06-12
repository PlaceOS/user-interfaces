import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignageMedia } from '@placeos/ts-client';
import { map } from 'rxjs/operators';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { SignageService } from '../signage.service';
import { PlaylistHeaderComponent } from './playlist-header.component';
import { PlaylistItemDetailsComponent } from './playlist-item-details.component';
import { PlaylistItemsComponent } from './playlist-items.component';
import { PlaylistListComponent } from './playlist-list.component';

const TAB_QUERY_PARAM = 'tab';
const ITEM_QUERY_PARAM = 'item';

function parsePlaylistTab(value: string | null): 'items' | 'details' {
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
                                class="bg-base-100 border-base-300 mx-2 hidden items-center gap-2 rounded-b-lg border px-4 py-3 max-lg:flex"
                            >
                                <button
                                    icon
                                    type="button"
                                    matRipple
                                    class="sm:hidden"
                                    (click)="deselectPlaylist()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.BACK_TO_PLAYLISTS'
                                            | translate
                                    "
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
                                @if (requires_approval()) {
                                    @if (can_approve()) {
                                        <button
                                            icon
                                            type="button"
                                            matRipple
                                            class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                                            [matTooltip]="
                                                'SIGNAGE_MANAGER.APPROVE_PLAYLIST_TOOLTIP'
                                                    | translate
                                            "
                                            (click)="approvePlaylist()"
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.APPROVE_SELECTED_PLAYLIST'
                                                    | translate
                                            "
                                        >
                                            <icon class="text-warning"
                                                >order_approve</icon
                                            >
                                        </button>
                                    } @else {
                                        <button
                                            icon
                                            type="button"
                                            matRipple
                                            class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                                            [matTooltip]="
                                                'SIGNAGE_MANAGER.REQUEST_PLAYLIST_APPROVAL_TOOLTIP'
                                                    | translate
                                            "
                                            (click)="requestApproval()"
                                            [disabled]="
                                                approval_request_loading()
                                            "
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.REQUEST_APPROVAL_SELECTED'
                                                    | translate
                                            "
                                        >
                                            @if (approval_request_loading()) {
                                                <mat-spinner diameter="20" />
                                            } @else {
                                                <icon class="text-warning"
                                                    >approval</icon
                                                >
                                            }
                                        </button>
                                    }
                                }
                                @if (can_update()) {
                                    <button
                                        icon
                                        type="button"
                                        matRipple
                                        class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.EDIT_PLAYLIST_TOOLTIP'
                                                | translate
                                        "
                                        (click)="editPlaylist()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.EDIT_SELECTED_PLAYLIST'
                                                | translate
                                        "
                                    >
                                        <icon>edit</icon>
                                    </button>
                                }
                                @if (can_share()) {
                                    <button
                                        icon
                                        type="button"
                                        matRipple
                                        class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.SHARE_PLAYLIST_TOOLTIP'
                                                | translate
                                        "
                                        (click)="sharePlaylist()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.SHARE_SELECTED_PLAYLIST'
                                                | translate
                                        "
                                    >
                                        <icon>ios_share</icon>
                                    </button>
                                }
                                @if (can_delete()) {
                                    <button
                                        icon
                                        type="button"
                                        matRipple
                                        class="border-base-200 hover:bg-base-200 hover:border-base-300 rounded-lg border hover:shadow-md"
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.DELETE_PLAYLIST_TOOLTIP'
                                                | translate
                                        "
                                        (click)="removePlaylist()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.DELETE_SELECTED_PLAYLIST'
                                                | translate
                                        "
                                    >
                                        <icon class="text-error">delete</icon>
                                    </button>
                                }
                            </div>
                            <div
                                class="bg-base-100 border-base-300 mx-2 my-2 flex rounded-lg border lg:hidden"
                                role="tablist"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.PLAYLIST_DETAILS_TABS'
                                        | translate
                                "
                            >
                                <button
                                    type="button"
                                    role="tab"
                                    class="flex-1 px-4 py-2.5 text-sm font-medium transition-colors"
                                    [class.border-primary]="
                                        view_tab() === 'items'
                                    "
                                    [class.border-b-2]="view_tab() === 'items'"
                                    [class.text-primary]="
                                        view_tab() === 'items'
                                    "
                                    [class.opacity-60]="view_tab() !== 'items'"
                                    (click)="setViewTab('items')"
                                    [attr.aria-selected]="
                                        view_tab() === 'items'
                                    "
                                    aria-controls="playlist-items-panel"
                                    id="playlist-items-tab"
                                >
                                    {{ 'SIGNAGE_MANAGER.TAB_ITEMS' | translate }}
                                </button>
                                <button
                                    type="button"
                                    role="tab"
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
                                    (click)="setViewTab('details')"
                                    [attr.aria-selected]="
                                        view_tab() === 'details'
                                    "
                                    aria-controls="playlist-details-panel"
                                    id="playlist-details-tab"
                                >
                                    {{ 'COMMON.DETAILS' | translate }}
                                </button>
                            </div>
                        }
                        <div class="flex min-h-0 flex-1 flex-row">
                            <playlist-items
                                id="playlist-items-panel"
                                role="tabpanel"
                                aria-labelledby="playlist-items-tab"
                                class="w-px max-w-full flex-1"
                                [class.tablet-hidden]="view_tab() === 'details'"
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
        MatProgressSpinnerModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class PlaylistsSectionComponent {
    private readonly _service = inject(SignageService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);

    public readonly view_tab = signal<'items' | 'details'>('items');
    public readonly selected_playlist = this._service.selected_playlist;
    public readonly requires_approval =
        this._service.selected_playlist_requires_approval;
    public readonly can_approve = this._service.can_approve;
    public readonly can_update = this._service.can_update;
    public readonly can_delete = this._service.can_delete;
    public readonly can_share = this._service.can_share;
    public readonly approval_request_loading =
        this._service.playlist_approval_request_loading;

    private readonly _playlists = toSignal(this._service.playlists, {
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
    private readonly _route_item_id = toSignal(
        this._route.queryParamMap.pipe(map((p) => p.get(ITEM_QUERY_PARAM))),
        { initialValue: null as string | null },
    );
    private readonly _playlist_items = toSignal(
        this._service.playlist_media_items$,
        {
            initialValue: [] as SignageMedia[],
        },
    );

    private _route_resolved = false;

    constructor() {
        effect(() => {
            const route_tab = parsePlaylistTab(this._route_tab());
            if (route_tab !== this.view_tab()) {
                this.view_tab.set(route_tab);
            }
        });

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

        // Sync selected media item from query param
        effect(() => {
            const item_id = this._route_item_id();
            if (!item_id) return;
            const items = this._playlist_items();
            if (!items.length) return;
            const matched_item = items.find((item) => item.id === item_id);
            this._service.selected_playlist_item.set(matched_item || null);
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

    public approvePlaylist() {
        const playlist = this.selected_playlist();
        if (playlist) this._service.approvePlaylist(playlist);
    }

    public requestApproval() {
        const playlist = this.selected_playlist();
        if (playlist) this._service.requestPlaylistApproval(playlist);
    }

    public sharePlaylist() {
        const playlist = this.selected_playlist();
        if (playlist) this._service.sharePlaylist(playlist);
    }

    public deselectPlaylist() {
        this._service.selected_playlist.set(null);
        this._service.selected_playlist_item.set(null);
        this._router.navigate(['/playlists'], {});
    }

    public setViewTab(tab: 'items' | 'details') {
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
