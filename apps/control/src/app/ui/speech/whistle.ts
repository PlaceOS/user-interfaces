/** Parts of the Needle Wasm module that Whistle uses. See `assets/needle/README.md`. */
interface NeedleModule {
    HEAPU8: Uint8Array;
    _malloc(size: number): number;
    _free(pointer: number): void;
    _needle_load(cact: number, size: bigint): number;
    _needle_last_error(): number;
    _needle_transcribe(
        pcm: number,
        samples: number,
        language: number,
        keywords: number,
        word_timestamps: number,
        out: number,
        out_capacity: number,
    ): number;
    _needle_stream_transcribe_process(
        pcm: number,
        samples: number,
        language: number,
        keywords: number,
        out: number,
        out_capacity: number,
    ): number;
    _needle_stream_transcribe_stop(out: number, out_capacity: number): number;
}
type NeedleFactory = () => Promise<NeedleModule>;

const LANGUAGE = 'en';
const OUT_CAPACITY = 64 * 1024;

/**
 * Speech to text with Cactus Whistle on the Needle Wasm engine.
 * Takes 16 kHz mono audio. `keywords` are newline separated phrases that the
 * engine favours, such as the wake phrase.
 */
export class WhistleTranscriber {
    private _stream_text = '';

    private constructor(
        private _module: NeedleModule,
        private _keywords: string,
    ) {}

    /** `engine_url` is the URL of `needle.js`. The `.wasm` file must be next to it. */
    public static async load(
        engine_url: string,
        model: Uint8Array,
        keywords: string,
    ) {
        const response = await fetch(engine_url);
        if (!response.ok) {
            throw new Error(
                `HTTP ${response.status} when loading ${engine_url}`,
            );
        }
        // The engine is a classic script that defines `createNeedle`. In a
        // worker it loads `needle.wasm` from the folder of `self.location`, and
        // it has no option to change that. Run it with a `self` that points at
        // the engine URL instead of the worker URL.
        const factory = new Function(
            'self',
            `${await response.text()}\nreturn createNeedle;`,
        )({ location: { href: engine_url } }) as NeedleFactory | undefined;
        if (!factory) throw new Error('Needle engine did not load');
        const module = await factory();
        const pointer = module._malloc(model.length);
        module.HEAPU8.set(model, pointer);
        const result = module._needle_load(pointer, BigInt(model.length));
        module._free(pointer);
        const transcriber = new WhistleTranscriber(module, keywords);
        if (result < 0) throw new Error(transcriber._lastError());
        return transcriber;
    }

    /** Converts a full phrase into text. Ends any stream in progress. */
    public transcribe(audio: Float32Array) {
        this._stopStream();
        const json = this._call(
            (pcm, language, keywords, out) =>
                this._module._needle_transcribe(
                    pcm,
                    audio.length,
                    language,
                    keywords,
                    0,
                    out,
                    OUT_CAPACITY,
                ),
            audio,
        );
        return (JSON.parse(json) as { text: string }).text;
    }

    /**
     * Adds about one second of audio to a live transcription.
     * Use `reset` for the first audio of a phrase, so no words from an earlier phrase stay.
     * Returns the text so far: the confirmed words and the latest guess after them.
     */
    public stream(audio: Float32Array, reset: boolean) {
        if (reset) this._stopStream();
        const json = this._call(
            (pcm, language, keywords, out) =>
                this._module._needle_stream_transcribe_process(
                    pcm,
                    audio.length,
                    language,
                    keywords,
                    out,
                    OUT_CAPACITY,
                ),
            audio,
        );
        const { text, pending } = JSON.parse(json) as {
            text: string;
            pending: string;
        };
        this._stream_text = `${this._stream_text} ${text}`.trim();
        return `${this._stream_text} ${pending}`.trim();
    }

    private _stopStream() {
        const out = this._module._malloc(OUT_CAPACITY);
        this._module._needle_stream_transcribe_stop(out, OUT_CAPACITY);
        this._module._free(out);
        this._stream_text = '';
    }

    /** Copies the audio and strings into Wasm memory, runs `run` and returns its JSON output */
    private _call(
        run: (
            pcm: number,
            language: number,
            keywords: number,
            out: number,
        ) => number,
        audio: Float32Array,
    ) {
        const module = this._module;
        const pcm = module._malloc(audio.byteLength);
        // Memory can grow during malloc, so read HEAPU8 after it
        new Float32Array(module.HEAPU8.buffer, pcm, audio.length).set(audio);
        const language = this._string(LANGUAGE);
        const keywords = this._string(this._keywords);
        const out = module._malloc(OUT_CAPACITY);
        try {
            if (run(pcm, language, keywords, out) < 0) {
                throw new Error(this._lastError());
            }
            return this._read(out);
        } finally {
            [pcm, language, keywords, out].forEach((_) => module._free(_));
        }
    }

    private _string(text: string) {
        const bytes = new TextEncoder().encode(`${text}\0`);
        const pointer = this._module._malloc(bytes.length);
        this._module.HEAPU8.set(bytes, pointer);
        return pointer;
    }

    private _read(pointer: number) {
        const heap = this._module.HEAPU8;
        return new TextDecoder().decode(
            heap.subarray(pointer, heap.indexOf(0, pointer)),
        );
    }

    private _lastError() {
        return this._read(this._module._needle_last_error());
    }
}
