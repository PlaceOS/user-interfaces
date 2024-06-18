import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, currentUser } from '@placeos/common';
import { ChatService } from 'libs/components/src/lib/chat/chat.service';
import { map } from 'rxjs/operators';

import * as tf from '@tensorflow/tfjs';

declare let loadVosklet: any;

@Component({
    selector: 'app-panel-view',
    template: `
        <div class="flex items-center justify-center h-full w-full">
            <button
                class="relative flex items-center justify-center flex-1 h-full bg-base-100 p-8"
            >
                <div
                    class="h-[18vmin] w-[18vmin] m-4 rounded-full bg-base-content"
                    [style.transform]="'scale(' + scale + ')'"
                ></div>

                <div class="absolute bottom-0 inset-x-0 p-8 text-center">
                    <div class="text-sm">{{ current_text || last_text }}</div>
                </div>

                <div class="absolute bottom-0 inset-x-0 p-4 text-center"></div>
                <div
                    class="absolute top-2 left-1/2 -translate-x-1/2 p-4 text-center rounded-3xl bg-error text-error-content text-xs"
                    *ngIf="error.speech_recognition || error.speech_synthesis"
                >
                    <div
                        class="flex items-center justify-center w-full h-full"
                        *ngIf="error.speech_recognition"
                    >
                        Speech Recognition is not supported
                    </div>
                    <div
                        class="flex items-center justify-center w-full h-full"
                        *ngIf="error.speech_synthesis"
                    >
                        Speech Synthesis is not supported
                    </div>
                </div>
                <video
                    #video
                    autoplay
                    playsinline
                    [class.opacity-0]="!debug"
                    class="absolute bottom-4 left-4 w-48 h-48 object-cover rounded-xl bg-base-200 border-2 border-base-200"
                    [class.!border-success]="person_in_view"
                ></video>
                <canvas
                    #canvas
                    width="640"
                    height="640"
                    class="absolute opacity-0 pointer-events-none"
                ></canvas>
            </button>
            <div
                class="relative flex flex-col items-center justify-end h-full bg-base-200 p-4 w-[24rem]"
            >
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center space-y-4"
                    *ngIf="!(messages | async)?.length"
                >
                    <img
                        class="h-32 w-32 object-contain"
                        src="assets/icons/no-pending.svg"
                    />
                    <p class="opacity-30">
                        {{ 'PANEL.NO_MESSAGES' | translate }}
                    </p>
                </div>
                <div
                    class="flex flex-col m-2"
                    *ngFor="let message of messages | async"
                    [class.pr-4]="message.user_id !== user.id"
                    [class.pl-4]="message.user_id === user.id"
                    [class.items-left]="message.user_id !== user.id"
                    [class.items-end]="message.user_id === user.id"
                    (click)="show_time[message.id] = !show_time[message.id]"
                    [class.waiting-margin]="waiting | async"
                >
                    <div class="flex items-center space-x-2">
                        <div
                            class="text-sm text-base-content opacity-60 px-2 py-1"
                            *ngIf="message.user_id !== user.id"
                        >
                            Assistant
                        </div>
                        <div
                            class="text-xs  text-base-content opacity-40 px-2 py-1"
                        >
                            {{ message.timestamp + offset | dateFrom }}
                        </div>
                    </div>
                    <div
                        message
                        class="bg-base-100 border-base-300 p-4 rounded shadow text-sm markdown selectable"
                        [innerHTML]="message.content | sanitize"
                    ></div>
                </div>
                <div class="p-4" *ngIf="progress | async">
                    <button
                        class="block p-2 rounded border-base-300 bg-info text-info-content w-full"
                        (click)="show_info = !show_info"
                    >
                        <div class=" flex items-center space-x-2">
                            <app-icon class="text-2xl">{{
                                icons[(progress | async).function] || 'info'
                            }}</app-icon>
                            <p class="text-sm">
                                {{
                                    (progress | async).message ||
                                        (progress | async).function
                                }}
                            </p>
                        </div>
                        <div class="relative overflow-hidden w-full rounded">
                            <div
                                class="absolute inset-0 bg-base-100 opacity-10"
                            ></div>
                            <div
                                class="text-xs text-mono text-left p-2 break-words"
                                *ngIf="show_info"
                                [innerHTML]="
                                    (progress | async).content | sanitize
                                "
                            ></div>
                        </div>
                    </button>
                </div>
                <div
                    class="absolute right-2 flex items-center justify-center space-x-2 p-1 rounded-2xl bg-base-100 border border-neutral"
                    [style.bottom]="'8px'"
                    *ngIf="waiting | async"
                >
                    <div
                        class="h-2 w-2 bg-neutral rounded-full animate-bounce"
                    ></div>
                    <div
                        class="h-2 w-2 bg-neutral rounded-full animate-bounce anim-delay-1"
                    ></div>
                    <div
                        class="h-2 w-2 bg-neutral rounded-full animate-bounce anim-delay-2"
                    ></div>
                    <span class="sr-only">Waiting for reply...</span>
                </div>
            </div>
        </div>
        <button
            splash
            matRipple
            class="absolute inset-0 text-white flex flex-col items-center justify-center z-20"
            *ngIf="!listening"
        >
            <h2 class="font-light text-4xl mb-4">Touch to Start</h2>
        </button>
    `,
    styles: [
        `
            [splash] {
                animation: crossfade 10s linear;
                animation-iteration-count: infinite;
            }
        `,
    ],
})
export class PanelViewComponent extends AsyncHandler {
    public scale = 1;
    public current_text = '';
    public last_text = '';
    public listening = false;
    public person_in_view = false;
    public debug = false;
    public error: Record<string, boolean> = {};
    private _time = 0;
    private _last_message = '';
    private _context: any;

