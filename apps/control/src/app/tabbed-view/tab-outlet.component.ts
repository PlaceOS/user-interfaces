import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, log, nextValueFrom } from '@placeos/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { ControlStateService } from '../control-state.service';
import { VideoCallStateService } from '../video-call/video-call-state.service';

@Component({
    selector: 'tab-outlet,[tab-outlet]',
    template: `
        <i
            binding
            [sys]="id"
            mod="HearingAugmentation"
            bind="join_code"
            [(model)]="join_code"
        ></i>
        <div
            class="flex h-full w-full flex-col items-center space-y-2 overflow-auto px-2 py-2"
        >
            <div
                class="relative -mb-2 flex w-full items-center overflow-hidden px-1 !pt-2"
                [style.padding-right]="(join_code ? 6 : 0) + 'rem'"
            >
                <a
                    matRipple
                    class="mx-1 flex h-24 w-32 flex-col items-center justify-center overflow-hidden rounded-b-none rounded-t bg-base-100 leading-tight text-base-content opacity-60 shadow"
                    [routerLink]="['/tabbed', id, tab.id || tab.name]"
                    routerLinkActive="!opacity-100 !text-secondary"
                    queryParamsHandling="merge"
                    *ngFor="let tab of tabs | async"
                    (click)="onAction()"
                >
                    <app-icon class="text-5xl">{{ tab.icon }}</app-icon>
                    <p>{{ tab.name }}</p>
                </a>
                <div class="absolute bottom-2 right-0 top-0 flex space-x-2">
                    <voice-assistant
                        [system_id]="id"
                        [enabled]="(system$ | async)?.voice_control"
                    ></voice-assistant>
                    <div
                        class="flex w-20 flex-col rounded bg-base-100 p-2 shadow"
                        *ngIf="join_code"
                    >
                        <img
                            class="min-h-[4rem] w-16 overflow-hidden rounded border border-[hsl(217,62%,38%)]"
                            src="assets/loop.png"
                        />
                        <p class="text-center text-base-content">
                            {{ join_code }}
                        </p>
                    </div>
                </div>
            </div>
            <div
                class="flex h-1/2 w-full flex-1 items-center divide-x divide-base-200 rounded bg-base-100 text-base-content shadow"
            >
                <div
                    class="h-full w-64 space-y-2 overflow-auto px-4 pb-4 pt-2"
                    *ngIf="(inputs | async)?.length > 1"
                >
                    <h3 class="p-2 text-center text-lg font-medium">
                        {{ 'APP.CONTROL.INPUTS_AVAILABLE' | translate }}
                    </h3>
                    <button
                        btn
                        matRipple
                        class="w-full"
                        *ngFor="let input of inputs | async"
                        [class.inverse]="
                            (system$ | async)?.selected_input !==
                            (input.id || input.name)
                        "
                        (click)="setInput(input)"
                    >
                        {{ input?.name }}
                    </button>
                    <div
                        class="flex h-1/2 w-full flex-1 items-center justify-center p-8 opacity-30"
                        *ngIf="!(inputs | async)?.length"
                    >
                        {{ 'APP.CONTROL.INPUT_CATEGORY_EMPTY' | translate }}
                    </div>
                </div>
                <div
                    style="flex: 2"
                    class="relative h-full min-h-full overflow-auto"
                >
                    <ng-container [ngSwitch]="(tab | async)?.controls">
                        <ng-container *ngSwitchCase="'vidconf-controls'">
                            <ng-template #no_call_state>
                                <div class="flex justify-center space-x-8">
                                    <camera-controls
                                        *ngIf="!(speaker_track | async)"
                                    ></camera-controls>
                                    <video-call-dial-view
                                        class="mt-4 block"
                                        [redirect]="false"
                                    ></video-call-dial-view>
                                </div>
                            </ng-template>
                            <div
                                *ngIf="call | async; else no_call_state"
                                video-call-page
                                [present_output]="
                                    (tab | async)?.presentation_source
                                "
                                [redirect]="false"
                            ></div>
                        </ng-container>
                        <ng-container *ngSwitchCase="'tv-channels'">
                            <tv-controls
                                [mod]="(tab | async)?.mod"
                            ></tv-controls>
                        </ng-container>
                        <ng-container *ngSwitchDefault>
                            <div
                                class="p-8"
                                content
                                *ngIf="help | async"
                                [innerHTML]="
                                    (help | async).content | markdown | safe
                                "
                            ></div>
                            <div
                                *ngIf="!(help | async)"
                                class="flex h-full w-full items-center justify-center opacity-60"
                            >
                                <p>
                                    {{
                                        'APP.CONTROL.CONTROLS_EMPTY' | translate
                                    }}
                                </p>
                            </div>
                        </ng-container>
                    </ng-container>
                    <button
                        *ngIf="(tab | async)?.help && (tab | async)?.controls"
                        btn
                        matRipple
                        class="inverse black absolute right-4 top-4 w-32"
                        (click)="viewHelp()"
                    >
                        <div class="mr-2 flex items-center justify-center">
                            <app-icon>help</app-icon>
                            <div class="mx-2">
                                {{ 'APP.CONTROL.ACTION_HELP' | translate }}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div class="w-full">
                <device-output-list></device-output-list>
            </div>
        </div>
    `,
    styles: [
        `
            a {
                color: #000;
            }
        `,
    ],
    standalone: false,
})
export class TabOutletComponent extends AsyncHandler implements OnInit {
    public readonly active_tab = new BehaviorSubject('');
    public readonly system$ = this._service.system;
    public readonly tabs = this._service.tabs;
    public readonly call = this._vc_state.call;
    public readonly speaker_track = this._vc_state.speaker_track;
    public readonly tab = combineLatest([
        this._service.tabs,
        this.active_tab,
    ]).pipe(map(([_, id]) => _.find((t: any) => (t.id || t.name) === id)));

