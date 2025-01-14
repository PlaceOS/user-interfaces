import { Component, Inject } from '@angular/core';
import { CustomTooltipData } from '@placeos/components';

import { VideoCallStateService } from '../video-call/video-call-state.service';

@Component({
    selector: 'video-conf-tooltip',
    template: `
        <div
            class=" my-2 bg-base-100 shadow rounded flex flex-col items-center"
            *ngIf="!(call | async); else enabled_state"
        >
            <video-call-dial-view (close)="close()"></video-call-dial-view>
        </div>
        <ng-template #enabled_state>
            <div
                class=" my-2 p-2 bg-base-100 shadow rounded flex flex-col items-center space-y-2"
            >
                <h3 class="p-2 w-full text-center font-medium">
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
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class VideoConferenceTooltipComponent {
    public dial_number = '';
    public loading = false;
    public readonly call = this._vc_state.call;

    constructor(
        private _vc_state: VideoCallStateService,
        @Inject(CustomTooltipData) private _ref: any,
    ) {}

    public addDigit(digit: string) {
        this.dial_number += digit;
    }

    public close() {
        this._ref.close();
    }
}
