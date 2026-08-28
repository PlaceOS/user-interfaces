import {
    Component,
    computed,
    inject,
    OnDestroy,
    signal,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n, notifyError, notifySuccess } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';

import { SignageService } from '../signage.service';
import { AiImageService, isFinal } from './ai-image.service';
import {
    AiLayerControlsComponent,
    newTextBlock,
} from './ai-layer-controls.component';
import { AiLayerComponent } from './ai-layer.component';
import { AiReferencesComponent } from './ai-references.component';
import { AiJob, AiJobImage, AiLayerState, AiReference } from './ai.types';

export interface AiImageModalData {
    /** pre-set from the playlist a user opened this from */
    aspect_ratio?: string;
    playlist_id?: string;
    /** editing an existing item rather than starting from nothing */
    source_upload_id?: string;
    source_item_id?: string;
    source_name?: string;
}

type ModalState = 'compose' | 'generating' | 'review';

interface Candidate {
    job_id: string;
    index: number;
    upload_id: string;
    url: string;
    /** position in the refine chain, 1 for the first generation */
    version: number;
}

@Component({
    selector: 'ai-image-modal',
    template: `
        <div class="bg-base-200 flex h-full w-full flex-col overflow-hidden">
            <header
                class="border-base-content/10 bg-base-100 flex h-14 shrink-0 items-center justify-between border-b px-4"
            >
                <h2 class="m-0 text-lg font-medium">
                    {{ heading() | translate }}
                </h2>
                <button icon mat-dialog-close [disabled]="saving()">
                    <icon>close</icon>
                </button>
            </header>

            <div class="flex min-h-0 flex-1 flex-col md:flex-row">
                <!-- the picture, given the room -->
                <section class="flex min-h-0 min-w-0 flex-1 flex-col gap-3 p-4">
                    <div
                        class="border-base-content/10 bg-base-300 relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded border"
                    >
                        @if (selected_object_url()) {
                            <ai-layer
                                class="h-full w-full"
                                [class.opacity-40]="state() === 'generating'"
                                [image_url]="selected_object_url()"
                                [logo_on_light]="logo_on_light()"
                                [logo_on_dark]="logo_on_dark()"
                                [brand]="brand()"
                                [state]="layer_state()"
                                (changed)="layer_state.set($event)"
                            ></ai-layer>
                        } @else if (source_url()) {
                            <img
                                auth
                                [source]="source_url()"
                                class="max-h-full max-w-full object-contain"
                                [class.opacity-40]="state() === 'generating'"
                                [alt]="
                                    'SIGNAGE_MANAGER.AI_CHANGING_THIS'
                                        | translate
                                "
                            />
                        } @else if (state() !== 'generating') {
                            <p class="text-base-content/50 m-0 px-6 text-sm">
                                {{
                                    'SIGNAGE_MANAGER.AI_PREVIEW_EMPTY'
                                        | translate
                                }}
                            </p>
                        }

                        @if (state() === 'generating') {
                            <div
                                class="absolute inset-0 flex flex-col items-center justify-center gap-3"
                            >
                                <mat-spinner diameter="48"></mat-spinner>
                                <p class="m-0 text-sm">
                                    {{
                                        'SIGNAGE_MANAGER.AI_WORKING' | translate
                                    }}
                                </p>
                                <p class="text-base-content/60 m-0 text-xs">
                                    {{ progress_note() }}
                                </p>
                            </div>
                        }
                    </div>

                    <!-- every candidate of every version, oldest first -->
                    @if (rail().length) {
                        <div class="flex shrink-0 flex-col gap-1">
                            <p
                                class="text-base-content/60 m-0 text-xs uppercase"
                            >
                                {{ 'SIGNAGE_MANAGER.AI_VERSIONS' | translate }}
                            </p>
                            <div class="flex gap-2 overflow-x-auto pb-1">
                                @for (
                                    candidate of rail();
                                    track candidate.job_id +
                                        '-' +
                                        candidate.index
                                ) {
                                    <button
                                        type="button"
                                        class="border-base-content/10 h-16 w-28 shrink-0 overflow-hidden rounded border"
                                        [class.ring-2]="
                                            selected()?.upload_id ===
                                            candidate.upload_id
                                        "
                                        [matTooltip]="versionLabel(candidate)"
                                        (click)="select(candidate)"
                                    >
                                        <img
                                            auth
                                            [source]="candidate.url"
                                            class="h-full w-full object-cover"
                                            [alt]="versionLabel(candidate)"
                                        />
                                    </button>
                                }
                            </div>
                        </div>
                    }
                </section>

                <!-- everything that shapes it -->
                <aside
                    class="border-base-content/10 bg-base-100 flex w-full shrink-0 flex-col border-t md:w-96 md:border-t-0 md:border-l"
                >
                    <div class="flex-1 space-y-4 overflow-y-auto p-4">
                        @if (!rail().length) {
                            <div class="flex flex-col">
                                <label for="ai-brief" class="mb-1 text-sm">{{
                                    (is_edit()
                                        ? 'SIGNAGE_MANAGER.AI_INSTRUCTION'
                                        : 'SIGNAGE_MANAGER.AI_BRIEF'
                                    ) | translate
                                }}</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <textarea
                                        matInput
                                        id="ai-brief"
                                        rows="4"
                                        [placeholder]="
                                            (is_edit()
                                                ? 'SIGNAGE_MANAGER.AI_INSTRUCTION_HINT'
                                                : 'SIGNAGE_MANAGER.AI_BRIEF_HINT'
                                            ) | translate
                                        "
                                        [(ngModel)]="brief"
                                    ></textarea>
                                </mat-form-field>
                            </div>

                            <div class="flex flex-col gap-3">
                                <!-- an edit comes back at the source's own
                                     shape, so there is nothing here to choose -->
                                @if (!is_edit()) {
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                        subscriptSizing="dynamic"
                                    >
                                        <mat-label>{{
                                            'SIGNAGE_MANAGER.AI_SHAPE'
                                                | translate
                                        }}</mat-label>
                                        <mat-select [(ngModel)]="aspect">
                                            @for (
                                                option of aspect_options();
                                                track option
                                            ) {
                                                <mat-option [value]="option">{{
                                                    option
                                                }}</mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                }
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                    subscriptSizing="dynamic"
                                >
                                    <mat-label>{{
                                        'SIGNAGE_MANAGER.AI_OPTIONS_COUNT'
                                            | translate
                                    }}</mat-label>
                                    <mat-select [(ngModel)]="candidates">
                                        @for (
                                            count of candidate_options();
                                            track count
                                        ) {
                                            <mat-option [value]="count">{{
                                                count
                                            }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>

                            <!-- both only shape a new picture: an edit keeps
                                 whatever the image already has -->
                            @if (!is_edit()) {
                                <div class="flex flex-col gap-1">
                                    <mat-slide-toggle
                                        [(ngModel)]="add_text_with_layer"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.AI_ADD_WORDS_LAYER'
                                                | translate
                                        }}
                                    </mat-slide-toggle>
                                    <p class="text-base-content/60 m-0 text-xs">
                                        {{
                                            'SIGNAGE_MANAGER.AI_ADD_WORDS_LAYER_HINT'
                                                | translate
                                        }}
                                    </p>
                                </div>

                                @if (has_logo()) {
                                    <mat-slide-toggle
                                        [(ngModel)]="include_logo"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.AI_LEAVE_LOGO_SPACE'
                                                | translate
                                        }}
                                    </mat-slide-toggle>
                                }
                            }

                            <ai-references
                                [items]="references()"
                                [uploading]="uploading_references()"
                                (picked)="addReferences($event)"
                                (removed)="removeReference($event)"
                            ></ai-references>
                        } @else {
                            <!-- the brief has already been spent; from here the
                                 box asks for a change to what is on screen -->
                            @if (brief()) {
                                <p
                                    class="text-base-content/60 m-0 text-xs italic"
                                >
                                    &ldquo;{{ brief() }}&rdquo;
                                </p>
                            }
                            <div class="flex flex-col">
                                <label for="ai-refine" class="mb-1 text-sm">{{
                                    'SIGNAGE_MANAGER.AI_REFINE' | translate
                                }}</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <textarea
                                        matInput
                                        id="ai-refine"
                                        rows="2"
                                        [placeholder]="
                                            'SIGNAGE_MANAGER.AI_REFINE_HINT'
                                                | translate
                                        "
                                        [(ngModel)]="refinement"
                                    ></textarea>
                                </mat-form-field>
                                <button
                                    mat-stroked-button
                                    type="button"
                                    class="self-start"
                                    [disabled]="
                                        !refinement().trim() ||
                                        !selected() ||
                                        state() === 'generating'
                                    "
                                    (click)="refine()"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.AI_REFINE_ACTION'
                                            | translate
                                    }}
                                </button>
                            </div>

                            <ai-references
                                [items]="references()"
                                [uploading]="uploading_references()"
                                (picked)="addReferences($event)"
                                (removed)="removeReference($event)"
                            ></ai-references>

                            <div class="border-base-content/10 border-t pt-4">
                                <p class="m-0 mb-2 text-sm font-medium">
                                    {{
                                        'SIGNAGE_MANAGER.AI_WORDS_AND_LOGO'
                                            | translate
                                    }}
                                </p>
                                <ai-layer-controls
                                    [state]="layer_state()"
                                    [logo_on_light]="logo_on_light()"
                                    [logo_on_dark]="logo_on_dark()"
                                    [brand]="brand()"
                                    [uploading]="uploading_logo()"
                                    (changed)="layer_state.set($event)"
                                    (logoPicked)="uploadLogo($event)"
                                ></ai-layer-controls>
                            </div>
                        }

                        @if (quota_note()) {
                            <p class="text-base-content/60 m-0 text-xs">
                                {{ quota_note() }}
                            </p>
                        }
                        @if (engine_note()) {
                            <p class="text-base-content/60 m-0 text-xs">
                                {{ engine_note() }}
                            </p>
                        }
                    </div>

                    <footer
                        class="border-base-content/10 flex shrink-0 items-center justify-end gap-2 border-t p-4"
                    >
                        @if (state() === 'generating') {
                            <button
                                mat-stroked-button
                                type="button"
                                (click)="cancel()"
                            >
                                {{ 'COMMON.CANCEL' | translate }}
                            </button>
                        } @else if (!rail().length) {
                            <button
                                btn
                                matRipple
                                class="min-w-32"
                                [disabled]="!brief().trim()"
                                (click)="start()"
                            >
                                {{ 'SIGNAGE_MANAGER.AI_GENERATE' | translate }}
                            </button>
                        } @else {
                            <button
                                btn
                                matRipple
                                class="flex min-w-32 items-center justify-center gap-2"
                                [disabled]="!selected() || saving()"
                                (click)="save()"
                            >
                                @if (saving()) {
                                    <mat-spinner diameter="18"></mat-spinner>
                                    {{
                                        'SIGNAGE_MANAGER.AI_SAVING' | translate
                                    }}
                                } @else {
                                    {{ 'COMMON.SAVE' | translate }}
                                }
                            </button>
                        }
                    </footer>
                </aside>
            </div>
        </div>
    `,
    imports: [
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        AuthenticatedImageDirective,
        IconComponent,
        TranslatePipe,
        AiLayerComponent,
        AiLayerControlsComponent,
        AiReferencesComponent,
    ],
})
export class AiImageModalComponent implements OnDestroy {
    private readonly _data = inject<AiImageModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref =
        inject<MatDialogRef<AiImageModalComponent>>(MatDialogRef);
    private readonly _service = inject(SignageService);
    private readonly _ai = inject(AiImageService);

