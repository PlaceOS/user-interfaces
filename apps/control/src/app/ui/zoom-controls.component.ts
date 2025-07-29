import {
    Component,
    ElementRef,
    inject,
    input,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { AsyncHandler, nextValueFrom } from '@placeos/common';
import { getModule } from '@placeos/ts-client';

import { ControlStateService } from '../control-state.service';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import ZoomMeeting from '@zoom/meetingsdk/embedded';
import { filter } from 'rxjs';

@Component({
    selector: `zoom-controls`,
    template: `
        <div class="absolute inset-2 rounded bg-base-200">
            <div
                #outlet
                class="h-full w-full"
                [class.opacity-0]="!pending()"
            ></div>
        </div>
        @if (!pending()) {
            <div
                class="absolute inset-0 flex items-center justify-center space-x-4 bg-base-100"
            >
                <button
                    matRipple
                    [disabled]="!current_meeting()"
                    class="overflow-hidden rounded-lg border border-base-300 bg-base-100 p-2 text-left shadow"
                    (click)="join(current_meeting().event_start)"
                >
                    <div
                        class="rounded bg-base-200 px-4 py-2 text-lg font-medium"
                    >
                        Current Meeting
                    </div>
                    <div class="min-h-20 w-64 p-4">
                        <div>
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
                    <button btn class="w-full" [disabled]="!current_meeting()">
                        Join
                    </button>
                </button>
                <button
                    matRipple
                    [disabled]="!next_meeting() || !next_pending()"
                    class="overflow-hidden rounded-lg border border-base-300 bg-base-100 p-2 text-left shadow"
                    (click)="join(next_meeting().event_start)"
                >
                    <div
                        class="rounded bg-base-200 px-4 py-2 text-lg font-medium"
                    >
                        Upcoming Meeting
                    </div>
                    <div class="min-h-20 w-64 p-4">
                        <div>
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
        }
    `,
    styles: [``],
    imports: [CommonModule, MatRippleModule],
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
    public readonly pending = signal(false);
    public readonly next_pending = signal(false);
    public readonly current_meeting = signal(null);
    public readonly next_meeting = signal(null);

    public ngOnInit() {
        this._zoom_client = ZoomMeeting.createClient();
        this._zoom_client.init({
            zoomAppRoot: this._outlet_el().nativeElement,
            language: 'en-US',
            customize: {
                meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite'],
                toolbar: {
                    buttons: [
                        {
                            text: 'Mute All',
                            className: 'MuteAllButton',
                            onClick: () => this._zoom_client.muteAll(true),
                        },
                    ],
                },
            },
        });
        this._listenToBindings();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.mod) this._listenToBindings();
    }

    public async join(time: number) {
        const sys_id = await nextValueFrom(this._service.system_id);
        const module = this.mod() || 'Zoom';
        const mod = getModule(sys_id, module);
        if (!mod) return;
        const meeting = await mod.execute('join_meeting', time ? [time] : []);
        console.log('Meeting joined:', meeting);
        this._zoom_client
            .join({ ...meeting })
            .then(() => console.log('Zoom meeting joined successfully'))
            .catch((error) => console.error(error));
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
                        const pending = mod.binding('meeting_pending');
                        this.subscription('pending-bind', pending.bind());
                        this.subscription(
                            'pending',
                            pending
                                .listen()
                                .subscribe((v) => this.pending.set(v)),
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
