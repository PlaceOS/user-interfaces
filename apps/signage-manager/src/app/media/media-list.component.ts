import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AuthenticatedImageDirective,
    IconComponent,
    MediaDurationPipe,
} from '@placeos/components';
import { SignageMedia } from '@placeos/ts-client';
import { SignageService } from '../signage.service';

@Component({
    selector: 'media-list',
    template: `
        @if (media().length > 0) {
            <div
                class="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
                @for (media_item of media(); track media_item.id) {
                    <div
                        class="border-base-300 bg-base-100 relative flex flex-col items-center justify-center rounded-lg border p-3"
                    >
                        <div
                            class="bg-base-200 relative h-36 w-full overflow-hidden rounded-lg"
                        >
                            @if (media_item.media_type === 'webpage') {
                                <div
                                    class="flex h-full w-full items-center justify-center"
                                >
                                    <icon class="text-8xl opacity-30"
                                        >http</icon
                                    >
                                </div>
                            } @else if (media_item.thumbnail_url) {
                                <img
                                    auth
                                    [source]="media_item.thumbnail_url"
                                    class="absolute -inset-px rounded-lg object-contain"
                                />
                            } @else {
                                <div
                                    class="flex h-full w-full items-center justify-center"
                                >
                                    <icon class="text-8xl opacity-30">{{
                                        media_item.media_type === 'video'
                                            ? 'video_library'
                                            : 'image'
                                    }}</icon>
                                </div>
                            }

                            <div
                                class="absolute top-1 left-1 rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                [class.bg-info]="
                                    media_item.media_type === 'video'
                                "
                                [class.text-info-content]="
                                    media_item.media_type === 'video'
                                "
                                [class.bg-warning]="
                                    media_item.media_type === 'image'
                                "
                                [class.text-warning-content]="
                                    media_item.media_type === 'image'
                                "
                                [class.bg-success]="
                                    media_item.media_type === 'webpage'
                                "
                                [class.text-success-content]="
                                    media_item.media_type === 'webpage'
                                "
                            >
                                {{
                                    media_item.media_type === 'image'
                                        ? 'Image'
                                        : media_item.media_type === 'webpage'
                                          ? 'Webpage'
                                          : 'Video'
                                }}
                            </div>
                            @if (media_item.play_time) {
                                <div
                                    class="bg-info text-info-content absolute right-1 bottom-1 rounded-lg px-2 py-1 font-mono text-xs capitalize"
                                >
                                    {{
                                        media_item.play_time / 1000
                                            | mediaDuration
                                    }}
                                </div>
                            }
                        </div>
                        <div class="relative top-1 w-full">
                            <div
                                class="text-base-content w-full truncate"
                                [matTooltip]="media_item.name"
                            >
                                {{ media_item.name }}
                            </div>
                        </div>
                    </div>
                }
            </div>
        } @else {
            <div
                class="mx-auto flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
            >
                <icon class="text-6xl">hide_image</icon>
                <p>No media items found.</p>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatTooltipModule,
        IconComponent,
        AuthenticatedImageDirective,
        MediaDurationPipe,
    ],
})
export class MediaListComponent {
    private readonly _service = inject(SignageService);

    public readonly media = toSignal(this._service.filtered_media, {
        initialValue: [] as SignageMedia[],
    });
    public readonly previewFile = (event: Event) =>
        this._service.previewFileFromInput(event);
}
