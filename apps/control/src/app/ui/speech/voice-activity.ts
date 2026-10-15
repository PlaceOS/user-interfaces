/** Sample rate that speech recognition expects */
export const SPEECH_SAMPLE_RATE = 16000;
/** 30 ms frames at 16 kHz */
const FRAME_SAMPLES = 480;
/** Loud frames in a row that start a phrase */
const START_FRAMES = 3;
/** Quiet frames in a row that end a phrase. Long enough for a pause between words. */
const END_FRAMES = 30;
/** Phrases with fewer loud frames are noise, such as a tap or a cough */
const MIN_SPEECH_FRAMES = 8;
/** Longest phrase, 10 seconds */
const MAX_FRAMES = 334;
/** Frames kept from before the phrase starts, so soft first sounds such as "h" are not cut */
const PRE_ROLL_FRAMES = 15;
/** Quiet frames kept after the last word */
const TAIL_FRAMES = 10;
/** Loudness (RMS) that always counts as quiet. About -48 dBFS, for people far from the panel. */
const MIN_LEVEL = 0.004;
/** A frame is loud when it is this many times louder than the background noise */
const NOISE_RATIO = 2.5;

export interface VoiceActivityEvents {
    /** Someone started to speak */
    start: () => void;
    /** The speaker stopped. Gives the phrase as 16 kHz audio, or undefined if it was only noise. */
    end: (phrase?: Float32Array) => void;
}

/**
 * Splits a 16 kHz microphone stream into spoken phrases.
 * Compares the loudness of each frame against the background noise level.
 */
export class VoiceActivityDetector {
    private _frame = new Float32Array(FRAME_SAMPLES);
    private _frame_length = 0;
    private _noise = MIN_LEVEL / NOISE_RATIO;
    private _pre_roll: Float32Array[] = [];
    private _phrase: Float32Array[] = [];
    private _speaking = false;
    private _loud_run = 0;
    private _quiet_run = 0;
    private _loud_frames = 0;

    constructor(private _events: VoiceActivityEvents) {}

    public push(samples: Float32Array) {
        let offset = 0;
        while (offset < samples.length) {
            const count = Math.min(
                samples.length - offset,
                FRAME_SAMPLES - this._frame_length,
            );
            this._frame.set(
                samples.subarray(offset, offset + count),
                this._frame_length,
            );
            this._frame_length += count;
            offset += count;
            if (this._frame_length === FRAME_SAMPLES) {
                this._process(this._frame.slice());
                this._frame_length = 0;
            }
        }
    }

    /** Drops any partial phrase. Use while our own voice plays. */
    public reset() {
        if (this._speaking) this._events.end();
        this._clear();
    }

    private _clear() {
        this._frame_length = 0;
        this._pre_roll = [];
        this._phrase = [];
        this._speaking = false;
        this._loud_run = 0;
        this._quiet_run = 0;
        this._loud_frames = 0;
    }

    private _process(frame: Float32Array) {
        let sum = 0;
        for (const sample of frame) sum += sample * sample;
        const level = Math.sqrt(sum / frame.length);
        const is_loud = level > Math.max(MIN_LEVEL, this._noise * NOISE_RATIO);
        this._loud_run = is_loud ? this._loud_run + 1 : 0;
        this._quiet_run = is_loud ? 0 : this._quiet_run + 1;

        if (!this._speaking) {
            // The noise level falls fast and rises slowly, so speech does not raise it
            const rate = level < this._noise ? 0.1 : 0.005;
            this._noise += (level - this._noise) * rate;
            this._pre_roll.push(frame);
            if (this._pre_roll.length > PRE_ROLL_FRAMES) this._pre_roll.shift();
            if (this._loud_run < START_FRAMES) return;
            this._speaking = true;
            this._phrase = this._pre_roll;
            this._pre_roll = [];
            this._loud_frames = this._loud_run;
            this._events.start();
            return;
        }

        this._phrase.push(frame);
        if (is_loud) this._loud_frames++;
        if (
            this._quiet_run >= END_FRAMES ||
            this._phrase.length >= MAX_FRAMES
        ) {
            this._endPhrase();
        }
    }

    private _endPhrase() {
        const frames = this._phrase;
        const is_speech = this._loud_frames >= MIN_SPEECH_FRAMES;
        // Drop the quiet tail, but keep a short gap after the last word
        const tail = Math.max(0, this._quiet_run - TAIL_FRAMES);
        this._clear();
        if (!is_speech) return this._events.end();
        const kept = frames.slice(0, frames.length - tail);
        const audio = new Float32Array(kept.length * FRAME_SAMPLES);
        kept.forEach((frame, i) => audio.set(frame, i * FRAME_SAMPLES));
        this._events.end(audio);
    }
}

/**
 * Converts audio to a lower sample rate by averaging the samples that fall in each output step.
 * The average also removes most high frequencies that would alias.
 */
export class Downsampler {
    private _ratio: number;
    private _position = 0;
    private _sum = 0;
    private _count = 0;

    constructor(input_rate: number, output_rate: number) {
        this._ratio = input_rate / output_rate;
    }

    public process(input: Float32Array) {
        const output = new Float32Array(
            Math.ceil(input.length / this._ratio) + 1,
        );
        let length = 0;
        for (const sample of input) {
            this._sum += sample;
            this._count++;
            this._position++;
            if (this._position < this._ratio) continue;
            output[length++] = this._sum / this._count;
            this._position -= this._ratio;
            this._sum = 0;
            this._count = 0;
        }
        return output.subarray(0, length);
    }
}
