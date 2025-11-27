import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
    Component,
    OnChanges,
    SimpleChanges,
    computed,
    effect,
    inject,
    input,
    output,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignagePlaylist } from '@placeos/ts-client';
import { SignageStateService } from './signage-state.service';

interface PlaylistCount {
    count: number;
    last_updated: number;
}

const PLAYLIST_ITEM_COUNTS = signal<Record<string, PlaylistCount>>({});

@Component({
    selector: `signage-item-playlists`,
    template: `
        <div
            class="flex items-center justify-center space-x-2 rounded-xl bg-base-100 p-2"
        >
            <h3 class="text-xl font-medium">
                {{ item()?.display_name || item()?.name }}
            </h3>
            @if (extra()) {
                <div
                    class="rounded-lg bg-base-200 px-2 py-1 font-mono text-xs uppercase"
                >
                    {{ extra() }}
                </div>
            }
            @if (link()) {
                <a
                    icon
                    matRipple
                    [href]="link()"
                    target="_blank"
                    class="text-xs"
                    [matTooltip]="
                        'APP.CONCIERGE.SIGNAGE_DISPLAYS_OPEN_PLAYER' | translate
                    "
                    rel="noopener noreferrer"
                >
                    <icon>open_in_new</icon>
                </a>
            }
        </div>
        <ng-content />
        @if (active_playlists().length > 0 && item()) {
            <div
                cdkDropList
                class="mt-4 flex h-1/2 flex-1 flex-col space-y-2 overflow-auto"
                (cdkDropListDropped)="ondrop.emit($event)"
            >
                @for (item of active_playlists(); track item?.id) {
                    <div
                        cdkDrag
                        class="flex h-20 w-full items-center space-x-2 rounded-lg border border-base-300 bg-base-100 p-2"
                    >
                        <div
                            class="h-20 w-full rounded-xl border-4 border-dashed border-base-400 bg-base-300"
                            *cdkDragPlaceholder
                        ></div>
                        <button
                            matRipple
                            cdkDragHandle
                            class="!m-0 flex h-full w-6 items-center justify-center rounded hover:bg-base-200"
                            [matTooltip]="
                                'APP.CONCIERGE.SIGNAGE_MEDIA_REORDER'
                                    | translate
                            "
                        >
                            <icon>drag_handle</icon>
                        </button>
                        <div class="w-1/2 flex-1 text-base-content">
                            <div class="truncate">
                                {{ item.name }}
                            </div>
                            <div class="truncate text-sm opacity-30">
                                {{
                                    'APP.CONCIERGE.SIGNAGE_MEDIA_COUNT'
                                        | translate
                                            : {
                                                  count:
                                                      playlist_count()[item.id]
                                                          ?.count || 0,
                                              }
                                }}
                            </div>
                        </div>
                        @if (isScheduled(item)) {
                            <div
                                class="rounded border border-info bg-base-100 bg-info-light p-1 text-lg"
                                [matTooltip]="'COMMON.SCHEDULED' | translate"
                            >
                                <icon>event</icon>
                            </div>
                        }
                        <button
                            icon
                            matRipple
                            aria-label="Media Actions"
                            [matMenuTriggerFor]="menu"
                        >
                            <icon>more_vert</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <a
                                mat-menu-item
                                [routerLink]="['/signage', 'media']"
                                [queryParams]="{
                                    playlist: item.id,
                                }"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl"> visibility </icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_VIEW'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </a>
                            <button mat-menu-item (click)="remove.emit(item)">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl text-error">
                                        delete
                                    </icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_REMOVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </div>
                }
            </div>
            <button btn matRipple (click)="add.emit()">
                <div class="flex items-center space-x-2">
                    <icon class="text-2xl">playlist_add</icon>
                    <div class="pr-2">
                        {{ 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD' | translate }}
                    </div>
                </div>
            </button>
        } @else {
            <div
                class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <div
                    class="flex flex-col items-center justify-center opacity-30"
                >
                    <icon class="text-6xl">hide_image</icon>
                    <p>
                        {{
                            'APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLISTS_EMPTY'
                                | translate: { name: name() }
                        }}
                    </p>
                </div>
                <button btn matRipple (click)="add.emit()" class="w-48">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">playlist_add</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatMenuModule,
        DragDropModule,
        MatTooltipModule,
    ],
})
export class SignageItemPlaylistsComponent implements OnChanges {
    private _state = inject(SignageStateService);

    public readonly item = input<any>(undefined);
    public readonly name = input('zone');
    public readonly extra = input('');
    public readonly link = input('');
    public readonly add = output();
    public readonly remove = output<SignagePlaylist>();
    public readonly ondrop = output<any>();

    private _playlist_ids = signal<string[]>([]);
    private _playlists = toSignal(this._state.playlists, {
        initialValue: [],
    });
    private _has_changed = toSignal(this._state.has_changed, {
        initialValue: 0,
    });

    private _update_counts = effect(() => {
        const playlists = this.active_playlists();
        for (const item of playlists) {
            const old_counts = this.playlist_count()[item.id];
            if (
                old_counts &&
                old_counts.last_updated > item.updated_at * 1000
            ) {
                continue;
            }
            this._state.getPlaylistMedia(item.id).then((media) => {
                this.playlist_count.update((m) => {
                    m[item.id] = {
                        count: media.length,
                        last_updated: Date.now(),
                    };
                    return m;
                });
            });
        }
    });

    public readonly active_playlists = computed(() => {
        const playlists = this._playlists();
        const ids = this._playlist_ids();
        // Trigger re-computation when state changes
        this._has_changed();
        return ids
            .map((id) => playlists.find((_) => _.id === id))
            .filter((_) => !!_);
    });

    public isScheduled(item: SignagePlaylist): boolean {
        return (
            !!item.play_at || !!item.play_cron || item.play_hours.includes('-')
        );
    }

    public readonly playlist_count = PLAYLIST_ITEM_COUNTS;

    public playlistCount(id: string) {
        return PLAYLIST_ITEM_COUNTS()[id]?.count || 0;
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.item) {
            this._playlist_ids.set(this.item()?.playlists || []);
        }
    }
}
