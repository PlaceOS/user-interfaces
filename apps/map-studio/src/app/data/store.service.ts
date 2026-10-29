import { inject, Injectable, signal } from '@angular/core';

import { DbService } from './db';
import type { PlaceOSZone } from './placeos.service';
import { PlaceOSService } from './placeos.service';
import { analyzeSvg, SvgAnalysis } from './svg-import';
import { makeThumbnail } from './thumbnail';
import {
    EditorState,
    Floorplan,
    FloorplanCanvas,
    FloorplanSummary,
    FloorplanVersion,
    MapObject,
    MapObjectType,
    Project,
    ValidationIssue,
} from './types';

type ZoneReference = Pick<PlaceOSZone, 'id' | 'name' | 'display_name'>;

/** PlaceOS requests in flight at once during zone sync */
const SYNC_CONCURRENCY = 6;

/** Progress of the background import of PlaceOS buildings and levels */
export type PlaceOSSyncState = 'idle' | 'syncing' | 'done' | 'error';

function localFloorplanData(metadata: Partial<Floorplan> = {}) {
    const saved = { ...metadata };
    delete saved.id;
    delete saved.project_id;
    delete saved.level_zone_id;
    delete saved.source_image_path;
    delete saved.source_type;
    delete saved.created_at;
    return saved;
}

const key = {
    project: (id: string) => `project:${id}`,
    floorplan: (id: string) => `floorplan:${id}`,
    canvas: (id: string) => `canvas:${id}`,
    object: (floorplan_id: string, id: string) =>
        `object:${floorplan_id}:${id}`,
    objects: (floorplan_id: string) => `object:${floorplan_id}:`,
    /** Zero-padded so a prefix scan comes back in version order */
    version: (floorplan_id: string, version: number) =>
        `version:${floorplan_id}:${`${version}`.padStart(8, '0')}`,
    versions: (floorplan_id: string) => `version:${floorplan_id}:`,
    image: (floorplan_id: string) => `image:${floorplan_id}`,
    thumbnail: (floorplan_id: string) => `thumbnail:${floorplan_id}`,
    /** PlaceOS zone whose local project or floorplan the user deleted */
    deleted_zone: (zone_id: string) => `deleted-zone:${zone_id}`,
    deleted_zones: () => 'deleted-zone:',
};

/** Floorplan fields that storage keeps in the canvas record */
const CANVAS_FIELDS = [
    'canvas_state',
    'svg_output',
    'svg_source',
    'svg_source_ids',
] as const satisfies readonly (keyof FloorplanCanvas)[];

/** Records that store `floorplan`: its summary and, apart, its canvas */
function floorplanRecords(floorplan: Floorplan): [string, unknown][] {
    const { canvas_state, svg_output, svg_source, svg_source_ids, ...summary } =
        floorplan;
    const canvas: FloorplanCanvas = {
        canvas_state,
        svg_output,
        svg_source,
        svg_source_ids,
    };
    return [
        [key.floorplan(floorplan.id), summary],
        [key.canvas(floorplan.id), canvas],
    ];
}

const now = () => new Date().toISOString();

/** Thumbnail key to delete when an imported floor's SVG plan changes */
function staleThumbnail(before: Floorplan, after: Floorplan): string[] {
    return before.svg_source !== after.svg_source ||
        before.svg_output !== after.svg_output
        ? [key.thumbnail(after.id)]
        : [];
}

function serverSaveMessage(error: unknown): string {
    const detail = error instanceof Error ? error.message : String(error ?? '');
    const status = (error as { status?: number } | null)?.status;
    return status === 413 || /\b413\b/.test(detail)
        ? 'Saved in this browser only. The floorplan is too large to store in PlaceOS.'
        : 'Saved in this browser only. PlaceOS did not accept the floorplan.';
}
const uuid = () => crypto.randomUUID();

const CSV_COLUMNS = [
    'id',
    'floorplan_id',
    'object_type',
    'svg_id',
    'label',
    'geometry',
    'entity_type',
    'entity_id',
    'layer',
    'fill_color',
    'stroke_color',
    'opacity',
    'capacity',
    'amenities',
    'tags',
    'metadata',
    'group_id',
    'z_index',
    'locked',
    'visible',
] as const;

