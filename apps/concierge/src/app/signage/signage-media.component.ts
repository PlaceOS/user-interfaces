import { Component, computed, inject, signal } from '@angular/core';

import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';

import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { listSignagePlaylistMedia, SignagePlaylist } from '@placeos/ts-client';
import { SignageMediaListComponent } from './signage-media-list.component';
import { SignagePlaylistMediaListComponent } from './signage-playlist-media-list.component';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-media',
    template: `
        <div class="relative flex h-full w-full space-x-2 overflow-visible">
            <div
                sidebar
                class="border-base-300 flex h-full w-64 flex-col space-y-2 overflow-auto rounded-xl border p-2"
            >
                <h3
                    class="bg-base-200 rounded-lg p-2 text-center text-xl font-medium"
                >
                    {{ 'APP.CONCIERGE.SIGNAGE_PLAYLISTS' | translate }}
                </h3>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="'COMMON.SEARCH' | translate"
                        [(ngModel)]="search"
                    />
                </mat-form-field>
                <a
                    matRipple
                    class="hover:bg-base-200 flex min-h-12 w-full items-center rounded-xl px-6"
                    [class.bg-secondary!]="!selected_playlist()"
                    [class.text-secondary-content]="!selected_playlist()"
                    [routerLink]="[]"
                    [queryParams]="{ playlist: '' }"
                >
                    {{ 'APP.CONCIERGE.SIGNAGE_MEDIA_ALL' | translate }}
                </a>
                <hr
                    class="border-base-300 bg-base-300 -mx-2 w-[calc(100%+1rem)]"
                />
                @if (playlists()?.length > 0) {
                    @for (playlist of playlists(); track playlist.id) {
                        <a
                            matRipple
                            class="border-base-100 even:border-base-200 even:bg-base-200 hover:border-info flex h-12 min-h-12 w-full items-center rounded-3xl border px-6"
                            [class.bg-secondary!]="
                                selected_playlist() === playlist.id
                            "
                            [class.text-secondary-content]="
                                selected_playlist() === playlist.id
                            "
                            [routerLink]="[]"
                            [queryParams]="{ playlist: playlist.id }"
                            cdkDropList
                            [id]="'playlist-' + $index"
                            [cdkDropListConnectedTo]="[
                                'media-list',
                                'playlist-list',
                            ]"
                            (cdkDropListDropped)="
                                selected_playlist() === playlist.id
                                    ? ''
                                    : drop(playlist, $event)
                            "
                        >
                            <div class="flex-1">
                                {{ playlist.name }}
                            </div>
                            <!-- @if (!playlist.approved) {
                                <icon>warning</icon>
                            } -->
                        </a>
                    }
                } @else {
                    <div
                        class="flex flex-col items-center justify-center space-y-2 p-8 opacity-30"
                    >
                        <icon class="text-6xl">hide_image</icon>
                        <p class="text-center">
                            {{
                                (search()
                                    ? 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EMPTY'
                                ) | translate
                            }}
                        </p>
                    </div>
                    @if (!search()) {
                        <button
                            btn
                            matRipple
                            class="inverse"
                            (click)="addPlaylist()"
                        >
                            <div
                                class="flex w-full items-center justify-center"
                            >
                                <icon class="text-2xl">add</icon>
                                <span class="mr-4 ml-2">{{
                                    'APP.CONCIERGE.SIGNAGE_PLAYLISTS_ADD'
                                        | translate
                                }}</span>
                            </div>
                        </button>
                    }
                }
            </div>
            <div
                class="border-base-300 bg-base-200 relative h-full w-1/2 flex-1 overflow-hidden rounded-lg border shadow-sm"
                (dragover)="onEnter($event)"
                (dragenter)="onEnter($event)"
                (window:drop)="hideOverlay($event)"
            >
                <div class="h-full w-full overflow-auto">
                    @if (!selected_playlist()) {
                        <signage-media-list
                            [playlist_count]="playlists()?.length"
                        />
                    }
                    @if (selected_playlist()) {
                        <signage-playlist-media-list
                            [playlist]="selected_playlist()"
                            [playlist_count]="playlists()?.length"
                        />
                    }
                </div>
                @if (show_dropzone()) {
                    <div
                        class="absolute inset-0"
                        (dragleave)="hideOverlay($event)"
                        (drop)="previewFile($event)"
                    >
                        <div
                            class="bg-base-content absolute inset-0 opacity-60"
                        ></div>
                        <div
                            class="border-base-300 text-base-100 absolute inset-4 flex flex-col items-center justify-center space-y-4 rounded-2xl border-4 border-dashed"
                        >
                            <icon class="text-6xl">cloud_upload</icon>
                            <p>
                                {{
                                    'APP.CONCIERGE.SIGNAGE_MEDIA_DROP_UPLOAD'
                                        | translate
                                }}
                            </p>
                        </div>
                        <input
                            type="file"
                            (change)="previewFile($event)"
                            class="absolute inset-0 opacity-0"
                        />
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                min-height: 100%;
            }
        `,
    ],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        RouterModule,
        DragDropModule,
        TranslatePipe,
        MatRippleModule,
        SignageMediaListComponent,
        SignagePlaylistMediaListComponent,
        FormsModule,
    ],
})
export class SignageMediaComponent extends AsyncHandler {
    private _state = inject(SignageStateService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);

    public readonly search = signal('');
    public readonly loading = this._state.loading;
    private readonly _playlists_signal = toSignal(this._state.playlists, {
        initialValue: [],
    });
    public readonly playlists = computed(() => {
        const search_value = this.search();
        const list = this._playlists_signal();
        return list.filter((_) =>
            _.name.toLowerCase().includes(search_value.toLowerCase()),
        );
    });
    private readonly _route_query = toSignal(this._route.queryParamMap);
    public readonly selected_playlist = computed(
        () => this._route_query()?.get('playlist') || '',
    );
    public readonly show_dropzone = signal(false);

    constructor() {
        super();
    }

    public readonly addPlaylist = async () => {
        const result = await this._state.editPlaylist();
        if (result) {
            this._router.navigate([
                '/signage/media',
                { query: { playlist: result.id } },
            ]);
        }
    };
    public readonly previewMedia = (item) => this._state.previewMedia(item);
    public readonly previewFile = (event) =>
        this._state.previewFileFromInput(event, this.selected_playlist());

    public onEnter(e) {
        this.clearTimeout('hide_overlay');
        this.show_dropzone.set(e?.dataTransfer?.types.includes('Files'));
    }

    public hideOverlay(e) {
        if (!this.show_dropzone()) return;
        if (!(e.target instanceof HTMLInputElement)) {
            e.preventDefault();
        }
        this.timeout('hide_overlay', () => this.show_dropzone.set(false));
    }

    public async drop(
        playlist: SignagePlaylist,
        event: CdkDragDrop<SignagePlaylist[]>,
    ) {
        const media = event.previousContainer.data[event.previousIndex];
        const media_list = await listSignagePlaylistMedia(playlist.id);
        const new_media_list = [...media_list.items, media.id];
        await this._state.updatePlaylistMedia(playlist.id, new_media_list);
    }
}
