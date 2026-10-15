import { Injectable, inject } from '@angular/core';
import { MicCapture } from './mic-capture';

/** Short delay before new audio starts, so the first samples are not cut */
const START_DELAY = 0.05;

/**
 * Plays synthesized speech. Each clip plays after the clips already queued.
 * Uses the microphone's audio context, so the browser only needs to allow audio once.
 */
@Injectable({
    providedIn: 'root',
})
export class SpeechPlayer {
    private _capture = inject(MicCapture);
    private _context?: AudioContext;
    private _sources = new Set<AudioBufferSourceNode>();
    /** Context time when the queued audio ends */
    private _end_time = 0;
    private _busy_until = 0;

    /** Time in milliseconds (as `Date.now()`) when the queued audio ends */
    public get busy_until() {
        return this._busy_until;
    }

    public play(samples: Float32Array<ArrayBuffer>, sample_rate: number) {
        const context = this._capture.context;
        if (!context) return;
        // A new context starts its clock at zero
        if (context !== this._context) this._end_time = 0;
        this._context = context;
        const buffer = context.createBuffer(1, samples.length, sample_rate);
        buffer.copyToChannel(samples, 0);
        const source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        source.onended = () => this._sources.delete(source);
        const start = Math.max(
            this._end_time,
            context.currentTime + START_DELAY,
        );
        source.start(start);
        this._sources.add(source);
        this._end_time = start + buffer.duration;
        this._busy_until =
            Date.now() + (this._end_time - context.currentTime) * 1000;
    }

    /** Stops all queued audio */
    public stop() {
        for (const source of this._sources) {
            source.onended = null;
            source.stop();
        }
        this._sources.clear();
        this._end_time = 0;
        this._busy_until = Math.min(this._busy_until, Date.now());
    }
}
