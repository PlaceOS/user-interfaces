import { Component, Input, SimpleChanges, inject } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { VoiceAssistantService } from './voice-assistant.service';

@Component({
    selector: 'voice-assistant',
    template: `
        @if (available | async) {
            <div
                class="m-4 flex h-12 w-12 items-center justify-center overflow-visible rounded-full"
                [class.bg-base-400]="!(active | async)"
                [class.bg-success]="active | async"
                [class.bg-error]="error.speech_recognition"
            >
                @if (active | async) {
                    <span
                        class="absolute inline-flex h-10 w-10 animate-ping rounded-full bg-success opacity-75"
                    ></span>
                }
                <icon class="text-2xl">{{
                    error.speech_recognition ? 'mic_off' : 'mic'
                }}</icon>
                <button
                    matRipple
                    class="absolute inset-0 opacity-0"
                    (click)="activate(); $event.stopPropagation()"
                ></button>
            </div>
            @if ((active | async) && (progress | async)) {
                <div
                    class="absolute left-2 top-1/2 max-w-[30vw] -translate-x-full -translate-y-1/2 rounded-xl bg-info p-2 text-xs text-info-content shadow"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">{{
                            icons[(progress | async)?.function] || 'info'
                        }}</icon>
                        <p class="truncate pr-4 text-sm">
                            {{
                                (progress | async)?.message ||
                                    (progress | async)?.function ||
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
    standalone: false,
})
export class VoiceAssistantComponent {
    private _service = inject(VoiceAssistantService);

    @Input() public system_id: string;
    @Input() public enabled: boolean;
    public readonly activate = () => this._service.activate();
    public readonly active = this._service.active;
    public readonly progress = this._service.progress;
    public readonly error = this._service.error;
    public readonly available = combineLatest([
        this._service.error,
        this._service.enabled,
    ]).pipe(map(([err, enabled]) => !err.speech_recognition && enabled));

    public readonly icons = {
        list_function_schemas: 'help',
        call_function: 'settings',
        task_complete: 'check_circle',
    };

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.system_id && this.system_id) {
            this._service.setBinding(this.system_id);
        }
        if (changes.enabled && typeof this.enabled === 'boolean') {
            this._service.setEnabled(this.enabled);
        }
    }
}
