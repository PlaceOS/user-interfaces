import {
    Component,
    computed,
    ElementRef,
    inject,
    input,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { AsyncHandler, nextValueFrom, notifyError } from '@placeos/common';
import { getModule } from '@placeos/ts-client';

import { ControlStateService } from '../control-state.service';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import ZoomMeeting from '@zoom/meetingsdk/embedded';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { filter } from 'rxjs';

type DeviceState = 'NONE' | 'MUTED' | 'UNMUTED';

interface Participant {
    id: string;
    name: string;
    video_muted: DeviceState;
    audio_muted: DeviceState;
    speaking: boolean;
    is_host: boolean;
}

@Component({
    selector: `zoom-controls`,
    template: `
        <div
            class="pointer-events-none absolute inset-2 overflow-hidden rounded bg-base-200 opacity-0"
        >
            <div #outlet class="h-full w-full"></div>
        </div>
        <div
            class="absolute inset-0 flex items-center justify-center bg-base-100"
        >
            <div class="flex h-full w-[18rem] flex-col space-y-2 p-4">
                <button
                    matRipple
                    [disabled]="!current_meeting()"
                    class="overflow-hidden rounded-lg border border-base-300 bg-base-100 p-2 text-left shadow"
                    (click)="join(current_meeting()?.event_start)"
                    [class.!border-info]="
                        joined() === current_meeting()?.event_start
                    "
                >
                    <div
                        class="rounded bg-base-200 px-4 py-2 text-lg font-medium"
                    >
                        Current Meeting
                    </div>
                    <div class="min-h-20 w-[20rem] p-4">
                        <div class="truncate">
                            {{ current_meeting()?.title }}
                            @if (!current_meeting()) {
                                <span class="opacity-30">No meeting</span>
                            }
                        </div>
                        @if (current_meeting()) {
                            <div class="text-sm">
                                Ends at
                                {{
                                    current_meeting()?.event_end * 1000
                                        | date: 'shortTime'
                                }}
                            </div>
                        }
                    </div>
                    <button
                        btn
                        class="w-full"
                        [disabled]="!current_meeting() || is_joined()"
                    >
                        Join
                    </button>
                </button>
                <button
                    matRipple
                    [disabled]="
                        !next_meeting() || !next_pending() || is_joined()
                    "
                    class="overflow-hidden rounded-lg border border-base-300 bg-base-100 p-2 text-left shadow"
                    (click)="join(next_meeting()?.event_start)"
                >
                    <div
                        class="rounded bg-base-200 px-4 py-2 text-lg font-medium"
                    >
                        Upcoming Meeting
                    </div>
                    <div class="min-h-20 w-[20rem] p-4">
                        <div class="truncate">
                            {{ next_meeting()?.title }}
                            @if (!next_meeting()) {
                                <span class="opacity-30"
                                    >No upcoming meeting</span
                                >
                            }
                        </div>
                        @if (next_meeting()) {
                            <div class="text-sm">
                                Starts at
                                {{
                                    next_meeting()?.event_start * 1000
                                        | date: 'shortTime'
                                }}
                            </div>
                        }
                    </div>
                    <button
                        btn
                        class="w-full"
                        [disabled]="!next_meeting() || !next_pending()"
                    >
                        Join
                    </button>
                </button>
            </div>
            <div class="h-full w-1/2 flex-1 py-4 pr-4">
                <div
                    class="relative flex h-full w-full space-x-2 overflow-hidden rounded-lg border border-base-300 bg-base-200 p-2 shadow"
                >
                    <div
                        class="relative flex flex-1 flex-col items-center space-y-2 rounded-lg border border-base-300 bg-base-100"
                    >
                        <div
                            class="flex w-full items-center space-x-2 border-b border-base-200 px-4 py-3"
                        >
                            <h3 class="font-medium">Call Actions</h3>
                        </div>
                        <div
                            class="relative flex w-full flex-col space-y-2 p-2"
                        >
                            <button
                                btn
                                matRipple
                                class="w-full rounded-full border border-base-300 bg-base-100 text-base-content"
                                (click)="toggleAudioMuteAll()"
                            >
                                <div class="flex w-full items-center text-left">
                                    <icon class="mr-2 text-2xl">{{
                                        audio_muted() ? 'mic_off' : 'mic'
                                    }}</icon>
                                    <div class="whitespace-nowrap pr-2">
                                        {{ audio_muted() ? 'Unmute' : 'Mute' }}
                                        All Audio
                                    </div>
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                class="w-full rounded-full border border-base-300 bg-base-100 text-base-content"
                                (click)="toggleVideoMuteAll()"
                            >
                                <div class="flex w-full items-center text-left">
                                    <icon class="mr-2 text-2xl">{{
                                        video_muted()
                                            ? 'videocam_off'
                                            : 'videocam'
                                    }}</icon>
                                    <div class="whitespace-nowrap pr-2">
                                        {{ video_muted() ? 'Unmute' : 'Mute' }}
                                        All Video
                                    </div>
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                class="w-full rounded-full border border-base-300 bg-base-100 text-base-content"
                                (click)="toggleSharing()"
                            >
                                <div class="flex w-full items-center text-left">
                                    <icon class="mr-2 text-2xl">share</icon>
                                    <div class="whitespace-nowrap pr-2">
                                        {{ sharing() ? 'Stop' : 'Start' }}
                                        Sharing
                                    </div>
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                class="w-full rounded-full border border-base-300 bg-base-100 text-base-content"
                                (click)="toggleRecording()"
                            >
                                <div class="flex w-full items-center text-left">
                                    <icon class="mr-2 text-2xl"
                                        >fiber_manual_record</icon
                                    >
                                    <div class="whitespace-nowrap pr-2">
                                        {{
                                            recording() === 'Stop'
                                                ? 'Start'
                                                : 'Stop'
                                        }}
                                        Recording
                                    </div>
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                class="w-full rounded-full border-0 bg-error text-error-content"
                                (click)="leave()"
                            >
                                <div
                                    class="m-0 flex w-full items-center text-left"
                                >
                                    <icon class="mr-2 text-2xl">call_end</icon>
                                    <div class="pr-2">Leave</div>
                                </div>
                            </button>
                        </div>
                        @if (recording() !== 'Stop') {
                            <div
                                class="absolute inset-x-2 bottom-2 flex items-center space-x-2 rounded-lg border border-error bg-error-light p-2"
                            >
                                <div class="m-2 h-4 w-4 rounded-full bg-error">
                                    <div
                                        class="h-full w-full animate-ping rounded-full bg-error"
                                    ></div>
                                </div>
                                <div>Recording in Progress</div>
                            </div>
                        }
                    </div>
                    <div
                        class="flex h-full flex-1 flex-col space-y-2 rounded-lg border border-base-300 bg-base-100 shadow"
                    >
                        <div
                            class="flex items-center space-x-2 border-b border-base-200 px-4 py-3"
                        >
                            <h3 class="font-medium">Participants</h3>
                            <div
                                class="rounded-full bg-info-light px-3 py-1 text-xs text-info shadow"
                            >
                                {{
                                    'COMMON.PEOPLE_COUNT'
                                        | translate
                                            : {
                                                  count: participants().length,
                                              }
                                            : participants().length
                                }}
                            </div>
                        </div>
                        <div
                            class="h-1/2 w-full flex-1 space-y-2 overflow-auto px-2 pb-2"
                        >
                            @if (participants().length) {
                                @for (user of participants(); track user.id) {
                                    <div
                                        class="flex items-center space-x-2 rounded border border-base-200 p-2"
                                        [class.!border-info]="user.speaking"
                                    >
                                        <div
                                            class="flex-1 truncate px-2 text-sm font-medium"
                                        >
                                            {{ user.name }}
                                        </div>
                                        @if (user.is_host) {
                                            <div class="text-xs text-info">
                                                Host
                                            </div>
                                        }
                                        <button
                                            icon
                                            matRipple
                                            class="flex h-9 w-9 items-center justify-center rounded-full border border-base-200"
                                            [disabled]="
                                                user.audio_muted === 'NONE'
                                            "
                                            [class.bg-error]="
                                                user.audio_muted === 'MUTED'
                                            "
                                            [matTooltip]="
                                                user.audio_muted === 'MUTED'
                                                    ? 'Unmute audio'
                                                    : 'Mute audio'
                                            "
                                            (click)="toggleUserAudio(user)"
                                        >
                                            <icon class="text-lg">{{
                                                user.audio_muted === 'MUTED'
                                                    ? 'mic_off'
                                                    : 'mic'
                                            }}</icon>
                                        </button>
                                        <button
                                            icon
                                            matRipple
                                            class="flex h-9 w-9 items-center justify-center rounded-full border border-base-200"
                                            [class.bg-error]="
                                                user.video_muted === 'MUTED'
                                            "
                                            [disabled]="
                                                user.video_muted === 'NONE'
                                            "
                                            [matTooltip]="
                                                user.video_muted === 'MUTED'
                                                    ? 'Unmute video'
                                                    : 'Mute video'
                                            "
                                            (click)="toggleUserVideo(user)"
                                        >
                                            <icon class="text-lg">{{
                                                user.video_muted === 'MUTED'
                                                    ? 'videocam_off'
                                                    : 'videocam'
                                            }}</icon>
                                        </button>
                                        <button
                                            icon
                                            matRipple
                                            class="flex h-9 w-9 items-center justify-center rounded-full border border-error text-error"
                                            matTooltip="Remove participant"
                                            [disabled]="user.is_host"
                                            (click)="removeParticipant(user)"
                                        >
                                            <icon class="text-lg"
                                                >person_remove</icon
                                            >
                                        </button>
                                    </div>
                                }
                            } @else {
                                <div
                                    class="flex h-full w-full items-center justify-center rounded-lg bg-base-200 p-8"
                                >
                                    <p class="opacity-30">
                                        No meeting participants
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                    @if (!is_joined()) {
                        <div
                            class="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-base-200"
                        >
                            <icon class="text-8xl opacity-30">arrow_back</icon>
                            <p class="opacity-60">
                                Join a meeting on the left to see the controls
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            [disabled] {
                pointer-events: none;
            }

            button[icon] {
                min-width: 0;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        IconComponent,
        MatTooltipModule,
        TranslatePipe,
    ],
})
export class ZoomControlsComponent
    extends AsyncHandler
    implements OnChanges, OnInit
{
    private _service = inject(ControlStateService);
    private _outlet_el = viewChild<ElementRef<HTMLDivElement>>('outlet');
    private _zoom_client: any;

    public readonly mod = input('Zoom');
    public readonly in_progress = signal(false);
    public readonly joined = signal(false);
    public readonly zoom_joined = signal(false);
    public readonly next_pending = signal(false);
    public readonly current_meeting = signal(null);
    public readonly next_meeting = signal(null);
    public readonly sharing = signal(false);
    public readonly recording = signal('Stop');
    public readonly is_joined = computed(
        () => this.joined() && this.zoom_joined(),
    );

    public readonly audio_muted = signal(false);
    public readonly video_muted = signal(false);
    public readonly participants = signal([]);
    public readonly user = signal(null);

    public async module() {
        const sys_id = await nextValueFrom(this._service.system_id);
        const module = this.mod() || 'Zoom';
        const mod = getModule(sys_id, module);
        return mod;
    }

    public ngOnInit() {
        this._zoom_client = ZoomMeeting.createClient();
        this._zoom_client.init({
            zoomAppRoot: this._outlet_el().nativeElement,
            language: 'en-US',
        });
        this._listenToZoomClient();
        this._listenToBindings();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.mod) this._listenToBindings();
    }

    public async leave() {
        const result = await this._zoom_client.leaveMeeting();
        console.log('Meeting left:', result);
        const module = await this.module();
        if (!module) return;
        await module.execute('leave_meeting');
    }

    public async join(time: number) {
        const module = await this.module();
        if (!module) return;
        const meeting = await module.execute(
            'join_meeting',
            time ? [time] : [],
        );
        console.log('Meeting joined:', meeting);
        this._zoom_client
            .join({ ...meeting })
            .then(() => {
                console.log('Zoom meeting joined successfully');
                this.zoom_joined.set(true);
                this.user.set(this._zoom_client.getCurrentUser());
            })
            .catch((error) => {
                this.zoom_joined.set(false);
                notifyError(
                    `Failed to join zoom meeting. Error: ${error.reason}`,
                );
            });
    }

    public async toggleAudioMuteAll() {
        const result = await this._zoom_client.muteAll(!this.audio_muted());
        console.log(result);
        const module = await this.module();
        if (!module) return;
        await module.execute('mic_mute', [!this.audio_muted()]);
        this.audio_muted.update((m) => !m);
    }

    public async toggleVideoMuteAll() {
        const result = await this._zoom_client.muteAll(!this.video_muted());
        console.log(result);
        const module = await this.module();
        if (!module) return;
        await module.execute('camera_mute', [!this.video_muted()]);
        this.video_muted.update((m) => !m);
    }

    public async toggleUserAudio(user: Participant) {
        if (user.audio_muted === 'NONE') return;
        const new_state = user.audio_muted === 'MUTED' ? false : true;
        const result = await this._zoom_client.mute(new_state, user.id);
        console.log(result);
        // const module = await this.module();
        // if (!module) return;
        // await module.execute('mic_mute', [!user.audio_muted)]);
        user.audio_muted = new_state ? 'MUTED' : 'UNMUTED';
    }

    public async toggleUserVideo(user: Participant) {
        // const result = await this._zoom_client.mute(!user.audio_muted, user.id);
        // console.log(result);
        // const module = await this.module();
        // if (!module) return;
        // await module.execute('camera_mute', [!user.video_muted]);
        // user.video_muted = !user.video_muted;
    }

    public async toggleSharing() {
        const module = await this.module();
        if (!module) return;
        await module.execute('share_content', [!this.sharing()]);
    }

    public async toggleRecording() {
        const module = await this.module();
        if (!module) return;
        await module.execute('recording', [
            this.recording() === 'Stop' ? 'Start' : 'Stop',
        ]);
    }

    public async removeParticipant(user: Participant) {
        if (user.id === this.user()?.userId) {
            this.leave();
            return;
        }
        const result = await this._zoom_client.expel(user.id);
        console.log(result);
        const module = await this.module();
        if (!module) return;
        await module.execute('remove_participant', [user.id]);
    }

    private _updateParticipant(details: any) {
        this.participants.update((users) => {
            const old_user = users.find((_) => _.id === details.userId) || {
                audio_muted: 'NONE',
                video_muted: 'NONE',
            };
            users = users.filter((_) => _.id !== details.userId);
            console.log(
                'Audio:',
                details.displayName || old_user.name,
                details.audio || `<EMPTY>`,
                old_user.audio !== 'NONE',
                old_user.audio_muted,
                details.audio || old_user.audio_muted !== 'NONE'
                    ? details.muted
                        ? 'MUTED'
                        : 'UNMUTED'
                    : '',
            );
            users.push({
                id: details.userId || old_user.id,
                name:
                    details.displayName ||
                    details.userName ||
                    old_user.name ||
                    '',
                is_host: details.isHost || old_user.is_host,
                audio_muted:
                    (details.audio || old_user.audio_muted !== 'NONE'
                        ? details.muted
                            ? 'MUTED'
                            : 'UNMUTED'
                        : '') ||
                    old_user.audio_muted ||
                    'NONE',
                video_muted:
                    (details.video != null || old_user.video_muted !== 'NONE'
                        ? 'UNMUTED'
                        : '') ||
                    old_user.video_muted ||
                    'NONE',
                speaking: old_user.speaking || false,
            });
            users = users.sort((a, b) => a.name.localeCompare(b.name));
            return users;
        });
    }

    private _removeParticipant(details: any) {
        this.participants.update((users) => {
            users = users.filter((_) => _.id !== details.userId);
            users = users.sort((a, b) => a.name.localeCompare(b.name));
            return users;
        });
    }

    private _listenToZoomClient() {
        const on_user_update = (details: any) => {
            console.log('on_user_update', details);
            if (details instanceof Array) {
                details.forEach((detail) => {
                    this._updateParticipant(detail);
                });
            } else {
                this._updateParticipant(details);
            }
        };
        this._zoom_client.on('user-added', on_user_update);
        this._zoom_client.on('user-updated', on_user_update);
        this._zoom_client.on('user-removed', (details: any) => {
            console.log('user-removed', details);
            if (details instanceof Array) {
                details.forEach((detail) => {
                    this._removeParticipant(detail);
                });
            } else {
                this._removeParticipant(details);
            }
        });
        this._zoom_client.on('active-speaker', (speakers: any[]) => {
            console.log('active-speaker', speakers);
            this.participants.update((users) => {
                for (const user of users) {
                    user.speaking = !!speakers.find(
                        ({ userId }) => userId === user.id,
                    );
                    this.timeout(
                        `clear-speaker_${user.id}`,
                        () => {
                            this.participants.update((list) =>
                                list.map((_) =>
                                    _.id === user.id
                                        ? { ..._, speaking: false }
                                        : _,
                                ),
                            );
                        },
                        1000,
                    );
                }
                return [...users];
            });
        });
        this._zoom_client.on('connection-change', (payload) => {
            console.log('connection-change', payload);
            if (payload.state === 'Closed') this.zoom_joined.set(false);
        });
    }

    private _listenToBindings() {
        this.timeout('bind', () => {
            this.subscription(
                'system',
                this._service.system_id
                    .pipe(filter((_) => !!_))
                    .subscribe((id) => {
                        const module = this.mod() || 'Zoom';
                        const mod = getModule(id, module);
                        if (!mod) return;
                        const in_progress = mod.binding('meeting_in_progress');
                        this.subscription(
                            'in_progress-bind',
                            in_progress.bind(),
                        );
                        this.subscription(
                            'in_progress',
                            in_progress
                                .listen()
                                .subscribe((v) => this.in_progress.set(v)),
                        );
                        const joined = mod.binding('meeting_joined');
                        this.subscription('joined-bind', joined.bind());
                        this.subscription(
                            'joined',
                            joined
                                .listen()
                                .subscribe((v) => this.joined.set(v)),
                        );
                        const sharing = mod.binding('share_content');
                        this.subscription('sharing-bind', sharing.bind());
                        this.subscription(
                            'sharing',
                            sharing
                                .listen()
                                .subscribe((v) => this.sharing.set(v)),
                        );
                        const recording = mod.binding('recording');
                        this.subscription('recording-bind', recording.bind());
                        this.subscription(
                            'recording',
                            recording
                                .listen()
                                .subscribe((v) => this.recording.set(v)),
                        );
                        const next_pending = mod.binding('next_pending');
                        this.subscription(
                            'next_pending-bind',
                            next_pending.bind(),
                        );
                        this.subscription(
                            'next_pending',
                            next_pending
                                .listen()
                                .subscribe((v) => this.next_pending.set(v)),
                        );
                        // Listend for bookings details
                        const bookings_mod = getModule(id, 'Bookings');
                        console.log('Bookings Module', bookings_mod);
                        if (!bookings_mod) return;
                        const current = bookings_mod.binding('current_booking');
                        this.subscription('current-bind', current.bind());
                        this.subscription(
                            'current',
                            current
                                .listen()
                                .subscribe((v) => this.current_meeting.set(v)),
                        );
                        const next = bookings_mod.binding('next_booking');
                        this.subscription('next-bind', next.bind());
                        this.subscription(
                            'next_pending',
                            next
                                .listen()
                                .subscribe((v) => this.next_meeting.set(v)),
                        );
                    }),
            );
        });
    }
}