    private readonly _layer = viewChild(AiLayerComponent);

    public readonly state = signal<ModalState>('compose');
    public readonly saving = signal(false);

    public readonly brief = signal('');
    public readonly refinement = signal('');
    public readonly aspect = signal(this._data.aspect_ratio || '16:9');
    public readonly candidates = signal(2);
    public readonly add_text_with_layer = signal(!this._data.source_upload_id);
    public readonly include_logo = signal(!this._data.source_upload_id);

    public readonly layer_state = signal<AiLayerState>({
        blocks: [newTextBlock('headline')],
        logo: false,
        logo_position: 'bottom-right',
        logo_scale: 0.14,
        logo_choice: 'auto',
    });

    /** the newest job; the rail walks back from here through its parents */
    public readonly current_job_id = signal('');
    public readonly selected = signal<Candidate | null>(null);
    public readonly selected_object_url = signal('');
    public readonly logo_on_light = signal('');
    public readonly logo_on_dark = signal('');
    public readonly uploading_logo = signal(false);

    public readonly references = signal<AiReference[]>([]);
    public readonly uploading_references = signal(false);

    public readonly brand = this._ai.brand_kit;
    public readonly is_edit = computed(() => !!this._data.source_upload_id);

    /** the image being changed, so the brief is not written blind */
    public readonly source_url = computed(() => {
        const id = this._data.source_upload_id;
        return id ? `/api/engine/v2/uploads/${encodeURIComponent(id)}/url` : '';
    });
    public readonly has_logo = computed(
        () => !!this._ai.capabilities()?.logo_layer,
    );

