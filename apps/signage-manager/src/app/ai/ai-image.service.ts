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
import {
    cancelSignageAIJob,
    claimSignageAIImage,
    editSignageImage,
    generateSignageImage,
    querySignageAIJobs,
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

export function isFinal(job?: AiJob | null) {
    return !!job && FINAL_STATES.includes(job.state);
}

/**
 * Owns generation state for the app.
 *
 * The poll loop lives here rather than in the modal so a job survives the modal
 * being closed: the user can start four candidates, close the dialog, keep
 * working, and still be told when they land.
 */
@Injectable({ providedIn: 'root' })
export class AiImageService extends AsyncHandler {
    /** null until asked; `enabled: false` hides every entry point */
    public readonly capabilities = signal<AiCapabilities | null>(null);
    public readonly brand_kit = signal<AiBrandKit | null>(null);
    public readonly jobs = signal<Record<string, AiJob>>({});

    public readonly enabled = computed(() => !!this.capabilities()?.enabled);
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
     * Read what this domain can do. An older backend has no such route, which
     * is indistinguishable from the feature being switched off, so both are
     * treated as disabled rather than surfaced as an error.
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
            const metadata = await showMetadata(
                org_zone_id,
                'signage_ai',
            ).catch(() => null);
            const details = (metadata as any)?.details;
            if (details && Object.keys(details).length) {
                this.brand_kit.set(details as AiBrandKit);
            }
        }
        return this.capabilities();
    }

    /**
     * Store a logo for the domain and remember it.
     *
     * There is nowhere in PlaceOS that a customer logo lives, so it is kept in
     * the same brand kit metadata as the palette and the tone. Set once here
     * and every later poster picks it up, rather than being re-attached each
     * time.
     *
     * Which slot the file lands in is read off its own ink: dark ink is for
     * light backgrounds and light ink is for dark ones. The other version is
     * made from it, so a poster of either kind has a logo that reads, from one
     * upload. Either can be replaced with a real file later.
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
     * alone, since someone supplying their own file has said what they want.
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
        // a derived counterpart is a guess at this file, so it is remade rather
        // than left pointing at the version of a logo that is no longer here
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
     * Merge changes into the domain's brand kit.
     *
     * Merged rather than replaced so the branding page and the logo upload can
     * each write their own part without clearing the other's, and so anything
     * set by hand outside this app survives.
     */
    public async saveBrandKit(
        changes: Partial<AiBrandKit>,
    ): Promise<AiBrandKit> {
        if (!this._org_zone) {
            throw new Error(i18n('SIGNAGE_MANAGER.AI_NO_ORG_ZONE'));
        }
        const details = { ...(this.brand_kit() || {}), ...changes };
        for (const key of Object.keys(details)) {
            if (details[key] === undefined) delete details[key];
        }

        // replace rather than merge: the API deep merges a PATCH, so a colour
        // taken out of the palette would survive the save. The merge above is
        // against the kit we loaded, so nothing else is lost.
        await updateMetadata(
            this._org_zone,
            {
                name: 'signage_ai',
                description: 'Brand kit used when generating signage artwork',
                details,
            } as any,
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
        const details = (metadata as any)?.details;
        if (details && Object.keys(details).length) {
            this.brand_kit.set(details as AiBrandKit);
        }
        return this.brand_kit();
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
            idempotency_key: crypto.randomUUID(),
            ...request,
        });
        this._merge([job]);
        this.watch(job.id);
        return job;
    }

    public async edit(request: AiEditRequest) {
        const job = await editSignageImage({
            idempotency_key: crypto.randomUUID(),
            ...request,
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

    public claim(id: string, upload_id: string, item_id: string) {
        return claimSignageAIImage(id, { upload_id, item_id }).catch(
            () => null,
        );
    }

    public job(id: string) {
        return this.jobs()[id];
    }

    /**
     * One loop per job. Each request holds open until the job's version moves
     * or the wait runs out, so a candidate shows up about half a second after
     * it lands without polling in a tight circle. A job that outlives one wait
     * simply spans several requests.
     */
    public watch(id: string) {
        if (this._timers[`watch-${id}`]) return;
        this.timeout(`watch-${id}`, () => this._poll(id), 1);
    }

    private async _poll(id: string) {
        const known = this.jobs()[id]?.version ?? 0;
        const job = await showSignageAIJob(id, {
            wait: POLL_WAIT,
            since: known,
        }).catch(() => null);

        if (!job) {
            // a dropped connection is normal on a long poll; try again shortly
            this.timeout(`watch-${id}`, () => this._poll(id), 2000);
            return;
        }

        this._merge([job]);

        if (isFinal(job)) {
            this.clearTimeout(`watch-${id}`);
            this._announce(job);
            return;
        }

        this.timeout(`watch-${id}`, () => this._poll(id), 1);
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
     * take. Candidates are private uploads, so this goes through the same
     * authenticated image path the media thumbnails use, which sets the cookie
     * and caches the result.
     */
    public loadImage(url: string): Promise<string> {
        const source = url.startsWith('http')
            ? url
            : `${location.origin}${url}`;
        return loadAuthenticatedImage(source, '/api/engine/v2/uploads');
    }
}
