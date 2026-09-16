import { computed, inject, Injectable, signal } from '@angular/core';
import {
    AsyncHandler,
    i18n,
    notifyError,
    notifyInfo,
    UploadsService,
} from '@placeos/common';
import { loadAuthenticatedImage } from '@placeos/components';
import { showMetadata, updateMetadata } from '@placeos/ts-client';

import { flipLightness, inkIsLight } from '../branding/logo-variant';
import { errorStatus } from './ai-image.util';
import {
    cancelSignageAIJob,
    claimSignageAIImage,
    editSignageImage,
    generateSignageImage,
    querySignageAIJobs,
    removeSignageUpload,
    showSignageAIJob,
    signageAICapabilities,
} from './ai.fn';
import {
    AiBrandKit,
    AiCapabilities,
    AiEditRequest,
    AiGenerateRequest,
    AiJob,
    AiLogoSlot,
} from './ai.types';

const FINAL_STATES = ['done', 'failed', 'cancelled'];

/** the brand kit key each slot is stored under */
export function logoKey(
    slot: AiLogoSlot,
): 'logo_upload_id' | 'logo_dark_upload_id' {
    return slot === 'on_light' ? 'logo_upload_id' : 'logo_dark_upload_id';
}

/** how long a single long poll holds the connection open, server capped at 25 */
const POLL_WAIT = 25;

/** consecutive failures before a job is given up on */
const POLL_RETRIES = 10;

/** Fast retries keep a saved candidate from being left unclaimed on a blip. */
const CLAIM_RETRY_DELAYS = [0, 500, 1500];

export function isFinal(job?: AiJob | null) {
    return !!job && FINAL_STATES.includes(job.state);
}

/**
 * Owns generation state for the app.
 */
@Injectable({ providedIn: 'root' })
export class AiImageService extends AsyncHandler {
    /** null until asked; `enabled: false` hides every entry point */
    public readonly capabilities = signal<AiCapabilities | null>(null);
    public readonly brand_kit = signal<AiBrandKit | null>(null);
    /** whether the kit above is what the server holds, or just an empty start */
    public readonly brand_kit_read = signal<'pending' | 'ok' | 'failed'>(
        'pending',
    );
    public readonly jobs = signal<Record<string, AiJob>>({});

    public readonly enabled = computed(() => !!this.capabilities()?.enabled);
    public readonly default_provider = computed(() => {
        const capabilities = this.capabilities();
        if (!capabilities?.enabled) return null;
        return (
            capabilities.providers.find(
                (provider) => provider.id === capabilities.default_provider_id,
            ) ||
            capabilities.providers[0] ||
            null
        );
    });
    public readonly default_model = computed(() => {
        const provider = this.default_provider();
        if (!provider) return null;
        return (
            provider.models.find(
                (model) => model.id === provider.default_model,
            ) ||
            provider.models[0] ||
            null
        );
    });
    public readonly can_generate = computed(
        () => !!this.default_model()?.generate,
    );
    public readonly can_edit = computed(() => !!this.default_model()?.edit);
    public readonly running_count = computed(
        () => Object.values(this.jobs()).filter((job) => !isFinal(job)).length,
    );
    public readonly recent = computed(() =>
        Object.values(this.jobs()).sort(
            (a, b) => (b.created_at || 0) - (a.created_at || 0),
        ),
    );

    private readonly _uploads = inject(UploadsService);

    private _loaded = false;
    private _org_zone = '';

    /**
     * Read what this domain can do.
     */
    public async load(org_zone_id?: string) {
        if (this._loaded) return this.capabilities();
        this._loaded = true;
        this._org_zone = org_zone_id || '';
        const capabilities = await signageAICapabilities().catch(() => null);
        this.capabilities.set(
            capabilities || {
                enabled: false,
                providers: [],
                aspect_ratios: [],
                qualities: [],
                max_candidates: 1,
                logo_layer: false,
                quota: {
                    user_remaining_today: null,
                    domain_remaining_month: null,
                },
            },
        );
        if (capabilities?.enabled && org_zone_id) {
            await this.reloadBrandKit();
        }
        return this.capabilities();
    }

    /**
     * Store a logo for the domain and remember it.
     */
    public async uploadBrandLogo(file: File): Promise<AiBrandKit> {
        const slot: AiLogoSlot = (await inkIsLight(file).catch(() => false))
            ? 'on_dark'
            : 'on_light';
        return this.replaceBrandLogo(slot, file, true);
    }