    public readonly aspect_options = computed(
        () => this._ai.capabilities()?.aspect_ratios || ['16:9', '9:16'],
    );
    public readonly candidate_options = computed(() => {
        const max = this._ai.capabilities()?.max_candidates || 2;
        return Array.from({ length: max }, (_, index) => index + 1);
    });

    public readonly job = computed<AiJob | undefined>(
        () => this._ai.jobs()[this.current_job_id()],
    );

    /**
     * Every candidate of every job in the refine chain, oldest first: the first
     * generation's options and each round of changes since, so going back to a
     * version you liked is one click rather than a re-generate.
     */
    public readonly rail = computed<Candidate[]>(() => {
        const jobs = this._ai.jobs();
        const chain: AiJob[] = [];
        const seen = new Set<string>();
        let id = this.current_job_id();
        while (id && jobs[id] && !seen.has(id)) {
            seen.add(id);
            chain.unshift(jobs[id]);
            id = jobs[id].parent_job_id || '';
        }
        const rail: Candidate[] = [];
        chain.forEach((job, version) => {
            (job.images || []).forEach((image, index) => {
                if (!image?.upload_id) return;
                rail.push({
                    job_id: job.id,
                    index,
                    upload_id: image.upload_id as string,
                    url: (image as AiJobImage).url as string,
                    version: version + 1,
                });
            });
        });
        return rail;
    });

