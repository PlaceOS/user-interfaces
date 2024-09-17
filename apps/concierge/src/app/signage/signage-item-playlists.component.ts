import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { SignageStateService } from './signage-state.service';
import { map, startWith, tap } from 'rxjs/operators';
import { SignagePlaylist } from '@placeos/ts-client';

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
                class="px-2 py-1 text-xs font-mono bg-base-200 rounded-lg uppercase"
            >
                {{ extra }}
            </div>
        </div>
        <ng-content></ng-content>
        @if ((active_playlists | async).length > 0 && item) {
            <div
                cdkDropList
                class="flex-1 h-1/2 overflow-auto flex flex-col space-y-2 mt-4"
                (cdkDropListDropped)="ondrop.next($event)"
            >
                @for (item of active_playlists | async; track item.id) {
                    <div
                        cdkDrag
                        class="w-full bg-base-100 h-20 rounded-lg flex items-center p-2 space-x-2 border border-base-300"
                    >
                        <div
                            class="h-20 w-full border-4 border-dashed border-base-400 bg-base-300 rounded-xl"
                            *cdkDragPlaceholder
                        ></div>
                        <button
                            matRipple
                            cdkDragHandle
                            class="flex items-center justify-center w-6 h-full rounded hover:bg-base-200"
                            matTooltip="Drag to reorder"
                        >
                            <app-icon>drag_handle</app-icon>
                        </button>
                        <div class="text-base-content flex-1 w-1/2">
                            <div class="truncate">
                                {{ item.name }}
                            </div>
                            <div class="truncate text-sm opacity-30">
                                {{ playlistCount(item.id) || 0 }} Media items
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
                                    <div class="pr-2">View Playlist</div>
                                </div>
                            </a>
                            <button mat-menu-item (click)="remove.next(item)">
                                <div class="flex items-center space-x-2">
                                    <app-icon class="text-2xl text-error">
                                        delete
                                    </app-icon>
                                    <div class="pr-2">Remove Playlist</div>
                                </div>
                            </button>
                        </mat-menu>
                    </div>
                }
            </div>
            <button btn matRipple (click)="add.emit()">Add Playlist</button>
        } @else {
            <div
                class="flex flex-col items-center justify-center p-8 space-y-2 mx-auto flex-1"
            >
                <div
                    class="flex flex-col items-center justify-center opacity-30"
                >
                    <app-icon class="text-6xl">hide_image</app-icon>
                    <p>No playlists in {{ name }}.</p>
                </div>
                <button btn matRipple (click)="add.emit()" class="w-40">
                    Add Playlist
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
})
export class SignageItemPlaylistsComponent {
    @Input() public item: any;
    @Input() public name: string = 'zone';
    @Input() public extra: string = '';
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
