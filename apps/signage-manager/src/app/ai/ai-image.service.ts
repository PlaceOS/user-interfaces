import { computed, inject, Injectable, signal } from '@angular/core';
import { AsyncHandler, i18n, notifyError, notifyInfo } from '@placeos/common';
import { loadAuthenticatedImage } from '@placeos/components';
import { showMetadata } from '@placeos/ts-client';

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
} from './ai.types';

const FINAL_STATES = ['done', 'failed', 'cancelled'];

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

    private _loaded = false;

    /**
     * Read what this domain can do. An older backend has no such route, which
     * is indistinguishable from the feature being switched off, so both are
     * treated as disabled rather than surfaced as an error.
     */
    public async load(org_zone_id?: string) {
        if (this._loaded) return this.capabilities();
        this._loaded = true;
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

    /** the jobs the user started recently, so the list survives a reload */
    public async loadRecent() {
        const jobs = await querySignageAIJobs({ mine: true, limit: 20 }).catch(
            () => [] as AiJob[],
        );
        this._merge(jobs);
        jobs.filter((job) => !isFinal(job)).forEach((job) => this.watch(job.id));
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
        return claimSignageAIImage(id, { upload_id, item_id }).catch(() => null);
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
