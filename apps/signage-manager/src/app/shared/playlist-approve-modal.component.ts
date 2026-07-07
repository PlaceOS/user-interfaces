import { CommonModule } from '@angular/common';
import { Component, inject, resource, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { i18n, notifyError, notifySuccess, notifyWarn } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    approveSignagePlaylist,
    listSignagePlaylistMediaRevisions,
    SignageMedia,
    SignagePlaylist,
    updateSignagePlaylistMedia,
} from '@placeos/ts-client';
import { playlistMediaItems } from '../signage-playlist.util';
import { SignageService } from '../signage.service';
import { PlaylistApprovalPreviewComponent } from './playlist-approval-preview.component';

interface PlaylistApproveModalData {
    playlist: SignagePlaylist;
}

@Component({
    selector: 'playlist-approve-modal',
    template: `
        <div class="p-2">
            <header class="bg-base-200 rounded-sm p-2">
                <h2 class="px-2 text-xl font-medium">
                    {{ 'SIGNAGE_MANAGER.APPROVE_PLAYLIST' | translate }}
                </h2>
                @if (!loading()) {
                    <button
                        icon
                        type="button"
                        matRipple
                        mat-dialog-close
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.CLOSE_APPROVE_PLAYLIST' | translate
                        "
                    >
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="max-h-[60vh] gap-2 overflow-auto py-2">
                    <playlist-approval-preview
                        [versions]="playlist_versions()"
                        [media]="playlist_media()"
                        (preview)="previewItem($event)"
                    />
                </main>
                <footer
                    class="bg-base-200 flex items-center justify-end space-x-2 rounded-sm p-2"
                >
                    @if (can_update()) {
                        <button
                            btn
                            type="button"
                            matRipple
                            class="inverse bg-base-100 w-40"
                            [disabled]="!has_previous_version()"
                            (click)="undoChanges()"
                        >
                            {{ 'SIGNAGE_MANAGER.UNDO_CHANGES' | translate }}
                        </button>
                    }
                    <button
                        btn
                        type="button"
                        matRipple
                        class="w-40"
                        (click)="approve()"
                    >
                        {{ 'COMMON.APPROVE' | translate }}
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
        PlaylistApprovalPreviewComponent,
        TranslatePipe,
    ],
})
export class PlaylistApproveModalComponent {
    private readonly _data = inject<PlaylistApproveModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref = inject(
        MatDialogRef<PlaylistApproveModalComponent>,
    );
    private readonly _service = inject(SignageService);

    public readonly loading = signal('');
    public readonly has_previous_version = signal(false);
    public readonly can_update = this._service.can_update;

    private readonly _playlist_versions = resource({
        params: () => this._data?.playlist?.id || '',
        loader: async ({ params }) => {
            if (!params) return [];
            this.loading.set(i18n('SIGNAGE_MANAGER.LOADING_VERSIONS'));
            try {
                const versions = await listSignagePlaylistMediaRevisions(
                    params,
                    { limit: 2 },
                );
                this.has_previous_version.set(versions.length > 1);
                return versions;
            } finally {
                this.loading.set('');
            }
        },
    });
    public readonly playlist_versions = () =>
        this._playlist_versions.value() || [];
    public readonly playlist_media = () =>
        this.playlist_versions().map((playlist) =>
            playlistMediaItems(playlist),
        );

    public async undoChanges() {
        if (!this.can_update()) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS'));
            return;
        }
        const [, previous_version] = this.playlist_versions();
        if (!previous_version?.items) return;
        this.loading.set(i18n('SIGNAGE_MANAGER.UNDOING_CHANGES'));
        this._dialog_ref.disableClose = true;
        try {
            await updateSignagePlaylistMedia(
                this._data.playlist.id,
                previous_version.items,
            );
            this._service.setPlaylistApprovalStatus(
                this._data.playlist.id,
                false,
            );
            notifySuccess(i18n('SIGNAGE_MANAGER.PLAYLIST_REVERTED'));
            this._dialog_ref.close(true);
            this._service.refreshPlaylist(this._data.playlist.id);
        } catch (e) {
            notifyError(i18n('SIGNAGE_MANAGER.PLAYLIST_REVERT_ERROR'));
        } finally {
            this.loading.set('');
            this._dialog_ref.disableClose = false;
        }
    }

    public async approve() {
        this.loading.set(i18n('SIGNAGE_MANAGER.APPROVING_PLAYLIST'));
        this._dialog_ref.disableClose = true;
        try {
            await approveSignagePlaylist(this._data.playlist.id);
            this._service.setPlaylistApprovalStatus(
                this._data.playlist.id,
                true,
            );
            notifySuccess(i18n('SIGNAGE_MANAGER.PLAYLIST_APPROVED'));
            this._dialog_ref.close(true);
            this._service.changed();
        } catch (e) {
            notifyError(i18n('SIGNAGE_MANAGER.PLAYLIST_APPROVE_ERROR'));
        } finally {
            this.loading.set('');
            this._dialog_ref.disableClose = false;
        }
    }

    public previewItem(item: SignageMedia) {
        this._service.previewMedia(item);
    }
}
