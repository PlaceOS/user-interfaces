import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { SignagePlaylist } from '@placeos/ts-client';
import { SignageService } from '../signage.service';

type PlaylistStatus =
    | 'expired'
    | 'pending'
    | 'awaiting_approval'
    | 'awaiting_review'
    | null;

@Component({
    selector: 'playlist-sidebar',
    template: `
        <div
            class="border-base-300 bg-base-100 rounded-ld m-2 hidden h-[calc(100%-1rem)] w-72 shrink-0 flex-col rounded-lg border md:flex"
        >
            <div class="border-base-300 border-b px-4 py-3">
                <h4 class="text-lg font-medium">
                    {{ 'SIGNAGE_MANAGER.NAV_PLAYLISTS' | translate }}
                </h4>
                <p class="mb-2 text-xs opacity-60">
                    {{ 'SIGNAGE_MANAGER.DRAG_MEDIA_HINT' | translate }}
                </p>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript -mx-2 w-[calc(100%+1rem)]"
                >
                    <input
                        matInput
                        [placeholder]="
                            'SIGNAGE_MANAGER.SEARCH_PLAYLISTS' | translate
                        "
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.SEARCH_PLAYLISTS' | translate
                        "
                    />
                </mat-form-field>
            </div>
            <div class="flex-1 overflow-auto p-2">
                @if (filtered_playlists()?.length) {
                    @for (playlist of filtered_playlists(); track playlist.id) {
                        <a
                            [routerLink]="['/playlists', playlist.id]"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.OPEN_PLAYLIST'
                                    | translate: { name: playlist.name }
                            "
                        >
                            <div
                                cdkDropList
                                [id]="'playlist-' + $index"
                                [cdkDropListConnectedTo]="['media-list']"
                                [cdkDropListData]="playlist"
                                (cdkDropListDropped)="onDrop(playlist, $event)"
                                class="border-base-300 mb-2 flex items-center gap-3 rounded-lg border p-0.5 transition-colors"
                                matRipple
                            >
                                <div
                                    class="relative h-12 w-12 shrink-0 overflow-hidden rounded-md"
                                >
                                    @if (
                                        playlist_thumbnail_media()[playlist.id]
                                            ?.length
                                    ) {
                                        @for (
                                            media of playlist_thumbnail_media()[
                                                playlist.id
                                            ];
                                            track media;
                                            let i = $index;
                                            let len = $count
                                        ) {
                                            <img
                                                auth
                                                [source]="media"
                                                alt=""
                                                class="border-base-300 bg-base-200 absolute h-9 w-9 rounded-sm border object-cover shadow"
                                                [style.top]="
                                                    0.3 -
                                                    (len - 1) * 0.125 +
                                                    (len - 1 - i) * 0.25 +
                                                    'rem'
                                                "
                                                [style.left]="
                                                    0.3 -
                                                    (len - 1) * 0.125 +
                                                    (len - 1 - i) * 0.25 +
                                                    'rem'
                                                "
                                                [style.z-index]="i"
                                            />
                                        }
                                    } @else {
                                        <div
                                            class="text-base-content/35 flex h-full w-full items-center justify-center"
                                        >
                                            <icon class="text-2xl">
                                                playlist_play
                                            </icon>
                                        </div>
                                    }
                                </div>
                                <div class="min-w-0 flex-1">
                                    <div class="truncate text-sm font-medium">
                                        {{ playlist.name }}
                                    </div>
                                    <div
                                        class="flex flex-wrap gap-1 text-[0.625rem]"
                                    >
                                        @if (!playlist.enabled) {
                                            <span
                                                class="bg-base-200 shrink-0 rounded px-1.5 py-0.5 font-bold uppercase"
                                            >
                                                {{
                                                    'COMMON.DISABLED'
                                                        | translate
                                                }}
                                            </span>
                                        }
                                        @switch (getStatus(playlist)) {
                                            @case ('expired') {
                                                <span
                                                    class="bg-error text-error-content shrink-0 rounded px-1.5 py-0.5 font-bold uppercase"
                                                >
                                                    {{
                                                        'SIGNAGE_MANAGER.STATUS_EXPIRED'
                                                            | translate
                                                    }}
                                                </span>
                                            }
                                            @case ('pending') {
                                                <span
                                                    class="bg-info text-info-content shrink-0 rounded px-1.5 py-0.5 font-bold uppercase"
                                                >
                                                    {{
                                                        'COMMON.PENDING'
                                                            | translate
                                                    }}
                                                </span>
                                            }
                                            @case ('awaiting_review') {
                                                <span
                                                    class="bg-base-300 shrink-0 rounded px-1.5 py-0.5 font-bold uppercase"
                                                >
                                                    {{
                                                        'SIGNAGE_MANAGER.STATUS_AWAITING_REVIEW'
                                                            | translate
                                                    }}
                                                </span>
                                            }
                                            @case ('awaiting_approval') {
                                                <span
                                                    class="bg-warning text-warning-content shrink-0 rounded px-1.5 py-0.5 font-bold uppercase"
                                                >
                                                    {{
                                                        'COMMON.APPROVAL_REQUIRED'
                                                            | translate
                                                    }}
                                                </span>
                                            }
                                        }
                                    </div>
                                    @if (playlist.description) {
                                        <div
                                            class="text-base-content/70 mt-0.5 truncate text-xs"
                                        >
                                            {{ playlist.description }}
                                        </div>
                                    }
                                </div>
                            </div>
                        </a>
                    }
                } @else {
                    <div
                        class="text-base-content/70 flex flex-col items-center justify-center p-8"
                    >
                        <icon class="text-4xl">playlist_play</icon>
                        <p class="mt-2 text-sm">
                            {{
                                'SIGNAGE_MANAGER.NO_PLAYLISTS_SHORT' | translate
                            }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: contents;
            }

            .cdk-drop-list-dragging,
            .cdk-drop-list-receiving {
                border-color: var(--color-primary) !important;
                background-color: color-mix(
                    in srgb,
                    var(--color-primary) 10%,
                    transparent
                ) !important;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        DragDropModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        AuthenticatedImageDirective,
        IconComponent,
        RouterLink,
        MatRippleModule,
        TranslatePipe,
    ],
})
export class PlaylistSidebarComponent {
    private readonly _service = inject(SignageService);

    private readonly _playlists = toSignal(this._service.playlists, {
        initialValue: [] as SignagePlaylist[],
    });

    public readonly search = signal('');
    public readonly playlist_thumbnail_media =
        this._service.playlist_thumbnail_media;
    public readonly playlist_approval_status =
        this._service.playlist_approval_status;
    public readonly playlist_approval_requested_status =
        this._service.playlist_approval_requested_status;
    public readonly filtered_playlists = computed(() => {
        const term = this.search().toLowerCase();
        const list = this._playlists();
        if (!term) return list;
        return list.filter((p) => p.name.toLowerCase().includes(term));
    });

    private readonly _load_playlist_thumbnails = effect(() => {
        this._service.queuePlaylistMeta(this.filtered_playlists());
    });

    public async onDrop(playlist: SignagePlaylist, event: CdkDragDrop<any>) {
        const media = event.previousContainer.data[event.previousIndex];
        if (!playlist?.id || !media?.id) return;
        await this._service.addMediaToPlaylist(playlist.id, media.id);
    }

    public getStatus(playlist: SignagePlaylist): PlaylistStatus {
        const now_s = Math.floor(Date.now() / 1000);
        if (playlist.valid_until && playlist.valid_until < now_s)
            return 'expired';
        if (playlist.valid_from && playlist.valid_from > now_s)
            return 'pending';
        const approvals = this.playlist_approval_status();
        const approval_requests = this.playlist_approval_requested_status();
        if (
            playlist.id in approvals &&
            !approvals[playlist.id] &&
            approval_requests[playlist.id]
        )
            return 'awaiting_review';
        if (playlist.id in approvals && !approvals[playlist.id])
            return 'awaiting_approval';
        return null;
    }
}