    public readonly inputs = combineLatest([
        this.active_tab,
        this.tabs,
        this._service.input_list,
    ]).pipe(
        map(([id, tabs, inputs]) => {
            const tab = tabs.find((_: any) => (_.id || _.name) === id);
            if (!tab) return [];
            return inputs.filter(
                (_) =>
                    (!tab.inputs && (!tab.type || _.type === tab.type)) ||
                    (tab.inputs && tab.inputs.includes(_.id)),
            );
        }),
    );

    private _user_action = false;

    public readonly help = combineLatest([
        this._service.help_items,
        this.tab,
    ]).pipe(map(([_, t]) => (_ || []).find((h: any) => h.id === t?.help)));

    public join_code = '';

    public setInput = (s) => this._service.setOutputSource(s.id);
    public viewHelp = async () =>
        this._service.viewHelp((await nextValueFrom(this.tab)).help);

    public get id() {
        return this._service.id;
    }

    constructor(
        private _service: ControlStateService,
        private _vc_state: VideoCallStateService,
        private _route: ActivatedRoute,
        private _router: Router,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) =>
                this.active_tab.next(
                    params.get('tab') || this.active_tab.getValue(),
                ),
            ),
        );
        this.subscription(
            'tab',
            this._service.system.subscribe((_) => {
                this.timeout(
                    'update_tab',
                    () => {
                        if (_.selected_tab) {
                            this.active_tab.next(_.selected_tab);
                            this._router.navigate(
                                ['/tabbed', this.id, _.selected_tab],
                                { queryParamsHandling: 'merge' },
                            );
                        }
                    },
                    500,
                );
            }),
        );
        this.subscription(
            'inputs',
            combineLatest([this.inputs, this.system$, this.tab])
                .pipe(debounceTime(300))
                .subscribe(([input_list, { selected_input }, tab]) => {
                    const has_selected = input_list.find(
                        (i) => (i.id || i.name) === selected_input,
                    );
                    if (has_selected || !this._user_action) return;
                    input_list.length
                        ? this._service.setSelectedInput(input_list[0].id)
                        : log(
                              'TABS',
                              'No available inputs to select on the tab.',
                              undefined,
                              'warn',
                          );
                }),
        );
    }

    public onAction() {
        if (this._user_action) return;
        this._user_action = true;
        setTimeout(() => (this._user_action = false), 1000);
    }
}
