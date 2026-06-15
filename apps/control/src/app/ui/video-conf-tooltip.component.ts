import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CustomTooltipData, TranslatePipe } from '@placeos/components';

import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { ControlStateService } from '../control-state.service';
import { VideoCallDialViewComponent } from '../video-call/video-call-dial-view.component';
import { VideoCallStateService } from '../video-call/video-call-state.service';

@Component({
    selector: 'video-conf-tooltip',
    template: `
        @if (!call()) {
            <div
                class="bg-base-100 my-2 flex flex-col items-center rounded-sm shadow-sm"
            >
                <video-call-dial-view (close)="close()"></video-call-dial-view>
            </div>
        } @else {
            <div
                class="bg-base-100 my-2 flex flex-col items-center space-y-2 rounded-sm p-2 shadow-sm"
            >
                <h3 class="w-full p-2 text-center font-medium">
                    {{ 'APP.CONTROL.VC_IN_CALL' | translate }}
                </h3>
                <a
                    btn
                    matRipple
                    class="w-40"
                    [routerLink]="['/panel', id, 'call']"
                    routerLinkActive="inverse"
                >
                    {{ 'APP.CONTROL.VC_VIEW_CALL' | translate }}
                </a>
                <a
                    btn
                    matRipple
                    class="w-40"
                    [routerLink]="['/panel', id]"
                    [routerLinkActiveOptions]="{ exact: true }"
                    routerLinkActive="inverse"
                >
                    {{ 'APP.CONTROL.VC_VIEW_INPUTS' | translate }}
                </a>
            </div>
        }
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        RouterModule,
        TranslatePipe,
        MatRippleModule,
        VideoCallDialViewComponent,
    ],
})
export class VideoConferenceTooltipComponent {
    private _state = inject(ControlStateService);
    private _vc_state = inject(VideoCallStateService);
    private _ref = inject(CustomTooltipData);

    public readonly dial_number = signal('');
    public readonly loading = signal(false);
    public readonly call = toSignal(this._vc_state.call);

    public get id(): string {
        return this._state.id;
    }

    public addDigit(digit: string) {
        this.dial_number.update((v) => v + digit);
    }

    public close() {
        this._ref.close();
    }
}
