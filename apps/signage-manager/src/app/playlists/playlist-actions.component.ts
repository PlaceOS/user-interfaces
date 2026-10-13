import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignageContextService } from '../signage-context.service';
import { SignagePlaylistService } from './signage-playlist.service';

/**
 * Action buttons for the selected playlist: approve or request approval,
 * edit, duplicate, share and delete. The buttons are laid out by the parent.
 */
@Component({
    selector: 'playlist-actions',
    template: `
        @if (requires_approval()) {
            @if (can_approve()) {
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [matTooltip]="
                        'SIGNAGE_MANAGER.APPROVE_PLAYLIST_TOOLTIP' | translate
                    "
                    (click)="approvePlaylist()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.APPROVE_SELECTED_PLAYLIST' | translate
                    "
                >
                    <icon class="text-warning">order_approve</icon>
                </button>
            } @else {
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    [matTooltip]="
                        'SIGNAGE_MANAGER.REQUEST_PLAYLIST_APPROVAL_TOOLTIP'
                            | translate
                    "
                    (click)="requestApproval()"
                    [disabled]="approval_request_loading()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.REQUEST_APPROVAL_SELECTED' | translate
                    "
                >
                    @if (approval_request_loading()) {
                        <mat-spinner diameter="20" />
                    } @else {
                        <icon class="text-warning">approval</icon>
                    }
                </button>
            }
        }
        @if (can_update()) {
            <button
                icon
                default
                type="button"
                matRipple
                [matTooltip]="
                    'SIGNAGE_MANAGER.EDIT_PLAYLIST_TOOLTIP' | translate
                "
                (click)="editPlaylist()"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.EDIT_SELECTED_PLAYLIST' | translate
                "
            >
                <icon>edit</icon>
            </button>
        }
        @if (can_create()) {
            <button
                icon
                default
                type="button"
                matRipple
                [matTooltip]="
                    'SIGNAGE_MANAGER.DUPLICATE_PLAYLIST_TOOLTIP' | translate
                "
                (click)="duplicatePlaylist()"
                [disabled]="duplicating()"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.DUPLICATE_SELECTED_PLAYLIST' | translate
                "
            >
                @if (duplicating()) {
                    <mat-spinner diameter="20" />
                } @else {
                    <icon>content_copy</icon>
                }
            </button>
        }
        @if (can_share()) {
            <button
                icon
                default
                type="button"
                matRipple
                [matTooltip]="
                    'SIGNAGE_MANAGER.SHARE_PLAYLIST_TOOLTIP' | translate
                "
                (click)="sharePlaylist()"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.SHARE_SELECTED_PLAYLIST' | translate
                "
            >
                <icon>ios_share</icon>
            </button>
        }
        @if (can_delete()) {
            <button
                icon
                default
                error
                type="button"
                matRipple
                [matTooltip]="
                    'SIGNAGE_MANAGER.DELETE_PLAYLIST_TOOLTIP' | translate
                "
                (click)="removePlaylist()"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.DELETE_SELECTED_PLAYLIST' | translate
                "
            >
                <icon>delete</icon>
            </button>
        }
    `,
    styles: [
        `
            :host {
                display: contents;
            }
        `,
    ],
    imports: [
        MatRippleModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class PlaylistActionsComponent {
    private readonly _context = inject(SignageContextService);
    private readonly _playlist_service = inject(SignagePlaylistService);
    private readonly _router = inject(Router);

    public readonly selected_playlist =
        this._playlist_service.selected_playlist;
    public readonly requires_approval =
        this._playlist_service.selected_playlist_requires_approval;
    public readonly can_approve = this._context.can_approve;
    public readonly can_update = this._context.can_update;
    public readonly can_create = this._context.can_create;
    public readonly can_delete = this._context.can_delete;
    public readonly can_share = this._context.can_share;
    public readonly approval_request_loading =
        this._playlist_service.playlist_approval_request_loading;
    public readonly duplicating = this._playlist_service.playlist_duplicating;

    public editPlaylist() {
        const playlist = this.selected_playlist();
        if (playlist) this._playlist_service.editPlaylist(playlist);
    }

    public removePlaylist() {
        const playlist = this.selected_playlist();
        if (playlist) this._playlist_service.removePlaylist(playlist);
    }

    public approvePlaylist() {
        const playlist = this.selected_playlist();
        if (playlist) this._playlist_service.approvePlaylist(playlist);
    }

    public requestApproval() {
        const playlist = this.selected_playlist();
        if (playlist) this._playlist_service.requestPlaylistApproval(playlist);
    }

    public async duplicatePlaylist() {
        const playlist = this.selected_playlist();
        if (!playlist) return;
        const copy = await this._playlist_service.duplicatePlaylist(playlist);
        if (copy?.id) {
            void this._router.navigate(['/playlists', copy.id], {
                queryParamsHandling: 'merge',
            });
        }
    }

    public sharePlaylist() {
        const playlist = this.selected_playlist();
        if (playlist) this._playlist_service.sharePlaylist(playlist);
    }
}
