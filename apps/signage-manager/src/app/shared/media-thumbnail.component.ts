import {
    AfterViewInit,
    Component,
    computed,
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
import { SignageMedia } from '@placeos/ts-client';
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
                [alt]="item().name + ' thumbnail'"
                class="h-full w-full text-xs flex items-center justify-center"
                [class.object-cover]="cover()"
                [class.object-contain]="!cover()"
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

    public readonly item = input.required<SignageMedia>();
    public readonly cover = input(false);
    public readonly in_view = signal(false);
    public readonly thumbnail_url = computed(() =>
        playlistMediaThumbnailUrl(this.item()),
    );
    public readonly media_icon = computed(() => playlistMediaIcon(this.item()));

    public ngAfterViewInit() {
        if (typeof IntersectionObserver === 'undefined') {
            this.in_view.set(true);
            return;
        }
        this._observer = new IntersectionObserver((entries) => {
            this.in_view.set(entries.some((entry) => entry.isIntersecting));
        });
        this._observer.observe(this._element.nativeElement);
    }

    public ngOnDestroy() {
        this._observer?.disconnect();
    }
}
