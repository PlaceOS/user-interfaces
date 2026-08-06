import { Injectable, inject } from '@angular/core';

import { DbService } from './db';
import { SvgAnalysis } from './svg-import';
import {
    EditorState,
    Floorplan,
    FloorplanVersion,
    MapObject,
    MapObjectType,
    Project,
    ValidationIssue,
} from './types';

const key = {
    project: (id: string) => `project:${id}`,
    floorplan: (id: string) => `floorplan:${id}`,
    object: (floorplan_id: string, id: string) =>
        `object:${floorplan_id}:${id}`,
    objects: (floorplan_id: string) => `object:${floorplan_id}:`,
    /** Zero-padded so a prefix scan comes back in version order */
    version: (floorplan_id: string, version: number) =>
        `version:${floorplan_id}:${`${version}`.padStart(8, '0')}`,
    versions: (floorplan_id: string) => `version:${floorplan_id}:`,
    image: (floorplan_id: string) => `image:${floorplan_id}`,
};

const now = () => new Date().toISOString();
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

    // ── Projects ────────────────────────────────────────────────────────────

    /** Every project, most recently updated first, with its floorplans attached */
    public async listProjects(): Promise<Project[]> {
        const [projects, floorplans] = await Promise.all([
            this._db.list<Project>('project:'),
            this._db.list<Floorplan>('floorplan:'),
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
    ): Promise<Project> {
        const project: Project = {
            id: uuid(),
            name,
            building_name: building_name || null,
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
        const floorplans = (await this._db.list<Floorplan>('floorplan:'))
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

    /** Removes the project along with every floorplan and object beneath it */
    public async deleteProject(id: string): Promise<void> {
        const floorplans = (
            await this._db.list<Floorplan>('floorplan:')
        ).filter((f) => f.project_id === id);
        await Promise.all(floorplans.map((f) => this.deleteFloorplan(f.id)));
        await this._db.delete(key.project(id));
    }

    // ── Floorplans ──────────────────────────────────────────────────────────

    public async addFloorplan(
        project_id: string,
        floor_name: string,
        floor_index?: number,
    ): Promise<Floorplan> {
        const siblings = (await this._db.list<Floorplan>('floorplan:')).filter(
            (f) => f.project_id === project_id,
        );
        const floorplan: Floorplan = {
            id: uuid(),
            project_id,
            floor_name,
            floor_index: floor_index ?? siblings.length,
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
        };
        await this._db.set(key.floorplan(floorplan.id), floorplan);
        return floorplan;
    }

    public async getFloorplan(id: string): Promise<Floorplan> {
        const floorplan = await this._db.get<Floorplan>(key.floorplan(id));
        if (!floorplan) throw new Error('Floorplan not found');
        return floorplan;
    }

    public async updateFloorplan(
        id: string,
        updates: Partial<Floorplan>,
    ): Promise<Floorplan> {
        const floorplan = await this.getFloorplan(id);
        const updated = { ...floorplan, ...updates, id, updated_at: now() };
        await this._db.set(key.floorplan(id), updated);
        return updated;
    }

    public async deleteFloorplan(id: string): Promise<void> {
        await Promise.all([
            this._db.deleteWhere(key.objects(id)),
            this._db.deleteWhere(key.versions(id)),
            this._db.delete(key.image(id)),
            this._db.delete(key.floorplan(id)),
        ]);
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
     * `source_image_path` holds an object URL minted on read.
     */
    public async uploadSourceImage(
        id: string,
        file: File,
    ): Promise<{ previewUrl: string }> {
        await this._db.set(key.image(id), file);
        const previewUrl = URL.createObjectURL(file);
        await this.updateFloorplan(id, {
            source_image_path: previewUrl,
            source_type: file.type,
        });
        return { previewUrl };
    }

    /** Object URL for the stored background image, or null if there isn't one */
    public async getSourceImageUrl(id: string): Promise<string | null> {
        const blob = await this.getSourceImage(id);
        return blob ? URL.createObjectURL(blob) : null;
    }

    /** Raw source image used by local processing such as AI analysis. */
    public async getSourceImage(id: string): Promise<Blob | null> {
        return (await this._db.get<Blob>(key.image(id))) ?? null;
    }

    // ── SVG import ──────────────────────────────────────────────────────────

    /**
     * Creates a project, floorplan and objects from an analysed SVG. Replaces
     * the reference application's `POST /import/svg/confirm`.
     */
    public async importSvg(options: {
        svg_content: string;
        analysis: SvgAnalysis;
        project_name: string;
        floor_name: string;
        /** SVG ids to import, with the type and label the user settled on */
        mappings: { svgId: string; objectType: string; label?: string }[];
        outline_points?: { x: number; y: number }[];
    }): Promise<{ project_id: string; floorplan_id: string; objects: number }> {
        const {
            svg_content,
            analysis,
            project_name,
            floor_name,
            mappings,
            outline_points,
        } = options;

        const project = await this.createProject(project_name);
        const floorplan = await this.addFloorplan(project.id, floor_name, 0);

        const has_outline = (outline_points?.length ?? 0) >= 3;
        await this.updateFloorplan(floorplan.id, {
            svg_output: svg_content,
            canvas_width: analysis.width,
            canvas_height: analysis.height,
            source_type: 'svg-import',
        });

        const chosen = new Map(mappings.map((m) => [m.svgId, m]));
        const objects: Partial<MapObject>[] = [];

        for (const parsed of analysis.objects) {
            const mapping = chosen.get(parsed.svgId);
            if (!mapping) continue;
            objects.push({
                object_type: (mapping.objectType ??
                    parsed.suggestedType) as MapObjectType,
                svg_id: parsed.svgId,
                label: mapping.label || parsed.label || parsed.svgId,
                geometry: parsed.geometry,
                layer: parsed.layer,
                metadata: {
                    source: 'svg-import',
                    originalTag: parsed.tag,
                    originalAttributes: parsed.attributes,
                },
            });
        }

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

        await this.bulkUpsertObjects(floorplan.id, objects);
        return {
            project_id: project.id,
            floorplan_id: floorplan.id,
            objects: objects.length,
        };
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
        const object: MapObject = {
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
        await this._db.set(key.object(floorplan_id, object.id), object);
        return object;
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

    public async bulkUpsertObjects(
        floorplan_id: string,
        objects: Partial<MapObject>[],
    ): Promise<void> {
        await Promise.all(
            objects.map((obj) => this.createObject(floorplan_id, obj)),
        );
    }

    /** Replaces the stored objects for a floorplan with exactly `objects` */
    public async replaceObjects(
        floorplan_id: string,
        objects: Partial<MapObject>[],
    ): Promise<void> {
        await this._db.deleteWhere(key.objects(floorplan_id));
        await this.bulkUpsertObjects(floorplan_id, objects);
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
                await this.updateObject(floorplan_id, match.id, row);
                updated++;
            } else {
                await this.createObject(floorplan_id, {
                    ...row,
                    floorplan_id,
                } as Partial<MapObject>);
                imported++;
            }
        }
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
