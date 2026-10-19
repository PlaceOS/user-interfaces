import { SpeechEngine } from '../../../app/ui/speech/speech-engine';

/** Stands in for the speech worker. Keeps the last instance so tests can raise errors. */
class FakeWorker {
    public static last?: FakeWorker;
    public onmessage?: (event: MessageEvent) => void;
    public onerror?: (event: Partial<ErrorEvent>) => void;
    public postMessage = vi.fn();
    public terminate = vi.fn();

    constructor() {
        FakeWorker.last = this;
    }
}

describe('SpeechEngine', () => {
    const setup = {
        wasm_url: '',
        needle_url: '',
        mirror_url: '',
        cached_phrases: [],
        keywords: '',
    };
    const original = globalThis.Worker;

    beforeEach(() => {
        globalThis.Worker = FakeWorker as unknown as typeof Worker;
    });

    afterEach(() => {
        globalThis.Worker = original;
    });

    it('should fail all requests and models when the worker stops', async () => {
        const engine = new SpeechEngine();
        const events = { ready: vi.fn(), failed: vi.fn() };
        engine.start(setup, events);
        const worker = FakeWorker.last;
        const transcript = engine.transcribe(new Float32Array(16));
        worker?.onerror?.({ message: 'Out of memory' });
        await expect(transcript).rejects.toThrow('Out of memory');
        expect(worker?.terminate).toHaveBeenCalled();
        expect(events.failed).toHaveBeenCalledWith(
            'speech_to_text',
            'Out of memory',
        );
        expect(events.failed).toHaveBeenCalledWith(
            'text_to_speech',
            'Out of memory',
        );
        // A later start makes a new worker
        engine.start(setup, events);
        expect(FakeWorker.last).not.toBe(worker);
    });
});
