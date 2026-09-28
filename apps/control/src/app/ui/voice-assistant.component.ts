import {
    Component,
    ElementRef,
    computed,
    effect,
    inject,
    input,
    viewChildren,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from '@placeos/components';
import { MIC_LEVEL_BARS } from './mic-levels';
import { VoiceAssistantService } from './voice-assistant.service';

const PROGRESS_ICONS: Record<string, string> = {
    list_function_schemas: 'help',
    call_function: 'settings',
    task_complete: 'check_circle',
};

/**
 * Mic button for the room voice assistant.
 * Tap to give a command without the wake phrase. Tap again to cancel.
 * Shows what the assistant hears and what it is doing.
 */
@Component({
    selector: 'voice-assistant',
    template: `
        @if (available()) {
            <div
                class="relative m-4 flex h-12 w-12 items-center justify-center overflow-visible rounded-full transition-colors"
                [class.bg-base-400]="state() === 'idle'"
                [class.bg-success]="state() === 'listening'"
                [class.text-success-content]="state() === 'listening'"
                [class.bg-info]="state() === 'processing'"
                [class.text-info-content]="state() === 'processing'"
            >
                @if (show_bars()) {
                    <div
                        class="relative flex h-6 items-center space-x-0.5"
                        aria-hidden="true"
                    >
                        @for (bar of bars; track $index) {
                            <span
                                #bar
                                class="block h-full w-1 rounded-full bg-current"
                                style="transform: scaleY(0.15)"
                            ></span>
                        }
                    </div>
                } @else {
                    @if (state() === 'listening') {
                        <span
                            class="bg-success absolute inline-flex h-10 w-10 animate-ping rounded-full opacity-75"
                        ></span>
                    }
                    <icon
                        class="relative text-2xl"
                        [class.animate-pulse]="state() === 'processing'"
                        >{{
                            state() === 'processing' ? 'graphic_eq' : 'mic'
                        }}</icon
                    >
                }
                <button
                    matRipple
                    class="absolute inset-0 rounded-full opacity-0"
                    [attr.aria-label]="
                        state() === 'listening'
                            ? 'Stop listening'
                            : 'Give a voice command'
                    "
                    [attr.aria-pressed]="state() === 'listening'"
                    (click)="activate(); $event.stopPropagation()"
                ></button>
                @if (status(); as status) {
                    <div
                        class="bg-base-100 text-base-content absolute top-1/2 right-full mr-2 flex w-max max-w-[30vw] -translate-y-1/2 items-center space-x-2 rounded-xl p-2 shadow-sm"
                        role="status"
                        aria-live="polite"
                    >
                        <icon class="text-2xl">{{ status.icon }}</icon>
                        <p class="line-clamp-2 pr-2 text-sm">
                            {{ status.message }}
                        </p>
                    </div>
                }
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                align-items: center;
                justify-content: center;
            }
        `,
    ],
    imports: [MatRippleModule, IconComponent],
})
export class VoiceAssistantComponent {
    private _service = inject(VoiceAssistantService);

    public readonly system_id = input<string>(undefined);
    public readonly enabled = input<boolean>(undefined);
    public readonly activate = () => this._service.activate();
    public readonly state = this._service.state;
    public readonly bars = new Array(MIC_LEVEL_BARS);
    /** Shows live microphone bars while listening. Falls back to a pulse without audio. */
    public readonly show_bars = computed(
        () => this.state() === 'listening' && this._service.levels_ready(),
    );
    private readonly _bar_els = viewChildren<ElementRef<HTMLElement>>('bar');
    public readonly available = computed(
        () =>
            !this._service.error()?.speech_recognition &&
            this._service.enabled(),
    );
    /** Text bubble next to the mic. Hidden while idle. */
    public readonly status = computed(() => {
        const text = this._service.current_text();
        switch (this.state()) {
            case 'listening':
                return { icon: 'hearing', message: text || 'Listening...' };
            case 'processing': {
                const progress = this._service.progress();
                return {
                    icon: PROGRESS_ICONS[progress?.function] || 'pending',
                    message: progress?.message || text || 'Working on it...',
                };
            }
            default:
                return null;
        }
    });

    constructor() {
        effect(() => {
            const system_id = this.system_id();
            if (system_id) this._service.setBinding(system_id);
        });

        effect(() => {
            const enabled = this.enabled();
            if (typeof enabled === 'boolean') this._service.setEnabled(enabled);
        });

        // Write bar heights directly each frame to skip change detection
        effect((onCleanup) => {
            const bar_els = this._bar_els();
            if (!this.show_bars() || !bar_els.length) return;
            let frame = 0;
            const draw = () => {
                const levels = this._service.readLevels();
                bar_els.forEach(({ nativeElement }, i) => {
                    const scale = 0.15 + Math.min(1, levels[i]) * 0.85;
                    nativeElement.style.transform = `scaleY(${scale})`;
                });
                frame = requestAnimationFrame(draw);
            };
            frame = requestAnimationFrame(draw);
            onCleanup(() => cancelAnimationFrame(frame));
        });
    }
}
