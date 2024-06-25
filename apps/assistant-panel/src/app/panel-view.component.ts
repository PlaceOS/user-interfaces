import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, currentUser } from '@placeos/common';
import { ChatService } from 'libs/components/src/lib/chat/chat.service';
import { map, tap } from 'rxjs/operators';

import * as tf from '@tensorflow/tfjs';

declare let loadVosklet: any;

@Component({
    selector: 'app-panel-view',
    template: `
        <div class="flex items-center justify-center h-full w-full">
            <button
                class="relative flex items-center justify-center flex-1 h-full bg-base-300 p-8"
                (click)="startListening()"
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
                    class="absolute top-2 left-1/2 -translate-x-1/2 px-4 py-2 text-center rounded-3xl bg-error text-error-content text-xs"
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
                <div
                    class="absolute bottom-4 left-4 bg-warning h-2 w-2 rounded-full"
                    [class.!bg-success]="person_in_view"
                ></div>
                <div
                    class="absolute bottom-4 right-4 bg-success text-success-content h-12 w-12 rounded-full flex items-center justify-center"
                    *ngIf="listening"
                >
                    <app-icon class="text-2xl">mic</app-icon>
                </div>
                <canvas
                    #canvas
                    width="640"
                    height="640"
                    class="absolute opacity-0 pointer-events-none"
                ></canvas>
            </button>
            <div
                class="relative w-[24rem] h-full overflow-auto bg-base-100 flex flex-col justify-end"
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
                <div class="max-h-full overflow-auto w-full" #message_element>
                    <div
                        class="my-2 p-2 flex space-x-4 hover:bg-base-200"
                        *ngFor="let message of messages | async"
                        (click)="show_time[message.id] = !show_time[message.id]"
                        [class.waiting-margin]="waiting | async"
                    >
                        <a-user-avatar
                            [user]="{
                                name: message.user_name || '',
                                photo:
                                    message.user_id !== user.id
                                        ? '/assets/icons/ai-avatar.jpg'
                                        : '/assets/icons/user-avatar.jpg'
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
                                    class="text-xs text-base-content opacity-40 px-2 py-1 w-full text-right"
                                >
                                    {{ message.timestamp + offset | dateFrom }}
                                </div>
                            </div>
                            <div
                                message
                                class="markdown selectable text-sm"
                                [innerHTML]="message.content | sanitize"
                            ></div>
                        </div>
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
                            <div
                                class="relative overflow-hidden w-full rounded"
                            >
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
        </div>
        <button
            splash
            matRipple
            class="absolute inset-0 text-white flex flex-col items-center justify-center z-20"
            *ngIf="!setup"
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
        tap(() => this._scrollToBottom())
    );
    public readonly waiting = this._chat.messages.pipe(
        map((_) => _.length !== 0 && _[_.length - 1]?.user_id === this.user?.id)
    );

    private _recognition: any;
    @ViewChild('video', { static: true })
    private _video_el: ElementRef<HTMLVideoElement>;
    @ViewChild('canvas', { static: true })
    private _canvas_el: ElementRef<HTMLCanvasElement>;
    @ViewChild('message_element', { static: true })
    private _message_el: ElementRef<HTMLDivElement>;

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
                this._scrollToBottom();
                const msg_list = list.filter(
                    (_) => _.user_id !== this.user?.id
                );
                const last_message = msg_list[msg_list.length - 1];
                if (
                    msg_list.length < 1 ||
                    this._last_message === last_message.id
                )
                    return;
                this._last_message = last_message.id;
                this._speakText(last_message.message);
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

    public startListening() {
        if (this.listening || !this.person_in_view) return;
        this._recognition.start();
        this.listening = true;
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
            const old_state = this.person_in_view;
            this.person_in_view = false;
            for (const { box, label } of detections) {
                if (label === 'person') {
                    this.person_in_view = true;
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

    private _speakText(text: string) {
        if (
            !(
                'speechSynthesis' in window &&
                'SpeechSynthesisUtterance' in window
            )
        ) {
            this.error.speech_synthesis = true;
            return;
        }

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
                    (voice) => voice.voiceURI === 'Karen'
                );
                if (preferredVoice) {
                    utterance.voice = preferredVoice;
                }
                resolve();
            } else {
                window.speechSynthesis.onvoiceschanged = () => {
                    const voices = window.speechSynthesis.getVoices();
                    const preferredVoice = voices.find(
                        (voice) => voice.voiceURI === 'Karen'
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
        this.last_text = this.current_text;
        this.current_text = '';
        this.clearInterval('scale');
        this.scale = 1;
        if (this.last_text.length <= 3) return;
        if (this.last_text === this._previous_message) return;
        this._chat.sendMessage(this.last_text);
        this._previous_message = this.last_text;
        this.last_text = '';
    }

    private _scrollToBottom() {
        this.timeout(
            'scroll_to_bottom',
            () => {
                const el = this._message_el.nativeElement;
                el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
            },
            50
        );
    }
}
