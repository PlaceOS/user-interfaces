import { Injectable } from '@angular/core';
import {
    Downsampler,
    SPEECH_SAMPLE_RATE,
    VoiceActivityDetector,
    VoiceActivityEvents,
} from './voice-activity';

/** Sends microphone audio to the main thread in blocks of 2048 samples */
const WORKLET_SOURCE = `
registerProcessor('mic-capture', class extends AudioWorkletProcessor {
    buffer = new Float32Array(2048);
    length = 0;
    process([input]) {
        const channel = input && input[0];
        if (!channel) return true;
        for (let i = 0; i < channel.length; i++) {
            this.buffer[this.length++] = channel[i];
            if (this.length < this.buffer.length) continue;
            this.port.postMessage(this.buffer, [this.buffer.buffer]);
            this.buffer = new Float32Array(2048);
            this.length = 0;
        }
        return true;
    }
});`;
const INTERACTION_EVENTS = ['pointerdown', 'keydown'] as const;

/**
 * Listens to the microphone and reports each spoken phrase as 16 kHz audio.
 * Call `start()` to open the microphone and `stop()` to release it.
 */
@Injectable({
    providedIn: 'root',
})
export class MicCapture {
    private _stream?: MediaStream;
    private _context?: AudioContext;
    private _node?: AudioWorkletNode;
    private _start_id = 0;

    /** The open microphone stream, or undefined when stopped */
    public get stream() {
        return this._stream;
    }

    /** Audio context of the open microphone. Also used to play speech. */
    public get context() {
        return this._context;
    }

    /**
     * Opens the microphone. Throws if the user or browser blocks it.
     * `is_muted` returns true while audio must be ignored, such as while our own voice plays.
     */
    public async start(events: VoiceActivityEvents, is_muted: () => boolean) {
        const id = ++this._start_id;
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: true,
            },
        });
        // stop() or another start() ran while we waited for the stream
        if (id !== this._start_id) {
            stream.getTracks().forEach((track) => track.stop());
            return;
        }
        const context = new AudioContext();
        this._stream = stream;
        this._context = context;
        const url = URL.createObjectURL(
            new Blob([WORKLET_SOURCE], { type: 'text/javascript' }),
        );
        try {
            await context.audioWorklet.addModule(url);
        } finally {
            URL.revokeObjectURL(url);
        }
        if (id !== this._start_id) return;
        // A node without outputs still runs, and nothing plays to the speakers
        const node = new AudioWorkletNode(context, 'mic-capture', {
            numberOfOutputs: 0,
        });
        const detector = new VoiceActivityDetector(events);
        const downsampler = new Downsampler(
            context.sampleRate,
            SPEECH_SAMPLE_RATE,
        );
        node.port.onmessage = ({ data }: MessageEvent<Float32Array>) => {
            if (is_muted()) return detector.reset();
            detector.push(downsampler.process(data));
        };
        context.createMediaStreamSource(stream).connect(node);
        this._node = node;
        this.resume();
        // Browsers keep audio suspended until the user interacts with the page
        for (const name of INTERACTION_EVENTS) {
            document.addEventListener(name, this.resume, { passive: true });
        }
    }

    public stop() {
        this._start_id++;
        for (const name of INTERACTION_EVENTS) {
            document.removeEventListener(name, this.resume);
        }
        if (this._node) this._node.port.onmessage = null;
        this._stream?.getTracks().forEach((track) => track.stop());
        if (this._context?.state !== 'closed') void this._context?.close();
        this._stream = undefined;
        this._context = undefined;
        this._node = undefined;
    }

    /** Starts audio processing if the browser suspended it */
    public readonly resume = () => {
        if (this._context?.state === 'suspended') void this._context.resume();
    };
}
