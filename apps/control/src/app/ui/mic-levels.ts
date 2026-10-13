import { signal } from '@angular/core';
import { log } from '@placeos/common';

export const MIC_LEVEL_BARS = 5;
/** Frequency range of human speech used for the bars */
const MIN_FREQUENCY = 100;
const MAX_FREQUENCY = 3000;

/**
 * Reads microphone volume per frequency band for a voice level display.
 * Call `open()` when listening starts and `close()` when it ends.
 * `ready` is true when `read()` returns live values.
 */
export class MicLevels {
    private _ready = signal(false);
    public readonly ready = this._ready.asReadonly();

    private _open_id = 0;
    private _stream?: MediaStream;
    private _context?: AudioContext;
    private _analyser?: AnalyserNode;
    private _bytes = new Uint8Array(0);
    private _levels = new Float32Array(MIC_LEVEL_BARS);
    private _bands: [number, number][] = [];

    public async open() {
        const id = ++this._open_id;
        if (!navigator.mediaDevices?.getUserMedia || !window.AudioContext) {
            return;
        }
        let stream: MediaStream;
        try {
            stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        } catch (e) {
            log('VOICE', 'Unable to read microphone levels:', e, 'warn');
            return;
        }
        // close() or another open() ran while we waited for the stream
        if (id !== this._open_id) {
            stream.getTracks().forEach((track) => track.stop());
            return;
        }
        const context = new AudioContext();
        const analyser = context.createAnalyser();
        analyser.fftSize = 512;
        analyser.smoothingTimeConstant = 0.6;
        analyser.minDecibels = -90;
        analyser.maxDecibels = -30;
        context.createMediaStreamSource(stream).connect(analyser);
        this._stream = stream;
        this._context = context;
        this._analyser = analyser;
        this._bytes = new Uint8Array(analyser.frequencyBinCount);
        this._bands = speechBands(
            context.sampleRate / analyser.fftSize,
            analyser.frequencyBinCount,
        );
        // The context stays suspended if the page has had no user interaction
        const update = () => this._ready.set(context.state === 'running');
        context.onstatechange = update;
        update();
        void context.resume();
    }

    public close() {
        this._open_id++;
        this._stream?.getTracks().forEach((track) => track.stop());
        if (this._context && this._context.state !== 'closed') {
            this._context.onstatechange = null;
            void this._context.close();
        }
        this._stream = undefined;
        this._context = undefined;
        this._analyser = undefined;
        this._ready.set(false);
    }

    /** Returns one level from 0 to 1 per bar. The array is reused between calls. */
    public read(): Readonly<Float32Array> {
        if (!this._analyser) return this._levels.fill(0);
        this._analyser.getByteFrequencyData(this._bytes);
        for (let bar = 0; bar < MIC_LEVEL_BARS; bar++) {
            const [start, end] = this._bands[bar];
            let sum = 0;
            for (let i = start; i < end; i++) sum += this._bytes[i];
            this._levels[bar] = sum / (end - start) / 255;
        }
        return this._levels;
    }
}

/**
 * Splits the speech range into log-spaced bands of analyser bins, one per bar.
 * Each band is an octave wide, so the bars match how we hear pitch.
 */
function speechBands(bin_width: number, bin_count: number) {
    const ratio = MAX_FREQUENCY / MIN_FREQUENCY;
    const bands: [number, number][] = [];
    let start = Math.max(1, Math.round(MIN_FREQUENCY / bin_width));
    for (let bar = 1; bar <= MIC_LEVEL_BARS; bar++) {
        const frequency = MIN_FREQUENCY * ratio ** (bar / MIC_LEVEL_BARS);
        const end = Math.min(
            bin_count,
            Math.max(start + 1, Math.round(frequency / bin_width)),
        );
        bands.push([start, end]);
        start = end;
    }
    return bands;
}
