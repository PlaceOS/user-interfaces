import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, currentUser } from '@placeos/common';
import { ChatService } from 'libs/components/src/lib/chat/chat.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-panel-view',
    template: `
        <div class="flex items-center justify-center h-full w-full">
            <button
                class="relative flex items-center justify-center flex-1 h-full bg-base-100 p-8"
                (click)="startListening()"
            >
                <div
                    class="h-[18vmin] w-[18vmin] m-4 rounded-full bg-base-content"
                    [style.transform]="'scale(' + scale + ')'"
                    [class.!bg-error]="listening"
                ></div>

                <div class="absolute bottom-0 inset-x-0 p-8 text-center">
                    <div class="text-sm">{{ current_text || last_text }}</div>
                </div>

                <div class="absolute bottom-0 inset-x-0 p-4 text-center"></div>
                <div
                    class="absolute top-2 left-1/2 -translate-x-1/2 p-4 text-center rounded-3xl bg-error text-error-content text-xs"
                    *ngIf="error.speech_recognition || error.speech_synthesis"
                >
                    <div
                        class="flex items-center justify-center w-full h-full"
                        *ngIf="error.speech_recognition"
                    >
                        Speech Recognition is not supported
                    </div>
                    <div
                        class="flex items-center justify-center w-full h-full"
                        *ngIf="error.speech_synthesis"
                    >
                        Speech Synthesis is not supported
                    </div>
                </div>
            </button>
            <div
                class="relative flex flex-col items-center justify-end h-full bg-base-200 p-4 w-[24rem]"
            >
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center space-y-4"
                    *ngIf="!(messages | async)?.length"
                >
                    <img
                        class="h-48 w-48 object-contain"
                        src="assets/icons/no-messages.svg"
                    />
                    <p class="opacity-30">
                        {{ 'PANEL.NO_MESSAGES' | translate }}
                    </p>
                </div>
                <div
                    class="flex flex-col m-2"
                    *ngFor="let message of messages | async"
                    [class.pr-4]="message.user_id !== user.id"
                    [class.pl-4]="message.user_id === user.id"
                    [class.items-left]="message.user_id !== user.id"
                    [class.items-end]="message.user_id === user.id"
                    (click)="show_time[message.id] = !show_time[message.id]"
                    [class.waiting-margin]="waiting | async"
                >
                    <div class="flex items-center space-x-2">
                        <div
                            class="text-sm text-base-content opacity-60 px-2 py-1"
                            *ngIf="message.user_id !== user.id"
                        >
                            Assistant
                        </div>
                        <div
                            class="text-xs  text-base-content opacity-40 px-2 py-1"
                        >
                            {{ message.timestamp + offset | dateFrom }}
                        </div>
                    </div>
                    <div
                        message
                        class="bg-base-100 border-base-300 p-4 rounded shadow text-sm markdown selectable"
                        [innerHTML]="message.content | sanitize"
                    ></div>
                </div>
                <div class="p-4" *ngIf="progress | async">
                    <button
                        class="block p-2 rounded border-base-300 bg-info text-info-content w-full"
                        (click)="show_info = !show_info"
                    >
                        <div class=" flex items-center space-x-2">
                            <app-icon class="text-2xl">{{
                                icons[(progress | async).function] || 'info'
                            }}</app-icon>
                            <p class="text-sm">
                                {{
                                    (progress | async).message ||
                                        (progress | async).function
                                }}
                            </p>
                        </div>
                        <div class="relative overflow-hidden w-full rounded">
                            <div
                                class="absolute inset-0 bg-base-100 opacity-10"
                            ></div>
                            <div
                                class="text-xs text-mono text-left p-2 break-words"
                                *ngIf="show_info"
                                [innerHTML]="
                                    (progress | async).content | sanitize
                                "
                            ></div>
                        </div>
                    </button>
                </div>
                <div
                    class="absolute right-2 flex items-center justify-center space-x-2 p-1 rounded-2xl bg-base-100 border border-neutral"
                    [style.bottom]="'8px'"
                    *ngIf="waiting | async"
                >
                    <div
                        class="h-2 w-2 bg-neutral rounded-full animate-bounce"
                    ></div>
                    <div
                        class="h-2 w-2 bg-neutral rounded-full animate-bounce anim-delay-1"
                    ></div>
                    <div
                        class="h-2 w-2 bg-neutral rounded-full animate-bounce anim-delay-2"
                    ></div>
                    <span class="sr-only">Waiting for reply...</span>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class PanelViewComponent extends AsyncHandler {
    public scale = 1;
    public current_text = '';
    public last_text = '';
    public listening = false;
    public error: Record<string, boolean> = {};
    private _time = 0;
    private _last_message = '';

    public readonly icons = {
        list_function_schemas: 'help',
        call_function: 'settings',
        task_complete: 'check_circle',
    };

    public readonly messages = this._chat.messages;
    public readonly progress = this._chat.progress;
    public readonly waiting = this._chat.messages.pipe(
        map((_) => _.length !== 0 && _[_.length - 1]?.user_id === this.user?.id)
    );

    private _recognition: any;

    public get user() {
        return currentUser();
    }

    public readonly startListening = () => {
        this._recognition.start();
    };

    constructor(private _route: ActivatedRoute, private _chat: ChatService) {
        super();
    }

    public ngOnInit() {
        this._setupVoiceRecognition();
        this._chat.startChat();
        this.subscription(
            'chat.messages',
            this._chat.messages.subscribe((list) => {
                const msg_list = list.filter(
                    (_) => _.user_id !== this.user?.id
                );
                if (
                    msg_list.length < 1 ||
                    this._last_message === msg_list[0].id
                )
                    return;
                this._last_message = msg_list[0].id;
                this._speakText(msg_list[0].message);
            })
        );
    }

    private _setupVoiceRecognition() {
        console.log('Setup Speech Recognition');
        if (
            !(
                'SpeechRecognition' in window ||
                'webkitSpeechRecognition' in window
            )
        ) {
            this.error.speech_recognition = true;
            return;
        }
        const SpeechRecognition =
            (window as any).SpeechRecognition ||
            (window as any).webkitSpeechRecognition;

        const recognition = new SpeechRecognition();
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
            console.log('Speech recognition started');
            this.listening = true;
            this.interval(
                'scale',
                () => {
                    this.scale =
                        (Math.sin(++this._time / 5 / Math.PI) + 1) / 2 + 1;
                },
                16
            );
        };

        recognition.onspeechend = () => {
            console.log('Speech recognition ended');
            this.listening = false;
            recognition.stop();
        };

        recognition.onresult = (event) => {
            if (!event.results) return;
            const { transcript } = event.results[0][0];
            // do something with transcript
            if (transcript.length < this.current_text.length) return;
            this.current_text = transcript;
        };

        recognition.onerror = function (event) {
            console.error('Speech recognition error:', event.error);
        };

        recognition.onend = (event) => {
            console.log('Result:', this.current_text);
            this.last_text = this.current_text;
            this.current_text = '';
            this.clearInterval('scale');
            this.scale = 1;
            console.log('Last message:', this.last_text);
            if (this.last_text.length <= 3) return;
            console.log('Sending message:', this.last_text);
            this._chat.sendMessage(this.last_text);
        };

        console.log('Set Speech Recognition');
        this._recognition = recognition;
    }

    private _speakText(text: string) {
        console.log('Speak Text:', text);
        if (
            !(
                'speechSynthesis' in window &&
                'SpeechSynthesisUtterance' in window
            )
        ) {
            this.error.speech_synthesis = true;
            return;
        }

        const synth = window.speechSynthesis;

        const voices = synth.getVoices();
        const preferredVoice = voices.find(
            (voice) => voice.voiceURI === 'Karen'
        );

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.pitch = 1;

        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        utterance.onend = () => {
            // do something once all the text has been spoken
        };

        window.speechSynthesis.speak(utterance);
    }
}
