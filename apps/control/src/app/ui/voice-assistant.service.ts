import { Injectable } from '@angular/core';
import { AsyncHandler, currentUser, log, randomInt } from '@placeos/common';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay } from 'rxjs/operators';

import { ChatService } from 'libs/components/src/lib/chat/chat.service';

const WAITING_PHRASES = ['One second...', 'One moment...', 'Working on it...'];
const DEFAULT_START_PHRASES = [
    `hey place`,
    `hey please`,
    `hey plays`,
    `a place`,
    `who place`,
    `who plays`,
    `who please`,
    `he plays`,
    `hit plays`,
    `can you please`,
];
let _last_message: string;

@Injectable({
    providedIn: 'root',
})
export class VoiceAssistantService extends AsyncHandler {
    private _system_id = new BehaviorSubject('');
    private _active = new BehaviorSubject(false);
    private _current_text = new BehaviorSubject('');
    private _enabled = new BehaviorSubject(false);
    private _error = new BehaviorSubject<Record<string, string | boolean>>({});

    public readonly current_text = this._current_text.asObservable();
    public readonly enabled = this._enabled.asObservable();
    public readonly error = this._error.asObservable();
    public readonly active = this._active.asObservable();
    public readonly progress = this._chat_service.progress;
    public readonly waiting = this._chat_service.messages.pipe(
        map(
            (_) =>
                _.length !== 0 &&
                _[_.length - 1]?.user_id === currentUser()?.id,
        ),
        shareReplay(1),
    );

    private _user_speech: any;
    private _has_command: boolean = false;

    constructor(private _chat_service: ChatService) {
        super();
        this.subscription(
            'system',
            this._system_id
                .pipe(
                    filter((_) => !!_),
                    distinctUntilChanged(),
                )
                .subscribe((id) => this._chat_service.setBinding(id)),
        );
        const user = currentUser();
        this.subscription(
            'chat.messages',
            this._chat_service.messages.subscribe((list) => {
                // this._scrollToBottom();
                const msg_list = list.filter((_) => _.user_id !== user?.id);
                const last_message = msg_list[msg_list.length - 1];
                if (msg_list.length < 1 || _last_message === last_message.id)
                    return;
                _last_message = last_message.id;
                this._speakText(last_message.message);
                this._active.next(false);
            }),
        );
        this.subscription(
            'enabled',
            this._enabled.subscribe((enabled) => {
                if (enabled) this._setupVoiceRecognition();
                else if (this._user_speech) {
                    const speech = this._user_speech;
                    speech.onend = () => null;
                    speech.stop();
                    delete this._user_speech;
                }
            }),
        );
    }

    public setEnabled(is_enabled: boolean) {
        this._enabled.next(is_enabled);
    }

    public setBinding(system_id: string) {
        this._system_id.next(system_id);
    }

    public activate() {
        if (this._error.getValue().speech_recognition) return;
        this._active.next(true);
        this.timeout(
            'deactivate',
            () => {
                this._active.next(false);
                this._last_text = '';
            },
            5000,
        );
    }

    private _setupVoiceRecognition() {
        var commands = DEFAULT_START_PHRASES;
        const SpeechRecognition =
            (window as any).SpeechRecognition ||
            (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) return;
        log('VOICE', 'Initialising speech recognition.');
        this._user_speech = new SpeechRecognition();
        this._user_speech.continuous = false;
        this._user_speech.lang =
            navigator.language || (navigator as any).userLanguage || 'en-US';
        this._user_speech.interimResults = true;
        this._user_speech.maxAlternatives = 1;

        this._user_speech.onresult = (event) => {
            const results: SpeechRecognitionResultList = event.results;
            const transcript =
                results[0][0].transcript?.toLowerCase().trim() || '';
            this._current_text.next(transcript);
            this.activate();
            if (!results[0].isFinal) return;
            const is_command = commands.find((_) => transcript.startsWith(_));
            if (!is_command && !this._has_command) return;
            const command = transcript
                .substring(is_command?.length || 0)
                .trim();
            this._active.next(true);
            if (command.length <= 3) {
                this._has_command = true;
                this._speakText('How may I help you?');
                return;
            }
            this._has_command = false;
            this._onMessage(`Hey PlaceOS, ${command}`);
        };

        this._user_speech.onerror = (event) => {
            if (event.error === 'no-speech') {
                this._current_text.next('');
                return;
            }
            log('VOICE', 'Speech Recognition Error:', event.error, 'warn');
            this._error.next({
                ...this._error.getValue(),
                speech_recognition: true,
            });
        };

        this._user_speech.onend = () => {
            if (this._error.getValue().speech_recognition) return;
            this._user_speech?.start();
        };
        this._user_speech.start();
        log('VOICE', 'Listening for commands.');
    }

    private _onMessage(message: string) {
        this._chat_service.startChat();
        if (!this._chat_service.connected) {
            return this.timeout('on_message', () => this._onMessage(message));
        }
        log('VOICE', `Command: ${message}`);
        this._chat_service.sendMessage(`Hey PlaceOS, ${message}`);
        this._speakText(WAITING_PHRASES[randomInt(WAITING_PHRASES.length)]);
        this.timeout('deactivate', () => this._active.next(false), 60 * 1000);
    }

    private _last_text: string;

    private _speakText(text: string) {
        const has_speech_synth =
            'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
        const text_to_speech = window.speechSynthesis;
        if (!has_speech_synth) {
            log('VOICE', `Speech Synthesis is unavailable.`, undefined, 'warn');
            this._error.next({
                ...this._error.getValue(),
                speech_synthesis: true,
            });
            return;
        }
        log('VOICE', `Response: "${text}"`);
        if (this._last_text === text) return;
        this._last_text = text;

        // Cancel any ongoing speech
        text_to_speech.cancel();

        const speech = new SpeechSynthesisUtterance(text);
        speech.rate = 1;
        speech.pitch = 1;

        // Use a promise to ensure voices are loaded
        const setVoice = new Promise<void>((resolve) => {
            const voices = text_to_speech.getVoices();
            if (voices.length > 0) {
                const preferredVoice = voices.find(
                    (voice) => voice.voiceURI === 'Karen',
                );
                if (preferredVoice) speech.voice = preferredVoice;
                resolve();
            } else {
                text_to_speech.onvoiceschanged = () => {
                    const voices = text_to_speech.getVoices();
                    const preferredVoice = voices.find(
                        (voice) => voice.voiceURI === 'Karen',
                    );
                    if (preferredVoice) speech.voice = preferredVoice;
                    resolve();
                };
            }
        });
        setVoice.then(() => text_to_speech.speak(speech));
    }
}
