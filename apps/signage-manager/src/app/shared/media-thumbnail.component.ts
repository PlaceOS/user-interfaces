import {
    AfterViewInit,
    Component,
    computed,
    ElementRef,
    inject,
    input,
    OnDestroy,
    output,
    signal,
} from '@angular/core';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';
import { type PlaylistItem } from '@placeos/ts-client';
import {
    playlistMediaIcon,
    playlistMediaThumbnailUrl,
} from '../signage-playlist.util';

@Component({
    selector: 'media-thumbnail',
    template: `
        @if (in_view() && thumbnail_url()) {
            <img
                auth
                [source]="thumbnail_url()"
                alt=""
                class="flex h-full w-full items-center justify-center text-xs"
                [class.object-cover]="cover()"
                [class.object-contain]="!cover()"
                (load)="onLoad($event)"
            />
        } @else {
            <div class="flex h-full w-full items-center justify-center">
                <icon class="text-4xl opacity-30">{{ media_icon() }}</icon>
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
export class MediaThumbnailComponent implements AfterViewInit, OnDestroy {
    private readonly _element = inject(ElementRef<HTMLElement>);
    private _observer?: IntersectionObserver;

    public readonly item = input.required<PlaylistItem>();
    public readonly cover = input(false);
    /** Width over height of the thumbnail image, after it loads */
    public readonly aspect_ratio = output<number>();
    public readonly in_view = signal(false);
    public readonly thumbnail_url = computed(() =>
        playlistMediaThumbnailUrl(this.item()),
    );
    public readonly media_icon = computed(() => playlistMediaIcon(this.item()));

    public onLoad(event: Event) {
        const { naturalWidth, naturalHeight } =
            event.target as HTMLImageElement;
        if (naturalWidth > 0 && naturalHeight > 0) {
            this.aspect_ratio.emit(naturalWidth / naturalHeight);
        }
    }

    public ngAfterViewInit() {
        if (typeof IntersectionObserver === 'undefined') {
            this.in_view.set(true);
            return;
        }
        // Keep the image once shown, so scrolling back does not swap it for
        // the icon while the cached image loads again.
        this._observer = new IntersectionObserver((entries) => {
            if (!entries.some((entry) => entry.isIntersecting)) return;
            this.in_view.set(true);
            this._observer?.disconnect();
        });
        this._observer.observe(this._element.nativeElement);
    }

    public ngOnDestroy() {
        this._observer?.disconnect();
    }
}
