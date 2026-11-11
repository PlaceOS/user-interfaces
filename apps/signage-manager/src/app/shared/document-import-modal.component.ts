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
    documentBaseName,
    DocumentHandle,
    DocumentImageFormat,
    DocumentPageFit,
    documentPageName,
    DocumentPageRenderOptions,
    DocumentResolution,
    normalizeRotation,
    pageImageSize,
    releaseCanvas,
    renderPageImage,
    TRANSPARENT_BACKGROUND,
} from '../media/document-import.util';
import type { BulkMediaUploadItem } from './bulk-media-upload.util';

export interface DocumentImportModalData {
    file_name: string;
    /**
     * The document as it opens. The modal shows that it loads until then,
     * and closes when it does not open. The caller owns the document and
     * closes it. Has at most `MAX_DOCUMENT_PAGES` pages, as the modal keeps
     * a preview of each.
     */
    document: Promise<DocumentHandle>;
    /** Whether this browser can write WebP images */
    webp_supported: boolean;
    /** Place of this document when several are imported together */
    position?: { current: number; total: number };
}

/** The rendered pages to upload. Undefined when the import is cancelled. */
export type DocumentImportModalResult = BulkMediaUploadItem[] | undefined;

export type DocumentBackgroundMode =
    | 'white'
    | 'black'
    | 'custom'
    | 'transparent';

