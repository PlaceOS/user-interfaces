import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IconComponent } from '@placeos/components';
import { SignageMedia } from '@placeos/ts-client';
import { SignageMediaService } from '../media/signage-media.service';
import { MediaThumbnailComponent } from './media-thumbnail.component';
import { byName, PagedSearch } from './paged-search';
import {
    PickerItemDirective,
    PickerModalComponent,
} from './picker-modal.component';

export interface MediaSelectModalData {
    selected_id: string;
}

@Component({
    selector: 'media-select-modal',
    template: `
        <picker-modal
            heading="SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECT"
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
                    [class.border-primary]="media_item.id === selected_id"
                    [class.ring-primary]="media_item.id === selected_id"
                    [class.ring-1]="media_item.id === selected_id"
                    [mat-dialog-close]="media_item"
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
                    @if (media_item.id === selected_id) {
                        <icon class="text-primary shrink-0">check</icon>
                    }
                </button>
            </ng-template>
        </picker-modal>
    `,
    imports: [
        MatRippleModule,
        MatDialogModule,
        IconComponent,
        MediaThumbnailComponent,
        PickerModalComponent,
        PickerItemDirective,
    ],
})
export class MediaSelectModalComponent {
    private readonly _data = inject<MediaSelectModalData>(MAT_DIALOG_DATA);
    private readonly _media_service = inject(SignageMediaService);

    public readonly selected_id = this._data.selected_id;
    public readonly list = new PagedSearch<SignageMedia>(
        (search) => this._media_service.queryMedia(search),
        byName,
    );
}