    /**
     * Put a file in one of the two slots. `derive_other` fills the empty
     * counterpart from it; an explicit upload into one slot leaves the other
     * alone.
     */
    public async replaceBrandLogo(
        slot: AiLogoSlot,
        file: File,
        derive_other = false,
    ): Promise<AiBrandKit> {
        const upload_id = await this._uploads.uploadFileToCompletion(file);
        const changes: Partial<AiBrandKit> = { [logoKey(slot)]: upload_id };

        const other = slot === 'on_light' ? 'on_dark' : 'on_light';
        const other_id = this.brand_kit()?.[logoKey(other)];
        const derived = this.brand_kit()?.logo_derived;
        if (derive_other && (!other_id || derived === other)) {
            const flipped = await this._flip(file, other).catch(() => null);
            if (flipped) {
                changes[logoKey(other)] = flipped;
                changes.logo_derived = other;
            }
        } else if (derived === slot) {
            changes.logo_derived = undefined;
        }

        const kit = await this.saveBrandKit(changes);
        // the capability is read once at start up; keep it honest for this session
        this.capabilities.update((current) =>
            current ? { ...current, logo_layer: true } : current,
        );
        return kit;
    }

    /** make one slot from the other, on request rather than on upload */
    public async deriveBrandLogo(target: AiLogoSlot): Promise<AiBrandKit> {
        const source_id =
            this.brand_kit()?.[
                logoKey(target === 'on_light' ? 'on_dark' : 'on_light')
            ];
        if (!source_id) throw new Error(i18n('SIGNAGE_MANAGER.AI_NO_LOGO_YET'));
        const url = await this.loadImage(
            `/api/engine/v2/uploads/${encodeURIComponent(source_id)}/url`,
        );
        const upload_id = await this._flip(url, target);
        return this.saveBrandKit({
            [logoKey(target)]: upload_id,
            logo_derived: target,
        });
    }

    private async _flip(
        source: File | string,
        target: AiLogoSlot,
    ): Promise<string> {
        const stem =
            typeof source === 'string'
                ? 'logo'
                : source.name.replace(/\.[^.]+$/, '');
        const file = await flipLightness(
            source,
            `${stem}-${target.replace('_', '-')}.png`,
        );
        return this._uploads.uploadFileToCompletion(file);
    }

    /**
     * Store an image the person wants a request to draw on.
     */
    public uploadReference(file: File): Promise<string> {
        return this._uploads.uploadFileToCompletion(file);
    }

    /** done with, once the image it was for has been made */
    public removeReference(id: string) {
        return removeSignageUpload(id).catch(() => null);
    }

    /**
     * Merge changes into the domain's brand kit.
     */
    public async saveBrandKit(
        changes: Partial<AiBrandKit>,
    ): Promise<AiBrandKit> {
        if (!this._org_zone) {
            throw new Error(i18n('SIGNAGE_MANAGER.AI_NO_ORG_ZONE'));
        }
        if (this.brand_kit_read() !== 'ok') {
            throw new Error(i18n('SIGNAGE_MANAGER.BRAND_NOT_LOADED'));
        }
        const details = { ...(this.brand_kit() || {}), ...changes };
        for (const key of Object.keys(details)) {
            if (details[key] === undefined) delete details[key];
        }

        // replace rather than merge: the API deep merges a PATCH, so a colour
        // taken out of the palette would survive the save.
        await updateMetadata(
            this._org_zone,
            {
                name: 'signage_ai',
                description: 'Brand kit used when generating signage artwork',
                details: details as unknown as Record<string, unknown>,
            },
            'put',
        );

        this.brand_kit.set(details);
        return details;
    }

    /** re-read the kit, for a page opened before start up finished */
    public async reloadBrandKit(): Promise<AiBrandKit | null> {
        if (!this._org_zone) return null;
        const metadata = await showMetadata(this._org_zone, 'signage_ai').catch(
            () => null,
        );
        if (!metadata) {
            this.brand_kit_read.set('failed');
            return this.brand_kit();
        }
        const details = metadata.details;
        if (details && !Array.isArray(details) && Object.keys(details).length) {
            this.brand_kit.set(details as unknown as AiBrandKit);
        }
        // an empty answer is a real answer: the organisation has set nothing
        this.brand_kit_read.set('ok');
        return this.brand_kit();
    }

    /**
     * One key per thing a person asked for, held here rather than on the modal.
     */
    private readonly _intents = new Map<string, string>();

    public intentKey(kind: 'generate' | 'edit', request: object) {
        const id = `${kind}:${JSON.stringify(request)}`;
        let key = this._intents.get(id);
        if (!key) {
            key = crypto.randomUUID();
            this._intents.set(id, key);
        }
        return key;
    }

