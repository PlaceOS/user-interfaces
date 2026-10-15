import { Injectable } from '@angular/core';
import type {
    SpeechModel,
    SpeechRequest,
    SpeechResponse,
    SpeechSetup,
} from './speech-messages';

export type { SpeechModel, SpeechSetup };

type AudioHandler = (
    samples: Float32Array<ArrayBuffer>,
    sample_rate: number,
) => void;

interface PendingRequest {
    resolve: (text: string) => void;
    reject: (error: Error) => void;
    on_audio?: AudioHandler;
}

export interface SpeechEngineEvents {
    /** A model loaded and can take requests */
    ready: (model: SpeechModel) => void;
    /** A model failed to load. Requests for it will fail. */
    failed: (model: SpeechModel, message: string) => void;
}

/**
 * Local speech to text and text to speech.
 * Runs the speech models in a web worker so the UI stays responsive.
 * Call `start()` once to download the models. The browser caches them.
 */
@Injectable({
    providedIn: 'root',
})
export class SpeechEngine {
    private _worker?: Worker;
    private _events?: SpeechEngineEvents;
    private _next_id = 0;
    private _pending = new Map<number, PendingRequest>();

    /**
     * Starts the worker and loads the models. Later calls do nothing,
     * unless the worker failed. Then a call starts a new worker.
     */
    public start(setup: SpeechSetup, events: SpeechEngineEvents) {
        if (this._worker) return;
        this._events = events;
        this._worker = new Worker(new URL('./speech.worker', import.meta.url), {
            type: 'module',
        });
        this._worker.onmessage = ({ data }: MessageEvent<SpeechResponse>) =>
            this._handle(data);
        // The worker script did not load, or the worker stopped
        this._worker.onerror = (event) =>
            this._fail(event.message || 'Speech worker failed');
        this._send({ type: 'setup', setup });
    }

    /** Converts a full phrase of 16 kHz mono audio into text */
    public transcribe(audio: Float32Array) {
        return this._request(
            (id) => ({ type: 'transcribe', id, audio }),
            [audio.buffer],
        );
    }

    /**
     * Adds about one second of audio to a live transcription and returns the text so far.
     * Use `reset` for the first audio of a phrase. `transcribe` ends the live transcription.
     */
    public stream(audio: Float32Array, reset: boolean) {
        return this._request(
            (id) => ({ type: 'stream', id, audio, reset }),
            [audio.buffer],
        );
    }

    /**
     * Converts text into speech. Calls `on_audio` once per sentence.
     * Resolves when all audio is sent, or when `signal` aborts.
     */
    public async synthesize(
        text: string,
        on_audio: AudioHandler,
        signal?: AbortSignal,
    ) {
        if (signal?.aborted) return;
        await this._request(
            (id) => ({ type: 'synthesize', id, text }),
            [],
            on_audio,
            signal,
        );
    }

    /** Resolves with the transcript, or an empty string for speech requests */
    private _request(
        message: (id: number) => SpeechRequest & { id: number },
        transfer: Transferable[],
        on_audio?: AudioHandler,
        signal?: AbortSignal,
    ) {
        const id = this._next_id++;
        return new Promise<string>((resolve, reject) => {
            // Throws, and so rejects, before anything is kept when the worker is not running
            this._send(message(id), transfer);
            const on_abort = () => {
                this._send({ type: 'cancel', id });
                this._pending.delete(id);
                resolve('');
            };
            signal?.addEventListener('abort', on_abort, { once: true });
            this._pending.set(id, {
                resolve: (value) => {
                    signal?.removeEventListener('abort', on_abort);
                    resolve(value);
                },
                reject: (error) => {
                    signal?.removeEventListener('abort', on_abort);
                    reject(error);
                },
                on_audio,
            });
        });
    }

    private _send(message: SpeechRequest, transfer: Transferable[] = []) {
        if (!this._worker) throw new Error('Speech engine is not started');
        this._worker.postMessage(message, transfer);
    }

    /** Stops the worker, fails all requests and reports both models as failed */
    private _fail(message: string) {
        this._worker?.terminate();
        this._worker = undefined;
        const pending = [...this._pending.values()];
        this._pending.clear();
        for (const request of pending) request.reject(new Error(message));
        this._events?.failed('speech_to_text', message);
        this._events?.failed('text_to_speech', message);
    }

    private _handle(message: SpeechResponse) {
        switch (message.type) {
            case 'ready':
                return this._events?.ready(message.model);
            case 'failed':
                return this._events?.failed(message.model, message.message);
        }
        const pending = this._pending.get(message.id);
        if (!pending) return;
        switch (message.type) {
            case 'audio':
                return pending.on_audio?.(message.samples, message.sample_rate);
            case 'transcript':
                this._pending.delete(message.id);
                return pending.resolve(message.text);
            case 'done':
                this._pending.delete(message.id);
                return pending.resolve('');
            case 'error':
                this._pending.delete(message.id);
                return pending.reject(new Error(message.message));
        }
    }
}
