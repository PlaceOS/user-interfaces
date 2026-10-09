import {
    Component,
    computed,
    effect,
    inject,
    linkedSignal,
    OnDestroy,
    signal,
    untracked,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { SignageMedia } from '@placeos/ts-client';

import { brandEditingOn, canEditBrandKit } from '../branding/brand-access';
import { SignageMediaService } from '../media/signage-media.service';
import { SignagePlaylistService } from '../playlists/signage-playlist.service';
import { SignageContextService } from '../signage-context.service';
import {
    ImageGenLayerControlsComponent,
    newTextBlock,
} from './image-gen-layer-controls.component';
import {
    COMPOSITE_TYPE,
    ImageGenLayerComponent,
} from './image-gen-layer.component';
import { ImageGenReferencesComponent } from './image-gen-references.component';
import { ImageGenService, isFinal } from './image-gen.service';
import {
    ImageGenEditRequest,
    ImageGenGenerateRequest,
    ImageGenJob,
    ImageGenLayerState,
    ImageGenReference,
} from './image-gen.types';
import { actionError, orientationOf } from './image-gen.util';

export interface ImageGenModalData {
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
    width?: number;
    height?: number;
    /** position in this session, 1 for the first job that produced images */
    version: number;
}

@Component({
    selector: 'image-gen-modal',
    template: `
        <div class="bg-base-100 flex h-full w-full flex-col overflow-hidden">
            <header
                class="bg-base-200 m-2 w-[calc(100%-1rem)] shrink-0 rounded-sm border-none p-2"
            >
                <h2 id="image-gen-modal-title" class="px-2 text-xl font-medium">
                    {{ heading() | translate }}
                </h2>
                <button
                    icon
                    type="button"
                    matRipple
                    mat-dialog-close
                    [disabled]="saving()"
                    [attr.aria-label]="'COMMON.CLOSE' | translate"
                >
                    <icon>close</icon>
                </button>
            </header>

            <div class="flex min-h-0 flex-1 flex-col gap-2 px-2 pb-2 md:flex-row">
                <!-- the picture, given the room -->
                <section
                    class="flex min-h-48 min-w-0 flex-1 flex-col gap-2 md:min-h-0"
                >
                    <div
                        class="border-base-300 bg-base-200 relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-lg border"
                    >
                        @if (selected_object_url()) {
                            <image-gen-layer
                                class="h-full w-full"
                                [class.opacity-40]="state() === 'generating'"
                                [image_url]="selected_object_url()"
                                [logo_on_light]="logo_on_light()"
                                [logo_on_dark]="logo_on_dark()"
                                [brand]="applied_brand()"
                                [state]="layer_state()"
                                (changed)="layer_state.set($event)"
                                (failed)="onArtworkFailed()"
                            ></image-gen-layer>
                        } @else if (selected()) {
                            <!-- the pick is still being read; the source
                                 image here would look like the result -->
                            <mat-spinner diameter="32"></mat-spinner>
                        } @else if (source_url()) {
                            <img
                                auth
                                [source]="source_url()"
                                class="max-h-full max-w-full object-contain"
                                [class.opacity-40]="state() === 'generating'"
                                [alt]="
                                    'SIGNAGE_MANAGER.IMAGE_GEN_CHANGING_THIS'
                                        | translate
                                "
                            />
                        } @else if (state() !== 'generating') {
                            <p class="text-base-content/50 m-0 px-6 text-sm">
                                {{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_PREVIEW_EMPTY'
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
                                        'SIGNAGE_MANAGER.IMAGE_GEN_WORKING'
                                            | translate
                                    }}
                                </p>
                                <p class="text-base-content/60 m-0 text-xs">
                                    {{ progress_note() }}
                                </p>
                            </div>
                        }
                    </div>

                    <!-- every candidate of every job in this session, oldest first -->
                    @if (rail().length) {
                        <div class="flex shrink-0 flex-col gap-1">
                            <p class="m-0 text-sm font-medium">
                                {{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_VERSIONS'
                                        | translate
                                }}
                            </p>
                            <!-- padded so the selection ring is not clipped -->
                            <div class="flex gap-2 overflow-x-auto p-1">
                                @for (
                                    candidate of rail();
                                    track candidate.job_id +
                                        '-' +
                                        candidate.index
                                ) {
                                    <!-- a new result takes the preview when
                                         it lands, so no pick while one runs -->
                                    <button
                                        type="button"
                                        [disabled]="
                                            claim_pending() ||
                                            saving() ||
                                            state() === 'generating'
                                        "
                                        class="border-base-300 ring-primary ring-offset-base-100 h-16 w-28 shrink-0 overflow-hidden rounded-lg border ring-offset-2 disabled:opacity-60"
                                        [class.ring-2]="
                                            selected()?.upload_id ===
                                            candidate.upload_id
                                        "
                                        [attr.aria-pressed]="
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
                    class="border-base-300 bg-base-100 flex min-h-0 w-full flex-1 flex-col rounded-lg border md:w-96 md:flex-none md:shrink-0"
                >
                    <div class="flex-1 space-y-4 overflow-y-auto p-4">
                        @if (show_compose()) {
                            <div class="flex flex-col">
                                <label
                                    for="image-gen-brief"
                                    class="mb-1 text-sm"
                                    >{{
                                        (is_edit()
                                            ? 'SIGNAGE_MANAGER.IMAGE_GEN_INSTRUCTION'
                                            : 'SIGNAGE_MANAGER.IMAGE_GEN_BRIEF'
                                        ) | translate
                                    }}</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <textarea
                                        matInput
                                        id="image-gen-brief"
                                        rows="4"
                                        [placeholder]="
                                            (is_edit()
                                                ? 'SIGNAGE_MANAGER.IMAGE_GEN_INSTRUCTION_HINT'
                                                : 'SIGNAGE_MANAGER.IMAGE_GEN_BRIEF_HINT'
                                            ) | translate
                                        "
                                        [(ngModel)]="brief"
                                        (keydown.control.enter)="start()"
                                        (keydown.meta.enter)="start()"
                                    ></textarea>
                                </mat-form-field>
                            </div>

                            <!-- an edit comes back at the source's own
                                 shape, so there is nothing here to choose -->
                            @if (!is_edit()) {
                                <div class="flex flex-col">
                                    <!-- a mat-select names itself from the
                                         label by its id -->
                                    <label
                                        id="image-gen-shape-label"
                                        for="image-gen-shape"
                                        class="mb-1 text-sm"
                                        >{{
                                            'SIGNAGE_MANAGER.IMAGE_GEN_SHAPE'
                                                | translate
                                        }}</label
                                    >
                                    <mat-form-field
                                        appearance="outline"
                                        class="no-subscript w-full"
                                    >
                                        <mat-select
                                            id="image-gen-shape"
                                            aria-labelledby="image-gen-shape-label"
                                            [(ngModel)]="aspect"
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
                                </div>
                            }
                            <div class="flex flex-col">
                                <label
                                    id="image-gen-count-label"
                                    for="image-gen-count"
                                    class="mb-1 text-sm"
                                    >{{
                                        'SIGNAGE_MANAGER.IMAGE_GEN_OPTIONS_COUNT'
                                            | translate
                                    }}</label
                                >
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <mat-select
                                        id="image-gen-count"
                                        aria-labelledby="image-gen-count-label"
                                        [(ngModel)]="candidates"
                                    >
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

                            @if (has_branding()) {
                                <div class="flex flex-col gap-1">
                                    <mat-slide-toggle
                                        [(ngModel)]="use_branding"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.IMAGE_GEN_USE_BRANDING'
                                                | translate
                                        }}
                                    </mat-slide-toggle>
                                    <p class="text-base-content/60 m-0 text-xs">
                                        {{
                                            'SIGNAGE_MANAGER.IMAGE_GEN_USE_BRANDING_HINT'
                                                | translate
                                        }}
                                    </p>
                                </div>
                            }

                            <!-- both only shape a new picture: an edit keeps
                                 whatever the image already has -->
                            @if (!is_edit()) {
                                <div class="flex flex-col gap-1">
                                    <mat-slide-toggle
                                        [(ngModel)]="add_text_with_layer"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.IMAGE_GEN_ADD_WORDS_LAYER'
                                                | translate
                                        }}
                                    </mat-slide-toggle>
                                    <p class="text-base-content/60 m-0 text-xs">
                                        {{
                                            'SIGNAGE_MANAGER.IMAGE_GEN_ADD_WORDS_LAYER_HINT'
                                                | translate
                                        }}
                                    </p>
                                </div>

                                @if (has_logo()) {
                                    <mat-slide-toggle
                                        [(ngModel)]="include_logo"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.IMAGE_GEN_LEAVE_LOGO_SPACE'
                                                | translate
                                        }}
                                    </mat-slide-toggle>
                                }
                            }
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
                            <!-- refining sends the pick back through the edit
                                 model, so it follows the ai-editing flag -->
                            @if (can_refine()) {
                                <div class="flex flex-col gap-2">
                                    <div class="flex flex-col">
                                        <label
                                            for="image-gen-refine"
                                            class="mb-1 text-sm"
                                            >{{
                                                'SIGNAGE_MANAGER.IMAGE_GEN_REFINE'
                                                    | translate
                                            }}</label
                                        >
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript w-full"
                                        >
                                            <textarea
                                                matInput
                                                id="image-gen-refine"
                                                rows="2"
                                                [placeholder]="
                                                    'SIGNAGE_MANAGER.IMAGE_GEN_REFINE_HINT'
                                                        | translate
                                                "
                                                [(ngModel)]="refinement"
                                                (keydown.control.enter)="
                                                    refine()
                                                "
                                                (keydown.meta.enter)="refine()"
                                            ></textarea>
                                        </mat-form-field>
                                    </div>
                                    <button
                                        btn
                                        matRipple
                                        type="button"
                                        class="inverse self-start"
                                        [disabled]="
                                            !refinement().trim() ||
                                            !selected() ||
                                            state() === 'generating' ||
                                            claim_pending() ||
                                            saving()
                                        "
                                        (click)="refine()"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.IMAGE_GEN_REFINE_ACTION'
                                                | translate
                                        }}
                                    </button>
                                </div>
                            }
                        }

                        <image-gen-references
                            [items]="include_references()"
                            [uploading]="uploading_references()"
                            [max]="include_max()"
                            title="SIGNAGE_MANAGER.IMAGE_GEN_INCLUDE_IMAGES"
                            hint="SIGNAGE_MANAGER.IMAGE_GEN_INCLUDE_IMAGES_HINT"
                            (picked)="addReferences($event, 'include')"
                            (removed)="removeReference($event)"
                        ></image-gen-references>

                        <image-gen-references
                            [items]="style_items()"
                            [uploading]="uploading_references()"
                            [max]="style_max()"
                            [offset]="include_references().length"
                            title="SIGNAGE_MANAGER.IMAGE_GEN_STYLE_REFERENCE"
                            hint="SIGNAGE_MANAGER.IMAGE_GEN_STYLE_REFERENCE_HINT"
                            add_label="SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_ADD_ONE"
                            (picked)="addReferences($event, 'style')"
                            (removed)="removeReference($event)"
                        ></image-gen-references>

                        @if (!show_compose()) {
                            <div class="border-base-300 border-t pt-4">
                                <p class="m-0 mb-2 text-sm font-medium">
                                    {{
                                        'SIGNAGE_MANAGER.IMAGE_GEN_WORDS_AND_LOGO'
                                            | translate
                                    }}
                                </p>
                                <image-gen-layer-controls
                                    [state]="layer_state()"
                                    [logo_on_light]="logo_on_light()"
                                    [logo_on_dark]="logo_on_dark()"
                                    [brand]="applied_brand()"
                                    [can_set_logo]="can_set_logo()"
                                    [branding_editing]="branding_editing()"
                                    [uploading]="uploading_logo()"
                                    (changed)="layer_state.set($event)"
                                    (logoPicked)="uploadLogo($event)"
                                ></image-gen-layer-controls>
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
                        class="border-base-300 flex shrink-0 items-center justify-end gap-2 border-t p-2"
                    >
                        @if (state() === 'generating') {
                            <button
                                btn
                                matRipple
                                type="button"
                                class="inverse min-w-32"
                                (click)="cancel()"
                            >
                                {{ 'COMMON.CANCEL' | translate }}
                            </button>
                        } @else if (show_compose()) {
                            @if (rail().length) {
                                <button
                                    btn
                                    matRipple
                                    type="button"
                                    class="inverse min-w-32"
                                    (click)="composing.set(false)"
                                >
                                    {{ 'COMMON.BACK' | translate }}
                                </button>
                            }
                            <button
                                btn
                                matRipple
                                type="button"
                                class="min-w-32"
                                [disabled]="!brief().trim()"
                                (click)="start()"
                            >
                                {{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_GENERATE'
                                        | translate
                                }}
                            </button>
                        } @else {
                            <button
                                btn
                                matRipple
                                type="button"
                                class="inverse min-w-32"
                                [disabled]="claim_pending() || saving()"
                                (click)="composing.set(true)"
                            >
                                {{
                                    'SIGNAGE_MANAGER.IMAGE_GEN_NEW_BRIEF'
                                        | translate
                                }}
                            </button>
                            <button
                                btn
                                matRipple
                                type="button"
                                class="flex min-w-32 items-center justify-center gap-2"
                                [disabled]="!can_save()"
                                (click)="save()"
                            >
                                @if (saving()) {
                                    <mat-spinner diameter="18"></mat-spinner>
                                    {{
                                        'SIGNAGE_MANAGER.IMAGE_GEN_SAVING'
                                            | translate
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
        ImageGenLayerComponent,
        ImageGenLayerControlsComponent,
        ImageGenReferencesComponent,
    ],
})
export class ImageGenModalComponent implements OnDestroy {
    private readonly _data = inject<ImageGenModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref =
        inject<MatDialogRef<ImageGenModalComponent>>(MatDialogRef);
    private readonly _context = inject(SignageContextService);
    private readonly _media_service = inject(SignageMediaService);
    private readonly _playlist_service = inject(SignagePlaylistService);
    private readonly _image_gen = inject(ImageGenService);

    private readonly _layer = viewChild(ImageGenLayerComponent);
    private readonly _aspect_options = computed(() => {
        const capabilities = this._image_gen.capabilities();
        const model_options =
            this._image_gen.default_model()?.aspect_ratios || [];
        const domain_options = capabilities?.aspect_ratios || [];
        const shared = domain_options.filter((option) =>
            model_options.includes(option),
        );
        return shared.length
            ? shared
            : model_options.length
              ? model_options
              : domain_options;
    });
    private readonly _max_candidates = computed(() => {
        const domain_max = this._image_gen.capabilities()?.max_candidates ?? 2;
        const model_max =
            this._image_gen.default_model()?.max_candidates ?? domain_max;
        return Math.max(1, Math.min(domain_max, model_max));
    });

    public readonly state = signal<ModalState>('compose');
    public readonly saving = signal(false);
    /** writing a new brief while the versions made so far stay in the rail */
    public readonly composing = signal(false);

    public readonly brief = signal('');
    public readonly refinement = signal('');
    public readonly aspect = linkedSignal(() => {
        const options = this._aspect_options();
        const requested = this._data.aspect_ratio || '';
        return options.includes(requested)
            ? requested
            : options[0] || requested || '16:9';
    });
    public readonly candidates = linkedSignal(() => {
        return Math.min(2, this._max_candidates());
    });
    public readonly add_text_with_layer = signal(!this._data.source_upload_id);
    public readonly include_logo = signal(!this._data.source_upload_id);
    public readonly use_branding = signal(true);

    public readonly layer_state = signal<ImageGenLayerState>({
        blocks: [newTextBlock('headline')],
        logo: false,
        logo_position: 'bottom-right',
        logo_scale: 0.14,
        logo_choice: 'auto',
    });

    /** every job this modal started, oldest first */
    public readonly job_ids = signal<string[]>([]);
    /** the newest job, the one a cancel applies to */
    public readonly current_job_id = computed(
        () => this.job_ids().at(-1) || '',
    );
    public readonly selected = signal<Candidate | null>(null);
    public readonly selected_object_url = signal('');
    public readonly logo_on_light = signal('');
    public readonly logo_on_dark = signal('');
    public readonly uploading_logo = signal(false);

    public readonly include_references = signal<ImageGenReference[]>([]);
    public readonly style_reference = signal<ImageGenReference | null>(null);
    public readonly uploading_references = signal(false);

    /** every attached image, in the order it is sent: includes first */
    public readonly references = computed(() => {
        const style = this.style_reference();
        return style
            ? [...this.include_references(), style]
            : this.include_references();
    });
    public readonly style_items = computed(() => {
        const style = this.style_reference();
        return style ? [style] : [];
    });
    public readonly claim_pending = signal(false);
    /** only a pick that has loaded, so the person has seen what is saved */
    public readonly can_save = computed(
        () => !!this.selected_object_url() && !this.saving(),
    );

    public readonly brand = this._image_gen.brand_kit;

    /** the same rule as the branding page, as this writes the same kit */
    public readonly can_set_logo = computed(() =>
        canEditBrandKit(this._context),
    );
    public readonly branding_editing = computed(() =>
        brandEditingOn(this._context),
    );

    public readonly group_id = computed(
        () => this._context.selected_group()?.group.id || undefined,
    );

    /** there is nothing to switch off if the organisation has set nothing */
    public readonly has_branding = computed(() => {
        const brand = this.brand();
        if (!brand) return false;
        const font =
            typeof brand.font === 'string' ? brand.font : brand.font?.family;
        return !!(
            brand.organisation ||
            font ||
            Object.keys(brand.palette || {}).length
        );
    });

    /**
     * What the poster is actually dressed in.
     */
    public readonly applied_brand = computed(() =>
        this.use_branding() ? this.brand() : null,
    );

    public readonly is_edit = computed(() => !!this._data.source_upload_id);
    /** the brief and its options, before anything is made or on request */
    public readonly show_compose = computed(
        () => !this.rail().length || this.composing(),
    );
    public readonly can_refine = computed(
        () =>
            this._context.hasFeature('ai-editing') &&
            this._image_gen.can_edit(),
    );

    /** the image being changed, so the brief is not written blind */
    public readonly source_url = computed(() => {
        const id = this._data.source_upload_id;
        return id ? `/api/engine/v2/uploads/${encodeURIComponent(id)}/url` : '';
    });
    public readonly has_logo = computed(
        () => !!this._image_gen.capabilities()?.logo_layer,
    );

    public readonly aspect_options = this._aspect_options;
    public readonly candidate_options = computed(() => {
        const max = this._max_candidates();
        return Array.from({ length: max }, (_, index) => index + 1);
    });
    public readonly max_references = computed(
        () => this._image_gen.default_model()?.max_references ?? 8,
    );
    public readonly include_max = computed(
        () => this.max_references() - (this.style_reference() ? 1 : 0),
    );
    public readonly style_max = computed(() =>
        Math.min(1, this.max_references() - this.include_references().length),
    );

    public readonly job = computed<ImageGenJob | undefined>(
        () => this._image_gen.jobs()[this.current_job_id()],
    );

    /**
     * Every candidate of every job in this session, oldest first: the first
     * generation's options and each round of changes since, whichever version
     * each change was made from. Jobs only ever append, so a version keeps
     * its number.
     */
    public readonly rail = computed<Candidate[]>(() => {
        const jobs = this._image_gen.jobs();
        const rail: Candidate[] = [];
        let version = 0;
        for (const id of this.job_ids()) {
            const images = jobs[id]?.images || [];
            if (!images.some((image) => image?.upload_id)) continue;
            version++;
            images.forEach((image, index) => {
                if (!image?.upload_id) return;
                rail.push({
                    job_id: id,
                    index,
                    upload_id: image.upload_id,
                    url:
                        image.url ||
                        `/api/engine/v2/uploads/${encodeURIComponent(image.upload_id)}/url`,
                    width: image.width,
                    height: image.height,
                    version,
                });
            });
        }
        return rail;
    });

    public readonly progress_note = computed(() => {
        const job = this.job();
        if (!job) return '';
        return `${job.images_produced} / ${job.candidates}`;
    });

    public readonly quota_note = computed(() => {
        const quota = this._image_gen.capabilities()?.quota;
        const left = quota?.user_remaining_today;
        if (left === null || left === undefined) return '';
        return i18n('SIGNAGE_MANAGER.IMAGE_GEN_QUOTA_LEFT', {
            count: `${left}`,
        });
    });

    /**
     * Which engine is behind the button.
     */
    public readonly engine_note = computed(() => {
        const provider = this._image_gen.default_provider();
        if (!provider) return '';
        return i18n('SIGNAGE_MANAGER.IMAGE_GEN_ENGINE', {
            model:
                this._image_gen.default_model()?.name ||
                provider.default_model ||
                '',
            provider: provider.name,
        });
    });

    public readonly heading = computed(() =>
        this.is_edit()
            ? 'SIGNAGE_MANAGER.IMAGE_GEN_EDIT_IMAGE'
            : 'SIGNAGE_MANAGER.IMAGE_GEN_CREATE_IMAGE',
    );

    /** whether anything is drawn over the artwork, and so has to be flattened */
    public readonly has_overlay = computed(() => {
        const state = this.layer_state();
        if (state.blocks.some((block) => block.text.trim())) return true;
        return state.logo && !!(this.logo_on_light() || this.logo_on_dark());
    });

    public versionLabel(candidate: Candidate) {
        return i18n('SIGNAGE_MANAGER.IMAGE_GEN_VERSION_LABEL', {
            version: `${candidate.version}`,
            option: `${candidate.index + 1}`,
        });
    }

    public async start() {
        const brief = this.brief().trim();
        if (!brief || this.state() === 'generating') return;
        const token = ++this._job_token;
        this.state.set('generating');
        try {
            const common = {
                ...this._requestBase(),
                prompt: this.withReferenceRoles(brief),
            };
            let job: ImageGenJob;
            if (this._data.source_upload_id) {
                const request: ImageGenEditRequest = {
                    ...common,
                    source_upload_id: this._data.source_upload_id,
                    source_item_id: this._data.source_item_id,
                };
                job = await this._image_gen.edit({
                    ...request,
                    idempotency_key: this._intentKey('edit', request),
                });
            } else {
                const request: ImageGenGenerateRequest = {
                    ...common,
                    aspect_ratio: this.aspect(),
                };
                job = await this._image_gen.generate({
                    ...request,
                    idempotency_key: this._intentKey('generate', request),
                });
            }
            this._follow(job, token);
        } catch (error) {
            // closed while waiting, and no job will read the images now
            if (this._closed) return this._removeReferences();
            if (token !== this._job_token) return;
            this.state.set(this.rail().length ? 'review' : 'compose');
            notifyError(
                actionError(
                    error,
                    i18n('SIGNAGE_MANAGER.IMAGE_GEN_JOB_FAILED'),
                ),
            );
        }
    }

    public async refine() {
        const instruction = this.refinement().trim();
        const source = this.selected();
        if (!instruction || !source || this.state() === 'generating') return;
        this.refinement.set('');
        const token = ++this._job_token;
        this.state.set('generating');
        try {
            const request: ImageGenEditRequest = {
                ...this._requestBase(),
                prompt: this.withReferenceRoles(instruction),
                candidates: 1,
                source_upload_id: source.upload_id,
                parent_job_id: source.job_id,
            };
            const job = await this._image_gen.edit({
                ...request,
                idempotency_key: this._intentKey('edit', request),
            });
            this._follow(job, token);
        } catch (error) {
            // closed while waiting, and no job will read the images now
            if (this._closed) return this._removeReferences();
            if (token !== this._job_token) return;
            this.state.set('review');
            notifyError(
                actionError(
                    error,
                    i18n('SIGNAGE_MANAGER.IMAGE_GEN_JOB_FAILED'),
                ),
            );
        }
    }

    private _select_token = 0;

    /** the pick could not be read, so it is let go rather than saved unseen */
    public onArtworkFailed() {
        this.selected.set(null);
        this.selected_object_url.set('');
        notifyError(i18n('SIGNAGE_MANAGER.IMAGE_GEN_IMAGE_UNREADABLE'));
    }

    public async select(candidate: Candidate) {
        if (this.claim_pending() || this.saving()) return;
        if (this.state() === 'generating') return;
        const token = ++this._select_token;
        this.selected.set(candidate);
        this.selected_object_url.set('');
        const url = await this._image_gen
            .loadImage(candidate.url)
            .catch(() => '');
        if (token !== this._select_token) return;
        if (!url) return this.onArtworkFailed();
        this.selected_object_url.set(url);
    }

    /**
     * Stop the running job. The old loop stops at once, so a job that still
     * finishes later cannot take over the screen. If the server refuses, the
     * job is still running and the modal keeps following it. A request still
     * on its way gives up its key, so asking again makes a new job rather than
     * getting back the one being cancelled.
     */
    public async cancel() {
        this._dropIntent();
        this._stopAwaiting();
        const id = this.current_job_id();
        const job = this._image_gen.jobs()[id];
        if (job && !isFinal(job) && !(await this._image_gen.cancel(id))) {
            if (this._closed) return;
            notifyError(i18n('SIGNAGE_MANAGER.IMAGE_GEN_CANCEL_FAILED'));
            this._awaitJob(id);
            return;
        }
        this.state.set(this.rail().length ? 'review' : 'compose');
    }

    /** the attached image ids, in the order they are sent */
    public readonly reference_ids = computed(() =>
        this.references().map((item) => item.id),
    );

    /**
     * Say what each attached image is for, after the person's own words. The
     * numbering matches the order the images are sent: the pictures to
     * include first, the style reference last.
     */
    public withReferenceRoles(text: string): string {
        const includes = this.include_references().length;
        const style = this.style_reference();
        const lines: string[] = [];
        if (includes === 1) {
            lines.push('Include image 1 in the artwork.');
        } else if (includes > 1) {
            lines.push(
                `Include images 1 to ${includes} in the artwork, arranged so the result is aesthetically pleasing and practical.`,
            );
        }
        if (style) {
            lines.push(
                `Use image ${includes + 1} as a style guide for how the artwork should look: match its overall look and feel, but do not include image ${includes + 1} or anything from it in the artwork.`,
            );
        }
        if (lines.length) {
            lines.push(
                'Where the description above says more about any of these images, follow the description.',
            );
        }
        return [text, lines.join(' ')].filter(Boolean).join('\n\n');
    }

    /**
     * Attach pictures for this request.
     */
    public async addReferences(files: File[], kind: 'include' | 'style') {
        if (!files.length) return;
        this.uploading_references.set(true);
        try {
            for (const file of kind === 'style' ? files.slice(0, 1) : files) {
                const id = await this._image_gen.uploadReference(file);
                // closed while this uploaded: nothing will send or clear it
                if (this._closed) {
                    this._image_gen.removeReference(id);
                    return;
                }
                const item = {
                    id,
                    name: file.name,
                    url: URL.createObjectURL(file),
                };
                if (kind === 'style') {
                    const previous = this.style_reference();
                    if (previous) {
                        URL.revokeObjectURL(previous.url);
                        this._image_gen.removeReference(previous.id);
                    }
                    this.style_reference.set(item);
                } else {
                    this.include_references.update((list) => [...list, item]);
                }
            }
        } catch (error) {
            notifyError(
                actionError(
                    error,
                    i18n('SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_UPLOAD_FAILED'),
                ),
            );
        } finally {
            this.uploading_references.set(false);
        }
    }

    public removeReference(id: string) {
        const item = this.references().find((entry) => entry.id === id);
        if (item) URL.revokeObjectURL(item.url);
        if (this.style_reference()?.id === id) this.style_reference.set(null);
        this.include_references.update((list) =>
            list.filter((entry) => entry.id !== id),
        );
        this._image_gen.removeReference(id);
    }

    private _closed = false;

    public ngOnDestroy() {
        this._closed = true;
        this._dropIntent();
        this._stopAwaiting();

        for (const id of this.job_ids()) {
            this._image_gen.setJobOnScreen(id, false);
        }
        for (const item of this.references()) URL.revokeObjectURL(item.url);
        if (this.state() !== 'generating') return this._removeReferences();
        // nothing can show the result once this closes, so stop the job
        // rather than spend the quota on images no one can reach. A request
        // the server has not answered yet is dealt with by _follow, or by
        // start and refine if it fails.
        const job = this._image_gen.jobs()[this.current_job_id()];
        if (job && !isFinal(job)) {
            this._image_gen.abandon(job.id, this.reference_ids());
        }
    }

    /** nothing sends the attached images again, so their uploads can go */
    private _removeReferences() {
        this.reference_ids().forEach((id) =>
            this._image_gen.removeReference(id),
        );
    }

    public async uploadLogo(file: File) {
        if (!this.can_set_logo()) return;
        this.uploading_logo.set(true);
        try {
            await this._image_gen.uploadBrandLogo(file);
            await this._loadBrandLogos();
            this.layer_state.set({ ...this.layer_state(), logo: true });
            notifySuccess(i18n('SIGNAGE_MANAGER.IMAGE_GEN_LOGO_SAVED'));
        } catch (error) {
            notifyError(
                actionError(
                    error,
                    i18n('SIGNAGE_MANAGER.IMAGE_GEN_LOGO_SAVE_FAILED'),
                ),
            );
        } finally {
            this.uploading_logo.set(false);
        }
    }

    public async save() {
        const candidate = this.selected();
        if (!candidate || !this.can_save()) return;

        // set before the image is taken, so a second click cannot start a
        // second save while the canvas is encoded
        this.saving.set(true);
        this._dialog_ref.disableClose = true;
        try {
            // A retry reuses the row the last attempt made, so needs no image.
            const name = this._name();
            const overlay = !this._pending && this.has_overlay();
            const blob = overlay ? await this._layer()?.toBlob() : undefined;
            if (overlay && !blob) {
                notifyError(i18n('SIGNAGE_MANAGER.IMAGE_GEN_NO_IMAGE'));
                return;
            }

            let pending = this._pending;
            if (!pending) {
                const media = blob
                    ? await this._media_service.addMedia(
                          new File([blob], `${name}.jpg`, {
                              type: COMPOSITE_TYPE[0],
                          }),
                          new SignageMedia({ name, tags: this._tags() }),
                      )
                    : await this._media_service.addMediaFromUpload(
                          candidate.upload_id,
                          {
                              name,
                              tags: this._tags(),
                              orientation: orientationOf(
                                  candidate.width,
                                  candidate.height,
                                  this.is_edit()
                                      ? this._data.aspect_ratio
                                      : this.aspect(),
                              ),
                          },
                      );
                if (!media?.id) {
                    this._dialog_ref.close(media);
                    return;
                }
                // a composited file is a fresh upload with nothing to claim
                pending = { media, claimed: !!blob };
                this._pending = pending;
                this.claim_pending.set(true);
            }
            const media = pending.media;

            if (!pending.claimed) {
                try {
                    await this._image_gen.claim(
                        candidate.job_id,
                        candidate.upload_id,
                        media.id,
                    );
                } catch (error) {
                    // an unclaimed upload is swept up, which would leave the
                    // row pointing at nothing
                    await this._media_service
                        .discardCreatedMedia(media.id)
                        .then(() => (this._pending = undefined))
                        .catch(() => null);
                    throw error;
                }
                pending.claimed = true;
            }

            if (this._data.playlist_id) {
                await this._playlist_service.addMediaToPlaylist(
                    this._data.playlist_id,
                    media.id,
                    media,
                );
            }
            this._pending = undefined;

            // the list paints as soon as the dialog closes; give the
            // thumbnail a moment to become readable so the tile is not
            // briefly empty
            if (media.thumbnail_id) {
                await this._image_gen
                    .loadImage(
                        `/api/engine/v2/uploads/${media.thumbnail_id}/url`,
                    )
                    .catch(() => '');
            }
            this._dialog_ref.close(media);
        } catch (error) {
            notifyError(
                actionError(
                    error,
                    i18n('SIGNAGE_MANAGER.IMAGE_GEN_SAVE_FAILED'),
                ),
            );
        } finally {
            this.claim_pending.set(!!this._pending);
            this.saving.set(false);
            this._dialog_ref.disableClose = false;
        }
    }

    /**
     * The row an earlier Save made but could not finish, so Save again reuses
     * it rather than making a second. While it is set the pick is locked.
     */
    private _pending: { media: SignageMedia; claimed: boolean } | undefined;
    /** bumped to stop whichever job the modal was following */
    private _job_token = 0;
    private _logo_defaulted = false;
    private _logos_read = false;
    /** the key of a request the server has not answered yet */
    private _inflight_key = '';
    /** the job the modal waits on, empty once it ends or is let go */
    private readonly _awaiting = signal('');

    constructor() {
        // the service polls the job, and marks it failed if it runs too long
        effect(() => {
            const id = this._awaiting();
            const job = id ? this._image_gen.jobs()[id] : undefined;
            if (job && isFinal(job)) untracked(() => this._finish(job));
        });
    }

    /** follow a job the server accepted, unless it was cancelled on the way */
    private _follow(job: ImageGenJob, token: number) {
        if (this._closed || token !== this._job_token) {
            this._image_gen.abandon(
                job.id,
                this._closed ? this.reference_ids() : [],
            );
            return;
        }
        // answered, and the service has already retired the key
        this._inflight_key = '';
        this.job_ids.update((ids) => [...ids, job.id]);
        // the modal shows the result, so the service need not announce it
        this._image_gen.setJobOnScreen(job.id, true);
        this._awaitJob(job.id);
    }

    private _stopAwaiting() {
        this._job_token++;
        this._awaiting.set('');
    }

    /** wait for the job to reach a final state, then move on */
    private _awaitJob(id: string) {
        this._stopAwaiting();
        this._awaiting.set(id);
    }

    private _finish(job: ImageGenJob) {
        this._awaiting.set('');
        if (this._closed) return;
        const newest =
            job.state === 'done'
                ? this.rail().find((candidate) => candidate.job_id === job.id)
                : undefined;
        if (!newest) {
            // the service tells of a failure, but a job that ended with
            // nothing to show would otherwise end in silence
            if (job.state === 'done') {
                notifyError(i18n('SIGNAGE_MANAGER.IMAGE_GEN_NO_IMAGES'));
            }
            this.state.set(this.rail().length ? 'review' : 'compose');
            return;
        }
        // set first, as a pick is refused while a job runs
        this.state.set('review');
        this.composing.set(false);
        this.select(newest);
        if (!this._logos_read) this._loadBrandLogos();
    }

    /**
     * Both saved logos, so the toggle in the sidebar has something to show.
     * Read once, when the first result lands, and again after an upload.
     */
    private async _loadBrandLogos() {
        this._logos_read = true;
        const brand = this.brand();
        const [on_light, on_dark] = await Promise.all([
            this._readUpload(brand?.logo_upload_id),
            this._readUpload(brand?.logo_dark_upload_id),
        ]);
        this.logo_on_light.set(on_light);
        this.logo_on_dark.set(on_dark);
        // only the first time: after that the toggle is the person's choice
        if (this._logo_defaulted || !(on_light || on_dark)) return;
        this._logo_defaulted = true;
        if (this.include_logo()) {
            this.layer_state.set({ ...this.layer_state(), logo: true });
        }
    }

    private _readUpload(id?: string) {
        if (!id) return Promise.resolve('');
        return this._image_gen
            .loadImage(`/api/engine/v2/uploads/${encodeURIComponent(id)}/url`)
            .catch(() => '');
    }

    private _name() {
        // an edit is a new version of the item, so it keeps the item's name
        const source = this.is_edit() ? this._data.source_name?.trim() : '';
        if (source) return source;
        const words = this.brief().trim().split(/\s+/).slice(0, 6).join(' ');
        return words || i18n('SIGNAGE_MANAGER.IMAGE_GEN_DEFAULT_NAME');
    }

    /** what every request carries, whichever kind it is */
    private _requestBase() {
        return {
            candidates: this.candidates(),
            // the server would leave a corner empty for a logo it cannot draw
            include_logo: this.include_logo() && this.has_logo(),
            add_text_with_layer: this.add_text_with_layer(),
            use_branding: this.use_branding(),
            group_id: this.group_id(),
            references: this.reference_ids(),
        };
    }

    /** the request's key, kept until the server answers or it is let go */
    private _intentKey(kind: 'generate' | 'edit', request: object) {
        this._inflight_key = this._image_gen.intentKey(kind, request);
        return this._inflight_key;
    }

    private _dropIntent() {
        if (!this._inflight_key) return;
        this._image_gen.forgetIntent(this._inflight_key);
        this._inflight_key = '';
    }

    /**
     * Tags are what the media library builds its folders from, so only a label
     * a person would want to browse by belongs here.
     */
    private _tags() {
        return ['ai-generated'];
    }
}
