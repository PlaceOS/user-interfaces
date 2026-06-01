import { Component, model, output } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

import {
    IconComponent,
    MediaDurationPipe,
    TranslatePipe,
} from '@placeos/components';
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
    selector: 'media-controls',
    template: `
        <div class="flex flex-col items-center justify-center p-2">
            <div
                class="border-base-300 bg-base-100 relative top-2 z-20 w-56 overflow-hidden rounded-full border px-2 py-1"
                [matTooltip]="duration() | mediaDuration"
                matTooltipPosition="above"
            >
                <mat-progress-bar
                    class="overflow-hidden rounded-full"
                    mode="determinate"
                    [value]="progress()"
                ></mat-progress-bar>
                @if (animating()) {
                    <div class="bg-success absolute inset-1 rounded-full"></div>
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
    imports: [
        IconComponent,
        TranslatePipe,
        MatTooltipModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MediaDurationPipe,
    ],
})
export class MediaControlsComponent {
    public readonly animating = model(false);
    public readonly duration = model(0);
    public readonly progress = model(0);
    public readonly muted = model(false);
    public readonly loading = model(false);
    public readonly loop = model<MediaLoop>('NONE');
    public readonly state = model<MediaPlayerState>('PAUSED');
    public readonly shuffle = model(false);
    public readonly event = output<MediaEvent>();
}
