import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { IconComponent } from '@placeos/components';
import { SignageService } from '../signage.service';
import { NavFooterComponent } from '../shared/nav-footer.component';
import { NavSidebarComponent } from '../shared/nav-sidebar.component';
import { MediaListHeaderComponent } from './media-list-header.component';
import { MediaListComponent } from './media-list.component';
import { PlaylistSidebarComponent } from './playlist-sidebar.component';

@Component({
    selector: 'media-section',
    template: `
        <div
            class="bg-base-200 absolute inset-0 flex flex-col sm:flex-row"
            (window:dragenter)="handleDragEnter($event)"
            (window:dragover)="handleDragOver($event)"
            (window:dragleave)="handleDragLeave($event)"
            (window:drop)="handleDrop($event)"
        >
            <nav-sidebar class="sm:h-full" />
            <div class="flex min-h-0 flex-1 flex-col">
                <media-list-header class="relative z-10" />
                <div class="flex min-h-0 flex-1 flex-row">
                    <main class="relative flex-1 overflow-auto">
                        <media-list
                            class="relative z-0"
                            [playlist_count]="playlists()?.length"
                        />
                        @if (show_dropzone()) {
                            <div
                                class="absolute inset-0 z-20"
                                (dragenter)="handleDragEnter($event)"
                                (dragover)="handleDragOver($event)"
                                (dragleave)="handleDragLeave($event)"
                                (drop)="handleDrop($event)"
                            >
                                <div
                                    class="bg-base-content absolute inset-0 opacity-60"
                                ></div>
                                <div
                                    class="border-base-300 text-base-100 absolute inset-4 flex flex-col items-center justify-center gap-4 rounded-2xl border-4 border-dashed text-center"
                                >
                                    <icon class="text-6xl">cloud_upload</icon>
                                    <div>
                                        <p class="text-lg font-medium">
                                            Drop media to upload
                                        </p>
                                        <p class="text-sm opacity-80">
                                            Images and supported video files
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                    </main>
                    <playlist-sidebar />
                </div>
            </div>
            <nav-footer />
        </div>
    `,
    styles: [``],
    imports: [
        NavSidebarComponent,
        MediaListComponent,
        MediaListHeaderComponent,
        PlaylistSidebarComponent,
        NavFooterComponent,
        IconComponent,
    ],
})
export class MediaSectionComponent {
    private readonly _service = inject(SignageService);
    private _drag_counter = 0;

    public readonly playlists = toSignal(this._service.playlists, {
        initialValue: [],
    });
    public readonly show_dropzone = signal(false);

    public handleDragEnter(event: DragEvent) {
        if (!this.hasDraggedFiles(event)) return;
        event.preventDefault();
        this._drag_counter += 1;
        this.show_dropzone.set(true);
    }

    public handleDragOver(event: DragEvent) {
        if (!this.hasDraggedFiles(event)) return;
        event.preventDefault();
        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = 'copy';
        }
        this.show_dropzone.set(true);
    }

    public handleDragLeave(event: DragEvent) {
        if (!this.show_dropzone() || !this.hasDraggedFiles(event)) return;
        this._drag_counter = Math.max(0, this._drag_counter - 1);
        if (!this._drag_counter || this.isPointerOutsideWindow(event)) {
            this.hideDropzone();
        }
    }

    public async handleDrop(event: DragEvent) {
        if (!this.hasDraggedFiles(event)) return;
        event.preventDefault();
        event.stopPropagation();
        this.hideDropzone();
        await this._service.previewFiles(event.dataTransfer?.files);
    }

    public hideDropzone() {
        this._drag_counter = 0;
        this.show_dropzone.set(false);
    }

    private hasDraggedFiles(event: DragEvent) {
        return Array.from(event.dataTransfer?.types || []).includes('Files');
    }

    private isPointerOutsideWindow(event: DragEvent) {
        return (
            event.clientX <= 0 ||
            event.clientY <= 0 ||
            event.clientX >= window.innerWidth ||
            event.clientY >= window.innerHeight
        );
    }
}
