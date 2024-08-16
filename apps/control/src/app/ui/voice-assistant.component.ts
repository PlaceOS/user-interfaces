import { Component, Input, SimpleChanges } from '@angular/core';
import { AsyncHandler, currentUser } from '@placeos/common';
import { ChatService } from 'libs/components/src/lib/chat/chat.service';

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
    private _recognition: any;
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

    public startListening() {
        if (this._listening) return;
        try {
            this._recognition.start();
        } catch {}
        this.timeout('stop_listening', () => (this._listening = true), 500);
    }

    private async _setupVoiceRecognition() {
        const SpeechRecognition =
            (window as any).SpeechRecognition ||
            (window as any).webkitSpeechRecognition;

        const recognition = new SpeechRecognition();
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            const { transcript } = event.results[0][0];
            // do something with transcript
            this.current_text = transcript;
            this.timeout('on_end', () => this.handleEnd(), 3000);
        };

        recognition.onerror = (event) => {
            // console.warn('Speech Recognition Error:', event);
            if (event.error === 'no-speech') {
                this.current_text = '';
                this.timeout(
                    'stop_listening',
                    () => (this._listening = false),
                    500,
                );
                return;
            }
            this.error.speech_recognition = true;
        };

        recognition.onend = (event) => {
            // const { transcript } = event.results[0][0];
            // do something with transcript
            this.handleEnd();
            this.timeout(
                'stop_listening',
                () => (this._listening = false),
                500,
            );
        };
        this._recognition = recognition;
        recognition.start();
        this._setup = true;
        this.timeout('stop_listening', () => (this._listening = true), 500);
        this.interval('check_listening', () => this.startListening(), 500);
    }

    public handleEnd() {
        const text = this.current_text;
        this.current_text = '';
        const phrase_index = text.toLowerCase().indexOf(this.activation_phrase);
        if (!this.active && (phrase_index >= 3 || phrase_index === -1)) return;
        this.clearTimeout('deactivate');
        const subtext = text.substring(
            phrase_index,
            phrase_index + this.activation_phrase.length,
        );
        if (subtext.length < 3) return;
        this.active = true;
        this._chat_service.sendMessage(subtext);
    }

    private _speakText(text: string) {
        if (
            !(
                'speechSynthesis' in window &&
                'SpeechSynthesisUtterance' in window
            )
        ) {
            this.error.speech_synthesis = true;
            return;
        }

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.pitch = 1;

        // Use a promise to ensure voices are loaded
        const setVoice = new Promise<void>((resolve) => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                const preferredVoice = voices.find(
                    (voice) => voice.voiceURI === 'Karen',
                );
                if (preferredVoice) {
                    utterance.voice = preferredVoice;
                }
                resolve();
            } else {
                window.speechSynthesis.onvoiceschanged = () => {
                    const voices = window.speechSynthesis.getVoices();
                    const preferredVoice = voices.find(
                        (voice) => voice.voiceURI === 'Karen',
                    );
                    if (preferredVoice) {
                        utterance.voice = preferredVoice;
                    }
                    resolve();
                };
            }
        });

        setVoice.then(() => {
            window.speechSynthesis.speak(utterance);
        });
    }
}
