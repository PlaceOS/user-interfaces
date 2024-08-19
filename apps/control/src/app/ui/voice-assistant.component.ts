import { Component, Input, SimpleChanges } from '@angular/core';
import { VoiceAssistantService } from './voice-assistant.service';

@Component({
    selector: 'voice-assistant',
    template: `
        <div
            class="h-12 w-12 rounded-full m-4 flex items-center justify-center overflow-visible"
            [class.bg-base-400]="!active"
            [class.bg-success]="active"
            [class.bg-error]="error.speech_recognition"
        >
            <span
                *ngIf="active"
                class="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-success opacity-75"
            ></span>
            <app-icon class="text-2xl">{{
                error.speech_recognition ? 'mic_off' : 'mic'
            }}</app-icon>
            <button
                matRipple
                class="absolute inset-0 opacity-0"
                (click)="activate()"
            ></button>
        </div>
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
    public readonly activate = () => this._service.activate();

    public get active() {
        return this._service.active;
    }

    public get error() {
        return this._service.error;
    }

    constructor(private _service: VoiceAssistantService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.system_id && this.system_id) {
            this._service.setBinding(this.system_id);
        }
    }
}
