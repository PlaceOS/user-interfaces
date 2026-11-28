import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { i18n } from '@placeos/common';
import {
    playlist,
    type Playlist,
    playlist_media,
    type PlaylistItem,
    signage_templates,
    type SignageTemplate,
    type System,
    type Zone,
    zones as zones_v7,
} from '@placeos/ts-client';
import { orThrowPage } from '@placeos/ts-client/compat';
import { querySignageDisplays } from '../displays/signage-display';
import { SignageContextService } from '../signage-context.service';
import { searchParam } from '../signage-service.util';
import { decodeEntityNames } from './decode-entity-names.util';

/** Command palette search results with no matches */
const EMPTY_SEARCH_RESULTS = {
    displays: [] as System[],
    playlists: [] as Playlist[],
    templates: [] as SignageTemplate[],
    zones: [] as Zone[],
    media: [] as PlaylistItem[],
};

/**
 * Opens the command palette and searches for it. The app root calls `toggle`
 * for Cmd+K or Ctrl+K and the nav sidebar calls it from its search button.
 */
@Injectable({ providedIn: 'root' })
export class CommandPaletteService {
    private readonly _dialog = inject(MatDialog);
    private readonly _context = inject(SignageContextService);
    private _ref: MatDialogRef<unknown> | null = null;
    private _opening = false;

    /** Open the palette, or close it when it is already open */
    public async toggle() {
        if (this._ref) {
            this._ref.close();
            return;
        }
        // Do not stack the palette on top of another dialog
        if (this._opening || this._dialog.openDialogs.length) return;
        this._opening = true;
        try {
            const { CommandPaletteComponent } =
                await import('./command-palette.component');
            this._ref = this._dialog.open(CommandPaletteComponent, {
                position: { top: '12vh' },
                width: '36rem',
                maxWidth: '95vw',
                ariaLabel: i18n('SIGNAGE_MANAGER.PALETTE_OPEN'),
            });
            this._ref.afterClosed().subscribe(() => (this._ref = null));
        } finally {
            this._opening = false;
        }
    }

    /**
     * First matches of each signage type for a search, for the command
     * palette. A type is empty when its query fails or is not available.
     * @param search Text to search for
     * @param limit Most results to return for each type
     */
    public async searchAll(search: string, limit = 5) {
        const term = search.trim();
        if (!term || !this._context.canQueryLists()) {
            return EMPTY_SEARCH_RESULTS;
        }
        const display_params = {
            ...this._context.orgZoneQueryParams({ limit }),
            ...searchParam(term),
        };
        const group_params = this._context.groupQueryParams({
            limit,
            ...searchParam(term),
        });
        const settle = async <T>(query: Promise<{ data?: readonly T[] }>) => {
            try {
                const data = (await query).data || [];
                return data.slice(0, limit).map(decodeEntityNames);
            } catch {
                return [] as T[];
            }
        };
        const [displays, playlists, templates, zones, media] =
            await Promise.all([
                settle(
                    querySignageDisplays({ ...display_params, signage: true }),
                ),
                settle(playlist.query(group_params).then(orThrowPage)),
                this._context.templates_enabled()
                    ? settle(
                          signage_templates
                              .query(group_params)
                              .then(orThrowPage),
                      )
                    : Promise.resolve([] as SignageTemplate[]),
                settle(
                    zones_v7
                        .query({ ...group_params, tags: ['signage'] })
                        .then(orThrowPage),
                ),
                settle(playlist_media.query(group_params).then(orThrowPage)),
            ]);
        return { displays, playlists, templates, zones, media };
    }
}
