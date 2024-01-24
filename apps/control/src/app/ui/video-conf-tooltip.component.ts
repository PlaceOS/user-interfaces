import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomTooltipData } from '@placeos/components';
import { getModule } from '@placeos/ts-client';
import { take } from 'rxjs/operators';
import { ControlStateService } from '../control-state.service';
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
                <h3 class="p-2 w-full text-center font-medium">In Call</h3>
                <a
                    btn
                    matRipple
                    class="w-40"
                    [routerLink]="['/panel', id, 'call']"
                    routerLinkActive="inverse"
                >
                    View Call
                </a>
                <a
                    btn
                    matRipple
                    class="w-40"
                    [routerLink]="['/panel', id]"
                    [routerLinkActiveOptions]="{ exact: true }"
                    routerLinkActive="inverse"
                >
                    View Inputs
                </a>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class VideoConferenceTooltipComponent {
    public dial_number = '';
    public loading = false;
    public readonly call = this._vc_state.call;

    constructor(
        private _vc_state: VideoCallStateService,
        @Inject(CustomTooltipData) private _ref: any
    ) {}

    public addDigit(digit: string) {
        this.dial_number += digit;
    }

    public close() {
        this._ref.close();
    }
}
