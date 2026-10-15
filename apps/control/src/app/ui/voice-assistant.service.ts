import {
    Injectable,
    computed,
    effect,
    inject,
    signal,
    untracked,
} from '@angular/core';
import {
    AsyncHandler,
    SettingsService,
    currentUser,
    log,
    randomInt,
} from '@placeos/common';

import { ChatService } from '@placeos/components';
import { MicLevels } from './mic-levels';
import { MicCapture } from './speech/mic-capture';
import { SpeechEngine, SpeechModel } from './speech/speech-engine';
import { SpeechPlayer } from './speech/speech-player';

/**
 * - `idle`: Waits for a wake phrase.
 * - `listening`: Treats the next phrase as a command.
 * - `processing`: Waits for the assistant to reply to a command.
 */
export type VoiceState = 'idle' | 'listening' | 'processing';

const WAITING_PHRASES = ['One second...', 'One moment...', 'Working on it...'];
/** Speech recognition favours this phrase, so accents that sound different still match */
const WAKE_KEYWORD = 'Hey Room';
/** Wake phrases without spaces, including words that speech recognition hears by mistake */
const WAKE_PHRASES = [
    'heyroom',
    'hayroom',
    'heyrooms',
    'heyrum',
    'heyrome',
    'hiroom',
];
const MAX_WAKE_WORDS = 2;
const LISTEN_TIMEOUT = 8 * 1000;
const NOT_HEARD_MESSAGE = "Sorry, I didn't catch that.";
const RESPONSE_TIMEOUT = 60 * 1000;
/** Time after speech ends where the microphone can still hear our own voice */
const ECHO_DELAY = 1000;
const MAX_CONNECT_ATTEMPTS = 20;

/** Converts chat message HTML into plain text so markdown is not read aloud */
function htmlToText(html: string) {
    if (!html) return '';
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent?.trim() || '';
}

/** Lower case words without punctuation, as `"hey room turn on the tv"` */
export function normalizeTranscript(text: string) {
    return text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}'%\s]/gu, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

/**
 * Finds a wake phrase at the start of a transcript.
 * Returns the command after it, or undefined when there is no wake phrase.
 */
export function parseWakePhrase(transcript: string) {
    const words = normalizeTranscript(transcript).split(' ');
    for (
        let count = Math.min(MAX_WAKE_WORDS, words.length);
        count > 0;
        count--
    ) {
        if (WAKE_PHRASES.includes(words.slice(0, count).join(''))) {
            return words.slice(count).join(' ');
        }
    }
    return undefined;
}

/**
 * Hands-free voice control for a room system.
 * Listens for the wake phrase "Hey Room" (or a tap on the mic),
 * sends the next phrase to the chat service and speaks the reply.
 * Speech to text (Whistle) and text to speech (Matcha-TTS) run on the device.
 */
@Injectable({
    providedIn: 'root',
})
export class VoiceAssistantService extends AsyncHandler {
    private _chat_service = inject(ChatService);
    private _settings = inject(SettingsService);

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

    private _hearing = signal(false);
    private _transcribing = signal(0);
    private _live_text = signal('');
    /** True while the microphone picks up speech */
    public readonly hearing = this._hearing.asReadonly();
    /** Words heard so far while someone gives a command */
    public readonly live_text = this._live_text.asReadonly();
    /** True while speech is converted to text */
    public readonly transcribing = computed(() => this._transcribing() > 0);
    private _ready = signal(false);
    /**
     * True when speech to text is loaded. Until then, speech is ignored, so a
     * command spoken during a long download does not run minutes later.
     */
    public readonly ready = this._ready.asReadonly();

    private _mic_levels = new MicLevels();
    /** True when `readLevels()` returns live microphone levels */
    public readonly levels_ready = this._mic_levels.ready;

