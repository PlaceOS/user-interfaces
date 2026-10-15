/** Messages between the speech worker and `SpeechEngine` */

export type SpeechModel = 'speech_to_text' | 'text_to_speech';

export interface SpeechSetup {
    /** Folder that holds the LiteRT `.wasm` files */
    wasm_url: string;
    /** Folder that holds copies of the model files. Empty to use Hugging Face. */
    mirror_url: string;
    /** Phrases to synthesize at load time and keep, so they play without delay */
    cached_phrases: string[];
}

export type SpeechRequest =
    | { type: 'setup'; setup: SpeechSetup }
    | { type: 'transcribe'; id: number; audio: Float32Array }
    | { type: 'synthesize'; id: number; text: string }
    | { type: 'cancel'; id: number };

export type SpeechResponse =
    | { type: 'ready'; model: SpeechModel }
    | { type: 'failed'; model: SpeechModel; message: string }
    | { type: 'transcript'; id: number; text: string }
    | {
          type: 'audio';
          id: number;
          samples: Float32Array<ArrayBuffer>;
          sample_rate: number;
      }
    | { type: 'done'; id: number }
    | { type: 'error'; id: number; message: string };
