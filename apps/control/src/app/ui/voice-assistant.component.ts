import { Component, Input, SimpleChanges } from '@angular/core';
import { VoiceAssistantService } from './voice-assistant.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ControlStateService } from '../control-state.service';

@Component({
    selector: 'voice-assistant',
    template: `
        <ng-container *ngIf="available | async">
            <div
                class="h-12 w-12 rounded-full m-4 flex items-center justify-center overflow-visible"
                [class.bg-base-400]="!(active | async)"
                [class.bg-success]="active | async"
                [class.bg-error]="error.speech_recognition"
            >
                <span
                    *ngIf="active | async"
                    class="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-success opacity-75"
                ></span>
                <app-icon class="text-2xl">{{
                    error.speech_recognition ? 'mic_off' : 'mic'
                }}</app-icon>
                <button
                    matRipple
                    class="absolute inset-0 opacity-0"
                    (click)="activate(); $event.stopPropagation()"
                ></button>
            </div>
            <div
                class="absolute max-w-[30vw] text-xs bg-info text-info-content top-1/2 left-2 -translate-x-full -translate-y-1/2 rounded-xl shadow p-2"
                *ngIf="(active | async) && (progress | async)"
            >
                <div class=" flex items-center space-x-2">
                    <app-icon class="text-2xl">{{
                        icons[(progress | async)?.function] || 'info'
                    }}</app-icon>
                    <p class="text-sm truncate pr-4">
                        {{
                            (progress | async)?.message ||
                                (progress | async)?.function ||
                                'Empty'
                        }}
                    </p>
                </div>
            </div>
        </ng-container>
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
})
export class VoiceAssistantComponent {
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

    constructor(private _service: VoiceAssistantService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.system_id && this.system_id) {
            this._service.setBinding(this.system_id);
        }
        if (changes.enabled && typeof this.enabled === 'boolean') {
            this._service.setEnabled(this.enabled);
        }
    }
}
