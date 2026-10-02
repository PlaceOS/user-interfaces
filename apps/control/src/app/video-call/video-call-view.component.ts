import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { ControlStateService } from '../control-state.service';
import { ControlStatusBarComponent } from '../status-bar.component';
import { TopbarHeaderComponent } from '../topbar-header.component';
import { ControlConnectingComponent } from '../ui/connecting.component';
import { SplashComponent } from '../ui/splash.component';
import { VideoCallPageComponent } from './video-call-page.component';

@Component({
    selector: 'app-control-video-call-view',
    template: `
        @if (system()?.connected) {
            @if (system()?.active) {
                <div class="absolute inset-0 flex flex-col">
                    <topbar-header></topbar-header>
                    <div class="h-1/2 flex-1">
                        <div
                            class="bg-base-100 absolute inset-4 flex flex-col rounded-sm shadow-sm"
                            video-call-page
                        ></div>
                    </div>
                    <control-status-bar></control-status-bar>
                </div>
            } @else {
                <control-splash />
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
                background-color: var(--primary);
                color: #fff;
            }
        `,
    ],
    imports: [
        TopbarHeaderComponent,
        VideoCallPageComponent,
        ControlStatusBarComponent,
        ControlConnectingComponent,
        SplashComponent,
    ],
})
export class ControlVideoCallViewComponent {
    private _route = inject(ActivatedRoute);
    private _state = inject(ControlStateService);

    private readonly _param_map = toSignal(this._route.paramMap, {
        initialValue: this._route.snapshot.paramMap,
    });
    private readonly _query_param_map = toSignal(this._route.queryParamMap, {
        initialValue: this._route.snapshot.queryParamMap,
    });

    public readonly system = this._state.system;

    public readonly id = this._state.system_id;

    constructor() {
        effect(() => {
            const params = this._param_map();
            if (params.has('system')) this._state.setID(params.get('system'));
        });

        effect(() => {
            const params = this._query_param_map();
            if (params.get('join') === 'true') this._state.selectMeeting();
        });
    }
}