interface DocumentImportPage {
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
    Exclude<DocumentBackgroundMode, 'custom'>,
    string
> = {
    white: '#ffffff',
    black: '#000000',
    transparent: TRANSPARENT_BACKGROUND,
};

@Component({
    selector: 'document-import-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex w-[calc(100%-1rem)] items-center rounded-sm border-none p-2"
        >
            <div class="min-w-0 flex-1 px-2">
                <h2 id="document-import-title" class="text-xl font-medium">
                    {{ 'SIGNAGE_MANAGER.DOCUMENT_IMPORT_TITLE' | translate }}
                </h2>
                <p class="text-base-content/70 truncate text-sm">
                    {{ file_name }}
                    @if (position) {
                        ·
                        {{
                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_QUEUE'
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
                        'SIGNAGE_MANAGER.DOCUMENT_IMPORT_CLOSE_ARIA' | translate
                    "
                >
                    <icon>close</icon>
                </button>
            }
        </header>
        <div class="import-layout flex max-w-full gap-4 px-2 pb-2">
            <section
                class="import-options border-base-300 flex shrink-0 flex-col rounded-xl border border-b-3 p-2"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.DOCUMENT_IMPORT_OPTIONS' | translate
                "
            >
                <label for="document-import-name">
                    {{ 'SIGNAGE_MANAGER.DOCUMENT_IMPORT_NAME' | translate }}
                </label>
                <!-- The example name can wrap, so the hint takes the height
                     it needs rather than overlapping the next field -->
                <mat-form-field appearance="outline" subscriptSizing="dynamic">
                    <input
                        matInput
                        id="document-import-name"
                        name="name"
                        [(ngModel)]="name"
                        [disabled]="importing()"
                        aria-describedby="document-import-name-hint"
                    />
                </mat-form-field>
                <div
                    id="document-import-name-hint"
                    class="name-hint p-2 text-[0.625rem]"
                >
                    {{
                        'SIGNAGE_MANAGER.DOCUMENT_IMPORT_NAME_HINT'
                            | translate: { example: example_name() }
                    }}
                </div>

                <label id="document-import-fit-label" for="document-import-fit">
                    {{ 'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FIT' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        id="document-import-fit"
                        name="fit"
                        aria-labelledby="document-import-fit-label"
                        [(ngModel)]="fit"
                        [disabled]="importing()"
                    >
                        <mat-option value="page">
                            {{
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FIT_PAGE'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="landscape">
                            {{
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FIT_LANDSCAPE'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="portrait">
                            {{
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FIT_PORTRAIT'
                                    | translate
                            }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>

                <label
                    id="document-import-background-label"
                    for="document-import-background"
                    class="mt-2"
                >
                    {{
                        'SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND' | translate
                    }}
                </label>
                <div class="flex items-center gap-2">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript min-w-0 flex-1"
                    >
                        <mat-select
                            id="document-import-background"
                            name="background"
                            aria-labelledby="document-import-background-label"
                            [(ngModel)]="background_mode"
                            [disabled]="importing()"
                        >
                            <mat-option value="white">
                                {{
                                    'SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND_WHITE'
                                        | translate
                                }}
                            </mat-option>
                            <mat-option value="black">
                                {{
                                    'SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND_BLACK'
                                        | translate
                                }}
                            </mat-option>
                            <mat-option value="custom">
                                {{
                                    'SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND_CUSTOM'
                                        | translate
                                }}
                            </mat-option>
                            <mat-option value="transparent">
                                {{
                                    'SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND_TRANSPARENT'
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
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_BACKGROUND_COLOUR'
                                    | translate
                            "
                        />
                    }
                </div>

                <label
                    id="document-import-format-label"
                    for="document-import-format"
                    class="mt-2"
                >
                    {{ 'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FORMAT' | translate }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        id="document-import-format"
                        name="format"
                        aria-labelledby="document-import-format-label"
                        [(ngModel)]="format"
                        [disabled]="importing()"
                    >
                        <mat-option value="webp" [disabled]="!webp_supported">
                            {{
                                (webp_supported
                                    ? 'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FORMAT_WEBP'
                                    : 'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FORMAT_WEBP_UNSUPPORTED'
                                ) | translate
                            }}
                        </mat-option>
                        <mat-option value="png">
                            {{
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_FORMAT_PNG'
                                    | translate
                            }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>

                <label
                    id="document-import-resolution-label"
                    for="document-import-resolution"
                    class="mt-2"
                >
                    {{
                        'SIGNAGE_MANAGER.DOCUMENT_IMPORT_RESOLUTION' | translate
                    }}
                </label>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select
                        id="document-import-resolution"
                        name="resolution"
                        aria-labelledby="document-import-resolution-label"
                        [(ngModel)]="resolution"
                        [disabled]="importing()"
                    >
                        <mat-option value="4k">
                            {{
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_RESOLUTION_4K'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="hd">
                            {{
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_RESOLUTION_HD'
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
                        [disabled]="importing() || loading()"
                        (click)="selectAll(true)"
                    >
                        {{
                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_SELECT_ALL'
                                | translate
                        }}
                    </button>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="inverse"
                        [disabled]="importing() || loading()"
                        (click)="selectAll(false)"
                    >
                        {{
                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_SELECT_NONE'
                                | translate
                        }}
                    </button>
                    <div class="flex-1"></div>
                    <button
                        icon
                        default
                        matRipple
                        type="button"
                        [disabled]="importing() || loading()"
                        (click)="rotateAll(-90)"
                        [matTooltip]="
                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_ROTATE_ALL_LEFT'
                                | translate
                        "
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_ROTATE_ALL_LEFT'
                                | translate
                        "
                    >
                        <icon>rotate_left</icon>
                    </button>
                    <button
                        icon
                        default
                        matRipple
                        type="button"
                        [disabled]="importing() || loading()"
                        (click)="rotateAll(90)"
                        [matTooltip]="
                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_ROTATE_ALL_RIGHT'
                                | translate
                        "
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_ROTATE_ALL_RIGHT'
                                | translate
                        "
                    >
                        <icon>rotate_right</icon>
                    </button>
                </div>
                <p class="text-base-content/70 pb-2 text-xs">
                    {{
                        'SIGNAGE_MANAGER.DOCUMENT_IMPORT_SELECT_HINT'
                            | translate
                    }}
                </p>
                @if (loading()) {
                    <div
                        class="loading-pages flex flex-1 flex-col items-center justify-center gap-4 p-4 text-center"
                        role="status"
                    >
                        <mat-spinner diameter="32" aria-hidden="true" />
                        <p class="text-base-content/70 text-sm">
                            {{
                                'SIGNAGE_MANAGER.DOCUMENT_IMPORT_LOADING'
                                    | translate: { name: file_name }
                            }}
                        </p>
                    </div>
                }
                <ul
                    class="page-grid grid flex-1 gap-3 overflow-auto p-1"
                    [hidden]="loading()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.DOCUMENT_IMPORT_PAGES' | translate
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
                                            'SIGNAGE_MANAGER.DOCUMENT_IMPORT_PAGE'
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
                                    'SIGNAGE_MANAGER.DOCUMENT_IMPORT_ROTATE_PAGE'
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
                @if (!loading()) {
                    {{
                        'SIGNAGE_MANAGER.DOCUMENT_IMPORT_SELECTED'
                            | translate
                                : {
                                      count: selected_count(),
                                      total: pages().length,
                                  }
                    }}
                }
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
                class="flex min-w-32 items-center justify-center gap-2"
                [disabled]="importing() || !selected_count() || !base_name()"
                (click)="importPages()"
            >
                @if (importing()) {
                    <mat-spinner diameter="18" aria-hidden="true" />
                }
                {{
                    'SIGNAGE_MANAGER.DOCUMENT_IMPORT_START'
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
            .loading-pages {
                min-height: 12rem;
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
export class DocumentImportModalComponent implements OnInit {
    private readonly _data = inject<DocumentImportModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref =
        inject<
            MatDialogRef<
                DocumentImportModalComponent,
                DocumentImportModalResult
            >
        >(MatDialogRef);

    public readonly file_name = this._data.file_name;
    public readonly position = this._data.position;
    public readonly webp_supported = this._data.webp_supported;

    /** Tag of every page, and the start of each page name */
    public readonly name = signal(documentBaseName(this._data.file_name));
    public readonly fit = signal<DocumentPageFit>('page');
    public readonly background_mode = signal<DocumentBackgroundMode>('white');
    public readonly custom_colour = signal('#ffffff');
    public readonly format = signal<DocumentImageFormat>(
        this._data.webp_supported ? 'webp' : 'png',
    );
    public readonly resolution = signal<DocumentResolution>('4k');

    /** The open document. Null while it opens. */
    public readonly document = signal<DocumentHandle | null>(null);
    /** Whether the document still opens. A PowerPoint file can take a while. */
    public readonly loading = computed(() => !this.document());
    /** One item per page of the document. Empty while it opens. */
    public readonly pages = signal<DocumentImportPage[]>([]);
    /** Set while the page sizes of the selected pages are read */
    public readonly importing = signal(false);

    public readonly base_name = computed(() => this.name().trim());
    public readonly example_name = computed(() =>
        documentPageName(this.base_name() || documentBaseName(''), 1),
    );
    public readonly background = computed(() => {
        const mode = this.background_mode();
        return mode === 'custom'
            ? this.custom_colour()
            : BACKGROUND_COLOURS[mode];
    });
    public readonly is_transparent = computed(
        () => this.background() === TRANSPARENT_BACKGROUND,
    );
    public readonly selected_count = computed(
        () => this.pages().filter((page) => page.selected).length,
    );

    private _renderPage = renderPageImage;
    /** Page clicked last, for shift-click range selection */
    private _anchor_page: number | null = null;
    /** Stops preview rendering when the modal closes */
    private readonly _previews_abort = new AbortController();
    private _previews_running = false;
    /** The one `load` run, so a second call does not list the pages again */
    private _load?: Promise<boolean>;

    constructor() {
        inject(DestroyRef).onDestroy(() => {
            this._previews_abort.abort();
            for (const page of this.pages()) revokePreview(page.preview);
        });
    }

    public ngOnInit() {
        void this.load().then((loaded) => loaded && this.renderPreviews());
    }

    /**
     * Wait for the document to open, then list its pages. Closes the modal
     * when it does not open, as the caller shows the error. Runs once.
     * @returns Whether the document opened while the modal is open
     */
    public load() {
        this._load ??= this._openDocument();
        return this._load;
    }

    private async _openDocument() {
        let document_handle: DocumentHandle;
        try {
            document_handle = await this._data.document;
        } catch {
            this._dialog_ref.close();
            return false;
        }
        if (this._previews_abort.signal.aborted) return false;
        this.pages.set(
            Array.from({ length: document_handle.page_count }, (_, index) => ({
                number: index + 1,
                selected: true,
                rotation: 0,
                preview: '',
                preview_rotation: null,
                preview_failed: false,
            })),
        );
        this.document.set(document_handle);
        return true;
    }

    /**
     * Include or exclude a page. Shift-click sets every page between this one
     * and the page clicked before it to the same state.
     */
    public togglePage(page: DocumentImportPage, event?: MouseEvent) {
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

    public rotatePage(page: DocumentImportPage, turn: number) {
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
        const document_handle = this.document();
        if (this._previews_running || !document_handle) return;
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
                    preview = await this._renderPreview(
                        document_handle,
                        page.number,
                        rotation,
                    );
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
     * so a long document never holds more than one page image in memory.
     *
     * The modal cannot close while page sizes are read, as closing destroys
     * the document they are read from.
     */
    public async importPages() {
        const base_name = this.base_name();
        const selected = this.pages().filter((page) => page.selected);
        const document_handle = this.document();
        if (
            this.importing() ||
            !document_handle ||
            !selected.length ||
            !base_name
        ) {
            return;
        }
        this.importing.set(true);
        const disable_close = this._dialog_ref.disableClose;
        this._dialog_ref.disableClose = true;
        try {
            const render_page = this._renderPage;
            const items: BulkMediaUploadItem[] = [];
            // One page at a time, so a long document does not queue a
            // request for every page on its reader at once
            for (const page of selected) {
                const options = this._renderOptions(page);
                const name = documentPageName(base_name, page.number);
                const { width, height } = pageImageSize(
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
                i18n('SIGNAGE_MANAGER.DOCUMENT_IMPORT_ERR_INVALID', {
                    name: this.file_name,
                }),
            );
        } finally {
            this._dialog_ref.disableClose = disable_close;
            this.importing.set(false);
        }
    }

    /** Object URL of a small PNG of a page, on transparency */
    private async _renderPreview(
        document_handle: DocumentHandle,
        page_number: number,
        rotation: number,
    ) {
        const layer = await document_handle.renderLayer(
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

    private _renderOptions(
        page: DocumentImportPage,
    ): DocumentPageRenderOptions {
        return {
            rotation: page.rotation,
            fit: this.fit(),
            background: this.background(),
            format: this.format(),
            resolution: this.resolution(),
        };
    }

    private _updatePages(
        change: (page: DocumentImportPage) => DocumentImportPage,
    ) {
        this.pages.update((pages) => pages.map(change));
    }
}
