import {
    Component,
    ElementRef,
    computed,
    effect,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, currentUser } from '@placeos/common';
import {
    ChatService,
    DateFromPipe,
    IconComponent,
    SanitizePipe,
    TranslatePipe,
    UserAvatarComponent,
} from '@placeos/components';

import { MatRippleModule } from '@angular/material/core';
import {
    CompiledModel,
    Tensor,
    isWebGPUSupported,
    loadAndCompile,
    loadLiteRt,
} from '@litertjs/core';
import { OrganisationService } from '@placeos/common';

declare let loadVosklet: any;

@Component({
    selector: 'app-panel-view',
    template: `
        <div class="flex h-full w-full items-center justify-center">
            <button
                class="bg-base-300 relative flex h-full flex-1 items-center justify-center p-8"
                (click)="startListening()"
            >
                <canvas
                    #waveform_canvas
                    class="h-32 w-64"
                    width="256"
                    height="128"
                ></canvas>

                <div class="absolute inset-x-0 top-0 p-8 text-center">
                    <div class="text-sm">
                        {{ current_text() || last_text() }}
                    </div>
                </div>

                <div class="absolute inset-x-0 bottom-0 p-4 text-center"></div>
                @if (error().speech_recognition || error().speech_synthesis) {
                    <div
                        class="bg-error text-error-content absolute top-2 left-1/2 -translate-x-1/2 rounded-3xl px-4 py-2 text-center text-xs"
                    >
                        @if (error().speech_recognition) {
                            <div
                                class="flex h-full w-full items-center justify-center"
                            >
                                Speech Recognition is not supported
                            </div>
                        }
                        @if (error().speech_synthesis) {
                            <div
                                class="flex h-full w-full items-center justify-center"
                            >
                                Speech Synthesis is not supported
                            </div>
                        }
                    </div>
                }
                <video
                    #video
                    autoplay
                    playsinline
                    [class.opacity-0]="!debug()"
                    class="bg-base-200 absolute bottom-4 left-4 h-48 w-48 rounded-xl border-[0.25rem] object-cover"
                    [class.border-success]="person_in_view()"
                    [class.border-base-200]="!person_in_view()"
                ></video>
                @if (listening()) {
                    <div
                        class="bg-success text-success-content absolute right-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full"
                    >
                        <icon class="text-2xl">mic</icon>
                    </div>
                }
                <canvas
                    #canvas
                    width="640"
                    height="640"
                    class="pointer-events-none absolute opacity-0"
                ></canvas>
            </button>
            <div
                class="bg-base-100 relative flex h-full w-[24rem] flex-col justify-end overflow-auto"
            >
                @if (!messages().length) {
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center space-y-4"
                    >
                        <img
                            class="h-32 w-32 object-contain"
                            src="assets/icons/no-pending.svg"
                        />
                        <p class="opacity-30">
                            {{ 'APP.BOOKING_PANEL.NO_MESSAGES' | translate }}
                        </p>
                    </div>
                }
                <div class="max-h-full w-full overflow-auto" #message_element>
                    @for (message of messages(); track message) {
                        <div
                            class="hover:bg-base-200 my-2 flex space-x-4 p-2"
                            (click)="toggleMessageTime(message.id)"
                            [class.waiting-margin]="waiting()"
                        >
                            <a-user-avatar
                                [user]="
                                    $any({
                                        name: message.message || '',
                                        photo:
                                            message.user_id !== user.id
                                                ? 'assets/icons/ai-avatar.jpg'
                                                : 'assets/icons/user-avatar.jpg',
                                    })
                                "
                                class="text-xl"
                            ></a-user-avatar>
                            <div class="flex flex-1 flex-col space-y-1">
                                <div class="flex items-center space-x-4">
                                    <div>
                                        {{
                                            message.user_id !== user.id
                                                ? 'Assistant'
                                                : 'You'
                                        }}
                                    </div>
                                    <div
                                        class="text-base-content w-full px-2 py-1 text-right text-xs opacity-40"
                                    >
                                        {{
                                            message.timestamp + offset
                                                | dateFrom
                                        }}
                                    </div>
                                </div>
                                <div
                                    message
                                    class="markdown selectable text-sm"
                                    [innerHTML]="message.content | sanitize"
                                ></div>
                            </div>
                        </div>
                    }
                    @if (progress(); as progress_msg) {
                        <div class="p-4">
                            <button
                                class="border-base-300 bg-info text-info-content block w-full rounded-sm p-2"
                                (click)="show_info.set(!show_info())"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">{{
                                        icons[progress_msg.function] || 'info'
                                    }}</icon>
                                    <p class="text-sm">
                                        {{
                                            progress_msg.message ||
                                                progress_msg.function
                                        }}
                                    </p>
                                </div>
                                <div
                                    class="relative w-full overflow-hidden rounded-sm"
                                >
                                    <div
                                        class="bg-base-100 absolute inset-0 opacity-10"
                                    ></div>
                                    @if (show_info()) {
                                        <div
                                            class="text-mono p-2 text-left text-xs wrap-break-word"
                                            [innerHTML]="
                                                progress_msg.content | sanitize
                                            "
                                        ></div>
                                    }
                                </div>
                            </button>
                        </div>
                    }
                    @if (waiting()) {
                        <div
                            class="border-neutral bg-base-100 absolute right-2 flex items-center justify-center space-x-2 rounded-2xl border p-1"
                            [style.bottom]="'8px'"
                        >
                            <div
                                class="bg-neutral h-2 w-2 animate-bounce rounded-full"
                            ></div>
                            <div
                                class="anim-delay-1 bg-neutral h-2 w-2 animate-bounce rounded-full"
                            ></div>
                            <div
                                class="anim-delay-2 bg-neutral h-2 w-2 animate-bounce rounded-full"
                            ></div>
                            <span class="sr-only">Waiting for reply...</span>
                        </div>
                    }
                </div>
            </div>
        </div>
        @if (setup()) {
            <button
                icon
                matRipple
                class="bg-error text-error-content absolute top-2 left-2 h-12 w-12 shadow-sm"
                (click)="endService()"
            >
                <icon class="text-2xl">call_end</icon>
            </button>
        }
        @if (!setup()) {
            <button
                splash
                matRipple
                class="absolute inset-0 z-20 flex flex-col items-center justify-center text-white"
                (click)="setup.set(true)"
            >
                <h2 class="mb-4 text-4xl font-light">Touch to Start</h2>
            </button>
        }
    `,
    styles: [
        `
            [splash] {
                animation: crossfade 10s linear;
                animation-iteration-count: infinite;
            }
        `,
    ],
    imports: [
        MatRippleModule,
        IconComponent,
        SanitizePipe,
        DateFromPipe,
        TranslatePipe,
        UserAvatarComponent,
    ],
})
export class PanelViewComponent extends AsyncHandler {
    private _route = inject(ActivatedRoute);
    private _chat = inject(ChatService);
    private _org = inject(OrganisationService);

