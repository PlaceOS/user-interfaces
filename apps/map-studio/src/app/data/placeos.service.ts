import { Injectable, signal } from '@angular/core';
import {
    authority,
    setup,
    showMetadata,
    token,
    updateMetadata,
} from '@placeos/ts-client';

import type { Floorplan } from './types';

const SETTINGS_KEY = 'MAP_BUILDER.placeos';
const FLOORPLAN_METADATA_KEY = 'map-studio';

export interface PlaceOSSettings {
    domain: string;
    api_key: string;
}

/**
 * `domain` when the app is served by a PlaceOS domain and the user is signed
 * in through it, `manual` when a domain and API key have to be entered.
 */
export type PlaceOSAuthMode = 'checking' | 'domain' | 'manual';

export interface PlaceOSConfig {
    configured: boolean;
    domain: string;
    has_key: boolean;
}

export interface PlaceOSAiConfig {
    system_id: string;
    model: string;
}

interface LlmChoice {
    message?: { content?: string };
}

export interface PlaceOSUser {
    name: string;
    email: string;
    sys_admin: boolean;
}

export interface PlaceOSZone {
    id: string;
    name: string;
    description: string;
    tags: string[];
    display_name: string;
    map_id: string;
    parent_id: string;
    capacity: number;
    timezone: string;
}

export interface PlaceOSSystem {
    id: string;
    name: string;
    map_id: string;
    bookable: boolean;
    capacity: number;
    zones: string[];
    display_name: string;
    features: string[];
}

interface PlaceOSUpload {
    id: string;
    upload_url: string;
    upload_headers: Record<string, string>;
}

function loadSettings(): PlaceOSSettings {
    try {
        return {
            domain: '',
            api_key: '',
            ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}'),
        };
    } catch {
        return { domain: '', api_key: '' };
    }
}

/**
 * Talks to the PlaceOS engine API directly from the browser.
 *
 * When the app is served from a PlaceOS domain — the authority resolves on the
 * current origin — authentication goes through that domain's OAuth flow. Failing
 * that the requests are signed with a domain and API key held in local storage.
 */
@Injectable({ providedIn: 'root' })
export class PlaceOSService {
    private readonly _settings = signal<PlaceOSSettings>(loadSettings());
    private readonly _mode = signal<PlaceOSAuthMode>('checking');

    /** Current connection settings */
    public readonly settings = this._settings.asReadonly();
    /** How requests to the engine API are being authenticated */
    public readonly mode = this._mode.asReadonly();

    /**
     * Works out which authentication method applies, running the domain OAuth
     * flow if an authority is available on the current origin.
     */
    public async init(): Promise<void> {
        const resolved = await fetch('/auth/authority', {
            credentials: 'same-origin',
        })
            .then((resp) => resp.ok)
            .catch(() => false);
        if (!resolved) return this._mode.set('manual');
        // Redirects to login when there's no session, and comes back here
        await setup({
            auth_uri: '/auth/oauth/authorize',
            token_uri: '/auth/token',
            redirect_uri: new URL(
                'oauth-resp.html',
                document.baseURI,
            ).toString(),
            scope: 'public',
        });
        this._mode.set('domain');
    }

    public get config(): PlaceOSConfig {
        const { domain, api_key } = this._settings();
        if (this._mode() === 'domain') {
            return {
                configured: true,
                domain: authority()?.domain || location.host,
                has_key: false,
            };
        }
        return {
            configured: !!api_key,
            domain,
            has_key: !!api_key,
        };
    }

    /** Map Studio AI is intentionally available only on configured authorities. */
    public get aiConfig(): PlaceOSAiConfig | null {
        if (this._mode() !== 'domain') return null;
        const config = authority()?.config?.['map_builder'];
        if (!config || typeof config !== 'object') return null;
        const values = config as Record<string, unknown>;
        const system_id = values['llm_system_id'];
        const model = values['llm_model'];
        return typeof system_id === 'string' &&
            system_id &&
            typeof model === 'string' &&
            model
            ? { system_id, model }
            : null;
    }

