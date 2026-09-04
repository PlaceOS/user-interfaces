import { Component, input, output } from '@angular/core';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    CustomTooltipComponent,
    IconComponent,
    MediaDurationPipe,
    TranslatePipe,
} from '@placeos/components';
import { validateMedia } from './media-helpers';
import { MediaPlayerItem } from './types';

@Component({
    selector: 'playlist-display',
    template: `
        <div
            class="border-base-300 bg-base-100 flex min-w-[20rem] flex-col space-y-2 overflow-auto rounded-xl border p-2"
        >
            <div class="flex items-center space-x-4 p-2">
                <h2>{{ 'APP.SIGNAGE.MEDIA_LIST' | translate }}</h2>
                <div
                    class="bg-info-light rounded-full px-2 py-1 text-xs shadow-sm"
                >
                    <div class="text-info">
                        {{
                            'COMMON.ITEM_COUNT'
                                | translate
                                    : { count: playlist()?.length || 0 }
                                    : playlist()?.length || 0
                        }}
                    </div>
                </div>
            </div>
            @if (playlist().length > 0) {
                <div
                    data-testid="playlist-media-list"
                    class="flex max-h-[50vh] flex-col overflow-auto"
                >
                    <ng-template #item_info_template let-item="data">
                        @if (item) {
                            @let is_valid = isValidMedia(item);
                            <div
                                class="bg-base-100 text-base-content border-base-300 w-72 rounded-lg border p-3 shadow-xl"
                            >
                                <div class="flex items-start gap-2">
                                    <icon class="text-xl">{{
                                        mediaTypeIcon(item)
                                    }}</icon>
                                    <div class="min-w-0 flex-1">
                                        <h3 class="truncate font-medium">
                                            {{ item.name }}
                                        </h3>
                                    </div>
                                </div>
                                <div
                                    class="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs"
                                >
                                    <div class="text-base-content/50">
                                        Playlist
                                    </div>
                                    <div>
                                        {{ item.playlist_name }}
                                    </div>
                                    <div class="text-base-content/50">Type</div>
                                    <div class="capitalize">
                                        {{ item.type || 'unknown' }}
                                    </div>
                                    <div class="text-base-content/50">
                                        Duration
                                    </div>
                                    <div>
                                        {{
                                            item.duration / 1000 | mediaDuration
                                        }}
                                    </div>
                                    <div class="text-base-content/50">
                                        Status
                                    </div>
                                    <div
                                        [class.text-success]="is_valid"
                                        [class.text-error]="!is_valid"
                                    >
                                        {{ is_valid ? 'Ready' : 'Invalid' }}
                                    </div>
                                    <div class="text-base-content/50">
                                        Cache
                                    </div>
                                    <div
                                        [class.text-success]="
                                            isCachedMedia(item)
                                        "
                                        [class.text-warning]="
                                            isLoadingMedia(item)
                                        "
                                        [class.text-base-content/60]="
                                            !isCachedMedia(item) &&
                                            !isLoadingMedia(item)
                                        "
                                    >
                                        {{ cacheStatus(item) }}
                                    </div>
                                </div>
                                @if (!is_valid) {
                                    <div
                                        class="text-error bg-error/10 mt-3 rounded-sm p-2 text-xs"
                                    >
                                        {{ validateMedia(item) }}
                                    </div>
                                }
                            </div>
                        }
                    </ng-template>
                    @for (
                        item of playlist();
                        track item.id + i;
                        let i = $index
                    ) {
                        @let is_valid = isValidMedia(item);
                        <button
                            matRipple
                            class="hover:bg-base-200 w-[20rem] shrink-0 rounded-lg text-left"
                            [class.overflow-visible]="i === index()"
                            (click)="setPlaylistItem(i)"
                            [attr.aria-disabled]="!is_valid || i === index()"
                            [matRippleDisabled]="!is_valid || i === index()"
                        >
                            <div
                                class="relative flex w-full items-center gap-2 p-2"
                                customTooltip
                                [content]="item_info_template"
                                [data]="{ data: item }"
                                [hover]="true"
                                xPosition="center"
                            >
                                <div
                                    class="relative flex h-8 w-8 items-center justify-center rounded-full"
                                    [class.bg-info]="i === index()"
                                    [class.text-info-content]="i === index()"
                                    [class.bg-base-300]="i !== index()"
                                    [class.bg-error!]="!is_valid"
                                    [class.text-error-content!]="!is_valid"
                                >
                                    @if (is_valid && i === index()) {
                                        <span
                                            class="bg-info absolute inset-1 z-0 animate-ping rounded-full opacity-75"
                                        ></span>
                                    }
                                    <icon
                                        class="relative z-10 text-xl"
                                        [class.opacity-30]="i !== index()"
                                        >{{ mediaTypeIcon(item) }}</icon
                                    >
                                </div>
                                <div class="flex w-1/2 flex-1 flex-col">
                                    <div class="truncate">
                                        {{ item.name }}
                                    </div>
                                    <div
                                        class="flex items-center gap-1 text-xs"
                                    >
                                        <div
                                            class="text-base-300 flex-1 truncate"
                                        >
                                            {{ item.playlist_name }}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="bg-info text-info-content relative mr-4 rounded-sm px-2 py-1 font-mono text-xs"
                                >
                                    <div class="z-10">
                                        {{
                                            item.duration / 1000 | mediaDuration
                                        }}
                                    </div>
                                </div>
                                @if (isCachedMedia(item)) {
                                    <icon
                                        data-testid="cached-media-icon"
                                        class="text-success absolute top-1/2 right-0 -translate-y-1/2 text-xl"
                                        matTooltip="Cached"
                                        matTooltipPosition="right"
                                        >offline_pin</icon
                                    >
                                }
                            </div>
                        </button>
                    }
                    <div class="mt-2 flex flex-col justify-end">
                        <div
                            class="bg-base-300 rounded-lg p-2 text-center text-xs opacity-30"
                        >
                            {{ 'APP.SIGNAGE.MEDIA_LIST_END' | translate }}
                        </div>
                    </div>
                </div>
            } @else {
                <div class="flex flex-col justify-end">
                    <div
                        class="bg-base-300 rounded-lg p-16 text-center text-xs opacity-30"
                    >
                        {{ 'APP.SIGNAGE.MEDIA_LIST_EMPTY' | translate }}
                    </div>
                </div>
            }
        </div>
    `,
    styles: [``],
    imports: [
        IconComponent,
        TranslatePipe,
        MatTooltipModule,
        MediaDurationPipe,
        MatRippleModule,
        CustomTooltipComponent,
    ],
})
export class PlaylistDisplayComponent {
    public readonly playlist = input<MediaPlayerItem[]>([]);
    public readonly index = input(0);
    public readonly selected = output<number>();

    public readonly validateMedia = (item: MediaPlayerItem) =>
        validateMedia(item);

    public mediaTypeIcon(item: MediaPlayerItem): string {
        switch (item.type) {
            case 'video':
                return 'video_library';
            case 'webpage':
                return 'http';
            case 'plugin':
                return 'extension';
            case 'image':
                return 'image';
            default:
                return 'draft';
        }
    }

    public isValidMedia(item: MediaPlayerItem): boolean {
        return validateMedia(item) === '';
    }

    public isCachedMedia(item: MediaPlayerItem): boolean {
        return item.isCached?.() || false;
    }

    public isLoadingMedia(item: MediaPlayerItem): boolean {
        return item.isLoading?.() || false;
    }

    public cacheStatus(item: MediaPlayerItem): string {
        if (this.isLoadingMedia(item)) return 'Caching';
        return this.isCachedMedia(item) ? 'Cached' : 'Not cached';
    }

    public setPlaylistItem(index: number) {
        const item = this.playlist()[index];
        if (!item || !this.isValidMedia(item) || index === this.index()) return;
        this.selected.emit(index);
    }
}