    public scale = 1;
    public readonly current_text = signal('');
    public readonly last_text = signal('');
    public readonly listening = signal(false);
    public readonly person_in_view = signal(false);
    public readonly debug = signal(true);
    public readonly setup = signal(false);
    public readonly error = signal<Record<string, boolean>>({});
    public readonly show_time = signal<Record<string, boolean>>({});
    public readonly show_info = signal(false);
    public offset = 0;
    private _time = 0;
    private _last_message = '';
    private _previous_message = '';
    private _context: any;

    public readonly icons = {
        list_function_schemas: 'help',
        call_function: 'settings',
        task_complete: 'check_circle',
    };

    public readonly messages = this._chat.messages;
    public readonly progress = this._chat.progress;
    public readonly waiting = computed(() => {
        const list = this._chat.messages();
        return (
            list.length !== 0 &&
            list[list.length - 1]?.user_id === this.user?.id
        );
    });

    constructor() {
        super();
        // Scroll to the latest message whenever the chat updates
        effect(() => {
            this.progress();
            this._scrollToBottom();
        });
        // Speak each new assistant message as it arrives
        effect(() => {
            const list = this._chat.messages();
            this._scrollToBottom();
            const msg_list = list.filter((_) => _.user_id !== this.user?.id);
            const last_message = msg_list[msg_list.length - 1];
            if (msg_list.length < 1 || this._last_message === last_message.id) {
                return;
            }
            this._last_message = last_message.id;
            this._speakText(last_message.message);
        });
    }

    public toggleMessageTime(id: string) {
        this.show_time.update((state) => ({ ...state, [id]: !state[id] }));
    }

    private _recognition: any;
    private readonly _video_el =
        viewChild<ElementRef<HTMLVideoElement>>('video');
    private readonly _canvas_el =
        viewChild<ElementRef<HTMLCanvasElement>>('canvas');
    private readonly _message_el =
        viewChild<ElementRef<HTMLDivElement>>('message_element');
    private readonly _waveform_canvas_el =
        viewChild<ElementRef<HTMLCanvasElement>>('waveform_canvas');

