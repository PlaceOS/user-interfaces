import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { ChatService } from 'libs/components/src/lib/chat/chat.service';

@Component({
    selector: 'app-panel-view',
    template: `
        <button
            class="absolute inset-0 bg-base-200 p-8 flex items-center justify-center"
            (click)="startListening()"
        >
            <div
                class="h-[18vmin] w-[18vmin] m-4 rounded-full bg-base-content"
                [style.transform]="'scale(' + scale + ')'"
            ></div>

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
    `,
    styles: [``],
})
export class PanelViewComponent extends AsyncHandler {
    public scale = 1;
    public error: Record<string, boolean> = {};
    private _time = 0;
    private _last_message = '';

    private _recognition: any;

    public readonly startListening = () => {
        this._recognition.start();
        this.interval(
            'scale',
            () => {
                this.scale = (Math.sin(++this._time / 5 / Math.PI) + 1) / 2 + 1;
            },
            16
        );
    };

    constructor(private _route: ActivatedRoute, private _chat: ChatService) {
        super();
    }

    public ngOnInit() {
        this._setupVoiceRecognition();
        this.subscription(
            'chat.messages',
            this._chat.messages.subscribe((list) => {
                if (list.length < 1 || this._last_message === list[0].id)
                    return;
                this._last_message = list[0].id;
                this._speakText(list[0].message);
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

        recognition.onresult = (event) => {
            console.log('Result:', event.results);
            if (!event.results) return;
            const { transcript } = event.results[0][0];
            // do something with transcript
            console.log('Result:', transcript);
        };

        recognition.onend = (event) => {
            console.log('OnEnd:', event.results);
            this.clearInterval('scale');
            this.scale = 1;
            if (!event.results) return;
            const { transcript } = event.results[0][0];
            this._chat.sendMessage(transcript);
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
