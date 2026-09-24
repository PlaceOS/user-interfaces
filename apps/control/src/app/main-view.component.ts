import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { VERSION } from '@placeos/common';
import { ChangelogService, TranslatePipe } from '@placeos/components';

import { DatePipe } from '@angular/common';
import { ControlStateService } from './control-state.service';
import { ControlPageViewComponent } from './page-view.component';
import { ControlStatusBarComponent } from './status-bar.component';
import { TopbarHeaderComponent } from './topbar-header.component';
import { ControlConnectingComponent } from './ui/connecting.component';
import { NextMeetingComponent } from './ui/next-meeting.component';

@Component({
    selector: 'app-control-main-view',
    template: `
        @if (system()?.connected) {
            @if (system()?.active) {
                <div class="bg-base-200 absolute inset-0 flex flex-col">
                    <topbar-header></topbar-header>
                    <div control-page-view></div>
                    <control-status-bar></control-status-bar>
                </div>
            } @else {
                <div
                    name="splash"
                    class="absolute inset-0 flex flex-col items-center justify-center text-white"
                    (click)="powerOn()"
                    (touchend)="powerOn()"
                >
                    <h2 class="mb-4 text-4xl font-light">
                        {{ 'APP.CONTROL.TOUCH_TO_START' | translate }}
                    </h2>
                    <p class="text-lg">{{ system()?.name }}</p>
                    <next-meeting class="mt-8" />
                    <div class="absolute bottom-0 left-0 p-2">
                        <div class="w-full text-xs opacity-60">
                            <ng-container
                                >{{ 'COMMON.CONTROLS_VERSION' | translate }}:
                            </ng-container>
                            <button
                                class="m-0 border-none bg-none p-0 text-xs underline"
                                [disabled]="!changelog_available()"
                                (click)="viewChangelog()"
                            >
                                {{ version.hash }}
                            </button>
                        </div>
                        <div class="w-full text-xs opacity-60">
                            {{ version.time | date: 'longDate' }}
                            ({{ version.time | date: 'shortTime' }})
                        </div>
                    </div>
                </div>
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

            [name='splash'] {
                animation: crossfade 10s linear;
                animation-iteration-count: infinite;
            }
        `,
    ],
    imports: [
        TopbarHeaderComponent,
        ControlPageViewComponent,
        ControlStatusBarComponent,
        ControlConnectingComponent,
        NextMeetingComponent,
        TranslatePipe,
        DatePipe,
    ],
})
export class ControlMainViewComponent {
    private _route = inject(ActivatedRoute);
    private _state = inject(ControlStateService);
    private _changelog = inject(ChangelogService);

    private readonly _param_map = toSignal(this._route.paramMap);
    private readonly _query_param_map = toSignal(this._route.queryParamMap);

    public readonly system = this._state.system;
    public readonly changelog_available = this._changelog.available;
    public readonly viewChangelog = () => this._changelog.view();

    public readonly powerOn = () => this._state.powerOn();
    public get id() {
        return this._state.id;
    }

    public get version() {
        return VERSION;
    }

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
