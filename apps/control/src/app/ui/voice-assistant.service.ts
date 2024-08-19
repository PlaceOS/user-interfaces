import { Injectable } from '@angular/core';
import { AsyncHandler, currentUser, randomInt } from '@placeos/common';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay } from 'rxjs/operators';

import { ChatService } from 'libs/components/src/lib/chat/chat.service';

import Artyom from 'artyom.js/build/artyom.js';

const VOICE = new Artyom();
const WAITING_PHRASES = ['One second...', 'One moment...', 'Working on it...'];
let _last_message: string;

@Injectable({
    providedIn: 'root',
})
export class VoiceAssistantService extends AsyncHandler {
    private _system_id = new BehaviorSubject('');
    private _active = new BehaviorSubject(false);

    public current_text: string = '';
    public error: Record<string, string | boolean> = {};

    public readonly active = this._active.asObservable();
    public readonly progress = this._chat_service.progress;
    public readonly waiting = this._chat_service.messages.pipe(
        map(
            (_) =>
                _.length !== 0 &&
                _[_.length - 1]?.user_id === currentUser()?.id,
        ),
        shareReplay(1),
    );

    private _voice = VOICE;

    constructor(private _chat_service: ChatService) {
        super();
        this.subscription(
            'system',
            this._system_id
                .pipe(
                    filter((_) => !!_),
                    distinctUntilChanged(),
                )
                .subscribe((id) => {
                    this._chat_service.setBinding(id);
                }),
        );
        this._setupVoiceRecognition();
        const user = currentUser();
        this.subscription(
            'chat.messages',
            this._chat_service.messages.subscribe((list) => {
                // this._scrollToBottom();
                const msg_list = list.filter((_) => _.user_id !== user?.id);
                const last_message = msg_list[msg_list.length - 1];
                if (msg_list.length < 1 || _last_message === last_message.id)
                    return;
                _last_message = last_message.id;
                this._speakText(last_message.message);
                this._active.next(false);
            }),
        );
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
        this._voice.fatality();
    }

    public setBinding(system_id: string) {
        this._system_id.next(system_id);
    }

    public activate() {
        if (this.error.speech_recognition) return;
        this._active.next(true);
        this.timeout('deactivate', () => this._active.next(false), 5000);
    }

    private _setupVoiceRecognition() {
        var commands = {
            indexes: [
                `hey place *`,
                `hey please *`,
                `hey plays *`,
                `a place *`,
                `who place *`,
                `who plays *`,
                `who please *`,
                `he plays *`,
                `hit plays *`,
            ],
            smart: true,
            action: (i, contents) => {
                this._active.next(true);
                if (contents.length <= 3) {
                    this.activate();
                    return;
                }
                this._chat_service.startChat();
                this._chat_service.sendMessage(`Hey PlaceOS, ${contents}`);
                this._speakText(
                    WAITING_PHRASES[randomInt(WAITING_PHRASES.length)],
                );
                this.timeout(
                    'deactivate',
                    () => this._active.next(false),
                    60 * 1000,
                );
            },
        };

        this._voice.addCommands(commands);
        this._voice.initialize({
            continuous: true,
            lang: navigator.language || (navigator as any).userLanguage,
            listen: true,
        });
        console.log('Initialised Voice Assistant');
    }

    private _speakText(text: string) {
        this._voice.say(text);
    }
}
