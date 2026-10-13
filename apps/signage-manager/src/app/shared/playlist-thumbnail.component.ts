import {
    AfterViewInit,
    Component,
    ElementRef,
    inject,
    input,
    OnDestroy,
    signal,
} from '@angular/core';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';
import { SignagePlaylist } from '@placeos/ts-client';
import { SignagePlaylistService } from '../playlists/signage-playlist.service';

@Component({
    selector: 'playlist-thumbnail',
    template: `
        @if (in_view() && playlist_thumbnail_media()[playlist().id]?.length) {
            @for (
                media of playlist_thumbnail_media()[playlist().id];
                track media;
                let i = $index;
                let len = $count
            ) {
                <img
                    auth
                    [source]="media"
                    alt=""
                    class="border-base-300 bg-base-200 absolute h-9 w-9 rounded-sm border object-cover shadow"
                    [style.top]="
                        0.3 - (len - 1) * 0.125 + (len - 1 - i) * 0.25 + 'rem'
                    "
                    [style.left]="
                        0.3 - (len - 1) * 0.125 + (len - 1 - i) * 0.25 + 'rem'
                    "
                    [style.z-index]="i"
                />
            }
        } @else {
            <div
                class="text-base-content/35 flex h-full w-full items-center justify-center"
            >
                <icon class="text-2xl">playlist_play</icon>
            </div>
        }
    `,
    styles: `
        :host {
            display: block;
        }
    `,
    imports: [AuthenticatedImageDirective, IconComponent],
})
export class PlaylistThumbnailComponent implements AfterViewInit, OnDestroy {
    private readonly _element = inject(ElementRef<HTMLElement>);
    private readonly _playlist_service = inject(SignagePlaylistService);
    private _observer?: IntersectionObserver;

    public readonly playlist = input.required<SignagePlaylist>();
    public readonly in_view = signal(false);
    public readonly playlist_thumbnail_media =
        this._playlist_service.playlist_thumbnail_media;

    public ngAfterViewInit() {
        if (typeof IntersectionObserver === 'undefined') {
            this._showThumbnail();
            return;
        }
        this._observer = new IntersectionObserver((entries) => {
            const in_view = entries.some((entry) => entry.isIntersecting);
            this.in_view.set(in_view);
            if (in_view)
                this._playlist_service.queuePlaylistMeta(this.playlist());
        });
        this._observer.observe(this._element.nativeElement);
    }

    public ngOnDestroy() {
        this._observer?.disconnect();
    }

    private _showThumbnail() {
        this.in_view.set(true);
        this._playlist_service.queuePlaylistMeta(this.playlist());
    }
}
