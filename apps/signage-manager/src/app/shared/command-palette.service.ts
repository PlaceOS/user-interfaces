import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { i18n } from '@placeos/common';
import {
    PlaceSystem,
    PlaceZone,
    querySignageMedia,
    querySignagePlaylists,
    querySignageTemplates,
    queryZones,
    SignageMedia,
    SignagePlaylist,
    SignageTemplate,
} from '@placeos/ts-client';
import { querySignageDisplays } from '../displays/signage-display';
import { SignageContextService } from '../signage-context.service';
import { searchParam } from '../signage-service.util';
import { decodeEntityNames } from './decode-entity-names.util';

/** Command palette search results with no matches */
const EMPTY_SEARCH_RESULTS = {
    displays: [] as PlaceSystem[],
    playlists: [] as SignagePlaylist[],
    templates: [] as SignageTemplate[],
    zones: [] as PlaceZone[],
    media: [] as SignageMedia[],
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
        const params = {
            ...this._context.orgZoneQueryParams({ limit }),
            ...searchParam(term),
        };
        const group_params = this._context.groupQueryParams({
            limit,
            ...searchParam(term),
        });
        const settle = async <T>(query: Promise<{ data?: T[] }>) => {
            try {
                const data = (await query).data || [];
                return data.slice(0, limit).map(decodeEntityNames);
            } catch {
                return [] as T[];
            }
        };
        const [displays, playlists, templates, zones, media] =
            await Promise.all([
                settle(querySignageDisplays({ ...params, signage: true })),
                settle(querySignagePlaylists(params)),
                this._context.templates_enabled()
                    ? settle(querySignageTemplates(group_params))
                    : Promise.resolve([] as SignageTemplate[]),
                settle(queryZones({ ...group_params, tags: 'signage' })),
                settle(querySignageMedia(params)),
            ]);
        return { displays, playlists, templates, zones, media };
    }
}