    public setConfig(domain: string, api_key: string): void {
        const settings = { domain: domain.replace(/\/$/, ''), api_key };
        this._settings.set(settings);
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    }

    /** Checks the stored credentials by fetching the current user */
    public async testConnection(): Promise<{
        ok: boolean;
        user?: PlaceOSUser;
        error?: string;
    }> {
        try {
            const user = await this._request<PlaceOSUser>('/users/current');
            return {
                ok: true,
                user: {
                    name: user.name,
                    email: user.email,
                    sys_admin: user.sys_admin,
                },
            };
        } catch (error) {
            return {
                ok: false,
                error:
                    error instanceof Error
                        ? error.message
                        : 'Connection failed',
            };
        }
    }

    // ── Zones ───────────────────────────────────────────────────────────────

    public getZones(tags?: string, parent_id?: string): Promise<PlaceOSZone[]> {
        return this._request<PlaceOSZone[]>('/zones', {
            limit: '100',
            ...(tags ? { tags } : {}),
            ...(parent_id ? { parent_id } : {}),
        });
    }

    public async getActiveOrganisation(): Promise<PlaceOSZone | null> {
        const organisations = await this.getZones('org');
        const configured = authority()?.config?.['org_zone'];
        return (
            organisations.find((zone) => zone.id === configured) ??
            organisations[0] ??
            null
        );
    }

    public getZone(id: string): Promise<PlaceOSZone> {
        return this._request<PlaceOSZone>(`/zones/${id}`);
    }

    public updateZone(
        id: string,
        data: Partial<PlaceOSZone>,
    ): Promise<PlaceOSZone> {
        return this._request<PlaceOSZone>(
            `/zones/${id}`,
            {},
            {
                method: 'PUT',
                body: JSON.stringify(data),
            },
        );
    }

    public async getFloorplanMetadata(
        level_id: string,
    ): Promise<Partial<Floorplan> | null> {
        const metadata = await showMetadata(level_id, FLOORPLAN_METADATA_KEY);
        const details = metadata.details;
        if (!details || typeof details !== 'object' || Array.isArray(details)) {
            return null;
        }
        const floorplan = details as Partial<Floorplan>;
        if (Number.isFinite(metadata.updated_at)) {
            floorplan.updated_at = new Date(metadata.updated_at).toISOString();
        }
        return floorplan;
    }

    public async saveFloorplanMetadata(
        level_id: string,
        floorplan: Floorplan,
    ): Promise<string> {
        const details: Partial<Floorplan> = { ...floorplan };
        delete details.id;
        delete details.project_id;
        delete details.level_zone_id;
        delete details.source_image_path;
        delete details.source_type;
        delete details.created_at;
        details.updated_at = floorplan.updated_at || new Date().toISOString();
        const metadata = await updateMetadata(level_id, {
            id: level_id,
            name: FLOORPLAN_METADATA_KEY,
            description: 'Map Studio floorplan',
            details,
        });
        return Number.isFinite(metadata?.updated_at)
            ? new Date(metadata.updated_at).toISOString()
            : details.updated_at;
    }

    public async getLevelSvg(level_id: string): Promise<string | null> {
        const map_id = (await this.getZone(level_id)).map_id;
        if (!map_id) return null;

        const external = /^[a-z][a-z\d+.-]*:/i.test(map_id);
        const on_domain = this._mode() === 'domain';
        const { domain, api_key } = this._settings();
        const url = external
            ? map_id
            : `${on_domain ? '' : domain}/${map_id.replace(/^\//, '')}`;
        const response = await fetch(url, {
            headers: external
                ? {}
                : on_domain
                  ? { Authorization: `Bearer ${token()}` }
                  : { 'X-API-Key': api_key },
        });
        if (!response.ok) {
            throw new Error(`Failed to load level SVG: ${response.status}`);
        }
        const svg = await response.text();
        if (!/<svg[\s>]/i.test(svg)) {
            throw new Error('The level map is not an SVG');
        }
        return svg;
    }

