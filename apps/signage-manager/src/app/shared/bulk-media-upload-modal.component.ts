import { Component, computed, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { humanReadableByteCount } from '@placeos/cloud-uploads';
import { i18n, notifyError, notifySuccess } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignageMedia } from '@placeos/ts-client';
import {
    bulkItemName,
    type BulkMediaUploadItem,
} from './bulk-media-upload.util';

export type { BulkMediaUploadItem } from './bulk-media-upload.util';

/** File size, or the image size for a file not made yet */
function itemDetails(item: BulkMediaUploadItem) {
    if (item.file) return humanReadableByteCount(item.file.size);
    const { width, height } = item.metadata;
    return `${width} × ${height}`;
}

export interface BulkMediaUploadModalData {
    items: BulkMediaUploadItem[];
    /**
     * Start uploading as the modal opens, for
     * uploads confirmed in an earlier step. The modal then shows progress.
     */
    auto_start?: boolean;
    onUpload: (
        item: BulkMediaUploadItem,
        on_progress: (progress: number) => void,
    ) => Promise<SignageMedia>;
}

type BulkUploadStatus = 'pending' | 'uploading' | 'done' | 'error';

interface BulkUploadRow {
    id: number;
    item: BulkMediaUploadItem;
    name: string;
    /** File size, or image size when the file is made at upload time */
    formatted_size: string;
    status: BulkUploadStatus;
    progress: number;
    error: string;
}

function uploadErrorMessage(error: unknown) {
    if (error instanceof Error && error.message) return error.message;
    if (typeof error === 'string' && error) return error;
    if (error && typeof error === 'object') {
        const details = error as Record<string, unknown>;
        const value = details.error || details.message || details.statusText;
        if (typeof value === 'string' && value) return value;
    }
    return i18n('SIGNAGE_MANAGER.SVC_MEDIA_UPLOAD_FAILED');
}

