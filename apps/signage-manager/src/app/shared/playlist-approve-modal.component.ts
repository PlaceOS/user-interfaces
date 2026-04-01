import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { notifySuccess } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';
import {
    approveSignagePlaylist,
    listSignagePlaylistMediaRevisions,
    SignageMedia,
    SignagePlaylist,
    updateSignagePlaylistMedia,
} from '@placeos/ts-client';
import {
    BehaviorSubject,
    combineLatest,
    filter,
    firstValueFrom,
    lastValueFrom,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs';
import { SignageService } from '../signage.service';

interface PlaylistApproveModalData {
    playlist: SignagePlaylist;
}

@Component({
    selector: 'playlist-approve-modal',
    template: `
        <div class="p-2">
            <header class="bg-base-200 rounded-sm p-2">
                <h2 class="px-2 text-xl font-medium">Approve Playlist</h2>
                @if (!loading()) {
                    <button
                        icon
                        type="button"
                        matRipple
                        mat-dialog-close
                        aria-label="Close approve playlist dialog"
                    >
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="max-h-[60vh] gap-2 overflow-auto py-2">
                    @let versions = playlist_versions | async;
                    @let media = playlist_media | async;
                    <div class="flex gap-2 max-md:flex-col">
                        <div
                            class="border-base-300 bg-success-light w-[24rem] rounded-sm border max-md:w-full"
                        >
                            @let current_version = versions?.[0];
                            @let current_media = media?.[0] || [];
                            <div
                                class="border-base-300 bg-base-200 flex items-center space-x-8 rounded-sm border-b px-4 py-2"
                            >
                                <h3>Version to approve</h3>
                                <div
                                    class="text-base-content/70 font-mono text-xs"
                                >
                                    {{
                                        current_version?.updated_at * 1000
                                            | date: 'dd MMM, HH:mm'
                                    }}
                                </div>
                            </div>
                            <div class="space-y-2 p-2">
                                <div class="px-2 text-sm">
                                    {{ (current_version?.items || []).length }}
                                    items
                                </div>
                                @for (item of current_media; track item?.id) {
                                    <div
                                        class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-sm border p-2"
                                    >
                                        <button
                                            type="button"
                                            class="bg-base-200 relative h-10 w-10 shrink-0 overflow-hidden rounded-sm"
                                            matRipple
                                            (click)="previewItem(item)"
                                            [attr.aria-label]="
                                                'Preview ' + item.name
                                            "
                                        >
                                            @if (item.thumbnail_url) {
                                                <img
                                                    auth
                                                    [source]="
                                                        item.thumbnail_url
                                                    "
                                                    [alt]="
                                                        item.name + ' thumbnail'
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
                                        class="text-base-content/70 flex flex-col items-center justify-center p-8"
                                    >
                                        <icon class="text-4xl">hide_image</icon>
                                        <p class="text-sm">No items</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <div
                            class="border-base-300 bg-error-light w-[24rem] rounded-sm border max-md:w-full"
                        >
                            @let previous_version = versions?.[1];
                            @let previous_media = media?.[1] || [];
                            <div
                                class="border-base-300 bg-base-200 flex items-center space-x-8 rounded-sm border-b px-4 py-2"
                            >
                                <h3>Previous version</h3>
                                <div
                                    class="text-base-content/70 font-mono text-xs"
                                >
                                    {{
                                        previous_version?.updated_at * 1000
                                            | date: 'dd MMM, HH:mm'
                                    }}
                                </div>
                            </div>
                            <div class="space-y-2 p-2">
                                <div class="px-2 text-sm">
                                    {{ (previous_version?.items || []).length }}
                                    items
                                </div>
                                @for (item of previous_media; track item?.id) {
                                    <div
                                        class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-sm border p-2"
                                    >
                                        <button
                                            type="button"
                                            class="bg-base-200 h-10 w-10 shrink-0 overflow-hidden rounded-sm"
                                            matRipple
                                            (click)="previewItem(item)"
                                            [attr.aria-label]="
                                                'Preview ' + item.name
                                            "
                                        >
                                            @if (item.thumbnail_url) {
                                                <img
                                                    auth
                                                    [source]="
                                                        item.thumbnail_url
                                                    "
                                                    [alt]="
                                                        item.name + ' thumbnail'
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
                                        class="text-base-content/70 flex flex-col items-center justify-center p-8"
                                    >
                                        <icon class="text-4xl">hide_image</icon>
                                        <p class="text-sm">No items</p>
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
                        type="button"
                        matRipple
                        class="inverse bg-base-100 w-40"
                        [disabled]="!has_previous_version()"
                        (click)="undoChanges()"
                    >
                        Undo Changes
                    </button>
                    <button
                        btn
                        type="button"
                        matRipple
                        class="w-40"
                        (click)="approve()"
                    >
                        Approve
                    </button>
                </footer>
            } @else {
                <main>
                    <div
                        class="flex flex-col items-center justify-center space-y-4 px-32 py-16"
                    >
                        <mat-spinner diameter="32" />
                        <p>{{ loading() }}</p>
                    </div>
                </main>
            }
        </div>
    `,
    imports: [
        CommonModule,
        IconComponent,
        MatRippleModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        AuthenticatedImageDirective,
    ],
})
export class PlaylistApproveModalComponent implements OnInit {
    private readonly _playlist_id = new BehaviorSubject('');
    private readonly _data = inject<PlaylistApproveModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref = inject(
        MatDialogRef<PlaylistApproveModalComponent>,
    );
    private readonly _service = inject(SignageService);

    public readonly loading = signal('');
    public readonly has_previous_version = signal(false);

    public readonly playlist_versions = this._playlist_id.pipe(
        filter((id) => !!id),
        tap(() => this.loading.set('Loading versions...')),
        switchMap((id) => listSignagePlaylistMediaRevisions(id, { limit: 2 })),
        tap((versions) => this.has_previous_version.set(versions.length > 1)),
        shareReplay(1),
    );

    public readonly playlist_media = combineLatest([
        this.playlist_versions,
        this._service.media,
    ]).pipe(
        map(([playlists, media]) =>
            playlists.map((playlist) =>
                (playlist.items || [])
                    .map((id) => media.find((item) => item?.id === id))
                    .filter((item): item is SignageMedia => !!item),
            ),
        ),
        tap(() => this.loading.set('')),
        shareReplay(1),
    );

    public ngOnInit() {
        this._playlist_id.next(this._data?.playlist?.id || '');
    }

    public async undoChanges() {
        const [, previous_version] = await firstValueFrom(
            this.playlist_versions,
        );
        if (!previous_version?.items) return;
        this.loading.set('Undoing changes...');
        this._dialog_ref.disableClose = true;
        await lastValueFrom(
            updateSignagePlaylistMedia(
                this._data.playlist.id,
                previous_version.items,
            ),
        );
        this._service.setPlaylistApprovalStatus(this._data.playlist.id, false);
        this.loading.set('');
        this._dialog_ref.disableClose = false;
        notifySuccess('Playlist reverted to previous version');
        this._dialog_ref.close(true);
        this._service.changed();
    }

    public async approve() {
        this.loading.set('Approving playlist...');
        this._dialog_ref.disableClose = true;
        await lastValueFrom(approveSignagePlaylist(this._data.playlist.id));
        this._service.setPlaylistApprovalStatus(this._data.playlist.id, true);
        this.loading.set('');
        this._dialog_ref.disableClose = false;
        notifySuccess('Playlist approved');
        this._dialog_ref.close(true);
        this._service.changed();
    }

    public previewItem(item: SignageMedia) {
        this._service.previewMedia(item);
    }
}
