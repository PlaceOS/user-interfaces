import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { FOCUS_DURATIONS, FocusTimerService } from './focus-timer.service';

@Component({
    selector: 'landing-focus-timer',
    template: `
        <div
            class="border-base-300 bg-base-100 space-y-3 rounded-lg border p-4"
        >
            <div>
                <h3 class="text-lg font-medium">
                    {{ 'APP.WORKPLACE.FOCUS_TIMER_TITLE' | translate }}
                </h3>
                <p class="text-sm opacity-60">
                    {{ 'APP.WORKPLACE.FOCUS_TIMER_HINT' | translate }}
                </p>
            </div>
            <div
                role="timer"
                class="py-2 text-center text-5xl font-medium tabular-nums"
            >
                {{ time() }}
            </div>
            <div
                class="bg-base-200 flex w-full items-center space-x-1 rounded p-1"
            >
                @for (minutes of durations; track minutes) {
                    <button
                        btn
                        matRipple
                        name="focus-duration"
                        class="hover:bg-base-300 min-h-10 flex-1 px-1 text-sm"
                        [class.clear]="duration() !== minutes"
                        [attr.aria-pressed]="duration() === minutes"
                        (click)="timer.setDuration(minutes)"
                    >
                        {{
                            'APP.WORKPLACE.FOCUS_TIMER_MINUTES'
                                | translate: { minutes }
                        }}
                    </button>
                }
            </div>
            <div class="flex items-center space-x-2">
                <button
                    btn
                    matRipple
                    name="toggle-focus-timer"
                    class="flex-1 space-x-2"
                    (click)="running() ? timer.pause() : timer.start()"
                >
                    <icon class="text-xl">{{
                        running() ? 'pause' : 'play_arrow'
                    }}</icon>
                    <div>{{ action() | translate }}</div>
                </button>
                <button
                    icon
                    matRipple
                    name="reset-focus-timer"
                    [disabled]="!started()"
                    [class.opacity-30]="!started()"
                    [matTooltip]="'APP.WORKPLACE.FOCUS_TIMER_RESET' | translate"
                    [attr.aria-label]="
                        'APP.WORKPLACE.FOCUS_TIMER_RESET' | translate
                    "
                    (click)="timer.reset()"
                >
                    <icon>restart_alt</icon>
                </button>
            </div>
        </div>
    `,
    imports: [MatRippleModule, MatTooltipModule, IconComponent, TranslatePipe],
})
export class LandingFocusTimerComponent {
    public readonly timer = inject(FocusTimerService);

    public readonly durations = FOCUS_DURATIONS;
    public readonly duration = this.timer.duration;
    public readonly running = this.timer.running;
    public readonly started = this.timer.started;
    /** Time that is left, as minutes and seconds */
    public readonly time = computed(() => {
        const remaining = this.timer.remaining();
        const seconds = `${remaining % 60}`.padStart(2, '0');
        return `${`${Math.floor(remaining / 60)}`.padStart(2, '0')}:${seconds}`;
    });
    /** Translation key for the action of the main button */
    public readonly action = computed(() => {
        if (this.running()) return 'APP.WORKPLACE.FOCUS_TIMER_PAUSE';
        return this.started()
            ? 'APP.WORKPLACE.FOCUS_TIMER_RESUME'
            : 'APP.WORKPLACE.FOCUS_TIMER_START';
    });
}