    public get user() {
        return currentUser();
    }

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        const start_voice = () => {
            this._setupVoiceRecognition();
            window.removeEventListener('click', start_voice);
        };
        window.addEventListener('click', start_voice);
        this._context = this._canvas_el().nativeElement.getContext('2d', {
            willReadFrequently: true,
        });
        this._setupWebcam();
        this._chat.startChat();
        this.interval('process_frame', () => this._processWebcamFrame(), 500);
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((p) => {
                if (p.has('debug')) this.debug.set(p.get('debug') === 'true');
            }),
        );
        this._listen();
    }

    public startListening() {
        if (this.listening() || !this.person_in_view()) return;
        this._recognition.start();
        this.listening.set(true);
    }

    public endService() {
        this.setup.set(false);
        this._recognition.stop();
        this.listening.set(false);
        this._last_text = '';
        this._spoken = false;
        this._chat.close();
    }

    private _model?: Promise<CompiledModel>;

    private _loadModel() {
        if (!this._model) {
            const assets_path = `${location.origin}${location.pathname}assets`;
            this._model = loadLiteRt(`${assets_path}/litert/`).then(() =>
                loadAndCompile(
                    `${assets_path}/yolov8n_litert_model/model.tflite`,
                    {
                        accelerator: isWebGPUSupported() ? 'webgpu' : 'wasm',
                    },
                ),
            );
        }
        return this._model;
    }

    private _spoken = false;
    private _processing_frame = false;

    private async _processWebcamFrame() {
        if (!this.setup() || this._processing_frame) return;
        this._processing_frame = true;
        let input_tensor: Tensor | undefined;
        let output_tensors: Tensor[] = [];
        try {
            const model = await this._loadModel();
            input_tensor = this._webcamToTensor();
            output_tensors = await model.run(input_tensor);
            const prediction_tensor = output_tensors[0];
            const predictions =
                prediction_tensor.toTypedArray() as Float32Array;
            const person_detected = this._containsPerson(
                predictions,
                prediction_tensor.type.layout.dimensions,
            );
            const old_state = this.person_in_view();
            this.person_in_view.set(person_detected);
            if (person_detected) {
                if (this.setup() && !this._spoken) {
                    this._speakText('Hello, how may I help you?');
                    this._spoken = true;
                    this.clearTimeout('clean_chat');
                }
                return;
            }
            if (old_state !== this.person_in_view() && this._recognition) {
                if (this.person_in_view()) {
                    this._recognition.start();
                    this.listening.set(true);
                } else {
                    this._recognition.stop();
                    this.listening.set(false);
                    this._last_text = '';
                    this._spoken = false;
                    this.timeout(
                        'clean_chat',
                        () => this._chat.close(),
                        15 * 1000,
                    );
                }
            }
        } finally {
            input_tensor?.delete();
            output_tensors.forEach((tensor) => tensor.delete());
            this._processing_frame = false;
        }
    }

    private _webcamToTensor() {
        const video_element = this._video_el().nativeElement;

        this._context.drawImage(video_element, 0, 0, 640, 640);
        const image_data = this._context.getImageData(0, 0, 640, 640).data;
        const pixel_count = 640 * 640;
        const input_data = new Float32Array(pixel_count * 3);
        for (let pixel_index = 0; pixel_index < pixel_count; pixel_index++) {
            const image_index = pixel_index * 4;
            input_data[pixel_index] = image_data[image_index] / 255;
            input_data[pixel_count + pixel_index] =
                image_data[image_index + 1] / 255;
            input_data[pixel_count * 2 + pixel_index] =
                image_data[image_index + 2] / 255;
        }
        return new Tensor(input_data, [1, 3, 640, 640]);
    }

    private _containsPerson(
        predictions: Float32Array,
        shape: Int32Array | number[],
    ) {
        const prediction_count = shape[2];
        const person_scores_offset = prediction_count * 4;
        for (let index = 0; index < prediction_count; index++) {
            if (predictions[person_scores_offset + index] > 0.2) return true;
        }
        return false;
    }

    private async _setupWebcam() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });
            this._video_el().nativeElement.srcObject = stream;
        } else {
            console.error('getUserMedia is not supported');
        }
    }

    private async _setupVoiceRecognition() {
        if (!loadVosklet) {
            return this.timeout('loadVosklet', () =>
                this._setupVoiceRecognition(),
            );
        }
        const SpeechRecognition =
            (window as any).SpeechRecognition ||
            (window as any).webkitSpeechRecognition;

        const recognition = new SpeechRecognition();
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            const { transcript } = event.results[0][0];
            // do something with transcript
            this.current_text.set(transcript);
            this.timeout('on_end', () => this._handleEnd(), 3000);
        };

        recognition.onerror = (event) => {
            console.warn('Speech Recognition Error:', event);
            if (event.error === 'no-speech') {
                this.current_text.set('');
                this.listening.set(false);
                return;
            }
            this.error.update((state) => ({
                ...state,
                speech_recognition: true,
            }));
        };

        recognition.onend = (event) => {
            // const { transcript } = event.results[0][0];
            // do something with transcript
            this._handleEnd();
            this.listening.set(false);
        };
        this._recognition = recognition;
        recognition.start();
        this.setup.set(true);
        this.listening.set(true);
        this.interval('check_listening', () => this.startListening(), 500);
    }

    public _last_text = '';

    private _speakText(text: string) {
        if (this._last_text === text) return;
        if (
            !(
                'speechSynthesis' in window &&
                'SpeechSynthesisUtterance' in window
            )
        ) {
            this.error.update((state) => ({
                ...state,
                speech_synthesis: true,
            }));
            return;
        }
        this._last_text = text;

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.pitch = 1;

        // Use a promise to ensure voices are loaded
        const setVoice = new Promise<void>((resolve) => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                const preferredVoice = voices.find(
                    (voice) => voice.voiceURI === 'Karen',
                );
                if (preferredVoice) {
                    utterance.voice = preferredVoice;
                }
                resolve();
            } else {
                window.speechSynthesis.onvoiceschanged = () => {
                    const voices = window.speechSynthesis.getVoices();
                    const preferredVoice = voices.find(
                        (voice) => voice.voiceURI === 'Karen',
                    );
                    if (preferredVoice) {
                        utterance.voice = preferredVoice;
                    }
                    resolve();
                };
            }
        });

        setVoice.then(() => {
            window.speechSynthesis.speak(utterance);
        });
    }

    private _handleEnd() {
        if (!this.setup()) return;
        this.last_text.set(this.current_text());
        this.current_text.set('');
        this.clearInterval('scale');
        this.scale = 1;
        const last_text = this.last_text();
        if (last_text.length <= 3) return;
        if (last_text === this._previous_message) return;
        this._chat.startChat();
        this._chat.sendMessage(last_text);
        this._previous_message = last_text;
        this.last_text.set('');
    }

    private _scrollToBottom() {
        this.timeout(
            'scroll_to_bottom',
            () => {
                const el = this._message_el().nativeElement;
                el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
            },
            50,
        );
    }

    private _audio_context: AudioContext;
    private _analyser: AnalyserNode;
    private _audio_bytes: Uint8Array;
    private _audio_source: MediaStreamAudioSourceNode;
    private _frame_id: number;

    private async _listen() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
            return;
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });
        const AudioContext =
            window.AudioContext || (window as any).webkitAudioContext;
        this._audio_context = new AudioContext();
        this._analyser = this._audio_context.createAnalyser();
        this._audio_bytes = new Uint8Array(this._analyser.frequencyBinCount);
        this._audio_source =
            this._audio_context.createMediaStreamSource(stream);
        this._audio_source.connect(this._analyser);
        this._frame_id = requestAnimationFrame(() => this._processWaveform());
    }

    private _frame_count = 0;

    private _processWaveform() {
        if (this._frame_count % 2 === 0) {
            this._analyser.getByteTimeDomainData(
                this._audio_bytes as Uint8Array<ArrayBuffer>,
            );
            this._drawWaveform();
        }
        this._frame_count += 1;
        this._frame_id = requestAnimationFrame(() => this._processWaveform());
    }

    private _drawWaveform() {
        if (!this.setup()) return;
        const canvas = this._waveform_canvas_el().nativeElement;
        const height = canvas.height;
        const width = canvas.width;
        const context = canvas.getContext('2d');
        let x = 0;
        const sliceWidth = (width * 1.0) / this._audio_bytes.length;

        context.lineWidth = 2;
        context.strokeStyle = '#000000';
        context.clearRect(0, 0, width, height);

        context.beginPath();
        context.moveTo(0, height / 2);
        for (const item of this._audio_bytes) {
            const y = (item / 255.0) * height;
            context.lineTo(x, y);
            x += sliceWidth;
        }
        context.lineTo(x, height / 2);
        context.stroke();
    }
}
