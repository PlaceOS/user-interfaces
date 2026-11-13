import { SpeechEngine } from '../../../app/ui/speech/speech-engine';
import type {
    SpeechRequest,
    SpeechResponse,
} from '../../../app/ui/speech/speech-messages';

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

    /** Starts an engine and returns it with helpers to read and answer worker messages */
    const started = () => {
        const engine = new SpeechEngine();
        engine.start(setup, { ready: vi.fn(), failed: vi.fn() });
        const worker = FakeWorker.last as FakeWorker;
        const sent = () =>
            worker.postMessage.mock.calls.map(([m]) => m as SpeechRequest);
        const reply = (data: SpeechResponse) =>
            worker.onmessage?.({ data } as MessageEvent);
        return { engine, sent, reply };
    };

    it('should match each worker reply to its request', async () => {
        const { engine, sent, reply } = started();
        const first = engine.transcribe(new Float32Array(16));
        const second = engine.stream(new Float32Array(16), true);
        const [, a, b] = sent() as { id: number }[];
        reply({ type: 'error', id: b.id, message: 'No model' });
        reply({ type: 'transcript', id: a.id, text: 'hello room' });
        await expect(first).resolves.toBe('hello room');
        await expect(second).rejects.toThrow('No model');
    });

    it('should pass each audio clip to the caller until the speech is done', async () => {
        const { engine, sent, reply } = started();
        const on_audio = vi.fn();
        const done = engine.synthesize('Hello. Bye.', on_audio);
        const { id } = sent()[1] as { id: number };
        const clip = new Float32Array(4);
        reply({ type: 'audio', id, samples: clip, sample_rate: 22050 });
        reply({ type: 'audio', id, samples: clip, sample_rate: 22050 });
        reply({ type: 'done', id });
        await expect(done).resolves.toBeUndefined();
        expect(on_audio).toHaveBeenCalledTimes(2);
        expect(on_audio).toHaveBeenCalledWith(clip, 22050);
    });

    it('should cancel speech in the worker when aborted', async () => {
        const { engine, sent, reply } = started();
        const on_audio = vi.fn();
        const abort = new AbortController();
        const done = engine.synthesize('Hello', on_audio, abort.signal);
        const { id } = sent()[1] as { id: number };
        abort.abort();
        await expect(done).resolves.toBeUndefined();
        expect(sent()[2]).toEqual({ type: 'cancel', id });
        // Audio that was already on its way is dropped
        reply({
            type: 'audio',
            id,
            samples: new Float32Array(4),
            sample_rate: 1,
        });
        expect(on_audio).not.toHaveBeenCalled();
    });

    it('should not send speech that is already aborted', async () => {
        const { engine, sent } = started();
        const abort = new AbortController();
        abort.abort();
        await engine.synthesize('Hello', vi.fn(), abort.signal);
        expect(sent().map((_) => _.type)).toEqual(['setup']);
    });

    it('should reject requests before it starts', async () => {
        await expect(
            new SpeechEngine().transcribe(new Float32Array(16)),
        ).rejects.toThrow('not started');
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
