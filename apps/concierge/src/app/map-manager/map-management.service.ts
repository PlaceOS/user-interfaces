import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    BuildingLevel,
    currentUser,
    OrganisationService,
    SettingsService,
    shareTokenWith,
    UploadsService,
} from '@placeos/common';
import { getMapDetails } from '@placeos/components';
import { ProtectedIdSource } from '@placeos/map-editor';
import {
    PlaceZone,
    showMetadata,
    showZone,
    updateMetadata,
    updateZone,
} from '@placeos/ts-client';
import { LevelModalComponent } from '../level-manager/level-modal.component';
import {
    appendMapHistory,
    isApiUpload,
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

    /** File names of upload-backed maps, by map URL, read from each level's map history. */
    private readonly _map_names = signal<ReadonlyMap<string, string>>(
        new Map(),
    );
    private readonly _name_lookups = new Map<string, Promise<void>>();

    /** Levels with a map, filtered by the current options. */
    public readonly rows = computed(() =>
        mapRows(
            this._org.level_list(),
            this._org.building_list(),
            this._options(),
            this._map_names(),
        ),
    );

    constructor() {
        effect(() => {
            for (const row of this.rows()) {
                if (isApiUpload(row.map_id)) this._resolveMapName(row.level);
            }
        });
    }

    /** The file name the map was last saved under, when known. */
    public mapName(map_id: string): string | undefined {
        return this._map_names().get(map_id);
    }

    /** Looks up the file name a level's map was saved under; one lookup per map URL. */
    private _resolveMapName(level: BuildingLevel): Promise<void> {
        const url = level.map_id;
        if (!url) return Promise.resolve();
        let lookup = this._name_lookups.get(url);
        if (!lookup) {
            lookup = this._lookUpMapName(level.id, url);
            this._name_lookups.set(url, lookup);
        }
        return lookup;
    }

    private async _lookUpMapName(level_id: string, url: string) {
        const metadata = await showMetadata(level_id, MAP_HISTORY_KEY).catch(
            () => null,
        );
        const entries = Array.isArray(metadata?.details)
            ? (metadata.details as MapHistoryEntry[])
            : [];
        const match = entries.find(
            (entry) => entry.map_id === url && !!entry.file_name,
        );
        if (match?.file_name) {
            const name = match.file_name;
            this._map_names.update((map) => new Map(map).set(url, name));
        }
    }

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

    public studioUrl(level_id?: string | null): string {
        return mapStudioUrl(this._settings.get('app.map_studio_url'), level_id);
    }

    /** Opens Map Studio in a new tab, signed in with this app's PlaceOS token, on the level when one is given. */
    public openStudio(level_id?: string | null) {
        const url = new URL(this.studioUrl(level_id), location.href);
        const studio = window.open(url.href, '_blank');
        if (studio) shareTokenWith(studio, url.origin);
    }

    /** The level's map as text, the way the viewer fetches it. */
    public async loadMapText(level: BuildingLevel): Promise<string> {
        const details = await getMapDetails(level.map_id);
        return details.raw_data;
    }

    /** Store the picture of the map an AI request carries; answers with the upload id. */
    public uploadMapSnapshot(blob: Blob, name: string): Promise<string> {
        const file = new File([blob], name, { type: blob.type || 'image/png' });
        return this._uploads.uploadFileToCompletion(file);
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
        if (isApiUpload(level.map_id)) await this._resolveMapName(level);
        const file_name = mapFileName(
            level,
            level.map_id,
            this._map_names().get(level.map_id),
        );
        const file = new File([markup], file_name, {
            type: 'image/svg+xml',
        });
        const upload_id = await this._uploads.uploadFileToCompletion(file);
        const map_id = `/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
        const response = await updateZone(level.id, { id: level.id, map_id });
        const zone = new PlaceZone({ ...level, ...response, map_id });
        this._org.addZone(zone);
        this._map_names.update((map) => new Map(map).set(map_id, file_name));
        await this._recordHistory(level.id, {
            upload_id,
            map_id,
            at: Date.now(),
            by: currentUser()?.email || '',
            summary,
            file_name,
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
