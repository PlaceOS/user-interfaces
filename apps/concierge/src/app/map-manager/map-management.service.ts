import { computed, inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    BuildingLevel,
    currentUser,
    OrganisationService,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import { getMapDetails } from '@placeos/components';
import { ProtectedIdSource } from '@placeos/map-editor';
import {
    authority,
    PlaceZone,
    showMetadata,
    showZone,
    updateMetadata,
    updateZone,
} from '@placeos/ts-client';
import { LevelModalComponent } from '../level-manager/level-modal.component';
import {
    appendMapHistory,
    mapFileName,
    MapHistoryEntry,
    MapListOptions,
    mapRows,
    mapStudioUrl,
} from './map-list.utilities';
import { conciergeProtectedIdSources } from './protected-ids';

export const MAP_HISTORY_KEY = 'map-history';

export interface SavedLevelMap {
    upload_id: string;
    map_id: string;
    zone: PlaceZone;
}

@Injectable({
    providedIn: 'root',
})
export class MapManagementService {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);
    private _uploads = inject(UploadsService);

    private _options = signal<MapListOptions>({});

    public readonly options = this._options.asReadonly();
    public readonly buildings = this._org.building_list;

    /** Levels with a map, filtered by the current options. */
    public readonly rows = computed(() =>
        mapRows(
            this._org.level_list(),
            this._org.building_list(),
            this._options(),
        ),
    );

    public setFilters(options: Partial<MapListOptions>) {
        this._options.update((current) => ({ ...current, ...options }));
    }

    public setSearchString(search: string) {
        this._options.update((current) => ({ ...current, search }));
    }

    public level(id: string): BuildingLevel | undefined {
        return this._org.level_list().find((level) => level.id === id);
    }

    public building(level: BuildingLevel | undefined) {
        return this._org
            .building_list()
            .find((building) => building.id === level?.parent_id);
    }

    public editLevel(level: BuildingLevel) {
        const ref = this._dialog.open(LevelModalComponent, { data: level });
        ref.afterClosed().subscribe((data) => {
            if (data) this._org.addZone(data);
        });
    }

    public studioUrl(floorplan_id?: string | null): string {
        return mapStudioUrl(
            this._settings.get('app.map_studio_url'),
            floorplan_id,
        );
    }

    public openStudio(floorplan_id?: string | null) {
        window.open(this.studioUrl(floorplan_id), '_blank', 'noopener');
    }

    /** The level's map as text, the way the viewer fetches it. */
    public async loadMapText(level: BuildingLevel): Promise<string> {
        const details = await getMapDetails(level.map_id);
        return details.raw_data;
    }

    /** The map URL the server holds now, to spot a change made elsewhere. */
    public async currentMapId(level_id: string): Promise<string> {
        const zone = await showZone(level_id);
        return zone.map_id || '';
    }

    public protectedIdSources(
        level: BuildingLevel,
    ): Record<string, ProtectedIdSource> {
        return conciergeProtectedIdSources(level, this._org.organisation.id);
    }

    /**
     * Upload the map, point the level at it and record the version. The
     * history write never fails the save.
     */
    public async saveLevelMap(
        level: BuildingLevel,
        markup: string,
        summary: string,
    ): Promise<SavedLevelMap> {
        const file = new File([markup], mapFileName(level), {
            type: 'image/svg+xml',
        });
        const upload_id = await this._uploads.uploadFileToCompletion(file);
        const map_id = `/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
        const level_name =
            level.name ||
            `LEVEL ${authority()?.description} ${level.display_name || level.id}`;
        const tags = level.tags?.length ? level.tags : ['level'];
        const response = await updateZone(level.id, {
            id: level.id,
            display_name: level.display_name,
            parent_id: level.parent_id,
            map_id,
            name: level_name,
            tags,
        });
        const zone = {
            ...level,
            ...response,
            map_id,
            tags: response?.tags?.length ? response.tags : tags,
        } as unknown as PlaceZone;
        this._org.addZone(zone);
        await this._recordHistory(level.id, {
            upload_id,
            map_id,
            at: Date.now(),
            by: currentUser()?.email || '',
            summary,
        }).catch((error) =>
            console.warn('Map history was not recorded for', level.id, error),
        );
        return { upload_id, map_id, zone };
    }

    private async _recordHistory(level_id: string, entry: MapHistoryEntry) {
        const existing = await showMetadata(level_id, MAP_HISTORY_KEY).catch(
            () => null,
        );
        await updateMetadata(level_id, {
            name: MAP_HISTORY_KEY,
            details: appendMapHistory(existing?.details, entry),
            description: 'Map versions saved from Concierge',
        });
    }
}
