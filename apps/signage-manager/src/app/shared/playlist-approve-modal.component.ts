import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { notifyError, notifySuccess, notifyWarn } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import {
    approveSignagePlaylist,
    listSignagePlaylistMediaRevisions,
    SignageMedia,
    SignagePlaylist,
    updateSignagePlaylistMedia,
} from '@placeos/ts-client';
import {
    BehaviorSubject,
    filter,
    firstValueFrom,
    lastValueFrom,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs';
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
                    <playlist-approval-preview
                        [versions]="versions || []"
                        [media]="media || []"
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
                            Undo Changes
                        </button>
                    }
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
        PlaylistApprovalPreviewComponent,
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
    public readonly can_update = this._service.can_update;

    public readonly playlist_versions = this._playlist_id.pipe(
        filter((id) => !!id),
        tap(() => this.loading.set('Loading versions...')),
        switchMap((id) => listSignagePlaylistMediaRevisions(id, { limit: 2 })),
        tap((versions) => this.has_previous_version.set(versions.length > 1)),
        shareReplay(1),
    );

    public readonly playlist_media = this.playlist_versions.pipe(
        map((playlists) =>
            playlists.map((playlist) => playlistMediaItems(playlist)),
        ),
        tap(() => this.loading.set('')),
        shareReplay(1),
    );

    public ngOnInit() {
        this._playlist_id.next(this._data?.playlist?.id || '');
    }

    public async undoChanges() {
        if (!this.can_update()) {
            notifyWarn('You cannot update playlists in this group.');
            return;
        }
        const [, previous_version] = await firstValueFrom(
            this.playlist_versions,
        );
        if (!previous_version?.items) return;
        this.loading.set('Undoing changes...');
        this._dialog_ref.disableClose = true;
        try {
            await lastValueFrom(
                updateSignagePlaylistMedia(
                    this._data.playlist.id,
                    previous_version.items,
                ),
            );
            this._service.setPlaylistApprovalStatus(
                this._data.playlist.id,
                false,
            );
            notifySuccess('Playlist reverted to previous version');
            this._dialog_ref.close(true);
            this._service.changed();
        } catch (e) {
            notifyError('Error reverting playlist changes');
        } finally {
            this.loading.set('');
            this._dialog_ref.disableClose = false;
        }
    }

    public async approve() {
        this.loading.set('Approving playlist...');
        this._dialog_ref.disableClose = true;
        try {
            await lastValueFrom(approveSignagePlaylist(this._data.playlist.id));
            this._service.setPlaylistApprovalStatus(
                this._data.playlist.id,
                true,
            );
            notifySuccess('Playlist approved');
            this._dialog_ref.close(true);
            this._service.changed();
        } catch (e) {
            notifyError('Error approving playlist');
        } finally {
            this.loading.set('');
            this._dialog_ref.disableClose = false;
        }
    }

    public previewItem(item: SignageMedia) {
        this._service.previewMedia(item);
    }
}
