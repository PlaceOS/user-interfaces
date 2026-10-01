import { Injectable, effect, inject, signal, untracked } from '@angular/core';
import { AsyncHandler, currentUser, log, randomInt } from '@placeos/common';

import { ChatService } from '@placeos/components';
import { MicLevels } from './mic-levels';

/**
 * - `idle`: Waits for a wake phrase.
 * - `listening`: Treats the next phrase as a command.
 * - `processing`: Waits for the assistant to reply to a command.
 */
export type VoiceState = 'idle' | 'listening' | 'processing';

const WAITING_PHRASES = ['One second...', 'One moment...', 'Working on it...'];
const WAKE_PHRASES = [
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
/** Recognition errors that stop voice control until the page reloads */
const FATAL_ERRORS = [
    'not-allowed',
    'service-not-allowed',
    'audio-capture',
    'language-not-supported',
];
const LISTEN_TIMEOUT = 8 * 1000;
const RESPONSE_TIMEOUT = 60 * 1000;
/** Time after speech ends where the microphone can still hear our own voice */
const ECHO_DELAY = 1000;
const NETWORK_RETRY_DELAY = 5 * 1000;
const MAX_CONNECT_ATTEMPTS = 20;

/** Parts of the Web Speech API that TypeScript's DOM types leave out */
interface SpeechRecognitionInstance {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    maxAlternatives: number;
    onresult: ((event: SpeechRecognitionEvent) => void) | null;
    onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
    onend: (() => void) | null;
    start(): void;
    stop(): void;
    abort(): void;
}
type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;
type SpeechWindow = Window & {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
};

/** Converts chat message HTML into plain text so markdown is not read aloud */
function htmlToText(html: string) {
    if (!html) return '';
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent?.trim() || '';
}

/**
 * Hands-free voice control for a room system.
 * Listens for a wake phrase (or a tap on the mic),
 * sends the next phrase to the chat service and speaks the reply.
 */
@Injectable({
    providedIn: 'root',
})
export class VoiceAssistantService extends AsyncHandler {
    private _chat_service = inject(ChatService);

    private _system_id = signal('');
    private _state = signal<VoiceState>('idle');
    private _current_text = signal('');
    private _enabled = signal(false);
    private _error = signal<Record<string, string | boolean>>({});

    public readonly current_text = this._current_text.asReadonly();
    public readonly enabled = this._enabled.asReadonly();
    public readonly error = this._error.asReadonly();
    public readonly state = this._state.asReadonly();
    public readonly progress = this._chat_service.progress;

    private _mic_levels = new MicLevels();
    /** True when `readLevels()` returns live microphone levels */
    public readonly levels_ready = this._mic_levels.ready;

    private _user_speech?: SpeechRecognitionInstance;
    private _last_message_id = '';
    private _speaking_until = 0;
    private _restart_delay = 0;

    constructor() {
        super();
        let bound_id = '';
        effect(() => {
            const id = this._system_id();
            if (!id || id === bound_id) return;
            // Drop the chat and any pending command for the previous room,
            // so commands only go to this one
            if (bound_id) {
                untracked(() => this._setIdle());
                this._chat_service.close();
            }
            bound_id = id;
            this._chat_service.setBinding(id);
        });
        effect(() => {
            const user_id = currentUser()?.id;
            const list = this._chat_service.messages();
            const msg_list = list.filter((_) => _.user_id !== user_id);
            const last_message = msg_list[msg_list.length - 1];
            if (!last_message || this._last_message_id === last_message.id) {
                return;
            }
            this._last_message_id = last_message.id;
            this._speakText(
                htmlToText(last_message.content) || last_message.message,
            );
            this._setIdle();
        });
        effect(() => {
            const enabled = this._enabled();
            if (enabled) this._setupVoiceRecognition();
            else this._teardownVoiceRecognition();
        });
        // Only use the microphone for levels while listening for a command
        effect(() => {
            if (this._state() === 'listening') void this._mic_levels.open();
            else this._mic_levels.close();
        });
    }

    protected override destroy() {
        this._teardownVoiceRecognition();
        this._mic_levels.close();
        super.destroy();
    }

    /** Returns microphone levels from 0 to 1, one per bar. Read once per animation frame. */
    public readLevels() {
        return this._mic_levels.read();
    }

    /** Turning on is debounced. Turning off is immediate, so nothing is heard after the view goes away. */
    public setEnabled(is_enabled: boolean) {
        if (is_enabled) {
            this.timeout('set_enabled', () => this._enabled.set(true));
            return;
        }
        this.clearTimeout('set_enabled');
        this._enabled.set(false);
        this._teardownVoiceRecognition();
    }

    public setBinding(system_id: string) {
        this._system_id.set(system_id);
    }

    /** Toggles listening for a command without the wake phrase. Used by the mic button. */
    public activate() {
        if (this._error().speech_recognition) return;
        if (this._state() === 'listening') return this._setIdle();
        window.speechSynthesis?.cancel();
        this._listen();
    }

    private _listen() {
        this._state.set('listening');
        this._current_text.set('');
        this.timeout('state', () => this._setIdle(), LISTEN_TIMEOUT);
    }

    private _setIdle() {
        this.clearTimeout('state');
        this.clearTimeout('send');
        this._state.set('idle');
        this._current_text.set('');
    }

    /** Returns true while our own voice can reach the microphone */
    private _isSpeaking() {
        return (
            !!window.speechSynthesis?.speaking ||
            Date.now() < this._speaking_until
        );
    }

    private _setupVoiceRecognition() {
        const speech_window = window as SpeechWindow;
        const SpeechRecognition =
            speech_window.SpeechRecognition ||
            speech_window.webkitSpeechRecognition;
        if (this._user_speech) return;
        if (!SpeechRecognition) {
            log(
                'VOICE',
                'Speech recognition is unavailable.',
                undefined,
                'warn',
            );
            this._error.update((error) => ({
                ...error,
                speech_recognition: true,
            }));
            return;
        }
        log('VOICE', 'Initialising speech recognition.');
        // Load the voice list early. Some browsers load it asynchronously.
        window.speechSynthesis?.getVoices();
        const speech = new SpeechRecognition();
        this._user_speech = speech;
        speech.continuous = false;
        speech.lang = navigator.language || 'en-US';
        speech.interimResults = true;
        speech.maxAlternatives = 1;

        speech.onresult = (event) => {
            this._restart_delay = 0;
            if (this._isSpeaking()) return;
            const result = event.results[0];
            const transcript = result[0].transcript?.toLowerCase().trim() || '';
            const wake_phrase = WAKE_PHRASES.find((_) =>
                transcript.startsWith(_),
            );
            const is_listening = this._state() === 'listening';
            if (!is_listening && !wake_phrase) return;
            const command = transcript
                .substring(wake_phrase?.length || 0)
                .trim();
            if (!result.isFinal) {
                if (!is_listening) this._listen();
                this._current_text.set(command);
                return;
            }
            if (command.length <= 3) {
                this._listen();
                this._speakText('How may I help you?');
                return;
            }
            this._sendCommand(command);
        };

        speech.onerror = (event) => {
            if (event.error === 'no-speech' || event.error === 'aborted') {
                return;
            }
            log('VOICE', 'Speech Recognition Error:', event.error, 'warn');
            if (event.error === 'network') {
                this._restart_delay = NETWORK_RETRY_DELAY;
            }
            if (!FATAL_ERRORS.includes(event.error)) return;
            this._error.update((error) => ({
                ...error,
                speech_recognition: true,
            }));
            this._setIdle();
        };

        // Recognition stops after each phrase. Restart it to keep listening.
        speech.onend = () => {
            if (this._error().speech_recognition) return;
            this.timeout(
                'restart',
                () => {
                    try {
                        this._user_speech?.start();
                    } catch {}
                },
                this._restart_delay,
            );
        };
        speech.start();
        log('VOICE', 'Listening for commands.');
    }

    private _teardownVoiceRecognition() {
        this.clearTimeout('restart');
        this._setIdle();
        const speech = this._user_speech;
        if (!speech) return;
        // Detach handlers first. `abort` drops any pending result, so no
        // command is sent after voice control is turned off.
        speech.onresult = null;
        speech.onerror = null;
        speech.onend = null;
        speech.abort();
        this._user_speech = undefined;
        // Commands need voice control, so drop the chat connection with it
        this._chat_service.endChat();
    }

    private _sendCommand(command: string, attempt = 0) {
        this._state.set('processing');
        this._current_text.set(command);
        this._chat_service.startChat();
        if (!this._chat_service.connected) {
            if (attempt >= MAX_CONNECT_ATTEMPTS) {
                log('VOICE', 'Unable to connect to chat.', undefined, 'warn');
                this._speakText(`Sorry, I can't reach the assistant.`);
                return this._setIdle();
            }
            return this.timeout('send', () =>
                this._sendCommand(command, attempt + 1),
            );
        }
        log('VOICE', `Command: ${command}`);
        this._chat_service.sendMessage(`Hey PlaceOS, ${command}`);
        this._speakText(WAITING_PHRASES[randomInt(WAITING_PHRASES.length)]);
        this.timeout(
            'state',
            () => {
                this._speakText(`Sorry, I didn't get a response.`);
                this._setIdle();
            },
            RESPONSE_TIMEOUT,
        );
    }

    private _speakText(text: string) {
        const synth = window.speechSynthesis;
        if (!synth || !('SpeechSynthesisUtterance' in window)) {
            log('VOICE', `Speech Synthesis is unavailable.`, undefined, 'warn');
            this._error.update((error) => ({
                ...error,
                speech_synthesis: true,
            }));
            return;
        }
        log('VOICE', `Response: "${text}"`);
        synth.cancel();
        const speech = new SpeechSynthesisUtterance(text);
        const lang = this._user_speech?.lang || navigator.language;
        const voices = synth.getVoices();
        speech.voice =
            voices.find((_) => _.name.includes('Karen')) ||
            voices.find((_) => _.lang === lang) ||
            null;
        speech.lang = speech.voice?.lang || lang;
        const on_done = () => (this._speaking_until = Date.now() + ECHO_DELAY);
        speech.onend = on_done;
        speech.onerror = on_done;
        synth.speak(speech);
    }
}
