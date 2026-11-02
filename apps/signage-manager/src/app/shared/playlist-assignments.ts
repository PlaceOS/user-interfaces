import { effect, untracked, type WritableSignal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { i18n, notifyError, notifySuccess } from '@placeos/common';
import { type SignagePlaylist } from '@placeos/ts-client';
import { type SignagePlaylistService } from '../playlists/signage-playlist.service';
import { type SignageContextService } from '../signage-context.service';
import { dialogClosed } from '../signage-service.util';
import { decodeEntityNames } from './decode-entity-names.util';

/** Display or zone that holds a list of playlist IDs */
interface PlaylistHolder {
    id: string;
    version: number;
    playlists?: readonly string[];
}

/** Parts that differ between display and zone playlist assignment */
export interface PlaylistAssignmentsOptions<T extends PlaylistHolder> {
    context: SignageContextService;
    playlist_service: SignagePlaylistService;
    dialog: MatDialog;
    /** Saved copies of items, kept until the lists reload */
    overrides: WritableSignal<Record<string, T>>;
    /** Selected item of the page that shows the items */
    selected: WritableSignal<T | null>;
    /** Field of the takeover check that holds the item ID */
    target: 'display_id' | 'zone_id';
    /** Translation key of the error when the playlist is already assigned */
    already_assigned_key: string;
    /** Translation key of the error when adding a playlist fails */
    add_error_key: string;
    /** Save new playlist IDs of an item */
    save_playlists: (item: T, playlists: string[]) => Promise<T>;
}

const ASSIGNMENT_ERROR = 'SIGNAGE_MANAGER.SVC_ASSIGNMENT_ERROR';

/**
 * Adds playlists to displays or zones and takes them off. Keeps each saved
 * item in `overrides` until the lists reload. Create it in an injection
 * context, as it clears `overrides` when the group or data changes.
 */
export class PlaylistAssignments<T extends PlaylistHolder> {
    constructor(private readonly _options: PlaylistAssignmentsOptions<T>) {
        // Local edits only bridge the gap until the lists reload. Drop them
        // when the group or data changes, so a stale copy never hides newer
        // server data or sends an old version with the next patch.
        effect(() => {
            _options.context.api_group_id();
            _options.context.data_change();
            untracked(() => _options.overrides.set({}));
        });
    }

    /** Whether the user can change assignments. Warns when not. */
    public canAssign() {
        return this._options.context.requirePermission(
            this._options.context.can_update(),
            'SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS',
        );
    }

    /** Let the user pick a playlist. Undefined when the picker is closed. */
    public async pickPlaylist() {
        const { PlaylistSelectModalComponent } =
            await import('./playlist-select-modal.component');
        const ref = this._options.dialog.open(PlaylistSelectModalComponent, {
            panelClass: 'mobile-fullscreen',
        });
        return dialogClosed<string>(ref);
    }

    /**
     * Keep a saved item until the lists reload.
     * @returns The item with its names decoded, to use for selection
     */
    public cache(item: T) {
        const decoded = decodeEntityNames(item);
        if (!decoded?.id) return decoded;
        this._options.overrides.update((state) => ({
            ...state,
            [decoded.id]: decoded,
        }));
        return decoded;
    }

    /** Show a saved item in place of the selected item, when it is that item */
    public updateSelection(item: T | null) {
        if (item && this._options.selected()?.id === item.id) {
            this._options.selected.set(item);
        }
    }

    /**
     * Add a playlist to an item, after a check for takeover conflicts.
     * @param change Playlist to add, with its unsaved version when known
     * @returns The saved item, or null when nothing was saved
     */
    public async add(
        item: T,
        change: { playlist_id: string; playlist?: SignagePlaylist },
        success_key: string,
    ) {
        if (item.playlists?.includes(change.playlist_id)) {
            notifyError(i18n(this._options.already_assigned_key));
            return null;
        }
        const confirmed =
            await this._options.playlist_service.confirmTakeoverChange({
                ...change,
                [this._options.target]: item.id,
            });
        if (!confirmed) return null;
        return this.save(
            () =>
                this._options.save_playlists(item, [
                    ...(item.playlists || []),
                    change.playlist_id,
                ]),
            success_key,
            this._options.add_error_key,
        );
    }

    /**
     * Take a playlist off an item.
     * @returns The saved item, or null when nothing was saved
     */
    public async remove(item: T, playlist_id: string, success_key: string) {
        if (!this.canAssign()) return null;
        return this.save(
            () =>
                this._options.save_playlists(
                    item,
                    (item.playlists || []).filter((id) => id !== playlist_id),
                ),
            success_key,
        );
    }

    /**
     * Run a save of an item and keep the result until the lists reload.
     * @param error_key Translation key of the error to show when it fails
     * @returns The saved item, or null after showing an error when it fails
     */
    public async save(
        request: () => Promise<T>,
        success_key: string,
        error_key = ASSIGNMENT_ERROR,
    ) {
        const updated = await request().catch(() => null);
        if (!updated) {
            notifyError(i18n(error_key));
            return null;
        }
        const saved = this.cache(updated);
        this._options.context.changed();
        notifySuccess(i18n(success_key));
        return saved;
    }
}
