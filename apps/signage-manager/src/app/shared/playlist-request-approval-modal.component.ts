import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { notifyError, notifySuccess, notifyWarn } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import {
    listSignagePlaylistMediaRevisions,
    SignageMedia,
    SignagePlaylist,
    type SignagePlaylistApprover,
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

export interface PlaylistRequestApprovalModalData {
    playlist: SignagePlaylist;
    approvers: SignagePlaylistApprover[];
    selected_approver_id?: string;
}

export interface PlaylistRequestApprovalModalResult {
    approver_id: string;
    message: string;
}

@Component({
    selector: 'playlist-request-approval-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">Request Approval</h2>
            @if (!loading()) {
                <button
                    icon
                    type="button"
                    matRipple
                    mat-dialog-close
                    aria-label="Close request approval dialog"
                >
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main
                class="flex max-h-[70vh] max-w-[calc(100vw-2rem)] flex-col gap-4 overflow-auto px-4 pt-2 pb-4 max-md:w-auto max-md:flex-1"
                [ngClass]="show_preview() ? 'w-[50rem]' : 'w-[28rem]'"
            >
                @if (!show_preview()) {
                    <div>
                        <div class="text-base-content/70 text-sm">Playlist</div>
                        <div class="font-medium">{{ data.playlist.name }}</div>
                    </div>
                    <div>
                        <label for="approval-approver">Approver</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <mat-select
                                name="approval-approver"
                                [(ngModel)]="selected_approver_id"
                            >
                                <mat-option value="">Anyone</mat-option>
                                @for (item of data.approvers; track item.id) {
                                    <mat-option [value]="item.id">
                                        {{ item.name || item.id }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="message">Message</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <textarea
                                matInput
                                name="message"
                                class="min-h-28 resize-y"
                                placeholder="Add a note for the approvers..."
                                [(ngModel)]="message"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                <button
                    type="button"
                    matRipple
                    class="border-base-300 bg-base-100 flex w-full items-center justify-between rounded-sm border p-2 text-left"
                    [class.bg-base-200]="show_preview()"
                    [attr.aria-pressed]="show_preview()"
                    [attr.aria-label]="
                        show_preview()
                            ? 'Hide approval changes'
                            : 'Show approval changes'
                    "
                    (click)="show_preview.set(!show_preview())"
                >
                    <div>
                        <div class="font-medium">Preview changes</div>
                        <div class="text-base-content/70 text-sm">
                            Compare the pending version with the previous
                            version.
                        </div>
                    </div>
                    <icon class="px-2 text-2xl">{{
                        show_preview() ? 'visibility_off' : 'visibility'
                    }}</icon>
                </button>
                @if (show_preview()) {
                    @let versions = playlist_versions | async;
                    @let media = playlist_media | async;
                    <playlist-approval-preview
                        [versions]="versions || []"
                        [media]="media || []"
                        (preview)="previewItem($event)"
                    />
                }
            </main>
            <footer
                class="border-base-300 bg-base-100 sticky bottom-0 flex justify-end gap-2 border-t p-4"
            >
                @if (!show_preview()) {
                    <button
                        btn
                        type="button"
                        matRipple
                        class="inverse w-36"
                        mat-dialog-close
                    >
                        Cancel
                    </button>
                }
                @if (show_preview() && can_update()) {
                    <button
                        btn
                        type="button"
                        matRipple
                        class="inverse w-40"
                        [disabled]="!has_previous_version()"
                        (click)="undoChanges()"
                    >
                        Undo Changes
                    </button>
                }
                @if (!show_preview()) {
                    <button
                        btn
                        type="button"
                        matRipple
                        class="w-44"
                        (click)="submit()"
                    >
                        Request Approval
                    </button>
                }
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
    `,
    imports: [
        CommonModule,
        FormsModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        IconComponent,
        PlaylistApprovalPreviewComponent,
    ],
})
export class PlaylistRequestApprovalModalComponent implements OnInit {
    private readonly _playlist_id = new BehaviorSubject('');
    private readonly _service = inject(SignageService);
    public readonly data =
        inject<PlaylistRequestApprovalModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref =
        inject<
            MatDialogRef<
                PlaylistRequestApprovalModalComponent,
                PlaylistRequestApprovalModalResult
            >
        >(MatDialogRef);

    public readonly selected_approver_id = signal(
        this.data.selected_approver_id || '',
    );
    public readonly message = signal('');
    public readonly show_preview = signal(false);
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
        this._playlist_id.next(this.data?.playlist?.id || '');
    }

    public submit() {
        this._dialog_ref.close({
            approver_id: this.selected_approver_id(),
            message: this.message().trim(),
        });
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
                    this.data.playlist.id,
                    previous_version.items,
                ),
            );
            this._service.setPlaylistApprovalStatus(
                this.data.playlist.id,
                false,
            );
            notifySuccess('Playlist reverted to previous version');
            this._dialog_ref.close();
            this._service.changed();
        } catch {
            notifyError('Error reverting playlist changes');
        } finally {
            this.loading.set('');
            this._dialog_ref.disableClose = false;
        }
    }

    public previewItem(item: SignageMedia) {
        this._service.previewMedia(item);
    }
}
