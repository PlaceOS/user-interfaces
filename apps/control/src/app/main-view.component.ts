import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { ControlAdvancedViewComponent } from './advanced-view.component';
import { ControlStateService } from './control-state.service';
import { ControlStatusBarComponent } from './status-bar.component';
import { TopbarHeaderComponent } from './topbar-header.component';
import { ControlConnectingComponent } from './ui/connecting.component';
import { NextMeetingComponent } from './ui/next-meeting.component';
import { SplashComponent } from './ui/splash.component';

@Component({
    selector: 'app-control-main-view',
    template: `
        @if (system()?.connected) {
            @if (system()?.active) {
                <div class="bg-base-200 absolute inset-0 flex flex-col">
                    <topbar-header></topbar-header>
                    <control-advanced-view
                        class="h-1/2 flex-1 overflow-hidden bg-[#f0f0f0] text-black/85"
                    />
                    <control-status-bar></control-status-bar>
                </div>
            } @else {
                <control-splash>
                    <next-meeting class="mt-8" />
                </control-splash>
            }
        } @else {
            <control-connecting />
        }
    `,
    styles: [
        `
            :host {
                display: block;
                position: relative;
                width: 100%;
                height: 100%;
            }

            :host > div {
                color: #fff;
            }
        `,
    ],
    imports: [
        TopbarHeaderComponent,
        ControlAdvancedViewComponent,
        SplashComponent,
        ControlStatusBarComponent,
        ControlConnectingComponent,
        NextMeetingComponent,
    ],
})
export class ControlMainViewComponent {
    private _route = inject(ActivatedRoute);
    private _state = inject(ControlStateService);

    private readonly _param_map = toSignal(this._route.paramMap);
    private readonly _query_param_map = toSignal(this._route.queryParamMap);

    public readonly system = this._state.system;

    constructor() {
        effect(() => {
            const params = this._param_map();
            if (params?.has('system')) this._state.setID(params.get('system'));
        });

        effect(() => {
            const params = this._query_param_map();
            if (params?.get('join') === 'true') this._state.selectMeeting();
        });
    }
}
