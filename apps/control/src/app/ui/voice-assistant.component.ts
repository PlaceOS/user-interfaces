import { Component, Input, SimpleChanges } from '@angular/core';
import { AsyncHandler, currentUser } from '@placeos/common';
import { ChatService } from 'libs/components/src/lib/chat/chat.service';

import Artyom from 'artyom.js/build/artyom.js';

@Component({
    selector: 'voice-assistant',
    template: `
        <button
            matRipple
            class="h-12 w-12 rounded-full m-4 flex items-center justify-center"
            [class.bg-base-400]="!active"
            [class.bg-success]="active"
            [class.bg-error]="error.speech_recognition"
            (click)="activate()"
        >
            <span
                *ngIf="active"
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"
            ></span>
            <app-icon class="text-2xl">{{
                active ? 'mic' : 'mic_off'
            }}</app-icon>
        </button>
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
export class VoiceAssistantComponent extends AsyncHandler {
    @Input() public system_id: string;
    @Input() public activation_phrase: string = 'hey please';
    public current_text: string = '';
    public active: boolean = false;
    public error: Record<string, string | boolean> = {};

    private _setup = false;
    private _listening = false;
    private _voice = new Artyom();
    private _last_message: string;

    constructor(private _chat_service: ChatService) {
        super();
    }

    public ngOnInit() {
        this._setupVoiceRecognition();
        const user = currentUser();
        this.subscription(
            'chat.messages',
            this._chat_service.messages.subscribe((list) => {
                // this._scrollToBottom();
                const msg_list = list.filter((_) => _.user_id !== user?.id);
                const last_message = msg_list[msg_list.length - 1];
                if (
                    msg_list.length < 1 ||
                    this._last_message === last_message.id
                )
                    return;
                this._last_message = last_message.id;
                this._speakText(last_message.message);
                this.active = false;
            }),
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.system_id && this.system_id) {
            this._chat_service.setBinding(this.system_id);
            this._chat_service.startChat();
        }
    }

    public activate() {
        if (this.error.speech_recognition) return;
        this.active = true;
        this.timeout('deactivate', () => (this.active = false), 5000);
    }

    private async _setupVoiceRecognition() {
        var commands = {
            indexes: [`hey place *`, `hey please *`, `a place *`],
            smart: true,
            action: (i, i2) => {
                this.active = true;
                console.log('Value:', i, i2);
                this._chat_service.sendMessage(`${i} ${i2}`);
            },
        };

        this._voice.addCommands(commands);
        this._voice.initialize({
            continuous: true,
            lang: 'en-US',
            listen: true,
        });
    }

    public handleEnd() {}

    private _speakText(text: string) {
        this._voice.say(text);
    }
}