    public readonly progress_note = computed(() => {
        const job = this.job();
        if (!job) return '';
        return `${job.images_produced} / ${job.candidates}`;
    });

    public readonly quota_note = computed(() => {
        const quota = this._ai.capabilities()?.quota;
        const left = quota?.user_remaining_today;
        if (left === null || left === undefined) return '';
        return i18n('SIGNAGE_MANAGER.AI_QUOTA_LEFT', { count: `${left}` });
    });

    /**
     * Which engine is behind the button. Normal for an AI feature to say, and
     * it is the difference between "the model did badly" and "this domain is
     * pointed at something that is not a model".
     */
    public readonly engine_note = computed(() => {
        const capabilities = this._ai.capabilities();
        if (!capabilities?.enabled) return '';
        const provider =
            capabilities.providers.find(
                (p) => p.id === capabilities.default_provider_id,
            ) || capabilities.providers[0];
        if (!provider) return '';
        const model = provider.models?.find(
            (m) => m.id === provider.default_model,
        );
        return i18n('SIGNAGE_MANAGER.AI_ENGINE', {
            model: model?.name || provider.default_model || '',
            provider: provider.name,
        });
    });

    public readonly heading = computed(() =>
        this.is_edit()
            ? 'SIGNAGE_MANAGER.AI_EDIT_IMAGE'
            : 'SIGNAGE_MANAGER.AI_CREATE_IMAGE',
    );

    /** whether anything is drawn over the artwork, and so has to be flattened */
    public readonly has_overlay = computed(() => {
        const state = this.layer_state();
        if (state.blocks.some((block) => block.text.trim())) return true;
        return state.logo && !!(this.logo_on_light() || this.logo_on_dark());
    });

