import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    input,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from '@placeos/components';
import { VoiceAssistantService } from './voice-assistant.service';

@Component({
    selector: 'voice-assistant',
    template: `
        @if (available()) {
            <div
                class="m-4 flex h-12 w-12 items-center justify-center overflow-visible rounded-full"
                [class.bg-base-400]="!active()"
                [class.bg-success]="active()"
                [class.bg-error]="error()?.speech_recognition"
            >
                @if (active()) {
                    <span
                        class="bg-success absolute inline-flex h-10 w-10 animate-ping rounded-full opacity-75"
                    ></span>
                }
                <icon class="text-2xl">{{
                    error()?.speech_recognition ? 'mic_off' : 'mic'
                }}</icon>
                <button
                    matRipple
                    class="absolute inset-0 opacity-0"
                    (click)="activate(); $event.stopPropagation()"
                ></button>
            </div>
            @if (active() && progress()) {
                <div
                    class="bg-info text-info-content absolute top-1/2 left-2 max-w-[30vw] -translate-x-full -translate-y-1/2 rounded-xl p-2 text-xs shadow-sm"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">{{
                            icons[progress()?.function] || 'info'
                        }}</icon>
                        <p class="truncate pr-4 text-sm">
                            {{
                                progress()?.message ||
                                    progress()?.function ||
                                    'Empty'
                            }}
                        </p>
                    </div>
                </div>
            }
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatRippleModule, IconComponent],
})
export class VoiceAssistantComponent {
    private _service = inject(VoiceAssistantService);

    public readonly system_id = input<string>(undefined);
    public readonly enabled = input<boolean>(undefined);
    public readonly activate = () => this._service.activate();
    public readonly active = toSignal(this._service.active, {
        initialValue: false,
    });
    public readonly progress = toSignal(this._service.progress, {
        initialValue: undefined,
    });
    public readonly error = toSignal(this._service.error, {
        initialValue: {} as Record<string, string | boolean>,
    });
    public readonly service_enabled = toSignal(this._service.enabled, {
        initialValue: false,
    });
    public readonly available = computed(
        () => !this.error()?.speech_recognition && this.service_enabled(),
    );

    public readonly icons = {
        list_function_schemas: 'help',
        call_function: 'settings',
        task_complete: 'check_circle',
    };

    constructor() {
        effect(() => {
            const system_id = this.system_id();
            if (system_id) this._service.setBinding(system_id);
        });

        effect(() => {
            const enabled = this.enabled();
            if (typeof enabled === 'boolean') this._service.setEnabled(enabled);
        });
    }
}