/** Split a CSV line, honouring quoted fields containing commas or quotes */
function parseCsvLine(line: string): string[] {
    const fields: string[] = [];
    let current = '';
    let in_quotes = false;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (in_quotes) {
            if (char === '"' && line[i + 1] === '"') {
                current += '"';
                i++;
            } else if (char === '"') in_quotes = false;
            else current += char;
        } else if (char === '"') in_quotes = true;
        else if (char === ',') {
            fields.push(current.trim());
            current = '';
        } else current += char;
    }
    fields.push(current.trim());
    return fields;
}

function toCsvField(value: unknown): string {
    if (value === null || value === undefined) return '';
    const str = typeof value === 'object' ? JSON.stringify(value) : `${value}`;
    return /[,"\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
}

/**
 * Projects, floorplans and map objects, persisted in the browser.
 *
 * Mirrors the REST surface of the reference application so the pages read the
 * same way, but every call resolves against IndexedDB — there is no server.
 */
@Injectable({ providedIn: 'root' })
export class StoreService {
    private readonly _db = inject(DbService);
    private readonly _placeos = inject(PlaceOSService);
    public readonly zone_sync_version = signal(0);
    /** Why the last floorplan save reached this browser but not PlaceOS; empty once one does. */
    public readonly server_save_error = signal('');
    private _zone_sync: Promise<void> = Promise.resolve();
    private readonly _placeos_sync = signal<PlaceOSSyncState>('idle');

    /** State of the background PlaceOS zone sync started at boot */
    public readonly placeos_sync = this._placeos_sync.asReadonly();

    // ── Projects ────────────────────────────────────────────────────────────

    /** Every project, most recently updated first, with its floorplans attached */
    public async listProjects(): Promise<Project[]> {
        const [projects, floorplans] = await Promise.all([
            this._db.list<Project>('project:'),
            this._db.list<FloorplanSummary>('floorplan:'),
        ]);
        return projects
            .map((project) => ({
                ...project,
                floorplans: floorplans
                    .filter((f) => f.project_id === project.id)
                    .sort((a, b) => a.floor_index - b.floor_index),
            }))
            .sort((a, b) => b.updated_at.localeCompare(a.updated_at));
    }

    public async createProject(
        name: string,
        building_name?: string,
        building_zone_id?: string,
    ): Promise<Project> {
        const project: Project = {
            id: uuid(),
            name,
            building_name: building_name || null,
            building_zone_id: building_zone_id || null,
            status: 'draft',
            created_at: now(),
            updated_at: now(),
        };
        await this._db.set(key.project(project.id), project);
        return project;
    }

    /** Project with its floorplans attached, as the detail page expects */
    public async getProject(id: string): Promise<Project> {
        const project = await this._db.get<Project>(key.project(id));
        if (!project) throw new Error('Project not found');
        const floorplans = (await this._db.list<FloorplanSummary>('floorplan:'))
            .filter((f) => f.project_id === id)
            .sort((a, b) => a.floor_index - b.floor_index);
        return { ...project, floorplans };
    }

    public async updateProject(
        id: string,
        data: Partial<Project>,
    ): Promise<void> {
        const project = await this._db.get<Project>(key.project(id));
        if (!project) throw new Error('Project not found');
        await this._db.set(key.project(id), {
            ...project,
            ...data,
            id,
            updated_at: now(),
        });
    }

    /**
     * Removes the project along with every floorplan and object beneath it. A
     * project made from a PlaceOS building is remembered so that the zone
     * sync does not create it again.
     */
    public async deleteProject(id: string): Promise<void> {
        const project = await this._db.get<Project>(key.project(id));
        const floorplans = (
            await this._db.list<FloorplanSummary>('floorplan:')
        ).filter((f) => f.project_id === id);
        await Promise.all(floorplans.map((f) => this.deleteFloorplan(f.id)));
        await this._db.delete(key.project(id));
        if (project?.building_zone_id) {
            await this._forgetZone(project.building_zone_id);
        }
    }

    // ── Floorplans ──────────────────────────────────────────────────────────

    public async addFloorplan(
        project_id: string,
        floor_name: string,
        floor_index?: number,
        level_zone_id?: string,
        metadata?: Partial<Floorplan>,
    ): Promise<Floorplan> {
        // Only an unplaced floor needs the siblings. It goes after the last
        // one, so a gap left by a delete does not give two floors one index.
        const index =
            floor_index ??
            Math.max(
                -1,
                ...(await this._db.list<FloorplanSummary>('floorplan:'))
                    .filter((f) => f.project_id === project_id)
                    .map((f) => f.floor_index),
            ) + 1;
        const floorplan: Floorplan = {
            id: uuid(),
            project_id,
            floor_name,
            floor_index: index,
            level_zone_id: level_zone_id || null,
            source_image_path: null,
            source_type: null,
            background_opacity: 0.3,
            background_color: null,
            background_locked: true,
            scale_px_per_meter: null,
            canvas_width: null,
            canvas_height: null,
            canvas_state: null,
            svg_output: null,
            status: 'draft',
            version: 1,
            created_at: now(),
            updated_at: now(),
            ...localFloorplanData(metadata),
        };
        await this._db.write({
            put: [
                ...floorplanRecords(floorplan),
                ...this._objectRecords(
                    floorplan.id,
                    floorplan.canvas_state?.objects ?? [],
                ),
            ],
        });
        return floorplan;
    }

    /**
     * Creates the projects and floorplans missing from the PlaceOS zone tree.
     * Calls run one after another, so concurrent syncs never add a floor twice.
     */
    public syncPlaceOSZones(
        buildings: { zone: ZoneReference; levels: ZoneReference[] }[],
    ): Promise<void> {
        const run = this._zone_sync.then(() => this._syncZones(buildings));
        this._zone_sync = run.catch(() => undefined);
        return run;
    }

    /** The local floorplan for a PlaceOS level, adding its building's floors first when it has none. */
    public async floorplanForLevel(
        level_id: string,
    ): Promise<FloorplanSummary> {
        const find = async () =>
            (await this._db.list<FloorplanSummary>('floorplan:')).find(
                (floorplan) => floorplan.level_zone_id === level_id,
            );
        const existing = await find();
        if (existing) return existing;
        const level = await this._placeos.getZone(level_id);
        const building = await this._placeos.getZone(level.parent_id);
        const levels = await this._placeos.getZones('level', building.id);
        // Opening a level on purpose brings it back if it was deleted here
        await this._db.delete(key.deleted_zone(level.id));
        await this._db.delete(key.deleted_zone(building.id));
        await this.syncPlaceOSZones([{ zone: building, levels }]);
        const added = await find();
        if (!added) throw new Error('This level was not found in PlaceOS.');
        return added;
    }

    /**
     * Loads the building and level zones under the active PlaceOS
     * organisation and creates the missing projects. Sets `placeos_sync` while
     * it runs. Call it again to retry after an error.
     */
    public async syncFromPlaceOS(): Promise<void> {
        if (this._placeos_sync() === 'syncing') return;
        this._placeos_sync.set('syncing');
        try {
            const organisation = await this._placeos.getActiveOrganisation();
            if (organisation) {
                const regions = await this._placeos.getZones(
                    'region',
                    organisation.id,
                );
                const building_lists = await Promise.all(
                    [organisation, ...regions].map((parent) =>
                        this._placeos.getZones('building', parent.id),
                    ),
                );
                const zones_by_id = new Map(
                    building_lists.flat().map((zone) => [zone.id, zone]),
                );
                const zones = [...zones_by_id.values()];
                const buildings: {
                    zone: ZoneReference;
                    levels: ZoneReference[];
                }[] = [];
                // A few buildings at a time, so large deployments do not flood the API
                for (let i = 0; i < zones.length; i += SYNC_CONCURRENCY) {
                    buildings.push(
                        ...(await Promise.all(
                            zones
                                .slice(i, i + SYNC_CONCURRENCY)
                                .map(async (zone) => ({
                                    zone,
                                    levels: await this._placeos.getZones(
                                        'level',
                                        zone.id,
                                    ),
                                })),
                        )),
                    );
                }
                await this.syncPlaceOSZones(buildings);
            }
            this._placeos_sync.set('done');
        } catch (error) {
            console.warn('Failed to create projects from PlaceOS zones', error);
            this._placeos_sync.set('error');
        }
    }

    /** Creates the missing projects and floorplans. Zones the user deleted locally are skipped. */
    private async _syncZones(
        buildings: { zone: ZoneReference; levels: ZoneReference[] }[],
    ): Promise<void> {
        const projects = await this.listProjects();
        const deleted = new Set(
            await this._db.list<string>(key.deleted_zones()),
        );
        for (const { zone, levels } of buildings) {
            if (deleted.has(zone.id)) continue;
            let project = projects.find(
                (item) => item.building_zone_id === zone.id,
            );
            if (!project) {
                project = await this.createProject(
                    zone.display_name || zone.name || zone.id,
                    undefined,
                    zone.id,
                );
                project.floorplans = [];
                projects.push(project);
            }

            const existing_levels = new Set(
                project.floorplans?.map((floor) => floor.level_zone_id),
            );
            const missing = [...levels.entries()].filter(
                ([, level]) =>
                    !existing_levels.has(level.id) && !deleted.has(level.id),
            );
            // Fetch metadata a few levels at a time rather than one by one
            for (let i = 0; i < missing.length; i += SYNC_CONCURRENCY) {
                const batch = missing.slice(i, i + SYNC_CONCURRENCY);
                const metadata = await Promise.all(
                    batch.map(([, level]) =>
                        this._placeos
                            .getFloorplanMetadata(level.id)
                            .catch(() => null),
                    ),
                );
                for (const [index, [floor_index, level]] of batch.entries()) {
                    if (existing_levels.has(level.id)) continue;
                    const floorplan = await this.addFloorplan(
                        project.id,
                        level.display_name || level.name || level.id,
                        floor_index,
                        level.id,
                        metadata[index] ?? undefined,
                    );
                    project.floorplans?.push(floorplan);
                    existing_levels.add(level.id);
                }
            }
        }
        this.zone_sync_version.update((version) => version + 1);
    }

    public async getFloorplan(id: string): Promise<Floorplan> {
        const [summary, canvas] = await Promise.all([
            this._db.get<FloorplanSummary>(key.floorplan(id)),
            this._db.get<FloorplanCanvas>(key.canvas(id)),
        ]);
        if (!summary) throw new Error('Floorplan not found');
        return {
            ...summary,
            ...canvas,
            canvas_state: canvas?.canvas_state ?? null,
            svg_output: canvas?.svg_output ?? null,
        };
    }

    public async getNewerServerFloorplan(
        id: string,
    ): Promise<Partial<Floorplan> | null> {
        const floorplan = await this.getFloorplan(id);
        if (!floorplan.level_zone_id || this._placeos.mode() !== 'domain') {
            return null;
        }
        const server = await this._placeos.getFloorplanMetadata(
            floorplan.level_zone_id,
        );
        const server_time = Date.parse(server?.updated_at || '');
        const local_time = Date.parse(floorplan.updated_at);
        return Number.isFinite(server_time) && server_time > local_time
            ? server
            : null;
    }

    public async applyServerFloorplan(
        id: string,
        metadata: Partial<Floorplan>,
    ): Promise<Floorplan> {
        const floorplan = await this.getFloorplan(id);
        const updated = {
            ...floorplan,
            ...localFloorplanData(metadata),
            id,
        };
        await this._db.write({
            delete: staleThumbnail(floorplan, updated),
            ...(updated.canvas_state?.objects
                ? {
                      clear: key.objects(id),
                      put: [
                          ...floorplanRecords(updated),
                          ...this._objectRecords(
                              id,
                              updated.canvas_state.objects,
                          ),
                      ],
                  }
                : { put: floorplanRecords(updated) }),
        });
        return updated;
    }

    public async updateFloorplan(
        id: string,
        updates: Partial<Floorplan>,
    ): Promise<Floorplan> {
        const floorplan = await this.getFloorplan(id);
        const updated = { ...floorplan, ...updates, id, updated_at: now() };
        // The canvas record holds the source SVG, often megabytes, so a
        // rename or reorder rewrites only the summary
        const [summary, canvas] = floorplanRecords(updated);
        const canvas_changed = CANVAS_FIELDS.some((field) => field in updates);
        await this._db.write({
            put: canvas_changed ? [summary, canvas] : [summary],
            delete: staleThumbnail(floorplan, updated),
        });
        if (updated.level_zone_id && this._placeos.mode() === 'domain') {
            const server_updated_at = await this._placeos
                .saveFloorplanMetadata(updated.level_zone_id, updated)
                .then(
                    (saved) => {
                        this.server_save_error.set('');
                        return saved;
                    },
                    (error: unknown) => {
                        this.server_save_error.set(serverSaveMessage(error));
                        return undefined;
                    },
                );
            if (server_updated_at) {
                updated.updated_at = server_updated_at;
                // Only the timestamp changed, so the canvas need not be rewritten
                await this._db.write({ put: [floorplanRecords(updated)[0]] });
            }
        }
        return updated;
    }

    /**
     * Removes the floorplan, its objects, versions and image. A floorplan made
     * from a PlaceOS level is remembered so that the zone sync does not create
     * it again.
     */
    public async deleteFloorplan(id: string): Promise<void> {
        const floorplan = await this._db.get<FloorplanSummary>(
            key.floorplan(id),
        );
        await Promise.all([
            this._db.deleteWhere(key.objects(id)),
            this._db.deleteWhere(key.versions(id)),
            this._db.write({
                delete: [
                    key.image(id),
                    key.thumbnail(id),
                    key.canvas(id),
                    key.floorplan(id),
                ],
            }),
        ]);
        if (floorplan?.level_zone_id) {
            await this._forgetZone(floorplan.level_zone_id);
        }
    }

    /** Records a deleted PlaceOS zone so `syncPlaceOSZones` skips it */
    private async _forgetZone(zone_id: string): Promise<void> {
        await this._db.set(key.deleted_zone(zone_id), zone_id);
    }

    public async saveCanvasState(
        id: string,
        canvas_state: EditorState,
    ): Promise<void> {
        await this.updateFloorplan(id, { canvas_state });
    }

    /** Snapshots the current canvas as a new version and marks it published */
    public async publishFloorplan(id: string): Promise<void> {
        const floorplan = await this.getFloorplan(id);
        if (!floorplan.canvas_state)
            throw new Error('No canvas state to publish');
        const version = (floorplan.version ?? 1) + 1;
        await this._writeVersion(floorplan, version, 'Published');
        await this.updateFloorplan(id, { status: 'published', version });
    }

    public async listVersions(id: string): Promise<FloorplanVersion[]> {
        const versions = await this._db.list<FloorplanVersion>(
            key.versions(id),
        );
        return versions.reverse();
    }

    public async createVersion(id: string, note?: string): Promise<void> {
        const floorplan = await this.getFloorplan(id);
        const version = (floorplan.version ?? 1) + 1;
        await this._writeVersion(floorplan, version, note ?? null);
        await this.updateFloorplan(id, { version });
    }

    public async restoreVersion(id: string, version_id: string): Promise<void> {
        const version = (await this.listVersions(id)).find(
            (v) => v.id === version_id,
        );
        if (!version) throw new Error('Version not found');
        await this.updateFloorplan(id, {
            canvas_state: version.canvas_state,
            svg_source: version.svg_source ?? null,
            svg_source_ids: version.svg_source_ids,
            svg_output: version.svg_output,
        });
    }

    private async _writeVersion(
        floorplan: Floorplan,
        version: number,
        note: string | null,
    ): Promise<void> {
        const snapshot: FloorplanVersion = {
            id: uuid(),
            floorplan_id: floorplan.id,
            version,
            canvas_state: floorplan.canvas_state as EditorState,
            svg_source: floorplan.svg_source,
            svg_source_ids: floorplan.svg_source_ids,
            svg_output: floorplan.svg_output,
            note,
            created_at: now(),
        };
        await this._db.set(key.version(floorplan.id, version), snapshot);
    }

    // ── Source images ───────────────────────────────────────────────────────

    /**
     * Stores the floor plan background image against the floorplan. The
     * reference app wrote these to disk; here the blob lives in IndexedDB and
     * `source_image_path` holds its IndexedDB key.
     */
    public async uploadSourceImage(id: string, file: File): Promise<void> {
        await this._db.write({
            delete: [key.thumbnail(id)],
            put: [[key.image(id), file]],
        });
        await this.updateFloorplan(id, {
            source_image_path: key.image(id),
            source_type: file.type,
        });
    }

    /**
     * Object URL for the stored background image, or null if there isn't one.
     * The caller owns the URL and must revoke it when done.
     */
    public async getSourceImageUrl(id: string): Promise<string | null> {
        const blob = await this.getSourceImage(id);
        return blob ? URL.createObjectURL(blob) : null;
    }

    /**
     * Object URL for a small copy of the background image or imported SVG plan, made and stored on
     * first use. Previews use this so they never decode a full-size plan. The
     * caller owns the URL and must revoke it when done.
     */
    public async getSourceThumbnailUrl(id: string): Promise<string | null> {
        let thumbnail = await this._db.get<Blob>(key.thumbnail(id));
        if (!thumbnail) {
            const image =
                (await this.getSourceImage(id)) ?? (await this._sourceSvg(id));
            if (!image) return null;
            thumbnail = await makeThumbnail(image);
            await this._db.set(key.thumbnail(id), thumbnail);
        }
        return URL.createObjectURL(thumbnail);
    }

    /** Imported SVG floors keep their plan as markup, not as a stored image */
    private async _sourceSvg(id: string): Promise<Blob | null> {
        const canvas = await this._db.get<FloorplanCanvas>(key.canvas(id));
        const svg = canvas?.svg_source || canvas?.svg_output;
        return svg ? new Blob([svg], { type: 'image/svg+xml' }) : null;
    }

    /** Raw source image used by local processing such as AI analysis. */
    public async getSourceImage(id: string): Promise<Blob | null> {
        return (await this._db.get<Blob>(key.image(id))) ?? null;
    }

    /** Imports a level's existing map into its empty local floorplan. */
    public async importLevelSvg(
        id: string,
        svg_content: string,
        map_id?: string,
    ): Promise<Floorplan> {
        const floorplan = await this.getFloorplan(id);
        const analysis = analyzeSvg(svg_content);
        if (!analysis.sourceSvg)
            throw new Error('The file is not a valid SVG map.');
        const blob = new Blob([svg_content], { type: 'image/svg+xml' });
        const updated: Floorplan = {
            ...floorplan,
            svg_source: analysis.sourceSvg,
            svg_source_ids: analysis.objects.map((object) => object.svgId),
            svg_output: analysis.sourceSvg || svg_content,
            canvas_width: analysis.width,
            canvas_height: analysis.height,
            source_image_path: key.image(id),
            source_type: 'image/svg+xml',
            source_map_id: map_id ?? floorplan.source_map_id ?? null,
            updated_at: now(),
        };
        await this._db.write({
            clear: key.objects(id),
            delete: [key.thumbnail(id)],
            put: [
                [key.image(id), blob],
                ...floorplanRecords(updated),
                ...this._objectRecords(id, this._objectsFromSvg(analysis)),
            ],
        });
        return updated;
    }

    // ── SVG import ──────────────────────────────────────────────────────────

    /**
     * Creates a floorplan and objects from an analysed SVG. Adds the floorplan
     * to `project_id` when given, or else to a new project named
     * `project_name`. Nothing is left behind if a step fails. Replaces the
     * reference application's `POST /import/svg/confirm`.
     */
    public async importSvg(options: {
        svg_content: string;
        analysis: SvgAnalysis;
        /** Existing project to add the floor to */
        project_id?: string;
        /** Name of the new project, used when `project_id` is not set */
        project_name?: string;
        floor_name: string;
        /** SVG ids to import, with the type and label the user settled on */
        mappings: { svgId: string; objectType: string; label?: string }[];
        outline_points?: { x: number; y: number }[];
    }): Promise<{ project_id: string; floorplan_id: string; objects: number }> {
        const { svg_content, analysis, floor_name, mappings, outline_points } =
            options;

        if (!analysis.sourceSvg)
            throw new Error('The file is not a valid SVG map.');

        const chosen = new Map(mappings.map((m) => [m.svgId, m]));
        const objects = this._objectsFromSvg(analysis, chosen);
        const source_ids = objects.flatMap((object) =>
            object.svg_id ? [object.svg_id] : [],
        );
        const has_outline = (outline_points?.length ?? 0) >= 3;
        if (has_outline) {
            const points = outline_points as { x: number; y: number }[];
            const xs = points.map((p) => p.x);
            const ys = points.map((p) => p.y);
            objects.push({
                object_type: 'area',
                svg_id: 'floor-outline',
                label: 'Floor Outline',
                geometry: {
                    type: 'polygon',
                    points,
                    x: Math.min(...xs),
                    y: Math.min(...ys),
                    width: Math.max(...xs) - Math.min(...xs),
                    height: Math.max(...ys) - Math.min(...ys),
                },
                layer: 'background',
                fill_color: 'rgba(107,114,128,0.15)',
                stroke_color: '#6b7280',
                z_index: 0,
            });
        }

        const project_id =
            options.project_id ??
            (await this.createProject(options.project_name || floor_name)).id;
        let floorplan_id = '';
        try {
            const floorplan = await this.addFloorplan(project_id, floor_name);
            floorplan_id = floorplan.id;
            await this.updateFloorplan(floorplan_id, {
                svg_source: analysis.sourceSvg,
                svg_source_ids: source_ids,
                svg_output: analysis.sourceSvg || svg_content,
                canvas_width: analysis.width,
                canvas_height: analysis.height,
                source_type: 'svg-import',
            });
            await this.bulkUpsertObjects(floorplan_id, objects);
        } catch (error) {
            if (!options.project_id) await this.deleteProject(project_id);
            else if (floorplan_id) await this.deleteFloorplan(floorplan_id);
            throw error;
        }
        return { project_id, floorplan_id, objects: objects.length };
    }

    private _objectsFromSvg(
        analysis: SvgAnalysis,
        mappings?: Map<
            string,
            { svgId: string; objectType: string; label?: string }
        >,
    ): Partial<MapObject>[] {
        const objects: Partial<MapObject>[] = [];
        for (const [index, parsed] of analysis.objects.entries()) {
            const mapping = mappings?.get(parsed.svgId);
            if (mappings && !mapping) continue;
            objects.push({
                object_type: (mapping?.objectType ??
                    parsed.suggestedType) as MapObjectType,
                svg_id: parsed.svgId,
                label:
                    mapping?.label ||
                    parsed.label ||
                    (parsed.tag === 'text' ? '' : parsed.svgId),
                geometry: parsed.geometry,
                fill_color:
                    parsed.presentation?.fill ||
                    parsed.attributes['fill'] ||
                    null,
                stroke_color:
                    parsed.presentation?.stroke ||
                    parsed.attributes['stroke'] ||
                    null,
                opacity:
                    parsed.presentation?.opacity ??
                    Number(parsed.attributes['opacity'] ?? 1),
                layer: parsed.layer,
                group_id: parsed.groupId,
                z_index: index,
                metadata: {
                    source: 'svg-import',
                    originalTag: parsed.tag,
                    originalAttributes: parsed.attributes,
                    originalGeometry: parsed.geometry,
                    originalFill:
                        parsed.presentation?.fill ||
                        parsed.attributes['fill'] ||
                        null,
                    originalStroke:
                        parsed.presentation?.stroke ||
                        parsed.attributes['stroke'] ||
                        null,
                    originalOpacity:
                        parsed.presentation?.opacity ??
                        Number(parsed.attributes['opacity'] ?? 1),
                    originalLabel:
                        mapping?.label ||
                        parsed.label ||
                        (parsed.tag === 'text' ? '' : parsed.svgId),
                    parentMatrix: parsed.parentMatrix,
                },
            });
        }
        return objects;
    }

    // ── Objects ─────────────────────────────────────────────────────────────

    public async listObjects(floorplan_id: string): Promise<MapObject[]> {
        const objects = await this._db.list<MapObject>(
            key.objects(floorplan_id),
        );
        return objects.sort((a, b) => a.z_index - b.z_index);
    }

    public async createObject(
        floorplan_id: string,
        obj: Partial<MapObject>,
    ): Promise<MapObject> {
        const object = this._toObject(floorplan_id, obj);
        await this._db.set(key.object(floorplan_id, object.id), object);
        return object;
    }

    /** A complete object from `obj`, with defaults for anything missing */
    private _toObject(
        floorplan_id: string,
        obj: Partial<MapObject>,
    ): MapObject {
        return {
            id: obj.id || uuid(),
            floorplan_id,
            object_type: obj.object_type ?? 'zone',
            svg_id: obj.svg_id ?? null,
            label: obj.label ?? null,
            geometry: obj.geometry ?? { type: 'rect' },
            entity_type: obj.entity_type ?? null,
            entity_id: obj.entity_id ?? null,
            layer: obj.layer ?? 'objects',
            fill_color: obj.fill_color ?? null,
            stroke_color: obj.stroke_color ?? null,
            opacity: obj.opacity ?? 1,
            capacity: obj.capacity ?? null,
            amenities: obj.amenities ?? null,
            tags: obj.tags ?? null,
            metadata: obj.metadata ?? null,
            group_id: obj.group_id ?? null,
            z_index: obj.z_index ?? 0,
            locked: obj.locked ?? false,
            visible: obj.visible ?? true,
        };
    }

    /** Key/value pairs that store `objects` under the floorplan */
    private _objectRecords(
        floorplan_id: string,
        objects: Partial<MapObject>[],
    ): [string, MapObject][] {
        return objects.map((obj) => {
            const object = this._toObject(floorplan_id, obj);
            return [key.object(floorplan_id, object.id), object];
        });
    }

    public async updateObject(
        floorplan_id: string,
        id: string,
        data: Partial<MapObject>,
    ): Promise<void> {
        const object = await this._db.get<MapObject>(
            key.object(floorplan_id, id),
        );
        if (!object) throw new Error('Object not found');
        await this._db.set(key.object(floorplan_id, id), {
            ...object,
            ...data,
            id,
        });
    }

    public async deleteObject(floorplan_id: string, id: string): Promise<void> {
        await this._db.delete(key.object(floorplan_id, id));
    }

    /**
     * Writes `objects` and removes `remove_ids` in one transaction. Returns the
     * objects as stored, with defaults filled in.
     */
    public async bulkUpsertObjects(
        floorplan_id: string,
        objects: Partial<MapObject>[],
        remove_ids: string[] = [],
    ): Promise<MapObject[]> {
        const records = this._objectRecords(floorplan_id, objects);
        await this._db.write({
            delete: remove_ids.map((id) => key.object(floorplan_id, id)),
            put: records,
        });
        return records.map(([, object]) => object);
    }

    /** Replaces the stored objects for a floorplan with exactly `objects` */
    public async replaceObjects(
        floorplan_id: string,
        objects: Partial<MapObject>[],
    ): Promise<void> {
        await this._db.write({
            clear: key.objects(floorplan_id),
            put: this._objectRecords(floorplan_id, objects),
        });
    }

    // ── CSV ─────────────────────────────────────────────────────────────────

    public async exportObjectsCsv(floorplan_id: string): Promise<string> {
        const objects = await this.listObjects(floorplan_id);
        const rows = objects.map((obj) =>
            CSV_COLUMNS.map((column) =>
                toCsvField((obj as unknown as Record<string, unknown>)[column]),
            ).join(','),
        );
        return [CSV_COLUMNS.join(','), ...rows].join('\n');
    }

    /**
     * Merges a CSV export back in. Rows matching an existing `svg_id` update
     * that object; everything else is created.
     */
    public async importObjectsCsv(
        floorplan_id: string,
        csv: string,
    ): Promise<{ imported: number; updated: number }> {
        const lines = csv.trim().split('\n');
        if (lines.length < 2)
            throw new Error(
                'CSV must have a header row and at least one data row',
            );

        const headers = parseCsvLine(lines[0]);
        const existing = new Map(
            (await this.listObjects(floorplan_id))
                .filter((o) => o.svg_id)
                .map((o) => [o.svg_id as string, o]),
        );

        let imported = 0;
        let updated = 0;
        const changed: Partial<MapObject>[] = [];
        for (const line of lines.slice(1)) {
            const values = parseCsvLine(line);
            const row: Record<string, unknown> = {};
            headers.forEach((header, index) => {
                const value = values[index] ?? '';
                if (value !== '') row[header] = value;
            });
            if (row['geometry'])
                row['geometry'] = JSON.parse(row['geometry'] as string);

            const match = existing.get(row['svg_id'] as string);
            if (match) {
                delete row['id'];
                delete row['floorplan_id'];
                const merged = { ...match, ...row, id: match.id };
                // A later row for the same svg_id builds on this one
                existing.set(match.svg_id as string, merged);
                changed.push(merged);
                updated++;
            } else {
                changed.push({ ...row, floorplan_id } as Partial<MapObject>);
                imported++;
            }
        }
        await this.bulkUpsertObjects(floorplan_id, changed);
        return { imported, updated };
    }

    // ── Validation ──────────────────────────────────────────────────────────

    public async validateFloorplan(
        floorplan_id: string,
    ): Promise<ValidationIssue[]> {
        const objects = await this.listObjects(floorplan_id);
        const issues: ValidationIssue[] = [];
        const seen = new Set<string>();
        const duplicates = new Set<string>();

        for (const obj of objects) {
            if (!obj.label) {
                issues.push({
                    type: 'warning',
                    objectId: obj.id,
                    message: `Object ${obj.id} (${obj.object_type}) has no label`,
                });
            }
            if (obj.svg_id) {
                if (seen.has(obj.svg_id)) duplicates.add(obj.svg_id);
                seen.add(obj.svg_id);
            }
            if (!obj.geometry || Object.keys(obj.geometry).length === 0) {
                issues.push({
                    type: 'error',
                    objectId: obj.id,
                    message: `Object ${obj.id} (${obj.object_type}) has empty geometry`,
                });
            }
        }

        for (const svg_id of duplicates) {
            for (const obj of objects.filter((o) => o.svg_id === svg_id)) {
                issues.push({
                    type: 'error',
                    objectId: obj.id,
                    message: `Duplicate svg_id "${svg_id}" on object ${obj.id}`,
                });
            }
        }
        return issues;
    }
}
