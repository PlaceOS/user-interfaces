import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    setCurrentUser,
    StaffUser,
} from '@placeos/common';
import { ChatService, UserAvatarComponent } from '@placeos/components';
import { MockProvider } from 'ng-mocks';

import { PanelViewComponent } from '../app/panel-view.component';

// Stub LiteRT so that tests can capture the tensor the webcam frame becomes.
vi.mock('@litertjs/core', () => ({
    loadLiteRt: vi.fn(),
    loadAndCompile: vi.fn(),
    isWebGPUSupported: vi.fn(() => false),
    Tensor: vi.fn(function (
        this: { data: Float32Array; delete: () => void },
        data: Float32Array,
    ) {
        this.data = data;
        this.delete = vi.fn();
    }),
}));

const USER_ID = 'user-1';
const GREETING = 'Hello, how may I help you?';
const MODEL_PIXELS = 640 * 640;

interface MockMessage {
    id: string;
    chat_id: string;
    user_id: string;
    message: string;
    content: string;
    timestamp: number;
}

function make_message(overrides: Partial<MockMessage>): MockMessage {
    return {
        id: 'm-1',
        chat_id: 'c-1',
        user_id: USER_ID,
        message: 'Hello there',
        content: 'Hello there',
        timestamp: 0,
        ...overrides,
    };
}

/** Stand-in for the browser SpeechRecognition API */
class FakeRecognition {
    public static last?: FakeRecognition;
    public interimResults = false;
    public lang = '';
    public onresult:
        | ((event: { results: { transcript: string }[][] }) => void)
        | null = null;
    public onerror: ((event: { error: string }) => void) | null = null;
    public onend: (() => void) | null = null;
    public start = vi.fn();
    public stop = vi.fn();
    public abort = vi.fn();

    constructor() {
        FakeRecognition.last = this;
    }

    /** Emit a (possibly interim) transcript */
    public say(transcript: string) {
        this.onresult?.({ results: [[{ transcript }]] });
    }
}

class FakeUtterance {
    public rate = 1;
    public pitch = 1;
    public voice: { voiceURI: string } | null = null;
    constructor(public text: string) {}
}

/** Private members of the panel that the tests drive directly */
interface PanelInternals {
    _recognition?: FakeRecognition;
    _model?: Promise<unknown>;
    _context: unknown;
    _setupVoiceRecognition(): Promise<void>;
    _containsPerson(predictions: Float32Array, shape: number[]): boolean;
}

