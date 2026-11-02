import { Component, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignageMedia } from '@placeos/ts-client';
import { SignageMediaService } from '../media/signage-media.service';
import { MediaThumbnailComponent } from './media-thumbnail.component';
import { byName, PagedSearch } from './paged-search';
import {
    PickerItemDirective,
    PickerModalComponent,
} from './picker-modal.component';

/**
 * Pick media from the library. By default a click closes the dialog with that
 * item. With `multiple`, clicks toggle items and the dialog closes with the
 * list of picked items.
 */
export interface MediaSelectModalData {
    /** Item to mark as the current choice */
    selected_id?: string;
    multiple?: boolean;
    /** Translation key of the heading */
    heading?: string;
}

@Component({
    selector: 'media-select-modal',
    template: `
        <picker-modal
            [heading]="heading"
            close_label="COMMON.CLOSE"
            search_label="SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SEARCH"
            empty_icon="image"
            empty_label="SIGNAGE_MANAGER.NO_MEDIA"
            [list]="list"
        >
            <ng-template [pickerItem]="list" let-media_item>
                <button
                    type="button"
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex h-20 w-full items-center gap-3 rounded-sm border p-2 text-left"
                    [class.border-primary]="isSelected(media_item)"
                    [class.ring-primary]="isSelected(media_item)"
                    [class.ring-1]="isSelected(media_item)"
                    [attr.aria-pressed]="
                        multiple ? isSelected(media_item) : null
                    "
                    (click)="pick(media_item)"
                >
                    <media-thumbnail
                        class="bg-base-200 h-14 w-20 shrink-0 overflow-hidden rounded"
                        [item]="media_item"
                        [cover]="true"
                    />
                    <div class="min-w-0 flex-1">
                        <div class="truncate">{{ media_item.name }}</div>
                        <div
                            class="text-base-content/70 truncate text-xs capitalize"
                        >
                            {{ media_item.media_type }}
                        </div>
                    </div>
                    @if (isSelected(media_item)) {
                        <icon class="text-primary shrink-0">check</icon>
                    }
                </button>
            </ng-template>
        </picker-modal>
        @if (multiple) {
            <footer class="border-base-300 flex justify-end border-t p-2">
                <button
                    btn
                    type="button"
                    matRipple
                    class="min-w-32"
                    [disabled]="!picked().length"
                    (click)="confirm()"
                >
                    {{
                        'SIGNAGE_MANAGER.ADD_SELECTED_MEDIA'
                            | translate: { count: picked().length }
                    }}
                </button>
            </footer>
        }
    `,
    imports: [
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        MediaThumbnailComponent,
        PickerModalComponent,
        PickerItemDirective,
    ],
})
export class MediaSelectModalComponent {
    private readonly _data = inject<MediaSelectModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref =
        inject<
            MatDialogRef<
                MediaSelectModalComponent,
                SignageMedia | SignageMedia[]
            >
        >(MatDialogRef);
    private readonly _media_service = inject(SignageMediaService);

    public readonly multiple = !!this._data.multiple;
    public readonly heading =
        this._data.heading || 'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECT';
    /** Items picked so far, in the order they were picked */
    public readonly picked = signal<SignageMedia[]>([]);
    public readonly list = new PagedSearch<SignageMedia>(
        (search) => this._media_service.queryMedia(search),
        byName,
    );

    public isSelected(media: SignageMedia) {
        return this.multiple
            ? this.picked().some(({ id }) => id === media.id)
            : media.id === this._data.selected_id;
    }

    /** Close with the item, or toggle it when picking several */
    public pick(media: SignageMedia) {
        if (!this.multiple) {
            this._dialog_ref.close(media);
            return;
        }
        this.picked.update((list) =>
            list.some(({ id }) => id === media.id)
                ? list.filter(({ id }) => id !== media.id)
                : [...list, media],
        );
    }

    /** Close with the picked items */
    public confirm() {
        this._dialog_ref.close(this.picked());
    }
}
