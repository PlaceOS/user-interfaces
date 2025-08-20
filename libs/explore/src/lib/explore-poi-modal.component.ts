import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';

export interface PointOfInterest {
    id: string;
    name: string;
    level_id: string;
    location: string | [number, number];
    short_link_id: string;
    qr_code?: string;
    qr_link?: string;
    can_search?: boolean;
    image?: string;
    media_type?: 'audio' | 'video';
    media_url?: string;
    extra_details?: [string, string][];
    zone_id?: string;
}

@Component({
    selector: `explore-poi-modal`,
    template: `
        <div
            class="h-screen w-full min-w-[20rem] max-w-[28rem] overflow-auto rounded bg-base-100 sm:h-auto"
        >
            <header>
                <h2>{{ item.name }}</h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main>
                @if (
                    !item.image &&
                    !item.media_url &&
                    !item.extra_details?.length
                ) {
                    <p
                        class="m-4 flex h-[calc(100vh-5.75rem)] w-[calc(100%-2rem)] items-center justify-center rounded-lg bg-base-200 p-8 text-center opacity-50 sm:h-64"
                    >
                        No available details for this point of interest.
                    </p>
                }
                @if (item.image) {
                    <img
                        class="h-48 w-full bg-base-300 object-contain"
                        [src]="item.image"
                        [alt]="item.name"
                    />
                }
                @if (item.media_url) {
                    <div class="pointer-events-none absolute opacity-0">
                        @if (item.media_type === 'video') {
                            <video
                                #media_el
                                class="h-full w-full"
                                auth
                                [source]="item.media_url"
                                controls
                            ></video>
                        } @else {
                            <audio
                                #media_el
                                class="h-full w-full"
                                auth
                                [source]="item.media_url"
                                controls
                            ></audio>
                        }
                    </div>
                    <div
                        class="flex w-full flex-col items-center justify-center space-y-2 border-t border-base-200 p-4"
                    >
                        <div class="relative">
                            @if (playing()) {
                                <div
                                    class="absolute left-2 top-2 h-8 w-8 animate-ping rounded-full bg-info"
                                ></div>
                            }
                            <button
                                icon
                                matRipple
                                class="relative h-12 w-12 bg-base-200"
                                (click)="togglePlay()"
                            >
                                <icon>{{
                                    playing() ? 'stop' : 'volume_up'
                                }}</icon>
                            </button>
                        </div>
                        <p class="text-xs font-medium">Read Aloud</p>
                    </div>
                }
                @if (item.extra_details?.length) {
                    <div class="text-sm">
                        @for (details of item.extra_details; track $index) {
                            <div
                                class="flex space-x-4 border-t border-base-200 p-4"
                            >
                                <div class="w-20 min-w-20 text-info">
                                    {{ details?.[0] }}
                                </div>
                                <div>{{ details?.[1] }}</div>
                            </div>
                        }
                    </div>
                }
            </main>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatRippleModule,
        MatDialogModule,
        IconComponent,
        AuthenticatedImageDirective,
    ],
})
export class ExplorePointOfInterestModalComponent {
    public readonly item: PointOfInterest = inject(MAT_DIALOG_DATA);
    public readonly playing = signal(false);

    private _media_el =
        viewChild<ElementRef<HTMLVideoElement | HTMLAudioElement>>('media_el');
    private _on_ended = () => {
        this.playing.set(false);
        this._media_el()?.nativeElement.removeEventListener(
            'ended',
            this._on_ended,
        );
    };

    public togglePlay() {
        const el = this._media_el()?.nativeElement;
        if (!el) return;

        if (this.playing()) {
            el.pause();
        } else {
            // Listen for the 'ended' event to toggle play state
            el.addEventListener('ended', this._on_ended);
            // Reset the media element's playback time to 0
            el.currentTime = 0;
            el.play();
        }
        this.playing.set(!this.playing());
    }
}
