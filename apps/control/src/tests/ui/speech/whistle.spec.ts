import { WhistleTranscriber } from '../../../app/ui/speech/whistle';

/** Name of the global that the fake engine script reads its module from */
const MODULE_GLOBAL = '__fake_needle_module';

/**
 * Stand-in for the Needle Wasm module. Each engine call writes the next JSON
 * reply from `replies` into the output buffer, or fails when the reply is an Error.
 */
function fakeNeedle(replies: (object | Error)[]) {
    const heap = new Uint8Array(1 << 20);
    let next = 8;
    const write = (pointer: number, text: string) =>
        heap.set(new TextEncoder().encode(`${text}\0`), pointer);
    let error = 0;
    const run = (out: number) => {
        const reply = replies.shift();
        if (!reply) throw new Error('No reply left for the engine call');
        if (reply instanceof Error) {
            error = next;
            next += 256;
            write(error, reply.message);
            return -1;
        }
        write(out, JSON.stringify(reply));
        return 0;
    };
    /** Pointers from `_malloc` that are not freed yet */
    const live = new Set<number>();
    return {
        HEAPU8: heap,
        live,
        _malloc: (size: number) => {
            // Real malloc returns 8 byte aligned pointers
            const pointer = next;
            next += Math.ceil(size / 8) * 8 + 8;
            if (next > heap.length) throw new Error('Fake heap is full');
            live.add(pointer);
            return pointer;
        },
        _free: (pointer: number) => {
            if (!live.delete(pointer)) throw new Error('Bad or double free');
        },
        _needle_load: () => 0,
        _needle_last_error: () => error,
        _needle_transcribe: (...args: number[]) => run(args[5]),
        _needle_stream_transcribe_process: (...args: number[]) => run(args[4]),
        _needle_stream_transcribe_stop: () => 0,
    };
}

describe('WhistleTranscriber', () => {
    const load = async (replies: (object | Error)[]) => {
        vi.stubGlobal(MODULE_GLOBAL, fakeNeedle(replies));
        // The engine script defines `createNeedle`, like `needle.js`
        const script = `var createNeedle = async () => globalThis.${MODULE_GLOBAL};`;
        vi.stubGlobal(
            'fetch',
            vi.fn(async () => new Response(script)),
        );
        return WhistleTranscriber.load(
            'https://cdn.test/needle.js',
            new Uint8Array(4),
            'hey place',
        );
    };
    const audio = () => new Float32Array(16000);

    afterEach(() => vi.unstubAllGlobals());

    it('should keep the confirmed words of a live phrase and add the latest guess', async () => {
        const whistle = await load([
            { text: 'turn on', pending: 'the' },
            { text: 'the lights', pending: '' },
            { text: 'hello', pending: 'room' },
        ]);
        expect(whistle.stream(audio(), true)).toBe('turn on the');
        expect(whistle.stream(audio(), false)).toBe('turn on the lights');
        // A reset starts a new phrase without the earlier words
        expect(whistle.stream(audio(), true)).toBe('hello room');
    });

    it('should drop the live words when a full phrase is transcribed', async () => {
        const whistle = await load([
            { text: 'turn on', pending: '' },
            { text: 'turn on the lights' },
            { text: 'next', pending: '' },
        ]);
        whistle.stream(audio(), true);
        expect(whistle.transcribe(audio())).toBe('turn on the lights');
        expect(whistle.stream(audio(), false)).toBe('next');
    });

    it('should throw the engine error and free the call memory', async () => {
        const whistle = await load([new Error('Audio too short')]);
        const module = globalThis[
            MODULE_GLOBAL as keyof typeof globalThis
        ] as ReturnType<typeof fakeNeedle>;
        expect(() => whistle.transcribe(audio())).toThrow('Audio too short');
        expect(module.live.size).toBe(0);
    });
});
