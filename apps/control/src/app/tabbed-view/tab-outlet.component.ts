import { NgTemplateOutlet } from '@angular/common';
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
import { MobileLayoutService } from '../mobile-layout';
import { CameraControlsComponent } from '../ui/camera-controls.component';
import { MarkdownPipe } from '../ui/markdown.pipe';
import { ICON_MAP } from '../ui/output-display.component';
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
            <div class="flex w-[calc(100%-1rem)] px-1 pt-2">
                <nav tabs class="flex min-w-0 flex-1 overflow-x-auto">
                    @for (tab of tabs(); track tab) {
                        <a
                            matRipple
                            class="bg-base-100 text-base-content mx-1 flex h-16 w-20 shrink-0 flex-col items-center justify-center overflow-hidden rounded-t rounded-b-none leading-tight opacity-60 shadow-sm sm:h-24 sm:w-32"
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
                                class="text-3xl sm:text-5xl"
                                className="material-symbols-outlined"
                                >{{ tab.icon }}</icon
                            >
                            <p
                                class="max-w-full truncate px-1 text-xs sm:text-base"
                            >
                                {{ tab.name }}
                            </p>
                        </a>
                    }
                </nav>
                <div class="flex shrink-0 space-x-2 pb-2">
                    <voice-assistant
                        [system_id]="id()"
                        [enabled]="system()?.voice_control"
                    ></voice-assistant>
                    @if (join_code) {
                        <div class="max-h-full w-12 sm:w-16">
                            <div
                                class="bg-base-100 space-y-1 rounded-sm p-1 shadow-sm sm:p-2"
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
            @if (mobile()) {
                <div
                    mobile-content
                    class="mb-1 flex min-h-0 w-[calc(100%-1rem)] flex-1 flex-col space-y-2 overflow-auto"
                >
                    @if (inputs().length) {
                        <section
                            sources
                            class="bg-base-100 text-base-content shrink-0 overflow-hidden rounded-sm shadow-sm"
                        >
                            <h3
                                class="px-4 pt-3 pb-2 text-sm font-medium opacity-60"
                            >
                                {{ 'APP.CONTROL.INPUTS_AVAILABLE' | translate }}
                            </h3>
                            @for (
                                input of inputs();
                                track input.id || input.name
                            ) {
                                @let selected =
                                    system()?.selected_input ===
                                    (input.id || input.name);
                                @let shown = shown_on()[input.id];
                                <button
                                    source
                                    matRipple
                                    class="border-base-200 flex w-full items-center space-x-4 border-t px-4 py-3 text-left"
                                    [class.text-secondary]="selected"
                                    [attr.aria-pressed]="selected"
                                    (click)="pickSource(input)"
                                >
                                    <icon class="text-2xl">
                                        {{
                                            input.icon ||
                                                icons[input.type] ||
                                                'input'
                                        }}
                                    </icon>
                                    <div class="min-w-0 flex-1">
                                        <div class="truncate font-medium">
                                            {{ input.name }}
                                        </div>
                                        @if (shown) {
                                            <div
                                                class="text-base-content truncate text-sm opacity-60"
                                            >
                                                {{
                                                    'APP.CONTROL.DISPLAY_SHOWING'
                                                        | translate
                                                            : { names: shown }
                                                }}
                                            </div>
                                        }
                                    </div>
                                    @if (can_pick_display()) {
                                        <icon class="text-2xl opacity-40">
                                            chevron_right
                                        </icon>
                                    } @else if (selected) {
                                        <icon class="text-2xl">
                                            check_circle
                                        </icon>
                                    }
                                </button>
                            }
                            @if (outputs().length > 1) {
                                <div class="border-base-200 border-t p-4">
                                    <button
                                        btn
                                        matRipple
                                        clear-all
                                        class="inverse w-full space-x-2"
                                        [disabled]="!has_routes()"
                                        (click)="clearAll()"
                                    >
                                        <icon class="text-2xl">
                                            cancel_presentation
                                        </icon>
                                        <div class="pr-4">
                                            {{
                                                'APP.CONTROL.CLEAR_ALL'
                                                    | translate
                                            }}
                                        </div>
                                    </button>
                                </div>
                            }
                        </section>
                    }
                    @if (tab()?.controls || help()) {
                        <section
                            controls
                            class="bg-base-100 text-base-content relative shrink-0 rounded-sm shadow-sm"
                        >
                            @if (tab()?.help && tab()?.controls) {
                                <div class="flex justify-end p-2">
                                    <button
                                        btn
                                        matRipple
                                        class="inverse black w-32"
                                        (click)="viewHelp()"
                                    >
                                        <div
                                            class="mr-2 flex items-center justify-center"
                                        >
                                            <icon>help</icon>
                                            <div class="mx-2">
                                                {{
                                                    'APP.CONTROL.ACTION_HELP'
                                                        | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            }
                            <ng-container *ngTemplateOutlet="controls" />
                        </section>
                    } @else if (!inputs().length) {
                        <div
                            class="bg-base-100 text-base-content flex flex-1 items-center justify-center rounded-sm p-8 text-center opacity-60 shadow-sm"
                        >
                            <p>
                                {{ 'APP.CONTROL.CONTROLS_EMPTY' | translate }}
                            </p>
                        </div>
                    }
                </div>
            } @else {
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
                        <ng-container *ngTemplateOutlet="controls" />
                        @if (tab()?.help && tab()?.controls) {
                            <button
                                btn
                                matRipple
                                class="inverse black absolute top-4 right-4 w-32"
                                (click)="viewHelp()"
                            >
                                <div
                                    class="mr-2 flex items-center justify-center"
                                >
                                    <icon>help</icon>
                                    <div class="mx-2">
                                        {{
                                            'APP.CONTROL.ACTION_HELP'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        }
                    </div>
                </div>
                <div class="flex w-full items-center">
                    <device-output-list
                        class="min-w-0 flex-1"
                    ></device-output-list>
                    @if (outputs().length > 1) {
                        <div
                            output-actions
                            class="flex flex-col space-y-2 px-4"
                        >
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
                                        {{
                                            'APP.CONTROL.PRESENT_ALL'
                                                | translate
                                        }}
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
                                <icon class="text-2xl"
                                    >cancel_presentation</icon
                                >
                                <div class="pr-4">
                                    {{ 'APP.CONTROL.CLEAR_ALL' | translate }}
                                </div>
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
        <ng-template #controls>
            @switch (tab()?.controls) {
                @case ('vidconf-controls') {
                    @if (call()) {
                        <div
                            video-call-page
                            [reserve_top]="!!tab()?.help && !mobile()"
                            [present_output]="tab()?.presentation_source"
                            [redirect]="false"
                        ></div>
                    } @else {
                        <div
                            class="flex flex-col items-center sm:flex-row sm:items-stretch sm:justify-center sm:space-x-8"
                        >
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
                            class="p-4 sm:p-8"
                            content
                            [innerHTML]="help().content | markdown"
                        ></div>
                    }
                    @if (!help()) {
                        <div
                            class="flex h-full w-full items-center justify-center opacity-60"
                        >
                            <p>
                                {{ 'APP.CONTROL.CONTROLS_EMPTY' | translate }}
                            </p>
                        </div>
                    }
                }
            }
        </ng-template>
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
        NgTemplateOutlet,
    ],
})
export class TabOutletComponent extends AsyncHandler {
    private _service = inject(ControlStateService);
    private _vc_state = inject(VideoCallStateService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);

    public hearing_tloop = false;
    public readonly icons = ICON_MAP;
    /** Whether to show the phone layout */
    public readonly mobile = inject(MobileLayoutService).mobile;
    public readonly id = this._service.system_id;
    public readonly hide_present_all = this._service.hide_present_all;
    public readonly outputs = this._service.output_list;
    /** Whether any visible output has a source routed to it */
    public readonly has_routes = computed(() =>
        this.outputs().some((_) => !!_.source),
    );
    /** Whether a source on the phone layout opens the display list. Matches when the desktop shows the output list. */
    public readonly can_pick_display = computed(
        () => this.outputs().length > 1 || this._service.preview_outputs(),
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
    /** Names of the displays that show each input of the tab, keyed by input ID */
    public readonly shown_on = computed(() => {
        const outputs = this.outputs();
        const names: Record<string, string> = {};
        for (const input of this.inputs()) {
            names[input.id] = outputs
                .filter(
                    (_) =>
                        !!_.source &&
                        (_.source === input.id || _.source === input.ref),
                )
                .map((_) => _.name)
                .join(', ');
        }
        return names;
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

    /** Select a source on the phone layout, then ask which display shows it */
    public pickSource(input: RoomInput) {
        this.setInput(input);
        if (this.can_pick_display()) this._service.selectDisplay(input.id);
    }

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