describe('PanelViewComponent', () => {
    let spectator: SpectatorRouting<PanelViewComponent>;
    let chat: {
        messages: ReturnType<typeof signal<MockMessage[]>>;
        progress: ReturnType<typeof signal<unknown>>;
        setBinding: ReturnType<typeof vi.fn>;
        startChat: ReturnType<typeof vi.fn>;
        sendMessage: ReturnType<typeof vi.fn>;
        close: ReturnType<typeof vi.fn>;
    };
    let synthesis: {
        cancel: ReturnType<typeof vi.fn>;
        speak: ReturnType<typeof vi.fn<(u: FakeUtterance) => void>>;
        getVoices: ReturnType<typeof vi.fn<() => { voiceURI: string }[]>>;
        onvoiceschanged: (() => void) | null;
    };

    const internals = () => spectator.component as unknown as PanelInternals;
    const spoken = () => synthesis.speak.mock.calls.map(([u]) => u.text);

    const create_component = createRoutingFactory({
        component: PanelViewComponent,
        detectChanges: false,
        overrideComponents: [
            [UserAvatarComponent, { set: { template: '', imports: [] } }],
        ],
        providers: [
            MockProvider(OrganisationService, {
                waitUntilInitialised: () => Promise.resolve(),
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        FakeRecognition.last = undefined;
        setCurrentUser(new StaffUser({ id: USER_ID, name: 'Tester' }));
        // jsdom has no canvas or scrollTo. The panel needs both.
        Element.prototype.scrollTo = vi.fn();
        HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
            drawImage: vi.fn(),
            getImageData: vi.fn(),
            clearRect: vi.fn(),
            beginPath: vi.fn(),
            moveTo: vi.fn(),
            lineTo: vi.fn(),
            stroke: vi.fn(),
        })) as unknown as typeof HTMLCanvasElement.prototype.getContext;
        synthesis = {
            cancel: vi.fn(),
            speak: vi.fn(),
            getVoices: vi.fn(() => [{ voiceURI: 'Other' }]),
            onvoiceschanged: null,
        };
        Object.assign(window, {
            speechSynthesis: synthesis,
            SpeechSynthesisUtterance: FakeUtterance,
            SpeechRecognition: FakeRecognition,
        });
        chat = {
            messages: signal<MockMessage[]>([]),
            progress: signal<unknown>(null),
            setBinding: vi.fn(),
            startChat: vi.fn(),
            sendMessage: vi.fn(),
            close: vi.fn(),
        };
        spectator = create_component({
            providers: [{ provide: ChatService, useValue: chat }],
            params: { system_id: 'sys-7' },
        });
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.unstubAllGlobals();
        const win = window as unknown as Record<string, unknown>;
        delete win['speechSynthesis'];
        delete win['SpeechSynthesisUtterance'];
        delete win['SpeechRecognition'];
        Object.defineProperty(navigator, 'mediaDevices', {
            value: undefined,
            configurable: true,
        });
    });

    it('should chat with the routed system', async () => {
        vi.useFakeTimers();
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(0);

        expect(chat.setBinding).toHaveBeenCalledWith('sys-7');
        expect(chat.startChat).toHaveBeenCalled();
        expect(chat.setBinding.mock.invocationCallOrder[0]).toBeLessThan(
            chat.startChat.mock.invocationCallOrder[0],
        );
    });

    describe('UI', () => {
        it('should show the splash prompt until the panel is set up', () => {
            spectator.detectChanges();

            expect(spectator.query('[splash]')?.textContent).toContain(
                'Touch to Start',
            );

            spectator.click('[splash]');
            spectator.detectChanges();

            expect(spectator.component.setup()).toBe(true);
            expect(spectator.query('[splash]')).toBeFalsy();
        });

        it('should end the session from the end-call button', () => {
            const recognition = new FakeRecognition();
            internals()._recognition = recognition;
            spectator.component.setup.set(true);
            spectator.component.listening.set(true);
            spectator.detectChanges();

            spectator.click('button[icon]');
            spectator.detectChanges();

            expect(spectator.component.listening()).toBe(false);
            expect(recognition.stop).toHaveBeenCalledTimes(1);
            expect(chat.close).toHaveBeenCalledTimes(1);
            expect(spectator.query('[splash]')).toBeTruthy();
        });

        it('should label messages by author', () => {
            chat.messages.set([
                make_message({ id: 'u1', content: 'What time is it?' }),
                make_message({
                    id: 'a1',
                    user_id: 'assistant',
                    content: 'It is noon',
                }),
            ]);
            spectator.detectChanges();

            const rows = spectator
                .queryAll('[message]')
                .map((el) => el.parentElement?.textContent ?? '');
            expect(rows[0]).toContain('You');
            expect(rows[0]).toContain('What time is it?');
            expect(rows[1]).toContain('Assistant');
            expect(rows[1]).toContain('It is noon');
        });

        it('should toggle a message timestamp when the message is tapped', async () => {
            chat.messages.set([make_message({})]);
            spectator.detectChanges();

            expect(spectator.query('[message-time]')).toBeFalsy();

            spectator.click('[message]');
            await spectator.fixture.whenStable();
            expect(spectator.query('[message-time]')).toBeTruthy();

            spectator.click('[message]');
            await spectator.fixture.whenStable();
            expect(spectator.query('[message-time]')).toBeFalsy();
        });

        it('should show the waiting indicator only while a reply is pending', () => {
            const question = make_message({ id: 'q', message: 'A question' });
            chat.messages.set([question]);
            spectator.detectChanges();

            expect(spectator.component.waiting()).toBe(true);
            expect(spectator.query('.sr-only')?.textContent).toContain(
                'Waiting for reply...',
            );

            chat.messages.set([
                question,
                make_message({ id: 'r', user_id: 'assistant' }),
            ]);
            spectator.detectChanges();

            expect(spectator.component.waiting()).toBe(false);
            expect(spectator.query('.sr-only')).toBeFalsy();
        });

        it('should render a progress notice and reveal detail when tapped', () => {
            chat.progress.set({
                function: 'call_function',
                message: 'Working on it',
                content: 'raw tool output',
            });
            spectator.detectChanges();
            expect(
                spectator.query('button.bg-info icon')?.textContent?.trim(),
            ).toBe('settings');
            expect(spectator.element.textContent).toContain('Working on it');
            expect(spectator.element.textContent).not.toContain(
                'raw tool output',
            );

            spectator.click('button.bg-info');
            spectator.detectChanges();

            expect(spectator.element.textContent).toContain('raw tool output');
        });
    });

    describe('voice input', () => {
        beforeEach(async () => {
            vi.useFakeTimers();
            await internals()._setupVoiceRecognition();
        });

        it('should start listening once recognition is set up', () => {
            expect(FakeRecognition.last?.start).toHaveBeenCalledTimes(1);
            expect(spectator.component.setup()).toBe(true);
            expect(spectator.component.listening()).toBe(true);
        });

        it('should send the phrase after 3 seconds without new speech', () => {
            const recognition = FakeRecognition.last!;

            recognition.say('Book');
            vi.advanceTimersByTime(2000);
            recognition.say('Book a room');
            vi.advanceTimersByTime(2999);
            expect(chat.sendMessage).not.toHaveBeenCalled();
            expect(spectator.component.current_text()).toBe('Book a room');

            vi.advanceTimersByTime(1);
            expect(chat.sendMessage).toHaveBeenCalledTimes(1);
            expect(chat.sendMessage).toHaveBeenCalledWith('Book a room');
            expect(spectator.component.current_text()).toBe('');
        });

        it('should ignore short phrases and a repeat of the last phrase', () => {
            const recognition = FakeRecognition.last!;

            recognition.say('hey');
            vi.advanceTimersByTime(3000);
            recognition.say('Book a room');
            vi.advanceTimersByTime(3000);
            recognition.say('Book a room');
            vi.advanceTimersByTime(3000);

            expect(chat.sendMessage.mock.calls).toEqual([['Book a room']]);
        });

        it('should ignore speech after the service ends until set up again', () => {
            const recognition = FakeRecognition.last!;
            recognition.say('Book a room');
            vi.advanceTimersByTime(3000);

            spectator.component.endService();
            recognition.say('Find a desk');
            vi.advanceTimersByTime(3000);
            expect(chat.sendMessage).toHaveBeenCalledTimes(1);

            // A new session can ask the same thing as the last one
            spectator.component.setup.set(true);
            recognition.say('Book a room');
            vi.advanceTimersByTime(3000);
            expect(chat.sendMessage.mock.calls).toEqual([
                ['Book a room'],
                ['Book a room'],
            ]);
        });

        it('should send the pending phrase at once when recognition ends', () => {
            const recognition = FakeRecognition.last!;

            recognition.say('Book a room');
            recognition.onend?.();

            expect(chat.sendMessage).toHaveBeenCalledWith('Book a room');
            expect(spectator.component.listening()).toBe(false);
            // The pending 3s timer must not send it a second time
            vi.advanceTimersByTime(3000);
            expect(chat.sendMessage).toHaveBeenCalledTimes(1);
        });

        it('should resume listening every 500ms while a person is in view', () => {
            const recognition = FakeRecognition.last!;
            recognition.onend?.();
            vi.advanceTimersByTime(500);
            expect(recognition.start).toHaveBeenCalledTimes(1);

            spectator.component.person_in_view.set(true);
            vi.advanceTimersByTime(500);

            expect(recognition.start).toHaveBeenCalledTimes(2);
            expect(spectator.component.listening()).toBe(true);
        });

        it('should treat no-speech as idle and other errors as unsupported', () => {
            const recognition = FakeRecognition.last!;
            spectator.component.current_text.set('partial');

            recognition.onerror?.({ error: 'no-speech' });
            expect(spectator.component.current_text()).toBe('');
            expect(spectator.component.listening()).toBe(false);
            expect(spectator.component.error()).toEqual({});

            recognition.onerror?.({ error: 'not-allowed' });
            expect(spectator.component.error().speech_recognition).toBe(true);
        });
    });

    it('should set up voice recognition on the first click anywhere only', async () => {
        vi.useFakeTimers();
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(0);
        expect(FakeRecognition.last).toBeUndefined();

        document.body.click();
        const recognition = FakeRecognition.last;
        document.body.click();

        expect(recognition?.start).toHaveBeenCalledTimes(1);
        expect(FakeRecognition.last).toBe(recognition);
    });

    it('should hide the webcam preview when the debug query param is false', async () => {
        vi.useFakeTimers();
        spectator.detectChanges();
        await vi.advanceTimersByTimeAsync(0);
        const video = () => spectator.query('video')!;
        expect(video().classList).not.toContain('opacity-0');

        spectator.setRouteQueryParam('debug', 'false');
        spectator.detectChanges();
        expect(video().classList).toContain('opacity-0');

        spectator.setRouteQueryParam('debug', 'true');
        spectator.detectChanges();
        expect(video().classList).not.toContain('opacity-0');
    });

    it('should flag speech recognition as unsupported when the API is missing', async () => {
        delete (window as unknown as Record<string, unknown>)[
            'SpeechRecognition'
        ];

        await internals()._setupVoiceRecognition();
        spectator.detectChanges();

        expect(spectator.component.setup()).toBe(false);
        expect(spectator.element.textContent).toContain(
            'Speech Recognition is not supported',
        );
    });

    describe('voice output', () => {
        /** Run the component effects and the queued speech callback */
        const flush = async () => {
            spectator.detectChanges();
            await new Promise((resolve) => setTimeout(resolve));
        };

        it('should speak each new assistant reply once', async () => {
            const reply = make_message({
                id: 'a1',
                user_id: 'assistant',
                message: 'Room booked',
            });
            chat.messages.set([make_message({ id: 'u1' }), reply]);
            await flush();
            expect(spoken()).toEqual(['Room booked']);

            chat.messages.set([
                make_message({ id: 'u1' }),
                reply,
                make_message({ id: 'u2', message: 'Thanks' }),
            ]);
            await flush();
            expect(spoken()).toEqual(['Room booked']);

            chat.messages.update((list) => [
                ...list,
                make_message({
                    id: 'a2',
                    user_id: 'assistant',
                    message: 'You are welcome',
                }),
            ]);
            await flush();
            expect(spoken()).toEqual(['Room booked', 'You are welcome']);
        });

        it('should wait for voices to load and prefer the Karen voice', async () => {
            const karen = { voiceURI: 'Karen' };
            synthesis.getVoices.mockReturnValue([]);
            chat.messages.set([
                make_message({ id: 'a1', user_id: 'assistant' }),
            ]);
            await flush();
            expect(synthesis.speak).not.toHaveBeenCalled();

            synthesis.getVoices.mockReturnValue([{ voiceURI: 'Other' }, karen]);
            synthesis.onvoiceschanged?.();
            await new Promise((resolve) => setTimeout(resolve));

            expect(synthesis.speak).toHaveBeenCalledTimes(1);
            expect(synthesis.speak.mock.calls[0][0].voice).toBe(karen);
        });

        it('should flag speech synthesis as unsupported when the API is missing', async () => {
            delete (window as unknown as Record<string, unknown>)[
                'speechSynthesis'
            ];
            chat.messages.set([
                make_message({ id: 'a1', user_id: 'assistant' }),
            ]);
            await flush();

            expect(spectator.element.textContent).toContain(
                'Speech Synthesis is not supported',
            );
        });
    });

    describe('presence detection', () => {
        let person_score: number;
        let image_data: Uint8ClampedArray;
        let recognition: FakeRecognition;
        let model: { run: ReturnType<typeof vi.fn> };

        /** Let the 500ms frame interval process one webcam frame */
        const frame = () => vi.advanceTimersByTimeAsync(500);
        /** Model output with one prediction: 4 box values then the person score */
        const output = (score: number) => ({
            toTypedArray: () => new Float32Array([0, 0, 0, 0, score]),
            type: { layout: { dimensions: [1, 84, 1] } },
            delete: vi.fn(),
        });

        beforeEach(async () => {
            vi.useFakeTimers();
            spectator.detectChanges();
            // Let ngOnInit finish so that it does not replace the stubs below
            await vi.advanceTimersByTimeAsync(0);
            person_score = 0;
            image_data = new Uint8ClampedArray(MODEL_PIXELS * 4);
            internals()._context = {
                drawImage: vi.fn(),
                getImageData: vi.fn(() => ({ data: image_data })),
            };
            model = { run: vi.fn(async () => [output(person_score)]) };
            internals()._model = Promise.resolve(model);
            recognition = new FakeRecognition();
            internals()._recognition = recognition;
            spectator.component.setup.set(true);
        });

        it('should retry loading the model on a later frame after a failed load', async () => {
            const { loadLiteRt, loadAndCompile } =
                await import('@litertjs/core');
            vi.mocked(loadLiteRt)
                .mockRejectedValueOnce(new Error('offline'))
                .mockResolvedValueOnce(undefined);
            vi.mocked(loadAndCompile).mockResolvedValueOnce(
                model as unknown as Awaited<ReturnType<typeof loadAndCompile>>,
            );
            internals()._model = undefined;

            await frame();
            expect(model.run).not.toHaveBeenCalled();

            await frame();
            expect(loadLiteRt).toHaveBeenCalledTimes(2);
            expect(model.run).toHaveBeenCalledTimes(1);
        });

        it('should ignore frames until the panel is set up', async () => {
            spectator.component.setup.set(false);

            await frame();

            expect(model.run).not.toHaveBeenCalled();
        });

        it('should pass the frame to the model as planar normalised RGB', async () => {
            image_data.set([255, 102, 51, 255, 51, 255, 102, 255], 0);

            await frame();

            const [tensor] = model.run.mock.calls[0];
            const at = (channel: number, pixel: number) =>
                tensor.data[MODEL_PIXELS * channel + pixel];
            const f32 = (values: number[]) => values.map(Math.fround);
            expect([at(0, 0), at(1, 0), at(2, 0)]).toEqual(f32([1, 0.4, 0.2]));
            expect([at(0, 1), at(1, 1), at(2, 1)]).toEqual(f32([0.2, 1, 0.4]));
        });

        it('should free the input and output tensors after each frame', async () => {
            const result = output(0);
            model.run.mockResolvedValueOnce([result]);

            await frame();

            const [input] = model.run.mock.calls[0];
            expect(input.delete).toHaveBeenCalledTimes(1);
            expect(result.delete).toHaveBeenCalledTimes(1);
        });

        it('should skip frames while the model still runs the last one', async () => {
            let finish!: (outputs: unknown[]) => void;
            model.run.mockReturnValueOnce(
                new Promise((resolve) => (finish = resolve)),
            );

            await frame();
            await frame();
            await frame();
            expect(model.run).toHaveBeenCalledTimes(1);

            finish([output(0)]);
            await frame();
            expect(model.run).toHaveBeenCalledTimes(2);
        });

        it('should detect a person only above the 0.2 confidence threshold', () => {
            const predictions = new Float32Array(15);
            predictions[13] = 0.21;
            expect(internals()._containsPerson(predictions, [1, 84, 3])).toBe(
                true,
            );

            predictions[13] = 0.19;
            expect(internals()._containsPerson(predictions, [1, 84, 3])).toBe(
                false,
            );
        });

        it('should greet a visitor once while they stay in view', async () => {
            person_score = 0.9;

            await frame();
            await frame();

            expect(spectator.component.person_in_view()).toBe(true);
            expect(spoken()).toEqual([GREETING]);
        });

        it('should stop listening and close the chat 15s after the visitor leaves', async () => {
            person_score = 0.9;
            await frame();
            spectator.component.listening.set(true);

            person_score = 0;
            await frame();
            expect(spectator.component.person_in_view()).toBe(false);
            expect(spectator.component.listening()).toBe(false);
            expect(recognition.stop).toHaveBeenCalledTimes(1);

            await vi.advanceTimersByTimeAsync(14_999);
            expect(chat.close).not.toHaveBeenCalled();
            await vi.advanceTimersByTimeAsync(1);
            expect(chat.close).toHaveBeenCalledTimes(1);
        });

        it('should keep the chat and greet again when the visitor returns in time', async () => {
            person_score = 0.9;
            await frame();
            person_score = 0;
            await vi.advanceTimersByTimeAsync(10_000);

            person_score = 0.9;
            await frame();
            await vi.advanceTimersByTimeAsync(10_000);

            expect(chat.close).not.toHaveBeenCalled();
            expect(spoken()).toEqual([GREETING, GREETING]);
        });
    });

    it('should start listening only when idle with a person in view', () => {
        const recognition = new FakeRecognition();
        internals()._recognition = recognition;

        spectator.component.startListening();
        expect(recognition.start).not.toHaveBeenCalled();

        spectator.component.person_in_view.set(true);
        spectator.component.startListening();
        spectator.component.startListening();

        expect(recognition.start).toHaveBeenCalledTimes(1);
        expect(spectator.component.listening()).toBe(true);
    });

    it('should close the microphone waveform pipeline on destroy', async () => {
        const source = { connect: vi.fn(), disconnect: vi.fn() };
        const audio_close = vi.fn(async () => undefined);
        class FakeAudioContext {
            public state = 'running';
            public close = audio_close;
            public createAnalyser = () => ({
                frequencyBinCount: 4,
                getByteTimeDomainData: vi.fn(),
            });
            public createMediaStreamSource = () => source;
        }
        const cancel_frame = vi.fn();
        vi.stubGlobal('AudioContext', FakeAudioContext);
        vi.stubGlobal(
            'requestAnimationFrame',
            vi.fn(() => 42),
        );
        vi.stubGlobal('cancelAnimationFrame', cancel_frame);
        const stream = { getTracks: () => [] } as unknown as MediaStream;
        Object.defineProperty(navigator, 'mediaDevices', {
            value: { getUserMedia: vi.fn(async () => stream) },
            configurable: true,
        });

        spectator.detectChanges();
        await vi.waitFor(() => expect(source.connect).toHaveBeenCalled());
        spectator.fixture.destroy();

        expect(cancel_frame).toHaveBeenCalledWith(42);
        expect(source.disconnect).toHaveBeenCalledTimes(1);
        expect(audio_close).toHaveBeenCalledTimes(1);
    });

    it('should release camera and microphone streams on destroy, even late ones', async () => {
        const track = () => ({ stop: vi.fn() });
        const camera = track();
        const microphone = track();
        let resolve_microphone!: (stream: MediaStream) => void;
        const getUserMedia = vi.fn(
            (constraints: MediaStreamConstraints): Promise<MediaStream> =>
                constraints.video
                    ? Promise.resolve({
                          getTracks: () => [camera],
                      } as unknown as MediaStream)
                    : new Promise((resolve) => (resolve_microphone = resolve)),
        );
        Object.defineProperty(navigator, 'mediaDevices', {
            value: { getUserMedia },
            configurable: true,
        });

        spectator.detectChanges();
        await spectator.fixture.whenStable();
        const video = spectator.query<HTMLVideoElement>('video')!;
        await vi.waitFor(() => expect(video.srcObject).toBeTruthy());
        await vi.waitFor(() => expect(getUserMedia).toHaveBeenCalledTimes(2));
        expect(camera.stop).not.toHaveBeenCalled();

        spectator.fixture.destroy();
        expect(camera.stop).toHaveBeenCalledTimes(1);

        resolve_microphone({
            getTracks: () => [microphone],
        } as unknown as MediaStream);
        await vi.waitFor(() =>
            expect(microphone.stop).toHaveBeenCalledTimes(1),
        );
    });
});