    // ── Systems ─────────────────────────────────────────────────────────────

    public getSystems(
        zone_id?: string,
        bookable?: boolean,
    ): Promise<PlaceOSSystem[]> {
        return this._request<PlaceOSSystem[]>('/systems', {
            limit: '100',
            ...(zone_id ? { zone_id } : {}),
            ...(bookable === undefined ? {} : { bookable: `${bookable}` }),
        });
    }

    public updateSystem(
        id: string,
        data: Partial<PlaceOSSystem>,
    ): Promise<PlaceOSSystem> {
        return this._request<PlaceOSSystem>(
            `/systems/${id}`,
            {},
            {
                method: 'PUT',
                body: JSON.stringify(data),
            },
        );
    }

    // ── AI ──────────────────────────────────────────────────────────────────

    /** Sends one floor-plan image and prompt through the authority's LLM_1. */
    public async analyzeImage(
        prompt: string,
        image: string,
        media_type = 'image/jpeg',
    ): Promise<string> {
        const config = this.aiConfig;
        if (!config) throw new Error('Map Studio AI is not configured');

        const choices = await this._request<LlmChoice[]>(
            `/systems/${encodeURIComponent(config.system_id)}/LLM_1/chat`,
            {},
            {
                method: 'POST',
                body: JSON.stringify([
                    config.model,
                    {
                        role: 'user',
                        content: [
                            { type: 'text', text: prompt },
                            {
                                type: 'image_url',
                                image,
                                media_type,
                                detail: 'high',
                            },
                        ],
                    },
                    { type: 'json_object' },
                    16_000,
                ]),
            },
        );
        const content = choices[0]?.message?.content;
        if (!content) throw new Error('The AI returned no analysis');
        return content;
    }

    // ── Uploads ─────────────────────────────────────────────────────────────

    /**
     * Publishes a generated map to PlaceOS storage. Three steps: reserve the
     * upload, PUT the contents at the signed URL, then mark it complete.
     */
    public async uploadSvg(
        svg_content: string,
        filename: string,
    ): Promise<{ upload_id: string; file_url: string }> {
        const blob = new Blob([svg_content], { type: 'image/svg+xml' });
        const upload = await this._request<PlaceOSUpload>(
            '/uploads',
            {},
            {
                method: 'POST',
                body: JSON.stringify({
                    file_name: filename,
                    file_size: blob.size,
                    file_mime: 'image/svg+xml',
                    public: true,
                }),
            },
        );

        const stored = await fetch(upload.upload_url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'image/svg+xml',
                ...upload.upload_headers,
            },
            body: svg_content,
        });
        if (!stored.ok)
            throw new Error(`Upload to storage failed: ${stored.status}`);

        const finalised = await this._request<{ public_url?: string }>(
            `/uploads/${upload.id}`,
            {},
            { method: 'PUT', body: JSON.stringify({ upload_complete: true }) },
        );

        return {
            upload_id: upload.id,
            file_url:
                finalised.public_url ??
                `/api/engine/v2/uploads/${upload.id}/url`,
        };
    }

    private async _request<T>(
        path: string,
        params: Record<string, string> = {},
        options: RequestInit = {},
    ): Promise<T> {
        const { domain, api_key } = this._settings();
        const on_domain = this._mode() === 'domain';
        if (!on_domain && !api_key) throw new Error('PlaceOS not configured');
        const query = new URLSearchParams(params).toString();
        const response = await fetch(
            `${on_domain ? '' : domain}/api/engine/v2${path}${query ? `?${query}` : ''}`,
            {
                ...options,
                headers: {
                    ...(on_domain
                        ? { Authorization: `Bearer ${token()}` }
                        : { 'X-API-Key': api_key }),
                    'Content-Type': 'application/json',
                    ...(options.headers ?? {}),
                },
            },
        );
        if (!response.ok) {
            const detail = await response.text().catch(() => '');
            throw new Error(
                `PlaceOS ${response.status}: ${detail || response.statusText}`,
            );
        }
        return response.json() as Promise<T>;
    }
}
