import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignageMedia } from '@placeos/ts-client';
import { SignageMediaService } from '../media/signage-media.service';
import { IntersectDirective } from './intersect.directive';
import { MediaThumbnailComponent } from './media-thumbnail.component';
import { byName, PagedSearch } from './paged-search';

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
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ heading | translate }}
            </h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                [aria-label]="'COMMON.CLOSE' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        <main
            class="h-[65vh] max-w-lg min-w-lg space-y-2 overflow-auto px-4 pt-2 pb-4 text-center max-md:h-auto max-md:max-w-none max-md:min-w-0 max-md:flex-1"
        >
            <mat-form-field
                appearance="outline"
                class="no-subscript bg-base-100 sticky top-0 z-10 w-full"
            >
                <input
                    matInput
                    [(ngModel)]="list.search"
                    [placeholder]="
                        'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SEARCH' | translate
                    "
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SEARCH' | translate
                    "
                />
            </mat-form-field>
            @if (list.items().length > 0) {
                @for (media_item of list.items(); track media_item.id) {
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
                }
                @if (list.has_more()) {
                    <div
                        class="h-px w-full"
                        intersect
                        (intersect)="list.loadMore()"
                    ></div>
                }
            } @else if (list.loading()) {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full items-center justify-center rounded-lg p-16"
                >
                    <div class="text-base-content/70">
                        {{ 'COMMON.LOADING' | translate }}
                    </div>
                </div>
            } @else {
                <div
                    class="bg-base-200 flex h-[calc(100%-3.5rem)] w-full flex-col items-center justify-center gap-4 rounded-lg p-16"
                >
                    <icon class="text-base-content/70 text-8xl">image</icon>
                    <div class="text-base-content/70">
                        {{ 'SIGNAGE_MANAGER.NO_MEDIA' | translate }}
                    </div>
                </div>
            }
        </main>
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
        FormsModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        TranslatePipe,
        IntersectDirective,
        MediaThumbnailComponent,
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
