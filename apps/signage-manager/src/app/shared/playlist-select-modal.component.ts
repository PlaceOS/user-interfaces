import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { IconComponent } from '@placeos/components';
import { SignagePlaylist } from '@placeos/ts-client';
import { SignagePlaylistService } from '../playlists/signage-playlist.service';
import { byName, PagedSearch } from './paged-search';
import {
    PickerItemDirective,
    PickerModalComponent,
} from './picker-modal.component';

@Component({
    selector: 'playlist-select-modal',
    template: `
        <picker-modal
            heading="SIGNAGE_MANAGER.ADD_TO_PLAYLIST"
            close_label="SIGNAGE_MANAGER.CLOSE_ADD_PLAYLIST"
            search_label="SIGNAGE_MANAGER.SEARCH_PLAYLISTS"
            empty_icon="playlist_play"
            empty_label="SIGNAGE_MANAGER.NO_PLAYLISTS"
            [list]="list"
        >
            <ng-template [pickerItem]="list" let-playlist>
                <button
                    type="button"
                    matRipple
                    class="border-base-300 hover:bg-base-200 z-0 flex h-16 w-full items-center space-x-2 rounded-sm border p-2 text-left"
                    [mat-dialog-close]="playlist.id"
                >
                    <icon class="text-base-content/60 shrink-0 text-2xl"
                        >playlist_play</icon
                    >
                    <div class="min-w-0 flex-1">
                        <div class="truncate">{{ playlist.name }}</div>
                        @if (playlist.description) {
                            <div class="text-base-content/70 truncate text-xs">
                                {{ playlist.description }}
                            </div>
                        }
                    </div>
                </button>
            </ng-template>
        </picker-modal>
    `,
    imports: [
        MatRippleModule,
        MatDialogModule,
        IconComponent,
        PickerModalComponent,
        PickerItemDirective,
    ],
})
export class PlaylistSelectModalComponent {
    private readonly _playlist_service = inject(SignagePlaylistService);

    public readonly list = new PagedSearch<SignagePlaylist>(
        (search) => this._playlist_service.queryPlaylists(search),
        byName,
    );
}
