import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
                <p class="mb-2 text-xs opacity-60">
                    Drag media onto a playlist to add it
                </p>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript -mx-2 w-[calc(100%+1rem)]"
                >
                    <input
                        matInput
                        placeholder="Search playlists"
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
                    />
                </mat-form-field>
            </div>
            <div class="flex-1 overflow-auto p-2">
                @if (filtered_playlists()?.length) {
                    @for (playlist of filtered_playlists(); track playlist.id) {
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
    imports: [
        DragDropModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
    ],
})
export class PlaylistSidebarComponent {
    private readonly _service = inject(SignageService);

    private readonly _playlists = toSignal(this._service.playlists, {
        initialValue: [] as SignagePlaylist[],
    });

    public readonly search = signal('');
    public readonly filtered_playlists = computed(() => {
        const term = this.search().toLowerCase();
        const list = this._playlists();
        if (!term) return list;
        return list.filter((p) => p.name.toLowerCase().includes(term));
    });

    public async onDrop(playlist: SignagePlaylist, event: CdkDragDrop<any>) {
        const media = event.previousContainer.data[event.previousIndex];
        if (!playlist?.id || !media?.id) return;
        await this._service.addMediaToPlaylist(playlist.id, media.id);
    }
}
