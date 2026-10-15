import {
    Downsampler,
    VoiceActivityDetector,
} from '../../../app/ui/speech/voice-activity';

const RATE = 16000;

/** A 200 Hz tone, loud enough to count as speech */
function tone(seconds: number, level = 0.2) {
    const samples = new Float32Array(seconds * RATE);
    for (let i = 0; i < samples.length; i++) {
        samples[i] = level * Math.sin((2 * Math.PI * 200 * i) / RATE);
    }
    return samples;
}

const silence = (seconds: number) => new Float32Array(seconds * RATE);

describe('VoiceActivityDetector', () => {
    let phrases: Float32Array[];
    let starts: number;
    let ends: number;
    let detector: VoiceActivityDetector;

    beforeEach(() => {
        phrases = [];
        starts = 0;
        ends = 0;
        detector = new VoiceActivityDetector({
            start: () => starts++,
            end: (phrase) => {
                ends++;
                if (phrase) phrases.push(phrase);
            },
        });
    });

    it('should report a phrase once the speaker stops', () => {
        detector.push(silence(1));
        detector.push(tone(1));
        expect(starts).toBe(1);
        expect(phrases).toHaveLength(0);
        detector.push(silence(1));
        expect(phrases).toHaveLength(1);
        // The speech, the lead-in and a short gap, without the full quiet tail
        const seconds = phrases[0].length / RATE;
        expect(seconds).toBeGreaterThan(1.4);
        expect(seconds).toBeLessThan(2);
    });

    it('should accept audio in blocks of any size', () => {
        const audio = [silence(0.5), tone(1), silence(1)];
        for (const part of audio) {
            for (let i = 0; i < part.length; i += 333) {
                detector.push(part.subarray(i, i + 333));
            }
        }
        expect(phrases).toHaveLength(1);
    });

    it('should pick up quiet speech over a quiet room', () => {
        const hum = (seconds: number) => tone(seconds, 0.002);
        detector.push(hum(1));
        detector.push(tone(1, 0.01));
        detector.push(hum(1));
        expect(phrases).toHaveLength(1);
    });

    it('should ignore short sounds such as a tap', () => {
        detector.push(silence(0.5));
        detector.push(tone(0.12));
        detector.push(silence(1));
        expect(phrases).toHaveLength(0);
        // The end still fires, so the display stops showing speech
        expect(ends).toBe(starts);
    });

    it('should split speech that runs past the longest phrase', () => {
        detector.push(tone(12));
        expect(phrases).toHaveLength(1);
        expect(phrases[0].length / RATE).toBeCloseTo(10, 0);
    });

    it('should drop a partial phrase on reset', () => {
        detector.push(tone(1));
        detector.reset();
        expect(ends).toBe(1);
        detector.push(silence(1));
        expect(phrases).toHaveLength(0);
    });
});

describe('Downsampler', () => {
    it('should convert 48 kHz audio to 16 kHz across blocks', () => {
        const downsampler = new Downsampler(48000, RATE);
        const input = new Float32Array(4800).fill(0.5);
        const first = downsampler.process(input.subarray(0, 1000));
        const second = downsampler.process(input.subarray(1000));
        expect(first.length + second.length).toBe(1600);
        expect(second[0]).toBeCloseTo(0.5);
    });

    it('should convert 44.1 kHz audio to 16 kHz', () => {
        const downsampler = new Downsampler(44100, RATE);
        const output = downsampler.process(new Float32Array(44100));
        // The ratio is not a whole number, so allow one sample of rounding
        expect(Math.abs(output.length - RATE)).toBeLessThanOrEqual(1);
    });
});
