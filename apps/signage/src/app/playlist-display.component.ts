import { Component, input, output } from '@angular/core';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MediaDurationPipe } from 'libs/components/src/lib/media-duration.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { validateMedia } from './media-helpers';
import { MediaPlayerItem } from './types';

@Component({
    selector: 'playlist-display',
    template: `
        <div
            class="flex min-w-[20rem] flex-col space-y-2 overflow-auto rounded-xl border border-base-300 bg-base-100 p-2"
        >
            <div class="flex items-center space-x-4 p-2">
                <h2>{{ 'APP.SIGNAGE.MEDIA_LIST' | translate }}</h2>
                <div
                    class="rounded-full bg-info-light px-2 py-1 text-xs shadow"
                >
                    <div class="text-info">
                        {{
                            'APP.SIGNAGE.PLAYLIST_LENGTH'
                                | translate
                                    : { count: playlist()?.length || 0 }
                                    : playlist()?.length || 0
                        }}
                    </div>
                </div>
            </div>
            @if (playlist().length > 0) {
                <div>
                    @for (item of playlist(); track item.id; let i = $index) {
                        @let is_valid = isValidMedia(item);
                        <button
                            matRipple
                            class="flex w-[20rem] items-center space-x-2 rounded-lg p-2 text-left hover:bg-base-200"
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
                                [class.!bg-error]="!is_valid"
                                [class.!text-error-content]="!is_valid"
                                [matTooltip]="validateMedia(item)"
                                matTooltipPosition="right"
                            >
                                <div
                                    class="relative flex h-7 w-7 items-center justify-center"
                                >
                                    @if (is_valid && i === index()) {
                                        <span
                                            class="absolute z-0 inline-flex h-full w-full animate-ping rounded-full bg-info opacity-75"
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
                                <div class="text-xs opacity-30">
                                    {{ item.playlist_name }}
                                </div>
                            </div>
                            <div
                                class="rounded bg-info px-2 py-1 font-mono text-xs text-info-content"
                            >
                                {{ item.duration / 1000 | mediaDuration }}
                            </div>
                        </button>
                    }
                </div>
                <div class="flex flex-col justify-end">
                    <div
                        class="rounded-lg bg-base-300 p-2 text-center text-xs opacity-30"
                    >
                        {{ 'APP.SIGNAGE.MEDIA_LIST_END' | translate }}
                    </div>
                </div>
            } @else {
                <div class="flex flex-col justify-end">
                    <div
                        class="rounded-lg bg-base-300 p-16 text-center text-xs opacity-30"
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

    public isValidMedia(item: MediaPlayerItem): boolean {
        return validateMedia(item) === '';
    }
}