@Component({
    selector: 'bulk-media-upload-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'SIGNAGE_MANAGER.BULK_UPLOAD_TITLE' | translate }}
            </h2>
            @if (!uploading()) {
                <button
                    icon
                    type="button"
                    matRipple
                    mat-dialog-close
                    [aria-label]="
                        'SIGNAGE_MANAGER.BULK_UPLOAD_CLOSE_ARIA' | translate
                    "
                >
                    <icon>close</icon>
                </button>
            }
        </header>
        <main
            class="max-h-[65vh] w-[32rem] max-w-full space-y-2 overflow-auto px-4 pt-2 pb-4 max-md:h-auto max-md:w-auto max-md:flex-1"
        >
            @for (row of rows(); track row.id) {
                <div
                    class="border-base-300 flex w-full items-center space-x-2 rounded-sm border p-2"
                >
                    <icon class="text-base-content/60 shrink-0 text-2xl">
                        {{
                            row.item.media_type === 'video' ? 'movie' : 'image'
                        }}
                    </icon>
                    <div class="min-w-0 flex-1">
                        <div class="truncate">
                            {{ row.name }}
                        </div>
                        <div class="text-base-content/70 truncate text-xs">
                            @if (row.status === 'error') {
                                <span class="text-error">{{ row.error }}</span>
                            } @else {
                                {{ row.formatted_size }}
                            }
                        </div>
                    </div>
                    @switch (row.status) {
                        @case ('uploading') {
                            <div class="flex shrink-0 items-center space-x-2">
                                <div class="font-mono text-xs">
                                    {{ row.progress }}%
                                </div>
                                <mat-spinner diameter="24" />
                            </div>
                        }
                        @case ('done') {
                            <icon
                                class="text-success shrink-0 text-2xl"
                                label="Uploaded"
                            >
                                check_circle
                            </icon>
                        }
                        @case ('error') {
                            <icon class="text-error shrink-0 text-2xl">
                                error
                            </icon>
                        }
                        @default {
                            <button
                                icon
                                type="button"
                                matRipple
                                class="shrink-0"
                                [disabled]="uploading()"
                                (click)="removeRow(row)"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.BULK_UPLOAD_REMOVE_ARIA'
                                        | translate
                                "
                            >
                                <icon>delete</icon>
                            </button>
                        }
                    }
                </div>
            }
        </main>
        <footer
            class="border-base-200 flex items-center justify-end space-x-2 border-t px-4 py-2"
        >
            @if (uploading()) {
                <div class="text-base-content/70 flex-1 text-sm">
                    @if (stopping()) {
                        {{ 'SIGNAGE_MANAGER.BULK_UPLOAD_STOPPING' | translate }}
                    } @else {
                        {{
                            'SIGNAGE_MANAGER.BULK_UPLOAD_UPLOADING'
                                | translate
                                    : {
                                          current:
                                              done_count() + error_count() + 1,
                                          total: rows().length,
                                      }
                        }}
                    }
                </div>
                <button
                    btn
                    matRipple
                    type="button"
                    class="inverse w-32"
                    [disabled]="stopping()"
                    (click)="stop()"
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
            } @else {
                <button
                    btn
                    matRipple
                    type="button"
                    class="inverse w-32"
                    mat-dialog-close
                >
                    {{
                        (done_count() || error_count()
                            ? 'SIGNAGE_MANAGER.BULK_UPLOAD_CLOSE'
                            : 'COMMON.CANCEL'
                        ) | translate
                    }}
                </button>
            }
            <button
                btn
                matRipple
                type="button"
                class="min-w-32"
                [disabled]="uploading() || !remaining_count()"
                (click)="uploadAll()"
            >
                {{
                    (error_count()
                        ? 'SIGNAGE_MANAGER.BULK_UPLOAD_RETRY'
                        : 'SIGNAGE_MANAGER.BULK_UPLOAD_START'
                    ) | translate: { count: remaining_count() }
                }}
            </button>
        </footer>
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class BulkMediaUploadModalComponent {
    private readonly _data = inject<BulkMediaUploadModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref =
        inject<MatDialogRef<BulkMediaUploadModalComponent>>(MatDialogRef);

    public readonly rows = signal<BulkUploadRow[]>(
        this._data.items.map((item, index) => ({
            id: index,
            item,
            name: bulkItemName(item),
            formatted_size: itemDetails(item),
            status: 'pending' as BulkUploadStatus,
            progress: 0,
            error: '',
        })),
    );
    public readonly auto_start = !!this._data.auto_start;
    public readonly uploading = signal(false);
    /** Set by `stop()`. The upload loop ends after the current file. */
    public readonly stopping = signal(false);

    public readonly done_count = computed(
        () => this.rows().filter((_) => _.status === 'done').length,
    );
    public readonly error_count = computed(
        () => this.rows().filter((_) => _.status === 'error').length,
    );
    public readonly remaining_count = computed(
        () =>
            this.rows().filter(
                (_) => _.status === 'pending' || _.status === 'error',
            ).length,
    );

    constructor() {
        if (this.auto_start) void this.uploadAll();
    }

    public removeRow(row: BulkUploadRow) {
        this.rows.update((rows) => rows.filter((_) => _.id !== row.id));
        if (!this.rows().length) this._dialog_ref.close();
    }

    private _patchRow(id: number, changes: Partial<BulkUploadRow>) {
        this.rows.update((rows) =>
            rows.map((_) => (_.id === id ? { ..._, ...changes } : _)),
        );
    }

    /** Stop the upload after the current file. The file in flight completes. */
    public stop() {
        if (this.uploading()) this.stopping.set(true);
    }

    public async uploadAll() {
        if (this.uploading()) return;
        this.uploading.set(true);
        this._dialog_ref.disableClose = true;
        for (const row of this.rows()) {
            if (this.stopping()) break;
            if (row.status !== 'pending' && row.status !== 'error') continue;
            this._patchRow(row.id, {
                status: 'uploading',
                progress: 0,
                error: '',
            });
            try {
                await this._data.onUpload(row.item, (progress) =>
                    this._patchRow(row.id, {
                        progress: Math.min(100, Math.floor(progress)),
                    }),
                );
                this._patchRow(row.id, { status: 'done', progress: 100 });
            } catch (error) {
                this._patchRow(row.id, {
                    status: 'error',
                    error: uploadErrorMessage(error),
                });
            }
        }
        this._dialog_ref.disableClose = false;
        this.uploading.set(false);
        const stopped = this.stopping();
        this.stopping.set(false);
        const failed = this.error_count();
        if (failed) {
            notifyError(
                i18n('SIGNAGE_MANAGER.BULK_UPLOAD_FAILED', { count: failed }),
            );
            return;
        }
        // Files not yet uploaded stay in the list to start again or close
        if (stopped && this.remaining_count()) return;
        notifySuccess(
            i18n('SIGNAGE_MANAGER.BULK_UPLOAD_SUCCESS', {
                count: this.done_count(),
            }),
        );
        this._dialog_ref.close(this.done_count());
    }
}
