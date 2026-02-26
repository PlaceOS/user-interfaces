import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { IconComponent } from '@placeos/components';
import { SignagePlaylist } from '@placeos/ts-client';
import { SignageService } from '../signage.service';

@Component({
    selector: 'playlist-sidebar',
    template: `
        <div
            class="border-base-300 bg-base-100 rounded-ld m-2 hidden h-[calc(100%-1rem)] w-72 shrink-0 flex-col rounded-lg border md:flex"
        >
            <div class="border-base-300 border-b px-4 py-3">
                <h4 class="text-lg font-medium">Playlists</h4>
                <p class="text-xs opacity-60">
                    Drag media onto a playlist to add it
                </p>
            </div>
            <div class="flex-1 overflow-auto p-2">
                @if (playlists()?.length) {
                    @for (playlist of playlists(); track playlist.id) {
                        <div
                            cdkDropList
                            [id]="'playlist-' + $index"
                            [cdkDropListConnectedTo]="['media-list']"
                            [cdkDropListData]="playlist"
                            (cdkDropListDropped)="onDrop(playlist, $event)"
                            class="border-base-300 mb-2 flex items-center gap-3 rounded-lg border p-3 transition-colors"
                        >
                            <icon class="text-base-content/60 shrink-0 text-2xl"
                                >playlist_play</icon
                            >
                            <div class="min-w-0 flex-1">
                                <div class="truncate text-sm font-medium">
                                    {{ playlist.name }}
                                </div>
                                @if (playlist.description) {
                                    <div class="truncate text-xs opacity-50">
                                        {{ playlist.description }}
                                    </div>
                                }
                            </div>
                        </div>
                    }
                } @else {
                    <div
                        class="flex flex-col items-center justify-center p-8 opacity-30"
                    >
                        <icon class="text-4xl">playlist_play</icon>
                        <p class="mt-2 text-sm">No playlists</p>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: contents;
            }

            .cdk-drop-list-dragging,
            .cdk-drop-list-receiving {
                border-color: var(--color-primary) !important;
                background-color: color-mix(
                    in srgb,
                    var(--color-primary) 10%,
                    transparent
                ) !important;
            }
        `,
    ],
    imports: [DragDropModule, IconComponent],
})
export class PlaylistSidebarComponent {
    private readonly _service = inject(SignageService);

    public readonly playlists = toSignal(this._service.playlists, {
        initialValue: [] as SignagePlaylist[],
    });

    public async onDrop(playlist: SignagePlaylist, event: CdkDragDrop<any>) {
        const media = event.previousContainer.data[event.previousIndex];
        if (!playlist?.id || !media?.id) return;
        await this._service.addMediaToPlaylist(playlist.id, media.id);
    }
}
