import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AsyncHandler, log } from '@placeos/common';
import {
    BindingDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { map } from 'rxjs/operators';
import { ControlStateService, RoomInput } from '../control-state.service';
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
            [sys]="id()"
            mod="HearingAugmentation"
            bind="join_code"
            [(model)]="join_code"
        ></i>
        <i
            binding
            [sys]="id()"
            mod="HearingAugmentation"
            bind="has_t_coil"
            [(model)]="hearing_tloop"
        ></i>
        <div class="flex h-full w-full flex-col items-center p-1">
            <div
                class="relative flex w-[calc(100%-1rem)] items-center overflow-hidden px-1 pt-2"
                [style.padding-right]="(join_code ? 6 : 0) + 'rem'"
            >
                @for (tab of tabs(); track tab) {
                    <a
                        matRipple
                        class="bg-base-100 text-base-content mx-1 flex h-24 w-32 flex-col items-center justify-center overflow-hidden rounded-t rounded-b-none leading-tight opacity-60 shadow-sm"
                        [routerLink]="['/tabbed', id(), tab.id || tab.name]"
                        [class.opacity-100!]="
                            (tab.id || tab.name) === active_tab()
                        "
                        [class.text-secondary!]="
                            (tab.id || tab.name) === active_tab()
                        "
                        [attr.aria-current]="
                            (tab.id || tab.name) === active_tab()
                                ? 'page'
                                : null
                        "
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
                        [system_id]="id()"
                        [enabled]="system()?.voice_control"
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
                                    {{ join_code }}
                                </p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div
                class="divide-base-200 bg-base-100 text-base-content mb-1 flex h-1/2 w-[calc(100%-1rem)] flex-1 items-center divide-x overflow-auto rounded-sm shadow-sm"
            >
                @if (inputs().length > 1) {
                    <div
                        class="h-full w-64 min-w-64 space-y-2 overflow-auto px-4 pt-2 pb-4 sm:min-w-0"
                    >
                        <h3 class="p-2 text-center text-lg font-medium">
                            {{ 'APP.CONTROL.INPUTS_AVAILABLE' | translate }}
                        </h3>
                        @for (input of inputs(); track input) {
                            <button
                                btn
                                matRipple
                                class="w-full"
                                [class.inverse]="
                                    system()?.selected_input !==
                                    (input.id || input.name)
                                "
                                (click)="setInput(input)"
                            >
                                {{ input?.name }}
                            </button>
                        }
                    </div>
                }
                <div
                    style="flex: 2"
                    class="relative h-full min-h-full min-w-full overflow-auto sm:min-w-0"
                >
                    @switch (tab()?.controls) {
                        @case ('vidconf-controls') {
                            @if (call()) {
                                <div
                                    video-call-page
                                    [class.pt-16]="!!tab()?.help"
                                    [present_output]="
                                        tab()?.presentation_source
                                    "
                                    [redirect]="false"
                                ></div>
                            } @else {
                                <div class="flex justify-center space-x-8">
                                    @if (!speaker_track()) {
                                        <camera-controls></camera-controls>
                                    }
                                    <video-call-dial-view
                                        class="mt-4 block"
                                    ></video-call-dial-view>
                                </div>
                            }
                        }
                        @case ('tv-channels') {
                            <tv-controls [mod]="tab()?.mod"></tv-controls>
                        }
                        @default {
                            @if (help()) {
                                <div
                                    class="p-8"
                                    content
                                    [innerHTML]="help().content | markdown"
                                ></div>
                            }
                            @if (!help()) {
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
                    @if (tab()?.help && tab()?.controls) {
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
            <div class="flex w-full items-center">
                <device-output-list class="min-w-0 flex-1"></device-output-list>
                @if (outputs().length > 1) {
                    <div output-actions class="flex flex-col space-y-2 px-4">
                        @if (hide_present_all() !== true) {
                            <button
                                btn
                                matRipple
                                present-all
                                class="space-x-2"
                                (click)="presentToAll()"
                            >
                                <icon class="text-2xl">output</icon>
                                <div class="pr-4">
                                    {{ 'APP.CONTROL.PRESENT_ALL' | translate }}
                                </div>
                            </button>
                        }
                        <button
                            btn
                            matRipple
                            clear-all
                            class="inverse space-x-2"
                            [disabled]="!has_routes()"
                            (click)="clearAll()"
                        >
                            <icon class="text-2xl">cancel_presentation</icon>
                            <div class="pr-4">
                                {{ 'APP.CONTROL.CLEAR_ALL' | translate }}
                            </div>
                        </button>
                    </div>
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
        BindingDirective,
        MatRippleModule,
        IconComponent,
        DeviceOutputListComponent,
        TranslatePipe,
        MarkdownPipe,
        TVControlsComponent,
        VideoCallDialViewComponent,
        CameraControlsComponent,
        VideoCallPageComponent,
        VoiceAssistantComponent,
        RouterModule,
    ],
})
export class TabOutletComponent extends AsyncHandler {
    private _service = inject(ControlStateService);
    private _vc_state = inject(VideoCallStateService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);

    public hearing_tloop = false;
    public readonly id = this._service.system_id;
    public readonly hide_present_all = this._service.hide_present_all;
    public readonly outputs = this._service.output_list;
    /** Whether any visible output has a source routed to it */
    public readonly has_routes = computed(() =>
        this.outputs().some((_) => !!_.source),
    );
    public readonly system = this._service.system;
    public readonly tabs = this._service.tabs;
    public readonly call = this._vc_state.call;
    public readonly speaker_track = this._vc_state.speaker_track;
    public readonly tab = computed(() =>
        this.tabs().find((t) => (t.id || t.name) === this.active_tab()),
    );

    /** Inputs for the active tab: its listed inputs, or else inputs of its type */
    public readonly inputs = computed(() => {
        const tab = this.tab();
        if (!tab) return [];
        return this._available_inputs().filter((_) =>
            tab.inputs
                ? tab.inputs.includes(_.id)
                : !tab.type || _.type === tab.type,
        );
    });

    /** Route tab, then the driver's selected tab, then the first tab */
    public readonly active_tab = computed(() => {
        const first = this.tabs()[0];
        return (
            this._route_tab() ||
            this._selected_tab() ||
            first?.id ||
            first?.name ||
            ''
        );
    });
    private _user_action = signal(false);
    /** Driver's selected tab. A separate computed so other system changes do not re-run the tab sync. */
    private _selected_tab = computed(() => this.system()?.selected_tab);
    private _available_inputs = this._service.available_inputs;
    private _route_tab = toSignal(
        this._route.paramMap.pipe(map((params) => params.get('tab') || '')),
        { initialValue: '' },
    );

    public readonly help = computed(() => {
        const tab = this.tab();
        return (this._help_items() || []).find((h: any) => h.id === tab?.help);
    });
    private _help_items = this._service.help_items;

    public join_code = '';

    public setInput = (input: RoomInput) =>
        this._service.setOutputSource(input.id);
    public viewHelp = () => this._service.viewHelp(this.tab()?.help);

    constructor() {
        super();
        effect(() => {
            const selected_tab = this._selected_tab();
            this.timeout(
                'update_tab',
                () => {
                    if (selected_tab) {
                        this._router.navigate(
                            ['/tabbed', this.id(), selected_tab],
                            {
                                queryParamsHandling: 'merge',
                            },
                        );
                    }
                },
                500,
            );
        });
        // Select the first input of the tab when the user changes tab and
        // the selected input is not on it
        effect(() => {
            const input_list = this.inputs();
            const selected_input = this.system()?.selected_input;
            const user_action = this._user_action();
            this.timeout(
                'inputs',
                () => {
                    const has_selected = input_list.find(
                        (i) => (i.id || i.name) === selected_input,
                    );
                    if (has_selected || !user_action) return;
                    input_list.length
                        ? this._service.setSelectedInput(input_list[0].id)
                        : log(
                              'TABS',
                              'No available inputs to select on the tab.',
                              undefined,
                              'warn',
                          );
                },
                300,
            );
        });
    }

    public presentToAll() {
        const tab = this.tab();
        if (!tab) return;
        this._service.routeToAll();
    }

    public clearAll() {
        this._service.unrouteAll();
    }

    public onAction() {
        if (this._user_action()) return;
        this._user_action.set(true);
        setTimeout(() => this._user_action.set(false), 1000);
    }
}