    /** the jobs the user started recently, so the list survives a reload */
    public async loadRecent() {
        const jobs = await querySignageAIJobs({ mine: true, limit: 20 }).catch(
            () => [] as AiJob[],
        );
        this._merge(jobs);
        jobs.filter((job) => !isFinal(job)).forEach((job) =>
            this.watch(job.id),
        );
        return jobs;
    }

    public async generate(request: AiGenerateRequest) {
        const job = await generateSignageImage({
            ...request,
            idempotency_key: request.idempotency_key || crypto.randomUUID(),
        });
        this._merge([job]);
        this.watch(job.id);
        return job;
    }

    public async edit(request: AiEditRequest) {
        const job = await editSignageImage({
            ...request,
            idempotency_key: request.idempotency_key || crypto.randomUUID(),
        });
        this._merge([job]);
        this.watch(job.id);
        return job;
    }

    public async cancel(id: string) {
        const job = await cancelSignageAIJob(id).catch(() => null);
        if (job) this._merge([job]);
        return job;
    }

    public async claim(id: string, upload_id: string, item_id: string) {
        let last_error: unknown;
        for (const delay of CLAIM_RETRY_DELAYS) {
            if (delay) {
                await new Promise<void>((resolve) =>
                    setTimeout(resolve, delay),
                );
            }
            try {
                return await claimSignageAIImage(id, { upload_id, item_id });
            } catch (error) {
                last_error = error;
            }
        }
        throw last_error;
    }

    public job(id: string) {
        return this.jobs()[id];
    }

    /**
     * Watch a job until it finishes.
     */
    public watch(id: string) {
        if (this._watching.has(id)) return;
        this._watching.add(id);
        this._attempts.delete(id);
        this.timeout(`watch-${id}`, () => this._poll(id), 1);
    }

    public unwatch(id: string) {
        this._watching.delete(id);
        this._attempts.delete(id);
        this.clearTimeout(`watch-${id}`);
    }

    private readonly _watching = new Set<string>();
    private readonly _attempts = new Map<string, number>();

    private async _poll(id: string) {
        if (!this._watching.has(id)) return;

        const known = this.jobs()[id]?.version ?? 0;
        const result: AiJob | { error: unknown } = await showSignageAIJob(id, {
            wait: POLL_WAIT,
            since: known,
        }).catch((error: unknown) => ({ error }));

        if ('error' in result) {
            const status = errorStatus(result.error);
            const attempts = (this._attempts.get(id) || 0) + 1;
            this._attempts.set(id, attempts);
            if (status === 404 || status === 403 || attempts >= POLL_RETRIES) {
                this._failJob(id);
                this.unwatch(id);
                return;
            }
            this.timeout(`watch-${id}`, () => this._poll(id), 2000);
            return;
        }

        const job = result;
        this._attempts.delete(id);
        this._merge([job]);

        if (isFinal(job)) {
            this.unwatch(id);
            this._announce(job);
            this.refreshQuota();
            return;
        }

        this.timeout(`watch-${id}`, () => this._poll(id), 1);
    }

    /**
     * Re-read what is left of the allowance.
     */
    public async refreshQuota() {
        const capabilities = await signageAICapabilities().catch(() => null);
        if (capabilities?.quota) {
            this.capabilities.update((current) =>
                current ? { ...current, quota: capabilities.quota } : current,
            );
        }
    }

    /** told once, when a job the user may no longer be watching finishes */
    private _announce(job: AiJob) {
        if (job.state === 'failed') {
            notifyError(
                job.error_message || i18n('SIGNAGE_MANAGER.AI_JOB_FAILED'),
            );
        } else if (job.state === 'done' && job.images_produced > 0) {
            notifyInfo(i18n('SIGNAGE_MANAGER.AI_JOB_DONE'));
        }
    }

    private _failJob(id: string) {
        const current = this.jobs()[id];
        if (!current || isFinal(current)) return;
        const failed: AiJob = {
            ...current,
            state: 'failed',
            version: current.version + 1,
            error_message: i18n('SIGNAGE_MANAGER.AI_JOB_FAILED'),
        };
        this._merge([failed]);
        this._announce(failed);
    }

    private _merge(jobs: AiJob[]) {
        if (!jobs?.length) return;
        this.jobs.update((existing) => {
            const next = { ...existing };
            for (const job of jobs) next[job.id] = job;
            return next;
        });
    }

    /**
     * Read a generated image back out as something an <img> or a canvas can
     * take.
     */
    public loadImage(url: string): Promise<string> {
        const source = url.startsWith('http')
            ? url
            : `${location.origin}${url}`;
        return loadAuthenticatedImage(source, '/api/engine/v2/uploads');
    }
}