    /** Keeps the models loaded while the app is open */
    private _engine = inject(SpeechEngine);
    private _capture = inject(MicCapture);
    private _player = inject(SpeechPlayer);
    private _speech?: AbortController;
    private _voice_on = false;
    /** Changes when voice control turns off, so late results are dropped */
    private _session = 0;
    private _last_message_id = '';
    /** Changes when a phrase starts or ends, so late live text is dropped */
    private _phrase_id = 0;
    /** Phrase of the last live transcription. A new phrase resets it. */
    private _streamed_phrase_id = -1;

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
            if (enabled) untracked(() => void this._startVoice());
            else untracked(() => this._stopVoice());
        });
        // Only read microphone levels while listening for a command
        effect(() => {
            const { context, stream } = this._capture;
            if (this._state() === 'listening' && context && stream) {
                this._mic_levels.open(context, stream);
            } else this._mic_levels.close();
        });
    }

    protected override destroy() {
        this._stopVoice();
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
        this._stopVoice();
    }

    public setBinding(system_id: string) {
        this._system_id.set(system_id);
    }

    /** Toggles listening for a command without the wake phrase. Used by the mic button. */
    public activate() {
        if (this._error().speech_recognition || !this._ready()) return;
        // A tap lets the browser start audio that it held back
        this._capture.resume();
        if (this._state() === 'listening') return this._setIdle();
        this._stopSpeaking();
        this._player.chime();
        this._listen();
    }

    /** Waits for a command. `message` shows in place of "Listening...". */
    private _listen(message = '') {
        this._state.set('listening');
        this._current_text.set(message);
        this.timeout('state', () => this._setIdle(), LISTEN_TIMEOUT);
    }

    private _setIdle() {
        this.clearTimeout('state');
        this.clearTimeout('send');
        this._state.set('idle');
        this._current_text.set('');
        this._live_text.set('');
    }

    private _setError(model: SpeechModel) {
        this._error.update((error) => ({
            ...error,
            [model === 'speech_to_text'
                ? 'speech_recognition'
                : 'speech_synthesis']: true,
        }));
    }

    /** Returns true while our own voice can reach the microphone */
    private _isSpeaking() {
        return Date.now() < this._player.busy_until + ECHO_DELAY;
    }

    private async _startVoice() {
        if (this._voice_on || this._error().speech_recognition) return;
        if (!window.Worker || !window.AudioWorkletNode) {
            log('VOICE', 'Voice control is unavailable.', undefined, 'warn');
            return this._setError('speech_to_text');
        }
        this._voice_on = true;
        const session = this._session;
        // Open the microphone first, so a blocked microphone skips the model download
        try {
            await this._capture.start(
                {
                    start: () => this._onSpeechStart(),
                    progress: (audio) => this._onSpeechProgress(audio),
                    end: (phrase) => this._onSpeechEnd(phrase),
                },
                () => this._isSpeaking(),
            );
        } catch (error) {
            if (session !== this._session) return;
            log('VOICE', 'Unable to open the microphone:', error, 'warn');
            this._setError('speech_to_text');
            return this._stopVoice();
        }
        if (session !== this._session) return;
        log('VOICE', 'Listening for commands.');
        const mirror = this._settings.get<string>('app.voice_models_url');
        this._engine.start(
            {
                wasm_url: new URL('assets/litert/', document.baseURI).href,
                needle_url: new URL('assets/needle/needle.js', document.baseURI)
                    .href,
                mirror_url: mirror
                    ? new URL(mirror, document.baseURI).href
                    : '',
                cached_phrases: WAITING_PHRASES,
                keywords: WAKE_KEYWORD,
            },
            {
                ready: (model) => {
                    log('VOICE', `Loaded ${model} model.`);
                    if (model === 'speech_to_text') this._ready.set(true);
                },
                failed: (model, message) => {
                    log('VOICE', `Unable to load ${model}:`, message, 'warn');
                    this._setError(model);
                    if (model !== 'speech_to_text') return;
                    this._ready.set(false);
                    this._stopVoice();
                },
            },
        );
    }

    private _stopVoice() {
        this._setIdle();
        if (!this._voice_on) return;
        this._voice_on = false;
        this._session++;
        this._hearing.set(false);
        this._stopSpeaking();
        this._mic_levels.close();
        this._capture.stop();
        // Commands need voice control, so drop the chat connection with it
        this._chat_service.endChat();
    }

    private _onSpeechStart() {
        if (!this._ready()) return;
        this._hearing.set(true);
        this._phrase_id++;
        this._live_text.set('');
        // Give the speaker time to finish the command
        if (this._state() === 'listening') this._listen();
    }

    /** Shows the words of a command as they are spoken */
    private _onSpeechProgress(audio: Float32Array) {
        if (!this._ready() || this._state() !== 'listening') return;
        const phrase_id = this._phrase_id;
        const reset = phrase_id !== this._streamed_phrase_id;
        this._streamed_phrase_id = phrase_id;
        this._engine.stream(audio, reset).then(
            (text) => {
                const is_current =
                    phrase_id === this._phrase_id &&
                    this._state() === 'listening';
                if (is_current) this._live_text.set(text);
            },
            (error) => log('VOICE', 'Live transcription error:', error, 'warn'),
        );
    }

    private _onSpeechEnd(phrase?: Float32Array) {
        this._hearing.set(false);
        // Drop live results that arrive after the full transcript
        this._phrase_id++;
        if (!phrase || !this._ready()) return this._live_text.set('');
        const session = this._session;
        if (this._state() === 'listening') this._listen();
        this._transcribing.update((count) => count + 1);
        this._engine
            .transcribe(phrase)
            .then(
                (text) => session === this._session && this._onTranscript(text),
                (error) =>
                    log('VOICE', 'Speech recognition error:', error, 'warn'),
            )
            .finally(() => this._transcribing.update((count) => count - 1));
    }

    private _onTranscript(text: string) {
        this._live_text.set('');
        const heard = normalizeTranscript(text);
        const is_listening = this._state() === 'listening';
        if (!heard && !is_listening) return;
        const wake_command = parseWakePhrase(heard);
        const next = wake_command ?? (is_listening ? heard : undefined);
        if (next === undefined) return;
        if (next.length > 3) return this._sendCommand(next);
        // The wake phrase alone. Chime and wait for the command.
        if (wake_command !== undefined) {
            this._player.chime();
            return this._listen();
        }
        this._listen(NOT_HEARD_MESSAGE);
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

    private _stopSpeaking() {
        this._speech?.abort();
        this._speech = undefined;
        this._player.stop();
    }

    private _speakText(text: string) {
        if (!text) return;
        if (!this._voice_on || this._error().speech_synthesis) {
            log('VOICE', 'Speech synthesis is unavailable.', undefined, 'warn');
            return;
        }
        log('VOICE', `Response: "${text}"`);
        this._stopSpeaking();
        const speech = new AbortController();
        this._speech = speech;
        this._engine
            .synthesize(
                text,
                (samples, sample_rate) =>
                    this._player.play(samples, sample_rate),
                speech.signal,
            )
            .catch((error) =>
                log('VOICE', 'Speech synthesis error:', error, 'warn'),
            );
    }
}
