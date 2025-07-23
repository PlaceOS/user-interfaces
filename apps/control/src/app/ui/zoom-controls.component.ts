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

import ZoomMeeting from '@zoom/meetingsdk/embedded';

@Component({
    selector: `zoom-controls`,
    template: `
        <div class="absolute inset-2 rounded bg-base-200">
            <div #outlet></div>
        </div>
    `,
    styles: [``],
    imports: [],
})
export class ZoomControlsComponent
    extends AsyncHandler
    implements OnChanges, OnInit
{
    private _service = inject(ControlStateService);
    private _outlet_el = viewChild<ElementRef<HTMLDivElement>>('outlet');
    private _zoom_client: any;

    public readonly mod = input('Zoom');
    public readonly pending = signal(false);
    public readonly in_progress = signal(false);

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
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.mod) this._listenToBindings();
    }

    public async join(time: number) {
        const sys_id = await nextValueFrom(this._service.system_id);
        const mod = getModule(sys_id, this.mod());
        if (!mod) return;
        const meeting = await mod.execute('get_meeting', time ? [time] : []);
        this._zoom_client
            .join({ ...meeting })
            .then(() => console.log('Zoom meeting joined successfully'))
            .catch((error) => console.error(error));
    }

    private _listenToBindings() {
        this.subscription(
            'system',
            this._service.system_id.subscribe((id) => {
                const mod = getModule(id, this.mod());
                if (!mod) return;
                const in_progress = mod.binding('meeting_in_progress');
                const pending = mod.binding('meeting_pending');
                this.subscription('in_progress-bind', in_progress.bind());
                this.subscription(
                    'in_progress',
                    in_progress
                        .listen()
                        .subscribe((v) => this.in_progress.set(v)),
                );
                this.subscription('pending-bind', pending.bind());
                this.subscription(
                    'pending',
                    pending.listen().subscribe((v) => this.pending.set(v)),
                );
            }),
        );
    }
}
