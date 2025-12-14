import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AsyncHandler, log, nextValueFrom } from '@placeos/common';
import {
    BindingDirective,
    IconComponent,
    SafePipe,
    TranslatePipe,
} from '@placeos/components';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { ControlStateService } from '../control-state.service';
import { CameraControlsComponent } from '../ui/camera-controls.component';
import { MarkdownPipe } from '../ui/markdown.pipe';
import { VoiceAssistantComponent } from '../ui/voice-assistant.component';
import { VideoCallDialViewComponent } from '../video-call/video-call-dial-view.component';
import { VideoCallPageComponent } from '../video-call/video-call-page.component';
import { VideoCallStateService } from '../video-call/video-call-state.service';
import { DeviceOutputListComponent } from './output-list.component';
import { TVControlsComponent } from './tv-controls.component';

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
        <i
            binding
            [sys]="id"
            mod="HearingAugmentation"
            bind="has_t_coil"
            [(model)]="hearing_tloop"
        ></i>
        <div class="flex h-full w-full flex-col items-center p-1">
            <div
                class="relative flex w-[calc(100%-1rem)] items-center overflow-hidden px-1 pt-2"
                [style.padding-right]="(join_code ? 6 : 0) + 'rem'"
            >
                @for (tab of tabs | async; track tab) {
                    <a
                        matRipple
                        class="bg-base-100 text-base-content mx-1 flex h-24 w-32 flex-col items-center justify-center overflow-hidden rounded-t rounded-b-none leading-tight opacity-60 shadow-sm"
                        [routerLink]="['/tabbed', id, tab.id || tab.name]"
                        routerLinkActive="opacity-100! text-secondary!"
                        queryParamsHandling="merge"
                        (click)="onAction()"
                    >
                        <icon
                            class="text-5xl"
                            className="material-symbols-outlined"
                            >{{ tab.icon }}</icon
                        >
                        <p>{{ tab.name }}</p>
                    </a>
                }
                <div class="absolute top-0 right-0 bottom-2 flex space-x-2">
                    <voice-assistant
                        [system_id]="id"
                        [enabled]="(system$ | async)?.voice_control"
                    ></voice-assistant>
                    @if (join_code) {
                        <div class="max-h-full w-16">
                            <div
                                class="bg-base-100 space-y-1 rounded-sm p-2 shadow-sm"
                            >
                                <img
                                    class="w-16 overflow-hidden rounded-sm border border-[hsl(217,62%,38%)]"
                                    [src]="
                                        hearing_tloop
                                            ? 'assets/loop_t.png'
                                            : 'assets/loop.png'
                                    "
                                />
                                <p
                                    class="text-base-content text-center font-mono text-xs"
                                >
                                    {{ join_code || '=CODE=' }}
                                </p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div
                class="divide-base-200 bg-base-100 text-base-content mb-1 flex h-1/2 w-[calc(100%-1rem)] flex-1 items-center divide-x overflow-auto rounded-sm shadow-sm"
            >
                @if ((inputs | async)?.length > 1) {
                    <div
                        class="h-full w-64 min-w-64 space-y-2 overflow-auto px-4 pt-2 pb-4 sm:min-w-0"
                    >
                        <h3 class="p-2 text-center text-lg font-medium">
                            {{ 'APP.CONTROL.INPUTS_AVAILABLE' | translate }}
                        </h3>
                        @for (input of inputs | async; track input) {
                            <button
                                btn
                                matRipple
                                class="w-full"
                                [class.inverse]="
                                    (system$ | async)?.selected_input !==
                                    (input.id || input.name)
                                "
                                (click)="setInput(input)"
                            >
                                {{ input?.name }}
                            </button>
                        }
                        @if (!(inputs | async)?.length) {
                            <div
                                class="flex h-1/2 w-full flex-1 items-center justify-center p-8 opacity-30"
                            >
                                {{
                                    'APP.CONTROL.INPUT_CATEGORY_EMPTY'
                                        | translate
                                }}
                            </div>
                        }
                    </div>
                }
                <div
                    style="flex: 2"
                    class="relative h-full min-h-full min-w-full overflow-auto sm:min-w-0"
                >
                    @switch ((tab | async)?.controls) {
                        @case ('vidconf-controls') {
                            @if (call | async) {
                                <div
                                    video-call-page
                                    [present_output]="
                                        (tab | async)?.presentation_source
                                    "
                                    [redirect]="false"
                                ></div>
                            } @else {
                                <div class="flex justify-center space-x-8">
                                    @if (!(speaker_track | async)) {
                                        <camera-controls></camera-controls>
                                    }
                                    <video-call-dial-view
                                        class="mt-4 block"
                                        [redirect]="false"
                                    ></video-call-dial-view>
                                </div>
                            }
                        }
                        @case ('tv-channels') {
                            <tv-controls
                                [mod]="(tab | async)?.mod"
                            ></tv-controls>
                        }
                        @default {
                            @if (help | async) {
                                <div
                                    class="p-8"
                                    content
                                    [innerHTML]="
                                        (help | async).content | markdown | safe
                                    "
                                ></div>
                            }
                            @if (!(help | async)) {
                                <div
                                    class="flex h-full w-full items-center justify-center opacity-60"
                                >
                                    <p>
                                        {{
                                            'APP.CONTROL.CONTROLS_EMPTY'
                                                | translate
                                        }}
                                    </p>
                                </div>
                            }
                        }
                    }
                    @if ((tab | async)?.help && (tab | async)?.controls) {
                        <button
                            btn
                            matRipple
                            class="inverse black absolute top-4 right-4 w-32"
                            (click)="viewHelp()"
                        >
                            <div class="mr-2 flex items-center justify-center">
                                <icon>help</icon>
                                <div class="mx-2">
                                    {{ 'APP.CONTROL.ACTION_HELP' | translate }}
                                </div>
                            </div>
                        </button>
                    }
                </div>
            </div>
            <div class="relative w-full">
                <device-output-list></device-output-list>
                @if (
                    (hide_present_all | async) !== true &&
                    (outputs | async).length > 1
                ) {
                    <button
                        btn
                        matRipple
                        class="absolute -bottom-14 left-4 z-20 space-x-2"
                        (click)="presentToAll()"
                    >
                        <icon class="text-2xl">output</icon>
                        <div class="pr-4">Present to all</div>
                    </button>
                }
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
    imports: [
        CommonModule,
        BindingDirective,
        MatRippleModule,
        IconComponent,
        DeviceOutputListComponent,
        TranslatePipe,
        MarkdownPipe,
        SafePipe,
        TVControlsComponent,
        VideoCallDialViewComponent,
        CameraControlsComponent,
        VideoCallPageComponent,
        VoiceAssistantComponent,
        RouterModule,
    ],
})
export class TabOutletComponent extends AsyncHandler implements OnInit {
    private _service = inject(ControlStateService);
    private _vc_state = inject(VideoCallStateService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);

    public hearing_tloop = false;
    public readonly active_tab = new BehaviorSubject('');
    public readonly hide_present_all = this._service.hide_present_all;
    public readonly outputs = this._service.output_list.pipe(
        map((_) => _ || []),
    );
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
        this._service.available_inputs,
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

    public async presentToAll() {
        const tab = await nextValueFrom(this.tab);
        if (!tab) return;
        this._service.routeToAll();
    }

    public onAction() {
        if (this._user_action) return;
        this._user_action = true;
        setTimeout(() => (this._user_action = false), 1000);
    }
}
