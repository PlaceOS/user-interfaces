import { TestBed } from '@angular/core/testing';

import { MicCapture } from '../../../app/ui/speech/mic-capture';
import { SpeechPlayer } from '../../../app/ui/speech/speech-player';

describe('SpeechPlayer', () => {
    let player: SpeechPlayer;
    let sources: {
        start: ReturnType<typeof vi.fn>;
        stop: ReturnType<typeof vi.fn>;
    }[];
    const capture: { context?: AudioContext } = {};

    /** Audio context whose clock stays at zero */
    const audioContext = () =>
        ({
            currentTime: 0,
            destination: {},
            createBuffer: (_: number, length: number, rate: number) => ({
                duration: length / rate,
                copyToChannel: vi.fn(),
            }),
            createBufferSource: () => {
                const source = {
                    connect: vi.fn(),
                    start: vi.fn(),
                    stop: vi.fn(),
                };
                sources.push(source);
                return source;
            },
        }) as unknown as AudioContext;
    /** One second of audio at 16 kHz */
    const clip = () => new Float32Array(16000);

    beforeEach(() => {
        vi.useFakeTimers({ now: 10_000 });
        sources = [];
        capture.context = audioContext();
        TestBed.configureTestingModule({
            providers: [{ provide: MicCapture, useValue: capture }],
        });
        player = TestBed.inject(SpeechPlayer);
    });

    afterEach(() => vi.useRealTimers());

    it('should play each clip after the queued clips', () => {
        player.play(clip(), 16000);
        player.play(clip(), 16000);
        expect(sources.map((_) => _.start.mock.calls[0][0])).toEqual([
            0.05, 1.05,
        ]);
        expect(player.busy_until).toBe(10_000 + 2050);
    });

    it('should stop queued clips and start the next clip at once', () => {
        player.play(clip(), 16000);
        player.stop();
        expect(sources[0].stop).toHaveBeenCalled();
        expect(player.busy_until).toBe(10_000);
        player.play(clip(), 16000);
        expect(sources[1].start).toHaveBeenCalledWith(0.05);
    });

    it('should restart the queue on a new audio context', () => {
        player.play(clip(), 16000);
        // A new context starts its clock at zero
        capture.context = audioContext();
        player.play(clip(), 16000);
        expect(sources[1].start).toHaveBeenCalledWith(0.05);
    });
});
