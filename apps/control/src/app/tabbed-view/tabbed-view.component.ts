import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

import { SettingsService } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';

import { OrganisationService } from '@placeos/common';
import { ControlStateService } from '../control-state.service';
import { ControlStatusBarComponent } from '../status-bar.component';
import { TopbarHeaderComponent } from '../topbar-header.component';
import { ControlConnectingComponent } from '../ui/connecting.component';
import { NextMeetingComponent } from '../ui/next-meeting.component';
import { SplashComponent } from '../ui/splash.component';
import { VoiceAssistantComponent } from '../ui/voice-assistant.component';
import { TabOutletComponent } from './tab-outlet.component';

@Component({
    selector: 'app-control-tabbed-view',
    template: `
        @if (system()?.connected) {
            @if (system()?.active) {
                <div
                    class="divide divide-base-200 bg-base-100 relative flex h-full w-full flex-col"
                >
                    <topbar-header></topbar-header>
                    <div class="bg-base-200 h-1/2 flex-1" tab-outlet></div>
                    <control-status-bar></control-status-bar>
                </div>
            } @else {
                <control-splash>
                    <next-meeting class="mt-8" />
                    <div
                        class="absolute right-4 bottom-4"
                        (click)="$event.stopPropagation()"
                    >
                        <voice-assistant
                            [system_id]="id()"
                            [enabled]="system()?.voice_control"
                        ></voice-assistant>
                    </div>
                </control-splash>
            }
            @if (!join_status()[0] && join_status()[1]) {
                <div
                    lockout
                    class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <div class="absolute top-4 left-4 z-0">
                        <img
                            auth
                            class="h-10"
                            alt="Logo"
                            [source]="logo()?.src || logo()"
                        />
                    </div>
                    <icon class="text-base-content relative z-10 text-8xl"
                        >lock</icon
                    >
                    <p class="text-base-content relative z-10 text-2xl">
                        {{ 'APP.CONTROL.ROOMS_JOINED' | translate }}
                    </p>
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
        `,
    ],
    imports: [
        TopbarHeaderComponent,
        TabOutletComponent,
        ControlStatusBarComponent,
        ControlConnectingComponent,
        NextMeetingComponent,
        TranslatePipe,
        IconComponent,
        AuthenticatedImageDirective,
        VoiceAssistantComponent,
        SplashComponent,
    ],
})
export class ControlTabbedViewComponent {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _state = inject(ControlStateService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    private readonly _param_map = toSignal(this._route.paramMap, {
        initialValue: this._route.snapshot.paramMap,
    });
    private readonly _query_param_map = toSignal(this._route.queryParamMap, {
        initialValue: this._route.snapshot.queryParamMap,
    });

    public readonly system = this._state.system;
    public readonly join_status = this._state.join_status;

    public readonly id = this._state.system_id;

    public readonly logo = computed(() => {
        this._org.active_building();
        return (
            (this._settings.theme === 'dark'
                ? this._settings.get('app.logo_dark')
                : this._settings.get('app.logo_light')) || {}
        );
    });

    constructor() {
        effect(() => {
            const params = this._param_map();
            if (params.has('system')) this._state.setID(params.get('system'));
        });

        effect(() => {
            const params = this._query_param_map();
            if (params.get('join') !== 'true') return;
            this._state.selectMeeting();
            // Open the meeting list once. Tab links merge query params.
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { join: null },
                queryParamsHandling: 'merge',
                replaceUrl: true,
            });
        });
    }
}
