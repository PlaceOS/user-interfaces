import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { i18n, notifyError, notifySuccess } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    FullscreenModalShellComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';

import { SignageService } from '../signage.service';
import { AiImageService, isFinal } from './ai-image.service';
import { AiLayerComponent } from './ai-layer.component';
import { AiJob, AiJobImage, AiLayerState } from './ai.types';

export interface AiImageModalData {
    /** pre-set from the playlist a user opened this from */
    aspect_ratio?: string;
    playlist_id?: string;
    /** editing an existing item rather than starting from nothing */
    source_upload_id?: string;
    source_item_id?: string;
    source_name?: string;
}

type ModalState = 'compose' | 'generating' | 'choose' | 'layer';

interface Candidate {
    job_id: string;
    index: number;
    upload_id: string;
    url: string;
}

@Component({
    selector: 'ai-image-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="heading() | translate"
            [confirm_text]="confirm_text() | translate"
            [confirm_disabled]="!can_confirm()"
            [loading]="saving() ? ('SIGNAGE_MANAGER.AI_SAVING' | translate) : ''"
            (confirm)="confirm()"
        >
            @switch (state()) {
                @case ('compose') {
                    @if (source_url()) {
                        <p class="m-0 mb-1 text-xs uppercase opacity-60">
                            {{ 'SIGNAGE_MANAGER.AI_CHANGING_THIS' | translate }}
                        </p>
                        <div
                            class="border-base-content/10 bg-base-200 mb-4 overflow-hidden rounded border p-2"
                        >
                            <img
                                auth
                                [source]="source_url()"
                                class="mx-auto block max-h-64 max-w-full"
                                [alt]="
                                    'SIGNAGE_MANAGER.AI_CHANGING_THIS'
                                        | translate
                                "
                            />
                        </div>
                    }
                    <label for="ai-brief">{{
                        (is_edit()
                            ? 'SIGNAGE_MANAGER.AI_INSTRUCTION'
                            : 'SIGNAGE_MANAGER.AI_BRIEF'
                        ) | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <textarea
                            matInput
                            id="ai-brief"
                            rows="3"
                            [placeholder]="
                                (is_edit()
                                    ? 'SIGNAGE_MANAGER.AI_INSTRUCTION_HINT'
                                    : 'SIGNAGE_MANAGER.AI_BRIEF_HINT'
                                ) | translate
                            "
                            [(ngModel)]="brief"
                        ></textarea>
                    </mat-form-field>

                    <div class="flex flex-wrap gap-2">
                        <!-- an edit comes back at the source's own shape, so
                             there is nothing here to choose -->
                        @if (!is_edit()) {
                            <mat-form-field appearance="outline" class="flex-1">
                                <mat-select
                                    [(ngModel)]="aspect"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.AI_SHAPE' | translate
                                    "
                                >
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
                        <mat-form-field appearance="outline" class="flex-1">
                            <mat-select
                                [(ngModel)]="candidates"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.AI_OPTIONS_COUNT'
                                        | translate
                                "
                            >
                                @for (count of candidate_options(); track count) {
                                    <mat-option [value]="count">{{
                                        count
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>

                    <!-- both only shape a new picture: an edit keeps whatever
                         the image already has -->
                    @if (!is_edit()) {
                        <mat-slide-toggle [(ngModel)]="add_text_with_layer">
                            {{
                                'SIGNAGE_MANAGER.AI_ADD_WORDS_LAYER' | translate
                            }}
                        </mat-slide-toggle>
                        <p class="text-base-content/60 m-0 mt-1 text-xs">
                            {{
                                'SIGNAGE_MANAGER.AI_ADD_WORDS_LAYER_HINT'
                                    | translate
                            }}
                        </p>

                        @if (has_logo()) {
                            <mat-slide-toggle
                                class="mt-2"
                                [(ngModel)]="include_logo"
                            >
                                {{
                                    'SIGNAGE_MANAGER.AI_LEAVE_LOGO_SPACE'
                                        | translate
                                }}
                            </mat-slide-toggle>
                        }
                    }

                    @if (quota_note()) {
                        <p class="text-base-content/60 m-0 mt-3 text-xs">
                            {{ quota_note() }}
                        </p>
                    }
                    @if (engine_note()) {
                        <p class="text-base-content/60 m-0 mt-1 text-xs">
                            {{ engine_note() }}
                        </p>
                    }
                }
                @case ('generating') {
                    <div class="flex flex-col items-center gap-4 py-8">
                        <mat-spinner diameter="48"></mat-spinner>
                        <p class="m-0 text-sm">
                            {{ 'SIGNAGE_MANAGER.AI_WORKING' | translate }}
                        </p>
                        <p class="text-base-content/60 m-0 text-xs">
                            {{ progress_note() }}
                        </p>
                        <button mat-stroked-button (click)="cancel()">
                            {{ 'COMMON.CANCEL' | translate }}
                        </button>
                    </div>
                }
                @case ('choose') {
                    <div class="grid grid-cols-2 gap-3">
                        @for (candidate of candidates_list(); track candidate.upload_id) {
                            <button
                                type="button"
                                class="border-base-content/10 relative overflow-hidden rounded border"
                                [class.ring-2]="
                                    selected()?.upload_id === candidate.upload_id
                                "
                                (click)="select(candidate)"
                            >
                                <img
                                    auth
                                    [source]="candidate.url"
                                    class="h-full w-full object-cover"
                                    [alt]="'SIGNAGE_MANAGER.AI_OPTION' | translate"
                                />
                            </button>
                        }
                    </div>

                    @if (versions().length > 1) {
                        <div class="mt-4">
                            <p class="m-0 mb-1 text-xs uppercase opacity-60">
                                {{ 'SIGNAGE_MANAGER.AI_VERSIONS' | translate }}
                            </p>
                            <div class="flex gap-2 overflow-x-auto pb-1">
                                @for (version of versions(); track version.job_id) {
                                    <button
                                        type="button"
                                        class="border-base-content/10 h-14 w-24 shrink-0 overflow-hidden rounded border"
                                        [class.ring-2]="
                                            current_job_id() === version.job_id
                                        "
                                        (click)="openVersion(version.job_id)"
                                    >
                                        <img
                                            auth
                                            [source]="version.url"
                                            class="h-full w-full object-cover"
                                            [alt]="version.job_id"
                                        />
                                    </button>
                                }
                            </div>
                        </div>
                    }

                    <div class="mt-4 flex flex-col gap-2">
                        <label for="ai-refine">{{
                            'SIGNAGE_MANAGER.AI_REFINE' | translate
                        }}</label>
                        <div class="flex gap-2">
                            <mat-form-field appearance="outline" class="flex-1">
                                <input
                                    matInput
                                    id="ai-refine"
                                    [placeholder]="
                                        'SIGNAGE_MANAGER.AI_REFINE_HINT'
                                            | translate
                                    "
                                    [(ngModel)]="refinement"
                                    (keyup.enter)="refine()"
                                />
                            </mat-form-field>
                            <button
                                mat-stroked-button
                                [disabled]="!refinement().trim() || !selected()"
                                (click)="refine()"
                            >
                                {{ 'SIGNAGE_MANAGER.AI_REFINE_ACTION' | translate }}
                            </button>
                        </div>
                        <p class="text-base-content/60 m-0 text-xs">
                            {{ 'SIGNAGE_MANAGER.AI_REFINE_NOTE' | translate }}
                        </p>
                    </div>
                }
                @case ('layer') {
                    <ai-layer
                        [image_url]="selected_object_url()"
                        [logo_url]="logo_object_url()"
                        [brand]="brand()"
                        [uploading]="uploading_logo()"
                        (changed)="layer_state.set($event)"
                        (logoPicked)="uploadLogo($event)"
                    ></ai-layer>
                }
            }
        </fullscreen-modal-shell>
    `,
    imports: [
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSlideToggleModule,
        AuthenticatedImageDirective,
        FullscreenModalShellComponent,
        IconComponent,
        TranslatePipe,
        AiLayerComponent,
    ],
})
export class AiImageModalComponent {
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
    public readonly layer_state = signal<AiLayerState | null>(null);

    public readonly current_job_id = signal('');
    public readonly selected = signal<Candidate | null>(null);
    public readonly selected_object_url = signal('');
    public readonly logo_object_url = signal('');
    public readonly uploading_logo = signal(false);

    public readonly brand = this._ai.brand_kit;
    public readonly is_edit = computed(() => !!this._data.source_upload_id);

    /** the image being changed, so the brief is not written blind */
    public readonly source_url = computed(() => {
        const id = this._data.source_upload_id;
        return id
            ? `/api/engine/v2/uploads/${encodeURIComponent(id)}/url`
            : '';
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

    public readonly candidates_list = computed<Candidate[]>(() => {
        const job = this.job();
        if (!job) return [];
        return (job.images || [])
            .map((image, index) => ({ image, index }))
            .filter(({ image }) => !!image?.upload_id)
            .map(({ image, index }) => ({
                job_id: job.id,
                index,
                upload_id: (image as AiJobImage).upload_id as string,
                url: (image as AiJobImage).url as string,
            }));
    });

    /** every job in the refine chain that produced something, oldest first */
    public readonly versions = computed(() => {
        const chain: Candidate[] = [];
        const jobs = this._ai.jobs();
        let id = this.current_job_id();
        const seen = new Set<string>();
        while (id && jobs[id] && !seen.has(id)) {
            seen.add(id);
            const job = jobs[id];
            const first = (job.images || []).find((image) => image?.upload_id);
            if (first) {
                chain.unshift({
                    job_id: job.id,
                    index: 0,
                    upload_id: first.upload_id as string,
                    url: first.url as string,
                });
            }
            id = job.parent_job_id || '';
        }
        return chain;
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

    public readonly heading = computed(() => {
        if (this.state() === 'layer') return 'SIGNAGE_MANAGER.AI_ADD_WORDS';
        if (this.state() === 'choose') return 'SIGNAGE_MANAGER.AI_PICK_ONE';
        return this.is_edit()
            ? 'SIGNAGE_MANAGER.AI_EDIT_IMAGE'
            : 'SIGNAGE_MANAGER.AI_CREATE_IMAGE';
    });

    public readonly confirm_text = computed(() => {
        switch (this.state()) {
            case 'compose':
                return 'SIGNAGE_MANAGER.AI_GENERATE';
            case 'choose':
                return this.add_text_with_layer()
                    ? 'SIGNAGE_MANAGER.AI_ADD_WORDS'
                    : 'COMMON.SAVE';
            case 'layer':
                return 'COMMON.SAVE';
            default:
                return 'COMMON.CANCEL';
        }
    });

    public readonly can_confirm = computed(() => {
        if (this.saving()) return false;
        switch (this.state()) {
            case 'compose':
                return !!this.brief().trim();
            case 'choose':
                return !!this.selected();
            case 'layer':
                return true;
            default:
                return false;
        }
    });

    public confirm() {
        switch (this.state()) {
            case 'compose':
                return this.start();
            case 'choose':
                return this.add_text_with_layer()
                    ? this.openLayer()
                    : this.save();
            case 'layer':
                return this.save();
        }
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
                  })
                : await this._ai.generate({
                      prompt,
                      aspect_ratio: this.aspect(),
                      candidates: this.candidates(),
                      include_logo: this.include_logo(),
                      add_text_with_layer: this.add_text_with_layer(),
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
            });
            this.current_job_id.set(job.id);
            this._awaitJob(job.id);
        } catch (error) {
            this.state.set('choose');
            notifyError(this._message(error));
        }
    }

    public openVersion(job_id: string) {
        this.current_job_id.set(job_id);
        const first = this.candidates_list()[0];
        if (first) this.select(first);
    }

    public async select(candidate: Candidate) {
        this.selected.set(candidate);
        const url = await this._ai.loadImage(candidate.url).catch(() => '');
        this.selected_object_url.set(url);
    }

    public async cancel() {
        const id = this.current_job_id();
        if (id) await this._ai.cancel(id);
        this.state.set('compose');
    }

    /**
     * Keep a logo for the domain. Nothing in PlaceOS stores one, so the first
     * person to want one on a poster is the person who supplies it, and it is
     * remembered for everyone afterwards.
     */
    public async uploadLogo(file: File) {
        this.uploading_logo.set(true);
        try {
            const upload_id = await this._ai.uploadBrandLogo(file);
            const url = await this._ai
                .loadImage(`/api/engine/v2/uploads/${upload_id}/url`)
                .catch(() => '');
            this.logo_object_url.set(url);
            notifySuccess(i18n('SIGNAGE_MANAGER.AI_LOGO_SAVED'));
        } catch (error) {
            notifyError(this._message(error));
        } finally {
            this.uploading_logo.set(false);
        }
    }

    public async openLayer() {
        const logo_id = this.brand()?.logo_upload_id;
        if (logo_id && !this.logo_object_url()) {
            const url = await this._ai
                .loadImage(`/api/engine/v2/uploads/${logo_id}/url`)
                .catch(() => '');
            this.logo_object_url.set(url);
        }
        this.state.set('layer');
    }

    public async save() {
        const candidate = this.selected();
        if (!candidate) return;

        // The shell swaps its projected content for a spinner while `loading`
        // is set, which destroys the layer component. Take the composited image
        // before that happens.
        const name = this._name();
        const blob =
            this.state() === 'layer'
                ? await this._layer()?.toBlob()
                : undefined;
        if (this.state() === 'layer' && !blob) {
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
                this.state.set(this.versions().length ? 'choose' : 'compose');
                notifyError(
                    job.error_message ||
                        i18n('SIGNAGE_MANAGER.AI_JOB_FAILED'),
                );
                return;
            }
            if (job.state === 'cancelled') {
                this.state.set('compose');
                return;
            }
            const first = this.candidates_list()[0];
            if (first) this.select(first);
            this.state.set('choose');
        };
        check();
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
