/// <reference lib="webworker" />
import { ModelFiles, loadRuntime } from './litert';
import { MatchaSynthesizer } from './matcha';
import { MoonshineTranscriber } from './moonshine';
import type {
    SpeechModel,
    SpeechRequest,
    SpeechResponse,
    SpeechSetup,
} from './speech-messages';

/*
 * Runs the speech models off the main thread.
 * The Wasm runtime has no threads here, so a model run can take seconds.
 * Jobs run one at a time, in order.
 */

// LiteRT loads its Wasm glue code with `importScripts`, which module workers
// do not support. Load it with a synchronous request and run it in global
// scope instead. `locateFile` finds the `.wasm` file next to the script.
self.importScripts = (...urls: (string | URL)[]) => {
    for (const url of urls) {
        const request = new XMLHttpRequest();
        request.open('GET', String(url), false);
        request.send();
        if (request.status !== 200) {
            throw new Error(`HTTP ${request.status} when loading ${url}`);
        }
        Object.assign(self, {
            Module: { locateFile: (path: string) => new URL(path, url).href },
        });
        (0, eval)(request.responseText);
    }
};

let speech_to_text: Promise<MoonshineTranscriber> | undefined;
let text_to_speech: Promise<MatchaSynthesizer> | undefined;
let queue: Promise<void> = Promise.resolve();
const cancelled = new Set<number>();
/** Audio per sentence for each cached phrase */
const cached_audio = new Map<string, Float32Array[]>();
let cached_phrases = new Set<string>();

function post(message: SpeechResponse, transfer: Transferable[] = []) {
    self.postMessage(message, transfer);
}

/** Runs jobs one at a time. A failed job does not stop the jobs after it. */
function enqueue(job: () => Promise<void>) {
    queue = queue.then(job).catch(() => {});
}

function errorText(error: unknown) {
    return error instanceof Error ? error.message : String(error);
}

function watch<T>(model: SpeechModel, loading: Promise<T>) {
    loading.then(
        () => post({ type: 'ready', model }),
        (error) => post({ type: 'failed', model, message: errorText(error) }),
    );
    return loading;
}

function setup({
    wasm_url,
    mirror_url,
    cached_phrases: phrases,
    wake_phrase,
}: SpeechSetup) {
    if (speech_to_text) return;
    const files = new ModelFiles(mirror_url);
    const runtime = loadRuntime(wasm_url);
    speech_to_text = watch(
        'speech_to_text',
        runtime.then(() => MoonshineTranscriber.load(files, wake_phrase)),
    );
    // Load text to speech second, so listening for the wake phrase starts sooner
    text_to_speech = watch(
        'text_to_speech',
        speech_to_text
            .catch(() => runtime)
            .then(() => MatchaSynthesizer.load(files)),
    );
    cached_phrases = new Set(phrases);
    void text_to_speech.then((synthesizer) => {
        for (const phrase of phrases) {
            enqueue(() => render(synthesizer, phrase, () => {}));
        }
    });
}

/**
 * Runs `job` with the loaded model after earlier jobs finish. Waits for the
 * model before joining the queue, so a model that is still loading does not
 * hold up jobs for the other model. Calls `on_end` when the job ends.
 */
function schedule<T>(
    id: number,
    model: Promise<T> | undefined,
    job: (model: T) => Promise<void>,
    on_end = () => {},
) {
    const end = (error?: unknown) => {
        if (error) post({ type: 'error', id, message: errorText(error) });
        cancelled.delete(id);
        on_end();
    };
    if (!model) return end('Speech models are not set up');
    model.then(
        (loaded) =>
            enqueue(async () => {
                try {
                    if (!cancelled.has(id)) await job(loaded);
                    end();
                } catch (error) {
                    end(error);
                }
            }),
        end,
    );
}

/** Synthesizes `text` and calls `on_audio` per sentence. Stops early when `id` is cancelled. */
async function render(
    synthesizer: MatchaSynthesizer,
    text: string,
    on_audio: (samples: Float32Array<ArrayBuffer>, sample_rate: number) => void,
    id = -1,
) {
    const { sample_rate } = synthesizer;
    const cached = cached_audio.get(text);
    if (cached) {
        for (const samples of cached) on_audio(samples.slice(), sample_rate);
        return;
    }
    const audio: Float32Array[] = [];
    for await (const samples of synthesizer.synthesize(text)) {
        if (cancelled.has(id)) return;
        audio.push(samples);
        on_audio(samples.slice(), sample_rate);
    }
    if (cached_phrases.has(text)) cached_audio.set(text, audio);
}

self.onmessage = ({ data }: MessageEvent<SpeechRequest>) => {
    switch (data.type) {
        case 'setup':
            return setup(data.setup);
        case 'cancel':
            cancelled.add(data.id);
            return;
        case 'transcribe':
            return schedule(data.id, speech_to_text, async (transcriber) => {
                const transcript = await transcriber.transcribe(data.audio);
                post({ type: 'transcript', id: data.id, transcript });
            });
        case 'synthesize':
            return schedule(
                data.id,
                text_to_speech,
                (synthesizer) =>
                    render(
                        synthesizer,
                        data.text,
                        (samples, sample_rate) =>
                            post(
                                {
                                    type: 'audio',
                                    id: data.id,
                                    samples,
                                    sample_rate,
                                },
                                [samples.buffer],
                            ),
                        data.id,
                    ),
                () => post({ type: 'done', id: data.id }),
            );
    }
};