    public versionLabel(candidate: Candidate) {
        return i18n('SIGNAGE_MANAGER.AI_VERSION_LABEL', {
            version: `${candidate.version}`,
            option: `${candidate.index + 1}`,
        });
    }

    public async start() {
        const prompt = this.brief().trim();
        if (!prompt) return;
        this.state.set('generating');
        try {
            const job = this._data.source_upload_id
                ? await this._ai.edit({
                      prompt,
                      aspect_ratio: this.aspect(),
                      candidates: this.candidates(),
                      include_logo: this.include_logo(),
                      add_text_with_layer: this.add_text_with_layer(),
                      source_upload_id: this._data.source_upload_id,
                      source_item_id: this._data.source_item_id,
                      references: this.reference_ids(),
                  })
                : await this._ai.generate({
                      prompt,
                      aspect_ratio: this.aspect(),
                      candidates: this.candidates(),
                      include_logo: this.include_logo(),
                      add_text_with_layer: this.add_text_with_layer(),
                      references: this.reference_ids(),
                  });
            this.current_job_id.set(job.id);
            this._awaitJob(job.id);
        } catch (error) {
            this.state.set('compose');
            notifyError(this._message(error));
        }
    }

    public async refine() {
        const instruction = this.refinement().trim();
        const source = this.selected();
        if (!instruction || !source) return;
        this.refinement.set('');
        this.state.set('generating');
        try {
            const job = await this._ai.edit({
                prompt: instruction,
                aspect_ratio: this.aspect(),
                candidates: 1,
                include_logo: this.include_logo(),
                add_text_with_layer: this.add_text_with_layer(),
                source_upload_id: source.upload_id,
                parent_job_id: source.job_id,
                references: this.reference_ids(),
            });
            this.current_job_id.set(job.id);
            this._awaitJob(job.id);
        } catch (error) {
            this.state.set('review');
            notifyError(this._message(error));
        }
    }

    public async select(candidate: Candidate) {
        this.selected.set(candidate);
        const url = await this._ai.loadImage(candidate.url).catch(() => '');
        this.selected_object_url.set(url);
    }

    public async cancel() {
        const id = this.current_job_id();
        if (id) await this._ai.cancel(id);
        this.state.set(this.rail().length ? 'review' : 'compose');
    }

    /**
     * Keep a logo for the domain. Nothing in PlaceOS stores one, so the first
     * person to want one on a poster is the person who supplies it, and it is
     * remembered for everyone afterwards.
     */
    public readonly reference_ids = computed(() =>
        this.references().map((item) => item.id),
    );

    /**
     * Attach pictures for this request. They upload as they are picked so the
     * number under each one is settled before the brief mentions it.
     */
    public async addReferences(files: File[]) {
        if (!files.length) return;
        this.uploading_references.set(true);
        try {
            for (const file of files) {
                const id = await this._ai.uploadReference(file);
                this.references.update((list) => [
                    ...list,
                    { id, name: file.name, url: URL.createObjectURL(file) },
                ]);
            }
        } catch (error) {
            notifyError(this._message(error));
        } finally {
            this.uploading_references.set(false);
        }
    }

    public removeReference(id: string) {
        const item = this.references().find((entry) => entry.id === id);
        if (item) URL.revokeObjectURL(item.url);
        this.references.update((list) =>
            list.filter((entry) => entry.id !== id),
        );
        this._ai.removeReference(id);
    }

    /**
     * The attachments existed for this dialog, so they go with it.
     *
     * Not while a job is still running: the server reads the bytes when the
     * vendor call starts, and a job outlives this dialog by design. Those are
     * left to the housekeeping sweep, which is what their tag is for.
     */
    public ngOnDestroy() {
        const running = this.state() === 'generating';
        for (const item of this.references()) {
            URL.revokeObjectURL(item.url);
            if (!running) this._ai.removeReference(item.id);
        }
    }

    public async uploadLogo(file: File) {
        this.uploading_logo.set(true);
        try {
            await this._ai.uploadBrandLogo(file);
            await this._loadBrandLogos();
            this.layer_state.set({ ...this.layer_state(), logo: true });
            notifySuccess(i18n('SIGNAGE_MANAGER.AI_LOGO_SAVED'));
        } catch (error) {
            notifyError(this._message(error));
        } finally {
            this.uploading_logo.set(false);
        }
    }

