import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { i18n, notifySuccess } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    approveSignagePlaylist,
    listSignagePlaylistMediaRevisions,
    updateSignagePlaylistMedia,
} from '@placeos/ts-client';
import { combineLatest, filter, map, switchMap, tap } from 'rxjs';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-approve-playlist-modal',
    template: `
        <div class="p-2">
            <header class="bg-base-200 rounded-sm p-2">
                <h2 class="px-2 text-xl font-medium">Approve Playlist</h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="max-h-[60vh] gap-2 overflow-auto py-2">
                    <div class="flex gap-2">
                        <div
                            class="border-base-300 bg-success-light w-[24rem] rounded-sm border"
                        >
                            <div
                                class="border-base-300 bg-base-200 flex items-center space-x-8 rounded-sm border-b px-4 py-2"
                            >
                                <h3>Version to approve</h3>
                                <div class="font-mono text-xs opacity-50">
                                    {{
                                        current_version()?.updated_at * 1000
                                            | date: 'dd MMM, HH:mm'
                                    }}
                                </div>
                            </div>
                            <div class="space-y-2 p-2">
                                <div class="px-2 text-sm">
                                    {{
                                        'COMMON.ITEM_COUNT'
                                            | translate
                                                : {
                                                      count:
                                                          current_version()
                                                              ?.items.length ||
                                                          0,
                                                  }
                                                : current_version()?.items
                                                      .length || 0
                                    }}
                                </div>
                                @for (item of current_media(); track item?.id) {
                                    <div
                                        class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-sm border p-2"
                                    >
                                        <button
                                            class="bg-base-200 h-10 w-10 shrink-0 overflow-hidden rounded-sm"
                                            matRipple
                                            (click)="previewItem(item)"
                                        >
                                            @if (item.thumbnail_url) {
                                                <img
                                                    auth
                                                    [source]="
                                                        item.thumbnail_url
                                                    "
                                                    class="h-full w-full object-cover"
                                                />
                                                <div
                                                    class="absolute inset-0 flex items-end justify-end p-1 opacity-0 transition-opacity duration-200 hover:opacity-100"
                                                >
                                                    <icon class="text-lg"
                                                        >expand_content</icon
                                                    >
                                                </div>
                                            }
                                        </button>
                                        <span class="truncate">{{
                                            item.name
                                        }}</span>
                                    </div>
                                } @empty {
                                    <div
                                        class="flex flex-col items-center justify-center p-8 opacity-30"
                                    >
                                        <icon class="text-4xl">hide_image</icon>
                                        <p class="text-sm">
                                            {{ 'COMMON.NO_ITEMS' | translate }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                        <div
                            class="border-base-300 bg-error-light w-[24rem] rounded-sm border"
                        >
                            <div
                                class="border-base-300 bg-base-200 flex items-center space-x-8 rounded-sm border-b px-4 py-2"
                            >
                                <h3>Previous version</h3>
                                <div class="font-mono text-xs opacity-50">
                                    {{
                                        previous_version()?.updated_at * 1000
                                            | date: 'dd MMM, HH:mm'
                                    }}
                                </div>
                            </div>
                            <div class="space-y-2 p-2">
                                <div class="space-y-2 px-2 text-sm">
                                    {{
                                        'COMMON.ITEM_COUNT'
                                            | translate
                                                : {
                                                      count:
                                                          previous_version()
                                                              ?.items.length ||
                                                          0,
                                                  }
                                                : previous_version()?.items
                                                      .length || 0
                                    }}
                                </div>
                                @for (
                                    item of previous_media();
                                    track item?.id
                                ) {
                                    <div
                                        class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-sm border p-2"
                                    >
                                        <button
                                            class="bg-base-200 h-10 w-10 shrink-0 overflow-hidden rounded-sm"
                                            matRipple
                                            (click)="previewItem(item)"
                                        >
                                            @if (item.thumbnail_url) {
                                                <img
                                                    auth
                                                    [source]="
                                                        item.thumbnail_url
                                                    "
                                                    class="h-full w-full object-cover"
                                                />
                                            }
                                        </button>
                                        <span class="truncate">{{
                                            item.name
                                        }}</span>
                                    </div>
                                } @empty {
                                    <div
                                        class="flex flex-col items-center justify-center p-8 opacity-30"
                                    >
                                        <icon class="text-4xl">hide_image</icon>
                                        <p class="text-sm">
                                            {{ 'COMMON.NO_ITEMS' | translate }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </main>
                <footer
                    class="bg-base-200 flex items-center justify-end space-x-2 rounded-sm p-2"
                >
                    <button
                        btn
                        matRipple
                        class="inverse bg-base-100 w-40"
                        (click)="undoChanges()"
                    >
                        Undo Changes
                    </button>
                    <button btn matRipple class="w-40" (click)="approve()">
                        {{ 'COMMON.APPROVE' | translate }}
                    </button>
                </footer>
            } @else {
                <main>
                    <div
                        class="flex flex-col items-center justify-center space-y-4"
                    >
                        <mat-spinner diameter="32" />
                        <p>{{ loading() | translate }}</p>
                    </div>
                </main>
            }
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        AuthenticatedImageDirective,
    ],
})
export class SignageApprovePlaylistModalComponent {
    private _playlist = inject(MAT_DIALOG_DATA);
    private _dialog_ref = inject(
        MatDialogRef<SignageApprovePlaylistModalComponent>,
    );
    private _service = inject(SignageStateService);

    public readonly loading = signal('');
    private readonly _playlist_id = signal(this._playlist?.id || '');

    public readonly playlist_versions = toSignal(
        toObservable(this._playlist_id).pipe(
            filter((_) => !!_),
            tap(() => this.loading.set('Loading versions...')),
            switchMap((id) =>
                listSignagePlaylistMediaRevisions(id, { limit: 2 }),
            ),
        ),
        { initialValue: [] },
    );

    private readonly _playlist_media = toSignal(
        combineLatest([
            toObservable(this.playlist_versions),
            this._service.media,
        ]).pipe(
            map(([playlists, media]) =>
                playlists.map((playlist) =>
                    playlist.items.map((id) => media.find((m) => m?.id === id)),
                ),
            ),
            tap(() => this.loading.set('')),
        ),
        { initialValue: [] },
    );
    public readonly playlist_media = computed(() => this._playlist_media());
    public readonly current_version = computed(
        () => this.playlist_versions()[0],
    );
    public readonly previous_version = computed(
        () => this.playlist_versions()[1],
    );
    public readonly current_media = computed(
        () => this.playlist_media()[0] || [],
    );
    public readonly previous_media = computed(
        () => this.playlist_media()[1] || [],
    );

    public async undoChanges() {
        this.loading.set('Undoing changes...');
        this._dialog_ref.disableClose = true;
        const [, previous] = this.playlist_versions();
        if (!previous) {
            this.loading.set('');
            this._dialog_ref.disableClose = false;
            return;
        }
        await updateSignagePlaylistMedia(this._playlist?.id, previous.items);
        this.loading.set('');
        this._dialog_ref.disableClose = false;
        notifySuccess(i18n('APP.CONCIERGE.SIGNAGE_PLAYLISTS_UNDONE'));
        this._dialog_ref.close();
        this._service.changed();
    }

    public async approve() {
        this.loading.set('Approving playlist...');
        this._dialog_ref.disableClose = true;
        await approveSignagePlaylist(this._playlist?.id);
        this.loading.set('');
        this._dialog_ref.disableClose = false;
        notifySuccess(i18n('APP.CONCIERGE.SIGNAGE_PLAYLISTS_APPROVED'));
        this._dialog_ref.close();
        this._service.changed();
    }

    public previewItem(item: any) {
        this._service.previewMedia(item);
    }
}
