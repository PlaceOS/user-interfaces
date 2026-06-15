import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    input,
    model,
    OnDestroy,
    OnInit,
    output,
    viewChild,
} from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

import {
    IconComponent,
    MediaDurationPipe,
    TranslatePipe,
} from '@placeos/components';
import { time } from './media-helpers';
import { MediaPlayerState } from './types';

type MediaLoop = 'NONE' | 'ONE' | 'ALL';
type MediaEvent =
    | 'PLAY'
    | 'PAUSE'
    | 'PREVIOUS'
    | 'NEXT'
    | 'LOOP'
    | 'SHUFFLE'
    | 'MUTE';

@Component({
    selector: 'media-progress-bar',
    template: `
        <div
            class="bg-base-300 relative h-1 overflow-hidden rounded-full"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            [attr.aria-valuenow]="progress()"
        >
            <div #bar class="bg-primary absolute inset-0 origin-left"></div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
            }
        `,
    ],
})
export class MediaProgressBarComponent implements OnInit, OnDestroy {
    public readonly progress = input(0);
    public readonly playback_start = input(0);
    public readonly playback_duration = input(0);
    public readonly state = input<MediaPlayerState>('PAUSED');
    public readonly waiting = input(false);

    private readonly _bar = viewChild<ElementRef<HTMLDivElement>>('bar');
    private _animation_frame = 0;
    private _destroyed = false;

    public ngOnInit() {
        this._updateProgress();
    }

    public ngOnDestroy() {
        this._destroyed = true;
        cancelAnimationFrame(this._animation_frame);
    }

    private _updateProgress = () => {
        if (this._destroyed) return;
        const progress = Math.min(100, Math.max(0, this._progress()));
        const bar = this._bar()?.nativeElement;
        if (bar) bar.style.transform = `scaleX(${progress / 100})`;
        let synchronous_frame = true;
        this._animation_frame = requestAnimationFrame(() => {
            if (!synchronous_frame) this._updateProgress();
        });
        synchronous_frame = false;
    };

    private _progress() {
        const playback_start = this.playback_start();
        const playback_duration = this.playback_duration();
        if (
            this.state() === 'PLAYING' &&
            playback_start > 0 &&
            playback_duration > 0 &&
            !this.waiting()
        ) {
            return ((time() - playback_start) / playback_duration) * 100;
        }
        return this.progress() || 0;
    }
}

@Component({
    selector: 'media-controls',
    template: `
        <div class="flex flex-col items-center justify-center p-2">
            <div
                class="border-base-300 bg-base-100 relative top-2 z-20 w-56 overflow-hidden rounded-full border px-2 py-1"
                [matTooltip]="duration() | mediaDuration"
                matTooltipPosition="above"
            >
                <media-progress-bar
                    [progress]="progress()"
                    [playback_start]="playback_start()"
                    [playback_duration]="playback_duration()"
                    [state]="state()"
                    [waiting]="loading()"
                />
                @if (animating()) {
                    <div
                        class="bg-success absolute inset-x-2 inset-y-1 rounded-full"
                    ></div>
                }
            </div>
            <div
                class="border-base-300 bg-base-100 flex items-center space-x-2 overflow-hidden rounded-full border p-2 text-lg"
            >
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="event.emit('PREVIOUS')"
                    [matTooltip]="'APP.SIGNAGE.PREVIOUS' | translate"
                >
                    <icon>skip_previous</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200 relative"
                    (click)="event.emit(state() ? 'PAUSE' : 'PLAY')"
                    [matTooltip]="
                        (state() === 'PLAYING'
                            ? 'APP.SIGNAGE.PLAY'
                            : 'APP.SIGNAGE.PAUSE'
                        ) | translate
                    "
                >
                    <icon [class.opacity-30]="loading()">{{
                        state() === 'PLAYING' ? 'pause' : 'play_arrow'
                    }}</icon>
                    @if (loading()) {
                        <mat-spinner
                            class="absolute inset-0 m-auto"
                            [diameter]="24"
                        ></mat-spinner>
                    }
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="event.emit('NEXT')"
                    [matTooltip]="'APP.SIGNAGE.NEXT' | translate"
                >
                    <icon>skip_next</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="event.emit('MUTE')"
                    [matTooltip]="
                        'APP.SIGNAGE.VOLUME'
                            | translate
                                : {
                                      state:
                                          (muted() ? 'COMMON.OFF' : 'COMMON.ON')
                                          | translate,
                                  }
                    "
                >
                    <icon>{{ muted() ? 'volume_off' : 'volume_up' }}</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="event.emit('LOOP')"
                    [matTooltip]="
                        (loop() === 'ALL'
                            ? 'APP.SIGNAGE.LOOP_ALL'
                            : loop() === 'ONE'
                              ? 'APP.SIGNAGE.LOOP_ONE'
                              : 'APP.SIGNAGE.LOOP_OFF'
                        ) | translate
                    "
                >
                    <icon [class.opacity-30]="loop() === 'NONE'">
                        {{
                            loop() === 'ALL'
                                ? 'repeat'
                                : loop() === 'ONE'
                                  ? 'repeat_one'
                                  : 'repeat'
                        }}
                    </icon>
                </button>
                <button
                    icon
                    matRipple
                    class="hover:bg-base-200"
                    (click)="event.emit('SHUFFLE')"
                    [matTooltip]="
                        'APP.SIGNAGE.SHUFFLE'
                            | translate
                                : {
                                      state:
                                          (shuffle()
                                              ? 'COMMON.ON'
                                              : 'COMMON.OFF'
                                          ) | translate,
                                  }
                    "
                >
                    <icon [class.opacity-30]="!shuffle()"> shuffle </icon>
                </button>
            </div>
        </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        IconComponent,
        TranslatePipe,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MediaDurationPipe,
        MediaProgressBarComponent,
    ],
})
export class MediaControlsComponent {
    public readonly animating = model(false);
    public readonly duration = model(0);
    public readonly progress = model(0);
    public readonly playback_start = model(0);
    public readonly playback_duration = model(0);
    public readonly muted = model(false);
    public readonly loading = model(false);
    public readonly loop = model<MediaLoop>('NONE');
    public readonly state = model<MediaPlayerState>('PAUSED');
    public readonly shuffle = model(false);
    public readonly event = output<MediaEvent>();
}
