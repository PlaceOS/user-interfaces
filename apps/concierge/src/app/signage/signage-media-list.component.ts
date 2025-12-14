import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    input,
    OnChanges,
    signal,
    SimpleChanges,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { notifyError } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    CustomTooltipComponent,
    IconComponent,
    MediaDurationPipe,
    TranslatePipe,
} from '@placeos/components';
import { isValidUrl } from '@placeos/events';
import { listSignagePlaylistMedia, SignageMedia } from '@placeos/ts-client';
import { getUnixTime, startOfMinute } from 'date-fns';
import { lastValueFrom } from 'rxjs';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-media-list',
    template: `
        <div class="relative p-2">
            <h3
                class="bg-base-100 mb-2 rounded-xl p-2 text-center text-xl font-medium"
            >
                {{ 'APP.CONCIERGE.SIGNAGE_MEDIA' | translate }}
            </h3>
            <mat-form-field
                appearance="outline"
                class="no-subscript white w-full"
            >
                <input
                    matInput
                    [placeholder]="'COMMON.SEARCH' | translate"
                    [ngModel]="search()"
                    (ngModelChange)="search.set($event)"
                />
            </mat-form-field>
            <button
                icon
                matRipple
                customTooltip
                [content]="add_link_template"
                class="border-base-300 absolute top-3 right-14 h-9! max-h-9 w-9! max-w-9 min-w-0 border"
                [matTooltip]="'APP.CONCIERGE.SIGNAGE_MEDIA_LINK' | translate"
                matTooltipPosition="left"
            >
                <icon>link</icon>
            </button>
            <ng-template #add_link_template>
                <div
                    class="border-base-300 bg-base-100 my-2 flex w-[20rem] flex-col space-y-4 rounded-lg border p-4 shadow-sm"
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
                class="border-base-300 absolute top-3 right-3 h-9! max-h-9 w-9! max-w-9 min-w-0 border"
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
        @if (media()?.length > 0) {
            <div
                class="grid w-full gap-4 p-4 md:grid-cols-2 lg:grid-cols-3"
                cdkDropList
                id="media-list"
                [cdkDropListData]="media()"
                [cdkDropListConnectedTo]="playlist_ids"
                (cdkDropListDropped)="drop($event)"
            >
                @for (media of media(); track media.id) {
                    <div
                        class="border-base-300 bg-base-100 relative flex flex-col items-center justify-center rounded-lg border p-3 hover:opacity-80"
                        cdkDrag
                    >
                        @if (media.valid_from && now < media.valid_from) {
                            <div
                                class="bg-warning absolute inset-0 z-0 rounded-lg opacity-10"
                            ></div>
                        } @else if (
                            media.valid_until && now > media.valid_until
                        ) {
                            <div
                                class="bg-error absolute inset-0 z-0 rounded-lg opacity-10"
                            ></div>
                        }
                        <div
                            class="border-base-400 bg-base-300 flex min-h-10 min-w-10 items-center justify-center rounded-2xl border-4 border-dashed opacity-30"
                            *cdkDragPlaceholder
                        >
                            <icon class="text-base-100 text-2xl"> add </icon>
                        </div>
                        <button
                            preview
                            matRipple
                            (click)="previewItem(media)"
                            class="bg-base-200 relative h-36 w-full overflow-hidden rounded-lg"
                        >
                            @if (media.thumbnail_url) {
                                <img
                                    auth
                                    [source]="media.thumbnail_url"
                                    class="h-full w-full rounded-lg object-contain"
                                />
                                <div
                                    class="absolute inset-0 flex items-end justify-end p-1 opacity-0 transition-opacity duration-200 hover:opacity-100"
                                >
                                    <icon class="text-2xl">expand_content</icon>
                                </div>
                            }
                            <div
                                class="absolute top-1 left-1 rounded-lg px-2 py-1 font-mono text-xs capitalize"
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
                                    class="bg-info text-info-content absolute right-1 bottom-1 rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                >
                                    {{ media.play_time / 1000 | mediaDuration }}
                                </div>
                            }
                        </button>
                        <div
                            class="relative top-1 flex w-full items-center justify-between"
                        >
                            <div
                                class="text-base-content w-1/2 flex-1 truncate"
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
                                            [ngModel]="playlist_search()"
                                            (ngModelChange)="
                                                playlist_search.set($event)
                                            "
                                        />
                                    </mat-form-field>
                                </div>
                                @if (!(playlists()?.length > 0)) {
                                    <button mat-menu-item [disabled]="true">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EMPTY'
                                                | translate
                                        }}
                                    </button>
                                }

                                @for (
                                    playlist of playlists();
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
                                        <icon class="text-error text-2xl">
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

            ::ng-deep .cdk-drag-preview {
                opacity: 0.6;
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
        AuthenticatedImageDirective,
    ],
})
export class SignageMediaListComponent implements OnChanges {
    private _state = inject(SignageStateService);

    public readonly link = signal('');

    public readonly playlist_count = input(0);
    public readonly search = signal<string>('');
    public readonly playlist_search = signal<string>('');

    private readonly _playlists = toSignal(this._state.playlists, {
        initialValue: [],
    });
    private readonly _media = toSignal(this._state.media, {
        initialValue: [],
    });

    public readonly playlists = computed(() => {
        const search_term = this.playlist_search();
        const list = this._playlists();
        return list.filter((_) =>
            _.name.toLowerCase().includes(search_term.toLowerCase()),
        );
    });

    public readonly media = computed(() => {
        const search_term = this.search();
        const media_list = this._media();
        return media_list.filter((_) =>
            _.name.toLowerCase().includes(search_term.toLowerCase()),
        );
    });

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

    public drop(event: any) {
        // No-op for media list drops - media is managed via addToPlaylist
    }

    public async addToPlaylist(media_id: string, playlist: any) {
        const media_list = await lastValueFrom(
            listSignagePlaylistMedia(playlist.id),
        );
        const new_media_list = [...media_list.items, media_id];
        await this._state.updatePlaylistMedia(playlist.id, new_media_list);
    }
}
