import { signal } from '@angular/core';

export const MIC_LEVEL_BARS = 5;
/** Frequency range of human speech used for the bars */
const MIN_FREQUENCY = 100;
const MAX_FREQUENCY = 3000;

/**
 * Reads microphone volume per frequency band for a voice level display.
 * Call `open()` with the microphone's audio context and stream when listening starts,
 * and `close()` when it ends. The caller owns both.
 * `ready` is true when `read()` returns live values.
 */
export class MicLevels {
    private _ready = signal(false);
    public readonly ready = this._ready.asReadonly();

    private _source?: MediaStreamAudioSourceNode;
    private _analyser?: AnalyserNode;
    private _bytes = new Uint8Array(0);
    private _levels = new Float32Array(MIC_LEVEL_BARS);
    private _bands: [number, number][] = [];
    private _stop_watching = () => {};

    public open(context: AudioContext, stream: MediaStream) {
        this.close();
        const analyser = context.createAnalyser();
        analyser.fftSize = 512;
        analyser.smoothingTimeConstant = 0.6;
        analyser.minDecibels = -90;
        analyser.maxDecibels = -30;
        const source = context.createMediaStreamSource(stream);
        source.connect(analyser);
        this._source = source;
        this._analyser = analyser;
        this._bytes = new Uint8Array(analyser.frequencyBinCount);
        this._bands = speechBands(
            context.sampleRate / analyser.fftSize,
            analyser.frequencyBinCount,
        );
        // The context stays suspended if the page has had no user interaction
        const update = () => this._ready.set(context.state === 'running');
        context.addEventListener('statechange', update);
        this._stop_watching = () =>
            context.removeEventListener('statechange', update);
        update();
    }

    public close() {
        this._stop_watching();
        this._source?.disconnect();
        this._source = undefined;
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
