import { Component, input, output } from '@angular/core';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
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
                <div class="max-h-[calc(100vh-10rem)] overflow-auto">
                    <div>
                        @for (
                            item of playlist();
                            track item.id + i;
                            let i = $index
                        ) {
                            @let is_valid = isValidMedia(item);
                            <button
                                matRipple
                                class="hover:bg-base-200 flex w-[20rem] items-center space-x-2 rounded-lg p-2 text-left"
                                [class.overflow-visible]="i === index()"
                                [class.pointer-events-none]="i === index()"
                                (click)="setPlaylistItem(i)"
                                [disabled]="!is_valid"
                            >
                                <div
                                    class="flex h-10 w-10 items-center justify-center rounded-full"
                                    [class.bg-info]="i === index()"
                                    [class.text-info-content]="i === index()"
                                    [class.bg-base-300]="i !== index()"
                                    [class.bg-error!]="!is_valid"
                                    [class.text-error-content!]="!is_valid"
                                    [matTooltip]="validateMedia(item)"
                                    matTooltipPosition="left"
                                >
                                    <div
                                        class="relative flex h-7 w-7 items-center justify-center"
                                    >
                                        @if (is_valid && i === index()) {
                                            <span
                                                class="bg-info absolute z-0 inline-flex h-full w-full animate-ping rounded-full opacity-75"
                                            ></span>
                                        }
                                        <icon
                                            class="relative z-10 text-2xl"
                                            [class.opacity-30]="i !== index()"
                                            >{{
                                                !is_valid
                                                    ? 'error'
                                                    : i === index()
                                                      ? 'play_arrow'
                                                      : 'not_started'
                                            }}</icon
                                        >
                                    </div>
                                </div>
                                <div class="flex w-1/2 flex-1 flex-col">
                                    <div class="truncate">{{ item.name }}</div>
                                    <div
                                        class="flex items-center gap-1 text-xs"
                                    >
                                        <icon
                                            class="bg-base-300 text-base-400 rounded text-base"
                                            [matTooltip]="item.type"
                                            matTooltipPosition="right"
                                            >{{ mediaTypeIcon(item) }}</icon
                                        >
                                        <div class="text-base-300 flex-1">
                                            {{ item.playlist_name }}
                                        </div>
                                        @if (isCachedMedia(item)) {
                                            <icon
                                                data-testid="cached-media-icon"
                                                class="text-success text-base"
                                                matTooltip="Cached"
                                                matTooltipPosition="right"
                                                >offline_pin</icon
                                            >
                                        }
                                    </div>
                                </div>
                                <div
                                    class="bg-info text-info-content rounded-sm px-2 py-1 font-mono text-xs"
                                >
                                    {{ item.duration / 1000 | mediaDuration }}
                                </div>
                            </button>
                        }
                    </div>
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

    public setPlaylistItem(index: number) {
        this.selected.emit(index);
    }
}
