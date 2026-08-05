import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { OrganisationService, setCurrentUser } from '@placeos/common';
import { ChatService, UserAvatarComponent } from '@placeos/components';
import { MockProvider } from 'ng-mocks';

import { PanelViewComponent } from '../app/panel-view.component';

// LiteRT is only exercised in the webcam/model pipeline which the
// behaviour tests never drive; stub it so the module import stays cheap.
vi.mock('@litertjs/core', () => ({
    loadLiteRt: vi.fn(),
    loadAndCompile: vi.fn(),
    isWebGPUSupported: vi.fn(() => false),
    Tensor: vi.fn(),
}));

interface MockMessage {
    id: string;
    chat_id: string;
    user_id: string;
    message: string;
    content: string;
    function?: string;
    timestamp: number;
}

function make_message(overrides: Partial<MockMessage>): MockMessage {
    return {
        id: 'm-1',
        chat_id: 'c-1',
        user_id: 'user-1',
        message: 'Hello there',
        content: 'Hello there',
        timestamp: 0,
        ...overrides,
    };
}

describe('PanelViewComponent', () => {
    let spectator: SpectatorRouting<PanelViewComponent>;
    let chat: {
        messages: ReturnType<typeof signal<MockMessage[]>>;
        progress: ReturnType<typeof signal<any>>;
        startChat: ReturnType<typeof vi.fn>;
        sendMessage: ReturnType<typeof vi.fn>;
        close: ReturnType<typeof vi.fn>;
    };

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
        setCurrentUser({ id: 'user-1', name: 'Tester' } as any);
        // ngOnInit wires up webcam/model/voice pipelines that use browser APIs
        // missing under jsdom. Stub the canvas context and the Vosklet global
        // so the window click listener it installs does not throw when tests
        // dispatch clicks; the pipelines themselves stay dormant.
        (globalThis as any).loadVosklet = false;
        HTMLCanvasElement.prototype.getContext = vi.fn(
            () =>
                ({
                    drawImage: vi.fn(),
                    getImageData: vi.fn(),
                    clearRect: vi.fn(),
                    beginPath: vi.fn(),
                    moveTo: vi.fn(),
                    lineTo: vi.fn(),
                    stroke: vi.fn(),
                }) as any,
        ) as any;
        // Provide speech synthesis stubs so the "speak on new message" effect
        // does not flag an unsupported-synthesis error under jsdom.
        (window as any).speechSynthesis = {
            cancel: vi.fn(),
            speak: vi.fn(),
            getVoices: vi.fn(() => []),
            onvoiceschanged: null,
        };
        (window as any).SpeechSynthesisUtterance = class {
            public rate = 1;
            public pitch = 1;
            public voice: any = null;
            constructor(public text: string) {}
        };
        chat = {
            messages: signal<MockMessage[]>([]),
            progress: signal<any>(null),
            startChat: vi.fn(),
            sendMessage: vi.fn(),
            close: vi.fn(),
        };
        spectator = create_component({
            providers: [{ provide: ChatService, useValue: chat }],
        });
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should toggle the visible timestamp state for a message', () => {
        const component = spectator.component;
        expect(component.show_time()['m-1']).toBeUndefined();

        component.toggleMessageTime('m-1');
        expect(component.show_time()['m-1']).toBe(true);

        component.toggleMessageTime('m-1');
        expect(component.show_time()['m-1']).toBe(false);
    });

    it('should mark itself waiting when the last message is from the user', () => {
        expect(spectator.component.waiting()).toBe(false);

        chat.messages.set([
            make_message({ id: 'a', user_id: 'assistant', message: 'Hi' }),
            make_message({ id: 'b', user_id: 'user-1', message: 'A question' }),
        ]);
        expect(spectator.component.waiting()).toBe(true);

        chat.messages.set([
            make_message({ id: 'b', user_id: 'user-1', message: 'A question' }),
            make_message({ id: 'c', user_id: 'assistant', message: 'Reply' }),
        ]);
        expect(spectator.component.waiting()).toBe(false);
    });

    it('should not start listening without a person in view', () => {
        const recognition = { start: vi.fn(), stop: vi.fn() };
        (spectator.component as any)._recognition = recognition;
        spectator.component.person_in_view.set(false);

        spectator.component.startListening();

        expect(recognition.start).not.toHaveBeenCalled();
        expect(spectator.component.listening()).toBe(false);
    });

    it('should start listening when a person is in view', () => {
        const recognition = { start: vi.fn(), stop: vi.fn() };
        (spectator.component as any)._recognition = recognition;
        spectator.component.person_in_view.set(true);

        spectator.component.startListening();

        expect(recognition.start).toHaveBeenCalledTimes(1);
        expect(spectator.component.listening()).toBe(true);
    });

    it('should not restart recognition while already listening', () => {
        const recognition = { start: vi.fn(), stop: vi.fn() };
        (spectator.component as any)._recognition = recognition;
        spectator.component.person_in_view.set(true);
        spectator.component.listening.set(true);

        spectator.component.startListening();

        expect(recognition.start).not.toHaveBeenCalled();
    });

    it('should detect a person above the confidence threshold', () => {
        const predictions = new Float32Array(15);
        predictions[13] = 0.21;

        expect(
            (spectator.component as any)._containsPerson(
                predictions,
                [1, 84, 3],
            ),
        ).toBe(true);

        predictions[13] = 0.19;
        expect(
            (spectator.component as any)._containsPerson(
                predictions,
                [1, 84, 3],
            ),
        ).toBe(false);
    });

    it('should tear down the session and close the chat on endService', () => {
        const recognition = { start: vi.fn(), stop: vi.fn() };
        (spectator.component as any)._recognition = recognition;
        spectator.component.setup.set(true);
        spectator.component.listening.set(true);

        spectator.component.endService();

        expect(spectator.component.setup()).toBe(false);
        expect(spectator.component.listening()).toBe(false);
        expect(recognition.stop).toHaveBeenCalledTimes(1);
        expect(chat.close).toHaveBeenCalledTimes(1);
    });

    it('should show the splash prompt until the panel is set up', () => {
        spectator.detectChanges();

        expect(spectator.query('[splash]')).toBeTruthy();
        expect(spectator.query('[splash]')?.textContent).toContain(
            'Touch to Start',
        );

        spectator.click('[splash]');
        spectator.detectChanges();

        expect(spectator.component.setup()).toBe(true);
        expect(spectator.query('[splash]')).toBeFalsy();
    });

    it('should render an end-service control once set up', () => {
        spectator.component.setup.set(true);
        spectator.detectChanges();

        const end_button = spectator.query('button[icon]');
        expect(end_button).toBeTruthy();
        expect(end_button?.textContent).toContain('call_end');
    });

    it('should render each chat message with its author label', () => {
        chat.messages.set([
            make_message({
                id: 'u1',
                user_id: 'user-1',
                message: 'What time is it?',
                content: 'What time is it?',
            }),
            make_message({
                id: 'a1',
                user_id: 'assistant',
                message: 'It is noon',
                content: 'It is noon',
            }),
        ]);
        spectator.detectChanges();

        const text = spectator.query('[message_element]')
            ? ''
            : spectator.element.textContent || '';
        expect(text).toContain('You');
        expect(text).toContain('Assistant');
        expect(text).toContain('What time is it?');
        expect(text).toContain('It is noon');
    });

    it('should show the empty state when there are no messages', () => {
        spectator.detectChanges();

        const placeholder = spectator.query(
            'img[src="assets/icons/no-pending.svg"]',
        );
        expect(placeholder).toBeTruthy();
    });

    it('should render the waiting indicator while awaiting a reply', () => {
        chat.messages.set([
            make_message({ id: 'a', user_id: 'assistant', message: 'Hi' }),
            make_message({ id: 'b', user_id: 'user-1', message: 'A question' }),
        ]);
        spectator.detectChanges();

        expect(spectator.query('.sr-only')?.textContent).toContain(
            'Waiting for reply...',
        );
    });

    it('should surface a speech recognition error banner', () => {
        spectator.component.error.set({ speech_recognition: true });
        spectator.detectChanges();

        expect(spectator.element.textContent).toContain(
            'Speech Recognition is not supported',
        );
    });

    it('should surface a speech synthesis error banner', () => {
        spectator.component.error.set({ speech_synthesis: true });
        spectator.detectChanges();

        expect(spectator.element.textContent).toContain(
            'Speech Synthesis is not supported',
        );
    });

    it('should render a progress notice and reveal detail when tapped', () => {
        chat.progress.set({
            function: 'call_function',
            message: 'Working on it',
            content: 'raw tool output',
        });
        spectator.detectChanges();
        expect(spectator.element.textContent).toContain('Working on it');
        expect(spectator.component.show_info()).toBe(false);

        spectator.click('button.bg-info');
        spectator.detectChanges();

        expect(spectator.component.show_info()).toBe(true);
        expect(spectator.element.textContent).toContain('raw tool output');
    });

    it('should show the listening indicator while recording', () => {
        spectator.component.listening.set(true);
        spectator.detectChanges();

        const indicators = spectator.queryAll('icon');
        const has_mic = indicators.some((el) =>
            (el.textContent || '').includes('mic'),
        );
        expect(has_mic).toBe(true);
    });
});
