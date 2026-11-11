import {
    Component,
    computed,
    DestroyRef,
    inject,
    OnInit,
    signal,
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
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n, notifyError } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    normalizeRotation,
    PDF_TRANSPARENT_BACKGROUND,
    pdfBaseName,
    PdfDocumentHandle,
    PdfImageFormat,
    PdfPageFit,
    pdfPageImageSize,
    pdfPageName,
    PdfPageRenderOptions,
    PdfResolution,
    releaseCanvas,
    renderPdfPageImage,
} from '../media/pdf-import.util';
import type { BulkMediaUploadItem } from './bulk-media-upload.util';

export interface PdfImportModalData {
    file_name: string;
    /** Has at most `MAX_PDF_PAGES` pages, as the modal keeps a preview of each */
    document: PdfDocumentHandle;
    /** Whether this browser can write WebP images */
    webp_supported: boolean;
    /** Place of this PDF when several are imported together */
    position?: { current: number; total: number };
    /** Whether the file is a PowerPoint file, which shows a warning that
     * slides can look different from PowerPoint */
    pptx_warning?: boolean;
}

/** The rendered pages to upload. Undefined when the import is cancelled. */
export type PdfImportModalResult = BulkMediaUploadItem[] | undefined;

export type PdfBackgroundMode = 'white' | 'black' | 'custom' | 'transparent';

interface PdfImportPage {
    number: number;
    selected: boolean;
    /** Turn on top of the page's own rotation, in degrees */
    rotation: number;
    /** Object URL of a PNG of the page at `preview_rotation`, on
     * transparency. A blob rather than a data URL string, which would sit
     * in the script heap. */
    preview: string;
    /** Rotation the preview was last rendered at, or tried at */
    preview_rotation: number | null;
    preview_failed: boolean;
}

/** Free the memory behind a preview's object URL */
function revokePreview(preview: string) {
    if (preview) URL.revokeObjectURL(preview);
}

/** Bounds of a page preview, in pixels. Twice the display size for HiDPI. */
const PREVIEW_BOUNDS = { width: 320, height: 320 };

const BACKGROUND_COLOURS: Record<
    Exclude<PdfBackgroundMode, 'custom'>,
    string
> = {
    white: '#ffffff',
    black: '#000000',
    transparent: PDF_TRANSPARENT_BACKGROUND,
};

