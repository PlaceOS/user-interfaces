import { CommonModule } from '@angular/common';
import { Component, SimpleChanges, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from '@placeos/components';
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
                [class.bg-error]="(error | async)?.speech_recognition"
            >
                @if (active | async) {
                    <span
                        class="bg-success absolute inline-flex h-10 w-10 animate-ping rounded-full opacity-75"
                    ></span>
                }
                <icon class="text-2xl">{{
                    (error | async)?.speech_recognition ? 'mic_off' : 'mic'
                }}</icon>
                <button
                    matRipple
                    class="absolute inset-0 opacity-0"
                    (click)="activate(); $event.stopPropagation()"
                ></button>
            </div>
            @if ((active | async) && (progress | async)) {
                <div
                    class="bg-info text-info-content absolute top-1/2 left-2 max-w-[30vw] -translate-x-full -translate-y-1/2 rounded-xl p-2 text-xs shadow-sm"
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
    imports: [CommonModule, MatRippleModule, IconComponent],
})
export class VoiceAssistantComponent {
    private _service = inject(VoiceAssistantService);

    public readonly system_id = input<string>(undefined);
    public readonly enabled = input<boolean>(undefined);
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
        const system_id = this.system_id();
        if (changes.system_id && system_id) {
            this._service.setBinding(system_id);
        }
        const enabled = this.enabled();
        if (changes.enabled && typeof enabled === 'boolean') {
            this._service.setEnabled(enabled);
        }
    }
}
