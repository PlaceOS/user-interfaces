import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, currentUser } from '@placeos/common';
import { ChatService } from 'libs/components/src/lib/chat/chat.service';
import { first, map, tap } from 'rxjs/operators';

import { OrganisationService } from '@placeos/organisation';
import * as tf from '@tensorflow/tfjs';

declare let loadVosklet: any;

@Component({
    selector: 'app-panel-view',
    template: `
        <div class="flex h-full w-full items-center justify-center">
            <button
                class="relative flex h-full flex-1 items-center justify-center bg-base-300 p-8"
                (click)="startListening()"
            >
                <canvas
                    #waveform_canvas
                    class="h-32 w-64"
                    width="256"
                    height="128"
                ></canvas>

                <div class="absolute inset-x-0 top-0 p-8 text-center">
                    <div class="text-sm">{{ current_text || last_text }}</div>
                </div>

                <div class="absolute inset-x-0 bottom-0 p-4 text-center"></div>
                @if (error.speech_recognition || error.speech_synthesis) {
                    <div
                        class="absolute left-1/2 top-2 -translate-x-1/2 rounded-3xl bg-error px-4 py-2 text-center text-xs text-error-content"
                    >
                        @if (error.speech_recognition) {
                            <div
                                class="flex h-full w-full items-center justify-center"
                            >
                                Speech Recognition is not supported
                            </div>
                        }
                        @if (error.speech_synthesis) {
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
                    [class.opacity-0]="!debug"
                    class="absolute bottom-4 left-4 h-48 w-48 rounded-xl border-[0.25rem] bg-base-200 object-cover"
                    [class.border-success]="person_in_view"
                    [class.border-base-200]="!person_in_view"
                ></video>
                @if (listening) {
                    <div
                        class="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-success text-success-content"
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
                class="relative flex h-full w-[24rem] flex-col justify-end overflow-auto bg-base-100"
            >
                @if (!(messages | async)?.length) {
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
                    @for (message of messages | async; track message) {
                        <div
                            class="my-2 flex space-x-4 p-2 hover:bg-base-200"
                            (click)="
                                show_time[message.id] = !show_time[message.id]
                            "
                            [class.waiting-margin]="waiting | async"
                        >
                            <a-user-avatar
                                [user]="{
                                    name: message.user_name || '',
                                    photo:
                                        message.user_id !== user.id
                                            ? 'assets/icons/ai-avatar.jpg'
                                            : 'assets/icons/user-avatar.jpg',
                                }"
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
                                        class="w-full px-2 py-1 text-right text-xs text-base-content opacity-40"
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
                    @if (progress | async) {
                        <div class="p-4">
                            <button
                                class="block w-full rounded border-base-300 bg-info p-2 text-info-content"
                                (click)="show_info = !show_info"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">{{
                                        icons[(progress | async).function] ||
                                            'info'
                                    }}</icon>
                                    <p class="text-sm">
                                        {{
                                            (progress | async).message ||
                                                (progress | async).function
                                        }}
                                    </p>
                                </div>
                                <div
                                    class="relative w-full overflow-hidden rounded"
                                >
                                    <div
                                        class="absolute inset-0 bg-base-100 opacity-10"
                                    ></div>
                                    @if (show_info) {
                                        <div
                                            class="text-mono break-words p-2 text-left text-xs"
                                            [innerHTML]="
                                                (progress | async).content
                                                    | sanitize
                                            "
                                        ></div>
                                    }
                                </div>
                            </button>
                        </div>
                    }
                    @if (waiting | async) {
                        <div
                            class="absolute right-2 flex items-center justify-center space-x-2 rounded-2xl border border-neutral bg-base-100 p-1"
                            [style.bottom]="'8px'"
                        >
                            <div
                                class="h-2 w-2 animate-bounce rounded-full bg-neutral"
                            ></div>
                            <div
                                class="anim-delay-1 h-2 w-2 animate-bounce rounded-full bg-neutral"
                            ></div>
                            <div
                                class="anim-delay-2 h-2 w-2 animate-bounce rounded-full bg-neutral"
                            ></div>
                            <span class="sr-only">Waiting for reply...</span>
                        </div>
                    }
                </div>
            </div>
        </div>
        @if (setup) {
            <button
                icon
                matRipple
                class="absolute left-2 top-2 h-12 w-12 bg-error text-error-content shadow"
                (click)="endService()"
            >
                <icon class="text-2xl">call_end</icon>
            </button>
        }
        @if (!setup) {
            <button
                splash
                matRipple
                class="absolute inset-0 z-20 flex flex-col items-center justify-center text-white"
                (click)="setup = true"
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
    standalone: false,
})
export class PanelViewComponent extends AsyncHandler {
    private _route = inject(ActivatedRoute);
    private _chat = inject(ChatService);
    private _org = inject(OrganisationService);

    public scale = 1;
    public current_text = '';
    public last_text = '';
    public listening = false;
    public person_in_view = false;
    public debug = true;
    public setup = false;
    public error: Record<string, boolean> = {};
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
    public readonly progress = this._chat.progress.pipe(
        tap(() => this._scrollToBottom()),
    );
    public readonly waiting = this._chat.messages.pipe(
        map(
            (_) => _.length !== 0 && _[_.length - 1]?.user_id === this.user?.id,
        ),
    );

    private _recognition: any;
    private readonly _video_el = viewChild<ElementRef<HTMLVideoElement>>('video');
    private readonly _canvas_el = viewChild<ElementRef<HTMLCanvasElement>>('canvas');
    private readonly _message_el = viewChild<ElementRef<HTMLDivElement>>('message_element');
    private readonly _waveform_canvas_el = viewChild<ElementRef<HTMLCanvasElement>>('waveform_canvas');

    public get user() {
        return currentUser();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => !!_)).toPromise();
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
        this.subscription(
            'chat.messages',
            this._chat.messages.subscribe((list) => {
                this._scrollToBottom();
                const msg_list = list.filter(
                    (_) => _.user_id !== this.user?.id,
                );
                const last_message = msg_list[msg_list.length - 1];
                if (
                    msg_list.length < 1 ||
                    this._last_message === last_message.id
                )
                    return;
                this._last_message = last_message.id;
                this._speakText(last_message.message);
            }),
        );
        this.interval('process_frame', () => this._processWebcamFrame(), 500);
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((p) => {
                if (p.has('debug')) this.debug = p.get('debug') === 'true';
            }),
        );
        this._listen();
    }

    public startListening() {
        if (this.listening || !this.person_in_view) return;
        this._recognition.start();
        this.listening = true;
    }

    public endService() {
        this.setup = false;
        this._recognition.stop();
        this.listening = false;
        this._last_text = '';
        this._spoken = false;
        this._chat.close();
    }

    private _model: tf.GraphModel;

    private async _loadModel() {
        tf.setBackend('webgl');
        this._model = await tf.loadGraphModel(
            `${location.origin}${location.pathname}assets/yolov8x_web_model/model.json`,
        );
    }

    private _spoken = false;

    private async _processWebcamFrame() {
        if (!this.setup) return;
        if (!this._model) await this._loadModel();
        tf.tidy(() => {
            const tensor = this._webcamToTensor();
            const predictions = this._model.predict(tensor);
            const detections = this._processPredictions(predictions, {
                0: 'person',
            });
            const old_state = this.person_in_view;
            this.person_in_view = false;
            for (const { box, label } of detections) {
                if (label === 'person') {
                    this.person_in_view = true;
                    if (this.setup && !this._spoken) {
                        this._speakText('Hello, how may I help you?');
                        this._spoken = true;
                        this.clearTimeout('clean_chat');
                    }
                    return;
                }
            }
            if (old_state !== this.person_in_view && this._recognition) {
                if (this.person_in_view) {
                    this._recognition.start();
                    this.listening = true;
                } else {
                    this._recognition.stop();
                    this.listening = false;
                    this._last_text = '';
                    this._spoken = false;
                    this.timeout(
                        'clean_chat',
                        () => this._chat.close(),
                        15 * 1000,
                    );
                }
            }
        });
    }

    private _webcamToTensor() {
        const videoElement = this._video_el().nativeElement;

        this._context.drawImage(videoElement, 0, 0, 640, 640);
        const imageData = this._context.getImageData(0, 0, 640, 640);
        const tensor = tf.browser.fromPixels(imageData);

        return tf.cast(tensor, 'float32').div(tf.scalar(255)).expandDims(0);
    }

    private _processPredictions(predictions, classNames) {
        return tf.tidy(() => {
            const transRes = predictions.transpose([0, 2, 1]);
            const boxes = this._calculateBoundingBoxes(transRes);
            const rawScores = transRes
                .slice([0, 0, 4], [-1, -1, Object.keys(classNames).length])
                .squeeze(0);
            const [scores, labels] = [rawScores.max(1), rawScores.argMax(1)];

            const indices = tf.image
                .nonMaxSuppression(
                    boxes,
                    scores,
                    predictions.shape[2],
                    0.45,
                    0.2,
                )
                .arraySync();
            return indices.map((i) => {
                // Extract predictions
                const box = boxes.slice([i, 0], [1, -1]).squeeze().arraySync();
                const label = labels.slice([i], [1]).arraySync()[0];
                return { box, label: classNames[label] };
            });
        });
    }

    private _calculateBoundingBoxes(transRes) {
        const [xCenter, yCenter, width, height] = [
            transRes.slice([0, 0, 0], [-1, -1, 1]),
            transRes.slice([0, 0, 1], [-1, -1, 1]),
            transRes.slice([0, 0, 2], [-1, -1, 1]),
            transRes.slice([0, 0, 3], [-1, -1, 1]),
        ];

        const topLeftX = tf.sub(xCenter, tf.div(width, 2));
        const topLeftY = tf.sub(yCenter, tf.div(height, 2));
        return tf.concat([topLeftX, topLeftY, width, height], 2).squeeze();
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
            this.current_text = transcript;
            this.timeout('on_end', () => this._handleEnd(), 3000);
        };

        recognition.onerror = (event) => {
            console.warn('Speech Recognition Error:', event);
            if (event.error === 'no-speech') {
                this.current_text = '';
                this.listening = false;
                return;
            }
            this.error.speech_recognition = true;
        };

        recognition.onend = (event) => {
            // const { transcript } = event.results[0][0];
            // do something with transcript
            this._handleEnd();
            this.listening = false;
        };
        this._recognition = recognition;
        recognition.start();
        this.setup = true;
        this.listening = true;
        this.interval('check_listening', () => this.startListening(), 500);
    }

    public _last_text: string = '';

    private _speakText(text: string) {
        if (this._last_text === text) return;
        if (
            !(
                'speechSynthesis' in window &&
                'SpeechSynthesisUtterance' in window
            )
        ) {
            this.error.speech_synthesis = true;
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
        if (!this.setup) return;
        this.last_text = this.current_text;
        this.current_text = '';
        this.clearInterval('scale');
        this.scale = 1;
        if (this.last_text.length <= 3) return;
        if (this.last_text === this._previous_message) return;
        this._chat.startChat();
        this._chat.sendMessage(this.last_text);
        this._previous_message = this.last_text;
        this.last_text = '';
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
            this._analyser.getByteTimeDomainData(this._audio_bytes);
            this._drawWaveform();
        }
        this._frame_count += 1;
        this._frame_id = requestAnimationFrame(() => this._processWaveform());
    }

    private _drawWaveform() {
        if (!this.setup) return;
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
