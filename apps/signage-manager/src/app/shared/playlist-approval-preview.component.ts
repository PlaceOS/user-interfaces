import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { SignageMedia, SignagePlaylistMedia } from '@placeos/ts-client';
import { playlistMediaThumbnailUrl } from '../signage-playlist.util';
import { MediaThumbnailComponent } from './media-thumbnail.component';

@Component({
    selector: 'playlist-approval-preview',
    template: `
        <div class="flex gap-2 max-md:flex-col">
            <div
                class="border-base-300 bg-success-light min-w-0 flex-1 rounded-sm border"
            >
                @let current_version = versions()?.[0];
                @let current_media = media()?.[0] || [];
                <div
                    class="border-base-300 bg-base-200 flex items-center justify-between gap-2 rounded-sm border-b px-4 py-2"
                >
                    <h3>
                        {{ 'SIGNAGE_MANAGER.VERSION_TO_APPROVE' | translate }}
                    </h3>
                    <div class="text-base-content/70 font-mono text-xs">
                        {{
                            current_version?.updated_at * 1000
                                | date: 'dd MMM, HH:mm'
                        }}
                    </div>
                </div>
                <div class="space-y-2 p-2">
                    <div class="px-2 text-sm">
                        {{
                            'COMMON.ITEM_COUNT'
                                | translate
                                    : {
                                          count: (current_version?.items || [])
                                              .length,
                                      }
                                    : (current_version?.items || []).length
                        }}
                    </div>
                    @for (item of current_media; track item?.id) {
                        <ng-container
                            [ngTemplateOutlet]="media_item"
                            [ngTemplateOutletContext]="{ item }"
                        />
                    } @empty {
                        <ng-container [ngTemplateOutlet]="empty_state" />
                    }
                </div>
            </div>
            <div
                class="border-base-300 bg-error-light min-w-0 flex-1 rounded-sm border"
            >
                @let previous_version = versions()?.[1];
                @let previous_media = media()?.[1] || [];
                <div
                    class="border-base-300 bg-base-200 flex items-center justify-between gap-2 rounded-sm border-b px-4 py-2"
                >
                    <h3>
                        {{ 'SIGNAGE_MANAGER.PREVIOUS_VERSION' | translate }}
                    </h3>
                    <div class="text-base-content/70 font-mono text-xs">
                        {{
                            previous_version?.updated_at * 1000
                                | date: 'dd MMM, HH:mm'
                        }}
                    </div>
                </div>
                <div class="space-y-2 p-2">
                    <div class="px-2 text-sm">
                        {{
                            'COMMON.ITEM_COUNT'
                                | translate
                                    : {
                                          count: (previous_version?.items || [])
                                              .length,
                                      }
                                    : (previous_version?.items || []).length
                        }}
                    </div>
                    @for (item of previous_media; track item?.id) {
                        <ng-container
                            [ngTemplateOutlet]="media_item"
                            [ngTemplateOutletContext]="{ item }"
                        />
                    } @empty {
                        <ng-container [ngTemplateOutlet]="empty_state" />
                    }
                </div>
            </div>
        </div>

        <ng-template #media_item let-item="item">
            <div
                class="border-base-300 bg-base-100 flex items-center space-x-2 rounded-sm border p-2"
            >
                <button
                    type="button"
                    class="bg-base-200 relative h-10 w-10 shrink-0 overflow-hidden rounded-sm"
                    matRipple
                    (click)="preview.emit(item)"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.PREVIEW_MEDIA'
                            | translate: { name: item.name }
                    "
                >
                    <media-thumbnail [item]="item" class="h-full w-full" />
                    @if (thumbnailUrl(item)) {
                        <div
                            class="absolute inset-0 flex items-end justify-end p-1 opacity-0 transition-opacity duration-200 hover:opacity-100"
                        >
                            <icon class="text-lg">expand_content</icon>
                        </div>
                    }
                </button>
                <span class="truncate">{{ item.name }}</span>
            </div>
        </ng-template>

        <ng-template #empty_state>
            <div
                class="text-base-content/70 flex flex-col items-center justify-center p-8"
            >
                <icon class="text-4xl">hide_image</icon>
                <p class="text-sm">
                    {{ 'COMMON.NO_ITEMS' | translate }}
                </p>
            </div>
        </ng-template>
    `,
    imports: [
        CommonModule,
        IconComponent,
        MatRippleModule,
        TranslatePipe,
        MediaThumbnailComponent,
    ],
})
export class PlaylistApprovalPreviewComponent {
    public readonly versions = input<SignagePlaylistMedia[]>([]);
    public readonly media = input<SignageMedia[][]>([]);
    public readonly preview = output<SignageMedia>();

    public thumbnailUrl(item: SignageMedia) {
        return playlistMediaThumbnailUrl(item);
    }
}
