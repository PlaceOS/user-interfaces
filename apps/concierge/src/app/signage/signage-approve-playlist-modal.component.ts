import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { i18n, nextValueFrom, notifySuccess } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    approveSignagePlaylist,
    listSignagePlaylistMediaRevisions,
    updateSignagePlaylistMedia,
} from '@placeos/ts-client';
import {
    BehaviorSubject,
    combineLatest,
    filter,
    lastValueFrom,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-approve-playlist-modal',
    template: `
        <div class="p-2">
            <header class="rounded bg-base-200 p-2">
                <h2 class="px-2 text-xl font-medium">Approve Playlist</h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="flex space-x-2 py-2">
                    @let versions = playlist_versions | async;
                    @let media = playlist_media | async;
                    <div
                        class="w-[24rem] rounded border border-base-300 bg-success-light"
                    >
                        @let current_version = versions?.[0];
                        @let current_media = media?.[0] || [];
                        <div
                            class="flex items-center space-x-8 rounded border-b border-base-300 bg-base-200 px-4 py-2"
                        >
                            <h3>Version to approve</h3>
                            <div class="font-mono text-xs opacity-50">
                                {{
                                    current_version?.updated_at * 1000
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
                                                  count: current_version?.items
                                                      .length,
                                              }
                                            : current_version?.items.length
                                }}
                            </div>
                            @for (item of current_media; track item.id) {
                                <div
                                    class="truncate rounded border border-base-300 bg-base-100 p-2"
                                >
                                    {{ item.name }}
                                </div>
                            }
                        </div>
                    </div>
                    <div
                        class="w-[24rem] rounded border border-base-300 bg-error-light"
                    >
                        @let previous_version = versions?.[1];
                        @let previous_media = media?.[1] || [];
                        <div
                            class="flex items-center space-x-8 rounded border-b border-base-300 bg-base-200 px-4 py-2"
                        >
                            <h3>Previous version</h3>
                            <div class="font-mono text-xs opacity-50">
                                {{
                                    previous_version?.updated_at * 1000
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
                                                  count: previous_version?.items
                                                      .length,
                                              }
                                            : previous_version?.items.length
                                }}
                            </div>
                            @for (item of previous_media; track item.id) {
                                <div
                                    class="truncate rounded border border-base-300 bg-base-100 p-2"
                                >
                                    {{ item.name }}
                                </div>
                            }
                        </div>
                    </div>
                </main>
                <footer
                    class="flex items-center justify-end space-x-2 rounded bg-base-200 p-2"
                >
                    <button
                        btn
                        matRipple
                        class="inverse w-40 bg-base-100"
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
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatDialogModule,
        MatProgressSpinnerModule,
    ],
})
export class SignageApprovePlaylistModalComponent implements OnInit {
    private _playlist_id = new BehaviorSubject('');
    private _playlist = inject(MAT_DIALOG_DATA);
    private _dialog_ref = inject(
        MatDialogRef<SignageApprovePlaylistModalComponent>,
    );
    private _service = inject(SignageStateService);

    public readonly loading = signal('');

    public readonly playlist_versions = this._playlist_id.pipe(
        filter((_) => !!_),
        tap(() => this.loading.set('Loading versions...')),
        switchMap((id) => listSignagePlaylistMediaRevisions(id, { limit: 2 })),
        shareReplay(1),
    );

    public readonly playlist_media = combineLatest([
        this.playlist_versions,
        this._service.media,
    ]).pipe(
        map(([playlists, media]) =>
            playlists.map((playlist) =>
                playlist.items.map((id) => media.find((m) => m.id === id)),
            ),
        ),
        tap(() => this.loading.set('')),
        shareReplay(1),
    );

    public ngOnInit() {
        console.log('Playlist', this._playlist);
        this._playlist_id.next(this._playlist.id);
    }

    public async undoChanges() {
        this.loading.set('Undoing changes...');
        this._dialog_ref.disableClose = true;
        const [, previous] = await nextValueFrom(this.playlist_versions);
        await lastValueFrom(
            updateSignagePlaylistMedia(this._playlist.id, previous.items),
        );
        this.loading.set('');
        this._dialog_ref.disableClose = false;
        notifySuccess(i18n('APP.CONCIERGE.SIGNAGE_PLAYLISTS_UNDONE'));
        this._dialog_ref.close();
        this._service.changed();
    }

    public async approve() {
        this.loading.set('Approving playlist...');
        this._dialog_ref.disableClose = true;
        await lastValueFrom(approveSignagePlaylist(this._playlist.id));
        this.loading.set('');
        this._dialog_ref.disableClose = false;
        notifySuccess(i18n('APP.CONCIERGE.SIGNAGE_PLAYLISTS_APPROVED'));
        this._dialog_ref.close();
        this._service.changed();
    }
}