    public async save() {
        const candidate = this.selected();
        if (!candidate) return;

        // Take the composited image before the button swaps to a spinner: a
        // change-detection pass that tears the canvas down mid-save would leave
        // nothing to read it from.
        const name = this._name();
        const overlay = this.has_overlay();
        const blob = overlay ? await this._layer()?.toBlob() : undefined;
        if (overlay && !blob) {
            notifyError(i18n('SIGNAGE_MANAGER.AI_NO_IMAGE'));
            return;
        }

        this.saving.set(true);
        try {
            let media: any;

            if (blob) {
                const file = new File([blob], `${name}.png`, {
                    type: 'image/png',
                });
                media = await this._service.addMedia(file, {
                    name,
                    tags: this._tags(candidate),
                } as any);
            } else {
                media = await this._service.addMediaFromUpload(
                    candidate.upload_id,
                    {
                        name,
                        tags: this._tags(candidate),
                        orientation:
                            this.aspect() === '9:16' ? 'portrait' : 'landscape',
                    },
                    this._data.playlist_id,
                );
            }

            if (media?.id) {
                await this._ai.claim(
                    candidate.job_id,
                    candidate.upload_id,
                    media.id,
                );
                // the list paints as soon as the dialog closes; give the
                // thumbnail a moment to become readable so the tile is not
                // briefly empty
                if (media.thumbnail_id) {
                    await this._ai
                        .loadImage(
                            `/api/engine/v2/uploads/${media.thumbnail_id}/url`,
                        )
                        .catch(() => '');
                }
            }
            this._dialog_ref.close(media);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('signage AI save failed', error);
            notifyError(this._message(error));
        } finally {
            this.saving.set(false);
        }
    }

    /** poll until the job reaches a final state, then move on */
    private _awaitJob(id: string) {
        const check = () => {
            const job = this._ai.jobs()[id];
            if (!job) return setTimeout(check, 250);
            if (!isFinal(job)) return setTimeout(check, 250);
            if (job.state === 'failed') {
                this.state.set(this.rail().length ? 'review' : 'compose');
                notifyError(
                    job.error_message || i18n('SIGNAGE_MANAGER.AI_JOB_FAILED'),
                );
                return;
            }
            if (job.state === 'cancelled') {
                this.state.set(this.rail().length ? 'review' : 'compose');
                return;
            }
            const newest = this.rail().filter(
                (candidate) => candidate.job_id === id,
            );
            if (newest.length) this.select(newest[0]);
            this._loadBrandLogos();
            this.state.set('review');
        };
        check();
    }

    /** both saved logos, so the toggle in the sidebar has something to show */
    private async _loadBrandLogos() {
        const brand = this.brand();
        const [on_light, on_dark] = await Promise.all([
            this._readUpload(brand?.logo_upload_id),
            this._readUpload(brand?.logo_dark_upload_id),
        ]);
        this.logo_on_light.set(on_light);
        this.logo_on_dark.set(on_dark);
        if ((on_light || on_dark) && this.include_logo()) {
            this.layer_state.set({ ...this.layer_state(), logo: true });
        }
    }

    private _readUpload(id?: string) {
        if (!id) return Promise.resolve('');
        return this._ai
            .loadImage(`/api/engine/v2/uploads/${encodeURIComponent(id)}/url`)
            .catch(() => '');
    }

    private _name() {
        const brief = (this.brief() || this._data.source_name || '').trim();
        const words = brief.split(/\s+/).slice(0, 6).join(' ');
        return words || i18n('SIGNAGE_MANAGER.AI_DEFAULT_NAME');
    }

    private _tags(candidate: Candidate) {
        const tags = ['ai-generated', `ai-job-${candidate.job_id}`];
        if (this._data.source_upload_id) {
            tags.push(`ai-source-${this._data.source_upload_id}`);
        }
        return tags;
    }

    private _message(error: any) {
        return (
            error?.error?.error ||
            error?.error ||
            error?.message ||
            i18n('SIGNAGE_MANAGER.AI_JOB_FAILED')
        );
    }
}