@Component({
    selector: 'pdf-import-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex w-[calc(100%-1rem)] items-center rounded-sm border-none p-2"
        >
            <div class="min-w-0 flex-1 px-2">
                <h2 id="pdf-import-title" class="text-xl font-medium">
                    {{ 'SIGNAGE_MANAGER.PDF_IMPORT_TITLE' | translate }}
                </h2>
                <p class="text-base-content/70 truncate text-sm">
                    {{ file_name }}
                    @if (position) {
                        ·
                        {{
                            'SIGNAGE_MANAGER.PDF_IMPORT_QUEUE'
                                | translate
                                    : {
                                          current: position.current,
                                          total: position.total,
                                      }
                        }}
                    }
                </p>
            </div>
            @if (!importing()) {
                <button
                    icon
                    type="button"
                    matRipple
                    mat-dialog-close
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.PDF_IMPORT_CLOSE_ARIA' | translate
                    "
                >
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (pptx_warning) {
            <div
                role="note"
                class="pptx-warning bg-warning text-warning-content mx-2 mb-2 rounded-xl py-2 px-4 text-xs border-b-2 border-warning-focus"
            >
                <p>{{ 'SIGNAGE_MANAGER.PPTX_IMPORT_WARNING' | translate }}</p>
                <ul class="list-disc pt-1 pl-5">
                    <li>
                        {{
                            'SIGNAGE_MANAGER.PPTX_IMPORT_EXPORT_WINDOWS_IMAGES'
                                | translate
                        }}
                    </li>
                    <li>
                        {{
                            'SIGNAGE_MANAGER.PPTX_IMPORT_EXPORT_WINDOWS_VIDEO'
                                | translate
                        }}
                    </li>
                    <li>
                        {{
                            'SIGNAGE_MANAGER.PPTX_IMPORT_EXPORT_MAC' | translate
                        }}
                    </li>
                </ul>
            </div>
        }
        <div class="import-layout flex max-w-full gap-4 px-2 pb-2">
            <section
                class="import-options flex shrink-0 flex-col border border-b-3 border-base-300 rounded-xl p-2"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.PDF_IMPORT_OPTIONS' | translate
                "
            >
                <label for="pdf-import-name">
                    {{ 'SIGNAGE_MANAGER.PDF_IMPORT_NAME' | translate }}
                </label>
                <!-- The example name can wrap, so the hint takes the height
                     it needs rather than overlapping the next field -->
                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <input
                        matInput
                        id="pdf-import-name"
                        name="name"
                        [(ngModel)]="name"
                        [disabled]="importing()"
                        aria-describedby="pdf-import-name-hint"
                    />
                </mat-form-field>
                <div class="text-[0.625rem] p-2">{{
                    'SIGNAGE_MANAGER.PDF_IMPORT_NAME_HINT'
                        | translate: { example: example_name() }
                }}</div>

                <label id="pdf-import-fit-label" for="pdf-import-fit">
                    {{ 'SIGNAGE_MANAGER.PDF_IMPORT_FIT' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        id="pdf-import-fit"
                        name="fit"
                        aria-labelledby="pdf-import-fit-label"
                        [(ngModel)]="fit"
                        [disabled]="importing()"
                    >
                        <mat-option value="page">
                            {{
                                'SIGNAGE_MANAGER.PDF_IMPORT_FIT_PAGE'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="landscape">
                            {{
                                'SIGNAGE_MANAGER.PDF_IMPORT_FIT_LANDSCAPE'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="portrait">
                            {{
                                'SIGNAGE_MANAGER.PDF_IMPORT_FIT_PORTRAIT'
                                    | translate
                            }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>

                <label
                    id="pdf-import-background-label"
                    for="pdf-import-background"
                    class="mt-2"
                >
                    {{ 'SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND' | translate }}
                </label>
                <div class="flex items-center gap-2">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript min-w-0 flex-1"
                    >
                        <mat-select
                            id="pdf-import-background"
                            name="background"
                            aria-labelledby="pdf-import-background-label"
                            [(ngModel)]="background_mode"
                            [disabled]="importing()"
                        >
                            <mat-option value="white">
                                {{
                                    'SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND_WHITE'
                                        | translate
                                }}
                            </mat-option>
                            <mat-option value="black">
                                {{
                                    'SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND_BLACK'
                                        | translate
                                }}
                            </mat-option>
                            <mat-option value="custom">
                                {{
                                    'SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND_CUSTOM'
                                        | translate
                                }}
                            </mat-option>
                            <mat-option value="transparent">
                                {{
                                    'SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND_TRANSPARENT'
                                        | translate
                                }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    @if (background_mode() === 'custom') {
                        <input
                            type="color"
                            name="custom_colour"
                            class="border-base-300 h-10 w-12 shrink-0 cursor-pointer rounded-sm border"
                            [(ngModel)]="custom_colour"
                            [disabled]="importing()"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.PDF_IMPORT_BACKGROUND_COLOUR'
                                    | translate
                            "
                        />
                    }
                </div>

                <label
                    id="pdf-import-format-label"
                    for="pdf-import-format"
                    class="mt-2"
                >
                    {{ 'SIGNAGE_MANAGER.PDF_IMPORT_FORMAT' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        id="pdf-import-format"
                        name="format"
                        aria-labelledby="pdf-import-format-label"
                        [(ngModel)]="format"
                        [disabled]="importing()"
                    >
                        <mat-option value="webp" [disabled]="!webp_supported">
                            {{
                                (webp_supported
                                    ? 'SIGNAGE_MANAGER.PDF_IMPORT_FORMAT_WEBP'
                                    : 'SIGNAGE_MANAGER.PDF_IMPORT_FORMAT_WEBP_UNSUPPORTED'
                                ) | translate
                            }}
                        </mat-option>
                        <mat-option value="png">
                            {{
                                'SIGNAGE_MANAGER.PDF_IMPORT_FORMAT_PNG'
                                    | translate
                            }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>

                <label
                    id="pdf-import-resolution-label"
                    for="pdf-import-resolution"
                    class="mt-2"
                >
                    {{ 'SIGNAGE_MANAGER.PDF_IMPORT_RESOLUTION' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        id="pdf-import-resolution"
                        name="resolution"
                        aria-labelledby="pdf-import-resolution-label"
                        [(ngModel)]="resolution"
                        [disabled]="importing()"
                    >
                        <mat-option value="4k">
                            {{
                                'SIGNAGE_MANAGER.PDF_IMPORT_RESOLUTION_4K'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="hd">
                            {{
                                'SIGNAGE_MANAGER.PDF_IMPORT_RESOLUTION_HD'
                                    | translate
                            }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </section>

            <section class="flex min-w-0 flex-1 flex-col overflow-hidden">
                <div class="flex flex-wrap items-center gap-1 pb-2">
                    <button
                        btn
                        matRipple
                        type="button"
                        class="inverse"
                        [disabled]="importing()"
                        (click)="selectAll(true)"
                    >
                        {{
                            'SIGNAGE_MANAGER.PDF_IMPORT_SELECT_ALL' | translate
                        }}
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="inverse"
                        [disabled]="importing()"
                        (click)="selectAll(false)"
                    >
                        {{
                            'SIGNAGE_MANAGER.PDF_IMPORT_SELECT_NONE' | translate
                        }}
                    </button>
                    <div class="flex-1"></div>
                    <button
                        icon default
                        matRipple
                        type="button"
                        [disabled]="importing()"
                        (click)="rotateAll(-90)"
                        [matTooltip]="
                            'SIGNAGE_MANAGER.PDF_IMPORT_ROTATE_ALL_LEFT'
                                | translate
                        "
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.PDF_IMPORT_ROTATE_ALL_LEFT'
                                | translate
                        "
                    >
                        <icon>rotate_left</icon>
                    </button>
                    <button
                        icon default
                        matRipple
                        type="button"
                        [disabled]="importing()"
                        (click)="rotateAll(90)"
                        [matTooltip]="
                            'SIGNAGE_MANAGER.PDF_IMPORT_ROTATE_ALL_RIGHT'
                                | translate
                        "
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.PDF_IMPORT_ROTATE_ALL_RIGHT'
                                | translate
                        "
                    >
                        <icon>rotate_right</icon>
                    </button>
                </div>
                <p class="text-base-content/70 pb-2 text-xs">
                    {{ 'SIGNAGE_MANAGER.PDF_IMPORT_SELECT_HINT' | translate }}
                </p>
                <ul
                    class="page-grid grid flex-1 gap-3 overflow-auto p-1"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.PDF_IMPORT_PAGES' | translate
                    "
                >
                    @for (page of pages(); track page.number) {
                        <li class="relative">
                            <button
                                type="button"
                                matRipple
                                class="page-toggle bg-base-200 flex w-full flex-col items-center gap-1 rounded-sm p-2 text-left"
                                [class.selected]="page.selected"
                                [attr.aria-pressed]="page.selected"
                                [disabled]="importing()"
                                (click)="togglePage(page, $event)"
                            >
                                <div
                                    class="flex h-32 w-full items-center justify-center overflow-hidden"
                                >
                                    @if (page.preview && fit() === 'page') {
                                        <img
                                            class="block max-h-full max-w-full object-contain"
                                            [class.checkerboard]="
                                                is_transparent()
                                            "
                                            [style.background-color]="
                                                is_transparent()
                                                    ? null
                                                    : background()
                                            "
                                            [src]="page.preview"
                                            alt=""
                                        />
                                    } @else if (page.preview) {
                                        <div
                                            class="max-h-full max-w-full overflow-hidden"
                                            [class.checkerboard]="
                                                is_transparent()
                                            "
                                            [class.fit-landscape]="
                                                fit() === 'landscape'
                                            "
                                            [class.fit-portrait]="
                                                fit() === 'portrait'
                                            "
                                            [style.background-color]="
                                                is_transparent()
                                                    ? null
                                                    : background()
                                            "
                                        >
                                            <img
                                                class="block h-full w-full object-contain"
                                                [src]="page.preview"
                                                alt=""
                                            />
                                        </div>
                                    } @else if (page.preview_failed) {
                                        <icon
                                            class="text-base-content/50 text-4xl"
                                        >
                                            broken_image
                                        </icon>
                                    } @else {
                                        <mat-spinner diameter="24" />
                                    }
                                </div>
                                <div
                                    class="flex w-full items-center gap-1 text-sm"
                                >
                                    <icon
                                        class="shrink-0 text-lg"
                                        [class.selected-icon]="page.selected"
                                    >
                                        {{
                                            page.selected
                                                ? 'check_box'
                                                : 'check_box_outline_blank'
                                        }}
                                    </icon>
                                    <span class="truncate">
                                        {{
                                            'SIGNAGE_MANAGER.PDF_IMPORT_PAGE'
                                                | translate
                                                    : { page: page.number }
                                        }}
                                    </span>
                                </div>
                            </button>
                            <button
                                icon
                                matRipple
                                type="button"
                                class="bg-base-100 absolute top-3 right-3 shadow"
                                [disabled]="importing()"
                                (click)="rotatePage(page, 90)"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.PDF_IMPORT_ROTATE_PAGE'
                                        | translate: { page: page.number }
                                "
                            >
                                <icon>rotate_right</icon>
                            </button>
                        </li>
                    }
                </ul>
            </section>
        </div>
        <footer
            class="border-base-200 flex flex-wrap items-center justify-end gap-2 border-t px-4 py-2"
        >
            <div
                class="text-base-content/70 min-w-0 flex-1 text-sm"
                role="status"
            >
                {{
                    'SIGNAGE_MANAGER.PDF_IMPORT_SELECTED'
                        | translate
                            : {
                                  count: selected_count(),
                                  total: pages().length,
                              }
                }}
            </div>
            <button
                btn
                matRipple
                type="button"
                class="inverse w-32"
                mat-dialog-close
                [disabled]="importing()"
            >
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                matRipple
                type="button"
                class="min-w-32"
                [disabled]="importing() || !selected_count() || !base_name()"
                (click)="importPages()"
            >
                {{
                    'SIGNAGE_MANAGER.PDF_IMPORT_START'
                        | translate: { count: selected_count() }
                }}
            </button>
        </footer>
    `,
    styles: [
        `
            /* One-off sizes live here rather than in Tailwind classes, which
               would add them to the stylesheet every page loads */
            .import-layout {
                overflow: hidden;
            }
            .import-options {
                width: 16rem;
                overflow: auto;
            }
            /* Names without spaces still wrap within the sidebar */
            .name-hint {
                overflow-wrap: anywhere;
            }
            @media (min-width: 768px) {
                .import-layout {
                    width: 64rem;
                    max-height: 70vh;
                }
            }
            @media (max-width: 767.98px) {
                .import-layout {
                    flex: 1;
                    flex-direction: column;
                    overflow: auto;
                }
                .import-options {
                    width: 100%;
                    overflow: visible;
                }
            }
            .page-toggle {
                border: 2px solid transparent;
                opacity: 0.5;
            }
            .page-toggle.selected {
                border-color: var(--primary);
                opacity: 1;
            }
            .selected-icon {
                color: var(--primary);
            }
            .page-grid {
                grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
            }
            .checkerboard {
                background-color: #fff;
                background-image: conic-gradient(
                    #d4d4d4 25%,
                    transparent 0 50%,
                    #d4d4d4 0 75%,
                    transparent 0
                );
                background-size: 12px 12px;
            }
            .fit-landscape {
                aspect-ratio: 16 / 9;
                width: 100%;
            }
            .fit-portrait {
                aspect-ratio: 9 / 16;
                height: 100%;
            }
            .page-toggle:focus-visible {
                outline: 2px solid var(--color-primary, currentColor);
                outline-offset: 2px;
            }
        `,
    ],
    imports: [
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSelectModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class PdfImportModalComponent implements OnInit {
    private readonly _data = inject<PdfImportModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref =
        inject<MatDialogRef<PdfImportModalComponent, PdfImportModalResult>>(
            MatDialogRef,
        );

    public readonly file_name = this._data.file_name;
    public readonly position = this._data.position;
    public readonly webp_supported = this._data.webp_supported;
    public readonly pptx_warning = !!this._data.pptx_warning;

    /** Tag of every page, and the start of each page name */
    public readonly name = signal(pdfBaseName(this._data.file_name));
    public readonly fit = signal<PdfPageFit>('page');
    public readonly background_mode = signal<PdfBackgroundMode>('white');
    public readonly custom_colour = signal('#ffffff');
    public readonly format = signal<PdfImageFormat>(
        this._data.webp_supported ? 'webp' : 'png',
    );
    public readonly resolution = signal<PdfResolution>('4k');

    public readonly pages = signal<PdfImportPage[]>(
        Array.from({ length: this._data.document.page_count }, (_, index) => ({
            number: index + 1,
            selected: true,
            rotation: 0,
            preview: '',
            preview_rotation: null,
            preview_failed: false,
        })),
    );
    /** Set while the page sizes of the selected pages are read */
    public readonly importing = signal(false);

    public readonly base_name = computed(() => this.name().trim());
    public readonly example_name = computed(() =>
        pdfPageName(this.base_name() || pdfBaseName(''), 1),
    );
    public readonly background = computed(() => {
        const mode = this.background_mode();
        return mode === 'custom'
            ? this.custom_colour()
            : BACKGROUND_COLOURS[mode];
    });
    public readonly is_transparent = computed(
        () => this.background() === PDF_TRANSPARENT_BACKGROUND,
    );
    public readonly selected_count = computed(
        () => this.pages().filter((page) => page.selected).length,
    );

    private _renderPage = renderPdfPageImage;
    /** Page clicked last, for shift-click range selection */
    private _anchor_page: number | null = null;
    /** Stops preview rendering when the modal closes */
    private readonly _previews_abort = new AbortController();
    private _previews_running = false;

    constructor() {
        inject(DestroyRef).onDestroy(() => {
            this._previews_abort.abort();
            for (const page of this.pages()) revokePreview(page.preview);
        });
    }

    public ngOnInit() {
        void this.renderPreviews();
    }

    /**
     * Include or exclude a page. Shift-click sets every page between this one
     * and the page clicked before it to the same state.
     */
    public togglePage(page: PdfImportPage, event?: MouseEvent) {
        const selected = !page.selected;
        const anchor = this._anchor_page;
        if (event?.shiftKey && anchor !== null) {
            const [from, to] = [anchor, page.number].sort((a, b) => a - b);
            this._updatePages((item) =>
                item.number >= from && item.number <= to
                    ? { ...item, selected }
                    : item,
            );
        } else {
            this._updatePages((item) =>
                item.number === page.number ? { ...item, selected } : item,
            );
        }
        this._anchor_page = page.number;
    }

    public selectAll(selected: boolean) {
        this._updatePages((page) => ({ ...page, selected }));
        this._anchor_page = null;
    }

    public rotatePage(page: PdfImportPage, turn: number) {
        this._updatePages((item) =>
            item.number === page.number
                ? { ...item, rotation: normalizeRotation(item.rotation + turn) }
                : item,
        );
        void this.renderPreviews();
    }

    public rotateAll(turn: number) {
        this._updatePages((page) => ({
            ...page,
            rotation: normalizeRotation(page.rotation + turn),
        }));
        void this.renderPreviews();
    }

    /**
     * Render a preview for each page that has none at its current rotation,
     * one at a time and in page order. A call while previews render only
     * makes the running loop look again, so a rotation is picked up.
     */
    public async renderPreviews() {
        if (this._previews_running) return;
        this._previews_running = true;
        const signal = this._previews_abort.signal;
        try {
            while (!signal.aborted && !this.importing()) {
                const page = this.pages().find(
                    (item) => item.preview_rotation !== item.rotation,
                );
                if (!page) break;
                const rotation = page.rotation;
                let preview = '';
                try {
                    preview = await this._renderPreview(page.number, rotation);
                } catch {
                    if (signal.aborted) return;
                }
                if (signal.aborted) {
                    revokePreview(preview);
                    return;
                }
                revokePreview(page.preview);
                this._updatePages((item) =>
                    item.number === page.number
                        ? {
                              ...item,
                              preview,
                              // A failed page is tried again after a turn
                              preview_rotation: rotation,
                              preview_failed: !preview,
                          }
                        : item,
                );
            }
        } finally {
            this._previews_running = false;
        }
    }

    /**
     * Close with the selected pages, ready for the bulk upload. Pages are not
     * rendered here: each one renders at full size just before it uploads,
     * so a long PDF never holds more than one page image in memory.
     *
     * The modal cannot close while page sizes are read, as closing destroys
     * the document they are read from.
     */
    public async importPages() {
        const base_name = this.base_name();
        const selected = this.pages().filter((page) => page.selected);
        if (this.importing() || !selected.length || !base_name) return;
        this.importing.set(true);
        const disable_close = this._dialog_ref.disableClose;
        this._dialog_ref.disableClose = true;
        try {
            const document_handle = this._data.document;
            const render_page = this._renderPage;
            const items: BulkMediaUploadItem[] = [];
            // One page at a time, so a long PDF does not queue a request
            // for every page on the pdf.js worker at once
            for (const page of selected) {
                const options = this._renderOptions(page);
                const name = pdfPageName(base_name, page.number);
                const { width, height } = pdfPageImageSize(
                    await document_handle.pageSize(page.number),
                    options,
                );
                items.push({
                    media_type: 'image',
                    name,
                    tags: [base_name],
                    metadata: {
                        width,
                        height,
                        is_landscape: width > height,
                        duration: 0,
                    },
                    loadFile: async () =>
                        (
                            await render_page(
                                document_handle,
                                page.number,
                                options,
                                name,
                            )
                        ).file,
                });
            }
            this._dialog_ref.close(items);
        } catch {
            this.importing.set(false);
            // Previews stop while importing, so continue the ones not done
            void this.renderPreviews();
            notifyError(
                i18n('SIGNAGE_MANAGER.PDF_IMPORT_ERR_INVALID', {
                    name: this.file_name,
                }),
            );
        } finally {
            this._dialog_ref.disableClose = disable_close;
            this.importing.set(false);
        }
    }

    /** Object URL of a small PNG of a page, on transparency */
    private async _renderPreview(page_number: number, rotation: number) {
        const layer = await this._data.document.renderLayer(
            page_number,
            rotation,
            PREVIEW_BOUNDS,
            this._previews_abort.signal,
        );
        try {
            const blob = await new Promise<Blob | null>((resolve) =>
                layer.toBlob(resolve, 'image/png'),
            );
            if (!blob) throw new Error('Could not write the preview');
            return URL.createObjectURL(blob);
        } finally {
            releaseCanvas(layer);
        }
    }

    private _renderOptions(page: PdfImportPage): PdfPageRenderOptions {
        return {
            rotation: page.rotation,
            fit: this.fit(),
            background: this.background(),
            format: this.format(),
            resolution: this.resolution(),
        };
    }

    private _updatePages(change: (page: PdfImportPage) => PdfImportPage) {
        this.pages.update((pages) => pages.map(change));
    }
}
