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

/** distinguishes "the read failed" from "the read returned nothing" */
const FAILED = Symbol('metadata read failed');

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
    /** whether the kit above is what the server holds, or just an empty start */
    public readonly brand_kit_read = signal<'pending' | 'ok' | 'failed'>(
        'pending',
    );
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
            await this.reloadBrandKit();
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
     * Store an image the person wants a request to draw on.
     *
     * Kept private: a reference is often a photo of a colleague, and it exists
     * for one poster rather than for the media library. The server tags it so
     * housekeeping can clear it even if the browser never gets the chance to.
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
        // The write below replaces the whole document. If the read failed we
        // hold an empty kit that looks exactly like an organisation with no
        // branding, and saving would write that over the real one, taking the
        // logo upload ids with it.
        if (this.brand_kit_read() !== 'ok') {
            throw new Error(i18n('SIGNAGE_MANAGER.BRAND_NOT_LOADED'));
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
            () => FAILED,
        );
        if (metadata === FAILED) {
            this.brand_kit_read.set('failed');
            return this.brand_kit();
        }
        const details = (metadata as any)?.details;
        if (details && Object.keys(details).length) {
            this.brand_kit.set(details as AiBrandKit);
        }
        // an empty answer is a real answer: the organisation has set nothing
        this.brand_kit_read.set('ok');
        return this.brand_kit();
    }

    /**
     * One key per thing a person asked for, held here rather than on the modal.
     *
     * The dialog is rebuilt on every open, so a key kept on the component died
     * with it: closing a slow generation and asking for the same thing again
     * minted a new key and paid twice, which is exactly the case the key exists
     * to make free.
     */
    private readonly _intents = new Map<string, string>();

    public intentKey(kind: string, subject: string) {
        const id = `${kind}:${subject}`;
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
        // The caller owns the key: minting one here meant every retry looked
        // like a new request, which is the opposite of what the field is for.
        const job = await generateSignageImage({
            idempotency_key: request.idempotency_key || crypto.randomUUID(),
            ...request,
        });
        this._merge([job]);
        this.watch(job.id);
        return job;
    }

    public async edit(request: AiEditRequest) {
        const job = await editSignageImage({
            idempotency_key: request.idempotency_key || crypto.randomUUID(),
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
    /**
     * Watch a job until it finishes.
     *
     * The timer handle is cleared the moment the callback fires, so checking it
     * did not stop a second `watch` starting another loop over the same job
     * while the first was parked on a 25 second request. `_watching` is the
     * flag that actually holds.
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
        const job = await showSignageAIJob(id, {
            wait: POLL_WAIT,
            since: known,
        }).catch((error) => ({ error }) as { error: any });

        if (!job || 'error' in job) {
            const status = (job as any)?.error?.status;
            // 404 and 403 do not become true by asking again. Anything else is
            // treated as a dropped connection, which is normal on a long poll,
            // but not forever: an unreachable API used to be polled every two
            // seconds for the life of the page.
            const attempts = (this._attempts.get(id) || 0) + 1;
            this._attempts.set(id, attempts);
            if (status === 404 || status === 403 || attempts > POLL_RETRIES) {
                this.unwatch(id);
                return;
            }
            this.timeout(`watch-${id}`, () => this._poll(id), 2000);
            return;
        }

        this._attempts.delete(id);
        this._merge([job as AiJob]);

        if (isFinal(job as AiJob)) {
            this.unwatch(id);
            this._announce(job as AiJob);
            this.refreshQuota();
            return;
        }

        this.timeout(`watch-${id}`, () => this._poll(id), 1);
    }

    /**
     * Re-read what is left of the allowance.
     *
     * It is otherwise read once at start up, so the number under the brief was
     * stale from the first image onwards.
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
