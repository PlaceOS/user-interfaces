import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import { SignagePlaylist } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { SignageStateService } from './signage-state.service';

const PLAYLIST_ITEM_COUNTS = {};

@Component({
    selector: `signage-item-playlists`,
    template: `
        <div class="flex items-center justify-center space-x-2">
            <h3 class="text-xl font-medium">
                {{ item?.display_name || item?.name }}
            </h3>
            <div
                *ngIf="extra"
                class="rounded-lg bg-base-200 px-2 py-1 font-mono text-xs uppercase"
            >
                {{ extra }}
            </div>
        </div>
        <ng-content></ng-content>
        @if ((active_playlists | async).length > 0 && item) {
            <div
                cdkDropList
                class="mt-4 flex h-1/2 flex-1 flex-col space-y-2 overflow-auto"
                (cdkDropListDropped)="ondrop.next($event)"
            >
                @for (item of active_playlists | async; track item.id) {
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
                            class="flex h-full w-6 items-center justify-center rounded hover:bg-base-200"
                            [matTooltip]="
                                'APP.CONCIERGE.SIGNAGE_MEDIA_REORDER'
                                    | translate
                            "
                        >
                            <app-icon>drag_handle</app-icon>
                        </button>
                        <div class="w-1/2 flex-1 text-base-content">
                            <div class="truncate">
                                {{ item.name }}
                            </div>
                            <div class="truncate text-sm opacity-30">
                                {{
                                    'APP.CONCIERGE.SIGNAGE_MEDIA_COUNT'
                                        | translate
                                            : { count: playlistCount(item.id) }
                                }}
                            </div>
                        </div>
                        <button
                            icon
                            matRipple
                            aria-label="Media Actions"
                            [matMenuTriggerFor]="menu"
                        >
                            <app-icon>more_vert</app-icon>
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
                                    <app-icon class="text-2xl">
                                        visibility
                                    </app-icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_VIEW'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </a>
                            <button mat-menu-item (click)="remove.next(item)">
                                <div class="flex items-center space-x-2">
                                    <app-icon class="text-2xl text-error">
                                        delete
                                    </app-icon>
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
                {{ 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD' | translate }}
            </button>
        } @else {
            <div
                class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <div
                    class="flex flex-col items-center justify-center opacity-30"
                >
                    <app-icon class="text-6xl">hide_image</app-icon>
                    <p>
                        {{
                            'APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLISTS_EMPTY'
                                | translate: { name: name }
                        }}
                    </p>
                </div>
                <button btn matRipple (click)="add.emit()" class="w-40">
                    {{ 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD' | translate }}
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
    standalone: false,
})
export class SignageItemPlaylistsComponent implements OnChanges {
    @Input() public item: any;
    @Input() public name = 'zone';
    @Input() public extra = '';
    @Output() public readonly add = new EventEmitter();
    @Output() public readonly remove = new EventEmitter<SignagePlaylist>();
    @Output() public readonly ondrop = new EventEmitter<any>();

    private _playlist_ids = new BehaviorSubject<string[]>([]);

    public readonly active_playlists = combineLatest([
        this._state.playlists,
        this._playlist_ids,
        this._state.has_changed,
    ]).pipe(
        map(([playlists, ids]) =>
            ids.map((id) => playlists.find((_) => _.id === id)),
        ),
        tap((playlists) => {
            for (const item of playlists) {
                const old_counts = PLAYLIST_ITEM_COUNTS[item.id];
                if (
                    old_counts &&
                    old_counts.last_updated > item.updated_at * 1000
                ) {
                    continue;
                }
                this._state.getPlaylistMedia(item.id).then((media) => {
                    PLAYLIST_ITEM_COUNTS[item.id] = {
                        count: media.length,
                        last_updated: Date.now(),
                    };
                });
            }
        }),
        startWith([]),
    );

    public playlistCount(id: string) {
        return PLAYLIST_ITEM_COUNTS[id]?.count || 0;
    }

    constructor(private _state: SignageStateService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.item) {
            this._playlist_ids.next(this.item?.playlists || []);
        }
    }
}