    public readonly icons = {
        list_function_schemas: 'help',
        call_function: 'settings',
        task_complete: 'check_circle',
    };

    public readonly messages = this._chat.messages;
    public readonly progress = this._chat.progress;
    public readonly waiting = this._chat.messages.pipe(
        map((_) => _.length !== 0 && _[_.length - 1]?.user_id === this.user?.id)
    );

    private _recognition: any;
    @ViewChild('video', { static: true })
    private _video_el: ElementRef<HTMLVideoElement>;
    @ViewChild('canvas', { static: true })
    private _canvas_el: ElementRef<HTMLCanvasElement>;

    public get user() {
        return currentUser();
    }

    constructor(private _route: ActivatedRoute, private _chat: ChatService) {
        super();
    }

    public ngOnInit() {
        const start_voice = () => {
            this._setupVoiceRecognition();
            window.removeEventListener('click', start_voice);
        };
        window.addEventListener('click', start_voice);
        this._context = this._canvas_el.nativeElement.getContext('2d', {
            willReadFrequently: true,
        });
        this._setupWebcam();
        this._chat.startChat();
        this.subscription(
            'chat.messages',
            this._chat.messages.subscribe((list) => {
                const msg_list = list.filter(
                    (_) => _.user_id !== this.user?.id
                );
                if (
                    msg_list.length < 1 ||
                    this._last_message === msg_list[0].id
                )
                    return;
                this._last_message = msg_list[0].id;
                this._speakText(msg_list[0].message);
            })
        );
        this.interval('process_frame', () => this._processWebcamFrame(), 500);
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((p) => {
                if (p.has('debug')) this.debug = p.get('debug') === 'true';
            })
        );
    }

    private _model: tf.GraphModel;

    private async _loadModel() {
        tf.setBackend('webgl');
        this._model = await tf.loadGraphModel(
            `${location.origin}${location.pathname}assets/yolov8x_web_model/model.json`
        );
    }

    private async _processWebcamFrame() {
        if (!this._model) await this._loadModel();
        tf.tidy(() => {
            const tensor = this._webcamToTensor();
            const predictions = this._model.predict(tensor);
            const detections = this._processPredictions(predictions, {
                0: 'person',
            });
            this.person_in_view = false;
            for (const { box, label } of detections) {
                if (label === 'person') {
                    this.person_in_view = true;
                    return;
                }
            }
        });
    }

    private _webcamToTensor() {
        const videoElement = this._video_el.nativeElement;

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
                    0.2
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
            this._video_el.nativeElement.srcObject = stream;
        } else {
            console.error('getUserMedia is not supported');
        }
    }

    private async _setupVoiceRecognition() {
        if (!loadVosklet) {
            return this.timeout('loadVosklet', () =>
                this._setupVoiceRecognition()
            );
        }
        console.log('Setup Speech Recognition');
        // Make sure sample rate matches that in the training data
        let ctx = new AudioContext({ sampleRate: 16000 });
        // Setup mic with correct sample rate
        let mic_node = ctx.createMediaStreamSource(
            await navigator.mediaDevices.getUserMedia({
                video: false,
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    channelCount: 1,
                    sampleRate: 16000,
                },
            })
        );
        // Load Vosklet module, model and recognizer
        let module = await loadVosklet();
        let model = await module.createModel(
            `${location.origin}${location.pathname}assets/vosk-model-small-en-us-0.15.tar.gz`,
            'model',
            'ID'
        );
        let recognizer = await module.createRecognizer(model, 16000);
        // Listen for result and partial result
        recognizer.addEventListener('result', (ev) => {
            const { text } = JSON.parse(ev.detail || '{ "text": "" }');
            this.last_text = text || '';
            this.current_text = '';
            this.clearInterval('scale');
            this.scale = 1;
            if (this.last_text.length <= 3) return;
            console.log('Sending message:', this.last_text);
            this._chat.sendMessage(this.last_text);
        });
        recognizer.addEventListener('partialResult', (ev) => {
            this.current_text = ev.detail?.partial || '';
        });
        // Create a transferer node to get audio data on the main thread
        let transferer = await module.createTransferer(ctx, 128 * 150);
        // Recognize data on arrival
        transferer.port.onmessage = (ev) => {
            recognizer.acceptWaveform(ev.data);
        };
        // Connect to microphone
        mic_node.connect(transferer);
        this.listening = true;
    }

    private _speakText(text: string) {
        console.log('Speak Text:', text);
        if (
            !(
                'speechSynthesis' in window &&
                'SpeechSynthesisUtterance' in window
            )
        ) {
            this.error.speech_synthesis = true;
            return;
        }

        const synth = window.speechSynthesis;

        const voices = synth.getVoices();
        const preferredVoice = voices.find(
            (voice) => voice.voiceURI === 'Karen'
        );

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.pitch = 1;

        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        utterance.onend = () => {
            // do something once all the text has been spoken
        };

        window.speechSynthesis.speak(utterance);
    }
}
