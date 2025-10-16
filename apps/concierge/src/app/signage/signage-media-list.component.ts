import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
    Component,
    inject,
    input,
    OnChanges,
    signal,
    SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { notifyError } from '@placeos/common';
import {
    CustomTooltipComponent,
    IconComponent,
    MediaDurationPipe,
    TranslatePipe,
} from '@placeos/components';
import { isValidUrl } from '@placeos/events';
import { listSignagePlaylistMedia, SignageMedia } from '@placeos/ts-client';
import { getUnixTime, startOfMinute } from 'date-fns';
import { BehaviorSubject, combineLatest, lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-media-list',
    template: `
        <div class="relative p-4">
            <h3 class="mb-4 text-center text-xl font-medium">
                {{ 'APP.CONCIERGE.SIGNAGE_MEDIA' | translate }}
            </h3>
            <mat-form-field appearance="outline" class="no-subscript w-full">
                <input
                    matInput
                    [placeholder]="'COMMON.SEARCH' | translate"
                    [ngModel]="search.getValue()"
                    (ngModelChange)="search.next($event)"
                />
            </mat-form-field>
            <button
                icon
                matRipple
                customTooltip
                [content]="add_link_template"
                class="absolute right-14 top-2 border border-base-300"
                [matTooltip]="'APP.CONCIERGE.SIGNAGE_MEDIA_LINK' | translate"
                matTooltipPosition="left"
            >
                <icon>link</icon>
            </button>
            <ng-template #add_link_template>
                <div
                    class="my-2 flex w-[20rem] flex-col space-y-4 rounded-lg border border-base-300 bg-base-100 p-4 shadow"
                >
                    <mat-form-field appearance="outline" class="no-subscript">
                        <input
                            matInput
                            [placeholder]="'COMMON.URL' | translate"
                            [(ngModel)]="link"
                        />
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="w-full"
                        (click)="addFromLink(link())"
                    >
                        <icon class="mr-2 text-2xl">add</icon>
                        <div>{{ 'COMMON.ADD' | translate }}</div>
                    </button>
                </div>
            </ng-template>
            <button
                icon
                matRipple
                class="absolute right-2 top-2 border border-base-300"
                [matTooltip]="'APP.CONCIERGE.SIGNAGE_MEDIA_UPLOAD' | translate"
                matTooltipPosition="left"
            >
                <icon>add</icon>
                <input
                    type="file"
                    class="absolute inset-0 opacity-0"
                    (change)="previewFile($event)"
                />
            </button>
        </div>
        @if ((media | async)?.length > 0) {
            <div
                class="grid w-full gap-4 p-4 md:grid-cols-2 lg:grid-cols-3"
                cdkDropList
                id="media-list"
                [cdkDropListData]="media | async"
                [cdkDropListConnectedTo]="playlist_ids"
                (cdkDropListDropped)="drop($event)"
            >
                @for (media of media | async; track media.id) {
                    <div
                        class="relative flex flex-col items-center justify-center rounded-lg border border-base-300 bg-base-100 p-3 hover:opacity-80"
                        cdkDrag
                    >
                        @if (media.valid_from && now < media.valid_from) {
                            <div
                                class="absolute inset-0 z-0 rounded-lg bg-warning opacity-10"
                            ></div>
                        } @else if (
                            media.valid_until && now > media.valid_until
                        ) {
                            <div
                                class="absolute inset-0 z-0 rounded-lg bg-error opacity-10"
                            ></div>
                        }
                        <div
                            class="flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed border-base-400 bg-base-300"
                            *cdkDragPlaceholder
                        >
                            <icon class="text-2xl text-base-100"> add </icon>
                        </div>
                        <div
                            preview
                            class="relative h-36 w-full overflow-hidden rounded-lg bg-base-200"
                        >
                            @if (media.thumbnail_url) {
                                <img
                                    auth
                                    [source]="media.thumbnail_url"
                                    class="h-full w-full rounded-lg object-contain"
                                />
                            }
                            <div
                                class="absolute left-1 top-1 rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                [class.bg-info]="media.media_type === 'video'"
                                [class.text-info-content]="
                                    media.media_type === 'video'
                                "
                                [class.bg-warning]="
                                    media.media_type === 'image'
                                "
                                [class.text-warning-content]="
                                    media.media_type === 'image'
                                "
                                [class.bg-success]="
                                    media.media_type === 'webpage'
                                "
                                [class.text-success-content]="
                                    media.media_type === 'webpage'
                                "
                            >
                                {{
                                    (media.media_type === 'image'
                                        ? 'COMMON.IMAGE'
                                        : media.media_type === 'webpage'
                                          ? 'COMMON.WEBPAGE'
                                          : 'COMMON.VIDEO'
                                    ) | translate
                                }}
                            </div>
                            @if (media.play_time) {
                                <div
                                    class="absolute bottom-1 right-1 rounded-lg bg-info px-2 py-1 font-mono text-xs capitalize text-info-content"
                                >
                                    {{ media.play_time / 1000 | mediaDuration }}
                                </div>
                            }
                        </div>
                        <div
                            class="relative top-1 flex w-full items-center justify-between"
                        >
                            <div
                                class="w-1/2 flex-1 truncate text-base-content"
                                [matTooltip]="media.name"
                            >
                                {{ media.name }}
                            </div>
                            <button
                                icon
                                matRipple
                                [matMenuTriggerFor]="menu"
                                aria-label="Media Actions"
                            >
                                <icon>more_vert</icon>
                            </button>
                            <mat-menu #playlist_menu="matMenu">
                                <div class="px-2">
                                    <mat-form-field
                                        appearance="outline"
                                        class="no-subscript w-full"
                                        (click)="$event.stopPropagation()"
                                    >
                                        <input
                                            matInput
                                            [placeholder]="
                                                'COMMON.SEARCH' | translate
                                            "
                                            [ngModel]="
                                                playlist_search.getValue()
                                            "
                                            (ngModelChange)="
                                                playlist_search.next($event)
                                            "
                                        />
                                    </mat-form-field>
                                </div>
                                @if (!((playlists | async)?.length > 0)) {
                                    <button mat-menu-item [disabled]="true">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EMPTY'
                                                | translate
                                        }}
                                    </button>
                                }

                                @for (
                                    playlist of playlists | async;
                                    track playlist.id
                                ) {
                                    <button
                                        mat-menu-item
                                        (click)="
                                            addToPlaylist(media.id, playlist)
                                        "
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <div class="pr-2">
                                                {{ playlist.name }}
                                            </div>
                                        </div>
                                    </button>
                                }
                            </mat-menu>
                            <mat-menu #menu="matMenu">
                                <button mat-menu-item (click)="editItem(media)">
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">edit</icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_EDIT'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    [matMenuTriggerFor]="playlist_menu"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">add</icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_ADD_PLAYLIST'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="previewItem(media)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">visibility</icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_PREVIEW'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="removeItem(media)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl text-error">
                                            delete
                                        </icon>
                                        <div class="pr-2">
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_MEDIA_REMOVE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                        </div>
                    </div>
                }
            </div>
        } @else {
            <div
                class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
            >
                <icon class="text-6xl">hide_image</icon>
                <p>{{ 'APP.CONCIERGE.SIGNAGE_MEDIA_EMPTY' | translate }}</p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatMenuModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        CustomTooltipComponent,
        FormsModule,
        DragDropModule,
        MatTooltipModule,
        MediaDurationPipe,
    ],
})
export class SignageMediaListComponent implements OnChanges {
    private _state = inject(SignageStateService);

    public readonly link = signal('');

    public readonly playlist_count = input(0);
    public readonly search = new BehaviorSubject<string>('');
    public readonly playlist_search = new BehaviorSubject<string>('');
    public readonly playlists = combineLatest([
        this.playlist_search,
        this._state.playlists,
    ]).pipe(
        map(([search, list]) =>
            list.filter((_) =>
                _.name.toLowerCase().includes(search.toLowerCase()),
            ),
        ),
    );
    public readonly media = combineLatest([
        this.search,
        this._state.media,
    ]).pipe(
        map(([search, media]) =>
            media.filter((_) =>
                _.name.toLowerCase().includes(search.toLowerCase()),
            ),
        ),
    );

    public readonly previewFile = (event) =>
        this._state.previewFileFromInput(event);

    public readonly addFromLink = async (url: string) => {
        const is_valid = isValidUrl(url);
        if (!is_valid) {
            notifyError('Supplied URL is not valid.');
            return;
        }
        await this._state.addMediaFromLink(url);
        this.link.set('');
    };

    public playlist_ids: string[] = [];

    public get now() {
        return getUnixTime(startOfMinute(Date.now()));
    }

    public readonly previewItem = (item: SignageMedia) =>
        this._state.previewMedia(item);

    public readonly editItem = (item: SignageMedia) =>
        this._state.editMedia(item);

    public readonly removeItem = async (item: SignageMedia) =>
        this._state.removeMedia(item);

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.playlist_count) {
            this.playlist_ids = new Array(this.playlist_count())
                .fill(0)
                .map((_, idx) => `playlist-${idx}`);
        }
    }

    // public drop(event) {}

    public async addToPlaylist(media_id: string, playlist: any) {
        const media_list = await lastValueFrom(
            listSignagePlaylistMedia(playlist.id),
        );
        const new_media_list = [...media_list.items, media_id];
        await this._state.updatePlaylistMedia(playlist.id, new_media_list);
    }
}
